"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

import { cn } from "@/lib/utils";

interface GaugeChartProps {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  label?: string;
  showValue?: boolean;
  valueFormatter?: (value: number) => string;
  colors?: {
    track?: string;
    indicator?: string;
  };
  className?: string;
}

const sizeConfig = {
  sm: { width: 120, height: 80, innerRadius: 35, outerRadius: 50, fontSize: "text-lg" },
  md: { width: 180, height: 120, innerRadius: 55, outerRadius: 75, fontSize: "text-2xl" },
  lg: { width: 240, height: 160, innerRadius: 75, outerRadius: 100, fontSize: "text-3xl" },
};

export function GaugeChart({
  value,
  max = 100,
  size = "md",
  label,
  showValue = true,
  valueFormatter = (v) => `${Math.round(v)}%`,
  colors,
  className,
}: GaugeChartProps) {
  const normalizedValue = Math.min(Math.max(value, 0), max);
  const percentage = (normalizedValue / max) * 100;
  const config = sizeConfig[size];

  // 仪表盘数据（半圆形）
  const data = [
    { name: "value", value: percentage },
    { name: "rest", value: 100 - percentage },
  ];

  // 颜色配置
  const trackColor = colors?.track || "hsl(var(--muted))";
  const indicatorColor =
    colors?.indicator ||
    (percentage >= 80 ? "hsl(var(--chart-1))" : percentage >= 50 ? "hsl(var(--chart-4))" : "hsl(var(--chart-2))");

  return (
    <div className={cn("relative flex flex-col items-center", className)}>
      <ResponsiveContainer width={config.width} height={config.height}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="100%"
            startAngle={180}
            endAngle={0}
            innerRadius={config.innerRadius}
            outerRadius={config.outerRadius}
            paddingAngle={0}
            dataKey="value"
            stroke="none"
          >
            <Cell fill={indicatorColor} />
            <Cell fill={trackColor} />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      {showValue && (
        <div
          className="absolute flex flex-col items-center"
          style={{
            bottom: size === "sm" ? "0.5rem" : size === "md" ? "0.75rem" : "1rem",
          }}
        >
          <span className={cn("font-bold", config.fontSize)}>{valueFormatter(normalizedValue)}</span>
          {label && <span className="text-muted-foreground text-xs">{label}</span>}
        </div>
      )}
    </div>
  );
}
