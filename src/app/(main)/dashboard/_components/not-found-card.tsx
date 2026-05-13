"use client";

import Link from "next/link";

import { ArrowLeft, Construction, Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type NotFoundCardProps = {
  title?: string;
  description?: string;
};

export function NotFoundCard({
  title = "页面未找到",
  description = "此功能正在开发中，敬请期待后续更新。",
}: NotFoundCardProps) {
  return (
    <div className="flex h-full items-center justify-center p-4">
      <Card className="w-full max-w-lg border-dashed">
        <CardContent className="flex flex-col items-center py-12 text-center">
          <div className="bg-primary/10 mb-6 flex h-16 w-16 items-center justify-center rounded-full">
            <Construction className="text-primary h-8 w-8" />
          </div>

          <h1 className="mb-2 text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="text-muted-foreground mb-6 max-w-sm">{description}</p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="default" asChild>
              <Link href="/dashboard/default">
                <Home className="mr-2 h-4 w-4" />
                返回首页
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回上页
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
