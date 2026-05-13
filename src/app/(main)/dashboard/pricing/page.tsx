import { FadeIn } from "@/components/animation";

import { faqItems } from "./_components/pricing-data";
import { PricingFaq } from "./_components/pricing-faq";
import { PricingPlans } from "./_components/pricing-plans";

export default function PricingPage() {
  return (
    <div className="space-y-12 py-6">
      <FadeIn>
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">选择适合您的套餐</h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
            灵活的定价方案，满足不同规模团队的需求。所有套餐均提供 14 天免费试用。
          </p>
        </div>
      </FadeIn>

      <PricingPlans />

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

      <FadeIn delay={400}>
        <PricingFaq items={faqItems} />
      </FadeIn>
    </div>
  );
}
