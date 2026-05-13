import { FadeIn } from "@/components/animation";

import { UsersTable } from "./_components/users-table";
import { getUsers } from "./_lib/store";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pt-0">
      <FadeIn>
        <div>
          <h1 className="text-2xl font-bold">用户管理</h1>
          <p className="text-muted-foreground">查看和管理系统中的所有用户</p>
        </div>
      </FadeIn>

      <FadeIn delay={100}>
        <UsersTable users={users} />
      </FadeIn>
    </div>
  );
}
