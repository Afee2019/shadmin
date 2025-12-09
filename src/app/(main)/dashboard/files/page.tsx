"use client";

import { Plus, Search, Upload } from "lucide-react";

import { FadeIn } from "@/components/animation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { FileList } from "./_components/file-list";
import { QuickAccess } from "./_components/quick-access";
import { RecentFiles } from "./_components/recent-files";
import { StorageOverview } from "./_components/storage-overview";

export default function FilesPage() {
  return (
    <div className="space-y-6 py-6">
      {/* 页面标题 */}
      <FadeIn>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">文件管理</h1>
            <p className="text-muted-foreground">管理和组织您的文件和文件夹</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              上传
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              新建文件夹
            </Button>
          </div>
        </div>
      </FadeIn>

      {/* 搜索栏 */}
      <FadeIn delay={100}>
        <div className="relative">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input placeholder="搜索文件和文件夹..." className="pl-10" />
        </div>
      </FadeIn>

      {/* 主体内容 */}
      <FadeIn delay={200}>
        <div className="grid gap-6 lg:grid-cols-4">
          {/* 侧边栏 */}
          <div className="space-y-6 lg:col-span-1">
            <StorageOverview />
            <QuickAccess />
            <RecentFiles />
          </div>

          {/* 文件列表 */}
          <div className="lg:col-span-3">
            <FileList />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
