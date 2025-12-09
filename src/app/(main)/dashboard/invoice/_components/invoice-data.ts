export interface InvoiceItem {
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}

export interface Invoice {
  id: string;
  number: string;
  issueDate: Date;
  dueDate: Date;
  status: "paid" | "pending" | "overdue" | "draft";
  from: {
    name: string;
    address: string;
    phone: string;
    email: string;
  };
  to: {
    name: string;
    address: string;
    phone?: string;
    email?: string;
  };
  items: InvoiceItem[];
  subtotal: number;
  tax: number;
  taxRate: number;
  total: number;
  notes?: string;
  paymentTerms?: string;
}

export const invoices: Invoice[] = [
  {
    id: "1",
    number: "INV-2024-001",
    issueDate: new Date(2024, 11, 1),
    dueDate: new Date(2024, 11, 15),
    status: "paid",
    from: {
      name: "北京嘉诚瑞杰信息技术有限公司",
      address: "北京市朝阳区建国路88号 SOHO现代城 A座1208",
      phone: "+86 10 8888 8888",
      email: "billing@shadmin.com",
    },
    to: {
      name: "北京创新科技有限公司",
      address: "北京市海淀区中关村大街1号",
      phone: "+86 10 6666 6666",
      email: "finance@innovation.com",
    },
    items: [
      {
        description: "企业版年度订阅",
        quantity: 1,
        unitPrice: 9999,
        amount: 9999,
      },
      {
        description: "定制开发服务",
        quantity: 20,
        unitPrice: 500,
        amount: 10000,
      },
      {
        description: "技术支持服务（12个月）",
        quantity: 1,
        unitPrice: 3000,
        amount: 3000,
      },
    ],
    subtotal: 22999,
    taxRate: 6,
    tax: 1379.94,
    total: 24378.94,
    notes: "感谢您的信任与支持！",
    paymentTerms: "请在到期日前完成付款，支持银行转账或在线支付。",
  },
  {
    id: "2",
    number: "INV-2024-002",
    issueDate: new Date(2024, 11, 5),
    dueDate: new Date(2024, 11, 20),
    status: "pending",
    from: {
      name: "北京嘉诚瑞杰信息技术有限公司",
      address: "北京市朝阳区建国路88号 SOHO现代城 A座1208",
      phone: "+86 10 8888 8888",
      email: "billing@shadmin.com",
    },
    to: {
      name: "上海数字传媒有限公司",
      address: "上海市浦东新区陆家嘴环路1000号",
      email: "payment@digital.com",
    },
    items: [
      {
        description: "专业版季度订阅",
        quantity: 10,
        unitPrice: 299,
        amount: 2990,
      },
      {
        description: "培训服务",
        quantity: 2,
        unitPrice: 1500,
        amount: 3000,
      },
    ],
    subtotal: 5990,
    taxRate: 6,
    tax: 359.4,
    total: 6349.4,
  },
  {
    id: "3",
    number: "INV-2024-003",
    issueDate: new Date(2024, 10, 15),
    dueDate: new Date(2024, 10, 30),
    status: "overdue",
    from: {
      name: "北京嘉诚瑞杰信息技术有限公司",
      address: "北京市海淀区学清路8号科技财富中心B座1105",
      phone: "+86 10 8888 8888",
      email: "billing@shadmin.com",
    },
    to: {
      name: "深圳互联网科技有限公司",
      address: "深圳市南山区科技园南区",
    },
    items: [
      {
        description: "企业版月度订阅",
        quantity: 1,
        unitPrice: 999,
        amount: 999,
      },
    ],
    subtotal: 999,
    taxRate: 6,
    tax: 59.94,
    total: 1058.94,
  },
];

export const currentInvoice = invoices[0];
