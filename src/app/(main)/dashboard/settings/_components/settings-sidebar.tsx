"use client";

import { User, FileText, Lock, Bell, Palette, AlertTriangle } from "lucide-react";

import { cn } from "@/lib/utils";

const sidenavItems = [
  { icon: User, label: "个人资料", href: "#profile" },
  { icon: FileText, label: "基本信息", href: "#basic-info" },
  { icon: Lock, label: "修改密码", href: "#password" },
  { icon: Bell, label: "通知设置", href: "#notifications" },
  { icon: Palette, label: "外观设置", href: "#appearance" },
  { icon: AlertTriangle, label: "危险操作", href: "#danger" },
];

export function SettingsSidebar() {
  return (
    <nav className="bg-card sticky top-20 rounded-xl border p-4 shadow-sm">
      <h3 className="text-muted-foreground mb-4 px-3 text-sm font-semibold">设置</h3>
      <ul className="space-y-1">
        {sidenavItems.map(({ icon: Icon, label, href }) => (
          <li key={href}>
            <a
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
