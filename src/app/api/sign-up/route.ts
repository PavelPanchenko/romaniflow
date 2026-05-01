import { BillingInterval, SubscriptionStatus } from "@prisma/client";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const DEFAULT_PLAN_CODE = "free";
const DEFAULT_PLAN_NAME = "Free";
const DEFAULT_PLAN_DESCRIPTION = "Базовый доступ к курсу";
const DEFAULT_ENTITLEMENT_KEY = "content.basic";
const DEFAULT_ENTITLEMENT_DESCRIPTION = "Доступ к базовым урокам";

const signUpSchema = z.object({
  name: z.string().min(2).max(80).optional(),
  email: z.string().email(),
  password: z.string().min(8)
});

async function resolveDefaultPlan() {
  const existingDefault = await db.plan.findFirst({ where: { isDefault: true } });
  if (existingDefault) {
    return existingDefault;
  }

  const freePlan = await db.plan.upsert({
    where: { code: DEFAULT_PLAN_CODE },
    update: {
      isDefault: true
    },
    create: {
      code: DEFAULT_PLAN_CODE,
      name: DEFAULT_PLAN_NAME,
      description: DEFAULT_PLAN_DESCRIPTION,
      isDefault: true,
      priceCents: 0,
      billingInterval: BillingInterval.MONTHLY
    }
  });

  await db.entitlement.upsert({
    where: {
      planId_key: {
        planId: freePlan.id,
        key: DEFAULT_ENTITLEMENT_KEY
      }
    },
    update: {
      description: DEFAULT_ENTITLEMENT_DESCRIPTION
    },
    create: {
      planId: freePlan.id,
      key: DEFAULT_ENTITLEMENT_KEY,
      description: DEFAULT_ENTITLEMENT_DESCRIPTION
    }
  });

  return freePlan;
}

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

  const defaultPlan = await resolveDefaultPlan();

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
      status: SubscriptionStatus.ACTIVE,
      currentPeriodStart: new Date()
    }
  });

  return NextResponse.json({ ok: true });
}
