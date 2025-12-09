import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const conversations = [
  {
    id: 1,
    name: "李晓峰",
    avatar: "/avatars/user-02.jpg",
    message: "你好！关于那个项目我想了解更多细节...",
  },
  {
    id: 2,
    name: "王芳",
    avatar: "/avatars/user-03.jpg",
    message: "做得很好，你能发一下最新的设计稿吗...",
  },
  {
    id: 3,
    name: "陈静",
    avatar: "/avatars/user-04.jpg",
    message: "关于文档的问题我可以帮你看看...",
  },
  {
    id: 4,
    name: "赵鹏",
    avatar: "/avatars/user-05.jpg",
    message: "祝你下午愉快，有空聊聊...",
  },
  {
    id: 5,
    name: "刘强",
    avatar: "/avatars/user-06.jpg",
    message: "你好！我需要一些技术方面的建议...",
  },
];

export function ConversationsList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>对话</CardTitle>
        <CardDescription>最近的消息记录</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {conversations.map(({ id, name, avatar, message }) => (
            <li key={id} className="flex items-start gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback>{name[0]}</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{name}</p>
                <p className="text-muted-foreground truncate text-xs">{message}</p>
              </div>
              <Button variant="link" size="sm" className="shrink-0 text-xs">
                回复
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
