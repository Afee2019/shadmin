"use client";

import { FadeIn } from "@/components/animation";

import { DeliveryStatusChart } from "./_components/delivery-status-chart";
import { DeliveryTrendChart } from "./_components/delivery-trend-chart";
import { DriverList } from "./_components/driver-list";
import { RecentShipmentsTable } from "./_components/recent-shipments-table";
import { RegionStats } from "./_components/region-stats";
import { StatsCards } from "./_components/stats-cards";
import { WarehouseOverview } from "./_components/warehouse-overview";

export default function LogisticsDashboardPage() {
  return (
    <div className="space-y-6 py-6">
      {/* 页面标题 */}
      <FadeIn>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">物流管理</h1>
          <p className="text-muted-foreground">实时监控物流配送和仓储状态</p>
        </div>
      </FadeIn>

      {/* 统计卡片 */}
      <FadeIn delay={100}>
        <StatsCards />
      </FadeIn>

      {/* 第一行：配送趋势 + 状态分布 */}
      <FadeIn delay={200}>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <DeliveryTrendChart />
          </div>
          <DeliveryStatusChart />
        </div>
      </FadeIn>

      {/* 第二行：仓库概况 + 配送员状态 */}
      <FadeIn delay={300}>
        <div className="grid gap-6 lg:grid-cols-2">
          <WarehouseOverview />
          <DriverList />
        </div>
      </FadeIn>

      {/* 第三行：最近订单 */}
      <FadeIn delay={400}>
        <RecentShipmentsTable />
      </FadeIn>

      {/* 第四行：地区统计 */}
      <FadeIn delay={500}>
        <RegionStats />
      </FadeIn>
    </div>
  );
}
