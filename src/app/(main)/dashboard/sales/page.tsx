import { FadeIn } from "@/components/animation";

import { ChannelsChart } from "./_components/channels-chart";
import { DailySalesChart, RevenueChart } from "./_components/revenue-chart";
import { SalesByAgeChart } from "./_components/sales-by-age";
import { SalesByCountryTable, TopProductsTable } from "./_components/sales-table";
import { QuickStats, StatsCards } from "./_components/stats-cards";

export default function SalesPage() {
  return (
    <div className="space-y-6 py-6">
      {/* 页面标题 */}
      <FadeIn>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">销售仪表盘</h1>
          <p className="text-muted-foreground">追踪销售业绩和客户数据</p>
        </div>
      </FadeIn>

      {/* 快速统计卡片 */}
      <FadeIn delay={100}>
        <QuickStats />
      </FadeIn>

      {/* 统计卡片 */}
      <FadeIn delay={200}>
        <StatsCards />
      </FadeIn>

      {/* 第二行：渠道分布和收入趋势 */}
      <FadeIn delay={300}>
        <div className="grid gap-6 lg:grid-cols-3">
          <ChannelsChart />
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
        </div>
      </FadeIn>

      {/* 第三行：按年龄销售额和按国家销售额 */}
      <FadeIn delay={400}>
        <div className="grid gap-6 lg:grid-cols-2">
          <SalesByAgeChart />
          <SalesByCountryTable />
        </div>
      </FadeIn>

      {/* 第四行：每日销售额 */}
      <FadeIn delay={500}>
        <DailySalesChart />
      </FadeIn>

      {/* 第五行：热销产品 */}
      <FadeIn delay={600}>
        <TopProductsTable />
      </FadeIn>
    </div>
  );
}
