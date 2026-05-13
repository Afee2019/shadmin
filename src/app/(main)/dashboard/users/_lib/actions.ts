"use server";

import { revalidatePath } from "next/cache";

import { createUser, deleteUser, updateUser, userFormSchema, type UserFormInput } from "./store";

export type ActionResult = { ok: true } | { ok: false; error: string };

const USERS_PATH = "/dashboard/users";

export async function createUserAction(input: UserFormInput): Promise<ActionResult> {
  const parsed = userFormSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? "校验失败" };

  createUser(parsed.data);
  revalidatePath(USERS_PATH);
  return { ok: true };
}

export async function updateUserAction(id: string, input: UserFormInput): Promise<ActionResult> {
  const parsed = userFormSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? "校验失败" };

  const updated = updateUser(id, parsed.data);
  if (!updated) return { ok: false, error: "用户不存在" };

  revalidatePath(USERS_PATH);
  return { ok: true };
}

export async function deleteUserAction(id: string): Promise<ActionResult> {
  const deleted = deleteUser(id);
  if (!deleted) return { ok: false, error: "用户不存在" };

  revalidatePath(USERS_PATH);
  return { ok: true };
}
