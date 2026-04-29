import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/session";

/**
 * Wipes the caller's `LessonProgress` rows for the lessons of their currently
 * selected dialect's course. Other dialects' progress (e.g. if the user once
 * tried Vlax) is left untouched — switch dialect first to reset that one.
 *
 * Idempotent: re-running on an already-clean slate returns count=0.
 */
export async function POST() {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Не авторизован" }, { status: 401 });
  }

  const dbUser = await db.user.findUnique({
    where: { id: user.id },
    select: { preferredDialect: true }
  });
  if (!dbUser?.preferredDialect) {
    return NextResponse.json({ error: "Диалект не выбран" }, { status: 400 });
  }

  const result = await db.lessonProgress.deleteMany({
    where: {
      userId: user.id,
      lesson: {
        module: { course: { dialect: dbUser.preferredDialect } }
      }
    }
  });

  return NextResponse.json({ ok: true, deleted: result.count });
}
