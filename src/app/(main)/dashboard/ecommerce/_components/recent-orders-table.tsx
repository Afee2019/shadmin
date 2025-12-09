"use client";

import { formatDistanceToNow } from "date-fns";
import { zhCN } from "date-fns/locale";
import { MoreHorizontal } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { type Order, recentOrders } from "./ecommerce-data";

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

const statusColors: Record<Order["status"], string> = {
  待处理: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  已发货: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  已完成: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  已取消: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  已退款: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
};

export function RecentOrdersTable() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>最近订单</CardTitle>
          <CardDescription>最新 5 笔订单记录</CardDescription>
        </div>
        <Button variant="outline" size="sm">
          查看全部
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>订单号</TableHead>
                <TableHead>客户</TableHead>
                <TableHead className="hidden text-center md:table-cell">商品数</TableHead>
                <TableHead className="text-right">金额</TableHead>
                <TableHead className="text-center">状态</TableHead>
                <TableHead className="hidden md:table-cell">时间</TableHead>
                <TableHead className="w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={order.customer.avatar} alt={order.customer.name} />
                        <AvatarFallback>{order.customer.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="hidden md:block">
                        <div className="text-sm font-medium">{order.customer.name}</div>
                        <div className="text-muted-foreground text-xs">{order.customer.email}</div>
                      </div>
                      <span className="md:hidden">{order.customer.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="hidden text-center md:table-cell">{order.products}</TableCell>
                  <TableCell className="text-right font-medium">{formatCurrency(order.total)}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant="secondary" className={statusColors[order.status]}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground hidden text-sm md:table-cell">
                    {formatDistanceToNow(order.date, { addSuffix: true, locale: zhCN })}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>查看详情</DropdownMenuItem>
                        <DropdownMenuItem>编辑订单</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">取消订单</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
