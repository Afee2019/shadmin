"use client";

import { useState } from "react";

import { FadeIn } from "@/components/animation";
import { PricingCard } from "@/components/ui/pricing-card";

import { pricingPlans } from "./pricing-data";
import { PricingToggle } from "./pricing-toggle";

function getPrice(monthlyPrice: string, isAnnual: boolean): string {
  const price = parseInt(monthlyPrice);
  if (price === 0) return "0";
  return isAnnual ? Math.round(price * 12 * 0.8).toString() : monthlyPrice;
}

export function PricingPlans() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      <FadeIn delay={100}>
        <PricingToggle isAnnual={isAnnual} onToggle={setIsAnnual} />
      </FadeIn>

      <FadeIn delay={200}>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              description={plan.description}
              price={getPrice(plan.price, isAnnual)}
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
    </>
  );
}
