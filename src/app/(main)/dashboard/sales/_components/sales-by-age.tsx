"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const ageData = [
  { age: "16-20岁", sales: 15000 },
  { age: "21-30岁", sales: 45000 },
  { age: "31-40岁", sales: 38000 },
  { age: "41-50岁", sales: 28000 },
  { age: "51-60岁", sales: 18000 },
  { age: "60岁以上", sales: 8000 },
];

const ageConfig = {
  sales: { label: "销售额", color: "var(--chart-1)" },
} satisfies ChartConfig;

export function SalesByAgeChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>按年龄段销售额</CardTitle>
        <CardDescription>不同年龄段客户的消费分布</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={ageConfig} className="h-[300px] w-full">
          <BarChart data={ageData} layout="vertical" accessibilityLayer margin={{ left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" tickLine={false} axisLine={false} tickFormatter={(value) => `¥${value / 1000}k`} />
            <YAxis dataKey="age" type="category" tickLine={false} axisLine={false} width={70} />
            <ChartTooltip
              content={<ChartTooltipContent formatter={(value) => [`¥${Number(value).toLocaleString()}`, "销售额"]} />}
            />
            <Bar dataKey="sales" fill="var(--color-sales)" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
