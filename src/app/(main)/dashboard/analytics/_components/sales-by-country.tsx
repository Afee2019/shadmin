"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const salesData = [
  {
    country: "中国",
    flag: "🇨🇳",
    sales: 230500,
    value: "¥1,542,000",
    bounce: "29.9%",
  },
  {
    country: "美国",
    flag: "🇺🇸",
    sales: 156100,
    value: "¥987,000",
    bounce: "32.4%",
  },
  {
    country: "英国",
    flag: "🇬🇧",
    sales: 89200,
    value: "¥654,000",
    bounce: "28.1%",
  },
  {
    country: "德国",
    flag: "🇩🇪",
    sales: 67800,
    value: "¥432,000",
    bounce: "35.6%",
  },
  {
    country: "日本",
    flag: "🇯🇵",
    sales: 54300,
    value: "¥321,000",
    bounce: "24.8%",
  },
  {
    country: "法国",
    flag: "🇫🇷",
    sales: 43200,
    value: "¥276,000",
    bounce: "31.2%",
  },
];

export function SalesByCountry() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>按国家销售额</CardTitle>
        <CardDescription>查看各国家/地区的销售数据、价值和跳出率</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>国家</TableHead>
              <TableHead className="text-right">销售额</TableHead>
              <TableHead className="text-right">价值</TableHead>
              <TableHead className="text-right">跳出率</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {salesData.map((item) => (
              <TableRow key={item.country}>
                <TableCell className="font-medium">
                  <span className="mr-2">{item.flag}</span>
                  {item.country}
                </TableCell>
                <TableCell className="text-right">{item.sales.toLocaleString()}</TableCell>
                <TableCell className="text-right">{item.value}</TableCell>
                <TableCell className="text-right">{item.bounce}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
