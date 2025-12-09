"use client";

import * as React from "react";

import { FadeIn } from "@/components/animation";

import {
  type SearchCategory,
  articleResults,
  fileResults,
  productResults,
  searchResults,
  userResults,
} from "./_components/search-data";
import { SearchFilters } from "./_components/search-filters";
import { SearchInput } from "./_components/search-input";
import { SearchResults } from "./_components/search-results";
import { SearchSidebar } from "./_components/search-sidebar";

export default function SearchPage() {
  const [query, setQuery] = React.useState("");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [category, setCategory] = React.useState<SearchCategory>("all");

  const handleSearch = () => {
    setSearchQuery(query);
  };

  const handleSearchClick = (term: string) => {
    setQuery(term);
    setSearchQuery(term);
  };

  const results = searchResults(searchQuery, category);

  // 计算每个分类的结果数量
  const resultCounts: Record<SearchCategory, number> = {
    all: searchResults(searchQuery, "all").length,
    users: searchResults(searchQuery, "users").length,
    files: searchResults(searchQuery, "files").length,
    products: searchResults(searchQuery, "products").length,
    articles: searchResults(searchQuery, "articles").length,
  };

  // 初始状态时显示所有结果数量
  const initialCounts: Record<SearchCategory, number> = {
    all: userResults.length + fileResults.length + productResults.length + articleResults.length,
    users: userResults.length,
    files: fileResults.length,
    products: productResults.length,
    articles: articleResults.length,
  };

  const displayCounts = searchQuery ? resultCounts : initialCounts;

  return (
    <div className="space-y-6 py-6">
      {/* 页面标题 */}
      <FadeIn>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">搜索</h1>
          <p className="text-muted-foreground">搜索用户、文件、产品和文章</p>
        </div>
      </FadeIn>

      {/* 搜索输入 */}
      <FadeIn delay={100}>
        <SearchInput value={query} onChange={setQuery} onSearch={handleSearch} placeholder="输入关键词搜索..." />
      </FadeIn>

      {/* 搜索筛选 */}
      <FadeIn delay={150}>
        <SearchFilters activeCategory={category} onCategoryChange={setCategory} resultCounts={displayCounts} />
      </FadeIn>

      {/* 主内容区 */}
      <FadeIn delay={200}>
        <div className="grid gap-6 lg:grid-cols-3">
          {/* 搜索结果 */}
          <div className="lg:col-span-2">
            {searchQuery && (
              <p className="text-muted-foreground mb-4 text-sm">
                找到 <span className="text-foreground font-medium">{results.length}</span> 个与 &quot;{searchQuery}
                &quot;相关的结果
              </p>
            )}
            <SearchResults results={results} query={searchQuery} />
          </div>

          {/* 侧边栏 */}
          <div className="lg:col-span-1">
            <SearchSidebar onSearchClick={handleSearchClick} />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
