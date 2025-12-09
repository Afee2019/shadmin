"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const timelineVariants = cva("relative", {
  variants: {
    variant: {
      default: "",
      dark: "bg-foreground text-background rounded-lg p-6",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface TimelineProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof timelineVariants> {
  title?: string;
}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, variant, title, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(timelineVariants({ variant }), className)} {...props}>
        {title && (
          <h3
            className={cn(
              "mb-6 text-lg font-semibold",
              variant === "dark" ? "text-background" : "text-foreground"
            )}
          >
            {title}
          </h3>
        )}
        <div className="space-y-0">{children}</div>
      </div>
    );
  }
);
Timeline.displayName = "Timeline";

const timelineItemColorVariants = cva(
  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
  {
    variants: {
      color: {
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        success: "bg-green-500 text-white",
        warning: "bg-yellow-500 text-white",
        error: "bg-destructive text-destructive-foreground",
        info: "bg-blue-500 text-white",
      },
    },
    defaultVariants: {
      color: "primary",
    },
  }
);

interface TimelineItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color" | "title">,
    VariantProps<typeof timelineItemColorVariants> {
  icon?: React.ReactNode;
  title: string;
  dateTime: string;
  description?: string;
  badges?: string[];
  isLast?: boolean;
  isDark?: boolean;
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  (
    {
      className,
      color,
      icon,
      title,
      dateTime,
      description,
      badges,
      isLast = false,
      isDark = false,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn("relative flex gap-4 pb-8", className)} {...props}>
        {/* 连接线 */}
        {!isLast && (
          <div
            className={cn(
              "absolute left-4 top-8 -ml-px h-full w-0.5 -translate-x-1/2 border-l-2 border-dashed",
              isDark ? "border-muted" : "border-border"
            )}
          />
        )}

        {/* 图标 */}
        <div className={cn(timelineItemColorVariants({ color }), "z-10")}>{icon}</div>

        {/* 内容 */}
        <div className="flex-1 pt-0.5">
          <p
            className={cn(
              "font-medium leading-none",
              isDark ? "text-background" : "text-foreground"
            )}
          >
            {title}
          </p>
          <p
            className={cn(
              "mt-1.5 text-sm",
              isDark ? "text-muted" : "text-muted-foreground"
            )}
          >
            {dateTime}
          </p>
          {description && (
            <p
              className={cn(
                "mt-3 text-sm",
                isDark ? "text-muted" : "text-muted-foreground"
              )}
            >
              {description}
            </p>
          )}
          {badges && badges.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {badges.map((badge) => (
                <Badge
                  key={badge}
                  variant={isDark ? "outline" : "secondary"}
                  className={cn(
                    "text-xs",
                    isDark && "border-muted text-muted"
                  )}
                >
                  {badge}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);
TimelineItem.displayName = "TimelineItem";

export { Timeline, TimelineItem, timelineVariants, timelineItemColorVariants };
