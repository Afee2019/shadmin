// Logistics 物流管理仪表盘数据

export interface ShipmentStats {
  totalOrders: number;
  pendingOrders: number;
  inTransit: number;
  delivered: number;
  returned: number;
}

export interface Shipment {
  id: string;
  trackingNumber: string;
  customer: string;
  origin: string;
  destination: string;
  status: "pending" | "picked_up" | "in_transit" | "out_for_delivery" | "delivered" | "returned";
  carrier: string;
  weight: number;
  createdAt: Date;
  estimatedDelivery: Date;
  actualDelivery?: Date;
}

export interface Warehouse {
  id: string;
  name: string;
  location: string;
  totalCapacity: number;
  usedCapacity: number;
  itemsInStock: number;
  outboundToday: number;
  inboundToday: number;
  status: "active" | "maintenance" | "full";
}

export interface DeliveryDriver {
  id: string;
  name: string;
  avatar: string;
  phone: string;
  status: "available" | "on_delivery" | "offline";
  deliveriesToday: number;
  rating: number;
  currentLocation?: string;
}

export interface RegionDelivery {
  region: string;
  totalOrders: number;
  delivered: number;
  avgDeliveryTime: number;
  onTimeRate: number;
}

export interface DailyDelivery {
  date: string;
  delivered: number;
  returned: number;
  pending: number;
}

// 统计数据
export const shipmentStats: ShipmentStats = {
  totalOrders: 12847,
  pendingOrders: 234,
  inTransit: 1523,
  delivered: 10856,
  returned: 234,
};

// 状态配置
export const shipmentStatusConfig = {
  pending: {
    label: "待处理",
    color: "text-gray-500",
    bgColor: "bg-gray-100",
  },
  picked_up: {
    label: "已揽件",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  in_transit: {
    label: "运输中",
    color: "text-amber-500",
    bgColor: "bg-amber-100",
  },
  out_for_delivery: {
    label: "派送中",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
  delivered: {
    label: "已送达",
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
  returned: {
    label: "已退回",
    color: "text-red-500",
    bgColor: "bg-red-100",
  },
};

// 最近订单
export const recentShipments: Shipment[] = [
  {
    id: "1",
    trackingNumber: "SF1234567890",
    customer: "张伟",
    origin: "上海仓库",
    destination: "北京市朝阳区",
    status: "in_transit",
    carrier: "顺丰速运",
    weight: 2.5,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
    estimatedDelivery: new Date(Date.now() + 1000 * 60 * 60 * 24),
  },
  {
    id: "2",
    trackingNumber: "JD9876543210",
    customer: "李娜",
    origin: "广州仓库",
    destination: "深圳市南山区",
    status: "out_for_delivery",
    carrier: "京东物流",
    weight: 1.2,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48),
    estimatedDelivery: new Date(),
  },
  {
    id: "3",
    trackingNumber: "YT2468135790",
    customer: "王强",
    origin: "杭州仓库",
    destination: "苏州市工业园区",
    status: "delivered",
    carrier: "圆通快递",
    weight: 3.8,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72),
    estimatedDelivery: new Date(Date.now() - 1000 * 60 * 60 * 24),
    actualDelivery: new Date(Date.now() - 1000 * 60 * 60 * 26),
  },
  {
    id: "4",
    trackingNumber: "ZT1357924680",
    customer: "刘洋",
    origin: "成都仓库",
    destination: "重庆市渝北区",
    status: "pending",
    carrier: "中通快递",
    weight: 0.8,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
    estimatedDelivery: new Date(Date.now() + 1000 * 60 * 60 * 48),
  },
  {
    id: "5",
    trackingNumber: "DB8642097531",
    customer: "陈静",
    origin: "武汉仓库",
    destination: "长沙市岳麓区",
    status: "picked_up",
    carrier: "德邦物流",
    weight: 15.0,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 6),
    estimatedDelivery: new Date(Date.now() + 1000 * 60 * 60 * 36),
  },
];

