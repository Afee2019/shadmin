"use client";

import { formatDistanceToNow } from "date-fns";
import { zhCN } from "date-fns/locale";
import { ExternalLink, MoreHorizontal, Package } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

import { recentShipments, shipmentStatusConfig } from "./logistics-data";

export function RecentShipmentsTable() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>最近订单</CardTitle>
            <CardDescription>最新的物流订单追踪</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            查看全部
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>订单号</TableHead>
                <TableHead>客户</TableHead>
                <TableHead className="hidden md:table-cell">路线</TableHead>
                <TableHead>承运商</TableHead>
                <TableHead>状态</TableHead>
                <TableHead className="hidden lg:table-cell">预计送达</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentShipments.map((shipment) => {
                const status = shipmentStatusConfig[shipment.status];
                const timeToDelivery = formatDistanceToNow(shipment.estimatedDelivery, {
                  locale: zhCN,
                  addSuffix: true,
                });

                return (
                  <TableRow key={shipment.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Package className="text-muted-foreground h-4 w-4" />
                        <span className="font-mono text-sm">{shipment.trackingNumber}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium">{shipment.customer}</span>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="text-sm">
                        <p>{shipment.origin}</p>
                        <p className="text-muted-foreground">→ {shipment.destination}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{shipment.carrier}</span>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={cn("text-xs", status.color, status.bgColor)}>
                        {status.label}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      <span className="text-muted-foreground text-sm">{timeToDelivery}</span>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            查看详情
                          </DropdownMenuItem>
                          <DropdownMenuItem>追踪物流</DropdownMenuItem>
                          <DropdownMenuItem>联系客户</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
