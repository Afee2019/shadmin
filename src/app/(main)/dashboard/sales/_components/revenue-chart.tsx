"use client";

import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const revenueData = [
  { month: "1月", facebook: 400, google: 240 },
  { month: "2月", facebook: 300, google: 139 },
  { month: "3月", facebook: 200, google: 980 },
  { month: "4月", facebook: 278, google: 390 },
  { month: "5月", facebook: 189, google: 480 },
  { month: "6月", facebook: 239, google: 380 },
  { month: "7月", facebook: 349, google: 430 },
  { month: "8月", facebook: 400, google: 520 },
  { month: "9月", facebook: 320, google: 410 },
  { month: "10月", facebook: 280, google: 380 },
  { month: "11月", facebook: 350, google: 450 },
  { month: "12月", facebook: 420, google: 520 },
];

const revenueConfig = {
  facebook: { label: "Facebook 广告", color: "var(--chart-1)" },
  google: { label: "Google 广告", color: "var(--chart-2)" },
} satisfies ChartConfig;

const dailySalesData = [
  { day: "周一", sales: 12000 },
  { day: "周二", sales: 19000 },
  { day: "周三", sales: 15000 },
  { day: "周四", sales: 22000 },
  { day: "周五", sales: 25000 },
  { day: "周六", sales: 30000 },
  { day: "周日", sales: 18000 },
];

const dailySalesConfig = {
  sales: { label: "销售额", color: "var(--chart-3)" },
} satisfies ChartConfig;

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>收入趋势</CardTitle>
        <CardDescription className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[var(--chart-1)]" />
            Facebook 广告
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[var(--chart-2)]" />
            Google 广告
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={revenueConfig} className="h-[300px] w-full">
          <LineChart data={revenueData} accessibilityLayer>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} />
            <YAxis tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Line type="monotone" dataKey="facebook" stroke="var(--color-facebook)" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="google" stroke="var(--color-google)" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export function DailySalesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>每日销售额</CardTitle>
        <CardDescription>本周每日销售趋势</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={dailySalesConfig} className="h-[200px] w-full">
          <AreaChart data={dailySalesData} accessibilityLayer>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={10} />
            <YAxis tickLine={false} axisLine={false} tickFormatter={(value) => `¥${value / 1000}k`} />
            <ChartTooltip
              content={<ChartTooltipContent formatter={(value) => [`¥${Number(value).toLocaleString()}`, "销售额"]} />}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="var(--color-sales)"
              fill="var(--color-sales)"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
