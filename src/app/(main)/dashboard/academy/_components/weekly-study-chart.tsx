"use client";

import { Bar, BarChart, CartesianGrid, ReferenceLine, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

import { weeklyStudyData } from "./academy-data";

const chartConfig = {
  hours: { label: "学习时长", color: "var(--chart-1)" },
  target: { label: "目标", color: "var(--muted-foreground)" },
} satisfies ChartConfig;

export function WeeklyStudyChart() {
  const totalHours = weeklyStudyData.reduce((sum, d) => sum + d.hours, 0);
  const avgHours = (totalHours / 7).toFixed(1);

  return (
    <Card>
      <CardHeader>
        <CardTitle>每周学习时长</CardTitle>
        <CardDescription>
          本周累计 {totalHours.toFixed(1)} 小时，日均 {avgHours} 小时
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <BarChart data={weeklyStudyData} accessibilityLayer>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(v) => `${v}h`} />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value, name) => (
                    <span>
                      {name === "hours" ? "实际" : "目标"}: {value} 小时
                    </span>
                  )}
                />
              }
            />
            <ReferenceLine
              y={2}
              stroke="var(--muted-foreground)"
              strokeDasharray="5 5"
              label={{ value: "日目标", position: "insideTopRight", fill: "var(--muted-foreground)", fontSize: 12 }}
            />
            <Bar dataKey="hours" fill="var(--chart-1)" radius={[4, 4, 0, 0]} barSize={32} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
