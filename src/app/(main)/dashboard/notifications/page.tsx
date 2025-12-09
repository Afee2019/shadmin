"use client";

import { FadeIn } from "@/components/animation";

import { NotificationList } from "./_components/notification-list";
import { NotificationSettings } from "./_components/notification-settings";
import { NotificationStats } from "./_components/notification-stats";

export default function NotificationsPage() {
  return (
    <div className="space-y-6 py-6">
      <FadeIn>
        <div>
          <h1 className="text-2xl font-bold">通知中心</h1>
          <p className="text-muted-foreground">管理和查看您的所有通知</p>
        </div>
      </FadeIn>

      {/* 统计卡片 */}
      <FadeIn delay={100}>
        <NotificationStats />
      </FadeIn>

      {/* 主体内容 */}
      <FadeIn delay={200}>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <NotificationList />
          </div>
          <div>
            <NotificationSettings />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
