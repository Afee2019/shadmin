"use client";

import * as React from "react";

import { Plus, Search, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

import { PermissionTable } from "./_components/permission-table";
import { RoleCard } from "./_components/role-card";
import { type Role, roles } from "./_components/roles-data";

export default function RolesPage() {
  const [selectedRole, setSelectedRole] = React.useState<Role | null>(null);
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredRoles = roles.filter((role) => role.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="space-y-6 py-6">
      {/* 页面标题 */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">角色管理</h1>
          <p className="text-muted-foreground hidden sm:block">管理系统角色和权限配置</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          新建角色
        </Button>
      </div>

      {/* 统计卡片 */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-card flex items-center gap-4 rounded-lg border p-4">
          <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
            <Shield className="text-primary h-6 w-6" />
          </div>
          <div>
            <p className="text-2xl font-bold">{roles.length}</p>
            <p className="text-muted-foreground text-sm">总角色数</p>
          </div>
        </div>
        <div className="bg-card flex items-center gap-4 rounded-lg border p-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
            <Shield className="h-6 w-6 text-green-500" />
          </div>
          <div>
            <p className="text-2xl font-bold">{roles.reduce((sum, r) => sum + r.usersCount, 0)}</p>
            <p className="text-muted-foreground text-sm">已分配用户</p>
          </div>
        </div>
        <div className="bg-card flex items-center gap-4 rounded-lg border p-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
            <Shield className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <p className="text-2xl font-bold">{new Set(roles.flatMap((r) => r.permissions)).size}</p>
            <p className="text-muted-foreground text-sm">权限项目</p>
          </div>
        </div>
        <div className="bg-card flex items-center gap-4 rounded-lg border p-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10">
            <Shield className="h-6 w-6 text-amber-500" />
          </div>
          <div>
            <p className="text-2xl font-bold">{roles.filter((r) => r.permissions.length === 17).length}</p>
            <p className="text-muted-foreground text-sm">完全权限角色</p>
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="grid gap-6 lg:grid-cols-[350px_1fr]">
        {/* 角色列表 */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              placeholder="搜索角色..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <ScrollArea className="h-[calc(100vh-26rem)]">
            <div className="space-y-3 pr-4">
              {filteredRoles.map((role) => (
                <RoleCard
                  key={role.id}
                  role={role}
                  isSelected={selectedRole?.id === role.id}
                  onClick={setSelectedRole}
                />
              ))}
              {filteredRoles.length === 0 && (
                <div className="text-muted-foreground py-8 text-center text-sm">未找到匹配的角色</div>
              )}
            </div>
          </ScrollArea>
        </div>

        {/* 权限详情 */}
        <div className="min-h-[calc(100vh-26rem)]">
          <PermissionTable role={selectedRole} />
        </div>
      </div>
    </div>
  );
}
