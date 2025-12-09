"use client";

import { Plus, Filter, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

import { calendarEvents, upcomingEvents } from "./_components/calendar-data";
import { CalendarView } from "./_components/calendar-view";
import { EventList } from "./_components/event-list";

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      {/* 页面标题和操作栏 */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">日历</h1>
          <p className="text-muted-foreground hidden sm:block">管理您的日程安排和活动</p>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>筛选事件</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>全部事件</DropdownMenuItem>
              <DropdownMenuItem>会议</DropdownMenuItem>
              <DropdownMenuItem>任务</DropdownMenuItem>
              <DropdownMenuItem>提醒</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
          <Button>
            <Plus className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">添加事件</span>
          </Button>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* 日历视图 */}
        <div className="lg:col-span-2">
          <CalendarView events={calendarEvents} />
        </div>

        {/* 即将到来的事件 */}
        <div className="lg:col-span-1">
          <EventList events={upcomingEvents} />
        </div>
      </div>

      {/* 事件颜色说明 */}
      <div className="flex flex-wrap items-center gap-4 rounded-lg border p-4">
        <span className="text-muted-foreground text-sm font-medium">事件类型：</span>
        <div className="flex items-center gap-2">
          <span className="bg-primary h-3 w-3 rounded-full" />
          <span className="text-sm">会议</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-green-500" />
          <span className="text-sm">活动</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-amber-500" />
          <span className="text-sm">提醒</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="text-sm">截止日期</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-blue-500" />
          <span className="text-sm">外出</span>
        </div>
      </div>
    </div>
  );
}
