"use client";

import { ArrowUp, Award, BookOpen, Clock, Zap } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { statsData } from "./academy-data";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ReactNode;
  iconBg: string;
}

function StatCard({ title, value, change, icon, iconBg }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground text-sm">{title}</p>
            <p className="mt-1 text-2xl font-bold">{value}</p>
            {change !== undefined && (
              <p className="mt-1 flex items-center text-sm text-green-500">
                <ArrowUp className="mr-1 h-3 w-3" />+{change} 本月
              </p>
            )}
          </div>
          <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl", iconBg)}>{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
}

export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="已完成课程"
        value={statsData.completedCourses}
        change={statsData.completedCoursesChange}
        icon={<BookOpen className="h-6 w-6 text-white" />}
        iconBg="bg-primary shadow-lg shadow-primary/40"
      />
      <StatCard
        title="学习时长"
        value={`${statsData.studyHours} 小时`}
        change={statsData.studyHoursChange}
        icon={<Clock className="h-6 w-6 text-white" />}
        iconBg="bg-green-500 shadow-lg shadow-green-500/40"
      />
      <StatCard
        title="获得证书"
        value={statsData.certificates}
        change={statsData.certificatesChange}
        icon={<Award className="h-6 w-6 text-white" />}
        iconBg="bg-amber-500 shadow-lg shadow-amber-500/40"
      />
      <StatCard
        title="学习积分"
        value={statsData.points.toLocaleString()}
        change={statsData.pointsChange}
        icon={<Zap className="h-6 w-6 text-white" />}
        iconBg="bg-purple-500 shadow-lg shadow-purple-500/40"
      />
    </div>
  );
}
