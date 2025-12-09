"use client";

import * as React from "react";

import { format, isSameDay, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";
import { zhCN } from "date-fns/locale";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

import type { CalendarEvent } from "./calendar-data";

interface CalendarViewProps {
  events: CalendarEvent[];
  className?: string;
}

const colorMap: Record<CalendarEvent["color"], string> = {
  primary: "bg-primary",
  success: "bg-green-500",
  warning: "bg-amber-500",
  error: "bg-red-500",
  info: "bg-blue-500",
};

const badgeColorMap: Record<CalendarEvent["color"], "default" | "outline" | "secondary" | "destructive"> = {
  primary: "default",
  success: "outline",
  warning: "secondary",
  error: "destructive",
  info: "outline",
};

interface EventDialogProps {
  event: CalendarEvent | null;
  onClose: () => void;
}

function EventDialog({ event, onClose }: EventDialogProps) {
  if (!event) return null;

  return (
    <Dialog open={!!event} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className={cn("h-3 w-3 rounded-full", colorMap[event.color])} />
            {event.title}
          </DialogTitle>
          <DialogDescription asChild>
            <div className="space-y-3 pt-4">
              {event.description && <p className="text-foreground">{event.description}</p>}
              <div className="text-muted-foreground space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Badge variant={badgeColorMap[event.color]}>{event.allDay ? "全天事件" : "定时事件"}</Badge>
                </div>
                <p>
                  <strong>日期：</strong>
                  {format(event.date, "yyyy年M月d日 EEEE", { locale: zhCN })}
                </p>
                {!event.allDay && (
                  <p>
                    <strong>时间：</strong>
                    {format(event.date, "HH:mm", { locale: zhCN })}
                    {event.endDate && ` - ${format(event.endDate, "HH:mm", { locale: zhCN })}`}
                  </p>
                )}
                {event.location && (
                  <p>
                    <strong>地点：</strong>
                    {event.location}
                  </p>
                )}
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

interface DayButtonProps {
  day: { date: Date };
  modifiers: { outside?: boolean };
  events: CalendarEvent[];
  selectedDate: Date | undefined;
  onClick?: () => void;
}

function DayButton({ day, modifiers, events, selectedDate, ...props }: DayButtonProps) {
  const isToday = isSameDay(day.date, new Date());
  const isSelected = selectedDate && isSameDay(day.date, selectedDate);

  return (
    <button
      {...props}
      className={cn(
        "relative flex h-10 w-10 flex-col items-center justify-center rounded-lg text-sm transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        isToday && "ring-primary ring-2 ring-offset-2",
        isSelected && "bg-primary text-primary-foreground",
        modifiers.outside && "text-muted-foreground opacity-50",
      )}
    >
      <span>{format(day.date, "d")}</span>
      {events.length > 0 && (
        <div className="absolute bottom-1 flex gap-0.5">
          {events.slice(0, 3).map((event) => (
            <span key={event.id} className={cn("h-1 w-1 rounded-full", colorMap[event.color])} />
          ))}
        </div>
      )}
    </button>
  );
}

export function CalendarView({ events, className }: CalendarViewProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(new Date());
  const [currentMonth, setCurrentMonth] = React.useState<Date>(new Date());
  const [selectedEvent, setSelectedEvent] = React.useState<CalendarEvent | null>(null);

  const daysWithEvents = React.useMemo(() => {
    const days = eachDayOfInterval({
      start: startOfMonth(currentMonth),
      end: endOfMonth(currentMonth),
    });
    return days.filter((day) => events.some((event) => isSameDay(event.date, day)));
  }, [events, currentMonth]);

  const selectedDateEvents = React.useMemo(() => {
    if (!selectedDate) return [];
    return events.filter((event) => isSameDay(event.date, selectedDate));
  }, [events, selectedDate]);

  const getEventsForDay = React.useCallback(
    (day: Date) => events.filter((event) => isSameDay(event.date, day)),
    [events],
  );

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleToday = () => {
    setCurrentMonth(new Date());
    setSelectedDate(new Date());
  };

  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg">{format(currentMonth, "yyyy年 M月", { locale: zhCN })}</CardTitle>
        <div className="flex items-center gap-1">
          <Button variant="outline" size="icon" className="h-8 w-8" onClick={handlePrevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="h-8" onClick={handleToday}>
            今天
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8" onClick={handleNextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          month={currentMonth}
          onMonthChange={setCurrentMonth}
          locale={zhCN}
          showOutsideDays={true}
          modifiers={{ hasEvent: daysWithEvents }}
          modifiersClassNames={{ hasEvent: "has-event" }}
          components={{
            DayButton: ({ day, modifiers, ...props }) => (
              <DayButton
                day={day}
                modifiers={modifiers}
                events={getEventsForDay(day.date)}
                selectedDate={selectedDate}
                {...props}
              />
            ),
          }}
          classNames={{
            months: "w-full",
            month: "w-full",
            month_caption: "hidden",
            nav: "hidden",
            weekdays: "flex w-full",
            weekday: "text-muted-foreground flex-1 text-center text-xs font-medium py-2",
            week: "flex w-full",
            day: "flex-1 flex items-center justify-center p-0.5",
            outside: "opacity-50",
          }}
        />

        {selectedDate && selectedDateEvents.length > 0 && (
          <div className="mt-4 space-y-2 border-t pt-4">
            <h4 className="text-muted-foreground text-sm font-medium">
              {format(selectedDate, "M月d日 EEEE", { locale: zhCN })}
            </h4>
            <ScrollArea className="max-h-[200px]">
              <div className="space-y-2">
                {selectedDateEvents.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => setSelectedEvent(event)}
                    className="hover:bg-muted/50 flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-colors"
                  >
                    <div className={cn("h-10 w-1 shrink-0 rounded-full", colorMap[event.color])} />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium">{event.title}</p>
                      <p className="text-muted-foreground text-xs">
                        {event.allDay ? "全天" : format(event.date, "HH:mm", { locale: zhCN })}
                        {event.location && ` · ${event.location}`}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>
        )}
      </CardContent>

      <EventDialog event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </Card>
  );
}
