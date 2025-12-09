"use client";

import { useState } from "react";

import { ArrowLeft, Filter, Plus } from "lucide-react";

import { FadeIn } from "@/components/animation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

import { invoices, type Invoice } from "./_components/invoice-data";
import { InvoiceList } from "./_components/invoice-list";
import { InvoiceTemplate } from "./_components/invoice-template";

export default function InvoicePage() {
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all");

  // 根据状态筛选发票
  const filteredInvoices = statusFilter === "all" ? invoices : invoices.filter((inv) => inv.status === statusFilter);

  // 统计数据
  const stats = {
    total: invoices.length,
    paid: invoices.filter((i) => i.status === "paid").length,
    pending: invoices.filter((i) => i.status === "pending").length,
    overdue: invoices.filter((i) => i.status === "overdue").length,
    totalAmount: invoices.reduce((sum, i) => sum + i.total, 0),
    paidAmount: invoices.filter((i) => i.status === "paid").reduce((sum, i) => sum + i.total, 0),
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("zh-CN", {
      style: "currency",
      currency: "CNY",
    }).format(amount);
  };

  if (selectedInvoice) {
    return (
      <div className="space-y-6">
        <FadeIn>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" onClick={() => setSelectedInvoice(null)}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">发票详情</h1>
              <p className="text-muted-foreground">{selectedInvoice.number}</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <InvoiceTemplate invoice={selectedInvoice} />
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* 页面标题和操作栏 */}
      <FadeIn>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">发票管理</h1>
            <p className="text-muted-foreground hidden sm:block">创建、管理和跟踪您的发票</p>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>按状态筛选</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setStatusFilter("all")}>全部 ({stats.total})</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("paid")}>已支付 ({stats.paid})</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("pending")}>待支付 ({stats.pending})</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("overdue")}>已逾期 ({stats.overdue})</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button>
              <Plus className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">新建发票</span>
            </Button>
          </div>
        </div>
      </FadeIn>

      {/* 统计卡片 */}
      <FadeIn delay={100}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-card rounded-lg border p-4">
            <p className="text-muted-foreground text-sm font-medium">发票总数</p>
            <p className="mt-1 text-2xl font-bold">{stats.total}</p>
          </div>
          <div className="bg-card rounded-lg border p-4">
            <p className="text-muted-foreground text-sm font-medium">总金额</p>
            <p className="mt-1 text-2xl font-bold">{formatCurrency(stats.totalAmount)}</p>
          </div>
          <div className="bg-card rounded-lg border p-4">
            <p className="text-muted-foreground text-sm font-medium">已收款</p>
            <p className="mt-1 text-2xl font-bold text-green-600">{formatCurrency(stats.paidAmount)}</p>
          </div>
          <div className="bg-card rounded-lg border p-4">
            <p className="text-muted-foreground text-sm font-medium">待收款</p>
            <p className="mt-1 text-2xl font-bold text-amber-600">
              {formatCurrency(stats.totalAmount - stats.paidAmount)}
            </p>
          </div>
        </div>
      </FadeIn>

      {/* 发票列表 */}
      <FadeIn delay={200}>
        <InvoiceList invoices={filteredInvoices} onSelectInvoice={setSelectedInvoice} />
      </FadeIn>
    </div>
  );
}
