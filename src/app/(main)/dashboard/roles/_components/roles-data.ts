export interface Permission {
  id: string;
  name: string;
  description: string;
  category: string;
}

export interface Role {
  id: string;
  name: string;
  description: string;
  color: string;
  usersCount: number;
  permissions: string[];
  createdAt: Date;
}

export const permissionCategories = [
  { id: "users", name: "用户管理" },
  { id: "content", name: "内容管理" },
  { id: "orders", name: "订单管理" },
  { id: "reports", name: "报表分析" },
  { id: "settings", name: "系统设置" },
];

export const permissions: Permission[] = [
  // 用户管理
  { id: "users.view", name: "查看用户", description: "查看用户列表和详情", category: "users" },
  { id: "users.create", name: "创建用户", description: "创建新用户账号", category: "users" },
  { id: "users.edit", name: "编辑用户", description: "编辑用户信息", category: "users" },
  { id: "users.delete", name: "删除用户", description: "删除用户账号", category: "users" },
  // 内容管理
  { id: "content.view", name: "查看内容", description: "查看内容列表", category: "content" },
  { id: "content.create", name: "创建内容", description: "发布新内容", category: "content" },
  { id: "content.edit", name: "编辑内容", description: "编辑已发布内容", category: "content" },
  { id: "content.delete", name: "删除内容", description: "删除已发布内容", category: "content" },
  // 订单管理
  { id: "orders.view", name: "查看订单", description: "查看订单列表", category: "orders" },
  { id: "orders.process", name: "处理订单", description: "处理和发货订单", category: "orders" },
  { id: "orders.refund", name: "退款处理", description: "处理退款请求", category: "orders" },
  // 报表分析
  { id: "reports.view", name: "查看报表", description: "查看各类报表", category: "reports" },
  { id: "reports.export", name: "导出报表", description: "导出报表数据", category: "reports" },
  // 系统设置
  { id: "settings.view", name: "查看设置", description: "查看系统设置", category: "settings" },
  { id: "settings.edit", name: "修改设置", description: "修改系统配置", category: "settings" },
  { id: "settings.roles", name: "角色管理", description: "管理角色和权限", category: "settings" },
];

export const roles: Role[] = [
  {
    id: "1",
    name: "超级管理员",
    description: "拥有系统所有权限，可以管理所有功能和设置",
    color: "bg-red-500",
    usersCount: 2,
    permissions: permissions.map((p) => p.id),
    createdAt: new Date("2024-01-01"),
  },
  {
    id: "2",
    name: "管理员",
    description: "拥有大部分管理权限，但不能修改角色设置",
    color: "bg-blue-500",
    usersCount: 5,
    permissions: [
      "users.view",
      "users.create",
      "users.edit",
      "content.view",
      "content.create",
      "content.edit",
      "content.delete",
      "orders.view",
      "orders.process",
      "orders.refund",
      "reports.view",
      "reports.export",
      "settings.view",
    ],
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "3",
    name: "编辑",
    description: "负责内容管理和发布",
    color: "bg-green-500",
    usersCount: 12,
    permissions: ["users.view", "content.view", "content.create", "content.edit", "reports.view"],
    createdAt: new Date("2024-02-01"),
  },
  {
    id: "4",
    name: "客服",
    description: "处理订单和客户咨询",
    color: "bg-amber-500",
    usersCount: 8,
    permissions: ["users.view", "orders.view", "orders.process", "reports.view"],
    createdAt: new Date("2024-02-15"),
  },
  {
    id: "5",
    name: "访客",
    description: "只能查看基本信息，不能进行任何操作",
    color: "bg-gray-500",
    usersCount: 25,
    permissions: ["users.view", "content.view", "reports.view"],
    createdAt: new Date("2024-03-01"),
  },
];
