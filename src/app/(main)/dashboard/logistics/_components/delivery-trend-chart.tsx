"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { dailyDeliveries } from "./logistics-data";

const chartConfig = {
  delivered: {
    label: "已送达",
    color: "hsl(var(--chart-1))",
  },
  pending: {
    label: "待处理",
    color: "hsl(var(--chart-3))",
  },
  returned: {
    label: "已退回",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function DeliveryTrendChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>配送趋势</CardTitle>
        <CardDescription>最近 7 天配送数据概览</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <AreaChart data={dailyDeliveries} margin={{ left: 12, right: 12 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} fontSize={12} width={40} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Area
              dataKey="delivered"
              type="monotone"
              fill="var(--color-delivered)"
              fillOpacity={0.4}
              stroke="var(--color-delivered)"
              strokeWidth={2}
              stackId="a"
            />
            <Area
              dataKey="pending"
              type="monotone"
              fill="var(--color-pending)"
              fillOpacity={0.4}
              stroke="var(--color-pending)"
              strokeWidth={2}
              stackId="b"
            />
            <Area
              dataKey="returned"
              type="monotone"
              fill="var(--color-returned)"
              fillOpacity={0.4}
              stroke="var(--color-returned)"
              strokeWidth={2}
              stackId="c"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
