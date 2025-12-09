// Files 文件管理页面数据

export type FileType =
  | "folder"
  | "image"
  | "document"
  | "video"
  | "audio"
  | "archive"
  | "code"
  | "pdf"
  | "spreadsheet"
  | "presentation"
  | "other";

export interface FileItem {
  id: string;
  name: string;
  type: FileType;
  size?: number; // bytes
  modifiedAt: Date;
  createdAt: Date;
  parentId?: string;
  shared?: boolean;
  starred?: boolean;
  thumbnail?: string;
  extension?: string;
  owner?: string;
  ownerAvatar?: string;
}

export interface StorageStats {
  used: number;
  total: number;
  breakdown: {
    type: FileType;
    size: number;
    color: string;
  }[];
}

// 文件类型配置
export const fileTypeConfig: Record<FileType, { label: string; icon: string; color: string }> = {
  folder: { label: "文件夹", icon: "folder", color: "text-amber-500" },
  image: { label: "图片", icon: "image", color: "text-green-500" },
  document: { label: "文档", icon: "file-text", color: "text-blue-500" },
  video: { label: "视频", icon: "video", color: "text-purple-500" },
  audio: { label: "音频", icon: "music", color: "text-pink-500" },
  archive: { label: "压缩包", icon: "archive", color: "text-orange-500" },
  code: { label: "代码", icon: "code", color: "text-cyan-500" },
  pdf: { label: "PDF", icon: "file-text", color: "text-red-500" },
  spreadsheet: { label: "表格", icon: "table", color: "text-emerald-500" },
  presentation: { label: "演示文稿", icon: "presentation", color: "text-indigo-500" },
  other: { label: "其他", icon: "file", color: "text-gray-500" },
};

// 存储统计
export const storageStats: StorageStats = {
  used: 42.5 * 1024 * 1024 * 1024, // 42.5 GB
  total: 100 * 1024 * 1024 * 1024, // 100 GB
  breakdown: [
    { type: "image", size: 15.2 * 1024 * 1024 * 1024, color: "hsl(var(--chart-1))" },
    { type: "video", size: 12.8 * 1024 * 1024 * 1024, color: "hsl(var(--chart-2))" },
    { type: "document", size: 8.5 * 1024 * 1024 * 1024, color: "hsl(var(--chart-3))" },
    { type: "other", size: 6.0 * 1024 * 1024 * 1024, color: "hsl(var(--chart-4))" },
  ],
};

// 文件夹数据
export const folders: FileItem[] = [
  {
    id: "folder-1",
    name: "项目文档",
    type: "folder",
    modifiedAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30),
    starred: true,
  },
  {
    id: "folder-2",
    name: "设计素材",
    type: "folder",
    modifiedAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 60),
    shared: true,
  },
  {
    id: "folder-3",
    name: "会议记录",
    type: "folder",
    modifiedAt: new Date(Date.now() - 1000 * 60 * 60 * 48),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 90),
  },
  {
    id: "folder-4",
    name: "产品图片",
    type: "folder",
    modifiedAt: new Date(Date.now() - 1000 * 60 * 60 * 72),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 120),
  },
];

