"use client";

import { Camera } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SettingsHeader() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>个人资料</CardTitle>
        <CardDescription>管理您的公开资料信息</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          {/* 头像区域 */}
          <div className="relative">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/avatars/user-01.jpg" alt="用户头像" />
              <AvatarFallback className="text-2xl">张</AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              variant="secondary"
              className="absolute -right-1 -bottom-1 h-8 w-8 rounded-full shadow-md"
            >
              <Camera className="h-4 w-4" />
              <span className="sr-only">更换头像</span>
            </Button>
          </div>

          {/* 用户信息 */}
          <div className="flex-1 space-y-1">
            <h3 className="text-xl font-semibold">张明</h3>
            <p className="text-muted-foreground text-sm">产品经理 / 技术总监</p>
            <p className="text-muted-foreground text-sm">zhangming@example.com</p>
          </div>

          {/* 可见性开关 */}
          <div className="flex items-center gap-2">
            <Switch id="profile-visibility" defaultChecked />
            <Label htmlFor="profile-visibility" className="text-sm">
              公开资料
            </Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
