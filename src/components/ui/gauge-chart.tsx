"use client";

import { cn } from "@/lib/utils";

interface GaugeChartProps {
  value: number;
  min?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  label?: string;
  showValue?: boolean;
  valueFormatter?: (value: number) => string;
  segments?: { value: number; color: string }[];
  className?: string;
}

const sizeConfig = {
  sm: { width: 120, height: 80, strokeWidth: 8, fontSize: 14, labelSize: 10 },
  md: { width: 180, height: 110, strokeWidth: 12, fontSize: 20, labelSize: 12 },
  lg: { width: 240, height: 140, strokeWidth: 16, fontSize: 28, labelSize: 14 },
};

export function GaugeChart({
  value,
  min = 0,
  max = 100,
  size = "md",
  label,
  showValue = true,
  valueFormatter = (v) => v.toFixed(1),
  segments,
  className,
}: GaugeChartProps) {
  const config = sizeConfig[size];
  const normalizedValue = Math.min(Math.max(value, min), max);
  const percentage = ((normalizedValue - min) / (max - min)) * 100;

  // SVG 参数
  const centerX = config.width / 2;
  const centerY = config.height - 10;
  const radius = config.width / 2 - config.strokeWidth - 10;

  // 角度计算 (180度 到 0度 的半圆)
  const startAngle = 180;
  const endAngle = 0;
  const angleRange = startAngle - endAngle;
  const needleAngle = startAngle - (percentage / 100) * angleRange;

  // 默认分段颜色
  const defaultSegments = [
    { value: 30, color: "hsl(var(--chart-2))" }, // 红色区域 0-30
    { value: 70, color: "hsl(var(--chart-4))" }, // 黄色区域 30-70
    { value: 100, color: "hsl(var(--chart-1))" }, // 绿色区域 70-100
  ];
  const colorSegments = segments || defaultSegments;

  // 生成弧形路径
  const getArcPath = (startPercent: number, endPercent: number) => {
    const start = startAngle - (startPercent / 100) * angleRange;
    const end = startAngle - (endPercent / 100) * angleRange;
    const startRad = (start * Math.PI) / 180;
    const endRad = (end * Math.PI) / 180;

    const x1 = centerX + radius * Math.cos(startRad);
    const y1 = centerY - radius * Math.sin(startRad);
    const x2 = centerX + radius * Math.cos(endRad);
    const y2 = centerY - radius * Math.sin(endRad);

    const largeArcFlag = endPercent - startPercent > 50 ? 1 : 0;

    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${x2} ${y2}`;
  };

  // 生成刻度
  const ticks = [];
  const tickCount = 10;
  for (let i = 0; i <= tickCount; i++) {
    const tickPercent = (i / tickCount) * 100;
    const tickAngle = startAngle - (tickPercent / 100) * angleRange;
    const tickRad = (tickAngle * Math.PI) / 180;

    const innerTick = radius - config.strokeWidth / 2 - 4;
    const outerTick = radius + config.strokeWidth / 2 + 4;
    const labelRadius = radius + config.strokeWidth / 2 + 16;

    const x1 = centerX + innerTick * Math.cos(tickRad);
    const y1 = centerY - innerTick * Math.sin(tickRad);
    const x2 = centerX + outerTick * Math.cos(tickRad);
    const y2 = centerY - outerTick * Math.sin(tickRad);
    const labelX = centerX + labelRadius * Math.cos(tickRad);
    const labelY = centerY - labelRadius * Math.sin(tickRad);

    const tickValue = min + ((max - min) * i) / tickCount;

    ticks.push(
      <g key={i}>
        <line x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-muted-foreground" strokeWidth={i % 5 === 0 ? 2 : 1} />
        {i % 2 === 0 && (
          <text
            x={labelX}
            y={labelY}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-muted-foreground"
            style={{ fontSize: config.labelSize - 2 }}
          >
            {Math.round(tickValue)}
          </text>
        )}
      </g>
    );
  }

  // 指针计算
  const needleRad = (needleAngle * Math.PI) / 180;
  const needleLength = radius - 8;
  const needleTipX = centerX + needleLength * Math.cos(needleRad);
  const needleTipY = centerY - needleLength * Math.sin(needleRad);

  // 生成分段弧形
  let prevPercent = 0;
  const arcs = colorSegments.map((segment, index) => {
    const arc = (
      <path
        key={index}
        d={getArcPath(prevPercent, segment.value)}
        fill="none"
        stroke={segment.color}
        strokeWidth={config.strokeWidth}
        strokeLinecap="round"
      />
    );
    prevPercent = segment.value;
    return arc;
  });

  return (
    <div className={cn("relative flex flex-col items-center", className)}>
      <svg width={config.width} height={config.height} viewBox={`0 0 ${config.width} ${config.height}`}>
        {/* 背景轨道 */}
        <path
          d={getArcPath(0, 100)}
          fill="none"
          className="stroke-muted"
          strokeWidth={config.strokeWidth}
          strokeLinecap="round"
        />

        {/* 彩色分段 */}
        {arcs}

        {/* 刻度 */}
        {ticks}

        {/* 指针 */}
        <line
          x1={centerX}
          y1={centerY}
          x2={needleTipX}
          y2={needleTipY}
          className="stroke-foreground"
          strokeWidth={2}
          strokeLinecap="round"
        />

        {/* 指针中心圆点 */}
        <circle cx={centerX} cy={centerY} r={4} className="fill-foreground" />

        {/* 数值显示 */}
        {showValue && (
          <text
            x={centerX}
            y={centerY - 20}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-foreground font-bold"
            style={{ fontSize: config.fontSize }}
          >
            {valueFormatter(normalizedValue)}
          </text>
        )}

        {/* 标签 */}
        {label && (
          <text
            x={centerX}
            y={centerY - 20 - config.fontSize}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-muted-foreground"
            style={{ fontSize: config.labelSize }}
          >
            {label}
          </text>
        )}
      </svg>
    </div>
  );
}
