"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const websiteVisitsData = [
  { month: "一月", visits: 50 },
  { month: "二月", visits: 20 },
  { month: "三月", visits: 10 },
  { month: "四月", visits: 22 },
  { month: "五月", visits: 50 },
  { month: "六月", visits: 10 },
  { month: "七月", visits: 40 },
];

const dailySalesData = [
  { day: "周一", sales: 120 },
  { day: "周二", sales: 230 },
  { day: "周三", sales: 300 },
  { day: "周四", sales: 350 },
  { day: "周五", sales: 500 },
  { day: "周六", sales: 320 },
  { day: "周日", sales: 450 },
];

const completedTasksData = [
  { day: "周一", tasks: 200 },
  { day: "周二", tasks: 250 },
  { day: "周三", tasks: 100 },
  { day: "周四", tasks: 300 },
  { day: "周五", tasks: 450 },
  { day: "周六", tasks: 320 },
  { day: "周日", tasks: 500 },
];

const barChartConfig = {
  visits: {
    label: "访问量",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const salesChartConfig = {
  sales: {
    label: "销售额",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const tasksChartConfig = {
  tasks: {
    label: "任务数",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function ChartsRow() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* 网站访问量 - 柱状图 */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">网站访问量</CardTitle>
          <CardDescription>上次营销活动表现</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={barChartConfig} className="h-[180px] w-full">
            <BarChart data={websiteVisitsData} accessibilityLayer>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} fontSize={12} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Bar dataKey="visits" fill="var(--color-visits)" radius={4} />
            </BarChart>
          </ChartContainer>
          <p className="text-muted-foreground mt-2 text-xs">营销活动于 2 天前发送</p>
        </CardContent>
      </Card>

      {/* 每日销售额 - 面积图 */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            每日销售额
            <span className="text-sm font-normal text-emerald-500">
              <TrendingUp className="mr-1 inline h-4 w-4" />
              +15%
            </span>
          </CardTitle>
          <CardDescription>今日销售额增长</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={salesChartConfig} className="h-[180px] w-full">
            <AreaChart data={dailySalesData} accessibilityLayer>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="day" tickLine={false} tickMargin={10} axisLine={false} fontSize={12} />
              <YAxis tickLine={false} axisLine={false} fontSize={12} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="sales"
                fill="var(--color-sales)"
                fillOpacity={0.3}
                stroke="var(--color-sales)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
          <p className="text-muted-foreground mt-2 text-xs">4 分钟前更新</p>
        </CardContent>
      </Card>

      {/* 已完成任务 - 面积图 */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">已完成任务</CardTitle>
          <CardDescription>上次营销活动表现</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={tasksChartConfig} className="h-[180px] w-full">
            <AreaChart data={completedTasksData} accessibilityLayer>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="day" tickLine={false} tickMargin={10} axisLine={false} fontSize={12} />
              <YAxis tickLine={false} axisLine={false} fontSize={12} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="tasks"
                fill="var(--color-tasks)"
                fillOpacity={0.3}
                stroke="var(--color-tasks)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
          <p className="text-muted-foreground mt-2 text-xs">刚刚更新</p>
        </CardContent>
      </Card>
    </div>
  );
}
