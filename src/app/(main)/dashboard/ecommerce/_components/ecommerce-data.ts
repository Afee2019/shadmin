// E-commerce 仪表盘数据

export interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  price: number;
  stock: number;
  sales: number;
  revenue: number;
  rating: number;
}

export interface Order {
  id: string;
  customer: {
    name: string;
    email: string;
    avatar: string;
  };
  products: number;
  total: number;
  status: "待处理" | "已发货" | "已完成" | "已取消" | "已退款";
  paymentMethod: "支付宝" | "微信支付" | "银行卡" | "货到付款";
  date: Date;
}

export interface SalesByCategory {
  name: string;
  value: number;
  fill: string;
}

export interface SalesTrend {
  date: string;
  sales: number;
  orders: number;
  visitors: number;
}

export interface CountrySales {
  country: string;
  flag: string;
  sales: number;
  percentage: number;
}

// 统计卡片数据
export const statsData = {
  totalRevenue: {
    value: 128945.5,
    change: 12.5,
    trend: "up" as const,
  },
  totalOrders: {
    value: 3847,
    change: 8.2,
    trend: "up" as const,
  },
  conversionRate: {
    value: 3.24,
    change: -0.8,
    trend: "down" as const,
  },
  avgOrderValue: {
    value: 335.2,
    change: 5.1,
    trend: "up" as const,
  },
};

// 热销商品数据
export const topProducts: Product[] = [
  {
    id: "1",
    name: "iPhone 15 Pro Max",
    image: "/avatars/user-01.jpg",
    category: "电子产品",
    price: 9999,
    stock: 156,
    sales: 1234,
    revenue: 12337766,
    rating: 4.9,
  },
  {
    id: "2",
    name: "MacBook Pro 14寸",
    image: "/avatars/user-02.jpg",
    category: "电脑",
    price: 14999,
    stock: 89,
    sales: 567,
    revenue: 8499433,
    rating: 4.8,
  },
  {
    id: "3",
    name: "AirPods Pro 2",
    image: "/avatars/user-03.jpg",
    category: "配件",
    price: 1899,
    stock: 423,
    sales: 2341,
    revenue: 4445559,
    rating: 4.7,
  },
  {
    id: "4",
    name: "iPad Air 5",
    image: "/avatars/user-04.jpg",
    category: "平板",
    price: 4799,
    stock: 234,
    sales: 891,
    revenue: 4276009,
    rating: 4.6,
  },
  {
    id: "5",
    name: "Apple Watch Ultra",
    image: "/avatars/user-05.jpg",
    category: "穿戴设备",
    price: 6299,
    stock: 167,
    sales: 456,
    revenue: 2872344,
    rating: 4.5,
  },
];

// 最近订单数据
export const recentOrders: Order[] = [
  {
    id: "ORD-2024001",
    customer: {
      name: "张三",
      email: "zhangsan@example.com",
      avatar: "/avatars/user-01.jpg",
    },
    products: 3,
    total: 15897,
    status: "已完成",
    paymentMethod: "支付宝",
    date: new Date("2024-12-09T10:30:00"),
  },
  {
    id: "ORD-2024002",
    customer: {
      name: "李四",
      email: "lisi@example.com",
      avatar: "/avatars/user-02.jpg",
    },
    products: 1,
    total: 9999,
    status: "已发货",
    paymentMethod: "微信支付",
    date: new Date("2024-12-09T09:15:00"),
  },
  {
    id: "ORD-2024003",
    customer: {
      name: "王五",
      email: "wangwu@example.com",
      avatar: "/avatars/user-03.jpg",
    },
    products: 2,
    total: 6698,
    status: "待处理",
    paymentMethod: "银行卡",
    date: new Date("2024-12-09T08:45:00"),
  },
  {
    id: "ORD-2024004",
    customer: {
      name: "赵六",
      email: "zhaoliu@example.com",
      avatar: "/avatars/user-04.jpg",
    },
    products: 5,
    total: 23456,
    status: "已完成",
    paymentMethod: "支付宝",
    date: new Date("2024-12-08T16:20:00"),
  },
  {
    id: "ORD-2024005",
    customer: {
      name: "钱七",
      email: "qianqi@example.com",
      avatar: "/avatars/user-05.jpg",
    },
    products: 1,
    total: 1899,
    status: "已退款",
    paymentMethod: "微信支付",
    date: new Date("2024-12-08T14:10:00"),
  },
];

// 销售趋势数据（最近7天）
export const salesTrendData: SalesTrend[] = [
  { date: "12/03", sales: 18500, orders: 156, visitors: 4520 },
  { date: "12/04", sales: 22300, orders: 189, visitors: 5230 },
  { date: "12/05", sales: 19800, orders: 167, visitors: 4890 },
  { date: "12/06", sales: 25600, orders: 213, visitors: 5670 },
  { date: "12/07", sales: 21200, orders: 178, visitors: 5120 },
  { date: "12/08", sales: 28900, orders: 245, visitors: 6340 },
  { date: "12/09", sales: 24100, orders: 198, visitors: 5890 },
];

// 分类销售数据
export const salesByCategoryData: SalesByCategory[] = [
  { name: "电子产品", value: 45, fill: "var(--chart-1)" },
  { name: "电脑", value: 25, fill: "var(--chart-2)" },
  { name: "配件", value: 15, fill: "var(--chart-3)" },
  { name: "平板", value: 10, fill: "var(--chart-4)" },
  { name: "穿戴设备", value: 5, fill: "var(--chart-5)" },
];

// 销售漏斗数据
export const salesFunnelData = [
  { name: "访问", value: 10000, fill: "var(--chart-1)" },
  { name: "浏览商品", value: 7500, fill: "var(--chart-2)" },
  { name: "加入购物车", value: 4200, fill: "var(--chart-3)" },
  { name: "开始结算", value: 2100, fill: "var(--chart-4)" },
  { name: "完成购买", value: 1200, fill: "var(--chart-5)" },
];

// 按国家销售数据
export const countrySalesData: CountrySales[] = [
  { country: "中国", flag: "🇨🇳", sales: 89500, percentage: 45 },
  { country: "美国", flag: "🇺🇸", sales: 35200, percentage: 18 },
  { country: "日本", flag: "🇯🇵", sales: 23100, percentage: 12 },
  { country: "韩国", flag: "🇰🇷", sales: 18900, percentage: 10 },
  { country: "其他", flag: "🌍", sales: 29300, percentage: 15 },
];

// 订单状态分布
export const orderStatusData = [
  { name: "已完成", value: 2456, fill: "hsl(142, 76%, 36%)" },
  { name: "已发货", value: 891, fill: "hsl(217, 91%, 60%)" },
  { name: "待处理", value: 345, fill: "hsl(45, 93%, 47%)" },
  { name: "已取消", value: 89, fill: "hsl(0, 84%, 60%)" },
  { name: "已退款", value: 66, fill: "hsl(280, 65%, 60%)" },
];
