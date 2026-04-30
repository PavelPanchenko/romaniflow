"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { SignOutButton } from "@/components/sign-out-button";
import { button, cx, nav, reveal } from "@/lib/ui-classes";

type Props = {
  variant?: "marketing" | "app";
  authed?: boolean;
};

export function SiteNav({ variant = "marketing", authed = false }: Props) {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);
  const menuId = useId();
  // Auto-hide nav links that point to the page the user is already on, e.g.
  // the "Прогресс" link on the dashboard or "Тарифы" on /pricing.
  const isOn = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const close = useCallback(() => setOpen(false), []);
  useEffect(() => {
    close();
  }, [pathname, close]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  const marketingBlock = (
    <>
      <Link href="/#features" className={nav.link} onClick={close}>
        Возможности
      </Link>
      <Link href="/#dialects" className={nav.link} onClick={close}>
        Диалекты
      </Link>
      <Link href="/pricing" className={nav.link} onClick={close}>
        Тарифы
      </Link>
      {authed ? (
        <>
          <Link
            href="/dashboard"
            className={cx(button.ink, button.compact, "nav-cta max-[720px]:min-h-11 max-[720px]:justify-center")}
            onClick={close}
          >
            К урокам
          </Link>
          <SignOutButton />
        </>
      ) : (
        <Link
          href="/sign-in"
          className={cx(button.ink, button.compact, "nav-cta max-[720px]:min-h-11 max-[720px]:justify-center")}
          onClick={close}
        >
          Войти
        </Link>
      )}
    </>
  );

  const appBlock = (
    <>
      {!isOn("/dashboard") ? (
        <Link href="/dashboard" className={nav.link} onClick={close}>
          Прогресс
        </Link>
      ) : null}
      {!isOn("/pricing") ? (
        <Link href="/pricing" className={nav.link} onClick={close}>
          Тарифы
        </Link>
      ) : null}
      {authed ? <SignOutButton /> : null}
    </>
  );

  return (
    <header className={cx(nav.root, reveal[1], open && "site-nav--open")}>
      <BrandMark />
      <button
        type="button"
        className={nav.burger}
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
      />
      <nav className={nav.links} id={menuId} aria-label="Основная навигация">
        {variant === "marketing" ? marketingBlock : appBlock}
      </nav>
    </header>
  );
}
