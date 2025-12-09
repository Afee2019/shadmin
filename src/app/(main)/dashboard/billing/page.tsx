"use client";

import { FadeIn } from "@/components/animation";
import { CreditCard } from "@/components/ui/credit-card";

import { billingInfo, invoices, paymentMethods, planInfo, transactions } from "./_components/billing-data";
import { BillingInfo } from "./_components/billing-info";
import { CurrentPlan } from "./_components/current-plan";
import { InvoicesList } from "./_components/invoices-list";
import { PaymentMethods } from "./_components/payment-methods";
import { TransactionsList } from "./_components/transactions-list";

export default function BillingPage() {
  return (
    <div className="space-y-6 py-6">
      {/* 页面标题 */}
      <FadeIn>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">账单管理</h1>
          <p className="text-muted-foreground">管理您的订阅、支付方式和发票</p>
        </div>
      </FadeIn>

      {/* 第一行：信用卡 + 当前套餐 */}
      <FadeIn delay={100}>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <CreditCard number="4562112245947852" holder="张三" expires="12/25" variant="dark" type="mastercard" />
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-xl border p-4 text-center">
                <p className="text-muted-foreground text-sm">账户余额</p>
                <p className="text-primary text-2xl font-bold">¥1,382.00</p>
              </div>
              <div className="bg-card rounded-xl border p-4 text-center">
                <p className="text-muted-foreground text-sm">本月消费</p>
                <p className="text-2xl font-bold">¥349.00</p>
              </div>
            </div>
          </div>
          <CurrentPlan plan={planInfo} />
        </div>
      </FadeIn>

      {/* 第二行：支付方式 */}
      <FadeIn delay={200}>
        <PaymentMethods methods={paymentMethods} />
      </FadeIn>

      {/* 第三行：账单信息 + 发票 */}
      <FadeIn delay={300}>
        <div className="grid gap-6 lg:grid-cols-2">
          <BillingInfo info={billingInfo} />
          <InvoicesList invoices={invoices} />
        </div>
      </FadeIn>

      {/* 第四行：交易记录 */}
      <FadeIn delay={400}>
        <TransactionsList transactions={transactions} />
      </FadeIn>
    </div>
  );
}
