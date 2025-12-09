"use client";

import { useCallback, useState } from "react";

import { Filter, Plus, Search, Users } from "lucide-react";

import { FadeIn } from "@/components/animation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { KanbanColumn } from "./_components/kanban-column";
import { initialColumns, type KanbanColumn as KanbanColumnType } from "./_components/kanban-data";

export default function KanbanPage() {
  const [columns, setColumns] = useState<KanbanColumnType[]>(initialColumns);
  const [draggingTask, setDraggingTask] = useState<{
    taskId: string;
    sourceColumnId: string;
  } | null>(null);
  const [dragOverColumnId, setDragOverColumnId] = useState<string | null>(null);

  const handleDragStart = useCallback((taskId: string, sourceColumnId: string) => {
    setDraggingTask({ taskId, sourceColumnId });
  }, []);

  const handleDragEnd = useCallback(() => {
    setDraggingTask(null);
    setDragOverColumnId(null);
  }, []);

  const handleDrop = useCallback(
    (targetColumnId: string) => {
      if (!draggingTask) return;

      const { taskId, sourceColumnId } = draggingTask;

      if (sourceColumnId === targetColumnId) {
        setDraggingTask(null);
        setDragOverColumnId(null);
        return;
      }

      setColumns((prevColumns) => {
        const newColumns = [...prevColumns];

        // 找到源列和目标列
        const sourceColumn = newColumns.find((col) => col.id === sourceColumnId);
        const targetColumn = newColumns.find((col) => col.id === targetColumnId);

        if (!sourceColumn || !targetColumn) return prevColumns;

        // 找到任务
        const taskIndex = sourceColumn.tasks.findIndex((t) => t.id === taskId);
        if (taskIndex === -1) return prevColumns;

        // 移动任务
        const [task] = sourceColumn.tasks.splice(taskIndex, 1);
        targetColumn.tasks.push(task);

        return newColumns;
      });

      setDraggingTask(null);
      setDragOverColumnId(null);
    },
    [draggingTask],
  );

  const handleAddTask = useCallback((columnId: string, title: string) => {
    setColumns((prevColumns) => {
      return prevColumns.map((column) => {
        if (column.id !== columnId) return column;

        return {
          ...column,
          tasks: [
            ...column.tasks,
            {
              id: `task-${Date.now()}`,
              title,
              priority: "medium" as const,
            },
          ],
        };
      });
    });
  }, []);

  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col space-y-4">
      {/* 页面标题和操作栏 */}
      <FadeIn>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">看板</h1>
              <p className="text-muted-foreground hidden sm:block">可拖拽的任务管理看板，轻松追踪项目进度</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative hidden sm:block">
                <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
                <Input placeholder="搜索任务..." className="w-48 pl-8" />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>全部任务</DropdownMenuItem>
                  <DropdownMenuItem>我的任务</DropdownMenuItem>
                  <DropdownMenuItem>高优先级</DropdownMenuItem>
                  <DropdownMenuItem>即将到期</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="outline" size="icon">
                <Users className="h-4 w-4" />
              </Button>
              <Button>
                <Plus className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">新建任务</span>
              </Button>
            </div>
          </div>
          {/* 移动端搜索框 */}
          <div className="relative sm:hidden">
            <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
            <Input placeholder="搜索任务..." className="w-full pl-8" />
          </div>
        </div>
      </FadeIn>

      {/* 看板区域 */}
      <FadeIn delay={100} className="flex-1">
        <ScrollArea className="h-full pb-4">
          <div className="flex h-full gap-4">
            {columns.map((column) => (
              <KanbanColumn
                key={column.id}
                column={column}
                onAddTask={handleAddTask}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDrop={handleDrop}
                isDragOver={dragOverColumnId === column.id}
                draggingTaskId={draggingTask?.taskId}
              />
            ))}

            {/* 添加新列按钮 */}
            <div className="flex h-full w-72 shrink-0 items-start">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground w-full justify-start">
                <Plus className="mr-2 h-4 w-4" />
                添加列表
              </Button>
            </div>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </FadeIn>
    </div>
  );
}
