import { NextResponse } from "next/server";
import { LessonType, ProgressStatus } from "@prisma/client";
import { z } from "zod";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/session";

const completeSchema = z.object({
  score: z.number().int().min(0).max(100),
  mistakes: z.array(z.string()).default([])
});

type Props = {
  params: Promise<{ lessonId: string }>;
};

export async function POST(request: Request, { params }: Props) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { lessonId } = await params;
  const parsed = completeSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Некорректные данные" }, { status: 400 });
  }

  const lesson = await db.lesson.findUnique({
    where: { id: lessonId },
    select: { id: true, moduleId: true, order: true, type: true }
  });
  if (!lesson) {
    return NextResponse.json({ error: "Урок не найден" }, { status: 404 });
  }

  const ids: string[] = [lesson.id];

  // The FLASHCARDS lesson runs an embedded quiz at the end with the same
  // word set as the paired QUIZ lesson (same module, order+1, built by
  // build-lessons.ts). The user passing that embedded quiz already proves
  // recall — making them redo an identical quiz on the next card felt like
  // a bug to users. Auto-complete the paired QUIZ with the same result.
  if (lesson.type === LessonType.FLASHCARDS) {
    const paired = await db.lesson.findUnique({
      where: {
        moduleId_order: { moduleId: lesson.moduleId, order: lesson.order + 1 }
      },
      select: { id: true, type: true }
    });
    if (paired && paired.type === LessonType.QUIZ) {
      ids.push(paired.id);
    }
  }

  const now = new Date();
  for (const id of ids) {
    await db.lessonProgress.upsert({
      where: { userId_lessonId: { userId: user.id, lessonId: id } },
      update: {
        status: ProgressStatus.COMPLETED,
        score: parsed.data.score,
        mistakes: parsed.data.mistakes,
        finishedAt: now
      },
      create: {
        userId: user.id,
        lessonId: id,
        status: ProgressStatus.COMPLETED,
        score: parsed.data.score,
        mistakes: parsed.data.mistakes,
        startedAt: now,
        finishedAt: now
      }
    });
  }

  return NextResponse.json({ ok: true, completed: ids.length });
}
