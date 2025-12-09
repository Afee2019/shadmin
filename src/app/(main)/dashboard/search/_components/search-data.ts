// Search 搜索页面数据

export type SearchCategory = "all" | "users" | "files" | "products" | "articles";

export interface SearchResult {
  id: string;
  type: "user" | "file" | "product" | "article";
  title: string;
  description: string;
  image?: string;
  meta: Record<string, string | number>;
  url: string;
}

export interface SearchHistoryItem {
  id: string;
  query: string;
  timestamp: Date;
  results: number;
}

// 模拟搜索历史
export const searchHistory: SearchHistoryItem[] = [
  {
    id: "h1",
    query: "用户管理",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    results: 15,
  },
  {
    id: "h2",
    query: "销售报表",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    results: 8,
  },
  {
    id: "h3",
    query: "产品库存",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
    results: 23,
  },
  {
    id: "h4",
    query: "订单状态",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
    results: 12,
  },
];

// 热门搜索
export const trendingSearches = [
  "仪表盘",
  "用户列表",
  "销售分析",
  "财务报表",
  "订单管理",
  "产品目录",
  "客户数据",
  "系统设置",
];

// 搜索分类
export const searchCategories: { value: SearchCategory; label: string }[] = [
  { value: "all", label: "全部" },
  { value: "users", label: "用户" },
  { value: "files", label: "文件" },
  { value: "products", label: "产品" },
  { value: "articles", label: "文章" },
];

// 模拟搜索结果 - 用户
export const userResults: SearchResult[] = [
  {
    id: "u1",
    type: "user",
    title: "张三",
    description: "高级产品经理 · 产品部",
    image: "/avatars/01.png",
    meta: { email: "zhangsan@example.com", projects: 12 },
    url: "/dashboard/users/1",
  },
  {
    id: "u2",
    type: "user",
    title: "李四",
    description: "前端开发工程师 · 技术部",
    image: "/avatars/02.png",
    meta: { email: "lisi@example.com", projects: 8 },
    url: "/dashboard/users/2",
  },
  {
    id: "u3",
    type: "user",
    title: "王五",
    description: "UI/UX 设计师 · 设计部",
    image: "/avatars/03.png",
    meta: { email: "wangwu@example.com", projects: 15 },
    url: "/dashboard/users/3",
  },
  {
    id: "u4",
    type: "user",
    title: "赵六",
    description: "市场营销专员 · 市场部",
    image: "/avatars/04.png",
    meta: { email: "zhaoliu@example.com", projects: 6 },
    url: "/dashboard/users/4",
  },
];

// 模拟搜索结果 - 文件
export const fileResults: SearchResult[] = [
  {
    id: "f1",
    type: "file",
    title: "2024年度销售报表.xlsx",
    description: "最后修改：2天前 · 2.4 MB",
    meta: { size: "2.4 MB", modified: "2024-12-07" },
    url: "/dashboard/files/1",
  },
  {
    id: "f2",
    type: "file",
    title: "产品设计文档.pdf",
    description: "最后修改：1周前 · 5.8 MB",
    meta: { size: "5.8 MB", modified: "2024-12-02" },
    url: "/dashboard/files/2",
  },
  {
    id: "f3",
    type: "file",
    title: "用户反馈汇总.docx",
    description: "最后修改：3天前 · 1.2 MB",
    meta: { size: "1.2 MB", modified: "2024-12-06" },
    url: "/dashboard/files/3",
  },
  {
    id: "f4",
    type: "file",
    title: "项目计划书.pptx",
    description: "最后修改：5天前 · 8.5 MB",
    meta: { size: "8.5 MB", modified: "2024-12-04" },
    url: "/dashboard/files/4",
  },
];

// 模拟搜索结果 - 产品
export const productResults: SearchResult[] = [
  {
    id: "p1",
    type: "product",
    title: "无线蓝牙耳机",
    description: "高品质音频设备 · 库存充足",
    image: "/products/headphones.jpg",
    meta: { price: 299, stock: 156 },
    url: "/dashboard/products/1",
  },
  {
    id: "p2",
    type: "product",
    title: "智能手表",
    description: "健康监测 · 运动追踪",
    image: "/products/watch.jpg",
    meta: { price: 1299, stock: 89 },
    url: "/dashboard/products/2",
  },
  {
    id: "p3",
    type: "product",
    title: "机械键盘",
    description: "Cherry轴体 · RGB背光",
    image: "/products/keyboard.jpg",
    meta: { price: 599, stock: 234 },
    url: "/dashboard/products/3",
  },
  {
    id: "p4",
    type: "product",
    title: "4K显示器",
    description: "专业级色彩 · 27英寸",
    image: "/products/monitor.jpg",
    meta: { price: 2499, stock: 45 },
    url: "/dashboard/products/4",
  },
];

// 模拟搜索结果 - 文章
export const articleResults: SearchResult[] = [
  {
    id: "a1",
    type: "article",
    title: "如何提升团队协作效率",
    description: "本文介绍了提升团队协作效率的10个实用技巧...",
    meta: { author: "张三", views: 1234, date: "2024-12-01" },
    url: "/dashboard/articles/1",
  },
  {
    id: "a2",
    type: "article",
    title: "2024年市场趋势分析",
    description: "深入分析当前市场走向和未来发展趋势...",
    meta: { author: "李四", views: 2567, date: "2024-11-28" },
    url: "/dashboard/articles/2",
  },
  {
    id: "a3",
    type: "article",
    title: "产品设计最佳实践",
    description: "从用户体验角度出发，分享产品设计的核心原则...",
    meta: { author: "王五", views: 987, date: "2024-11-25" },
    url: "/dashboard/articles/3",
  },
  {
    id: "a4",
    type: "article",
    title: "数据驱动决策指南",
    description: "如何利用数据分析来做出更好的商业决策...",
    meta: { author: "赵六", views: 1876, date: "2024-11-20" },
    url: "/dashboard/articles/4",
  },
];

// 获取所有搜索结果
export function getAllSearchResults(): SearchResult[] {
  return [...userResults, ...fileResults, ...productResults, ...articleResults];
}

// 按类别筛选结果
export function getResultsByCategory(category: SearchCategory): SearchResult[] {
  if (category === "all") {
    return getAllSearchResults();
  }

  const categoryMap: Record<Exclude<SearchCategory, "all">, SearchResult[]> = {
    users: userResults,
    files: fileResults,
    products: productResults,
    articles: articleResults,
  };

  return categoryMap[category] || [];
}

// 搜索过滤（模拟）
export function searchResults(query: string, category: SearchCategory): SearchResult[] {
  const results = getResultsByCategory(category);

  if (!query.trim()) {
    return results;
  }

  const lowerQuery = query.toLowerCase();
  return results.filter(
    (result) =>
      result.title.toLowerCase().includes(lowerQuery) || result.description.toLowerCase().includes(lowerQuery),
  );
}
