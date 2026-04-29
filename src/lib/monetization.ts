import { SubscriptionStatus } from "@prisma/client";
import { db } from "@/lib/db";

const PREMIUM_ENTITLEMENT = "content.premium";

export async function hasPremiumAccess(userId: string): Promise<boolean> {
  const activeSubscription = await db.subscription.findFirst({
    where: {
      userId,
      status: {
        in: [SubscriptionStatus.ACTIVE, SubscriptionStatus.TRIALING]
      }
    },
    include: {
      plan: {
        include: {
          entitlements: true
        }
      }
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  if (!activeSubscription) {
    return false;
  }

  return activeSubscription.plan.entitlements.some((item) => item.key === PREMIUM_ENTITLEMENT);
}
