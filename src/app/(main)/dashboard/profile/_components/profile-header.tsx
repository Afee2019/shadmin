"use client";

import Image from "next/image";
import Link from "next/link";

import { Edit, Home, Mail, Settings } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ProfileHeader() {
  return (
    <div className="relative overflow-hidden rounded-xl">
      {/* 封面背景 */}
      <div className="relative h-48 sm:h-56">
        <Image src="/images/bg-profile.jpeg" alt="封面背景" fill className="object-cover" priority />
        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {/* 装饰圆形 */}
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10" />
        <div className="absolute top-20 -right-5 h-32 w-32 rounded-full bg-white/5" />
      </div>

      {/* 用户信息卡片 */}
      <div className="relative -mt-16 px-4 pb-4 sm:px-6">
        <div className="bg-card flex flex-col gap-4 rounded-xl border p-4 shadow-sm sm:flex-row sm:items-end sm:justify-between">
          {/* 左侧：头像和信息 */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            {/* 头像 */}
            <Avatar className="border-background h-24 w-24 border-4 shadow-lg sm:h-28 sm:w-28">
              <AvatarImage src="/avatars/user-01.jpg" alt="用户头像" />
              <AvatarFallback className="text-3xl">张</AvatarFallback>
            </Avatar>

            {/* 用户信息 */}
            <div className="space-y-1">
              <h1 className="text-2xl font-bold">张明</h1>
              <p className="text-muted-foreground">产品经理 / 技术总监</p>
              <div className="text-muted-foreground flex items-center gap-4 text-sm">
                <span>上海市</span>
                <span>·</span>
                <span>56 个项目</span>
                <span>·</span>
                <span>128 个关注者</span>
              </div>
            </div>
          </div>

          {/* 右侧：操作区 */}
          <div className="flex items-center gap-3">
            <Tabs defaultValue="app" className="hidden sm:block">
              <TabsList>
                <TabsTrigger value="app" className="gap-2">
                  <Home className="h-4 w-4" />
                  <span>应用</span>
                </TabsTrigger>
                <TabsTrigger value="messages" className="gap-2">
                  <Mail className="h-4 w-4" />
                  <span>消息</span>
                </TabsTrigger>
                <TabsTrigger value="settings" asChild>
                  <Link href="/dashboard/settings" className="gap-2">
                    <Settings className="h-4 w-4" />
                    <span>设置</span>
                  </Link>
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <Button size="sm" className="gap-2">
              <Edit className="h-4 w-4" />
              <span>编辑资料</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
