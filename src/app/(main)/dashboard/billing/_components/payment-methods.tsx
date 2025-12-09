"use client";

import { CreditCard as CreditCardIcon, Edit, Plus, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface PaymentMethod {
  id: string;
  type: "mastercard" | "visa" | "unionpay";
  last4: string;
  expiry: string;
  isDefault: boolean;
}

interface PaymentMethodsProps {
  methods: PaymentMethod[];
}

const cardLogos: Record<string, string> = {
  mastercard: "M",
  visa: "V",
  unionpay: "U",
};

const cardColors: Record<string, string> = {
  mastercard: "bg-orange-500",
  visa: "bg-blue-600",
  unionpay: "bg-red-600",
};

export function PaymentMethods({ methods }: PaymentMethodsProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base font-medium">支付方式</CardTitle>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          添加新卡
        </Button>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-2">
        {methods.map((method) => (
          <div key={method.id} className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-4">
              <div
                className={`flex h-10 w-14 items-center justify-center rounded-md font-bold text-white ${cardColors[method.type]}`}
              >
                {cardLogos[method.type]}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">**** **** **** {method.last4}</span>
                  {method.isDefault && (
                    <Badge variant="secondary" className="text-xs">
                      默认
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground text-sm">有效期至 {method.expiry}</p>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <CreditCardIcon className="mr-2 h-4 w-4" />
                  设为默认
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  编辑
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  删除
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
