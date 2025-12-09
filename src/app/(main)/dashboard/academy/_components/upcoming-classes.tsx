"use client";

import { formatDistanceToNow, format } from "date-fns";
import { zhCN } from "date-fns/locale";
import { Calendar, Clock, Radio, HelpCircle, FileText } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { upcomingClasses } from "./academy-data";

const typeConfig = {
  直播: {
    icon: Radio,
    color: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
  },
  答疑: {
    icon: HelpCircle,
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  },
  考试: {
    icon: FileText,
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  },
};

export function UpcomingClasses() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>即将开始</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {upcomingClasses.map((item) => {
          const config = typeConfig[item.type];
          const Icon = config.icon;
          const timeFromNow = formatDistanceToNow(item.startTime, {
            locale: zhCN,
            addSuffix: true,
          });
          const formattedTime = format(item.startTime, "MM/dd HH:mm");

          return (
            <div key={item.id} className="flex items-center gap-4 rounded-lg border p-4">
              <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl", config.color)}>
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">{item.title}</h4>
                  <Badge variant="outline" className={cn("text-xs", config.color)}>
                    {item.type}
                  </Badge>
                </div>
                <div className="text-muted-foreground mt-1 flex items-center gap-2 text-sm">
                  <Avatar className="h-5 w-5">
                    <AvatarImage src={item.instructorAvatar} />
                    <AvatarFallback>{item.instructor[0]}</AvatarFallback>
                  </Avatar>
                  <span>{item.instructor}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {item.duration}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-primary flex items-center gap-1 text-sm font-medium">
                  <Calendar className="h-4 w-4" />
                  {formattedTime}
                </div>
                <p className="text-muted-foreground mt-1 text-xs">{timeFromNow}</p>
              </div>
            </div>
          );
        })}
        <Button variant="outline" className="w-full">
          查看完整日程
        </Button>
      </CardContent>
    </Card>
  );
}
