"use client";

import { useEffect } from "react";

import Link from "next/link";

import { AlertTriangle, RefreshCw, Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function DashboardError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-full items-center justify-center p-4">
      <Card className="border-destructive/50 w-full max-w-lg">
        <CardContent className="flex flex-col items-center py-12 text-center">
          {/* 图标 */}
          <div className="bg-destructive/10 mb-6 flex h-16 w-16 items-center justify-center rounded-full">
            <AlertTriangle className="text-destructive h-8 w-8" />
          </div>

          {/* 文字内容 */}
          <h1 className="mb-2 text-2xl font-semibold tracking-tight">出现错误</h1>
          <p className="text-muted-foreground mb-2 max-w-sm">页面加载时发生错误，请重试或返回首页。</p>
          {error.digest && <p className="text-muted-foreground/60 mb-6 font-mono text-xs">错误编号: {error.digest}</p>}

          {/* 操作按钮 */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="default" onClick={reset}>
              <RefreshCw className="mr-2 h-4 w-4" />
              重试
            </Button>
            <Button variant="outline" asChild>
              <Link href="/dashboard/default">
                <Home className="mr-2 h-4 w-4" />
                返回首页
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
