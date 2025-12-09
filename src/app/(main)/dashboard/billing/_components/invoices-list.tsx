"use client";

import { Download, FileText } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Invoice {
  id: string;
  date: string;
  amount: string;
  status: "已支付" | "待支付" | "已取消";
}

interface InvoicesListProps {
  invoices: Invoice[];
}

const statusVariants: Record<Invoice["status"], "default" | "secondary" | "destructive"> = {
  已支付: "default",
  待支付: "secondary",
  已取消: "destructive",
};

export function InvoicesList({ invoices }: InvoicesListProps) {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base font-medium">发票记录</CardTitle>
        <Button variant="outline" size="sm">
          查看全部
        </Button>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {invoices.map((invoice) => (
            <li key={invoice.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
              <div className="flex items-center gap-3">
                <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-lg">
                  <FileText className="text-muted-foreground h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">{invoice.date}</p>
                  <p className="text-muted-foreground text-sm">{invoice.id}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="font-medium">{invoice.amount}</p>
                  <Badge variant={statusVariants[invoice.status]} className="text-xs">
                    {invoice.status}
                  </Badge>
                </div>
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
