import { AppearanceSettings } from "./_components/appearance-settings";
import { BasicInfoForm } from "./_components/basic-info-form";
import { ChangePasswordForm } from "./_components/change-password-form";
import { DangerZone } from "./_components/danger-zone";
import { NotificationSettings } from "./_components/notification-settings";
import { SettingsHeader } from "./_components/settings-header";
import { SettingsSidebar } from "./_components/settings-sidebar";

export default function SettingsPage() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* 左侧导航 */}
        <aside className="w-full lg:w-64 lg:shrink-0">
          <SettingsSidebar />
        </aside>

        {/* 右侧内容区 */}
        <main className="flex flex-1 flex-col gap-6">
          {/* 用户头部 */}
          <section id="profile">
            <SettingsHeader />
          </section>

          {/* 基本信息 */}
          <section id="basic-info">
            <BasicInfoForm />
          </section>

          {/* 修改密码 */}
          <section id="password">
            <ChangePasswordForm />
          </section>

          {/* 通知设置 */}
          <section id="notifications">
            <NotificationSettings />
          </section>

          {/* 外观设置 */}
          <section id="appearance">
            <AppearanceSettings />
          </section>

          {/* 危险操作区 */}
          <section id="danger">
            <DangerZone />
          </section>
        </main>
      </div>
    </div>
  );
}
