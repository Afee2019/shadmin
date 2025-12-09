export const paymentMethods = [
  {
    id: "1",
    type: "mastercard" as const,
    last4: "7852",
    expiry: "12/25",
    isDefault: true,
  },
  {
    id: "2",
    type: "visa" as const,
    last4: "5248",
    expiry: "08/26",
    isDefault: false,
  },
];

export const invoices = [
  {
    id: "INV-2024-001",
    date: "2024年12月1日",
    amount: "¥299.00",
    status: "已支付" as const,
  },
  {
    id: "INV-2024-002",
    date: "2024年11月1日",
    amount: "¥299.00",
    status: "已支付" as const,
  },
  {
    id: "INV-2024-003",
    date: "2024年10月1日",
    amount: "¥299.00",
    status: "已支付" as const,
  },
  {
    id: "INV-2024-004",
    date: "2024年9月1日",
    amount: "¥299.00",
    status: "已支付" as const,
  },
  {
    id: "INV-2024-005",
    date: "2024年8月1日",
    amount: "¥299.00",
    status: "已支付" as const,
  },
];

export const transactions = [
  {
    id: "1",
    name: "订阅续费",
    description: "专业版月度订阅",
    date: "2024年12月1日 12:30",
    amount: -299,
    type: "expense" as const,
  },
  {
    id: "2",
    name: "充值",
    description: "账户余额充值",
    date: "2024年11月28日 09:15",
    amount: 1000,
    type: "income" as const,
  },
  {
    id: "3",
    name: "订阅续费",
    description: "专业版月度订阅",
    date: "2024年11月1日 12:30",
    amount: -299,
    type: "expense" as const,
  },
  {
    id: "4",
    name: "API 调用费用",
    description: "超额 API 调用",
    date: "2024年10月25日 16:45",
    amount: -50,
    type: "expense" as const,
  },
  {
    id: "5",
    name: "退款",
    description: "服务中断补偿",
    date: "2024年10月15日 10:00",
    amount: 30,
    type: "income" as const,
  },
];

export const billingInfo = {
  name: "张三",
  company: "示例科技有限公司",
  email: "zhangsan@example.com",
  taxId: "91110000MA00ABCD1X",
  address: "北京市朝阳区建国路88号SOHO现代城A座2001室",
};

export const planInfo = {
  name: "专业版",
  price: "¥299",
  period: "月",
  nextBillingDate: "2025年1月1日",
  features: ["无限项目", "高级数据分析", "优先邮件支持", "完整 API 访问"],
};
