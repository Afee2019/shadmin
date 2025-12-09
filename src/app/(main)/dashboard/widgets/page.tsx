"use client";

import { useState } from "react";

import {
  Activity,
  ArrowUp,
  Battery,
  Bell,
  Calendar,
  CheckCircle,
  DollarSign,
  Lightbulb,
  MapPin,
  Music,
  ShoppingCart,
  TrendingUp,
  Users,
  Volume2,
  Zap,
} from "lucide-react";

import { FadeIn } from "@/components/animation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard } from "@/components/ui/credit-card";
import { FloatingIconCard } from "@/components/ui/floating-icon-card";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function WidgetsPage() {
  const [lightsOn, setLightsOn] = useState(false);

  return (
    <div className="space-y-8 py-6">
      {/* 页面标题 */}
      <FadeIn>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">组件展示</h1>
          <p className="text-muted-foreground">预览模板中可用的各种 UI 组件和卡片变体</p>
        </div>
      </FadeIn>

      {/* 统计卡片 */}
      <FadeIn delay={100}>
        <section>
          <h2 className="mb-4 text-lg font-medium">统计卡片</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="flex items-center gap-4 pt-6">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
                  <Users className="text-primary h-6 w-6" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">总用户</p>
                  <p className="text-2xl font-bold">2,350</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center justify-between pt-6">
                <div>
                  <p className="text-muted-foreground text-sm">收入</p>
                  <p className="text-2xl font-bold">¥53,000</p>
                  <p className="flex items-center text-sm text-green-500">
                    <ArrowUp className="mr-1 h-3 w-3" />
                    +12.5%
                  </p>
                </div>
                <DollarSign className="text-muted-foreground h-8 w-8" />
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="flex items-center gap-4 pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <ShoppingCart className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm opacity-80">订单数</p>
                  <p className="text-2xl font-bold">1,280</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground text-sm">完成率</p>
                  <span className="text-sm font-medium">78%</span>
                </div>
                <Progress value={78} className="mt-2" />
                <p className="mt-2 text-2xl font-bold">1,872 / 2,400</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </FadeIn>

      {/* 浮动图标卡片 */}
      <FadeIn delay={200}>
        <section>
          <h2 className="mb-4 text-lg font-medium">浮动图标卡片</h2>
          <div className="grid gap-8 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            <FloatingIconCard
              icon={TrendingUp}
              color="primary"
              title="周访问量"
              value="12,450"
              change={{ value: 12, trend: "up" }}
            />
            <FloatingIconCard
              icon={Users}
              color="success"
              title="新用户"
              value="+350"
              change={{ value: 8, trend: "up" }}
            />
            <FloatingIconCard
              icon={ShoppingCart}
              color="warning"
              title="待处理订单"
              value="48"
              change={{ value: 5, trend: "down" }}
            />
            <FloatingIconCard
              icon={Activity}
              color="destructive"
              title="跳出率"
              value="32.4%"
              change={{ value: 3, trend: "down" }}
            />
          </div>
        </section>
      </FadeIn>

      {/* 信用卡展示 */}
      <FadeIn delay={300}>
        <section>
          <h2 className="mb-4 text-lg font-medium">信用卡样式</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <CreditCard number="4562112245947852" holder="张三" expires="12/25" variant="dark" type="mastercard" />
            <CreditCard number="4562112245941234" holder="李四" expires="08/26" variant="primary" type="visa" />
            <CreditCard number="6222021234567890" holder="王五" expires="06/27" variant="glass" type="unionpay" />
          </div>
        </section>
      </FadeIn>

      {/* 信息卡片 */}
      <FadeIn delay={400}>
        <section>
          <h2 className="mb-4 text-lg font-medium">信息卡片</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                  <Battery className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <CardDescription>电池健康</CardDescription>
                  <CardTitle className="text-xl">99%</CardTitle>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
                  <Volume2 className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <CardDescription>音乐音量</CardDescription>
                  <CardTitle className="text-xl">15/100</CardTitle>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
                  <MapPin className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <CardDescription>当前位置</CardDescription>
                  <CardTitle className="text-xl">北京市</CardTitle>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10">
                  <Zap className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <CardDescription>今日步数</CardDescription>
                  <CardTitle className="text-xl">8,754</CardTitle>
                </div>
              </CardHeader>
            </Card>
          </div>
        </section>
      </FadeIn>

      {/* 控制卡片和开关 */}
      <FadeIn delay={500}>
        <section>
          <h2 className="mb-4 text-lg font-medium">控制卡片</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className={lightsOn ? "bg-amber-500 text-white" : ""}>
              <CardContent className="flex flex-col items-center justify-center py-8">
                <Lightbulb className={`h-12 w-12 ${lightsOn ? "text-white" : "text-muted-foreground"}`} />
                <p className="mt-4 font-medium">灯光</p>
                <Switch className="mt-4" checked={lightsOn} onCheckedChange={setLightsOn} />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center justify-center py-8">
                <Music className="text-muted-foreground h-12 w-12" />
                <p className="mt-4 font-medium">音乐</p>
                <Switch className="mt-4" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center justify-center py-8">
                <Bell className="text-muted-foreground h-12 w-12" />
                <p className="mt-4 font-medium">通知</p>
                <Switch className="mt-4" defaultChecked />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center justify-center py-8">
                <Calendar className="text-muted-foreground h-12 w-12" />
                <p className="mt-4 font-medium">日程</p>
                <Switch className="mt-4" defaultChecked />
              </CardContent>
            </Card>
          </div>
        </section>
      </FadeIn>

      {/* 徽章和标签 */}
      <FadeIn delay={600}>
        <section>
          <h2 className="mb-4 text-lg font-medium">徽章样式</h2>
          <Card>
            <CardContent className="flex flex-wrap gap-4 pt-6">
              <Badge>默认</Badge>
              <Badge variant="secondary">次要</Badge>
              <Badge variant="destructive">危险</Badge>
              <Badge variant="outline">描边</Badge>
              <Badge className="bg-green-500">成功</Badge>
              <Badge className="bg-blue-500">信息</Badge>
              <Badge className="bg-amber-500">警告</Badge>
              <Badge className="bg-purple-500">紫色</Badge>
            </CardContent>
          </Card>
        </section>
      </FadeIn>

      {/* 警告提示 */}
      <FadeIn delay={700}>
        <section>
          <h2 className="mb-4 text-lg font-medium">警告提示</h2>
          <div className="grid gap-4">
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>成功</AlertTitle>
              <AlertDescription>您的更改已成功保存。</AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <Activity className="h-4 w-4" />
              <AlertTitle>错误</AlertTitle>
              <AlertDescription>保存失败，请重试。</AlertDescription>
            </Alert>
          </div>
        </section>
      </FadeIn>

      {/* 头像组 */}
      <FadeIn delay={800}>
        <section>
          <h2 className="mb-4 text-lg font-medium">头像样式</h2>
          <Card>
            <CardContent className="space-y-6 pt-6">
              <div>
                <p className="text-muted-foreground mb-3 text-sm">单个头像</p>
                <div className="flex gap-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatars/user-01.jpg" />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/avatars/user-02.jpg" />
                    <AvatarFallback>B</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/avatars/user-03.jpg" />
                    <AvatarFallback>C</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-14 w-14">
                    <AvatarImage src="/avatars/user-04.jpg" />
                    <AvatarFallback>D</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <div>
                <p className="text-muted-foreground mb-3 text-sm">头像组（重叠）</p>
                <div className="flex -space-x-3">
                  <Avatar className="border-background h-10 w-10 border-2">
                    <AvatarImage src="/avatars/user-01.jpg" />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-background h-10 w-10 border-2">
                    <AvatarImage src="/avatars/user-02.jpg" />
                    <AvatarFallback>B</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-background h-10 w-10 border-2">
                    <AvatarImage src="/avatars/user-03.jpg" />
                    <AvatarFallback>C</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-background h-10 w-10 border-2">
                    <AvatarImage src="/avatars/user-04.jpg" />
                    <AvatarFallback>D</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-background bg-muted h-10 w-10 border-2">
                    <AvatarFallback className="text-xs">+5</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </FadeIn>

      {/* 选项卡 */}
      <FadeIn delay={900}>
        <section>
          <h2 className="mb-4 text-lg font-medium">选项卡</h2>
          <Card>
            <CardContent className="pt-6">
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">概览</TabsTrigger>
                  <TabsTrigger value="analytics">分析</TabsTrigger>
                  <TabsTrigger value="reports">报告</TabsTrigger>
                  <TabsTrigger value="notifications">通知</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-4">
                  <p className="text-muted-foreground">这是概览选项卡的内容。</p>
                </TabsContent>
                <TabsContent value="analytics" className="mt-4">
                  <p className="text-muted-foreground">这是分析选项卡的内容。</p>
                </TabsContent>
                <TabsContent value="reports" className="mt-4">
                  <p className="text-muted-foreground">这是报告选项卡的内容。</p>
                </TabsContent>
                <TabsContent value="notifications" className="mt-4">
                  <p className="text-muted-foreground">这是通知选项卡的内容。</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>
      </FadeIn>

      {/* 按钮样式 */}
      <FadeIn delay={1000}>
        <section>
          <h2 className="mb-4 text-lg font-medium">按钮样式</h2>
          <Card>
            <CardContent className="flex flex-wrap gap-4 pt-6">
              <Button>默认按钮</Button>
              <Button variant="secondary">次要按钮</Button>
              <Button variant="destructive">危险按钮</Button>
              <Button variant="outline">描边按钮</Button>
              <Button variant="ghost">幽灵按钮</Button>
              <Button variant="link">链接按钮</Button>
              <Button size="sm">小按钮</Button>
              <Button size="lg">大按钮</Button>
            </CardContent>
          </Card>
        </section>
      </FadeIn>
    </div>
  );
}
