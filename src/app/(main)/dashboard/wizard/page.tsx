"use client";

import * as React from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { type AboutFormData, StepAbout } from "./_components/step-about";
import { type AccountFormData, StepAccount } from "./_components/step-account";
import { type AddressFormData, StepAddress } from "./_components/step-address";
import { StepComplete } from "./_components/step-complete";
import { WizardSteps } from "./_components/wizard-steps";

const steps = [
  { id: 1, title: "基本信息", description: "个人资料" },
  { id: 2, title: "专业领域", description: "选择技能" },
  { id: 3, title: "地址信息", description: "联系方式" },
];

const initialAboutData: AboutFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  bio: "",
};

const initialAccountData: AccountFormData = {
  selectedTypes: [],
};

const initialAddressData: AddressFormData = {
  address: "",
  city: "",
  province: "",
  postalCode: "",
  country: "中国",
};

export default function WizardPage() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [isComplete, setIsComplete] = React.useState(false);
  const [aboutData, setAboutData] = React.useState<AboutFormData>(initialAboutData);
  const [accountData, setAccountData] = React.useState<AccountFormData>(initialAccountData);
  const [addressData, setAddressData] = React.useState<AddressFormData>(initialAddressData);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setIsComplete(false);
    setAboutData(initialAboutData);
    setAccountData(initialAccountData);
    setAddressData(initialAddressData);
  };

  const renderStepContent = () => {
    if (isComplete) {
      return <StepComplete onReset={handleReset} />;
    }

    switch (currentStep) {
      case 1:
        return <StepAbout data={aboutData} onChange={setAboutData} />;
      case 2:
        return <StepAccount data={accountData} onChange={setAccountData} />;
      case 3:
        return <StepAddress data={addressData} onChange={setAddressData} />;
      default:
        return null;
    }
  };

  return (
    <div className="py-6">
      {/* 页面标题 */}
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">创建您的个人资料</h1>
        <p className="text-muted-foreground mt-2">完成以下步骤以设置您的账户</p>
      </div>

      {/* 向导卡片 */}
      <div className="mx-auto max-w-3xl">
        <Card>
          <CardContent className="p-6 sm:p-8">
            {/* 步骤指示器 */}
            {!isComplete && (
              <div className="mb-8">
                <WizardSteps steps={steps} currentStep={currentStep} />
              </div>
            )}

            {/* 步骤内容 */}
            <div className="min-h-[300px]">{renderStepContent()}</div>

            {/* 导航按钮 */}
            {!isComplete && (
              <div className="mt-8 flex justify-between">
                <Button variant="outline" onClick={handleBack} disabled={currentStep === 1} className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  上一步
                </Button>
                <Button onClick={handleNext} className="gap-2">
                  {currentStep === steps.length ? "完成" : "下一步"}
                  {currentStep !== steps.length && <ArrowRight className="h-4 w-4" />}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* 使用说明 */}
        <div className="text-muted-foreground mt-6 text-center text-sm">
          <p>所有信息均会安全存储，仅用于改善您的使用体验。</p>
        </div>
      </div>
    </div>
  );
}
