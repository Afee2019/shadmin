"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

import { usePathname, useRouter } from "next/navigation";

import { useStore, type StoreApi } from "zustand";

import { sidebarItems, type NavMainItem } from "@/navigation/sidebar/sidebar-items";

import { createTabsStore, type TabsState } from "./tab-store";

const TabsStoreContext = createContext<StoreApi<TabsState> | null>(null);

function findNavItem(url: string): NavMainItem | undefined {
  for (const group of sidebarItems) {
    for (const item of group.items) {
      if (item.url === url) return item;
      if (item.subItems) {
        const sub = item.subItems.find((s) => s.url === url);
        if (sub) return { ...sub } as NavMainItem;
      }
    }
  }
  return undefined;
}

function getPageTitle(pathname: string): string {
  const navItem = findNavItem(pathname);
  if (navItem) return navItem.title;

  const segments = pathname.split("/").filter(Boolean);
  return segments[segments.length - 1] ?? "页面";
}

export function TabsStoreProvider({ children }: { children: React.ReactNode }) {
  const [store] = useState(() => createTabsStore());
  const pathname = usePathname();
  const router = useRouter();
  const isInitialMount = useRef(true);

  // Sync current route with tabs
  useEffect(() => {
    if (!pathname.startsWith("/dashboard")) return;

    const { tabs, addTab, setActiveTab } = store.getState();
    const existingTab = tabs.find((t) => t.url === pathname);

    if (existingTab) {
      setActiveTab(pathname);
    } else {
      const title = getPageTitle(pathname);
      addTab({ url: pathname, title });
    }
  }, [pathname, store]);

  // On initial mount, navigate to activeUrl if it differs from current pathname
  useEffect(() => {
    if (!isInitialMount.current) return;
    isInitialMount.current = false;

    const { activeUrl } = store.getState();
    if (activeUrl && activeUrl !== pathname && pathname === "/dashboard/default") {
      router.replace(activeUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <TabsStoreContext.Provider value={store}>{children}</TabsStoreContext.Provider>;
}

export function useTabsStore<T>(selector: (state: TabsState) => T): T {
  const store = useContext(TabsStoreContext);
  if (!store) throw new Error("Missing TabsStoreProvider");
  return useStore(store, selector);
}
