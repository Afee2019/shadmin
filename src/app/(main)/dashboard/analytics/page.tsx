"use client";

import { FadeIn } from "@/components/animation";

import { BookingCards } from "./_components/booking-cards";
import { ChartsRow } from "./_components/charts-row";
import { SalesByCountry } from "./_components/sales-by-country";
import { StatsCards } from "./_components/stats-cards";

export default function AnalyticsPage() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pt-0">
      {/* 页面标题 */}
      <FadeIn>
        <div>
          <h1 className="text-2xl font-bold">数据分析</h1>
          <p className="text-muted-foreground">按国家查看销售额、价值和跳出率</p>
        </div>
      </FadeIn>

      {/* 图表行 */}
      <FadeIn delay={100}>
        <ChartsRow />
      </FadeIn>

      {/* 统计卡片 */}
      <FadeIn delay={200}>
        <StatsCards />
      </FadeIn>

      {/* 预订卡片 */}
      <FadeIn delay={300}>
        <BookingCards />
      </FadeIn>

      {/* 按国家销售额 */}
      <FadeIn delay={400}>
        <SalesByCountry />
      </FadeIn>
    </div>
  );
}
