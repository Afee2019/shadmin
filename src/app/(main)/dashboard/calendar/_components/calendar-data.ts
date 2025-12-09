export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  date: Date;
  endDate?: Date;
  allDay?: boolean;
  color: "primary" | "success" | "warning" | "error" | "info";
  location?: string;
}

// 生成当前月份的示例事件
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();

export const calendarEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "团队周会",
    description: "讨论本周工作进度和下周计划",
    date: new Date(currentYear, currentMonth, 2, 10, 0),
    color: "primary",
    location: "会议室 A",
  },
  {
    id: "2",
    title: "产品发布会",
    description: "新版本产品发布演示",
    date: new Date(currentYear, currentMonth, 5, 14, 0),
    endDate: new Date(currentYear, currentMonth, 5, 16, 0),
    color: "success",
    location: "大礼堂",
  },
  {
    id: "3",
    title: "客户拜访",
    description: "拜访重要客户讨论合作事宜",
    date: new Date(currentYear, currentMonth, 8),
    allDay: true,
    color: "info",
    location: "客户公司",
  },
  {
    id: "4",
    title: "项目截止日期",
    description: "Phase 1 开发完成",
    date: new Date(currentYear, currentMonth, 12),
    allDay: true,
    color: "error",
  },
  {
    id: "5",
    title: "技术培训",
    description: "React 19 新特性培训",
    date: new Date(currentYear, currentMonth, 15, 9, 0),
    endDate: new Date(currentYear, currentMonth, 15, 12, 0),
    color: "warning",
    location: "培训室",
  },
  {
    id: "6",
    title: "团队建设活动",
    description: "季度团队建设活动",
    date: new Date(currentYear, currentMonth, 18, 13, 0),
    endDate: new Date(currentYear, currentMonth, 18, 18, 0),
    color: "success",
    location: "市郊农庄",
  },
  {
    id: "7",
    title: "季度总结会议",
    description: "Q4季度业绩总结",
    date: new Date(currentYear, currentMonth, 22, 15, 0),
    color: "primary",
    location: "会议室 B",
  },
  {
    id: "8",
    title: "系统维护",
    description: "服务器升级维护",
    date: new Date(currentYear, currentMonth, 25, 2, 0),
    endDate: new Date(currentYear, currentMonth, 25, 6, 0),
    color: "warning",
  },
  {
    id: "9",
    title: "年度计划讨论",
    description: "讨论下一年度工作计划",
    date: new Date(currentYear, currentMonth, 28, 10, 0),
    color: "info",
    location: "董事会议室",
  },
];

export const upcomingEvents = calendarEvents
  .filter((event) => event.date >= today)
  .sort((a, b) => a.date.getTime() - b.date.getTime())
  .slice(0, 5);
