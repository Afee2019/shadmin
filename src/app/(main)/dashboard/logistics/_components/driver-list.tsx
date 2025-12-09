"use client";

import { MapPin, Phone, Star } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { deliveryDrivers } from "./logistics-data";

const statusConfig = {
  available: {
    label: "空闲",
    color: "bg-green-500",
  },
  on_delivery: {
    label: "配送中",
    color: "bg-amber-500",
  },
  offline: {
    label: "离线",
    color: "bg-gray-400",
  },
};

export function DriverList() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>配送员状态</CardTitle>
            <CardDescription>实时配送员工作情况</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            查看全部
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {deliveryDrivers.map((driver) => {
            const status = statusConfig[driver.status];

            return (
              <div
                key={driver.id}
                className="hover:bg-muted/50 flex items-center justify-between rounded-lg border p-3 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={driver.avatar} alt={driver.name} />
                      <AvatarFallback>{driver.name[0]}</AvatarFallback>
                    </Avatar>
                    <span
                      className={cn(
                        "border-background absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2",
                        status.color,
                      )}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{driver.name}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {status.label}
                      </Badge>
                    </div>
                    <div className="text-muted-foreground flex items-center gap-3 text-sm">
                      <span className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        {driver.phone}
                      </span>
                      {driver.currentLocation && (
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {driver.currentLocation}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-medium">{driver.rating}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">今日 {driver.deliveriesToday} 单</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
