"use client";

import { ArrowDownToLine, ArrowUpFromLine, Package, Warehouse } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

import { warehouses } from "./logistics-data";

const statusConfig = {
  active: {
    label: "正常",
    variant: "default" as const,
  },
  maintenance: {
    label: "维护中",
    variant: "secondary" as const,
  },
  full: {
    label: "已满",
    variant: "destructive" as const,
  },
};

export function WarehouseOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>仓库概况</CardTitle>
        <CardDescription>各仓库库存和出入库情况</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {warehouses.map((warehouse) => {
            const usagePercent = Math.round((warehouse.usedCapacity / warehouse.totalCapacity) * 100);
            const status = statusConfig[warehouse.status];

            return (
              <div key={warehouse.id} className="hover:bg-muted/50 rounded-lg border p-4 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary rounded-lg p-2">
                      <Warehouse className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{warehouse.name}</h4>
                      <p className="text-muted-foreground text-sm">{warehouse.location}</p>
                    </div>
                  </div>
                  <Badge variant={status.variant}>{status.label}</Badge>
                </div>

                <div className="mt-4 space-y-3">
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">库容使用率</span>
                      <span className="font-medium">{usagePercent}%</span>
                    </div>
                    <Progress
                      value={usagePercent}
                      className={cn(
                        "h-2",
                        usagePercent > 90 && "[&>div]:bg-red-500",
                        usagePercent > 70 && usagePercent <= 90 && "[&>div]:bg-amber-500",
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Package className="text-muted-foreground h-4 w-4" />
                      <div>
                        <p className="text-muted-foreground">库存</p>
                        <p className="font-medium">{warehouse.itemsInStock.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowUpFromLine className="h-4 w-4 text-green-500" />
                      <div>
                        <p className="text-muted-foreground">今日出库</p>
                        <p className="font-medium">{warehouse.outboundToday.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowDownToLine className="h-4 w-4 text-blue-500" />
                      <div>
                        <p className="text-muted-foreground">今日入库</p>
                        <p className="font-medium">{warehouse.inboundToday.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
