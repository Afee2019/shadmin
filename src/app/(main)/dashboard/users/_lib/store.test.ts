import { describe, expect, it } from "vitest";

import { createUser, deleteUser, getUsers, updateUser, userFormSchema } from "./store";

describe("userFormSchema", () => {
  const validInput = {
    name: "测试用户",
    email: "test@example.com",
    role: "用户",
    status: "活跃",
    department: "技术部",
  };

  it("accepts valid input", () => {
    expect(userFormSchema.safeParse(validInput).success).toBe(true);
  });

  it("rejects short name", () => {
    const r = userFormSchema.safeParse({ ...validInput, name: "短" });
    expect(r.success).toBe(false);
    if (!r.success) expect(r.error.issues[0]?.message).toMatch(/至少/);
  });

  it("rejects bad email", () => {
    expect(userFormSchema.safeParse({ ...validInput, email: "not-an-email" }).success).toBe(false);
  });

  it("rejects unknown role enum", () => {
    expect(userFormSchema.safeParse({ ...validInput, role: "超级管理员" }).success).toBe(false);
  });
});

describe("store CRUD（隔离观察）", () => {
  it("getUsers 返回种子数据，按 id 升序", async () => {
    const list = await getUsers();
    expect(list.length).toBeGreaterThanOrEqual(10);
    expect(list[0]?.id).toBe("1");
    expect(Number(list[1]?.id ?? 0)).toBeGreaterThan(Number(list[0]?.id ?? 0));
  });

  it("createUser 生成新 id 且加入列表", async () => {
    const before = await getUsers();
    const created = createUser({
      name: "新用户",
      email: "new@example.com",
      role: "用户",
      status: "活跃",
      department: "技术部",
    });
    const after = await getUsers();

    expect(after.length).toBe(before.length + 1);
    expect(created.id).toBeTruthy();
    expect(Number(created.id)).toBeGreaterThan(Number(before.at(-1)?.id ?? 0));

    // 清理：让其他测试不被污染
    deleteUser(created.id);
  });

  it("updateUser 更改字段并返回新对象；不存在的 id 返回 null", () => {
    const updated = updateUser("1", {
      name: "张明改名",
      email: "zhangming@example.com",
      role: "管理员",
      status: "活跃",
      department: "技术部",
    });
    expect(updated?.name).toBe("张明改名");
    // 恢复
    updateUser("1", {
      name: "张明",
      email: "zhangming@example.com",
      role: "管理员",
      status: "活跃",
      department: "技术部",
    });

    expect(updateUser("non-existent-id", { ...updated! })).toBeNull();
  });

  it("deleteUser 返回 true / 不存在返回 false", () => {
    const created = createUser({
      name: "待删用户",
      email: "todelete@example.com",
      role: "访客",
      status: "已禁用",
      department: "财务部",
    });
    expect(deleteUser(created.id)).toBe(true);
    expect(deleteUser(created.id)).toBe(false);
  });
});
