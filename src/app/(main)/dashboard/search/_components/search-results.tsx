"use client";

import Link from "next/link";

import { ExternalLink, Eye, File, FileText, Package, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { type SearchResult } from "./search-data";

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
}

const typeConfig = {
  user: {
    icon: User,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    label: "用户",
  },
  file: {
    icon: File,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    label: "文件",
  },
  product: {
    icon: Package,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    label: "产品",
  },
  article: {
    icon: FileText,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    label: "文章",
  },
};

function highlightText(text: string, query: string) {
  if (!query.trim()) return text;

  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={index} className="rounded bg-yellow-200 px-0.5 dark:bg-yellow-800">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

function ResultCard({ result, query }: { result: SearchResult; query: string }) {
  const config = typeConfig[result.type];
  const Icon = config.icon;

  return (
    <Card className="group transition-shadow hover:shadow-md">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          {result.type === "user" ? (
            <Avatar className="h-12 w-12">
              <AvatarImage src={result.image} alt={result.title} />
              <AvatarFallback>{result.title.charAt(0)}</AvatarFallback>
            </Avatar>
          ) : (
            <div className={cn("flex h-12 w-12 items-center justify-center rounded-lg", config.bgColor)}>
              <Icon className={cn("h-6 w-6", config.color)} />
            </div>
          )}

          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="font-medium">{highlightText(result.title, query)}</h3>
              <Badge variant="outline" className="text-xs">
                {config.label}
              </Badge>
            </div>
            <p className="text-muted-foreground text-sm">{highlightText(result.description, query)}</p>

            {/* 元数据 */}
            <div className="text-muted-foreground flex flex-wrap items-center gap-3 pt-1 text-xs">
              {result.type === "user" && (
                <>
                  <span>{result.meta.email as string}</span>
                  <span>·</span>
                  <span>{result.meta.projects} 个项目</span>
                </>
              )}
              {result.type === "file" && (
                <>
                  <span>{result.meta.size}</span>
                  <span>·</span>
                  <span>修改于 {result.meta.modified}</span>
                </>
              )}
              {result.type === "product" && (
                <>
                  <span className="text-primary font-medium">¥{result.meta.price}</span>
                  <span>·</span>
                  <span>库存 {result.meta.stock}</span>
                </>
              )}
              {result.type === "article" && (
                <>
                  <span>{result.meta.author}</span>
                  <span>·</span>
                  <Eye className="h-3 w-3" />
                  <span>{result.meta.views}</span>
                  <span>·</span>
                  <span>{result.meta.date}</span>
                </>
              )}
            </div>
          </div>

          <Button variant="ghost" size="icon" asChild className="opacity-0 group-hover:opacity-100">
            <Link href={result.url}>
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function SearchResults({ results, query }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="bg-muted mb-4 rounded-full p-4">
          <File className="text-muted-foreground h-8 w-8" />
        </div>
        <h3 className="text-lg font-medium">未找到结果</h3>
        <p className="text-muted-foreground mt-1 text-sm">
          {query ? `没有与"${query}"相关的搜索结果` : "请输入搜索关键词"}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {results.map((result) => (
        <ResultCard key={result.id} result={result} query={query} />
      ))}
    </div>
  );
}
