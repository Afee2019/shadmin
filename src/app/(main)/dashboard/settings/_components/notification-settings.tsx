"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

interface NotificationItemProps {
  id: string;
  title: string;
  description: string;
  defaultChecked?: boolean;
}

function NotificationItem({ id, title, description, defaultChecked = false }: NotificationItemProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="space-y-0.5">
        <Label htmlFor={id} className="text-sm font-medium">
          {title}
        </Label>
        <p className="text-muted-foreground text-xs">{description}</p>
      </div>
      <Switch id={id} defaultChecked={defaultChecked} />
    </div>
  );
}

export function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>通知设置</CardTitle>
        <CardDescription>管理您接收通知的方式和频率</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* 邮件通知 */}
        <div className="space-y-4">
          <h4 className="text-muted-foreground text-sm font-semibold">邮件通知</h4>
          <div className="space-y-4">
            <NotificationItem
              id="email-mentions"
              title="提及通知"
              description="当有人在评论中@您时发送邮件"
              defaultChecked
            />
            <NotificationItem id="email-replies" title="回复通知" description="当有人回复您的帖子时发送邮件" />
            <NotificationItem
              id="email-updates"
              title="产品更新"
              description="接收产品新功能和更新通知"
              defaultChecked
            />
          </div>
        </div>

        <Separator />

        {/* 推送通知 */}
        <div className="space-y-4">
          <h4 className="text-muted-foreground text-sm font-semibold">推送通知</h4>
          <div className="space-y-4">
            <NotificationItem id="push-messages" title="即时消息" description="接收新消息的推送通知" defaultChecked />
            <NotificationItem id="push-reminders" title="任务提醒" description="接收任务截止日期提醒" defaultChecked />
            <NotificationItem id="push-news" title="系统公告" description="接收系统维护和重要公告" />
          </div>
        </div>

        <Separator />

        {/* 营销通知 */}
        <div className="space-y-4">
          <h4 className="text-muted-foreground text-sm font-semibold">营销通知</h4>
          <div className="space-y-4">
            <NotificationItem id="marketing-newsletter" title="新闻通讯" description="订阅每周新闻和精选内容" />
            <NotificationItem id="marketing-promotions" title="促销活动" description="接收特别优惠和折扣信息" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
