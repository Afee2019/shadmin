"use client";

import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { learningPaths } from "./academy-data";

export function LearningPaths() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>学习路径</CardTitle>
        <Button variant="ghost" size="sm">
          查看全部 <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {learningPaths.map((path) => (
          <div key={path.id} className="hover:bg-muted/50 rounded-lg border p-4 transition-colors">
            <div className="mb-2 flex items-start justify-between">
              <div>
                <h4 className="font-semibold">{path.name}</h4>
                <p className="text-muted-foreground text-sm">{path.description}</p>
              </div>
              <span
                className="rounded-full px-2 py-1 text-xs font-medium"
                style={{
                  backgroundColor: `color-mix(in oklch, ${path.color} 20%, transparent)`,
                  color: path.color,
                }}
              >
                {path.progress}%
              </span>
            </div>
            <div className="text-muted-foreground mb-2 flex items-center gap-4 text-sm">
              <span>
                {path.completedCourses}/{path.courses} 课程
              </span>
              <span>•</span>
              <span>{path.totalHours} 小时</span>
            </div>
            <Progress
              value={path.progress}
              className="h-2"
              style={{
                ["--progress-color" as string]: path.color,
              }}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
