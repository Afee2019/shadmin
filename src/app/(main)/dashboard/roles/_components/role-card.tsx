"use client";

import { format } from "date-fns";
import { zhCN } from "date-fns/locale";
import { Edit, MoreVertical, Trash2, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

import { type Role } from "./roles-data";

interface RoleCardProps {
  role: Role;
  onEdit?: (role: Role) => void;
  onDelete?: (role: Role) => void;
  onClick?: (role: Role) => void;
  isSelected?: boolean;
}

export function RoleCard({ role, onEdit, onDelete, onClick, isSelected }: RoleCardProps) {
  return (
    <Card
      className={cn("cursor-pointer transition-all hover:shadow-md", isSelected && "ring-primary ring-2")}
      onClick={() => onClick?.(role)}
    >
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="flex items-center gap-3">
          <div className={cn("h-10 w-10 rounded-lg", role.color)} />
          <div>
            <CardTitle className="text-base">{role.name}</CardTitle>
            <CardDescription className="line-clamp-1 text-xs">{role.description}</CardDescription>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                onEdit?.(role);
              }}
            >
              <Edit className="mr-2 h-4 w-4" />
              编辑角色
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-destructive"
              onClick={(e) => {
                e.stopPropagation();
                onDelete?.(role);
              }}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              删除角色
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <Users className="text-muted-foreground h-4 w-4" />
            <span className="text-muted-foreground">{role.usersCount} 位用户</span>
          </div>
          <Badge variant="secondary" className="text-xs">
            {role.permissions.length} 项权限
          </Badge>
        </div>
        <p className="text-muted-foreground mt-3 text-xs">
          创建于 {format(role.createdAt, "yyyy年M月d日", { locale: zhCN })}
        </p>
      </CardContent>
    </Card>
  );
}
