"use client";

import { TrendingUp } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

import { regionDeliveries } from "./logistics-data";

export function RegionStats() {
  const maxOrders = Math.max(...regionDeliveries.map((r) => r.totalOrders));

  return (
    <Card>
      <CardHeader>
        <CardTitle>地区配送统计</CardTitle>
        <CardDescription>各地区配送数据概览</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {regionDeliveries.map((region) => {
            const deliveryRate = Math.round((region.delivered / region.totalOrders) * 100);
            const progressWidth = (region.totalOrders / maxOrders) * 100;

            return (
              <div key={region.region} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{region.region}</h4>
                    <p className="text-muted-foreground text-sm">
                      {region.delivered.toLocaleString()} / {region.totalOrders.toLocaleString()} 单
                    </p>
                  </div>
                  <div className="text-right">
                    <div
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium",
                        region.onTimeRate >= 94 ? "text-green-500" : "text-amber-500",
                      )}
                    >
                      <TrendingUp className="h-4 w-4" />
                      {region.onTimeRate}%
                    </div>
                    <p className="text-muted-foreground text-xs">准时率</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <Progress value={progressWidth} className="h-2" />
                  <div className="text-muted-foreground flex justify-between text-xs">
                    <span>完成率: {deliveryRate}%</span>
                    <span>平均 {region.avgDeliveryTime} 天</span>
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
