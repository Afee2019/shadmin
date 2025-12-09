"use client";

import { ArrowDown, ArrowUp, DollarSign, Package, ShoppingCart, TrendingUp } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { statsData } from "./ecommerce-data";

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat("zh-CN").format(value);
}

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  trend: "up" | "down";
  icon: React.ReactNode;
  iconBgColor: string;
}

function StatCard({ title, value, change, trend, icon, iconBgColor }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-muted-foreground text-sm font-medium">{title}</p>
            <h3 className="text-2xl font-bold">{value}</h3>
            <div className="flex items-center gap-1">
              {trend === "up" ? (
                <ArrowUp className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDown className="h-4 w-4 text-red-500" />
              )}
              <span className={cn("text-sm font-medium", trend === "up" ? "text-green-500" : "text-red-500")}>
                {Math.abs(change)}%
              </span>
              <span className="text-muted-foreground text-sm">较上周</span>
            </div>
          </div>
          <div className={cn("rounded-xl p-3", iconBgColor)}>{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
}

export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="总销售额"
        value={formatCurrency(statsData.totalRevenue.value)}
        change={statsData.totalRevenue.change}
        trend={statsData.totalRevenue.trend}
        icon={<DollarSign className="h-6 w-6 text-white" />}
        iconBgColor="bg-gradient-to-br from-green-500 to-green-600"
      />
      <StatCard
        title="总订单数"
        value={formatNumber(statsData.totalOrders.value)}
        change={statsData.totalOrders.change}
        trend={statsData.totalOrders.trend}
        icon={<ShoppingCart className="h-6 w-6 text-white" />}
        iconBgColor="bg-gradient-to-br from-blue-500 to-blue-600"
      />
      <StatCard
        title="转化率"
        value={`${statsData.conversionRate.value}%`}
        change={statsData.conversionRate.change}
        trend={statsData.conversionRate.trend}
        icon={<TrendingUp className="h-6 w-6 text-white" />}
        iconBgColor="bg-gradient-to-br from-amber-500 to-amber-600"
      />
      <StatCard
        title="客单价"
        value={formatCurrency(statsData.avgOrderValue.value)}
        change={statsData.avgOrderValue.change}
        trend={statsData.avgOrderValue.trend}
        icon={<Package className="h-6 w-6 text-white" />}
        iconBgColor="bg-gradient-to-br from-purple-500 to-purple-600"
      />
    </div>
  );
}
