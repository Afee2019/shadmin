# Shadmin

> 基于 Shadcn/ui 的现代化 Next.js Admin 模板

**Shadmin** = Shadcn + Admin，一个开箱即用的管理后台模板，基于最新的 Next.js 16、React 19、Tailwind CSS v4 和 shadcn/ui 构建。

**在线预览：** https://shadmin-omega.vercel.app/

## 特性亮点

- **零闪烁主题系统** - 15 种主题预设，支持明/暗模式，切换无闪烁
- **8 个仪表盘** - Default、CRM、Finance、Analytics、E-commerce、Academy、Logistics、Sales
- **20+ 功能页面** - Profile、Settings、Users、Billing、Charts、Calendar、Kanban 等
- **59 个 UI 组件** - 基于 shadcn/ui，高度可定制
- **最新技术栈** - Next.js 16 + React 19 + Tailwind v4 + TypeScript
- **响应式设计** - 完美适配桌面端和移动端
- **灵活布局** - 可折叠侧边栏、多种内容宽度选项

![iShot_2025-12-09_18.06.49](https://upic-lisj.oss-cn-beijing.aliyuncs.com/uPic/1765280732-iShot_2025-12-09_18.06.49.png)

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Next.js 16 (App Router)、React 19、TypeScript 5.9 |
| 样式 | Tailwind CSS v4、shadcn/ui |
| 状态管理 | Zustand |
| 表单 | React Hook Form、Zod |
| 表格 | TanStack Table |
| 图表 | Recharts |
| 拖拽 | @dnd-kit |
| 工具链 | ESLint、Prettier、Husky |

## 页面列表

### 仪表盘（8 个）

| 页面 | 路由 | 描述 |
|------|------|------|
| 默认仪表盘 | `/dashboard/default` | 通用数据概览 |
| CRM 仪表盘 | `/dashboard/crm` | 客户关系管理 |
| 财务仪表盘 | `/dashboard/finance` | 财务数据分析 |
| 数据分析 | `/dashboard/analytics` | 访问量、流量分析 |
| 电子商务 | `/dashboard/ecommerce` | 电商运营数据 |
| 学习中心 | `/dashboard/academy` | 在线教育平台 |
| 物流管理 | `/dashboard/logistics` | 配送、仓储管理 |
| 销售分析 | `/dashboard/sales` | 销售业绩分析 |

![iShot_2025-12-09_18.14.43](https://upic-lisj.oss-cn-beijing.aliyuncs.com/uPic/1765280755-iShot_2025-12-09_18.14.43.png)

### 功能页面（20+）

| 页面 | 路由 | 描述 |
|------|------|------|
| 个人资料 | `/dashboard/profile` | 用户资料展示 |
| 系统设置 | `/dashboard/settings` | 偏好设置管理 |
| 用户管理 | `/dashboard/users` | 用户列表与管理 |
| 定价页面 | `/dashboard/pricing` | 套餐定价展示 |
| 账单管理 | `/dashboard/billing` | 支付与账单 |
| 组件展示 | `/dashboard/widgets` | UI 组件库 |
| 图表展示 | `/dashboard/charts` | 14 种图表类型 |
| 时间轴 | `/dashboard/timeline` | 活动记录展示 |
| 日历 | `/dashboard/calendar` | 日程管理 |
| 看板 | `/dashboard/kanban` | 任务管理看板 |
| 邮件 | `/dashboard/email` | 邮件客户端 |
| 聊天 | `/dashboard/chat` | 即时通讯 |
| 发票 | `/dashboard/invoice` | 发票管理 |
| 角色权限 | `/dashboard/roles` | 权限配置 |
| 向导表单 | `/dashboard/wizard` | 多步骤表单 |
| 通知中心 | `/dashboard/notifications` | 消息通知 |
| 文件管理 | `/dashboard/files` | 文件浏览器 |
| 搜索 | `/dashboard/search` | 全局搜索 |

### 认证页面

- `/auth/v1/login` - 登录页 v1（分栏布局）
- `/auth/v1/register` - 注册页 v1
- `/auth/v2/login` - 登录页 v2（居中卡片）
- `/auth/v2/register` - 注册页 v2

## 主题预设（15 种）

| 预设 | 风格 |
|------|------|
| Default | 经典黑白 |
| Ocean | 清新海洋蓝 |
| Forest | 自然森林绿 |
| Lavender | 优雅薰衣草紫 |
| Rose | 柔和玫瑰粉 |
| Sunset | 温暖日落橙 |
| Midnight | 深邃午夜蓝 |
| Tangerine | 活力橘子橙 |
| Cherry | 高雅樱桃红 |
| Mint | 清凉薄荷绿 |
| Slate | 专业石板灰 |
| Amber | 温暖琥珀金 |
| Cobalt | 科技钴蓝 |
| Brutalist | 粗犷风格 |
| Soft Pop | 柔和流行 |

![iShot_2025-12-09_18.07.32](https://upic-lisj.oss-cn-beijing.aliyuncs.com/uPic/1765280770-iShot_2025-12-09_18.07.32.png)

## 快速开始

### 在线预览

访问 https://shadmin-omega.vercel.app/ 直接体验。

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

### 常用命令

```bash
pnpm dev              # 启动开发服务器
pnpm build            # 构建生产版本
pnpm lint             # 代码检查
pnpm format           # 代码格式化
pnpm generate:presets # 生成主题类型
```

## 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── (main)/            # 主路由组
│   │   ├── auth/          # 认证页面（v1/v2 两套）
│   │   └── dashboard/     # 仪表盘页面（28+ 路由）
│   └── (external)/        # 外部/公开页面
├── components/
│   ├── ui/                # 59 个 shadcn/ui 组件
│   ├── data-table/        # 数据表格系统
│   └── animation/         # 动效组件
├── stores/                # Zustand 状态管理
├── styles/presets/        # 15 个主题预设
├── types/                 # TypeScript 类型
├── navigation/            # 导航配置
└── lib/                   # 工具函数
```

## 自定义主题

创建新主题预设只需 3 步：

1. 在 `src/styles/presets/` 创建新的 CSS 文件
2. 运行 `pnpm generate:presets` 生成类型定义
3. 新主题会自动出现在设置页面

![iShot_2025-12-09_18.08.00](https://upic-lisj.oss-cn-beijing.aliyuncs.com/uPic/1765280788-iShot_2025-12-09_18.08.00.png)

## 开源协议

Apache License 2.0 - 详见 [LICENSE](./LICENSE) 文件

- 个人使用：免费
- 商业使用：免费
- 修改源码：允许
- 闭源发布：允许

---

**Shadmin** - 让管理后台开发更简单、更美观、更现代。
