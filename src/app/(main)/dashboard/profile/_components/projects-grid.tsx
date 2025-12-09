"use client";

import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "企业管理平台",
    description: "一套完整的企业级管理后台解决方案，包含用户管理、权限控制、数据分析等核心功能。",
    image: "/projects/project-01.jpg",
    badge: "进行中",
    badgeVariant: "default" as const,
    members: [
      { name: "张明", avatar: "/avatars/user-01.jpg" },
      { name: "李晓峰", avatar: "/avatars/user-02.jpg" },
      { name: "王芳", avatar: "/avatars/user-03.jpg" },
    ],
  },
  {
    id: 2,
    title: "移动端应用",
    description: "面向消费者的移动端应用，提供便捷的服务预约和在线支付功能。",
    image: "/projects/project-02.jpg",
    badge: "已完成",
    badgeVariant: "secondary" as const,
    members: [
      { name: "陈静", avatar: "/avatars/user-04.jpg" },
      { name: "赵鹏", avatar: "/avatars/user-05.jpg" },
    ],
  },
  {
    id: 3,
    title: "数据可视化大屏",
    description: "实时数据监控和可视化展示系统，支持多种图表类型和自定义布局。",
    image: "/projects/project-03.jpg",
    badge: "规划中",
    badgeVariant: "outline" as const,
    members: [
      { name: "刘强", avatar: "/avatars/user-06.jpg" },
      { name: "张明", avatar: "/avatars/user-01.jpg" },
    ],
  },
  {
    id: 4,
    title: "智能客服系统",
    description: "基于 AI 的智能客服解决方案，支持多渠道接入和自动化回复。",
    image: "/projects/project-04.jpg",
    badge: "进行中",
    badgeVariant: "default" as const,
    members: [
      { name: "王芳", avatar: "/avatars/user-03.jpg" },
      { name: "陈静", avatar: "/avatars/user-04.jpg" },
      { name: "赵鹏", avatar: "/avatars/user-05.jpg" },
      { name: "刘强", avatar: "/avatars/user-06.jpg" },
    ],
  },
];

export function ProjectsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {projects.map((project) => (
        <Card key={project.id} className="overflow-hidden">
          {/* 项目图片 */}
          <div className="bg-muted relative aspect-video">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              onError={(e) => {
                // 图片加载失败时显示渐变背景
                e.currentTarget.style.display = "none";
              }}
            />
            {/* 渐变背景作为后备 */}
            <div className="from-primary/20 to-primary/5 absolute inset-0 bg-gradient-to-br" />
            <Badge variant={project.badgeVariant} className="absolute top-2 right-2">
              {project.badge}
            </Badge>
          </div>

          <CardHeader className="pb-2">
            <CardTitle className="text-base">{project.title}</CardTitle>
            <CardDescription className="line-clamp-2 text-xs">{project.description}</CardDescription>
          </CardHeader>

          <CardContent className="pb-2">
            {/* 团队成员头像 */}
            <div className="flex -space-x-2">
              {project.members.slice(0, 4).map((member, index) => (
                <Avatar key={index} className="border-background h-8 w-8 border-2">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="text-xs">{member.name[0]}</AvatarFallback>
                </Avatar>
              ))}
              {project.members.length > 4 && (
                <div className="border-background bg-muted flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-medium">
                  +{project.members.length - 4}
                </div>
              )}
            </div>
          </CardContent>

          <CardFooter>
            <Button variant="link" size="sm" className="h-auto p-0 text-xs">
              查看项目
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
