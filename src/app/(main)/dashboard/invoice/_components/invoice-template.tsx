"use client";

import { format } from "date-fns";
import { zhCN } from "date-fns/locale";
import { Printer, Download, Mail, CheckCircle, Clock, AlertCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableFooter } from "@/components/ui/table";
import { cn } from "@/lib/utils";

import type { Invoice } from "./invoice-data";

interface InvoiceTemplateProps {
  invoice: Invoice;
  className?: string;
}

const statusConfig = {
  paid: {
    label: "已支付",
    icon: CheckCircle,
    variant: "default" as const,
    className: "bg-green-500 hover:bg-green-500",
  },
  pending: {
    label: "待支付",
    icon: Clock,
    variant: "secondary" as const,
    className: "bg-amber-500 hover:bg-amber-500 text-white",
  },
  overdue: {
    label: "已逾期",
    icon: AlertCircle,
    variant: "destructive" as const,
    className: "",
  },
  draft: {
    label: "草稿",
    icon: Clock,
    variant: "outline" as const,
    className: "",
  },
};

export function InvoiceTemplate({ invoice, className }: InvoiceTemplateProps) {
  const status = statusConfig[invoice.status];
  const StatusIcon = status.icon;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("zh-CN", {
      style: "currency",
      currency: "CNY",
    }).format(amount);
  };

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-0">
        {/* 工具栏 */}
        <div className="bg-muted/30 flex items-center justify-between border-b px-6 py-3">
          <Badge className={cn("gap-1", status.className)} variant={status.variant}>
            <StatusIcon className="h-3 w-3" />
            {status.label}
          </Badge>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Mail className="mr-2 h-4 w-4" />
              发送
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              下载
            </Button>
            <Button variant="outline" size="sm" onClick={() => window.print()}>
              <Printer className="mr-2 h-4 w-4" />
              打印
            </Button>
          </div>
        </div>

        {/* 发票内容 */}
        <div className="p-8">
          {/* 头部信息 */}
          <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">发票</h1>
              <p className="text-muted-foreground mt-1">#{invoice.number}</p>
            </div>
            <div className="text-left sm:text-right">
              <p className="font-semibold">{invoice.from.name}</p>
              <p className="text-muted-foreground mt-1 text-sm whitespace-pre-line">{invoice.from.address}</p>
              <p className="text-muted-foreground text-sm">{invoice.from.phone}</p>
              <p className="text-muted-foreground text-sm">{invoice.from.email}</p>
            </div>
          </div>

          {/* 收件人和日期 */}
          <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-muted-foreground mb-2 text-sm font-medium uppercase">收件人</h3>
              <p className="font-semibold">{invoice.to.name}</p>
              <p className="text-muted-foreground mt-1 text-sm whitespace-pre-line">{invoice.to.address}</p>
              {invoice.to.phone && <p className="text-muted-foreground text-sm">{invoice.to.phone}</p>}
              {invoice.to.email && <p className="text-muted-foreground text-sm">{invoice.to.email}</p>}
            </div>
            <div>
              <h3 className="text-muted-foreground mb-2 text-sm font-medium uppercase">开票日期</h3>
              <p className="font-medium">{format(invoice.issueDate, "yyyy年M月d日", { locale: zhCN })}</p>
            </div>
            <div>
              <h3 className="text-muted-foreground mb-2 text-sm font-medium uppercase">到期日期</h3>
              <p className="font-medium">{format(invoice.dueDate, "yyyy年M月d日", { locale: zhCN })}</p>
            </div>
          </div>

          {/* 项目明细表格 */}
          <div className="mb-8 overflow-hidden rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="w-[50%]">项目描述</TableHead>
                  <TableHead className="text-right">数量</TableHead>
                  <TableHead className="text-right">单价</TableHead>
                  <TableHead className="text-right">金额</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoice.items.map((item) => (
                  <TableRow key={item.description}>
                    <TableCell className="font-medium">{item.description}</TableCell>
                    <TableCell className="text-right">{item.quantity}</TableCell>
                    <TableCell className="text-right">{formatCurrency(item.unitPrice)}</TableCell>
                    <TableCell className="text-right">{formatCurrency(item.amount)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3} className="text-right">
                    小计
                  </TableCell>
                  <TableCell className="text-right">{formatCurrency(invoice.subtotal)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={3} className="text-right">
                    税费 ({invoice.taxRate}%)
                  </TableCell>
                  <TableCell className="text-right">{formatCurrency(invoice.tax)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={3} className="text-right text-lg font-bold">
                    总计
                  </TableCell>
                  <TableCell className="text-primary text-right text-lg font-bold">
                    {formatCurrency(invoice.total)}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>

          {/* 备注和付款条款 */}
          {(invoice.notes != null || invoice.paymentTerms != null) && (
            <div className="grid gap-6 sm:grid-cols-2">
              {invoice.notes && (
                <div>
                  <h3 className="text-muted-foreground mb-2 text-sm font-medium uppercase">备注</h3>
                  <p className="text-sm">{invoice.notes}</p>
                </div>
              )}
              {invoice.paymentTerms && (
                <div>
                  <h3 className="text-muted-foreground mb-2 text-sm font-medium uppercase">付款条款</h3>
                  <p className="text-sm">{invoice.paymentTerms}</p>
                </div>
              )}
            </div>
          )}

          <Separator className="my-8" />

          {/* 底部信息 */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm">如有任何疑问，请联系：{invoice.from.email}</p>
            <p className="text-muted-foreground mt-1 text-xs">感谢您的信任与支持！</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
