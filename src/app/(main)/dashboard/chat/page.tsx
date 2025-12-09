"use client";

import * as React from "react";

import { FadeIn } from "@/components/animation";
import { Card } from "@/components/ui/card";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

import { type Contact, contacts as initialContacts } from "./_components/chat-data";
import { ChatSidebar } from "./_components/chat-sidebar";
import { ChatView } from "./_components/chat-view";

export default function ChatPage() {
  const [contacts, setContacts] = React.useState<Contact[]>(initialContacts);
  const [selectedContact, setSelectedContact] = React.useState<Contact | null>(null);
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSelectContact = (contact: Contact) => {
    setSelectedContact(contact);
    // 清除未读消息
    if (contact.unreadCount && contact.unreadCount > 0) {
      setContacts((prev) => prev.map((c) => (c.id === contact.id ? { ...c, unreadCount: 0 } : c)));
    }
  };

  const handleSendMessage = (content: string) => {
    if (!selectedContact) return;

    const newMessage = {
      id: `m${Date.now()}`,
      content,
      timestamp: new Date(),
      sender: "user" as const,
      status: "sent" as const,
    };

    // 更新联系人列表中的消息
    setContacts((prev) =>
      prev.map((c) =>
        c.id === selectedContact.id
          ? {
              ...c,
              messages: [...c.messages, newMessage],
              lastMessage: content,
              lastMessageTime: new Date(),
            }
          : c,
      ),
    );

    // 更新当前选中的联系人
    setSelectedContact((prev) =>
      prev
        ? {
            ...prev,
            messages: [...prev.messages, newMessage],
            lastMessage: content,
            lastMessageTime: new Date(),
          }
        : null,
    );
  };

  return (
    <div className="space-y-6 py-6">
      {/* 页面标题 */}
      <FadeIn>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">聊天</h1>
          <p className="text-muted-foreground hidden sm:block">与团队成员实时沟通</p>
        </div>
      </FadeIn>

      {/* 聊天界面 */}
      <FadeIn delay={100}>
        <Card className="h-[calc(100vh-12rem)] overflow-hidden">
          {/* 桌面端：可调整大小的面板 */}
          <div className="hidden h-full md:block">
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={30} minSize={25} maxSize={40}>
                <ChatSidebar
                  contacts={contacts}
                  selectedContact={selectedContact}
                  onSelectContact={handleSelectContact}
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={70}>
                <ChatView contact={selectedContact} onSendMessage={handleSendMessage} />
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>

          {/* 移动端：切换视图 */}
          <div className="h-full md:hidden">
            {selectedContact ? (
              <div className="flex h-full flex-col">
                <button
                  onClick={() => setSelectedContact(null)}
                  className="text-muted-foreground hover:bg-muted flex items-center gap-2 border-b px-4 py-2 text-sm"
                >
                  ← 返回联系人列表
                </button>
                <ChatView contact={selectedContact} onSendMessage={handleSendMessage} className="flex-1" />
              </div>
            ) : (
              <ChatSidebar
                contacts={contacts}
                selectedContact={selectedContact}
                onSelectContact={handleSelectContact}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
            )}
          </div>
        </Card>
      </FadeIn>
    </div>
  );
}
