import { ConversationsList } from "./_components/conversations-list";
import { PlatformSettings } from "./_components/platform-settings";
import { ProfileHeader } from "./_components/profile-header";
import { ProfileInfo } from "./_components/profile-info";
import { ProjectsGrid } from "./_components/projects-grid";

export default function ProfilePage() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
      {/* 个人资料头部 */}
      <ProfileHeader />

      {/* 主内容区 */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* 平台设置 */}
        <PlatformSettings />

        {/* 个人信息 */}
        <ProfileInfo />

        {/* 对话列表 */}
        <ConversationsList />
      </div>

      {/* 项目展示 */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">项目</h2>
        <ProjectsGrid />
      </div>
    </div>
  );
}
