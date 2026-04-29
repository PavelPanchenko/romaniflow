import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const signUpSchema = z.object({
  name: z.string().min(2).max(80).optional(),
  email: z.string().email(),
  password: z.string().min(8)
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = signUpSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Некорректные данные" }, { status: 400 });
  }

  const existing = await db.user.findUnique({ where: { email: parsed.data.email } });
  if (existing) {
    return NextResponse.json({ error: "Пользователь уже существует" }, { status: 409 });
  }

  const defaultPlan = await db.plan.findFirst({ where: { isDefault: true } });
  if (!defaultPlan) {
    return NextResponse.json({ error: "Не настроен базовый план" }, { status: 500 });
  }

  const passwordHash = await hash(parsed.data.password, 10);
  const user = await db.user.create({
    data: {
      name: parsed.data.name,
      email: parsed.data.email,
      passwordHash
    }
  });

  await db.subscription.create({
    data: {
      userId: user.id,
      planId: defaultPlan.id,
      status: "ACTIVE",
      currentPeriodStart: new Date()
    }
  });

  return NextResponse.json({ ok: true });
}
