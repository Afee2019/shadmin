"use client";

import * as React from "react";

import { formatDistanceToNow } from "date-fns";
import { zhCN } from "date-fns/locale";
import {
  Archive,
  Download,
  File,
  FileCode,
  FileSpreadsheet,
  FileText,
  FileVideo,
  Folder,
  Image,
  LayoutGrid,
  List,
  MoreHorizontal,
  Music,
  Presentation,
  Share2,
  Star,
  StarOff,
  Trash2,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

import { files, folders, type FileItem, type FileType, formatFileSize } from "./files-data";

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

function FileIcon({ type, className }: { type: FileType; className?: string }) {
  const Icon = typeIcons[type];
  const color = typeColors[type];
  return <Icon className={cn("h-5 w-5", color, className)} />;
}

// 视图切换按钮组件
function ViewToggle({ view, onViewChange }: { view: "grid" | "list"; onViewChange: (view: "grid" | "list") => void }) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onViewChange("list")}
        className={cn(view === "list" && "bg-muted")}
      >
        <List className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onViewChange("grid")}
        className={cn(view === "grid" && "bg-muted")}
      >
        <LayoutGrid className="h-4 w-4" />
      </Button>
    </div>
  );
}

interface FileListProps {
  viewMode?: "grid" | "list";
}

export function FileList({ viewMode = "list" }: FileListProps) {
  const [view, setView] = React.useState<"grid" | "list">(viewMode);
  const [selectedFiles, setSelectedFiles] = React.useState<string[]>([]);
  const allItems = [...folders, ...files];

  const toggleSelect = (id: string) => {
    setSelectedFiles((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));
  };

  const toggleSelectAll = () => {
    if (selectedFiles.length === allItems.length) {
      setSelectedFiles([]);
    } else {
      setSelectedFiles(allItems.map((f) => f.id));
    }
  };

  if (view === "grid") {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>所有文件</CardTitle>
            <ViewToggle view={view} onViewChange={setView} />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allItems.map((item) => (
              <FileGridItem key={item.id} file={item} />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>所有文件</CardTitle>
          <ViewToggle view={view} onViewChange={setView} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40px]">
                  <Checkbox
                    checked={selectedFiles.length === allItems.length && allItems.length > 0}
                    onCheckedChange={toggleSelectAll}
                  />
                </TableHead>
                <TableHead>名称</TableHead>
                <TableHead className="hidden md:table-cell">所有者</TableHead>
                <TableHead className="hidden sm:table-cell">修改时间</TableHead>
                <TableHead className="hidden lg:table-cell">大小</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allItems.map((item) => (
                <FileListRow
                  key={item.id}
                  file={item}
                  selected={selectedFiles.includes(item.id)}
                  onSelect={() => toggleSelect(item.id)}
                />
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

function FileListRow({ file, selected, onSelect }: { file: FileItem; selected: boolean; onSelect: () => void }) {
  const timeAgo = formatDistanceToNow(file.modifiedAt, {
    locale: zhCN,
    addSuffix: true,
  });

  return (
    <TableRow className={cn(selected && "bg-muted/50")}>
      <TableCell>
        <Checkbox checked={selected} onCheckedChange={onSelect} />
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-3">
          <FileIcon type={file.type} />
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="truncate font-medium">{file.name}</span>
              {file.starred && <Star className="h-3 w-3 fill-amber-400 text-amber-400" />}
              {file.shared && (
                <Badge variant="secondary" className="text-xs">
                  已共享
                </Badge>
              )}
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {file.owner && (
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={file.ownerAvatar} />
              <AvatarFallback>{file.owner[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm">{file.owner}</span>
          </div>
        )}
      </TableCell>
      <TableCell className="text-muted-foreground hidden text-sm sm:table-cell">{timeAgo}</TableCell>
      <TableCell className="text-muted-foreground hidden text-sm lg:table-cell">{formatFileSize(file.size)}</TableCell>
      <TableCell>
        <FileActions file={file} />
      </TableCell>
    </TableRow>
  );
}

function FileGridItem({ file }: { file: FileItem }) {
  return (
    <div className="hover:bg-muted/50 group relative rounded-lg border p-4 transition-colors">
      <div className="mb-3 flex items-start justify-between">
        <div className="bg-muted rounded-lg p-3">
          <FileIcon type={file.type} className="h-8 w-8" />
        </div>
        <FileActions file={file} />
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="truncate font-medium">{file.name}</span>
          {file.starred && <Star className="h-3 w-3 flex-shrink-0 fill-amber-400 text-amber-400" />}
        </div>
        <p className="text-muted-foreground mt-1 text-sm">{file.size ? formatFileSize(file.size) : "文件夹"}</p>
      </div>
    </div>
  );
}

function FileActions({ file }: { file: FileItem }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Download className="mr-2 h-4 w-4" />
          下载
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Share2 className="mr-2 h-4 w-4" />
          共享
        </DropdownMenuItem>
        <DropdownMenuItem>
          {file.starred ? (
            <>
              <StarOff className="mr-2 h-4 w-4" />
              取消星标
            </>
          ) : (
            <>
              <Star className="mr-2 h-4 w-4" />
              添加星标
            </>
          )}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          删除
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
