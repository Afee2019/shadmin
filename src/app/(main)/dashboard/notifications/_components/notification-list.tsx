"use client";

import * as React from "react";

import Link from "next/link";

import { formatDistanceToNow, isToday, isYesterday } from "date-fns";
import { zhCN } from "date-fns/locale";
import {
  Bell,
  BellOff,
  Check,
  CheckCheck,
  ChevronRight,
  CreditCard,
  Info,
  MessageCircle,
  RefreshCw,
  ShieldAlert,
  Trash2,
  UserPlus,
  Clock,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

import {
  notifications as initialNotifications,
  notificationTypeConfig,
  type Notification,
  type NotificationType,
} from "./notifications-data";

const typeIcons: Record<NotificationType, React.ElementType> = {
  system: Info,
  message: MessageCircle,
  alert: ShieldAlert,
  update: RefreshCw,
  payment: CreditCard,
  social: UserPlus,
  reminder: Clock,
};

function groupNotificationsByDate(notifications: Notification[]) {
  const groups: { label: string; notifications: Notification[] }[] = [];

  const today: Notification[] = [];
  const yesterday: Notification[] = [];
  const thisWeek: Notification[] = [];
  const earlier: Notification[] = [];

  for (const notification of notifications) {
    if (isToday(notification.timestamp)) {
      today.push(notification);
    } else if (isYesterday(notification.timestamp)) {
      yesterday.push(notification);
    } else {
      const daysAgo = Math.floor((Date.now() - notification.timestamp.getTime()) / (1000 * 60 * 60 * 24));
      if (daysAgo < 7) {
        thisWeek.push(notification);
      } else {
        earlier.push(notification);
      }
    }
  }

  if (today.length > 0) groups.push({ label: "今天", notifications: today });
  if (yesterday.length > 0) groups.push({ label: "昨天", notifications: yesterday });
  if (thisWeek.length > 0) groups.push({ label: "本周", notifications: thisWeek });
  if (earlier.length > 0) groups.push({ label: "更早", notifications: earlier });

  return groups;
}

// 通知图标组件
function NotificationIcon({ notification }: { notification: Notification }) {
  const config = notificationTypeConfig[notification.type];
  const Icon = typeIcons[notification.type];

  if (notification.avatar) {
    return (
      <Avatar className="h-10 w-10">
        <AvatarImage src={notification.avatar} />
        <AvatarFallback>{notification.sender?.[0] ?? "?"}</AvatarFallback>
      </Avatar>
    );
  }

  return (
    <div className={cn("flex h-10 w-10 items-center justify-center rounded-full", config.bgColor)}>
      <Icon className={cn("h-5 w-5", config.color)} />
    </div>
  );
}

// 通知内容组件
function NotificationContent({ notification }: { notification: Notification }) {
  const config = notificationTypeConfig[notification.type];
  const timeAgo = formatDistanceToNow(notification.timestamp, {
    locale: zhCN,
    addSuffix: true,
  });

  return (
    <div className="min-w-0 flex-1">
      <div className="flex items-center gap-2">
        <h4 className={cn("font-medium", !notification.read && "font-semibold")}>{notification.title}</h4>
        {notification.priority === "high" && (
          <Badge variant="destructive" className="text-xs">
            重要
          </Badge>
        )}
        {!notification.read && <span className="bg-primary h-2 w-2 rounded-full" />}
      </div>
      <p className="text-muted-foreground mt-1 line-clamp-2 text-sm">{notification.description}</p>
      <div className="text-muted-foreground mt-2 flex items-center gap-3 text-xs">
        <Badge variant="outline" className={cn("text-xs", config.color)}>
          {config.label}
        </Badge>
        <span>{timeAgo}</span>
      </div>
    </div>
  );
}

interface NotificationItemProps {
  notification: Notification;
  selected: boolean;
  onSelect: (id: string, checked: boolean) => void;
  onMarkAsRead: (id: string) => void;
}

function NotificationItem({ notification, selected, onSelect, onMarkAsRead }: NotificationItemProps) {
  const content = (
    <div
      className={cn(
        "flex items-start gap-4 rounded-lg border p-4 transition-colors",
        !notification.read && "bg-muted/50 border-primary/20",
        notification.read && "hover:bg-muted/30",
      )}
    >
      <Checkbox
        checked={selected}
        onCheckedChange={(checked) => onSelect(notification.id, checked as boolean)}
        onClick={(e) => e.stopPropagation()}
        className="mt-1"
      />

      <NotificationIcon notification={notification} />
      <NotificationContent notification={notification} />

      <div className="flex items-center gap-1">
        {!notification.read && (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onMarkAsRead(notification.id);
            }}
          >
            <Check className="h-4 w-4" />
          </Button>
        )}
        {notification.actionUrl && <ChevronRight className="text-muted-foreground h-4 w-4" />}
      </div>
    </div>
  );

  if (notification.actionUrl) {
    return (
      <Link href={notification.actionUrl} className="block">
        {content}
      </Link>
    );
  }

  return content;
}

