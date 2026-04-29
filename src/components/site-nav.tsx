"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "@/components/brand-mark";
import { SignOutButton } from "@/components/sign-out-button";

type Props = {
  variant?: "marketing" | "app";
  authed?: boolean;
};

export function SiteNav({ variant = "marketing", authed = false }: Props) {
  const pathname = usePathname() ?? "";
  // Auto-hide nav links that point to the page the user is already on, e.g.
  // the "Прогресс" link on the dashboard or "Тарифы" on /pricing.
  const isOn = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-nav reveal reveal-1">
      <BrandMark />
      <nav className="nav-links">
        {variant === "marketing" ? (
          <>
            <Link href="/#features">Возможности</Link>
            <Link href="/#dialects">Диалекты</Link>
            <Link href="/pricing">Тарифы</Link>
            {authed ? (
              <>
                <Link href="/dashboard" className="btn btn-ink" style={{ padding: "10px 16px" }}>
                  К урокам
                </Link>
                <SignOutButton />
              </>
            ) : (
              <Link href="/sign-in" className="btn btn-ink" style={{ padding: "10px 16px" }}>
                Войти
              </Link>
            )}
          </>
        ) : (
          <>
            {!isOn("/dashboard") ? <Link href="/dashboard">Прогресс</Link> : null}
            {!isOn("/pricing") ? <Link href="/pricing">Тарифы</Link> : null}
            {authed ? <SignOutButton /> : null}
          </>
        )}
      </nav>
    </header>
  );
}
