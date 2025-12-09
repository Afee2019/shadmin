"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center space-y-2 text-center">
      <h1 className="text-2xl font-semibold">页面未找到</h1>
      <p className="text-muted-foreground">您访问的页面不存在</p>
      <Link prefetch={false} replace href="/dashboard/default">
        <Button variant="outline">返回首页</Button>
      </Link>
    </div>
  );
}
