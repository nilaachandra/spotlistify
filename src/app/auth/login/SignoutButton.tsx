"use client";

import { useTransition } from "react";
import { handleSignOut } from "./actions";
import { Button } from "@/components/ui/button";

export default function SignOutButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <span
      className="cursor-pointer"
      onClick={() => startTransition(() => handleSignOut())}
    >
      {isPending ? "Signing out..." : "Sign Out"}
    </span>
  );
}
