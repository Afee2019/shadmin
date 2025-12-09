"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function BasicInfoForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>基本信息</CardTitle>
        <CardDescription>更新您的个人信息和联系方式</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          {/* 姓名行 */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">姓</Label>
              <Input id="firstName" placeholder="张" defaultValue="张" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">名</Label>
              <Input id="lastName" placeholder="明" defaultValue="明" />
            </div>
          </div>

          {/* 联系信息行 */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">电子邮箱</Label>
              <Input id="email" type="email" placeholder="zhangming@example.com" defaultValue="zhangming@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">手机号码</Label>
              <Input id="phone" type="tel" placeholder="+86 138 0000 0000" defaultValue="+86 138 0000 0000" />
            </div>
          </div>

          {/* 位置信息行 */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="location">所在城市</Label>
              <Input id="location" placeholder="上海市" defaultValue="上海市" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="language">语言偏好</Label>
              <Select defaultValue="zh-CN">
                <SelectTrigger id="language">
                  <SelectValue placeholder="选择语言" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="zh-CN">简体中文</SelectItem>
                  <SelectItem value="zh-TW">繁體中文</SelectItem>
                  <SelectItem value="en-US">English (US)</SelectItem>
                  <SelectItem value="ja-JP">日本語</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* 个人简介 */}
          <div className="space-y-2">
            <Label htmlFor="bio">个人简介</Label>
            <Textarea
              id="bio"
              placeholder="介绍一下你自己..."
              defaultValue="拥有 10 年以上产品管理经验，专注于企业级 SaaS 产品设计与团队管理。"
              rows={4}
            />
            <p className="text-muted-foreground text-xs">简要描述您的背景和专业领域</p>
          </div>

          {/* 提交按钮 */}
          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline">
              取消
            </Button>
            <Button type="submit">保存更改</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
