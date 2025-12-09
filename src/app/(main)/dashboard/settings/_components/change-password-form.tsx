"use client";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const passwordRequirements = ["至少 8 个字符", "至少一个大写字母", "至少一个数字", "至少一个特殊字符 (!@#$%^&*)"];

export function ChangePasswordForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>修改密码</CardTitle>
        <CardDescription>定期更新密码可以提高账户安全性</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* 密码输入区 */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">当前密码</Label>
                <Input id="currentPassword" type="password" placeholder="输入当前密码" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">新密码</Label>
                <Input id="newPassword" type="password" placeholder="输入新密码" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">确认新密码</Label>
                <Input id="confirmPassword" type="password" placeholder="再次输入新密码" />
              </div>
            </div>

            {/* 密码要求提示 */}
            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="mb-3 text-sm font-medium">密码要求</h4>
              <ul className="space-y-2">
                {passwordRequirements.map((requirement, index) => (
                  <li key={index} className="text-muted-foreground flex items-center gap-2 text-sm">
                    <Check className="text-muted-foreground/50 h-4 w-4" />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 提交按钮 */}
          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline">
              取消
            </Button>
            <Button type="submit">更新密码</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
