"use client";

import { cn } from "@/lib/utils";

interface GaugeChartProps {
  value: number;
  min?: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  valueFormatter?: (value: number) => string;
  className?: string;
}

export function GaugeChart({
  value,
  min = 0,
  max = 100,
  label,
  showValue = true,
  valueFormatter = (v) => `${v.toFixed(2)}%`,
  className,
}: GaugeChartProps) {
  const normalizedValue = Math.min(Math.max(value, min), max);
  const percentage = ((normalizedValue - min) / (max - min)) * 100;

  // SVG 参数
  const size = 280;
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = 100;

  // 角度范围：从 135度 到 405度 (270度 的弧形)
  const startAngle = 135;
  const endAngle = 405;
  const angleRange = endAngle - startAngle;

  // 分段数量
  const segmentCount = 30;
  const segmentGap = 3; // 分段之间的间隙（度）
  const segmentAngle = (angleRange - segmentGap * segmentCount) / segmentCount;

  // 指针角度
  const needleAngle = startAngle + (percentage / 100) * angleRange;

  // 生成分段
  const segments = [];
  for (let i = 0; i < segmentCount; i++) {
    const segStart = startAngle + i * (segmentAngle + segmentGap);
    const segEnd = segStart + segmentAngle;

    // 灰度渐变：从深灰到浅灰
    const grayValue = Math.round(40 + (i / segmentCount) * 50); // 40-90 范围
    const color = `hsl(0, 0%, ${grayValue}%)`;

    const startRad = (segStart * Math.PI) / 180;
    const endRad = (segEnd * Math.PI) / 180;

    const innerRadius = radius - 20;
    const outerRadius = radius + 10;

    const x1 = centerX + innerRadius * Math.cos(startRad);
    const y1 = centerY + innerRadius * Math.sin(startRad);
    const x2 = centerX + outerRadius * Math.cos(startRad);
    const y2 = centerY + outerRadius * Math.sin(startRad);
    const x3 = centerX + outerRadius * Math.cos(endRad);
    const y3 = centerY + outerRadius * Math.sin(endRad);
    const x4 = centerX + innerRadius * Math.cos(endRad);
    const y4 = centerY + innerRadius * Math.sin(endRad);

    segments.push(
      <path
        key={i}
        d={`M ${x1} ${y1} L ${x2} ${y2} A ${outerRadius} ${outerRadius} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${innerRadius} ${innerRadius} 0 0 0 ${x1} ${y1} Z`}
        fill={color}
        className="transition-opacity duration-200"
      />
    );
  }

  // 生成刻度标签
  const tickLabels = [0, 20, 40, 60, 80, 100];
  const ticks = tickLabels.map((tickValue, index) => {
    const tickPercent = tickValue;
    const tickAngle = startAngle + (tickPercent / 100) * angleRange;
    const tickRad = (tickAngle * Math.PI) / 180;

    // 刻度线
    const innerTick = radius - 25;
    const outerTick = radius - 30;
    const x1 = centerX + innerTick * Math.cos(tickRad);
    const y1 = centerY + innerTick * Math.sin(tickRad);
    const x2 = centerX + outerTick * Math.cos(tickRad);
    const y2 = centerY + outerTick * Math.sin(tickRad);

    // 标签位置
    const labelRadius = radius - 45;
    const labelX = centerX + labelRadius * Math.cos(tickRad);
    const labelY = centerY + labelRadius * Math.sin(tickRad);

    return (
      <g key={index}>
        <line x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-muted-foreground/50" strokeWidth={1} />
        <text
          x={labelX}
          y={labelY}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-muted-foreground text-xs"
        >
          {tickValue}%
        </text>
      </g>
    );
  });

  // 指针路径（三角形）
  const needleRad = (needleAngle * Math.PI) / 180;
  const needleLength = radius - 30;
  const needleWidth = 8;

  const needleTipX = centerX + needleLength * Math.cos(needleRad);
  const needleTipY = centerY + needleLength * Math.sin(needleRad);

  // 指针底部两个点（垂直于指针方向）
  const perpRad = needleRad + Math.PI / 2;
  const baseX1 = centerX + needleWidth * Math.cos(perpRad);
  const baseY1 = centerY + needleWidth * Math.sin(perpRad);
  const baseX2 = centerX - needleWidth * Math.cos(perpRad);
  const baseY2 = centerY - needleWidth * Math.sin(perpRad);

  return (
    <div className={cn("relative flex flex-col items-center", className)}>
      <svg width={size} height={size * 0.75} viewBox={`0 0 ${size} ${size * 0.85}`}>
        {/* 分段弧形 */}
        {segments}

        {/* 刻度标签 */}
        {ticks}

        {/* 指针 */}
        <path
          d={`M ${needleTipX} ${needleTipY} L ${baseX1} ${baseY1} L ${baseX2} ${baseY2} Z`}
          className="fill-muted-foreground/70"
        />

        {/* 指针中心圆点 */}
        <circle cx={centerX} cy={centerY} r={6} className="fill-muted-foreground" />

        {/* 数值显示 */}
        {showValue && (
          <>
            {label && (
              <text
                x={centerX}
                y={centerY + 30}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-muted-foreground text-sm"
              >
                {label}
              </text>
            )}
            <text
              x={centerX}
              y={centerY + 55}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-foreground text-3xl font-bold"
            >
              {valueFormatter(normalizedValue)}
            </text>
          </>
        )}
      </svg>
    </div>
  );
}
