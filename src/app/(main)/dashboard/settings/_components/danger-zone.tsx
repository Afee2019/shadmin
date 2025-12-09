"use client";

import { AlertTriangle } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function DangerZone() {
  return (
    <Card className="border-destructive/50">
      <CardHeader>
        <div className="flex items-center gap-2">
          <AlertTriangle className="text-destructive h-5 w-5" />
          <CardTitle className="text-destructive">危险操作</CardTitle>
        </div>
        <CardDescription>以下操作不可逆转，请谨慎操作</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* 停用账户 */}
        <div className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h4 className="text-sm font-medium">停用账户</h4>
            <p className="text-muted-foreground text-xs">暂时停用您的账户，您可以随时重新激活</p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="sm">
                停用账户
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>确定要停用账户吗？</AlertDialogTitle>
                <AlertDialogDescription>
                  停用后您将无法登录，但您的数据将被保留。 您可以通过联系客服重新激活账户。
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>取消</AlertDialogCancel>
                <AlertDialogAction>确认停用</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        {/* 删除账户 */}
        <div className="border-destructive/50 bg-destructive/5 flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h4 className="text-destructive text-sm font-medium">删除账户</h4>
            <p className="text-muted-foreground text-xs">永久删除您的账户和所有相关数据，此操作不可撤销</p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" size="sm">
                删除账户
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>确定要删除账户吗？</AlertDialogTitle>
                <AlertDialogDescription>
                  此操作将永久删除您的账户和所有相关数据，包括：
                  <ul className="mt-2 list-inside list-disc space-y-1">
                    <li>个人资料信息</li>
                    <li>所有项目和文档</li>
                    <li>账户设置和偏好</li>
                  </ul>
                  <span className="text-destructive mt-2 block font-medium">此操作不可撤销！</span>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>取消</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  确认删除
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardContent>
    </Card>
  );
}
