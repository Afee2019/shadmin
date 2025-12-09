import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "Shadmin",
  version: packageJson.version,
  copyright: `© ${currentYear}, Shadmin.`,
  meta: {
    title: "Shadmin - 基于 Shadcn/ui 的现代化 Admin 模板",
    description:
      "Shadmin 是一个现代化的开源管理后台模板，基于 Next.js 16、Tailwind CSS v4 和 shadcn/ui 构建。提供多主题预设、零闪烁切换、多种仪表盘布局，适用于 SaaS 应用、管理面板和内部工具。",
  },
};
