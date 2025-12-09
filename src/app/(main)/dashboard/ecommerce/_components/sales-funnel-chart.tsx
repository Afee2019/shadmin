"use client";

import { Bar, BarChart, Cell, LabelList, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

import { salesFunnelData } from "./ecommerce-data";

const chartConfig = {
  value: { label: "人数", color: "var(--chart-1)" },
} satisfies ChartConfig;

// 计算转化率
const funnelWithRates = salesFunnelData.map((item, index, arr) => ({
  ...item,
  rate: index === 0 ? 100 : Math.round((item.value / arr[0].value) * 100),
  stepRate: index === 0 ? 100 : Math.round((item.value / arr[index - 1].value) * 100),
}));

export function SalesFunnelChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>销售漏斗</CardTitle>
        <CardDescription>用户从访问到购买的转化流程</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart data={funnelWithRates} layout="vertical" accessibilityLayer margin={{ left: 10, right: 50 }}>
            <XAxis type="number" hide />
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              axisLine={false}
              width={80}
              tick={{ fontSize: 12 }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value, name, item) => (
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{item.payload.name}</span>
                      </div>
                      <div className="text-muted-foreground text-sm">人数: {value.toLocaleString()}</div>
                      <div className="text-muted-foreground text-sm">总转化率: {item.payload.rate}%</div>
                      <div className="text-muted-foreground text-sm">环节转化率: {item.payload.stepRate}%</div>
                    </div>
                  )}
                />
              }
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={28}>
              {funnelWithRates.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
              <LabelList
                dataKey="rate"
                position="right"
                formatter={(value: number) => `${value}%`}
                className="fill-muted-foreground text-xs"
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
