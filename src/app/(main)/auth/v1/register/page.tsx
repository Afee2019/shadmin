import Link from "next/link";

import { Command } from "lucide-react";

import { RegisterForm } from "../../_components/register-form";
import { GoogleButton } from "../../_components/social-auth/google-button";

export default function RegisterV1() {
  return (
    <div className="flex h-dvh">
      <div className="bg-background flex w-full items-center justify-center p-8 lg:w-2/3">
        <div className="w-full max-w-md space-y-10 py-24 lg:py-32">
          <div className="space-y-4 text-center">
            <div className="font-medium tracking-tight">注册</div>
            <div className="text-muted-foreground mx-auto max-w-xl">请填写以下信息创建您的账户。</div>
          </div>
          <div className="space-y-4">
            <RegisterForm />
            <GoogleButton className="w-full" variant="outline" />
            <p className="text-muted-foreground text-center text-xs">
              已有账户？{" "}
              <Link prefetch={false} href="login" className="text-primary">
                立即登录
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary hidden lg:block lg:w-1/3">
        <div className="flex h-full flex-col items-center justify-center p-12 text-center">
          <div className="space-y-6">
            <Command className="text-primary-foreground mx-auto size-12" />
            <div className="space-y-2">
              <h1 className="text-primary-foreground text-5xl font-light">欢迎！</h1>
              <p className="text-primary-foreground/80 text-xl">开启您的旅程</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
