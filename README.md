# Shadmin

> 基于 Shadcn/ui 的现代化 Next.js Admin 模板

**Shadmin** = Shadcn + Admin，一个开箱即用的管理后台模板，基于最新的 Next.js 16、React 19、Tailwind CSS v4 和 shadcn/ui 构建。

## 特性亮点

- **零闪烁主题系统** - 多主题预设，支持明/暗模式，切换无闪烁
- **8+ 主题预设** - Default、Tangerine、Brutalist、Soft Pop、Ocean、Forest、Lavender、Midnight
- **4+ 仪表盘** - Default、CRM、Finance、Analytics
- **完整功能页面** - Profile、Settings、Users 等
- **最新技术栈** - Next.js 16 + React 19 + Tailwind v4 + shadcn/ui
- **响应式设计** - 完美适配桌面端和移动端
- **灵活布局** - 可折叠侧边栏、多种内容宽度选项

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Next.js 16 (App Router)、TypeScript |
| 样式 | Tailwind CSS v4、shadcn/ui |
| 状态管理 | Zustand |
| 表单 | React Hook Form、Zod |
| 表格 | TanStack Table |
| 图表 | Recharts |
| 工具链 | ESLint、Prettier、Husky |

## 页面列表

### 仪表盘
- `/dashboard/default` - 默认仪表盘
- `/dashboard/crm` - 客户管理仪表盘
- `/dashboard/finance` - 财务仪表盘
- `/dashboard/analytics` - 数据分析仪表盘

### 功能页面
- `/dashboard/profile` - 个人资料
- `/dashboard/settings` - 系统设置
- `/dashboard/users` - 用户管理

### 认证页面
- `/auth/v1/login` - 登录页 v1
- `/auth/v1/register` - 注册页 v1
- `/auth/v2/login` - 登录页 v2
- `/auth/v2/register` - 注册页 v2

## 快速开始

### 本地运行

```bash
# 克隆仓库
git clone https://github.com/Afee2019/shadmin.git

# 进入目录
cd shadmin

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

## 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── (main)/            # 主路由组
│   │   ├── auth/          # 认证页面
│   │   └── dashboard/     # 仪表盘页面
│   └── (external)/        # 外部/公开页面
├── components/
│   ├── ui/                # shadcn/ui 组件
│   └── data-table/        # 数据表格组件
├── stores/                # Zustand 状态管理
├── styles/presets/        # 主题预设 CSS
├── types/                 # TypeScript 类型
└── lib/                   # 工具函数
```

## 主题预设

创建新主题预设：

1. 在 `src/styles/presets/` 创建新的 CSS 文件
2. 运行 `pnpm generate:presets` 生成类型定义
3. 新主题会自动出现在设置页面

## 开源协议

Apache License 2.0 - 详见 [LICENSE](./LICENSE) 文件

---

**Shadmin** - 让管理后台开发更简单、更美观。
