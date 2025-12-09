"use client";

import * as React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export interface AboutFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio: string;
}

interface StepAboutProps {
  data: AboutFormData;
  onChange: (data: AboutFormData) => void;
}

export function StepAbout({ data, onChange }: StepAboutProps) {
  const handleChange = (field: keyof AboutFormData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold">基本信息</h3>
        <p className="text-muted-foreground text-sm">请填写您的个人基本信息</p>
      </div>

      <div className="mx-auto max-w-md space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">名字</Label>
            <Input
              id="firstName"
              placeholder="请输入名字"
              value={data.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">姓氏</Label>
            <Input
              id="lastName"
              placeholder="请输入姓氏"
              value={data.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">电子邮箱</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">手机号码</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="请输入手机号码"
            value={data.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">个人简介</Label>
          <Textarea
            id="bio"
            placeholder="简单介绍一下您自己..."
            rows={3}
            value={data.bio}
            onChange={(e) => handleChange("bio", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
