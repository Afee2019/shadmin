"use client";

import { Clock, Folder, Share2, Star } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface QuickAccessItem {
  label: string;
  icon: React.ElementType;
  count: number;
  color: string;
  bgColor: string;
}

const quickAccessItems: QuickAccessItem[] = [
  {
    label: "最近文件",
    icon: Clock,
    count: 12,
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-500/20",
  },
  {
    label: "星标文件",
    icon: Star,
    count: 5,
    color: "text-amber-500",
    bgColor: "bg-amber-100 dark:bg-amber-500/20",
  },
  {
    label: "共享文件",
    icon: Share2,
    count: 8,
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-500/20",
  },
  {
    label: "全部文件夹",
    icon: Folder,
    count: 24,
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-500/20",
  },
];

export function QuickAccess() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">快速访问</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {quickAccessItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className="hover:bg-muted flex w-full items-center justify-between rounded-lg p-2 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={cn("rounded-lg p-2", item.bgColor)}>
                  <Icon className={cn("h-4 w-4", item.color)} />
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              <span className="text-muted-foreground text-sm">{item.count}</span>
            </button>
          );
        })}
      </CardContent>
    </Card>
  );
}
