import { FadeIn } from "@/components/animation";

import { UsersTable } from "./_components/users-table";

export default function UsersPage() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pt-0">
      {/* 页面标题 */}
      <FadeIn>
        <div>
          <h1 className="text-2xl font-bold">用户管理</h1>
          <p className="text-muted-foreground">查看和管理系统中的所有用户</p>
        </div>
      </FadeIn>

      {/* 用户表格 */}
      <FadeIn delay={100}>
        <UsersTable />
      </FadeIn>
    </div>
  );
}
