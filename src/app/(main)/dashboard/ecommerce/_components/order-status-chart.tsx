"use client";

import { Cell, Legend, Pie, PieChart } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

import { orderStatusData } from "./ecommerce-data";

const chartConfig = {
  value: { label: "订单数" },
  已完成: { label: "已完成", color: "hsl(142, 76%, 36%)" },
  已发货: { label: "已发货", color: "hsl(217, 91%, 60%)" },
  待处理: { label: "待处理", color: "hsl(45, 93%, 47%)" },
  已取消: { label: "已取消", color: "hsl(0, 84%, 60%)" },
  已退款: { label: "已退款", color: "hsl(280, 65%, 60%)" },
} satisfies ChartConfig;

export function OrderStatusChart() {
  const total = orderStatusData.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>订单状态</CardTitle>
        <CardDescription>当前各状态订单分布</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="mx-auto h-[300px] w-full">
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value, name) => (
                    <span>
                      {name}: {value} ({Math.round(((value as number) / total) * 100)}%)
                    </span>
                  )}
                />
              }
            />
            <Pie
              data={orderStatusData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              paddingAngle={2}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {orderStatusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" height={36} iconType="circle" />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
