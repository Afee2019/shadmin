"use client";

import { useEffect } from "react";

import Link from "next/link";

import { AlertTriangle, RefreshCw, Home } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // 可以在这里记录错误到日志服务
    console.error(error);
  }, [error]);

  return (
    <div className="from-background to-muted/30 flex min-h-dvh flex-col items-center justify-center bg-gradient-to-b px-4">
      {/* 500 大数字 */}
      <div className="relative mb-8">
        <h1 className="from-destructive via-destructive/80 to-destructive/40 bg-gradient-to-br bg-clip-text text-[12rem] leading-none font-black tracking-tighter text-transparent select-none sm:text-[16rem]">
          500
        </h1>
        {/* 装饰圆 */}
        <div className="bg-destructive/10 absolute -top-10 -right-10 h-32 w-32 rounded-full blur-3xl" />
        <div className="bg-destructive/10 absolute -bottom-10 -left-10 h-24 w-24 rounded-full blur-2xl" />
      </div>

      {/* 图标 */}
      <div className="bg-destructive/10 mb-6 flex h-20 w-20 items-center justify-center rounded-full">
        <AlertTriangle className="text-destructive h-10 w-10" />
      </div>

      {/* 文字内容 */}
      <div className="mb-8 max-w-md space-y-3 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">服务器错误</h2>
        <p className="text-muted-foreground">抱歉，服务器发生了内部错误。请稍后重试，或联系管理员。</p>
        {error.digest && <p className="text-muted-foreground/60 font-mono text-xs">错误编号: {error.digest}</p>}
      </div>

      {/* 操作按钮 */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button variant="default" size="lg" onClick={reset}>
          <RefreshCw className="mr-2 h-4 w-4" />
          重试
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/dashboard/default">
            <Home className="mr-2 h-4 w-4" />
            返回首页
          </Link>
        </Button>
      </div>
    </div>
  );
}
