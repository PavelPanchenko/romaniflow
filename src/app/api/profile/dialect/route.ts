import { NextResponse } from "next/server";
import { z } from "zod";
import { Dialect } from "@prisma/client";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/session";
import { DIALECTS } from "@/lib/dialects";

const schema = z.object({
  dialect: z.nativeEnum(Dialect)
});

export async function POST(request: Request) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Не авторизован" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Некорректный диалект" }, { status: 400 });
  }

  const meta = DIALECTS.find((d) => d.code === parsed.data.dialect);
  if (!meta) {
    return NextResponse.json({ error: "Неизвестный диалект" }, { status: 400 });
  }

  await db.user.update({
    where: { id: user.id },
    data: { preferredDialect: parsed.data.dialect }
  });

  return NextResponse.json({ ok: true, dialect: parsed.data.dialect });
}
