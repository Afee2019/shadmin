"use client";

import * as React from "react";

import { isSameDay } from "date-fns";
import { zhCN } from "date-fns/locale";
import { DayPicker } from "react-day-picker";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import type { CalendarEvent } from "./calendar-data";

interface MiniCalendarProps {
  events: CalendarEvent[];
  selectedDate?: Date;
  onSelectDate?: (date: Date | undefined) => void;
  className?: string;
}

const colorMap = {
  primary: "bg-primary",
  success: "bg-green-500",
  warning: "bg-amber-500",
  error: "bg-red-500",
  info: "bg-blue-500",
};

export function MiniCalendar({ events, selectedDate, onSelectDate, className }: MiniCalendarProps) {
  const getEventsForDay = (day: Date) => {
    return events.filter((event) => isSameDay(event.date, day));
  };

  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">日历</CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={onSelectDate}
          locale={zhCN}
          showOutsideDays={false}
          components={{
            DayButton: ({ day, modifiers, ...props }) => {
              const dayEvents = getEventsForDay(day.date);
              const isToday = isSameDay(day.date, new Date());
              const isSelected = selectedDate && isSameDay(day.date, selectedDate);

              return (
                <button
                  {...props}
                  className={cn(
                    "relative flex h-8 w-8 items-center justify-center rounded-md text-sm transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    isToday && "text-primary font-bold",
                    isSelected && "bg-primary text-primary-foreground",
                    modifiers.outside && "text-muted-foreground opacity-50",
                  )}
                >
                  {day.date.getDate()}
                  {dayEvents.length > 0 && !isSelected && (
                    <span className={cn("absolute bottom-0.5 h-1 w-1 rounded-full", colorMap[dayEvents[0].color])} />
                  )}
                </button>
              );
            },
          }}
          classNames={{
            months: "w-full",
            month: "w-full",
            month_caption: "flex justify-center py-2 font-medium text-sm",
            nav: "flex items-center justify-between absolute inset-x-0 top-0 px-1",
            button_previous: "h-7 w-7 rounded-md hover:bg-accent inline-flex items-center justify-center",
            button_next: "h-7 w-7 rounded-md hover:bg-accent inline-flex items-center justify-center",
            weekdays: "flex w-full",
            weekday: "text-muted-foreground flex-1 text-center text-xs py-1",
            week: "flex w-full",
            day: "flex-1 flex items-center justify-center p-0.5",
          }}
        />
      </CardContent>
    </Card>
  );
}
