"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// 线性图数据
const lineChartData = [
  { month: "1月", desktop: 186, mobile: 80 },
  { month: "2月", desktop: 305, mobile: 200 },
  { month: "3月", desktop: 237, mobile: 120 },
  { month: "4月", desktop: 73, mobile: 190 },
  { month: "5月", desktop: 209, mobile: 130 },
  { month: "6月", desktop: 214, mobile: 140 },
];

const lineChartConfig = {
  desktop: { label: "桌面端", color: "var(--chart-1)" },
  mobile: { label: "移动端", color: "var(--chart-2)" },
} satisfies ChartConfig;

// 柱状图数据
const barChartData = [
  { name: "一月", value: 400 },
  { name: "二月", value: 300 },
  { name: "三月", value: 600 },
  { name: "四月", value: 800 },
  { name: "五月", value: 500 },
  { name: "六月", value: 900 },
];

const barChartConfig = {
  value: { label: "销售额", color: "var(--chart-1)" },
} satisfies ChartConfig;

// 面积图数据
const areaChartData = [
  { month: "1月", revenue: 4000, expense: 2400 },
  { month: "2月", revenue: 3000, expense: 1398 },
  { month: "3月", revenue: 2000, expense: 9800 },
  { month: "4月", revenue: 2780, expense: 3908 },
  { month: "5月", revenue: 1890, expense: 4800 },
  { month: "6月", revenue: 2390, expense: 3800 },
];

const areaChartConfig = {
  revenue: { label: "收入", color: "var(--chart-1)" },
  expense: { label: "支出", color: "var(--chart-2)" },
} satisfies ChartConfig;

// 饼图数据
const pieChartData = [
  { name: "直接访问", value: 400, fill: "var(--chart-1)" },
  { name: "搜索引擎", value: 300, fill: "var(--chart-2)" },
  { name: "社交媒体", value: 200, fill: "var(--chart-3)" },
  { name: "广告投放", value: 150, fill: "var(--chart-4)" },
  { name: "其他", value: 100, fill: "var(--chart-5)" },
];

const pieChartConfig = {
  direct: { label: "直接访问", color: "var(--chart-1)" },
  search: { label: "搜索引擎", color: "var(--chart-2)" },
  social: { label: "社交媒体", color: "var(--chart-3)" },
  ads: { label: "广告投放", color: "var(--chart-4)" },
  other: { label: "其他", color: "var(--chart-5)" },
} satisfies ChartConfig;

// 雷达图数据
const radarChartData = [
  { subject: "销售", A: 120, B: 110 },
  { subject: "管理", A: 98, B: 130 },
  { subject: "技术", A: 86, B: 130 },
  { subject: "客服", A: 99, B: 100 },
  { subject: "研发", A: 85, B: 90 },
  { subject: "市场", A: 65, B: 85 },
];

const radarChartConfig = {
  A: { label: "本月", color: "var(--chart-1)" },
  B: { label: "上月", color: "var(--chart-2)" },
} satisfies ChartConfig;

// 堆叠柱状图数据
const stackedBarData = [
  { name: "Q1", product: 400, service: 240 },
  { name: "Q2", product: 300, service: 139 },
  { name: "Q3", product: 200, service: 980 },
  { name: "Q4", product: 278, service: 390 },
];

const stackedBarConfig = {
  product: { label: "产品", color: "var(--chart-1)" },
  service: { label: "服务", color: "var(--chart-2)" },
} satisfies ChartConfig;

export default function ChartsPage() {
  return (
    <div className="space-y-8 py-6">
      {/* 页面标题 */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">图表展示</h1>
        <p className="text-muted-foreground">预览模板中可用的各种图表类型</p>
      </div>

      {/* 第一行：线形图和柱状图 */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* 线形图 */}
        <Card>
          <CardHeader>
            <CardTitle>线形图</CardTitle>
            <CardDescription>展示趋势变化的折线图</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={lineChartConfig} className="h-[300px] w-full">
              <LineChart data={lineChartData} accessibilityLayer>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line type="monotone" dataKey="desktop" stroke="var(--color-desktop)" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="mobile" stroke="var(--color-mobile)" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* 柱状图 */}
        <Card>
          <CardHeader>
            <CardTitle>柱状图</CardTitle>
            <CardDescription>展示数据对比的柱状图</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={barChartConfig} className="h-[300px] w-full">
              <BarChart data={barChartData} accessibilityLayer>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={10} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="value" fill="var(--color-value)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* 第二行：面积图和饼图 */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* 面积图 */}
        <Card>
          <CardHeader>
            <CardTitle>面积图</CardTitle>
            <CardDescription>展示累计数据的面积图</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={areaChartConfig} className="h-[300px] w-full">
              <AreaChart data={areaChartData} accessibilityLayer>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stackId="1"
                  stroke="var(--color-revenue)"
                  fill="var(--color-revenue)"
                  fillOpacity={0.4}
                />
                <Area
                  type="monotone"
                  dataKey="expense"
                  stackId="1"
                  stroke="var(--color-expense)"
                  fill="var(--color-expense)"
                  fillOpacity={0.4}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* 饼图 */}
        <Card>
          <CardHeader>
            <CardTitle>饼图</CardTitle>
            <CardDescription>展示占比分布的饼图</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={pieChartConfig} className="mx-auto h-[300px] w-full">
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieChartData.map((entry) => (
                    <Cell key={entry.name} fill={entry.fill} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* 第三行：雷达图和堆叠柱状图 */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* 雷达图 */}
        <Card>
          <CardHeader>
            <CardTitle>雷达图</CardTitle>
            <CardDescription>展示多维数据的雷达图</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={radarChartConfig} className="mx-auto h-[300px] w-full">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarChartData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Radar name="本月" dataKey="A" stroke="var(--color-A)" fill="var(--color-A)" fillOpacity={0.5} />
                <Radar name="上月" dataKey="B" stroke="var(--color-B)" fill="var(--color-B)" fillOpacity={0.5} />
                <Legend />
              </RadarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* 堆叠柱状图 */}
        <Card>
          <CardHeader>
            <CardTitle>堆叠柱状图</CardTitle>
            <CardDescription>展示组成对比的堆叠柱状图</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={stackedBarConfig} className="h-[300px] w-full">
              <BarChart data={stackedBarData} accessibilityLayer>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={10} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="product" stackId="a" fill="var(--color-product)" radius={[0, 0, 0, 0]} />
                <Bar dataKey="service" stackId="a" fill="var(--color-service)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* 使用说明 */}
      <Card>
        <CardHeader>
          <CardTitle>图表使用说明</CardTitle>
          <CardDescription>基于 Recharts 库构建的图表系统</CardDescription>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            本模板使用 <code>recharts</code> 作为图表库，并通过 <code>ChartContainer</code> 组件进行封装，
            支持主题颜色变量和响应式布局。图表颜色会自动适配当前主题预设。
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-[var(--chart-1)]" />
              <span className="text-sm">chart-1</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-[var(--chart-2)]" />
              <span className="text-sm">chart-2</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-[var(--chart-3)]" />
              <span className="text-sm">chart-3</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-[var(--chart-4)]" />
              <span className="text-sm">chart-4</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-[var(--chart-5)]" />
              <span className="text-sm">chart-5</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
