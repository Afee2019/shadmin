"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import { type SearchCategory, searchCategories } from "./search-data";

interface SearchFiltersProps {
  activeCategory: SearchCategory;
  onCategoryChange: (category: SearchCategory) => void;
  resultCounts: Record<SearchCategory, number>;
}

export function SearchFilters({ activeCategory, onCategoryChange, resultCounts }: SearchFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {searchCategories.map((category) => (
        <button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
            activeCategory === category.value
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-background hover:bg-muted border-border",
          )}
        >
          {category.label}
          <Badge
            variant={activeCategory === category.value ? "secondary" : "outline"}
            className="h-5 min-w-[20px] justify-center px-1.5 text-xs"
          >
            {resultCounts[category.value]}
          </Badge>
        </button>
      ))}
    </div>
  );
}