export function NotificationList() {
  const [notifications, setNotifications] = React.useState(initialNotifications);
  const [selectedIds, setSelectedIds] = React.useState<Set<string>>(new Set());
  const [filter, setFilter] = React.useState<"all" | "unread">("all");

  const filteredNotifications = React.useMemo(() => {
    if (filter === "unread") {
      return notifications.filter((n) => !n.read);
    }
    return notifications;
  }, [notifications, filter]);

  const groupedNotifications = React.useMemo(
    () => groupNotificationsByDate(filteredNotifications),
    [filteredNotifications],
  );

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleSelect = (id: string, checked: boolean) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (checked) {
        next.add(id);
      } else {
        next.delete(id);
      }
      return next;
    });
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(new Set(filteredNotifications.map((n) => n.id)));
    } else {
      setSelectedIds(new Set());
    }
  };

  const handleMarkAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  const handleMarkSelectedAsRead = () => {
    setNotifications((prev) => prev.map((n) => (selectedIds.has(n.id) ? { ...n, read: true } : n)));
    setSelectedIds(new Set());
  };

  const handleDeleteSelected = () => {
    setNotifications((prev) => prev.filter((n) => !selectedIds.has(n.id)));
    setSelectedIds(new Set());
  };

  const handleMarkAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="space-y-4">
      {/* 工具栏 */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Checkbox
            checked={selectedIds.size > 0 && selectedIds.size === filteredNotifications.length}
            onCheckedChange={handleSelectAll}
          />
          <span className="text-muted-foreground text-sm">
            {selectedIds.size > 0 ? `已选择 ${selectedIds.size} 项` : `共 ${filteredNotifications.length} 条通知`}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {selectedIds.size > 0 ? (
            <>
              <Button variant="outline" size="sm" onClick={handleMarkSelectedAsRead}>
                <CheckCheck className="mr-2 h-4 w-4" />
                标记已读
              </Button>
              <Button variant="outline" size="sm" onClick={handleDeleteSelected}>
                <Trash2 className="mr-2 h-4 w-4" />
                删除
              </Button>
            </>
          ) : (
            <>
              <Button variant={filter === "all" ? "default" : "outline"} size="sm" onClick={() => setFilter("all")}>
                <Bell className="mr-2 h-4 w-4" />
                全部
              </Button>
              <Button
                variant={filter === "unread" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("unread")}
              >
                <BellOff className="mr-2 h-4 w-4" />
                未读 ({unreadCount})
              </Button>
              {unreadCount > 0 && (
                <Button variant="ghost" size="sm" onClick={handleMarkAllAsRead}>
                  <CheckCheck className="mr-2 h-4 w-4" />
                  全部已读
                </Button>
              )}
            </>
          )}
        </div>
      </div>

      {/* 通知列表 */}
      {groupedNotifications.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Bell className="text-muted-foreground/50 h-12 w-12" />
          <h3 className="mt-4 font-semibold">暂无通知</h3>
          <p className="text-muted-foreground mt-2 text-sm">
            {filter === "unread" ? "所有通知都已读" : "您还没有收到任何通知"}
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {groupedNotifications.map((group) => (
            <div key={group.label}>
              <h3 className="text-muted-foreground mb-3 text-sm font-medium">{group.label}</h3>
              <div className="space-y-2">
                {group.notifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                    selected={selectedIds.has(notification.id)}
                    onSelect={handleSelect}
                    onMarkAsRead={handleMarkAsRead}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
