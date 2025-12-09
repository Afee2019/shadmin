"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

import { salesTrendData } from "./ecommerce-data";

const chartConfig = {
  sales: { label: "销售额", color: "var(--chart-1)" },
  orders: { label: "订单数", color: "var(--chart-2)" },
  visitors: { label: "访客数", color: "var(--chart-3)" },
} satisfies ChartConfig;

export function SalesTrendChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>销售趋势</CardTitle>
        <CardDescription>最近 7 天销售额与订单量趋势</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <AreaChart data={salesTrendData} accessibilityLayer>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} width={60} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-sales)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-sales)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="sales" stroke="var(--color-sales)" fill="url(#fillSales)" strokeWidth={2} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
