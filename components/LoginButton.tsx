"use client";

import { signIn } from "next-auth/react";

export function LoginButton() {
  return (
    <button
      type="button"
      onClick={() =>
        signIn("github", {
          callbackUrl: "/dashboard",
        })
      }
    >
      Continue with GitHub
    </button>
  );
}