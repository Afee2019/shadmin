"use client";

import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

interface StepCompleteProps {
  onReset: () => void;
}

export function StepComplete({ onReset }: StepCompleteProps) {
  return (
    <div className="space-y-6 py-8 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
        <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-bold">设置完成！</h3>
        <p className="text-muted-foreground mx-auto max-w-sm">
          您的个人资料已成功创建。现在您可以开始使用我们的服务了。
        </p>
      </div>

      <div className="flex justify-center gap-4">
        <Button variant="outline" onClick={onReset}>
          重新设置
        </Button>
        <Button>开始使用</Button>
      </div>
    </div>
  );
}
