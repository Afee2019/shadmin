"use client";

import * as React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export interface AddressFormData {
  address: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
}

interface StepAddressProps {
  data: AddressFormData;
  onChange: (data: AddressFormData) => void;
}

const provinces = ["北京市", "上海市", "广东省", "江苏省", "浙江省", "四川省", "湖北省", "陕西省", "山东省", "河南省"];

export function StepAddress({ data, onChange }: StepAddressProps) {
  const handleChange = (field: keyof AddressFormData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold">地址信息</h3>
        <p className="text-muted-foreground text-sm">请填写您的联系地址</p>
      </div>

      <div className="mx-auto max-w-md space-y-4">
        <div className="space-y-2">
          <Label htmlFor="address">详细地址</Label>
          <Input
            id="address"
            placeholder="街道、门牌号等"
            value={data.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="city">城市</Label>
            <Input
              id="city"
              placeholder="请输入城市"
              value={data.city}
              onChange={(e) => handleChange("city", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="province">省份</Label>
            <Select value={data.province} onValueChange={(value) => handleChange("province", value)}>
              <SelectTrigger id="province">
                <SelectValue placeholder="选择省份" />
              </SelectTrigger>
              <SelectContent>
                {provinces.map((province) => (
                  <SelectItem key={province} value={province}>
                    {province}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="postalCode">邮政编码</Label>
            <Input
              id="postalCode"
              placeholder="请输入邮编"
              value={data.postalCode}
              onChange={(e) => handleChange("postalCode", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">国家/地区</Label>
            <Select value={data.country} onValueChange={(value) => handleChange("country", value)}>
              <SelectTrigger id="country">
                <SelectValue placeholder="选择国家" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="中国">中国</SelectItem>
                <SelectItem value="香港">香港</SelectItem>
                <SelectItem value="澳门">澳门</SelectItem>
                <SelectItem value="台湾">台湾</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
