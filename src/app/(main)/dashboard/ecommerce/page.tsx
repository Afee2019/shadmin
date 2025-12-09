"use client";

import { FadeIn } from "@/components/animation";

import { CategoryChart } from "./_components/category-chart";
import { CountrySalesTable } from "./_components/country-sales-table";
import { OrderStatusChart } from "./_components/order-status-chart";
import { RecentOrdersTable } from "./_components/recent-orders-table";
import { SalesFunnelChart } from "./_components/sales-funnel-chart";
import { SalesTrendChart } from "./_components/sales-trend-chart";
import { StatsCards } from "./_components/stats-cards";
import { TopProductsTable } from "./_components/top-products-table";

export default function EcommerceDashboardPage() {
  return (
    <div className="space-y-6 py-6">
      {/* 页面标题 */}
      <FadeIn>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">电商仪表盘</h1>
          <p className="text-muted-foreground">实时监控销售数据和订单状态</p>
        </div>
      </FadeIn>

      {/* 统计卡片 */}
      <FadeIn delay={100}>
        <StatsCards />
      </FadeIn>

      {/* 第一行图表：销售趋势 + 分类销售 */}
      <FadeIn delay={200}>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SalesTrendChart />
          </div>
          <CategoryChart />
        </div>
      </FadeIn>

      {/* 第二行图表：销售漏斗 + 订单状态 */}
      <FadeIn delay={300}>
        <div className="grid gap-6 md:grid-cols-2">
          <SalesFunnelChart />
          <OrderStatusChart />
        </div>
      </FadeIn>

      {/* 第三行表格：热销商品 */}
      <FadeIn delay={400}>
        <TopProductsTable />
      </FadeIn>

      {/* 第四行：最近订单 + 按地区销售 */}
      <FadeIn delay={500}>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RecentOrdersTable />
          </div>
          <CountrySalesTable />
        </div>
      </FadeIn>
    </div>
  );
}
