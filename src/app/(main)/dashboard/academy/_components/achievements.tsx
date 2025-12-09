"use client";

import { formatDistanceToNow } from "date-fns";
import { zhCN } from "date-fns/locale";
import { ChevronRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { achievements } from "./academy-data";

const typeConfig = {
  certificate: {
    label: "证书",
    color: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
  },
  badge: {
    label: "徽章",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  },
  milestone: {
    label: "里程碑",
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  },
};

export function Achievements() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>最近成就</CardTitle>
        <Button variant="ghost" size="sm">
          查看全部 <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {achievements.map((achievement) => {
          const config = typeConfig[achievement.type];
          const timeAgo = formatDistanceToNow(achievement.earnedAt, {
            locale: zhCN,
            addSuffix: true,
          });

          return (
            <div
              key={achievement.id}
              className="hover:bg-muted/50 flex items-center gap-3 rounded-lg border p-3 transition-colors"
            >
              <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-lg text-xl">
                {achievement.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">{achievement.title}</h4>
                  <Badge variant="secondary" className={cn("text-xs", config.color)}>
                    {config.label}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">{achievement.description}</p>
              </div>
              <span className="text-muted-foreground text-xs">{timeAgo}</span>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
