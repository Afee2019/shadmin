"use client";

import { Package, Truck, CheckCircle2, RotateCcw, Clock } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { shipmentStats } from "./logistics-data";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  change?: {
    value: number;
    trend: "up" | "down";
  };
  color: string;
  bgColor: string;
}

function StatCard({ title, value, icon: Icon, change, color, bgColor }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground text-sm font-medium">{title}</p>
            <h3 className="mt-1 text-2xl font-bold">{typeof value === "number" ? value.toLocaleString() : value}</h3>
            {change && (
              <p className={cn("mt-1 text-sm font-medium", change.trend === "up" ? "text-green-500" : "text-red-500")}>
                {change.trend === "up" ? "+" : "-"}
                {Math.abs(change.value)}%<span className="text-muted-foreground ml-1 font-normal">较昨日</span>
              </p>
            )}
          </div>
          <div className={cn("rounded-xl p-3", bgColor)}>
            <Icon className={cn("h-6 w-6", color)} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const statsConfig = [
  {
    title: "总订单数",
    value: shipmentStats.totalOrders,
    icon: Package,
    change: { value: 12.5, trend: "up" as const },
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-500/20",
  },
  {
    title: "待处理",
    value: shipmentStats.pendingOrders,
    icon: Clock,
    change: { value: 5.2, trend: "down" as const },
    color: "text-amber-500",
    bgColor: "bg-amber-100 dark:bg-amber-500/20",
  },
  {
    title: "运输中",
    value: shipmentStats.inTransit,
    icon: Truck,
    change: { value: 8.1, trend: "up" as const },
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-500/20",
  },
  {
    title: "已送达",
    value: shipmentStats.delivered,
    icon: CheckCircle2,
    change: { value: 15.3, trend: "up" as const },
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-500/20",
  },
  {
    title: "已退回",
    value: shipmentStats.returned,
    icon: RotateCcw,
    change: { value: 2.1, trend: "down" as const },
    color: "text-red-500",
    bgColor: "bg-red-100 dark:bg-red-500/20",
  },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {statsConfig.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}
