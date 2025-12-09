"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PricingToggleProps {
  isAnnual: boolean;
  onToggle: (isAnnual: boolean) => void;
}

export function PricingToggle({ isAnnual, onToggle }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={() => onToggle(false)}
        className={cn("text-sm font-medium transition-colors", !isAnnual ? "text-foreground" : "text-muted-foreground")}
      >
        月付
      </button>

      <button
        onClick={() => onToggle(!isAnnual)}
        className={cn("relative h-7 w-14 rounded-full transition-colors", isAnnual ? "bg-primary" : "bg-muted")}
      >
        <span
          className={cn(
            "bg-background absolute top-1 h-5 w-5 rounded-full shadow-sm transition-all",
            isAnnual ? "left-8" : "left-1",
          )}
        />
      </button>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onToggle(true)}
          className={cn(
            "text-sm font-medium transition-colors",
            isAnnual ? "text-foreground" : "text-muted-foreground",
          )}
        >
          年付
        </button>
        <Badge variant="secondary" className="text-xs">
          省 20%
        </Badge>
      </div>
    </div>
  );
}
