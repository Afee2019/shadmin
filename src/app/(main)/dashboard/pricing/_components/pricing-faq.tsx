"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface PricingFaqProps {
  items: FaqItem[];
}

export function PricingFaq({ items }: PricingFaqProps) {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">常见问题</h2>
        <p className="text-muted-foreground mt-2">关于定价和订阅的常见问题解答</p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
