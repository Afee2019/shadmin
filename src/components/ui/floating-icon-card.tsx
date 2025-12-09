import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

const floatingIconVariants = cva(
  "absolute -top-6 left-4 flex h-14 w-14 items-center justify-center rounded-xl shadow-lg",
  {
    variants: {
      color: {
        primary: "bg-primary text-primary-foreground shadow-primary/40",
        success: "bg-green-500 text-white shadow-green-500/40",
        warning: "bg-amber-500 text-white shadow-amber-500/40",
        destructive:
          "bg-destructive text-destructive-foreground shadow-destructive/40",
        info: "bg-blue-500 text-white shadow-blue-500/40",
      },
      gradient: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        color: "primary",
        gradient: true,
        className:
          "bg-gradient-to-br from-primary to-primary/80 shadow-primary/40",
      },
      {
        color: "success",
        gradient: true,
        className:
          "bg-gradient-to-br from-green-400 to-green-600 shadow-green-500/40",
      },
      {
        color: "warning",
        gradient: true,
        className:
          "bg-gradient-to-br from-amber-400 to-amber-600 shadow-amber-500/40",
      },
      {
        color: "destructive",
        gradient: true,
        className: "bg-gradient-to-br from-red-400 to-red-600 shadow-red-500/40",
      },
      {
        color: "info",
        gradient: true,
        className:
          "bg-gradient-to-br from-blue-400 to-blue-600 shadow-blue-500/40",
      },
    ],
    defaultVariants: {
      color: "primary",
      gradient: false,
    },
  }
);

interface FloatingIconCardProps
  extends VariantProps<typeof floatingIconVariants> {
  icon: LucideIcon;
  title: string;
  value: string | number;
  subtitle?: string;
  change?: {
    value: number;
    trend: "up" | "down";
    label?: string;
  };
  className?: string;
}

export function FloatingIconCard({
  icon: Icon,
  color,
  gradient,
  title,
  value,
  subtitle,
  change,
  className,
}: FloatingIconCardProps) {
  return (
    <div className={cn("relative pt-6", className)}>
      <Card className="pt-10">
        <CardContent className="pb-4">
          <div className="text-right">
            <p className="text-sm text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold tabular-nums">{value}</h3>
            {subtitle && (
              <p className="text-xs text-muted-foreground">{subtitle}</p>
            )}
            {change && (
              <div
                className={cn(
                  "mt-1 flex items-center justify-end gap-1 text-sm font-medium",
                  change.trend === "up" ? "text-green-500" : "text-red-500"
                )}
              >
                {change.trend === "up" ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                <span>
                  {change.trend === "up" ? "+" : "-"}
                  {Math.abs(change.value)}%
                </span>
                {change.label && (
                  <span className="text-muted-foreground">{change.label}</span>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      {/* 浮动图标 */}
      <div className={floatingIconVariants({ color, gradient })}>
        <Icon className="h-6 w-6" />
      </div>
    </div>
  );
}
