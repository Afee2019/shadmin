"use client";

import { GripVertical, Calendar } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import type { KanbanTask } from "./kanban-data";

interface KanbanCardProps {
  task: KanbanTask;
  isDragging?: boolean;
  onDragStart?: () => void;
  onDragEnd?: () => void;
}

const priorityColors = {
  low: "bg-blue-500/10 text-blue-600 border-blue-200",
  medium: "bg-yellow-500/10 text-yellow-600 border-yellow-200",
  high: "bg-red-500/10 text-red-600 border-red-200",
};

const priorityLabels = {
  low: "低",
  medium: "中",
  high: "高",
};

export function KanbanCard({ task, isDragging, onDragStart, onDragEnd }: KanbanCardProps) {
  return (
    <Card
      className={cn(
        "cursor-grab transition-all hover:shadow-md active:cursor-grabbing",
        isDragging && "scale-105 rotate-2 opacity-90 shadow-lg",
      )}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardHeader className="flex flex-row items-start gap-2 space-y-0 p-3 pb-2">
        <GripVertical className="text-muted-foreground/50 mt-0.5 h-4 w-4 shrink-0" />
        <div className="flex-1 space-y-1">
          <p className="text-sm leading-tight font-medium">{task.title}</p>
          {task.description && <p className="text-muted-foreground line-clamp-2 text-xs">{task.description}</p>}
        </div>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        {/* 标签 */}
        {task.tags && task.tags.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-1">
            {task.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="px-1.5 py-0 text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* 底部信息 */}
        <div className="text-muted-foreground flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            {task.priority && (
              <Badge variant="outline" className={cn("px-1.5 py-0 text-xs", priorityColors[task.priority])}>
                {priorityLabels[task.priority]}
              </Badge>
            )}
            {task.dueDate && (
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {task.dueDate}
              </span>
            )}
          </div>
          {task.assignee && (
            <Avatar className="h-6 w-6">
              <AvatarFallback className="text-xs">{task.assignee.name.slice(0, 1)}</AvatarFallback>
            </Avatar>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
