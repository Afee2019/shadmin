"use client";

import { formatDistanceToNow } from "date-fns";
import { zhCN } from "date-fns/locale";
import {
  Archive,
  File,
  FileCode,
  FileSpreadsheet,
  FileText,
  FileVideo,
  Folder,
  Image,
  Music,
  Presentation,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { formatFileSize, recentFiles, type FileType } from "./files-data";

const typeIcons: Record<FileType, React.ElementType> = {
  folder: Folder,
  image: Image,
  document: FileText,
  video: FileVideo,
  audio: Music,
  archive: Archive,
  code: FileCode,
  pdf: FileText,
  spreadsheet: FileSpreadsheet,
  presentation: Presentation,
  other: File,
};

const typeColors: Record<FileType, string> = {
  folder: "text-amber-500",
  image: "text-green-500",
  document: "text-blue-500",
  video: "text-purple-500",
  audio: "text-pink-500",
  archive: "text-orange-500",
  code: "text-cyan-500",
  pdf: "text-red-500",
  spreadsheet: "text-emerald-500",
  presentation: "text-indigo-500",
  other: "text-gray-500",
};

export function RecentFiles() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">最近文件</CardTitle>
          <Button variant="ghost" size="sm">
            查看全部
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {recentFiles.map((file) => {
          const Icon = typeIcons[file.type];
          const color = typeColors[file.type];
          const timeAgo = formatDistanceToNow(file.modifiedAt, {
            locale: zhCN,
            addSuffix: true,
          });

          return (
            <div key={file.id} className="hover:bg-muted/50 flex items-center gap-3 rounded-lg p-2 transition-colors">
              <div className="bg-muted rounded-lg p-2">
                <Icon className={cn("h-5 w-5", color)} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{file.name}</p>
                <p className="text-muted-foreground text-xs">
                  {formatFileSize(file.size)} · {timeAgo}
                </p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
