"use client";

import * as React from "react";

import { Brush, Code2, Laptop, Smartphone } from "lucide-react";

import { cn } from "@/lib/utils";

interface AccountType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const accountTypes: AccountType[] = [
  {
    id: "design",
    title: "设计师",
    description: "UI/UX 设计、图形设计",
    icon: <Brush className="h-8 w-8" />,
  },
  {
    id: "frontend",
    title: "前端开发",
    description: "Web 前端、移动端开发",
    icon: <Code2 className="h-8 w-8" />,
  },
  {
    id: "backend",
    title: "后端开发",
    description: "服务端、数据库、API",
    icon: <Laptop className="h-8 w-8" />,
  },
  {
    id: "mobile",
    title: "移动开发",
    description: "iOS、Android 应用开发",
    icon: <Smartphone className="h-8 w-8" />,
  },
];

export interface AccountFormData {
  selectedTypes: string[];
}

interface StepAccountProps {
  data: AccountFormData;
  onChange: (data: AccountFormData) => void;
}

export function StepAccount({ data, onChange }: StepAccountProps) {
  const toggleType = (typeId: string) => {
    const newTypes = data.selectedTypes.includes(typeId)
      ? data.selectedTypes.filter((id) => id !== typeId)
      : [...data.selectedTypes, typeId];
    onChange({ ...data, selectedTypes: newTypes });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold">您的专业领域</h3>
        <p className="text-muted-foreground text-sm">请选择您擅长的领域（可多选）</p>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
        {accountTypes.map((type) => {
          const isSelected = data.selectedTypes.includes(type.id);
          return (
            <button
              key={type.id}
              type="button"
              onClick={() => toggleType(type.id)}
              className={cn(
                "flex flex-col items-center gap-3 rounded-xl border-2 p-4 transition-all",
                isSelected ? "border-primary bg-primary/5 text-primary" : "border-muted hover:border-primary/50",
              )}
            >
              <div className={cn("rounded-full p-3", isSelected ? "bg-primary/10" : "bg-muted")}>{type.icon}</div>
              <div className="text-center">
                <div className="font-medium">{type.title}</div>
                <div className="text-muted-foreground text-xs">{type.description}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
