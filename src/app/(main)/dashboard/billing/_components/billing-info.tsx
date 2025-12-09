"use client";

import { Edit } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BillingInfoData {
  name: string;
  company: string;
  email: string;
  taxId: string;
  address: string;
}

interface BillingInfoProps {
  info: BillingInfoData;
}

export function BillingInfo({ info }: BillingInfoProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base font-medium">账单信息</CardTitle>
        <Button variant="ghost" size="icon">
          <Edit className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-muted-foreground text-sm">姓名</p>
            <p className="font-medium">{info.name}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">公司</p>
            <p className="font-medium">{info.company}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">邮箱</p>
            <p className="font-medium">{info.email}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">税号</p>
            <p className="font-medium">{info.taxId}</p>
          </div>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">账单地址</p>
          <p className="font-medium">{info.address}</p>
        </div>
      </CardContent>
    </Card>
  );
}
