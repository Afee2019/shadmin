import {
  Bell,
  Package,
  ShoppingCart,
  CreditCard,
  Key,
  Mail,
  Megaphone,
  Archive,
  Gamepad2,
  CheckCircle,
  AlertCircle,
  Clock,
  type LucideIcon,
} from "lucide-react";

export interface TimelineEvent {
  id: string;
  color: "primary" | "secondary" | "success" | "warning" | "error" | "info";
  icon: LucideIcon;
  title: string;
  dateTime: string;
  description?: string;
  badges?: string[];
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "event-1",
    color: "success",
    icon: Bell,
    title: "¥2400，设计变更",
    dateTime: "12月22日 晚上7:20",
    description: "用户界面设计方案已完成最终评审，准备进入开发阶段。",
    badges: ["设计"],
  },
  {
    id: "event-2",
    color: "error",
    icon: Package,
    title: "新订单 #1832412",
    dateTime: "12月21日 晚上11:00",
    description: "客户提交了新的产品订单，正在等待确认和处理。",
    badges: ["订单", "#1832412"],
  },
  {
    id: "event-3",
    color: "info",
    icon: ShoppingCart,
    title: "四月服务器付款",
    dateTime: "12月21日 晚上9:34",
    description: "服务器托管费用已自动扣款，账单已发送至邮箱。",
    badges: ["服务器", "付款"],
  },
  {
    id: "event-4",
    color: "warning",
    icon: CreditCard,
    title: "订单 #4395133 添加了新卡",
    dateTime: "12月20日 凌晨2:20",
    description: "用户已成功绑定新的支付方式。",
    badges: ["卡片", "#4395133", "优先"],
  },
  {
    id: "event-5",
    color: "primary",
    icon: Key,
    title: "解锁开发包",
    dateTime: "12月18日 凌晨4:54",
    description: "开发者工具包权限已激活，可以开始使用高级 API。",
    badges: ["开发"],
  },
  {
    id: "event-6",
    color: "success",
    icon: Mail,
    title: "新消息未读",
    dateTime: "12月16日",
    description: "您有 3 条来自团队成员的新消息。",
    badges: ["消息"],
  },
  {
    id: "event-7",
    color: "info",
    icon: Megaphone,
    title: "通知未读",
    dateTime: "12月15日",
    description: "系统更新通知：v2.0 版本即将发布。",
  },
  {
    id: "event-8",
    color: "warning",
    icon: Archive,
    title: "新请求",
    dateTime: "12月14日",
    description: "收到来自合作伙伴的新合作请求。",
    badges: ["请求", "优先"],
  },
  {
    id: "event-9",
    color: "secondary",
    icon: Gamepad2,
    title: "控制器问题",
    dateTime: "12月13日",
    description: "已收到设备兼容性问题反馈，技术团队正在处理。",
    badges: ["控制器"],
  },
];

export const projectTimeline: TimelineEvent[] = [
  {
    id: "proj-1",
    color: "success",
    icon: CheckCircle,
    title: "项目启动",
    dateTime: "11月1日",
    description: "项目正式启动，团队完成初始会议和目标设定。",
    badges: ["里程碑"],
  },
  {
    id: "proj-2",
    color: "info",
    icon: Clock,
    title: "需求分析完成",
    dateTime: "11月15日",
    description: "完成所有功能需求的收集和分析，开始技术评估。",
    badges: ["分析", "文档"],
  },
  {
    id: "proj-3",
    color: "primary",
    icon: Key,
    title: "开发阶段开始",
    dateTime: "11月25日",
    description: "核心功能开发正式开始，预计12月底完成第一阶段。",
    badges: ["开发"],
  },
  {
    id: "proj-4",
    color: "warning",
    icon: AlertCircle,
    title: "发现技术债务",
    dateTime: "12月5日",
    description: "发现历史遗留的技术债务需要处理，计划在下个迭代修复。",
    badges: ["技术债务", "待处理"],
  },
  {
    id: "proj-5",
    color: "success",
    icon: CheckCircle,
    title: "第一阶段完成",
    dateTime: "12月20日",
    description: "核心功能开发完成，进入测试阶段。",
    badges: ["里程碑", "测试"],
  },
];
