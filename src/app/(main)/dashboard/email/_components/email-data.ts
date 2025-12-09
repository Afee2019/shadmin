export interface Email {
  id: string;
  from: {
    name: string;
    email: string;
    avatar?: string;
  };
  to: string;
  subject: string;
  preview: string;
  body: string;
  date: Date;
  read: boolean;
  starred: boolean;
  labels: ("work" | "personal" | "important" | "social")[];
  attachments?: {
    name: string;
    size: string;
    type: string;
  }[];
  folder: "inbox" | "sent" | "drafts" | "trash" | "spam" | "archive";
}

export const emails: Email[] = [
  {
    id: "1",
    from: {
      name: "张伟",
      email: "zhangwei@example.com",
      avatar: "/avatars/user-01.jpg",
    },
    to: "me@example.com",
    subject: "关于下周项目会议的安排",
    preview: "您好，下周二我们需要开一个项目进度会议，请确认您的时间...",
    body: `您好，

下周二我们需要开一个项目进度会议，请确认您的时间是否方便。

会议议程：
1. 项目进度汇报
2. 问题讨论
3. 下一阶段计划

请回复确认。

谢谢！
张伟`,
    date: new Date(Date.now() - 1000 * 60 * 30),
    read: false,
    starred: true,
    labels: ["work", "important"],
    folder: "inbox",
  },
  {
    id: "2",
    from: {
      name: "李娜",
      email: "lina@example.com",
      avatar: "/avatars/user-02.jpg",
    },
    to: "me@example.com",
    subject: "设计稿已更新",
    preview: "Hi，最新的设计稿已经上传到云盘，请查收并提供反馈...",
    body: `Hi，

最新的设计稿已经上传到云盘，请查收并提供反馈。

主要更新内容：
- 首页布局优化
- 配色方案调整
- 响应式适配

云盘链接：https://example.com/design

如有问题随时联系。

李娜`,
    date: new Date(Date.now() - 1000 * 60 * 60 * 2),
    read: false,
    starred: false,
    labels: ["work"],
    attachments: [
      { name: "design-v2.fig", size: "12.5 MB", type: "figma" },
      { name: "preview.pdf", size: "2.3 MB", type: "pdf" },
    ],
    folder: "inbox",
  },
  {
    id: "3",
    from: {
      name: "系统通知",
      email: "noreply@system.com",
    },
    to: "me@example.com",
    subject: "您的账户安全提醒",
    preview: "我们检测到您的账户有新设备登录，如果不是您本人操作...",
    body: `尊敬的用户，

我们检测到您的账户有新设备登录：

- 设备类型：MacBook Pro
- 登录时间：2024-12-09 14:30
- 登录地点：北京市

如果不是您本人操作，请立即修改密码。

安全团队`,
    date: new Date(Date.now() - 1000 * 60 * 60 * 5),
    read: true,
    starred: false,
    labels: ["important"],
    folder: "inbox",
  },
  {
    id: "4",
    from: {
      name: "王强",
      email: "wangqiang@example.com",
      avatar: "/avatars/user-03.jpg",
    },
    to: "me@example.com",
    subject: "周末聚会邀请",
    preview: "嗨！这周六晚上我们打算组织一个小聚会，地点在老地方...",
    body: `嗨！

这周六晚上我们打算组织一个小聚会，地点在老地方。

时间：周六晚上 7:00
地点：星巴克（中关村店）

已确认参加的有：
- 小明
- 小红
- 小华

期待你的参与！

王强`,
    date: new Date(Date.now() - 1000 * 60 * 60 * 24),
    read: true,
    starred: true,
    labels: ["personal", "social"],
    folder: "inbox",
  },
  {
    id: "5",
    from: {
      name: "HR 部门",
      email: "hr@company.com",
    },
    to: "me@example.com",
    subject: "年度绩效评估通知",
    preview: "各位同事好，年度绩效评估将于下周开始，请提前准备相关材料...",
    body: `各位同事好，

年度绩效评估将于下周开始，请提前准备以下材料：

1. 年度工作总结
2. 项目完成情况
3. 个人发展计划

评估时间安排将另行通知。

人力资源部`,
    date: new Date(Date.now() - 1000 * 60 * 60 * 48),
    read: true,
    starred: false,
    labels: ["work"],
    folder: "inbox",
  },
  {
    id: "6",
    from: {
      name: "陈明",
      email: "chenming@example.com",
      avatar: "/avatars/user-04.jpg",
    },
    to: "me@example.com",
    subject: "技术分享会资料",
    preview: "上周技术分享会的 PPT 和代码示例已经整理好了，分享给大家...",
    body: `大家好，

上周技术分享会的 PPT 和代码示例已经整理好了，分享给大家。

分享主题：React 19 新特性实践
时长：约 45 分钟

如有疑问欢迎讨论。

陈明`,
    date: new Date(Date.now() - 1000 * 60 * 60 * 72),
    read: true,
    starred: false,
    labels: ["work"],
    attachments: [
      { name: "react19-slides.pptx", size: "5.2 MB", type: "pptx" },
      { name: "demo-code.zip", size: "1.8 MB", type: "zip" },
    ],
    folder: "inbox",
  },
  {
    id: "7",
    from: {
      name: "订阅通知",
      email: "newsletter@tech.com",
    },
    to: "me@example.com",
    subject: "本周技术周刊",
    preview: "本周热门话题：AI 工具的最新进展、前端框架性能对比...",
    body: `本周技术周刊

热门话题：
1. AI 工具的最新进展
2. 前端框架性能对比
3. 云原生技术趋势

点击阅读完整内容。

取消订阅请点击此处。`,
    date: new Date(Date.now() - 1000 * 60 * 60 * 96),
    read: true,
    starred: false,
    labels: ["social"],
    folder: "inbox",
  },
];

export const folders = [
  { id: "inbox", name: "收件箱", count: 7 },
  { id: "sent", name: "已发送", count: 12 },
  { id: "drafts", name: "草稿箱", count: 3 },
  { id: "starred", name: "已加星", count: 2 },
  { id: "archive", name: "归档", count: 45 },
  { id: "spam", name: "垃圾邮件", count: 8 },
  { id: "trash", name: "回收站", count: 5 },
];

export const labels = [
  { id: "work", name: "工作", color: "bg-blue-500" },
  { id: "personal", name: "个人", color: "bg-green-500" },
  { id: "important", name: "重要", color: "bg-red-500" },
  { id: "social", name: "社交", color: "bg-purple-500" },
];
