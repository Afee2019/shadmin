import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const countrySalesData = [
  { country: "中国", flag: "🇨🇳", sales: 230500, percentage: 42 },
  { country: "美国", flag: "🇺🇸", sales: 152300, percentage: 28 },
  { country: "日本", flag: "🇯🇵", sales: 68200, percentage: 12 },
  { country: "德国", flag: "🇩🇪", sales: 45600, percentage: 8 },
  { country: "英国", flag: "🇬🇧", sales: 34500, percentage: 6 },
  { country: "其他", flag: "🌍", sales: 22000, percentage: 4 },
];

const topProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    category: "电子产品",
    price: 9999,
    sales: 1234,
    revenue: 12336766,
    trend: "up" as const,
  },
  {
    id: 2,
    name: "MacBook Pro 14",
    category: "电脑",
    price: 14999,
    sales: 856,
    revenue: 12839144,
    trend: "up" as const,
  },
  {
    id: 3,
    name: "AirPods Pro 2",
    category: "配件",
    price: 1899,
    sales: 2341,
    revenue: 4445559,
    trend: "down" as const,
  },
  {
    id: 4,
    name: "iPad Air",
    category: "平板",
    price: 4799,
    sales: 678,
    revenue: 3253722,
    trend: "up" as const,
  },
  {
    id: 5,
    name: "Apple Watch Ultra",
    category: "穿戴",
    price: 6299,
    sales: 432,
    revenue: 2721168,
    trend: "down" as const,
  },
];

export function SalesByCountryTable() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>按国家销售额</CardTitle>
        <CardDescription>各地区销售分布</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>国家</TableHead>
              <TableHead className="text-right">销售额</TableHead>
              <TableHead className="w-[100px]">占比</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {countrySalesData.map((item) => (
              <TableRow key={item.country}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{item.flag}</span>
                    <span>{item.country}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right font-medium">¥{item.sales.toLocaleString()}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress value={item.percentage} className="h-2" />
                    <span className="text-muted-foreground w-10 text-xs">{item.percentage}%</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export function TopProductsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>热销产品</CardTitle>
        <CardDescription>按销量排序的产品列表</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>产品</TableHead>
              <TableHead className="hidden sm:table-cell">分类</TableHead>
              <TableHead className="text-right">单价</TableHead>
              <TableHead className="text-right">销量</TableHead>
              <TableHead className="hidden text-right md:table-cell">营收</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell className="text-muted-foreground hidden sm:table-cell">{product.category}</TableCell>
                <TableCell className="text-right">¥{product.price.toLocaleString()}</TableCell>
                <TableCell className="text-right">{product.sales.toLocaleString()}</TableCell>
                <TableCell className="hidden text-right md:table-cell">
                  ¥{(product.revenue / 10000).toFixed(1)}万
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
