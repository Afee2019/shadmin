"use client";

import { Cell, Pie, PieChart } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const channelsData = [
  { name: "直接访问", value: 35, fill: "var(--chart-1)" },
  { name: "搜索引擎", value: 25, fill: "var(--chart-2)" },
  { name: "社交媒体", value: 20, fill: "var(--chart-3)" },
  { name: "推荐流量", value: 12, fill: "var(--chart-4)" },
  { name: "邮件营销", value: 8, fill: "var(--chart-5)" },
];

const channelsConfig = {
  value: { label: "占比" },
} satisfies ChartConfig;

export function ChannelsChart() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>渠道分布</CardTitle>
        <CardDescription>各渠道流量占比</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={channelsConfig} className="mx-auto h-[200px] w-full">
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent formatter={(value, name, item) => [`${value}%`, item.payload.name]} />}
            />
            <Pie
              data={channelsData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {channelsData.map((entry) => (
                <Cell key={entry.name} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {channelsData.map((item) => (
            <div key={item.name} className="flex items-center gap-2 text-sm">
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.fill }} />
              <span className="text-muted-foreground truncate">{item.name}</span>
              <span className="ml-auto font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
