"use client";

import Link from "next/link";

import { ArrowLeft, Home, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="from-background to-muted/30 flex min-h-dvh flex-col items-center justify-center bg-gradient-to-b px-4">
      {/* 404 大数字 */}
      <div className="relative mb-8">
        <h1 className="from-primary via-primary/80 to-primary/40 bg-gradient-to-br bg-clip-text text-[12rem] leading-none font-black tracking-tighter text-transparent select-none sm:text-[16rem]">
          404
        </h1>
        {/* 装饰圆 */}
        <div className="bg-primary/10 absolute -top-10 -right-10 h-32 w-32 rounded-full blur-3xl" />
        <div className="bg-primary/10 absolute -bottom-10 -left-10 h-24 w-24 rounded-full blur-2xl" />
      </div>

      {/* 图标 */}
      <div className="bg-muted mb-6 flex h-20 w-20 items-center justify-center rounded-full">
        <Search className="text-muted-foreground h-10 w-10" />
      </div>

      {/* 文字内容 */}
      <div className="mb-8 max-w-md space-y-3 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">页面未找到</h2>
        <p className="text-muted-foreground">抱歉，您访问的页面不存在或已被移动。请检查网址是否正确，或返回首页。</p>
      </div>

      {/* 操作按钮 */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button variant="default" size="lg" asChild>
          <Link href="/dashboard/default">
            <Home className="mr-2 h-4 w-4" />
            返回首页
          </Link>
        </Button>
        <Button variant="outline" size="lg" onClick={() => window.history.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          返回上页
        </Button>
      </div>
    </div>
  );
}
