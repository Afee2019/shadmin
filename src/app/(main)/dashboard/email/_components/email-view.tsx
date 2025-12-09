"use client";

import { format } from "date-fns";
import { zhCN } from "date-fns/locale";
import {
  Reply,
  ReplyAll,
  Forward,
  Star,
  Trash2,
  Archive,
  MoreHorizontal,
  Paperclip,
  Download,
  FileText,
  Image,
  FileArchive,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import type { Email } from "./email-data";

interface EmailViewProps {
  email: Email | null;
  className?: string;
}

const fileIconMap: Record<string, React.ElementType> = {
  pdf: FileText,
  pptx: FileText,
  doc: FileText,
  docx: FileText,
  jpg: Image,
  png: Image,
  gif: Image,
  figma: Image,
  zip: FileArchive,
  rar: FileArchive,
};

const getFileIcon = (type: string) => fileIconMap[type] ?? Paperclip;

export function EmailView({ email, className }: EmailViewProps) {
  if (!email) {
    return (
      <div className={cn("text-muted-foreground flex h-full items-center justify-center", className)}>
        <div className="text-center">
          <p className="text-lg font-medium">选择一封邮件</p>
          <p className="text-sm">点击左侧邮件列表查看详情</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex h-full flex-col", className)}>
      {/* 工具栏 */}
      <div className="flex items-center justify-between border-b px-4 py-2">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Reply className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ReplyAll className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Forward className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Star className={cn("h-4 w-4", email.starred && "fill-amber-400 text-amber-400")} />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Archive className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Trash2 className="h-4 w-4" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>标记为未读</DropdownMenuItem>
              <DropdownMenuItem>添加标签</DropdownMenuItem>
              <DropdownMenuItem>移动到</DropdownMenuItem>
              <DropdownMenuItem>打印</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-6">
          {/* 邮件头部 */}
          <div className="mb-6">
            <h1 className="mb-4 text-xl font-semibold">{email.subject}</h1>
            <div className="flex items-start gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={email.from.avatar} alt={email.from.name} />
                <AvatarFallback>{email.from.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{email.from.name}</p>
                    <p className="text-muted-foreground text-sm">{email.from.email}</p>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {format(email.date, "yyyy年M月d日 HH:mm", { locale: zhCN })}
                  </p>
                </div>
                <p className="text-muted-foreground mt-1 text-sm">收件人：{email.to}</p>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          {/* 邮件正文 */}
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <pre className="font-sans whitespace-pre-wrap">{email.body}</pre>
          </div>

          {/* 附件 */}
          {email.attachments && email.attachments.length > 0 && (
            <>
              <Separator className="my-6" />
              <div>
                <h3 className="text-muted-foreground mb-3 flex items-center gap-2 text-sm font-medium">
                  <Paperclip className="h-4 w-4" />
                  附件 ({email.attachments.length})
                </h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  {email.attachments.map((attachment) => {
                    const FileIcon = getFileIcon(attachment.type);
                    return (
                      <div
                        key={attachment.name}
                        className="hover:bg-muted/50 flex items-center gap-3 rounded-lg border p-3 transition-colors"
                      >
                        <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-lg">
                          <FileIcon className="text-muted-foreground h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium">{attachment.name}</p>
                          <p className="text-muted-foreground text-xs">{attachment.size}</p>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </ScrollArea>

      {/* 快速回复 */}
      <div className="border-t p-4">
        <div className="bg-muted/50 flex items-center gap-2 rounded-lg border p-3">
          <input type="text" placeholder="快速回复..." className="min-w-0 flex-1 bg-transparent text-sm outline-none" />
          <Button size="sm">发送</Button>
        </div>
      </div>
    </div>
  );
}
