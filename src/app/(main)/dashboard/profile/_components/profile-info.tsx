import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const socialLinks = [
  {
    platform: "微博",
    url: "https://weibo.com/zhangming",
    color: "text-red-500",
  },
  {
    platform: "GitHub",
    url: "https://github.com/zhangming",
    color: "text-foreground",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/zhangming",
    color: "text-blue-600",
  },
];

const profileData = [
  { label: "全名", value: "张明" },
  { label: "手机", value: "+86 138 0000 0000" },
  { label: "邮箱", value: "zhangming@example.com" },
  { label: "位置", value: "中国，上海市" },
];

export function ProfileInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>个人信息</CardTitle>
        <CardDescription>
          拥有 10 年以上产品管理经验，专注于企业级 SaaS 产品设计与团队管理。热爱技术，善于沟通，乐于分享。
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Separator />

        {/* 基本信息 */}
        <dl className="space-y-3">
          {profileData.map(({ label, value }) => (
            <div key={label} className="flex items-center gap-2 text-sm">
              <dt className="text-muted-foreground font-medium">{label}:</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <Separator />

        {/* 社交链接 */}
        <div className="space-y-2">
          <h4 className="text-muted-foreground text-sm font-medium">社交链接</h4>
          <div className="flex flex-wrap gap-2">
            {socialLinks.map(({ platform, url, color }) => (
              <Button key={platform} variant="outline" size="sm" className={color} asChild>
                <Link href={url} target="_blank" rel="noopener noreferrer">
                  {platform}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
