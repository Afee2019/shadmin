"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Timeline, TimelineItem } from "@/components/ui/timeline";

import { timelineEvents, projectTimeline } from "./_components/timeline-data";

export default function TimelinePage() {
  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">时间轴</h1>
        <p className="text-muted-foreground">展示事件的时间线视图，适用于活动日志、项目进度等场景</p>
      </div>

      {/* 时间轴展示 */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* 浅色时间轴 */}
        <Card>
          <CardHeader>
            <CardTitle>活动日志</CardTitle>
          </CardHeader>
          <CardContent>
            <Timeline>
              {timelineEvents.map((event, index) => (
                <TimelineItem
                  key={`${event.title}-${index}`}
                  color={event.color}
                  icon={<event.icon className="h-4 w-4" />}
                  title={event.title}
                  dateTime={event.dateTime}
                  description={event.description}
                  badges={event.badges}
                  isLast={index === timelineEvents.length - 1}
                />
              ))}
            </Timeline>
          </CardContent>
        </Card>

        {/* 深色时间轴 */}
        <Card className="bg-foreground">
          <CardHeader>
            <CardTitle className="text-background">项目进度</CardTitle>
          </CardHeader>
          <CardContent>
            <Timeline variant="dark">
              {projectTimeline.map((event, index) => (
                <TimelineItem
                  key={`${event.title}-${index}`}
                  color={event.color}
                  icon={<event.icon className="h-4 w-4" />}
                  title={event.title}
                  dateTime={event.dateTime}
                  description={event.description}
                  badges={event.badges}
                  isLast={index === projectTimeline.length - 1}
                  isDark
                />
              ))}
            </Timeline>
          </CardContent>
        </Card>
      </div>

      {/* 组件说明 */}
      <Card>
        <CardHeader>
          <CardTitle>组件用法</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-4">
              <h4 className="font-medium">颜色变体</h4>
              <p className="text-muted-foreground mt-1 text-sm">
                支持 primary、secondary、success、warning、error、info 六种颜色
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="font-medium">深色模式</h4>
              <p className="text-muted-foreground mt-1 text-sm">
                使用 variant=&quot;dark&quot; 和 isDark 属性启用深色样式
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="font-medium">徽章标签</h4>
              <p className="text-muted-foreground mt-1 text-sm">通过 badges 属性添加分类标签</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
