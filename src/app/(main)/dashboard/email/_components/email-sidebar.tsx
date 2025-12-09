"use client";

import { Inbox, Send, FileEdit, Star, Archive, AlertCircle, Trash2, Plus, Tag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import { folders, labels } from "./email-data";

interface EmailSidebarProps {
  selectedFolder: string;
  onSelectFolder: (folder: string) => void;
  className?: string;
}

const folderIcons: Record<string, React.ElementType> = {
  inbox: Inbox,
  sent: Send,
  drafts: FileEdit,
  starred: Star,
  archive: Archive,
  spam: AlertCircle,
  trash: Trash2,
};

export function EmailSidebar({ selectedFolder, onSelectFolder, className }: EmailSidebarProps) {
  return (
    <div className={cn("flex h-full flex-col", className)}>
      <div className="p-4">
        <Button className="w-full justify-start gap-2">
          <Plus className="h-4 w-4" />
          写邮件
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="space-y-1 px-3">
          {folders.map((folder) => {
            const Icon = folderIcons[folder.id] ?? Inbox;
            const isSelected = selectedFolder === folder.id;

            return (
              <button
                key={folder.id}
                onClick={() => onSelectFolder(folder.id)}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                  isSelected
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground",
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4" />
                  <span>{folder.name}</span>
                </div>
                {folder.count > 0 && (
                  <span className={cn("text-xs", isSelected ? "text-primary-foreground/80" : "text-muted-foreground")}>
                    {folder.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <Separator className="my-4" />

        <div className="px-3">
          <div className="text-muted-foreground mb-2 flex items-center gap-2 px-3 text-xs font-medium uppercase">
            <Tag className="h-3 w-3" />
            标签
          </div>
          <div className="space-y-1">
            {labels.map((label) => (
              <button
                key={label.id}
                className="text-muted-foreground hover:bg-muted hover:text-foreground flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors"
              >
                <span className={cn("h-2 w-2 rounded-full", label.color)} />
                <span>{label.name}</span>
              </button>
            ))}
          </div>
        </div>
      </ScrollArea>

      <div className="border-t p-4">
        <div className="text-muted-foreground mb-2 text-xs">存储空间</div>
        <div className="bg-muted h-2 overflow-hidden rounded-full">
          <div className="bg-primary h-full w-[35%] rounded-full" />
        </div>
        <div className="text-muted-foreground mt-1 text-xs">3.5 GB / 10 GB 已使用</div>
      </div>
    </div>
  );
}
