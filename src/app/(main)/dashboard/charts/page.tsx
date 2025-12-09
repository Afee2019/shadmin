"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Funnel,
  FunnelChart,
  LabelList,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  Scatter,
  ScatterChart,
  Treemap,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";

import { FadeIn } from "@/components/animation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { GaugeChart } from "@/components/ui/gauge-chart";
import { RadialProgress } from "@/components/ui/radial-progress";

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

// 极坐标图数据 (RadialBar/玫瑰图)
const radialBarData = [
  { name: "直接访问", value: 80, fill: "var(--chart-1)" },
  { name: "搜索引擎", value: 65, fill: "var(--chart-2)" },
  { name: "社交媒体", value: 50, fill: "var(--chart-3)" },
  { name: "广告投放", value: 40, fill: "var(--chart-4)" },
  { name: "其他来源", value: 25, fill: "var(--chart-5)" },
];

const radialBarConfig = {
  value: { label: "百分比", color: "var(--chart-1)" },
} satisfies ChartConfig;

// 气泡图数据
const bubbleChartData = [
  { x: 100, y: 200, z: 200, category: "产品A" },
  { x: 120, y: 100, z: 260, category: "产品B" },
  { x: 170, y: 300, z: 400, category: "产品C" },
  { x: 140, y: 250, z: 280, category: "产品D" },
  { x: 150, y: 400, z: 500, category: "产品E" },
  { x: 110, y: 280, z: 200, category: "产品F" },
];

const bubbleChartConfig = {
  z: { label: "销量", color: "var(--chart-1)" },
} satisfies ChartConfig;

// 混合图数据
const composedChartData = [
  { name: "1月", uv: 590, pv: 800, amt: 1400 },
  { name: "2月", uv: 868, pv: 967, amt: 1506 },
  { name: "3月", uv: 1397, pv: 1098, amt: 989 },
  { name: "4月", uv: 1480, pv: 1200, amt: 1228 },
  { name: "5月", uv: 1520, pv: 1108, amt: 1100 },
  { name: "6月", uv: 1400, pv: 680, amt: 1700 },
];

const composedChartConfig = {
  uv: { label: "UV", color: "var(--chart-1)" },
  pv: { label: "PV", color: "var(--chart-2)" },
  amt: { label: "转化", color: "var(--chart-3)" },
} satisfies ChartConfig;

// 横向柱状图数据
const horizontalBarData = [
  { name: "华东区", value: 400 },
  { name: "华南区", value: 300 },
  { name: "华北区", value: 280 },
  { name: "西南区", value: 200 },
  { name: "东北区", value: 180 },
];

const horizontalBarConfig = {
  value: { label: "销售额", color: "var(--chart-1)" },
} satisfies ChartConfig;

// 漏斗图数据
const funnelData = [
  { stage: "访问", value: 10000, fill: "var(--chart-1)" },
  { stage: "浏览商品", value: 7500, fill: "var(--chart-2)" },
  { stage: "加入购物车", value: 4200, fill: "var(--chart-3)" },
  { stage: "开始结算", value: 2100, fill: "var(--chart-4)" },
  { stage: "完成购买", value: 1200, fill: "var(--chart-5)" },
];

const funnelConfig = {
  value: { label: "人数", color: "var(--chart-1)" },
  stage: { label: "阶段" },
} satisfies ChartConfig;

// 树图数据（使用嵌套柱状图模拟）
const treemapData = [
  { name: "电子产品", value: 4500, fill: "var(--chart-1)" },
  { name: "服装鞋帽", value: 3200, fill: "var(--chart-2)" },
  { name: "食品饮料", value: 2800, fill: "var(--chart-3)" },
  { name: "家居用品", value: 2100, fill: "var(--chart-4)" },
  { name: "美妆护肤", value: 1800, fill: "var(--chart-5)" },
  { name: "运动户外", value: 1200, fill: "var(--chart-1)" },
];

const treemapConfig = {
  value: { label: "销售额", color: "var(--chart-1)" },
} satisfies ChartConfig;

