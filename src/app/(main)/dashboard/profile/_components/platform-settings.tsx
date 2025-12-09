"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

interface SettingItemProps {
  id: string;
  label: string;
  defaultChecked?: boolean;
}

function SettingItem({ id, label, defaultChecked = false }: SettingItemProps) {
  return (
    <div className="flex items-center justify-between">
      <Label htmlFor={id} className="text-sm">
        {label}
      </Label>
      <Switch id={id} defaultChecked={defaultChecked} />
    </div>
  );
}

export function PlatformSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>平台设置</CardTitle>
        <CardDescription>管理您的通知和隐私偏好</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* 账户设置 */}
        <div className="space-y-3">
          <h4 className="text-muted-foreground text-xs font-semibold uppercase">账户</h4>
          <div className="space-y-3">
            <SettingItem id="follow-notify" label="有人关注我时发送邮件通知" defaultChecked />
            <SettingItem id="reply-notify" label="有人回复我的帖子时发送邮件" />
            <SettingItem id="mention-notify" label="有人提到我时发送邮件" defaultChecked />
          </div>
        </div>

        <Separator />

        {/* 应用设置 */}
        <div className="space-y-3">
          <h4 className="text-muted-foreground text-xs font-semibold uppercase">应用</h4>
          <div className="space-y-3">
            <SettingItem id="new-releases" label="新发布和项目" />
            <SettingItem id="monthly-updates" label="每月产品更新" defaultChecked />
            <SettingItem id="newsletter" label="订阅新闻通讯" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
