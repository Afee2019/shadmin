"use client";

import { Cell, Legend, Pie, PieChart } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

import { salesByCategoryData } from "./ecommerce-data";

const chartConfig = {
  value: { label: "占比" },
  电子产品: { label: "电子产品", color: "var(--chart-1)" },
  电脑: { label: "电脑", color: "var(--chart-2)" },
  配件: { label: "配件", color: "var(--chart-3)" },
  平板: { label: "平板", color: "var(--chart-4)" },
  穿戴设备: { label: "穿戴设备", color: "var(--chart-5)" },
} satisfies ChartConfig;

export function CategoryChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>分类销售</CardTitle>
        <CardDescription>各品类销售额占比分布</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="mx-auto h-[300px] w-full">
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value, name) => (
                    <span>
                      {name}: {value}%
                    </span>
                  )}
                />
              }
            />
            <Pie
              data={salesByCategoryData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
            >
              {salesByCategoryData.map((entry, index) => (
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
