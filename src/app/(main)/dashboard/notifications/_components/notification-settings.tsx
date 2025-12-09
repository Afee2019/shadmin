"use client";

import { Bell, Mail, MessageSquare, Smartphone, Volume2 } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface NotificationSettingProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  defaultChecked?: boolean;
}

function NotificationSetting({ icon, title, description, defaultChecked = true }: NotificationSettingProps) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div className="flex items-center gap-3">
        <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-lg">{icon}</div>
        <div>
          <Label className="font-medium">{title}</Label>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
      <Switch defaultChecked={defaultChecked} />
    </div>
  );
}

export function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>通知设置</CardTitle>
        <CardDescription>管理您的通知偏好</CardDescription>
      </CardHeader>
      <CardContent className="divide-y">
        <NotificationSetting
          icon={<Bell className="text-muted-foreground h-5 w-5" />}
          title="推送通知"
          description="接收浏览器推送通知"
          defaultChecked={true}
        />
        <NotificationSetting
          icon={<Mail className="text-muted-foreground h-5 w-5" />}
          title="邮件通知"
          description="通过邮件接收重要通知"
          defaultChecked={true}
        />
        <NotificationSetting
          icon={<Smartphone className="text-muted-foreground h-5 w-5" />}
          title="短信通知"
          description="通过短信接收紧急通知"
          defaultChecked={false}
        />
        <NotificationSetting
          icon={<MessageSquare className="text-muted-foreground h-5 w-5" />}
          title="消息提醒"
          description="接收新消息通知"
          defaultChecked={true}
        />
        <NotificationSetting
          icon={<Volume2 className="text-muted-foreground h-5 w-5" />}
          title="声音提示"
          description="播放通知提示音"
          defaultChecked={false}
        />
      </CardContent>
    </Card>
  );
}
