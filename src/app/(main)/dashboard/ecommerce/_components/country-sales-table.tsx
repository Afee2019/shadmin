"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { countrySalesData } from "./ecommerce-data";

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function CountrySalesTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>按地区销售</CardTitle>
        <CardDescription>各地区销售额分布</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>地区</TableHead>
              <TableHead className="text-right">销售额</TableHead>
              <TableHead className="w-[100px]">占比</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {countrySalesData.map((item) => (
              <TableRow key={item.country}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{item.flag}</span>
                    <span className="font-medium">{item.country}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right font-medium">{formatCurrency(item.sales)}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress value={item.percentage} className="h-2 w-full" />
                    <span className="text-muted-foreground w-10 text-right text-sm">{item.percentage}%</span>
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
