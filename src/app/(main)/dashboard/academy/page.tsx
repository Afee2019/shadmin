"use client";

import { FadeIn } from "@/components/animation";

import { Achievements } from "./_components/achievements";
import { CategoryChart } from "./_components/category-chart";
import { CourseCards } from "./_components/course-cards";
import { LearningPaths } from "./_components/learning-paths";
import { StatsCards } from "./_components/stats-cards";
import { UpcomingClasses } from "./_components/upcoming-classes";
import { WeeklyStudyChart } from "./_components/weekly-study-chart";

export default function AcademyDashboardPage() {
  return (
    <div className="space-y-6 py-6">
      <FadeIn>
        <div>
          <h1 className="text-2xl font-bold">学习中心</h1>
          <p className="text-muted-foreground">追踪你的学习进度，发现新课程</p>
        </div>
      </FadeIn>

      {/* 统计卡片 */}
      <FadeIn delay={100}>
        <StatsCards />
      </FadeIn>

      {/* 第一行：周学习图表 + 分类饼图 */}
      <FadeIn delay={200}>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <WeeklyStudyChart />
          </div>
          <CategoryChart />
        </div>
      </FadeIn>

      {/* 正在学习的课程 */}
      <FadeIn delay={300}>
        <CourseCards />
      </FadeIn>

      {/* 第二行：学习路径 + 即将开始 */}
      <FadeIn delay={400}>
        <div className="grid gap-6 lg:grid-cols-2">
          <LearningPaths />
          <UpcomingClasses />
        </div>
      </FadeIn>

      {/* 成就 */}
      <FadeIn delay={500}>
        <Achievements />
      </FadeIn>
    </div>
  );
}
