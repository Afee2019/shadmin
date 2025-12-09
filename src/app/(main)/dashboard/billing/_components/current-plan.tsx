"use client";

import { Check, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface PlanInfo {
  name: string;
  price: string;
  period: string;
  nextBillingDate: string;
  features: string[];
}

interface CurrentPlanProps {
  plan: PlanInfo;
}

export function CurrentPlan({ plan }: CurrentPlanProps) {
  return (
    <Card className="border-primary/50">
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <CardTitle className="text-base font-medium">当前套餐</CardTitle>
            <Badge className="bg-primary">
              <Zap className="mr-1 h-3 w-3" />
              {plan.name}
            </Badge>
          </div>
          <p className="text-muted-foreground mt-1 text-sm">下次扣费日期：{plan.nextBillingDate}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold">{plan.price}</p>
          <p className="text-muted-foreground text-sm">/{plan.period}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* 用量进度 */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">API 调用量</span>
            <span className="font-medium">8,234 / 10,000</span>
          </div>
          <Progress value={82} className="h-2" />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">存储空间</span>
            <span className="font-medium">4.2 GB / 10 GB</span>
          </div>
          <Progress value={42} className="h-2" />
        </div>

        {/* 包含功能 */}
        <div>
          <p className="mb-3 text-sm font-medium">包含功能</p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm">
                <Check className="text-primary h-4 w-4" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* 操作按钮 */}
        <div className="flex gap-3">
          <Button className="flex-1">升级套餐</Button>
          <Button variant="outline" className="flex-1">
            取消订阅
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
