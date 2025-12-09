"use client";

import { ArrowDownLeft, ArrowUpRight, Calendar } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Transaction {
  id: string;
  name: string;
  description: string;
  date: string;
  amount: number;
  type: "income" | "expense";
}

interface TransactionsListProps {
  transactions: Transaction[];
}

export function TransactionsList({ transactions }: TransactionsListProps) {
  const formatAmount = (amount: number) => {
    const prefix = amount > 0 ? "+" : "";
    return `${prefix}¥${Math.abs(amount).toFixed(2)}`;
  };

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base font-medium">交易记录</CardTitle>
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4" />
          <span>最近 30 天</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {transactions.map((transaction) => (
            <li key={transaction.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full",
                    transaction.type === "income" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500",
                  )}
                >
                  {transaction.type === "income" ? (
                    <ArrowDownLeft className="h-5 w-5" />
                  ) : (
                    <ArrowUpRight className="h-5 w-5" />
                  )}
                </div>
                <div>
                  <p className="font-medium">{transaction.name}</p>
                  <p className="text-muted-foreground text-sm">{transaction.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={cn("font-medium", transaction.type === "income" ? "text-green-500" : "text-red-500")}>
                  {formatAmount(transaction.amount)}
                </p>
                <p className="text-muted-foreground text-xs">{transaction.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
