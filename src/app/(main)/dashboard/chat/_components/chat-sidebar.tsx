"use client";

import { formatDistanceToNow } from "date-fns";
import { zhCN } from "date-fns/locale";
import { Search } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

import { type Contact, statusColors } from "./chat-data";

interface ChatSidebarProps {
  contacts: Contact[];
  selectedContact: Contact | null;
  onSelectContact: (contact: Contact) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  className?: string;
}

export function ChatSidebar({
  contacts,
  selectedContact,
  onSelectContact,
  searchQuery,
  onSearchChange,
  className,
}: ChatSidebarProps) {
  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className={cn("flex h-full flex-col", className)}>
      {/* 搜索框 */}
      <div className="border-b p-4">
        <div className="relative">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input
            placeholder="搜索联系人..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* 联系人列表 */}
      <ScrollArea className="flex-1">
        <div className="divide-y">
          {filteredContacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => onSelectContact(contact)}
              className={cn(
                "flex w-full items-start gap-3 p-4 text-left transition-colors",
                "hover:bg-muted/50",
                selectedContact?.id === contact.id && "bg-muted",
              )}
            >
              {/* 头像 */}
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

              {/* 信息 */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="truncate font-medium">{contact.name}</span>
                  {contact.lastMessageTime && (
                    <span className="text-muted-foreground text-xs">
                      {formatDistanceToNow(contact.lastMessageTime, {
                        addSuffix: true,
                        locale: zhCN,
                      })}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground truncate text-sm">{contact.lastMessage}</p>
                  {contact.unreadCount && contact.unreadCount > 0 && (
                    <Badge variant="default" className="ml-2 h-5 min-w-5 justify-center rounded-full px-1.5 text-xs">
                      {contact.unreadCount}
                    </Badge>
                  )}
                </div>
              </div>
            </button>
          ))}

          {filteredContacts.length === 0 && (
            <div className="text-muted-foreground p-8 text-center text-sm">未找到匹配的联系人</div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
