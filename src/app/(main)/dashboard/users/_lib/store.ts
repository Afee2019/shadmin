/**
 * 用户数据层（演示用）—— 这里是模板的"接入真实后端"示范点。
 *
 * 当前实现：模块级内存 Map 作为伪数据库。重启 dev server 数据丢失。
 *
 * 真实项目接入步骤：
 *   1. 用 Prisma / Drizzle / 你的 ORM 替换 `db`
 *   2. 把 `getUsers / getUserById` 改成 SQL 查询或 REST/GraphQL 调用
 *      - 如果用原生 fetch：传 `next: { tags: ['users'], revalidate: 60 }`
 *      - 如果用 ORM：保持 plain async 函数，在 Server Action 里调 revalidateTag
 *   3. `nextId()` 换成数据库自增 / UUID
 *   4. 函数签名和返回类型保持不变 → 表单和列表代码零修改
 */
import { z } from "zod";

export const userRoles = ["管理员", "编辑", "用户", "访客"] as const;
export const userStatuses = ["活跃", "待验证", "已禁用"] as const;

export type UserRole = (typeof userRoles)[number];
export type UserStatus = (typeof userStatuses)[number];

export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: UserRole;
  status: UserStatus;
  department: string;
  joinDate: string;
};

export const userFormSchema = z.object({
  name: z.string().min(2, "姓名至少 2 个字符").max(20, "姓名不能超过 20 个字符"),
  email: z.string().email("请输入有效的邮箱地址"),
  role: z.enum(userRoles),
  status: z.enum(userStatuses),
  department: z.string().min(1, "请选择部门"),
});

export type UserFormInput = z.infer<typeof userFormSchema>;

const seedUsers: User[] = [
  {
    id: "1",
    name: "张明",
    email: "zhangming@example.com",
    avatar: "/avatars/user-01.jpg",
    role: "管理员",
    status: "活跃",
    department: "技术部",
    joinDate: "2023-01-15",
  },
  {
    id: "2",
    name: "李晓峰",
    email: "lixiaofeng@example.com",
    avatar: "/avatars/user-02.jpg",
    role: "编辑",
    status: "活跃",
    department: "产品部",
    joinDate: "2023-03-22",
  },
  {
    id: "3",
    name: "王芳",
    email: "wangfang@example.com",
    avatar: "/avatars/user-03.jpg",
    role: "用户",
    status: "活跃",
    department: "设计部",
    joinDate: "2023-05-10",
  },
  {
    id: "4",
    name: "陈静",
    email: "chenjing@example.com",
    avatar: "/avatars/user-04.jpg",
    role: "用户",
    status: "待验证",
    department: "市场部",
    joinDate: "2023-07-08",
  },
  {
    id: "5",
    name: "赵鹏",
    email: "zhaopeng@example.com",
    avatar: "/avatars/user-05.jpg",
    role: "编辑",
    status: "活跃",
    department: "运营部",
    joinDate: "2023-09-01",
  },
  {
    id: "6",
    name: "刘强",
    email: "liuqiang@example.com",
    avatar: "/avatars/user-06.jpg",
    role: "访客",
    status: "已禁用",
    department: "财务部",
    joinDate: "2023-11-20",
  },
  {
    id: "7",
    name: "周婷",
    email: "zhouting@example.com",
    avatar: "/avatars/user-01.jpg",
    role: "用户",
    status: "活跃",
    department: "人事部",
    joinDate: "2024-01-05",
  },
  {
    id: "8",
    name: "吴磊",
    email: "wulei@example.com",
    avatar: "/avatars/user-02.jpg",
    role: "编辑",
    status: "活跃",
    department: "技术部",
    joinDate: "2024-02-18",
  },
  {
    id: "9",
    name: "孙悦",
    email: "sunyue@example.com",
    avatar: "/avatars/user-03.jpg",
    role: "用户",
    status: "待验证",
    department: "客服部",
    joinDate: "2024-04-12",
  },
  {
    id: "10",
    name: "钱进",
    email: "qianjin@example.com",
    avatar: "/avatars/user-04.jpg",
    role: "管理员",
    status: "活跃",
    department: "技术部",
    joinDate: "2024-06-30",
  },
];

const db = new Map<string, User>(seedUsers.map((u) => [u.id, u]));

function nextId(): string {
  let max = 0;
  for (const id of db.keys()) {
    const n = Number(id);
    if (Number.isFinite(n) && n > max) max = n;
  }
  return String(max + 1);
}

const avatarPool = [
  "/avatars/user-01.jpg",
  "/avatars/user-02.jpg",
  "/avatars/user-03.jpg",
  "/avatars/user-04.jpg",
  "/avatars/user-05.jpg",
  "/avatars/user-06.jpg",
];

function pickAvatar(seed: string): string {
  const idx = [...seed].reduce((acc, ch) => acc + ch.charCodeAt(0), 0) % avatarPool.length;
  return avatarPool[idx] ?? avatarPool[0]!;
}

export async function getUsers(): Promise<User[]> {
  // 真实接入：const res = await fetch(`${API}/users`, { next: { tags: ['users'] } }); return res.json();
  return [...db.values()].sort((a, b) => Number(a.id) - Number(b.id));
}

export async function getUserById(id: string): Promise<User | null> {
  // 真实接入：const res = await fetch(`${API}/users/${id}`, { next: { tags: [`user:${id}`] } });
  return db.get(id) ?? null;
}

export function createUser(input: UserFormInput): User {
  const id = nextId();
  const user: User = {
    id,
    ...input,
    avatar: pickAvatar(input.email),
    joinDate: new Date().toISOString().slice(0, 10),
  };
  db.set(id, user);
  return user;
}

export function updateUser(id: string, input: UserFormInput): User | null {
  const existing = db.get(id);
  if (!existing) return null;
  const updated: User = { ...existing, ...input };
  db.set(id, updated);
  return updated;
}

export function deleteUser(id: string): boolean {
  return db.delete(id);
}
