export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: "管理员" | "编辑" | "用户" | "访客";
  status: "活跃" | "待验证" | "已禁用";
  department: string;
  joinDate: string;
}

export const usersData: User[] = [
  {
    id: "1",
    name: "张明",
    email: "zhangming@example.com",
    avatar: "/avatars/user-01.jpg",
    role: "管理员",
    status: "活跃",
    department: "技术部",
    joinDate: "2023-01-15",
  },
  {
    id: "2",
    name: "李晓峰",
    email: "lixiaofeng@example.com",
    avatar: "/avatars/user-02.jpg",
    role: "编辑",
    status: "活跃",
    department: "产品部",
    joinDate: "2023-03-22",
  },
  {
    id: "3",
    name: "王芳",
    email: "wangfang@example.com",
    avatar: "/avatars/user-03.jpg",
    role: "用户",
    status: "活跃",
    department: "设计部",
    joinDate: "2023-05-10",
  },
  {
    id: "4",
    name: "陈静",
    email: "chenjing@example.com",
    avatar: "/avatars/user-04.jpg",
    role: "用户",
    status: "待验证",
    department: "市场部",
    joinDate: "2023-07-08",
  },
  {
    id: "5",
    name: "赵鹏",
    email: "zhaopeng@example.com",
    avatar: "/avatars/user-05.jpg",
    role: "编辑",
    status: "活跃",
    department: "运营部",
    joinDate: "2023-09-01",
  },
  {
    id: "6",
    name: "刘强",
    email: "liuqiang@example.com",
    avatar: "/avatars/user-06.jpg",
    role: "访客",
    status: "已禁用",
    department: "财务部",
    joinDate: "2023-11-20",
  },
  {
    id: "7",
    name: "周婷",
    email: "zhouting@example.com",
    avatar: "/avatars/user-01.jpg",
    role: "用户",
    status: "活跃",
    department: "人事部",
    joinDate: "2024-01-05",
  },
  {
    id: "8",
    name: "吴磊",
    email: "wulei@example.com",
    avatar: "/avatars/user-02.jpg",
    role: "编辑",
    status: "活跃",
    department: "技术部",
    joinDate: "2024-02-18",
  },
  {
    id: "9",
    name: "孙悦",
    email: "sunyue@example.com",
    avatar: "/avatars/user-03.jpg",
    role: "用户",
    status: "待验证",
    department: "客服部",
    joinDate: "2024-04-12",
  },
  {
    id: "10",
    name: "钱进",
    email: "qianjin@example.com",
    avatar: "/avatars/user-04.jpg",
    role: "管理员",
    status: "活跃",
    department: "技术部",
    joinDate: "2024-06-30",
  },
];
