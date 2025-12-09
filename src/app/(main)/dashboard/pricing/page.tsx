"use client";

import { useState } from "react";

import { FadeIn } from "@/components/animation";
import { PricingCard } from "@/components/ui/pricing-card";

import { faqItems, pricingPlans } from "./_components/pricing-data";
import { PricingFaq } from "./_components/pricing-faq";
import { PricingToggle } from "./_components/pricing-toggle";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  // 计算年付折扣价格
  const getPrice = (monthlyPrice: string) => {
    const price = parseInt(monthlyPrice);
    if (price === 0) return "0";
    return isAnnual ? Math.round(price * 12 * 0.8).toString() : monthlyPrice;
  };

  return (
    <div className="space-y-12 py-6">
      {/* 页面标题 */}
      <FadeIn>
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">选择适合您的套餐</h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
            灵活的定价方案，满足不同规模团队的需求。所有套餐均提供 14 天免费试用。
          </p>
        </div>
      </FadeIn>

      {/* 月付/年付切换 */}
      <FadeIn delay={100}>
        <PricingToggle isAnnual={isAnnual} onToggle={setIsAnnual} />
      </FadeIn>

      {/* 定价卡片 */}
      <FadeIn delay={200}>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              description={plan.description}
              price={getPrice(plan.price)}
              period={isAnnual ? "年" : "月"}
              features={plan.features}
              buttonText={plan.buttonText}
              buttonVariant={plan.buttonVariant}
              popular={plan.popular}
              onSelect={() => {
                // 处理套餐选择
                console.log(`Selected plan: ${plan.name}`);
              }}
            />
          ))}
        </div>
      </FadeIn>

      {/* 企业定制提示 */}
      <FadeIn delay={300}>
        <div className="bg-muted/30 mx-auto max-w-3xl rounded-xl border p-6 text-center">
          <h3 className="text-lg font-semibold">需要更多？</h3>
          <p className="text-muted-foreground mt-2">
            我们可以为大型企业提供定制方案，包括专属部署、SLA 保障和定制开发。
          </p>
          <a
            href="mailto:sales@example.com"
            className="text-primary mt-4 inline-block text-sm font-medium hover:underline"
          >
            联系销售团队 →
          </a>
        </div>
      </FadeIn>

      {/* FAQ */}
      <FadeIn delay={400}>
        <PricingFaq items={faqItems} />
      </FadeIn>
    </div>
  );
}
