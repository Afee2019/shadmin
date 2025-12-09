"use client";

import { formatDistanceToNow } from "date-fns";
import { zhCN } from "date-fns/locale";
import { Star, Paperclip } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

import { type Email, labels as labelConfig } from "./email-data";

interface EmailListProps {
  emails: Email[];
  selectedEmail: Email | null;
  onSelectEmail: (email: Email) => void;
  className?: string;
}

export function EmailList({ emails, selectedEmail, onSelectEmail, className }: EmailListProps) {
  const getLabelColor = (labelId: string) => {
    return labelConfig.find((l) => l.id === labelId)?.color ?? "bg-gray-500";
  };

  return (
    <ScrollArea className={cn("h-full", className)}>
      <div className="divide-y">
        {emails.length === 0 ? (
          <div className="text-muted-foreground flex h-40 items-center justify-center text-sm">暂无邮件</div>
        ) : (
          emails.map((email) => (
            <button
              key={email.id}
              onClick={() => onSelectEmail(email)}
              className={cn(
                "flex w-full items-start gap-3 p-4 text-left transition-colors",
                selectedEmail?.id === email.id ? "bg-muted" : "hover:bg-muted/50",
                !email.read && "bg-primary/5",
              )}
            >
              <Checkbox className="mt-1" onClick={(e) => e.stopPropagation()} />

              <Avatar className="h-10 w-10 shrink-0">
                <AvatarImage src={email.from.avatar} alt={email.from.name} />
                <AvatarFallback>{email.from.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>

              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center justify-between gap-2">
                  <span className={cn("truncate text-sm", !email.read && "font-semibold")}>{email.from.name}</span>
                  <span className="text-muted-foreground shrink-0 text-xs">
                    {formatDistanceToNow(email.date, {
                      locale: zhCN,
                      addSuffix: true,
                    })}
                  </span>
                </div>

                <div className={cn("mb-1 truncate text-sm", !email.read ? "font-medium" : "text-muted-foreground")}>
                  {email.subject}
                </div>

                <div className="text-muted-foreground mb-2 line-clamp-1 text-xs">{email.preview}</div>

                <div className="flex items-center gap-2">
                  {email.labels.map((label) => (
                    <span key={label} className={cn("h-1.5 w-1.5 rounded-full", getLabelColor(label))} />
                  ))}
                  {email.attachments && email.attachments.length > 0 && (
                    <Paperclip className="text-muted-foreground h-3 w-3" />
                  )}
                  {email.starred && <Star className="h-3 w-3 fill-amber-400 text-amber-400" />}
                </div>
              </div>
            </button>
          ))
        )}
      </div>
    </ScrollArea>
  );
}
