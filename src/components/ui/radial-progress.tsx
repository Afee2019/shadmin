"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface RadialProgressProps {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg" | "xl";
  strokeWidth?: number;
  showValue?: boolean;
  valueFormatter?: (value: number) => string;
  label?: string;
  color?: "primary" | "success" | "warning" | "destructive" | "info";
  animated?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const sizeConfig = {
  sm: { dimension: 64, defaultStroke: 4, fontSize: "text-sm", labelSize: "text-[10px]" },
  md: { dimension: 96, defaultStroke: 6, fontSize: "text-xl", labelSize: "text-xs" },
  lg: { dimension: 128, defaultStroke: 8, fontSize: "text-2xl", labelSize: "text-sm" },
  xl: { dimension: 160, defaultStroke: 10, fontSize: "text-3xl", labelSize: "text-base" },
};

const colorConfig = {
  primary: "stroke-primary",
  success: "stroke-green-500",
  warning: "stroke-amber-500",
  destructive: "stroke-destructive",
  info: "stroke-blue-500",
};

export function RadialProgress({
  value,
  max = 100,
  size = "md",
  strokeWidth,
  showValue = true,
  valueFormatter = (v) => `${Math.round(v)}%`,
  label,
  color = "primary",
  animated = true,
  className,
  children,
}: RadialProgressProps) {
  const config = sizeConfig[size];
  const stroke = strokeWidth || config.defaultStroke;
  const normalizedValue = Math.min(Math.max(value, 0), max);
  const percentage = (normalizedValue / max) * 100;

  const radius = (config.dimension - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg
        width={config.dimension}
        height={config.dimension}
        viewBox={`0 0 ${config.dimension} ${config.dimension}`}
        className="-rotate-90"
      >
        {/* 背景轨道 */}
        <circle
          cx={config.dimension / 2}
          cy={config.dimension / 2}
          r={radius}
          fill="none"
          className="stroke-muted"
          strokeWidth={stroke}
        />
        {/* 进度条 */}
        <circle
          cx={config.dimension / 2}
          cy={config.dimension / 2}
          r={radius}
          fill="none"
          className={cn(colorConfig[color], animated && "transition-all duration-500 ease-out")}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {children ? (
          children
        ) : showValue ? (
          <>
            <span className={cn("font-bold", config.fontSize)}>{valueFormatter(normalizedValue)}</span>
            {label && <span className={cn("text-muted-foreground", config.labelSize)}>{label}</span>}
          </>
        ) : null}
      </div>
    </div>
  );
}
