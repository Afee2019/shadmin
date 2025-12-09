"use client";

import { useState } from "react";

import { ChevronDown, DollarSign, TrendingDown, TrendingUp, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface StatCardProps {
  title: string;
  value: string;
  change: {
    value: string;
    trend: "up" | "down";
    label: string;
  };
  dateRange: string;
  onDateRangeChange: (range: string) => void;
}

function StatCard({ title, value, change, dateRange, onDateRangeChange }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground text-sm font-medium">{title}</p>
            <h3 className="mt-1 text-2xl font-bold">{value}</h3>
            <div className="mt-2 flex items-center gap-1 text-sm">
              {change.trend === "up" ? (
                <TrendingUp className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
              <span className={change.trend === "up" ? "text-green-500" : "text-red-500"}>{change.value}</span>
              <span className="text-muted-foreground">{change.label}</span>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                {dateRange}
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onDateRangeChange("最近 7 天")}>最近 7 天</DropdownMenuItem>
              <DropdownMenuItem onClick={() => onDateRangeChange("上周")}>上周</DropdownMenuItem>
              <DropdownMenuItem onClick={() => onDateRangeChange("最近 30 天")}>最近 30 天</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
}

export function StatsCards() {
  const [salesRange, setSalesRange] = useState("最近 7 天");
  const [customersRange, setCustomersRange] = useState("最近 7 天");
  const [revenueRange, setRevenueRange] = useState("最近 7 天");

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <StatCard
        title="销售额"
        value="¥230,220"
        change={{ value: "+55%", trend: "up", label: "自上月以来" }}
        dateRange={salesRange}
        onDateRangeChange={setSalesRange}
      />
      <StatCard
        title="客户数"
        value="3,200"
        change={{ value: "+12%", trend: "up", label: "自上月以来" }}
        dateRange={customersRange}
        onDateRangeChange={setCustomersRange}
      />
      <StatCard
        title="平均订单额"
        value="¥1,200"
        change={{ value: "-8%", trend: "down", label: "自上月以来" }}
        dateRange={revenueRange}
        onDateRangeChange={setRevenueRange}
      />
    </div>
  );
}

export function QuickStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        <CardContent className="flex items-center gap-4 p-6">
          <div className="rounded-lg bg-white/20 p-3">
            <DollarSign className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm opacity-80">今日销售额</p>
            <h3 className="text-2xl font-bold">¥12,580</h3>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
        <CardContent className="flex items-center gap-4 p-6">
          <div className="rounded-lg bg-white/20 p-3">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm opacity-80">新增客户</p>
            <h3 className="text-2xl font-bold">+128</h3>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white">
        <CardContent className="flex items-center gap-4 p-6">
          <div className="rounded-lg bg-white/20 p-3">
            <TrendingUp className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm opacity-80">转化率</p>
            <h3 className="text-2xl font-bold">3.8%</h3>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
        <CardContent className="flex items-center gap-4 p-6">
          <div className="rounded-lg bg-white/20 p-3">
            <DollarSign className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm opacity-80">客单价</p>
            <h3 className="text-2xl font-bold">¥98.5</h3>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
