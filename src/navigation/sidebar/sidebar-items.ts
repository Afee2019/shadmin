import {
  ShoppingBag,
  Forklift,
  Mail,
  MessageSquare,
  Calendar,
  Kanban,
  ReceiptText,
  Users,
  Lock,
  Fingerprint,
  SquareArrowUpRight,
  LayoutDashboard,
  ChartBar,
  Banknote,
  Gauge,
  GraduationCap,
  Settings,
  UserCircle,
  CreditCard,
  type LucideIcon,
} from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "仪表盘",
    items: [
      {
        title: "默认",
        url: "/dashboard/default",
        icon: LayoutDashboard,
      },
      {
        title: "客户管理",
        url: "/dashboard/crm",
        icon: ChartBar,
      },
      {
        title: "财务",
        url: "/dashboard/finance",
        icon: Banknote,
      },
      {
        title: "数据分析",
        url: "/dashboard/analytics",
        icon: Gauge,
        isNew: true,
      },
      {
        title: "电子商务",
        url: "/dashboard/coming-soon",
        icon: ShoppingBag,
        comingSoon: true,
      },
      {
        title: "在线教育",
        url: "/dashboard/coming-soon",
        icon: GraduationCap,
        comingSoon: true,
      },
      {
        title: "物流管理",
        url: "/dashboard/coming-soon",
        icon: Forklift,
        comingSoon: true,
      },
    ],
  },
  {
    id: 2,
    label: "页面",
    items: [
      {
        title: "个人资料",
        url: "/dashboard/profile",
        icon: UserCircle,
      },
      {
        title: "设置",
        url: "/dashboard/settings",
        icon: Settings,
      },
      {
        title: "定价",
        url: "/dashboard/pricing",
        icon: CreditCard,
        isNew: true,
      },
      {
        title: "邮件",
        url: "/dashboard/coming-soon",
        icon: Mail,
        comingSoon: true,
      },
      {
        title: "聊天",
        url: "/dashboard/coming-soon",
        icon: MessageSquare,
        comingSoon: true,
      },
      {
        title: "日历",
        url: "/dashboard/coming-soon",
        icon: Calendar,
        comingSoon: true,
      },
      {
        title: "看板",
        url: "/dashboard/coming-soon",
        icon: Kanban,
        comingSoon: true,
      },
      {
        title: "发票",
        url: "/dashboard/coming-soon",
        icon: ReceiptText,
        comingSoon: true,
      },
      {
        title: "用户",
        url: "/dashboard/users",
        icon: Users,
        isNew: true,
      },
      {
        title: "角色",
        url: "/dashboard/coming-soon",
        icon: Lock,
        comingSoon: true,
      },
      {
        title: "身份验证",
        url: "/auth",
        icon: Fingerprint,
        subItems: [
          { title: "登录 v1", url: "/auth/v1/login", newTab: true },
          { title: "登录 v2", url: "/auth/v2/login", newTab: true },
          { title: "注册 v1", url: "/auth/v1/register", newTab: true },
          { title: "注册 v2", url: "/auth/v2/register", newTab: true },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "其他",
    items: [
      {
        title: "更多",
        url: "/dashboard/coming-soon",
        icon: SquareArrowUpRight,
        comingSoon: true,
      },
    ],
  },
];
