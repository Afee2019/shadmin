"use client";

import { Clock, Play, Star, Users } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

import { currentCourses } from "./academy-data";

const levelColors = {
  入门: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  进阶: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  高级: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
};

export function CourseCards() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>正在学习</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {currentCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-card relative overflow-hidden rounded-xl border transition-shadow hover:shadow-md"
            >
              {/* 缩略图 */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <Play className="h-5 w-5" />
                  </Button>
                </div>
                <Badge className={cn("absolute top-2 right-2", levelColors[course.level])}>{course.level}</Badge>
              </div>

              {/* 内容 */}
              <div className="p-4">
                <div className="text-muted-foreground mb-2 flex items-center gap-2 text-xs">
                  <span>{course.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {course.duration}
                  </span>
                </div>

                <h3 className="mb-2 line-clamp-1 font-semibold">{course.title}</h3>

                {/* 讲师信息 */}
                <div className="mb-3 flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={course.instructorAvatar} />
                    <AvatarFallback>{course.instructor[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-muted-foreground text-sm">{course.instructor}</span>
                </div>

                {/* 评分和学生数 */}
                <div className="text-muted-foreground mb-3 flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    {course.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students.toLocaleString()}
                  </span>
                </div>

                {/* 进度条 */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">
                      {course.completedLessons}/{course.totalLessons} 课时
                    </span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
