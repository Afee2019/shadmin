"use client";

import { format } from "date-fns";
import { zhCN } from "date-fns/locale";
import { Calendar, Clock, MapPin } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

import type { CalendarEvent } from "./calendar-data";

interface EventListProps {
  events: CalendarEvent[];
  title?: string;
  className?: string;
}

const colorMap = {
  primary: "bg-primary",
  success: "bg-green-500",
  warning: "bg-amber-500",
  error: "bg-red-500",
  info: "bg-blue-500",
};

export function EventList({ events, title = "即将到来的活动", className }: EventListProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Calendar className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px]">
          <div className="space-y-1 px-4 pb-4">
            {events.length === 0 ? (
              <p className="text-muted-foreground py-8 text-center text-sm">暂无活动</p>
            ) : (
              events.map((event) => (
                <div
                  key={event.id}
                  className="hover:bg-muted/50 flex items-start gap-3 rounded-lg p-3 transition-colors"
                >
                  <div className={cn("mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full", colorMap[event.color])} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{event.title}</p>
                    {event.description && (
                      <p className="text-muted-foreground mt-0.5 line-clamp-2 text-sm">{event.description}</p>
                    )}
                    <div className="text-muted-foreground mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {event.allDay
                          ? format(event.date, "M月d日", { locale: zhCN })
                          : format(event.date, "M月d日 HH:mm", {
                              locale: zhCN,
                            })}
                      </span>
                      {event.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {event.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
