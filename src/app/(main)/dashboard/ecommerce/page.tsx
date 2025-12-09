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
      <div>
        <h1 className="text-2xl font-bold tracking-tight">电商仪表盘</h1>
        <p className="text-muted-foreground">实时监控销售数据和订单状态</p>
      </div>

      {/* 统计卡片 */}
      <StatsCards />

      {/* 第一行图表：销售趋势 + 分类销售 */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SalesTrendChart />
        </div>
        <CategoryChart />
      </div>

      {/* 第二行图表：销售漏斗 + 订单状态 */}
      <div className="grid gap-6 md:grid-cols-2">
        <SalesFunnelChart />
        <OrderStatusChart />
      </div>

      {/* 第三行表格：热销商品 */}
      <TopProductsTable />

      {/* 第四行：最近订单 + 按地区销售 */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentOrdersTable />
        </div>
        <CountrySalesTable />
      </div>
    </div>
  );
}
