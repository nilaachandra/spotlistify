'use server'

import { signOutAction } from "@/lib/auth";

export async function handleSignOut() {
  await signOutAction();
}