// 仓库数据
export const warehouses: Warehouse[] = [
  {
    id: "1",
    name: "上海中心仓",
    location: "上海市浦东新区",
    totalCapacity: 50000,
    usedCapacity: 42500,
    itemsInStock: 125000,
    outboundToday: 3240,
    inboundToday: 2890,
    status: "active",
  },
  {
    id: "2",
    name: "广州仓库",
    location: "广州市白云区",
    totalCapacity: 35000,
    usedCapacity: 28000,
    itemsInStock: 89000,
    outboundToday: 2150,
    inboundToday: 1980,
    status: "active",
  },
  {
    id: "3",
    name: "北京分仓",
    location: "北京市大兴区",
    totalCapacity: 40000,
    usedCapacity: 38500,
    itemsInStock: 110000,
    outboundToday: 2890,
    inboundToday: 2100,
    status: "full",
  },
  {
    id: "4",
    name: "成都西部仓",
    location: "成都市双流区",
    totalCapacity: 25000,
    usedCapacity: 18000,
    itemsInStock: 52000,
    outboundToday: 1560,
    inboundToday: 1780,
    status: "active",
  },
];

// 配送员数据
export const deliveryDrivers: DeliveryDriver[] = [
  {
    id: "1",
    name: "李明",
    avatar: "/avatars/user-01.jpg",
    phone: "138****1234",
    status: "on_delivery",
    deliveriesToday: 28,
    rating: 4.9,
    currentLocation: "朝阳区三里屯",
  },
  {
    id: "2",
    name: "王芳",
    avatar: "/avatars/user-02.jpg",
    phone: "139****5678",
    status: "available",
    deliveriesToday: 35,
    rating: 4.8,
  },
  {
    id: "3",
    name: "张伟",
    avatar: "/avatars/user-03.jpg",
    phone: "137****9012",
    status: "on_delivery",
    deliveriesToday: 22,
    rating: 4.7,
    currentLocation: "海淀区中关村",
  },
  {
    id: "4",
    name: "刘丽",
    avatar: "/avatars/user-04.jpg",
    phone: "136****3456",
    status: "offline",
    deliveriesToday: 18,
    rating: 4.9,
  },
  {
    id: "5",
    name: "陈强",
    avatar: "/avatars/user-05.jpg",
    phone: "135****7890",
    status: "on_delivery",
    deliveriesToday: 31,
    rating: 4.6,
    currentLocation: "西城区金融街",
  },
];

// 地区配送数据
export const regionDeliveries: RegionDelivery[] = [
  { region: "华东地区", totalOrders: 4521, delivered: 4312, avgDeliveryTime: 1.8, onTimeRate: 95.4 },
  { region: "华南地区", totalOrders: 3156, delivered: 3001, avgDeliveryTime: 2.1, onTimeRate: 93.2 },
  { region: "华北地区", totalOrders: 2834, delivered: 2698, avgDeliveryTime: 1.9, onTimeRate: 94.8 },
  { region: "西南地区", totalOrders: 1523, delivered: 1412, avgDeliveryTime: 2.5, onTimeRate: 91.5 },
  { region: "华中地区", totalOrders: 813, delivered: 756, avgDeliveryTime: 2.2, onTimeRate: 92.8 },
];

// 每日配送趋势数据
export const dailyDeliveries: DailyDelivery[] = [
  { date: "12/01", delivered: 2340, returned: 45, pending: 180 },
  { date: "12/02", delivered: 2520, returned: 38, pending: 165 },
  { date: "12/03", delivered: 2180, returned: 52, pending: 210 },
  { date: "12/04", delivered: 2890, returned: 41, pending: 145 },
  { date: "12/05", delivered: 2650, returned: 35, pending: 190 },
  { date: "12/06", delivered: 2780, returned: 48, pending: 175 },
  { date: "12/07", delivered: 2450, returned: 42, pending: 200 },
];

// 配送状态分布
export const deliveryStatusDistribution = [
  { status: "已送达", value: 10856, color: "hsl(var(--chart-1))" },
  { status: "运输中", value: 1523, color: "hsl(var(--chart-2))" },
  { status: "待处理", value: 234, color: "hsl(var(--chart-3))" },
  { status: "已退回", value: 234, color: "hsl(var(--chart-4))" },
];
