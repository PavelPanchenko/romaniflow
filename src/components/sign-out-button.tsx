"use client";

import { signOut } from "next-auth/react";
import { button } from "@/lib/ui-classes";

export function SignOutButton() {
  return (
    <button
      className={button.ghost}
      onClick={() => {
        void signOut({ callbackUrl: "/" });
      }}
      type="button"
    >
      Выйти
    </button>
  );
}
