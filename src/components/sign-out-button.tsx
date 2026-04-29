"use client";

import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <button
      className="btn btn-ghost"
      onClick={() => {
        void signOut({ callbackUrl: "/" });
      }}
      type="button"
    >
      Выйти
    </button>
  );
}
