"use client";

import { formatDistanceToNow } from "date-fns";
import { zhCN } from "date-fns/locale";
import { Clock, History, Trash2, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { type SearchHistoryItem, searchHistory, trendingSearches } from "./search-data";

interface SearchSidebarProps {
  onSearchClick: (query: string) => void;
}

function HistoryItem({ item, onClick }: { item: SearchHistoryItem; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="hover:bg-muted flex w-full items-center gap-3 rounded-lg p-2 text-left transition-colors"
    >
      <Clock className="text-muted-foreground h-4 w-4 shrink-0" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">{item.query}</p>
        <p className="text-muted-foreground text-xs">
          {formatDistanceToNow(item.timestamp, { addSuffix: true, locale: zhCN })}
        </p>
      </div>
      <Badge variant="secondary" className="shrink-0 text-xs">
        {item.results}
      </Badge>
    </button>
  );
}

export function SearchSidebar({ onSearchClick }: SearchSidebarProps) {
  return (
    <div className="space-y-6">
      {/* 搜索历史 */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-base">
              <History className="h-4 w-4" />
              搜索历史
            </CardTitle>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-1">
            {searchHistory.map((item) => (
              <HistoryItem key={item.id} item={item} onClick={() => onSearchClick(item.query)} />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 热门搜索 */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <TrendingUp className="h-4 w-4" />
            热门搜索
          </CardTitle>
          <CardDescription>最近的热门搜索关键词</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-2">
            {trendingSearches.map((term, index) => (
              <button
                key={term}
                onClick={() => onSearchClick(term)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors",
                  "hover:bg-muted hover:border-primary/50",
                )}
              >
                <span className="text-muted-foreground text-xs font-medium">{index + 1}</span>
                {term}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 搜索提示 */}
      <Card className="bg-muted/50">
        <CardContent className="p-4">
          <h4 className="mb-2 text-sm font-medium">搜索技巧</h4>
          <ul className="text-muted-foreground space-y-1 text-xs">
            <li>• 使用关键词搜索用户、文件和产品</li>
            <li>• 使用分类筛选缩小搜索范围</li>
            <li>• 支持模糊匹配和部分关键词</li>
            <li>• 按 Enter 快速搜索</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
