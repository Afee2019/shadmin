"use client";

import * as React from "react";

import { format } from "date-fns";
import { zhCN } from "date-fns/locale";
import { Check, CheckCheck, MoreVertical, Phone, Video } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

import { type Contact, type Message, statusColors, statusLabels } from "./chat-data";
import { ChatInput } from "./chat-input";

interface ChatViewProps {
  contact: Contact | null;
  onSendMessage: (content: string) => void;
  className?: string;
}

function MessageStatus({ status }: { status?: Message["status"] }) {
  if (status === "read") {
    return <CheckCheck className="h-3.5 w-3.5 text-blue-500" />;
  }
  if (status === "delivered") {
    return <CheckCheck className="text-muted-foreground h-3.5 w-3.5" />;
  }
  return <Check className="text-muted-foreground h-3.5 w-3.5" />;
}

export function ChatView({ contact, onSendMessage, className }: ChatViewProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [contact?.messages]);

  if (!contact) {
    return (
      <div className={cn("flex h-full items-center justify-center", className)}>
        <div className="text-muted-foreground text-center">
          <p className="text-lg font-medium">选择一个对话开始聊天</p>
          <p className="mt-1 text-sm">从左侧列表选择联系人</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex h-full flex-col", className)}>
      {/* 聊天头部 */}
      <div className="flex items-center justify-between border-b px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar className="h-10 w-10">
              <AvatarImage src={contact.avatar} alt={contact.name} />
              <AvatarFallback>{contact.name.slice(0, 1)}</AvatarFallback>
            </Avatar>
            <span
              className={cn(
                "absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white",
                statusColors[contact.status],
              )}
            />
          </div>
          <div>
            <h3 className="font-medium">{contact.name}</h3>
            <p className="text-muted-foreground text-sm">{statusLabels[contact.status]}</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Phone className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Video className="h-4 w-4" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>查看资料</DropdownMenuItem>
              <DropdownMenuItem>搜索消息</DropdownMenuItem>
              <DropdownMenuItem>静音通知</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">删除对话</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* 消息列表 */}
      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        <div className="space-y-4">
          {contact.messages.map((message) => (
            <div key={message.id} className={cn("flex", message.sender === "user" ? "justify-end" : "justify-start")}>
              <div
                className={cn(
                  "max-w-[70%] rounded-2xl px-4 py-2",
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-muted rounded-bl-md",
                )}
              >
                <p className="text-sm">{message.content}</p>
                <div
                  className={cn(
                    "mt-1 flex items-center gap-1",
                    message.sender === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  <span
                    className={cn(
                      "text-xs",
                      message.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground",
                    )}
                  >
                    {format(message.timestamp, "HH:mm", { locale: zhCN })}
                  </span>
                  {message.sender === "user" && <MessageStatus status={message.status} />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* 输入框 */}
      <ChatInput onSend={onSendMessage} />
    </div>
  );
}
