"use client";

import * as React from "react";

import { Paperclip, Send, Smile } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSend: (content: string) => void;
  className?: string;
}

export function ChatInput({ onSend, className }: ChatInputProps) {
  const [message, setMessage] = React.useState("");
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (message.trim()) {
      onSend(message.trim());
      setMessage("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  };

  return (
    <div className={cn("border-t p-4", className)}>
      <div className="bg-muted/50 flex items-end gap-2 rounded-lg p-2">
        <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0">
          <Paperclip className="h-4 w-4" />
        </Button>
        <Textarea
          ref={textareaRef}
          value={message}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="输入消息..."
          className="max-h-[120px] min-h-[36px] flex-1 resize-none border-0 bg-transparent p-2 focus-visible:ring-0"
          rows={1}
        />
        <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0">
          <Smile className="h-4 w-4" />
        </Button>
        <Button size="icon" className="h-9 w-9 shrink-0" onClick={handleSend} disabled={!message.trim()}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
      <p className="text-muted-foreground mt-2 text-center text-xs">按 Enter 发送，Shift + Enter 换行</p>
    </div>
  );
}
