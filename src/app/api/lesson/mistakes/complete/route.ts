import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/session";

// Synthetic-lesson endpoint for mistakes review. The trainer sends every
// word that appeared in the session (`allWords`) plus the subset still
// answered wrong (`mistakes`). Anything in allWords \ mistakes was answered
// correctly this round and gets pruned from every LessonProgress.mistakes
// pool the user owns. We do not write a LessonProgress row — this is a
// synthetic lesson with no stable id.
const completeSchema = z.object({
  score: z.number().int().min(0).max(100),
  mistakes: z.array(z.string()).default([]),
  allWords: z.array(z.string()).default([])
});

export async function POST(request: Request) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const parsed = completeSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Некорректные данные" }, { status: 400 });
  }

  const stillWrong = new Set(parsed.data.mistakes);
  const correctlyAnswered = new Set(
    parsed.data.allWords.filter((w) => !stillWrong.has(w))
  );

  if (correctlyAnswered.size === 0) {
    return NextResponse.json({ ok: true, prunedFrom: 0 });
  }

  // Prune correctly-answered words from every progress row this user owns.
  // We touch only rows that mention at least one of the words; the in-memory
  // filter is small (typically <100 entries) so we don't push complex SQL.
  const candidates = await db.lessonProgress.findMany({
    where: {
      userId: user.id,
      mistakes: { hasSome: [...correctlyAnswered] }
    },
    select: { id: true, mistakes: true }
  });

  let prunedFrom = 0;
  for (const row of candidates) {
    const next = row.mistakes.filter((m) => !correctlyAnswered.has(m));
    if (next.length === row.mistakes.length) continue;
    await db.lessonProgress.update({
      where: { id: row.id },
      data: { mistakes: next }
    });
    prunedFrom++;
  }

  return NextResponse.json({ ok: true, prunedFrom });
}
