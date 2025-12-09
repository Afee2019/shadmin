"use client";

import { useState } from "react";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

import { KanbanCard } from "./kanban-card";
import type { KanbanColumn as KanbanColumnType } from "./kanban-data";

interface KanbanColumnProps {
  column: KanbanColumnType;
  onAddTask?: (columnId: string, title: string) => void;
  onDragStart?: (taskId: string, sourceColumnId: string) => void;
  onDragEnd?: () => void;
  onDrop?: (targetColumnId: string) => void;
  isDragOver?: boolean;
  draggingTaskId?: string | null;
}

export function KanbanColumn({
  column,
  onAddTask,
  onDragStart,
  onDragEnd,
  onDrop,
  isDragOver,
  draggingTaskId,
}: KanbanColumnProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleAddTask = () => {
    if (newTaskTitle.trim() && onAddTask) {
      onAddTask(column.id, newTaskTitle.trim());
      setNewTaskTitle("");
      setIsAdding(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddTask();
    } else if (e.key === "Escape") {
      setIsAdding(false);
      setNewTaskTitle("");
    }
  };

  return (
    <div
      className={cn(
        "bg-muted/50 flex h-full w-72 shrink-0 flex-col rounded-lg transition-colors",
        isDragOver && "bg-primary/5 ring-primary/20 ring-2",
      )}
      onDragOver={(e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
      }}
      onDrop={() => onDrop?.(column.id)}
    >
      {/* 列头 */}
      <div className="flex items-center justify-between p-3 pb-2">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">{column.title}</h3>
          <span className="bg-muted text-muted-foreground flex h-5 w-5 items-center justify-center rounded-full text-xs">
            {column.tasks.length}
          </span>
        </div>
        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setIsAdding(true)}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* 任务列表 */}
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-2 pb-3">
          {column.tasks.map((task) => (
            <KanbanCard
              key={task.id}
              task={task}
              isDragging={draggingTaskId === task.id}
              onDragStart={() => onDragStart?.(task.id, column.id)}
              onDragEnd={onDragEnd}
            />
          ))}

          {/* 添加新任务 */}
          {isAdding && (
            <div className="space-y-2">
              <Input
                autoFocus
                placeholder="输入任务标题..."
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={() => {
                  if (!newTaskTitle.trim()) {
                    setIsAdding(false);
                  }
                }}
              />
              <div className="flex gap-2">
                <Button size="sm" onClick={handleAddTask}>
                  添加
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setIsAdding(false);
                    setNewTaskTitle("");
                  }}
                >
                  取消
                </Button>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
