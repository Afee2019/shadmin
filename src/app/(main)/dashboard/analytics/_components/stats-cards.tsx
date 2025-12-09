"use client";

import { Calendar, DollarSign, TrendingUp, Users } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stats = [
  {
    title: "预订量",
    value: "281",
    change: "+55%",
    changeLabel: "相比上周",
    trend: "up" as const,
    icon: Calendar,
    iconBg: "bg-primary",
  },
  {
    title: "今日用户",
    value: "2,300",
    change: "+3%",
    changeLabel: "相比上月",
    trend: "up" as const,
    icon: Users,
    iconBg: "bg-emerald-500",
  },
  {
    title: "收入",
    value: "¥34k",
    change: "+1%",
    changeLabel: "相比昨日",
    trend: "up" as const,
    icon: DollarSign,
    iconBg: "bg-amber-500",
  },
  {
    title: "新增粉丝",
    value: "+91",
    change: "",
    changeLabel: "刚刚更新",
    trend: "neutral" as const,
    icon: TrendingUp,
    iconBg: "bg-rose-500",
  },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 pt-8 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.title} className="relative">
          {/* 浮动图标 - 放在 Card 外部避免被裁剪 */}
          <div
            className={cn(
              "absolute -top-7 left-4 z-10 flex h-14 w-14 items-center justify-center rounded-xl shadow-lg",
              stat.iconBg,
            )}
          >
            <stat.icon className="h-6 w-6 text-white" />
          </div>

          <Card className="pt-8">
            <CardContent className="pt-4">
              <div className="text-right">
                <p className="text-muted-foreground text-sm">{stat.title}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
              </div>

              <div className="border-border mt-4 border-t pt-3">
                <p className="text-muted-foreground text-xs">
                  {stat.change && (
                    <span
                      className={cn("mr-1 font-semibold", stat.trend === "up" ? "text-emerald-500" : "text-rose-500")}
                    >
                      {stat.change}
                    </span>
                  )}
                  {stat.changeLabel}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
