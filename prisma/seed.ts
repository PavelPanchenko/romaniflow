import { PrismaClient, BillingInterval, Dialect, SubscriptionStatus } from "@prisma/client";
import bcrypt from "bcryptjs";
import { CURRENT_COURSE_SLUGS, courses } from "./seeds/course-catalog";
import { seedConcepts } from "./seeds/concepts/seed";
import { seedForms } from "./seeds/forms/seed";
import { buildLessons } from "./seeds/build-lessons";

const prisma = new PrismaClient();

async function main() {
  // Plans — Free остаётся как тариф по умолчанию для новых регистраций
  await prisma.plan.upsert({
    where: { code: "free" },
    update: {},
    create: {
      code: "free",
      name: "Free",
      description: "Базовый доступ к курсу",
      isDefault: true,
      priceCents: 0,
      billingInterval: BillingInterval.MONTHLY,
      entitlements: {
        create: [{ key: "content.basic", description: "Доступ к базовым урокам" }]
      }
    }
  });

  const proPlan = await prisma.plan.upsert({
    where: { code: "pro" },
    update: {},
    create: {
      code: "pro",
      name: "Pro",
      description: "Полный курс и расширенные тренировки",
      priceCents: 990,
      billingInterval: BillingInterval.MONTHLY,
      entitlements: {
        create: [
          { key: "content.basic", description: "Доступ к базовым урокам" },
          { key: "content.premium", description: "Доступ к премиум-урокам" }
        ]
      }
    }
  });

  // Course rows. Modules + lessons themselves are produced deterministically
  // by `buildLessons` from the current Concept + DialectForm data.
  for (const courseSeed of courses) {
    await prisma.course.upsert({
      where: { slug: courseSeed.slug },
      update: {
        title: courseSeed.title,
        description: courseSeed.description,
        dialect: courseSeed.dialect,
        shortLabel: courseSeed.shortLabel,
        isAvailable: courseSeed.isAvailable
      },
      create: {
        slug: courseSeed.slug,
        title: courseSeed.title,
        description: courseSeed.description,
        dialect: courseSeed.dialect,
        shortLabel: courseSeed.shortLabel,
        isAvailable: courseSeed.isAvailable
      }
    });
  }
  const staleCourses = await prisma.course.deleteMany({
    where: { slug: { notIn: CURRENT_COURSE_SLUGS } }
  });
  if (staleCourses.count) {
    console.log(`  ✂ stale courses pruned: ${staleCourses.count}`);
  }

  // Demo user, with Servy preselected
  const passwordHash = await bcrypt.hash("demo12345", 10);
  const demoUser = await prisma.user.upsert({
    where: { email: "demo@romaniflow.app" },
    update: { preferredDialect: Dialect.SERVY },
    create: {
      email: "demo@romaniflow.app",
      name: "Demo User",
      passwordHash,
      preferredDialect: Dialect.SERVY
    }
  });

  // Demo получает полный Pro-доступ — чтобы все модули, включая премиальные,
  // были видны без подписки сразу после seed.
  await prisma.subscription.upsert({
    where: { id: "demo-subscription" },
    update: {
      planId: proPlan.id,
      status: SubscriptionStatus.ACTIVE,
      currentPeriodStart: new Date(),
      currentPeriodEnd: null
    },
    create: {
      id: "demo-subscription",
      userId: demoUser.id,
      planId: proPlan.id,
      status: SubscriptionStatus.ACTIVE,
      currentPeriodStart: new Date()
    }
  });

  console.log(`✦ courses: ${courses.length} upserted`);

  const conceptSeed = await seedConcepts(prisma);
  console.log(
    `✦ concepts: ${conceptSeed.enriched} enriched · ${conceptSeed.created} created · ${conceptSeed.reslugged} reslugged · ${conceptSeed.pruned} pruned`
  );

  const formSeed = await seedForms(prisma);
  console.log(`✦ forms: ${formSeed.upserted} upserted · ${formSeed.pruned} pruned`);
  if (formSeed.skipped.length) {
    console.log(`  ⚠ ${formSeed.skipped.length} skipped (no concept match):`);
    for (const s of formSeed.skipped) {
      console.log(`    ${s.conceptSlug} [${s.dialect}] ${s.romaniWord}`);
    }
  }

  const lessonBuild = await buildLessons(prisma);
  console.log(
    `✦ lessons: ${lessonBuild.modules} modules · ${lessonBuild.lessons} lessons · ${lessonBuild.items} items across ${lessonBuild.courses} courses`
  );
  if (lessonBuild.prunedModules || lessonBuild.prunedEmptyLessons) {
    console.log(
      `  ✂ pruned: ${lessonBuild.prunedModules} stale modules, ${lessonBuild.prunedEmptyLessons} surplus lessons`
    );
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
