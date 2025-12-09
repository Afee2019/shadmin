import { Check, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PricingFeature {
  label: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  description?: string;
  price: string;
  currency?: string;
  period?: string;
  features: PricingFeature[];
  buttonText?: string;
  buttonVariant?: "default" | "outline" | "secondary";
  popular?: boolean;
  onSelect?: () => void;
  className?: string;
}

export function PricingCard({
  name,
  description,
  price,
  currency = "¥",
  period = "月",
  features,
  buttonText = "立即开始",
  buttonVariant = "default",
  popular = false,
  onSelect,
  className,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative flex flex-col",
        popular && "border-primary shadow-lg shadow-primary/10",
        className
      )}
    >
      {popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 px-4">
          最受欢迎
        </Badge>
      )}

      <CardHeader className="text-center pb-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </CardHeader>

      <CardContent className="flex-1">
        {/* 价格 */}
        <div className="mb-6 text-center">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-lg text-muted-foreground">{currency}</span>
            <span className="text-5xl font-bold tracking-tight">{price}</span>
            <span className="text-muted-foreground">/{period}</span>
          </div>
        </div>

        {/* 功能列表 */}
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              {feature.included ? (
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3 w-3 text-primary" />
                </div>
              ) : (
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted">
                  <X className="h-3 w-3 text-muted-foreground" />
                </div>
              )}
              <span
                className={cn(
                  "text-sm",
                  !feature.included && "text-muted-foreground line-through"
                )}
              >
                {feature.label}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          variant={popular ? "default" : buttonVariant}
          className="w-full"
          onClick={onSelect}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
