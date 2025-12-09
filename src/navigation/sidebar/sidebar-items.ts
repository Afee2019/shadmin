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
  Wallet,
  LayoutGrid,
  ChartLine,
  History,
  Wand2,
  Bell,
  FolderOpen,
  Search,
  TrendingUp,
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
        url: "/dashboard/ecommerce",
        icon: ShoppingBag,
        isNew: true,
      },
      {
        title: "学习中心",
        url: "/dashboard/academy",
        icon: GraduationCap,
        isNew: true,
      },
      {
        title: "物流管理",
        url: "/dashboard/logistics",
        icon: Forklift,
        isNew: true,
      },
      {
        title: "销售分析",
        url: "/dashboard/sales",
        icon: TrendingUp,
        isNew: true,
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
        title: "账单",
        url: "/dashboard/billing",
        icon: Wallet,
        isNew: true,
      },
      {
        title: "组件",
        url: "/dashboard/widgets",
        icon: LayoutGrid,
        isNew: true,
      },
      {
        title: "图表",
        url: "/dashboard/charts",
        icon: ChartLine,
        isNew: true,
      },
      {
        title: "时间轴",
        url: "/dashboard/timeline",
        icon: History,
        isNew: true,
      },
      {
        title: "邮件",
        url: "/dashboard/email",
        icon: Mail,
        isNew: true,
      },
      {
        title: "聊天",
        url: "/dashboard/chat",
        icon: MessageSquare,
        isNew: true,
      },
      {
        title: "日历",
        url: "/dashboard/calendar",
        icon: Calendar,
        isNew: true,
      },
      {
        title: "看板",
        url: "/dashboard/kanban",
        icon: Kanban,
        isNew: true,
      },
      {
        title: "发票",
        url: "/dashboard/invoice",
        icon: ReceiptText,
        isNew: true,
      },
      {
        title: "用户",
        url: "/dashboard/users",
        icon: Users,
        isNew: true,
      },
      {
        title: "角色",
        url: "/dashboard/roles",
        icon: Lock,
        isNew: true,
      },
      {
        title: "向导",
        url: "/dashboard/wizard",
        icon: Wand2,
        isNew: true,
      },
      {
        title: "通知",
        url: "/dashboard/notifications",
        icon: Bell,
        isNew: true,
      },
      {
        title: "文件",
        url: "/dashboard/files",
        icon: FolderOpen,
        isNew: true,
      },
      {
        title: "搜索",
        url: "/dashboard/search",
        icon: Search,
        isNew: true,
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
