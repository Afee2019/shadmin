"use client";

import { Star } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { topProducts } from "./ecommerce-data";

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function TopProductsTable() {
  // 计算最大销量用于进度条
  const maxSales = Math.max(...topProducts.map((p) => p.sales));

  return (
    <Card>
      <CardHeader>
        <CardTitle>热销商品</CardTitle>
        <CardDescription>销量最高的前 5 款商品</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>商品</TableHead>
                <TableHead className="text-right">价格</TableHead>
                <TableHead className="text-right">销量</TableHead>
                <TableHead className="hidden text-right md:table-cell">销售额</TableHead>
                <TableHead className="hidden text-center md:table-cell">评分</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 rounded-lg">
                        <AvatarImage src={product.image} alt={product.name} />
                        <AvatarFallback className="rounded-lg">{product.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <Badge variant="secondary" className="mt-1 text-xs">
                          {product.category}
                        </Badge>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{formatCurrency(product.price)}</TableCell>
                  <TableCell className="text-right">
                    <div className="space-y-1">
                      <div className="font-medium">{product.sales.toLocaleString()}</div>
                      <Progress value={(product.sales / maxSales) * 100} className="h-1.5 w-16" />
                    </div>
                  </TableCell>
                  <TableCell className="hidden text-right md:table-cell">{formatCurrency(product.revenue)}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="font-medium">{product.rating}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
