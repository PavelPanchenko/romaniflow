import { NextResponse } from "next/server";
import { ProgressStatus } from "@prisma/client";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/session";

type Props = { params: Promise<{ lessonId: string }> };

/**
 * Фиксирует первое взаимодействие с уроком (переворот карточки / ответ в квизе),
 * чтобы дашборд мог отличить «ещё не трогали» от «уже начали».
 */
export async function POST(_request: Request, { params }: Props) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { lessonId } = await params;
  const lesson = await db.lesson.findUnique({
    where: { id: lessonId },
    select: { id: true }
  });
  if (!lesson) {
    return NextResponse.json({ error: "Урок не найден" }, { status: 404 });
  }

  const existing = await db.lessonProgress.findUnique({
    where: { userId_lessonId: { userId: user.id, lessonId } }
  });
  if (existing?.status === ProgressStatus.COMPLETED) {
    return NextResponse.json({ ok: true });
  }

  const now = new Date();
  await db.lessonProgress.upsert({
    where: { userId_lessonId: { userId: user.id, lessonId } },
    create: {
      userId: user.id,
      lessonId,
      status: ProgressStatus.IN_PROGRESS,
      startedAt: now
    },
    update: {
      status: ProgressStatus.IN_PROGRESS,
      startedAt: existing?.startedAt ?? now
    }
  });

  return NextResponse.json({ ok: true });
}
