export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  sender: "user" | "contact";
  status?: "sent" | "delivered" | "read";
}

export interface Contact {
  id: string;
  name: string;
  avatar: string;
  status: "online" | "offline" | "busy" | "away";
  lastMessage?: string;
  lastMessageTime?: Date;
  unreadCount?: number;
  messages: Message[];
}

export const contacts: Contact[] = [
  {
    id: "1",
    name: "张三",
    avatar: "/avatars/user-01.jpg",
    status: "online",
    lastMessage: "好的，那我们明天见！",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 5),
    unreadCount: 2,
    messages: [
      {
        id: "m1",
        content: "你好，最近项目进展如何？",
        timestamp: new Date(Date.now() - 1000 * 60 * 60),
        sender: "contact",
        status: "read",
      },
      {
        id: "m2",
        content: "进展顺利，已经完成了80%的功能开发",
        timestamp: new Date(Date.now() - 1000 * 60 * 55),
        sender: "user",
        status: "read",
      },
      {
        id: "m3",
        content: "太棒了！明天下午有空吗？想一起过一下细节",
        timestamp: new Date(Date.now() - 1000 * 60 * 50),
        sender: "contact",
        status: "read",
      },
      {
        id: "m4",
        content: "可以的，明天下午2点怎么样？",
        timestamp: new Date(Date.now() - 1000 * 60 * 10),
        sender: "user",
        status: "read",
      },
      {
        id: "m5",
        content: "好的，那我们明天见！",
        timestamp: new Date(Date.now() - 1000 * 60 * 5),
        sender: "contact",
        status: "read",
      },
    ],
  },
  {
    id: "2",
    name: "李四",
    avatar: "/avatars/user-02.jpg",
    status: "busy",
    lastMessage: "这个方案看起来不错",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 30),
    messages: [
      {
        id: "m1",
        content: "关于新功能的设计方案，你看一下附件",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
        sender: "user",
        status: "read",
      },
      {
        id: "m2",
        content: "好的，我看看",
        timestamp: new Date(Date.now() - 1000 * 60 * 60),
        sender: "contact",
        status: "read",
      },
      {
        id: "m3",
        content: "这个方案看起来不错",
        timestamp: new Date(Date.now() - 1000 * 60 * 30),
        sender: "contact",
        status: "read",
      },
    ],
  },
  {
    id: "3",
    name: "王五",
    avatar: "/avatars/user-03.jpg",
    status: "away",
    lastMessage: "收到，我稍后处理",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 3),
    messages: [
      {
        id: "m1",
        content: "麻烦帮我审核一下这个PR",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4),
        sender: "user",
        status: "read",
      },
      {
        id: "m2",
        content: "收到，我稍后处理",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3),
        sender: "contact",
        status: "read",
      },
    ],
  },
  {
    id: "4",
    name: "赵六",
    avatar: "/avatars/user-04.jpg",
    status: "online",
    lastMessage: "周末有空一起打球吗？",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 24),
    messages: [
      {
        id: "m1",
        content: "周末有空一起打球吗？",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
        sender: "contact",
        status: "read",
      },
    ],
  },
  {
    id: "5",
    name: "钱七",
    avatar: "/avatars/user-05.jpg",
    status: "offline",
    lastMessage: "文档已经更新了",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 48),
    messages: [
      {
        id: "m1",
        content: "API文档需要更新一下",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 50),
        sender: "user",
        status: "read",
      },
      {
        id: "m2",
        content: "文档已经更新了",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48),
        sender: "contact",
        status: "read",
      },
    ],
  },
  {
    id: "6",
    name: "孙八",
    avatar: "/avatars/user-06.jpg",
    status: "online",
    lastMessage: "下周的会议时间确定了吗？",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 72),
    messages: [
      {
        id: "m1",
        content: "下周的会议时间确定了吗？",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 72),
        sender: "contact",
        status: "read",
      },
    ],
  },
];

export const statusColors: Record<Contact["status"], string> = {
  online: "bg-green-500",
  offline: "bg-gray-400",
  busy: "bg-red-500",
  away: "bg-amber-500",
};

export const statusLabels: Record<Contact["status"], string> = {
  online: "在线",
  offline: "离线",
  busy: "忙碌",
  away: "离开",
};
