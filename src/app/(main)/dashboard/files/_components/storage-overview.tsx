"use client";

import { HardDrive } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { fileTypeConfig, formatFileSize, storageStats } from "./files-data";

export function StorageOverview() {
  const usedPercent = Math.round((storageStats.used / storageStats.total) * 100);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <HardDrive className="text-primary h-5 w-5" />
          <div>
            <CardTitle className="text-base">存储空间</CardTitle>
            <CardDescription>
              已使用 {formatFileSize(storageStats.used)} / {formatFileSize(storageStats.total)}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Progress value={usedPercent} className="h-3" />
          <p className="text-muted-foreground text-sm">剩余 {formatFileSize(storageStats.total - storageStats.used)}</p>
        </div>

        <div className="space-y-3">
          {storageStats.breakdown.map((item) => {
            const config = fileTypeConfig[item.type];
            const percent = Math.round((item.size / storageStats.used) * 100);

            return (
              <div key={item.type} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm">{config.label}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium">{formatFileSize(item.size)}</span>
                  <span className="text-muted-foreground ml-2 text-xs">{percent}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
