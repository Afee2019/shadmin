// Academy 在线教育仪表盘数据

export interface Course {
  id: string;
  title: string;
  instructor: string;
  instructorAvatar: string;
  thumbnail: string;
  category: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  duration: string;
  rating: number;
  students: number;
  level: "入门" | "进阶" | "高级";
  status: "进行中" | "未开始" | "已完成";
}

export interface LearningPath {
  id: string;
  name: string;
  description: string;
  courses: number;
  completedCourses: number;
  totalHours: number;
  progress: number;
  color: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earnedAt: Date;
  type: "certificate" | "badge" | "milestone";
}

export interface UpcomingClass {
  id: string;
  title: string;
  instructor: string;
  instructorAvatar: string;
  startTime: Date;
  duration: string;
  type: "直播" | "答疑" | "考试";
}

export interface WeeklyStudyData {
  day: string;
  hours: number;
  target: number;
}

// 统计数据
export const statsData = {
  completedCourses: 12,
  completedCoursesChange: 3,
  studyHours: 156,
  studyHoursChange: 12,
  certificates: 5,
  certificatesChange: 1,
  points: 2450,
  pointsChange: 180,
};

// 正在学习的课程
export const currentCourses: Course[] = [
  {
    id: "1",
    title: "React 19 完全指南",
    instructor: "李明",
    instructorAvatar: "/avatars/user-01.jpg",
    thumbnail: "/projects/project-01.jpg",
    category: "前端开发",
    progress: 68,
    totalLessons: 45,
    completedLessons: 31,
    duration: "12小时",
    rating: 4.9,
    students: 3420,
    level: "进阶",
    status: "进行中",
  },
  {
    id: "2",
    title: "TypeScript 高级编程",
    instructor: "王芳",
    instructorAvatar: "/avatars/user-02.jpg",
    thumbnail: "/projects/project-02.jpg",
    category: "编程语言",
    progress: 45,
    totalLessons: 32,
    completedLessons: 14,
    duration: "8小时",
    rating: 4.8,
    students: 2180,
    level: "高级",
    status: "进行中",
  },
  {
    id: "3",
    title: "Next.js 全栈开发实战",
    instructor: "张伟",
    instructorAvatar: "/avatars/user-03.jpg",
    thumbnail: "/projects/project-03.jpg",
    category: "全栈开发",
    progress: 25,
    totalLessons: 60,
    completedLessons: 15,
    duration: "18小时",
    rating: 4.9,
    students: 4560,
    level: "进阶",
    status: "进行中",
  },
  {
    id: "4",
    title: "UI/UX 设计基础",
    instructor: "陈静",
    instructorAvatar: "/avatars/user-04.jpg",
    thumbnail: "/projects/project-04.jpg",
    category: "设计",
    progress: 0,
    totalLessons: 28,
    completedLessons: 0,
    duration: "6小时",
    rating: 4.7,
    students: 1890,
    level: "入门",
    status: "未开始",
  },
];

// 学习路径
export const learningPaths: LearningPath[] = [
  {
    id: "1",
    name: "前端工程师",
    description: "掌握现代前端开发技术栈",
    courses: 8,
    completedCourses: 5,
    totalHours: 60,
    progress: 62,
    color: "var(--chart-1)",
  },
  {
    id: "2",
    name: "全栈工程师",
    description: "成为全能型开发者",
    courses: 12,
    completedCourses: 4,
    totalHours: 100,
    progress: 33,
    color: "var(--chart-2)",
  },
  {
    id: "3",
    name: "产品设计师",
    description: "打造极致用户体验",
    courses: 6,
    completedCourses: 1,
    totalHours: 40,
    progress: 17,
    color: "var(--chart-3)",
  },
];

// 最近获得的成就
export const achievements: Achievement[] = [
  {
    id: "1",
    title: "React 高级认证",
    description: "完成 React 19 完全指南课程",
    icon: "🏆",
    earnedAt: new Date("2025-12-05"),
    type: "certificate",
  },
  {
    id: "2",
    title: "学习先锋",
    description: "连续学习 7 天",
    icon: "🔥",
    earnedAt: new Date("2025-12-08"),
    type: "badge",
  },
  {
    id: "3",
    title: "知识探索者",
    description: "累计学习 100 小时",
    icon: "⭐",
    earnedAt: new Date("2025-12-01"),
    type: "milestone",
  },
  {
    id: "4",
    title: "TypeScript 入门证书",
    description: "完成 TypeScript 基础课程",
    icon: "📜",
    earnedAt: new Date("2025-11-28"),
    type: "certificate",
  },
];

// 即将开始的课程/直播
export const upcomingClasses: UpcomingClass[] = [
  {
    id: "1",
    title: "React 性能优化专题",
    instructor: "李明",
    instructorAvatar: "/avatars/user-01.jpg",
    startTime: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2小时后
    duration: "1.5小时",
    type: "直播",
  },
  {
    id: "2",
    title: "TypeScript 答疑",
    instructor: "王芳",
    instructorAvatar: "/avatars/user-02.jpg",
    startTime: new Date(Date.now() + 26 * 60 * 60 * 1000), // 明天
    duration: "1小时",
    type: "答疑",
  },
  {
    id: "3",
    title: "前端工程师认证考试",
    instructor: "系统",
    instructorAvatar: "/avatars/user-03.jpg",
    startTime: new Date(Date.now() + 72 * 60 * 60 * 1000), // 3天后
    duration: "2小时",
    type: "考试",
  },
];

// 每周学习时长数据
export const weeklyStudyData: WeeklyStudyData[] = [
  { day: "周一", hours: 2.5, target: 2 },
  { day: "周二", hours: 1.8, target: 2 },
  { day: "周三", hours: 3.2, target: 2 },
  { day: "周四", hours: 2.0, target: 2 },
  { day: "周五", hours: 1.5, target: 2 },
  { day: "周六", hours: 4.0, target: 3 },
  { day: "周日", hours: 3.5, target: 3 },
];

// 学习分类数据（用于饼图）
export const categoryData = [
  { name: "前端开发", value: 45, fill: "var(--chart-1)" },
  { name: "后端开发", value: 25, fill: "var(--chart-2)" },
  { name: "设计", value: 15, fill: "var(--chart-3)" },
  { name: "其他", value: 15, fill: "var(--chart-4)" },
];
