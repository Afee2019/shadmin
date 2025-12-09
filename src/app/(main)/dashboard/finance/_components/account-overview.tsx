"use client";

import { Plus } from "lucide-react";
import { siApple, siPaypal, siOpenai, siVercel, siFigma } from "simple-icons";

import { SimpleIcon } from "@/components/simple-icon";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatCurrency, cn } from "@/lib/utils";

function ChipSVG() {
  return (
    <svg enableBackground="new 0 0 132 92" viewBox="0 0 132 92" xmlns="http://www.w3.org/2000/svg" className="w-14">
      <title>Chip</title>
      <rect x="0.5" y="0.5" width="131" height="91" rx="15" className="fill-accent stroke-accent" />
      <rect x="9.5" y="9.5" width="48" height="21" rx="10.5" className="fill-accent stroke-accent-foreground" />
      <rect x="9.5" y="61.5" width="48" height="21" rx="10.5" className="fill-accent stroke-accent-foreground" />
      <rect x="9.5" y="35.5" width="48" height="21" rx="10.5" className="fill-accent stroke-accent-foreground" />
      <rect x="74.5" y="9.5" width="48" height="21" rx="10.5" className="fill-accent stroke-accent-foreground" />
      <rect x="74.5" y="61.5" width="48" height="21" rx="10.5" className="fill-accent stroke-accent-foreground" />
      <rect x="74.5" y="35.5" width="48" height="21" rx="10.5" className="fill-accent stroke-accent-foreground" />
    </svg>
  );
}

const recentPayments = [
  {
    id: 1,
    icon: siPaypal,
    title: "预付款",
    subtitle: "通过 PayPal 收到网站项目款项",
    type: "credit",
    amount: 1200,
    date: "7月8日",
  },
  {
    id: 2,
    icon: siOpenai,
    title: "ChatGPT 订阅",
    subtitle: "OpenAI 月度订阅",
    type: "debit",
    amount: 20,
    date: "7月7日",
  },
  {
    id: 3,
    icon: siVercel,
    title: "Vercel 团队订阅",
    subtitle: "Vercel 云托管费用",
    type: "debit",
    amount: 160,
    date: "7月4日",
  },
  {
    id: 4,
    icon: siFigma,
    title: "Figma 专业版",
    subtitle: "Figma 专业版套餐",
    type: "debit",
    amount: 35,
    date: "7月2日",
  },
];

export function AccountOverview() {
  return (
    <Card className="shadow-xs">
      <CardHeader className="items-center">
        <CardTitle>我的卡片</CardTitle>
        <CardDescription>您的卡片摘要、余额和最近交易一目了然。</CardDescription>
        <CardAction>
          <Button size="icon" variant="outline">
            <Plus className="size-4" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Tabs className="gap-4" defaultValue="virtual">
          <TabsList className="w-full">
            <TabsTrigger value="virtual">虚拟卡</TabsTrigger>
            <TabsTrigger value="physical" disabled>
              实体卡
            </TabsTrigger>
          </TabsList>
          <TabsContent value="virtual">
            <div className="space-y-4">
              <div className="bg-primary relative aspect-8/5 w-full max-w-96 overflow-hidden rounded-xl perspective-distant">
                <div className="absolute top-6 left-6">
                  <SimpleIcon icon={siApple} className="fill-primary-foreground size-8" />
                </div>
                <div className="absolute top-1/2 w-full -translate-y-1/2">
                  <div className="flex items-end justify-between px-6">
                    <span className="text-accent font-mono text-lg leading-none font-medium tracking-wide uppercase">
                      李绍俊
                    </span>
                    <ChipSVG />
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">卡号</span>
                  <span className="font-medium tabular-nums">•••• •••• 5416</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">有效期</span>
                  <span className="font-medium tabular-nums">06/09</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">安全码</span>
                  <span className="font-medium">•••</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">消费限额</span>
                  <span className="font-medium tabular-nums">¥620,000.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">可用余额</span>
                  <span className="font-medium tabular-nums">¥131,000.06</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1" variant="outline" size="sm">
                  冻结卡片
                </Button>
                <Button className="flex-1" variant="outline" size="sm">
                  设置限额
                </Button>
                <Button className="flex-1" variant="outline" size="sm">
                  更多
                </Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h6 className="text-muted-foreground text-sm uppercase">最近交易</h6>

                <div className="space-y-4">
                  {recentPayments.map((transaction) => (
                    <div key={transaction.id} className="flex items-center gap-2">
                      <div className="bg-muted flex size-10 shrink-0 items-center justify-center rounded-full">
                        <SimpleIcon icon={transaction.icon} className="size-5" />
                      </div>
                      <div className="flex w-full items-end justify-between">
                        <div>
                          <p className="text-sm font-medium">{transaction.title}</p>
                          <p className="text-muted-foreground line-clamp-1 text-xs">{transaction.subtitle}</p>
                        </div>
                        <div>
                          <span
                            className={cn(
                              "text-sm leading-none font-medium tabular-nums",
                              transaction.type === "debit" ? "text-destructive" : "text-green-500",
                            )}
                          >
                            {formatCurrency(transaction.amount, { noDecimals: true })}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="w-full" size="sm" variant="outline">
                  查看全部交易
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="physical">实体卡详情暂不可用</TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
