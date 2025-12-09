// Notifications 通知中心数据

export type NotificationType = "system" | "message" | "alert" | "update" | "payment" | "social" | "reminder";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  avatar?: string;
  sender?: string;
  timestamp: Date;
  read: boolean;
  actionUrl?: string;
  priority?: "low" | "medium" | "high";
}

export interface NotificationGroup {
  label: string;
  date: Date;
  notifications: Notification[];
}

// 通知列表数据
export const notifications: Notification[] = [
  {
    id: "1",
    type: "message",
    title: "新消息",
    description: "李明给你发送了一条消息：关于项目进度的讨论...",
    avatar: "/avatars/user-01.jpg",
    sender: "李明",
    timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5分钟前
    read: false,
    actionUrl: "/dashboard/chat",
    priority: "medium",
  },
  {
    id: "2",
    type: "alert",
    title: "安全警告",
    description: "检测到来自新设备的登录尝试，请确认是否为本人操作。",
    timestamp: new Date(Date.now() - 15 * 60 * 1000), // 15分钟前
    read: false,
    actionUrl: "/dashboard/settings",
    priority: "high",
  },
  {
    id: "3",
    type: "payment",
    title: "支付成功",
    description: "您的订单 #12345 已支付成功，金额 ¥299.00",
    timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30分钟前
    read: false,
    actionUrl: "/dashboard/invoice",
    priority: "medium",
  },
  {
    id: "4",
    type: "social",
    title: "新的关注者",
    description: "王芳 开始关注了你",
    avatar: "/avatars/user-02.jpg",
    sender: "王芳",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2小时前
    read: true,
    priority: "low",
  },
  {
    id: "5",
    type: "update",
    title: "系统更新",
    description: "新版本 v2.1.0 已发布，包含多项性能优化和新功能",
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4小时前
    read: true,
    priority: "low",
  },
  {
    id: "6",
    type: "reminder",
    title: "会议提醒",
    description: "项目周会将于 30 分钟后开始",
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6小时前
    read: true,
    priority: "medium",
  },
  {
    id: "7",
    type: "message",
    title: "新评论",
    description: "张伟在你的文章《React 最佳实践》中发表了评论",
    avatar: "/avatars/user-03.jpg",
    sender: "张伟",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1天前
    read: true,
    priority: "low",
  },
  {
    id: "8",
    type: "system",
    title: "账户验证",
    description: "您的邮箱已成功验证",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2天前
    read: true,
    priority: "low",
  },
  {
    id: "9",
    type: "payment",
    title: "订阅即将到期",
    description: "您的专业版订阅将于 3 天后到期，请及时续费",
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3天前
    read: true,
    actionUrl: "/dashboard/billing",
    priority: "high",
  },
  {
    id: "10",
    type: "social",
    title: "新的点赞",
    description: "陈静 赞了你的项目 「个人作品集」",
    avatar: "/avatars/user-04.jpg",
    sender: "陈静",
    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5天前
    read: true,
    priority: "low",
  },
];

// 通知统计
export const notificationStats = {
  total: notifications.length,
  unread: notifications.filter((n) => !n.read).length,
  highPriority: notifications.filter((n) => n.priority === "high" && !n.read).length,
};

// 通知类型配置
export const notificationTypeConfig: Record<NotificationType, { label: string; color: string; bgColor: string }> = {
  system: {
    label: "系统",
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900",
  },
  message: {
    label: "消息",
    color: "text-green-600",
    bgColor: "bg-green-100 dark:bg-green-900",
  },
  alert: {
    label: "警告",
    color: "text-red-600",
    bgColor: "bg-red-100 dark:bg-red-900",
  },
  update: {
    label: "更新",
    color: "text-purple-600",
    bgColor: "bg-purple-100 dark:bg-purple-900",
  },
  payment: {
    label: "支付",
    color: "text-amber-600",
    bgColor: "bg-amber-100 dark:bg-amber-900",
  },
  social: {
    label: "社交",
    color: "text-pink-600",
    bgColor: "bg-pink-100 dark:bg-pink-900",
  },
  reminder: {
    label: "提醒",
    color: "text-cyan-600",
    bgColor: "bg-cyan-100 dark:bg-cyan-900",
  },
};