export default function ChartsPage() {
  return (
    <div className="space-y-8 py-6">
      {/* 页面标题 */}
      <FadeIn>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">图表展示</h1>
          <p className="text-muted-foreground">预览模板中可用的各种图表类型</p>
        </div>
      </FadeIn>

      {/* 第一行：线形图、柱状图、面积图 */}
      <FadeIn delay={100}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  <Line
                    type="monotone"
                    dataKey="desktop"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
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
        </div>
      </FadeIn>

      {/* 第二行：饼图、雷达图、堆叠柱状图 */}
      <FadeIn delay={200}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      </FadeIn>

      {/* 第三行：极坐标图、气泡图、混合图 */}
      <FadeIn delay={300}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* 极坐标图/玫瑰图 */}
          <Card>
            <CardHeader>
              <CardTitle>极坐标图</CardTitle>
              <CardDescription>展示占比分布的玫瑰图</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={radialBarConfig} className="mx-auto h-[300px] w-full">
                <RadialBarChart
                  cx="50%"
                  cy="50%"
                  innerRadius="20%"
                  outerRadius="90%"
                  data={radialBarData}
                  startAngle={90}
                  endAngle={-270}
                >
                  <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                  <RadialBar
                    background
                    dataKey="value"
                    cornerRadius={4}
                    label={{ position: "insideStart", fill: "#fff", fontSize: 12 }}
                  />
                  <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
                  <Legend
                    iconSize={10}
                    layout="vertical"
                    verticalAlign="middle"
                    align="right"
                    wrapperStyle={{ paddingLeft: "10px" }}
                  />
                </RadialBarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* 气泡图 */}
          <Card>
            <CardHeader>
              <CardTitle>气泡图</CardTitle>
              <CardDescription>展示三维数据的气泡图</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={bubbleChartConfig} className="h-[300px] w-full">
                <ScatterChart accessibilityLayer>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" dataKey="x" name="价格" tickLine={false} axisLine={false} />
                  <YAxis type="number" dataKey="y" name="评分" tickLine={false} axisLine={false} />
                  <ZAxis type="number" dataKey="z" range={[40, 400]} name="销量" />
                  <ChartTooltip
                    cursor={{ strokeDasharray: "3 3" }}
                    content={<ChartTooltipContent nameKey="category" />}
                  />
                  <Scatter name="产品" data={bubbleChartData} fill="var(--chart-1)" />
                </ScatterChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* 混合图 */}
          <Card>
            <CardHeader>
              <CardTitle>混合图</CardTitle>
              <CardDescription>柱状图与折线图组合展示</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={composedChartConfig} className="h-[300px] w-full">
                <ComposedChart data={composedChartData} accessibilityLayer>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={10} />
                  <YAxis tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="pv" fill="var(--color-pv)" radius={[4, 4, 0, 0]} barSize={20} />
                  <Area
                    type="monotone"
                    dataKey="amt"
                    fill="var(--color-amt)"
                    stroke="var(--color-amt)"
                    fillOpacity={0.3}
                  />
                  <Line type="monotone" dataKey="uv" stroke="var(--color-uv)" strokeWidth={2} dot={{ r: 4 }} />
                </ComposedChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </FadeIn>

      {/* 第四行：横向柱状图、仪表盘图、环形进度图 */}
      <FadeIn delay={400}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* 横向柱状图 */}
          <Card>
            <CardHeader>
              <CardTitle>横向柱状图</CardTitle>
              <CardDescription>展示排名对比的横向柱状图</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={horizontalBarConfig} className="h-[300px] w-full">
                <BarChart data={horizontalBarData} layout="vertical" accessibilityLayer>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" tickLine={false} axisLine={false} />
                  <YAxis dataKey="name" type="category" tickLine={false} axisLine={false} width={60} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="value" fill="var(--color-value)" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* 仪表盘图 */}
          <Card>
            <CardHeader>
              <CardTitle>仪表盘图</CardTitle>
              <CardDescription>带分段刻度和指针的仪表盘</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center py-4">
                <GaugeChart value={67.5} label="完成率" />
              </div>
            </CardContent>
          </Card>

          {/* 环形进度图 */}
          <Card>
            <CardHeader>
              <CardTitle>环形进度图</CardTitle>
              <CardDescription>展示百分比进度的环形图</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center justify-center gap-6 py-4">
                <RadialProgress value={85} size="lg" label="销售目标" color="primary" />
                <div className="grid grid-cols-2 gap-4">
                  <RadialProgress value={92} size="sm" label="转化率" color="success" />
                  <RadialProgress value={45} size="sm" label="退货率" color="warning" />
                  <RadialProgress value={78} size="sm" label="复购率" color="info" />
                  <RadialProgress value={23} size="sm" label="流失率" color="destructive" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </FadeIn>

      {/* 第五行：漏斗图和树图 */}
      <FadeIn delay={500}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* 漏斗图 */}
          <Card>
            <CardHeader>
              <CardTitle>漏斗图</CardTitle>
              <CardDescription>展示转化流程的漏斗图</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={funnelConfig} className="h-[300px] w-full">
                <FunnelChart margin={{ left: 0, right: 0, top: 0, bottom: 0 }}>
                  <Funnel className="stroke-card stroke-2" dataKey="value" data={funnelData}>
                    <LabelList className="fill-foreground stroke-0" dataKey="stage" position="right" offset={10} />
                    <LabelList className="fill-foreground stroke-0" dataKey="value" position="left" offset={10} />
                  </Funnel>
                </FunnelChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* 树图 */}
          <Card>
            <CardHeader>
              <CardTitle>树图</CardTitle>
              <CardDescription>展示层级数据的树图</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={treemapConfig} className="h-[300px] w-full">
                <Treemap
                  data={treemapData}
                  dataKey="value"
                  nameKey="name"
                  aspectRatio={4 / 3}
                  stroke="#fff"
                  fill="var(--chart-1)"
                >
                  {treemapData.map((entry) => (
                    <Cell key={entry.name} fill={entry.fill} />
                  ))}
                  <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
                </Treemap>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </FadeIn>

      {/* 使用说明 */}
      <FadeIn delay={600}>
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
      </FadeIn>
    </div>
  );
}
