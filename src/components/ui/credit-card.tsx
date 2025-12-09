import { Wifi } from "lucide-react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const creditCardVariants = cva(
  "relative aspect-[1.586/1] w-full overflow-hidden rounded-2xl p-6 text-white",
  {
    variants: {
      variant: {
        dark: "bg-gradient-to-br from-slate-800 to-slate-900",
        primary: "bg-gradient-to-br from-primary to-primary/80",
        success: "bg-gradient-to-br from-emerald-500 to-emerald-700",
        info: "bg-gradient-to-br from-blue-500 to-blue-700",
        warning: "bg-gradient-to-br from-amber-500 to-amber-700",
        glass: "border border-white/20 bg-white/10 backdrop-blur-lg",
      },
    },
    defaultVariants: {
      variant: "dark",
    },
  }
);

interface CreditCardProps extends VariantProps<typeof creditCardVariants> {
  number: string;
  holder: string;
  expires: string;
  type?: "visa" | "mastercard" | "unionpay";
  className?: string;
}

function formatCardNumber(number: string): string {
  const digits = number.replace(/\D/g, "").slice(0, 16);
  const masked = digits.padEnd(16, "*").replace(/(.{4})/g, "$1 ").trim();
  return masked;
}

export function CreditCard({
  number,
  holder,
  expires,
  variant,
  type = "visa",
  className,
}: CreditCardProps) {
  const formattedNumber = formatCardNumber(number);

  return (
    <div className={cn(creditCardVariants({ variant }), className)}>
      {/* 背景装饰图案 */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 400 250" fill="none">
          <circle cx="350" cy="50" r="100" fill="currentColor" />
          <circle cx="380" cy="120" r="80" fill="currentColor" />
        </svg>
      </div>

      {/* 卡片内容 */}
      <div className="relative z-10 flex h-full flex-col justify-between">
        {/* 顶部：芯片和无线图标 */}
        <div className="flex items-start justify-between">
          {/* 芯片 */}
          <div className="h-10 w-14 rounded-md bg-amber-400/80" />
          {/* 无线支付图标 */}
          <Wifi className="h-6 w-6 rotate-90 opacity-80" />
        </div>

        {/* 卡号 */}
        <div className="my-4 font-mono text-xl tracking-widest sm:text-2xl">
          {formattedNumber}
        </div>

        {/* 底部：持卡人和有效期 */}
        <div className="flex items-end justify-between">
          <div>
            <div className="text-xs uppercase opacity-60">持卡人</div>
            <div className="font-medium uppercase">{holder}</div>
          </div>
          <div className="text-right">
            <div className="text-xs uppercase opacity-60">有效期</div>
            <div className="font-medium">{expires}</div>
          </div>
          {/* 卡片类型 Logo */}
          <div className="flex items-center">
            {type === "visa" && (
              <span className="text-xl font-bold italic tracking-tight">VISA</span>
            )}
            {type === "mastercard" && (
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-red-500 opacity-80" />
                <div className="h-8 w-8 rounded-full bg-amber-400 opacity-80" />
              </div>
            )}
            {type === "unionpay" && (
              <span className="rounded bg-red-600 px-2 py-1 text-xs font-bold">银联</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
