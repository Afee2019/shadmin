"use client";

import { format } from "date-fns";
import { zhCN } from "date-fns/locale";
import { Eye, Download, MoreHorizontal, CheckCircle, Clock, AlertCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

import type { Invoice } from "./invoice-data";

interface InvoiceListProps {
  invoices: Invoice[];
  onSelectInvoice: (invoice: Invoice) => void;
  className?: string;
}

const statusConfig = {
  paid: {
    label: "已支付",
    icon: CheckCircle,
    className: "bg-green-500/10 text-green-600 border-green-200",
  },
  pending: {
    label: "待支付",
    icon: Clock,
    className: "bg-amber-500/10 text-amber-600 border-amber-200",
  },
  overdue: {
    label: "已逾期",
    icon: AlertCircle,
    className: "bg-red-500/10 text-red-600 border-red-200",
  },
  draft: {
    label: "草稿",
    icon: Clock,
    className: "bg-gray-500/10 text-gray-600 border-gray-200",
  },
};

export function InvoiceList({ invoices, onSelectInvoice, className }: InvoiceListProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("zh-CN", {
      style: "currency",
      currency: "CNY",
    }).format(amount);
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>发票列表</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>发票编号</TableHead>
                <TableHead>客户</TableHead>
                <TableHead>开票日期</TableHead>
                <TableHead>到期日期</TableHead>
                <TableHead>金额</TableHead>
                <TableHead>状态</TableHead>
                <TableHead className="text-right">操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => {
                const status = statusConfig[invoice.status];
                const StatusIcon = status.icon;

                return (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">{invoice.number}</TableCell>
                    <TableCell>{invoice.to.name}</TableCell>
                    <TableCell>{format(invoice.issueDate, "yyyy/MM/dd", { locale: zhCN })}</TableCell>
                    <TableCell>{format(invoice.dueDate, "yyyy/MM/dd", { locale: zhCN })}</TableCell>
                    <TableCell className="font-medium">{formatCurrency(invoice.total)}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={cn("gap-1", status.className)}>
                        <StatusIcon className="h-3 w-3" />
                        {status.label}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => onSelectInvoice(invoice)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>编辑</DropdownMenuItem>
                            <DropdownMenuItem>发送提醒</DropdownMenuItem>
                            <DropdownMenuItem>复制</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">删除</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