// 文件数据
export const files: FileItem[] = [
  {
    id: "file-1",
    name: "年度报告.pdf",
    type: "pdf",
    size: 2.5 * 1024 * 1024,
    modifiedAt: new Date(Date.now() - 1000 * 60 * 30),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
    extension: "pdf",
    starred: true,
    owner: "张伟",
    ownerAvatar: "/avatars/user-01.jpg",
  },
  {
    id: "file-2",
    name: "产品演示.pptx",
    type: "presentation",
    size: 15.8 * 1024 * 1024,
    modifiedAt: new Date(Date.now() - 1000 * 60 * 60 * 3),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14),
    extension: "pptx",
    shared: true,
    owner: "李娜",
    ownerAvatar: "/avatars/user-02.jpg",
  },
  {
    id: "file-3",
    name: "销售数据.xlsx",
    type: "spreadsheet",
    size: 1.2 * 1024 * 1024,
    modifiedAt: new Date(Date.now() - 1000 * 60 * 60 * 6),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
    extension: "xlsx",
    owner: "王强",
    ownerAvatar: "/avatars/user-03.jpg",
  },
  {
    id: "file-4",
    name: "项目截图.png",
    type: "image",
    size: 856 * 1024,
    modifiedAt: new Date(Date.now() - 1000 * 60 * 60 * 12),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5),
    extension: "png",
    thumbnail: "/projects/project-01.jpg",
    owner: "刘洋",
    ownerAvatar: "/avatars/user-04.jpg",
  },
  {
    id: "file-5",
    name: "需求文档.docx",
    type: "document",
    size: 524 * 1024,
    modifiedAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10),
    extension: "docx",
    starred: true,
    owner: "陈静",
    ownerAvatar: "/avatars/user-05.jpg",
  },
  {
    id: "file-6",
    name: "演示视频.mp4",
    type: "video",
    size: 125 * 1024 * 1024,
    modifiedAt: new Date(Date.now() - 1000 * 60 * 60 * 36),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 20),
    extension: "mp4",
    shared: true,
    owner: "赵明",
    ownerAvatar: "/avatars/user-06.jpg",
  },
  {
    id: "file-7",
    name: "源代码.zip",
    type: "archive",
    size: 45.6 * 1024 * 1024,
    modifiedAt: new Date(Date.now() - 1000 * 60 * 60 * 48),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 15),
    extension: "zip",
    owner: "张伟",
    ownerAvatar: "/avatars/user-01.jpg",
  },
  {
    id: "file-8",
    name: "配置文件.json",
    type: "code",
    size: 12 * 1024,
    modifiedAt: new Date(Date.now() - 1000 * 60 * 60 * 72),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 25),
    extension: "json",
    owner: "李娜",
    ownerAvatar: "/avatars/user-02.jpg",
  },
];

// 最近文件
export const recentFiles = files.slice(0, 5);

// 星标文件
export const starredFiles = [...folders, ...files].filter((f) => f.starred);

// 共享文件
export const sharedFiles = [...folders, ...files].filter((f) => f.shared);

// 格式化文件大小
export function formatFileSize(bytes?: number): string {
  if (!bytes) return "-";
  const units = ["B", "KB", "MB", "GB", "TB"];
  let unitIndex = 0;
  let size = bytes;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(size < 10 ? 1 : 0)} ${units[unitIndex]}`;
}

// 扩展名到类型的映射
const extensionTypeMap: Record<string, FileType> = {
  // PDF
  pdf: "pdf",
  // Images
  jpg: "image",
  jpeg: "image",
  png: "image",
  gif: "image",
  svg: "image",
  webp: "image",
  bmp: "image",
  ico: "image",
  // Documents
  doc: "document",
  docx: "document",
  txt: "document",
  rtf: "document",
  odt: "document",
  // Videos
  mp4: "video",
  avi: "video",
  mov: "video",
  wmv: "video",
  flv: "video",
  mkv: "video",
  webm: "video",
  // Audio
  mp3: "audio",
  wav: "audio",
  ogg: "audio",
  flac: "audio",
  aac: "audio",
  wma: "audio",
  // Archives
  zip: "archive",
  rar: "archive",
  "7z": "archive",
  tar: "archive",
  gz: "archive",
  bz2: "archive",
  // Code
  js: "code",
  ts: "code",
  jsx: "code",
  tsx: "code",
  json: "code",
  html: "code",
  css: "code",
  py: "code",
  java: "code",
  cpp: "code",
  c: "code",
  go: "code",
  rs: "code",
  // Spreadsheets
  xls: "spreadsheet",
  xlsx: "spreadsheet",
  csv: "spreadsheet",
  ods: "spreadsheet",
  // Presentations
  ppt: "presentation",
  pptx: "presentation",
  odp: "presentation",
};

// 获取文件扩展名对应的类型
export function getFileTypeFromExtension(extension?: string): FileType {
  if (!extension) return "other";
  return extensionTypeMap[extension.toLowerCase()] ?? "other";
}
