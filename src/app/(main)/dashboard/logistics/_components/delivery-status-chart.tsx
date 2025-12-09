"use client";

import { Cell, Legend, Pie, PieChart } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

import { deliveryStatusDistribution } from "./logistics-data";

const chartConfig = {
  value: {
    label: "订单数",
  },
  已送达: {
    label: "已送达",
    color: "hsl(var(--chart-1))",
  },
  运输中: {
    label: "运输中",
    color: "hsl(var(--chart-2))",
  },
  待处理: {
    label: "待处理",
    color: "hsl(var(--chart-3))",
  },
  已退回: {
    label: "已退回",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function DeliveryStatusChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>配送状态分布</CardTitle>
        <CardDescription>当前订单状态占比</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="mx-auto h-[300px] w-full">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent nameKey="status" hideLabel />} />
            <Pie
              data={deliveryStatusDistribution}
              dataKey="value"
              nameKey="status"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
            >
              {deliveryStatusDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend formatter={(value) => <span className="text-sm">{value}</span>} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
