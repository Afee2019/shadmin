"use client";

import { useCallback, useEffect, useRef } from "react";

import { useRouter } from "next/navigation";

import { X, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { sidebarItems } from "@/navigation/sidebar/sidebar-items";
import type { Tab } from "@/stores/tabs/tab-store";
import { useTabsStore } from "@/stores/tabs/tab-store-provider";

function buildIconMap(): Map<string, LucideIcon> {
  const map = new Map<string, LucideIcon>();
  for (const group of sidebarItems) {
    for (const item of group.items) {
      if (item.icon) map.set(item.url, item.icon);
      const subs = item.subItems ?? [];
      for (const sub of subs) {
        if (sub.icon) map.set(sub.url, sub.icon);
      }
    }
  }
  return map;
}

const tabIconMap = buildIconMap();

function TabItem({
  tab,
  isActive,
  icon: Icon,
  onActivate,
  onClose,
}: {
  tab: Tab;
  isActive: boolean;
  icon?: LucideIcon;
  onActivate: () => void;
  onClose: (e: React.MouseEvent) => void;
}) {
  const tabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isActive && tabRef.current) {
      tabRef.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    }
  }, [isActive]);

  return (
    <button
      ref={tabRef}
      onClick={onActivate}
      onMouseDown={(e) => {
        if (e.button === 1 && !tab.pinned) {
          e.preventDefault();
          onClose(e);
        }
      }}
      className={cn(
        "group relative flex h-full shrink-0 items-center gap-1.5 border-r px-3 text-xs transition-colors select-none",
        "hover:bg-accent/50",
        isActive ? "bg-background text-foreground" : "bg-muted/30 text-muted-foreground",
      )}
    >
      {isActive && <span className="bg-primary absolute right-0 bottom-0 left-0 h-0.5" />}
      {Icon && <Icon className="size-3.5 shrink-0" />}
      <span className="max-w-24 truncate">{tab.title}</span>
      {!tab.pinned && (
        <span
          role="button"
          tabIndex={-1}
          onClick={onClose}
          className={cn(
            "ml-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-sm transition-colors",
            "hover:bg-muted-foreground/20 opacity-0 group-hover:opacity-100",
            isActive && "opacity-60",
          )}
        >
          <X className="size-3" />
        </span>
      )}
    </button>
  );
}

export function TabBar() {
  const tabs = useTabsStore((s) => s.tabs);
  const activeUrl = useTabsStore((s) => s.activeUrl);
  const removeTab = useTabsStore((s) => s.removeTab);
  const setActiveTab = useTabsStore((s) => s.setActiveTab);
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleActivate = useCallback(
    (url: string) => {
      setActiveTab(url);
      router.push(url);
    },
    [setActiveTab, router],
  );

  const handleClose = useCallback(
    (e: React.MouseEvent, url: string) => {
      e.stopPropagation();
      const isActive = activeUrl === url;
      const tabIndex = tabs.findIndex((t) => t.url === url);
      removeTab(url);

      if (isActive) {
        const remaining = tabs.filter((t) => t.url !== url);
        const newActive = remaining[Math.min(tabIndex, remaining.length - 1)];
        if (newActive) router.push(newActive.url);
      }
    },
    [activeUrl, tabs, removeTab, router],
  );

  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  }, []);

  if (tabs.length <= 1) return null;

  return (
    <div
      ref={scrollRef}
      onWheel={handleWheel}
      className="bg-muted/20 scrollbar-none flex h-9 shrink-0 items-stretch overflow-x-auto border-b"
    >
      {tabs.map((tab) => (
        <TabItem
          key={tab.url}
          tab={tab}
          isActive={activeUrl === tab.url}
          icon={tabIconMap.get(tab.url)}
          onActivate={() => handleActivate(tab.url)}
          onClose={(e) => handleClose(e, tab.url)}
        />
      ))}
    </div>
  );
}
