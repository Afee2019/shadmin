"use client";

import { useState } from "react";

import { Menu, Search, RefreshCw, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { emails, type Email } from "./_components/email-data";
import { EmailList } from "./_components/email-list";
import { EmailSidebar } from "./_components/email-sidebar";
import { EmailView } from "./_components/email-view";

export default function EmailPage() {
  const [selectedFolder, setSelectedFolder] = useState("inbox");
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // 根据文件夹和搜索条件过滤邮件
  const filteredEmails = emails.filter((email) => {
    const matchesFolder = selectedFolder === "starred" ? email.starred : email.folder === selectedFolder;
    const matchesSearch =
      searchQuery === "" ||
      email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.from.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.preview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFolder && matchesSearch;
  });

  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col">
      {/* 顶部工具栏 */}
      <div className="flex items-center gap-2 border-b px-4 py-2">
        {/* 移动端菜单 */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <EmailSidebar
              selectedFolder={selectedFolder}
              onSelectFolder={(folder) => {
                setSelectedFolder(folder);
                setSelectedEmail(null);
              }}
            />
          </SheetContent>
        </Sheet>

        {/* 搜索框 */}
        <div className="relative flex-1 lg:max-w-md">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input
            placeholder="搜索邮件..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* 主内容区 */}
      <div className="flex flex-1 overflow-hidden">
        {/* 桌面端侧边栏 */}
        <div className="hidden w-56 shrink-0 border-r lg:block">
          <EmailSidebar
            selectedFolder={selectedFolder}
            onSelectFolder={(folder) => {
              setSelectedFolder(folder);
              setSelectedEmail(null);
            }}
          />
        </div>

        {/* 邮件列表和详情 */}
        <div className="flex-1 overflow-hidden">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={35} minSize={25} maxSize={50}>
              <EmailList emails={filteredEmails} selectedEmail={selectedEmail} onSelectEmail={setSelectedEmail} />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={65}>
              <EmailView email={selectedEmail} />
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </div>
  );
}
