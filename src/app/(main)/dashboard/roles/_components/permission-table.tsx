"use client";

import { Check, X } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

import { type Role, permissions, permissionCategories } from "./roles-data";

interface PermissionTableProps {
  role: Role | null;
  className?: string;
}

export function PermissionTable({ role, className }: PermissionTableProps) {
  if (!role) {
    return (
      <Card className={cn("h-full", className)}>
        <CardContent className="flex h-full items-center justify-center">
          <div className="text-muted-foreground text-center">
            <p className="text-lg font-medium">选择一个角色查看权限</p>
            <p className="mt-1 text-sm">从左侧列表选择角色以查看其权限详情</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const hasPermission = (permissionId: string) => role.permissions.includes(permissionId);

  return (
    <Card className={cn("h-full", className)}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className={cn("h-10 w-10 rounded-lg", role.color)} />
          <div>
            <CardTitle>{role.name}</CardTitle>
            <CardDescription>{role.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {permissionCategories.map((category) => {
            const categoryPermissions = permissions.filter((p) => p.category === category.id);

            return (
              <div key={category.id}>
                <h4 className="mb-3 text-sm font-medium">{category.name}</h4>
                <div className="rounded-lg border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">权限名称</TableHead>
                        <TableHead>描述</TableHead>
                        <TableHead className="w-[100px] text-center">状态</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {categoryPermissions.map((permission) => (
                        <TableRow key={permission.id}>
                          <TableCell className="font-medium">{permission.name}</TableCell>
                          <TableCell className="text-muted-foreground">{permission.description}</TableCell>
                          <TableCell className="text-center">
                            {hasPermission(permission.id) ? (
                              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                                <Check className="h-4 w-4" />
                              </span>
                            ) : (
                              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                                <X className="h-4 w-4" />
                              </span>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
