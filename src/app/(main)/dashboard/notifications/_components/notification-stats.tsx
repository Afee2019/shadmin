"use client";

import { Bell, BellOff, ShieldAlert, Inbox } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { notificationStats } from "./notifications-data";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  iconBg: string;
}

function StatCard({ icon, label, value, iconBg }: StatCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 p-4">
        <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl", iconBg)}>{icon}</div>
        <div>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-muted-foreground text-sm">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export function NotificationStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        icon={<Inbox className="h-6 w-6 text-white" />}
        label="全部通知"
        value={notificationStats.total}
        iconBg="bg-primary shadow-lg shadow-primary/40"
      />
      <StatCard
        icon={<Bell className="h-6 w-6 text-white" />}
        label="未读通知"
        value={notificationStats.unread}
        iconBg="bg-blue-500 shadow-lg shadow-blue-500/40"
      />
      <StatCard
        icon={<ShieldAlert className="h-6 w-6 text-white" />}
        label="重要未读"
        value={notificationStats.highPriority}
        iconBg="bg-red-500 shadow-lg shadow-red-500/40"
      />
      <StatCard
        icon={<BellOff className="h-6 w-6 text-white" />}
        label="已读通知"
        value={notificationStats.total - notificationStats.unread}
        iconBg="bg-green-500 shadow-lg shadow-green-500/40"
      />
    </div>
  );
}
