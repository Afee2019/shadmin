export interface KanbanTask {
  id: string;
  title: string;
  description?: string;
  priority?: "low" | "medium" | "high";
  assignee?: {
    name: string;
    avatar?: string;
  };
  tags?: string[];
  dueDate?: string;
}

export interface KanbanColumn {
  id: string;
  title: string;
  tasks: KanbanTask[];
}

export const initialColumns: KanbanColumn[] = [
  {
    id: "backlog",
    title: "待办",
    tasks: [
      {
        id: "task-1",
        title: "设计系统规范文档",
        description: "创建完整的设计系统规范，包括颜色、字体、间距等",
        priority: "high",
        assignee: { name: "张三" },
        tags: ["设计", "文档"],
        dueDate: "12月25日",
      },
      {
        id: "task-2",
        title: "用户调研问卷",
        description: "准备用户访谈问卷，收集产品反馈",
        priority: "medium",
        assignee: { name: "李四" },
        tags: ["调研"],
      },
      {
        id: "task-3",
        title: "竞品分析报告",
        priority: "low",
        tags: ["分析"],
      },
    ],
  },
  {
    id: "todo",
    title: "计划中",
    tasks: [
      {
        id: "task-4",
        title: "首页响应式优化",
        description: "优化移动端和平板端的显示效果",
        priority: "high",
        assignee: { name: "王五" },
        tags: ["前端", "优化"],
        dueDate: "12月20日",
      },
      {
        id: "task-5",
        title: "API 文档更新",
        priority: "medium",
        assignee: { name: "赵六" },
        tags: ["API", "文档"],
      },
    ],
  },
  {
    id: "in-progress",
    title: "进行中",
    tasks: [
      {
        id: "task-6",
        title: "用户认证模块重构",
        description: "重构登录、注册、密码重置等功能",
        priority: "high",
        assignee: { name: "张三" },
        tags: ["后端", "安全"],
        dueDate: "12月18日",
      },
      {
        id: "task-7",
        title: "数据可视化组件",
        description: "开发图表组件库",
        priority: "medium",
        assignee: { name: "李四" },
        tags: ["前端", "组件"],
      },
    ],
  },
  {
    id: "done",
    title: "已完成",
    tasks: [
      {
        id: "task-8",
        title: "项目初始化",
        description: "完成项目脚手架搭建和基础配置",
        priority: "high",
        assignee: { name: "王五" },
        tags: ["基础设施"],
      },
      {
        id: "task-9",
        title: "CI/CD 流水线",
        priority: "medium",
        assignee: { name: "赵六" },
        tags: ["DevOps"],
      },
    ],
  },
];
