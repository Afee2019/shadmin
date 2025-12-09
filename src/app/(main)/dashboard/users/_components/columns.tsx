"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { type User } from "./users-data";

const roleColors: Record<User["role"], string> = {
  管理员: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  编辑: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  用户: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  访客: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400",
};

const statusColors: Record<User["status"], string> = {
  活跃: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  待验证: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  已禁用: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
};

export const usersColumns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="全选"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="选择行"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="用户" />,
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{user.name}</div>
            <div className="text-muted-foreground text-sm">{user.email}</div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "role",
    header: ({ column }) => <DataTableColumnHeader column={column} title="角色" />,
    cell: ({ row }) => {
      const role = row.getValue("role");
      return (
        <Badge variant="secondary" className={roleColors[role]}>
          {role}
        </Badge>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="状态" />,
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <Badge variant="secondary" className={statusColors[status]}>
          {status}
        </Badge>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "department",
    header: ({ column }) => <DataTableColumnHeader column={column} title="部门" />,
    cell: ({ row }) => <div>{row.getValue("department")}</div>,
  },
  {
    accessorKey: "joinDate",
    header: ({ column }) => <DataTableColumnHeader column={column} title="加入日期" />,
    cell: ({ row }) => {
      const date = new Date(row.getValue("joinDate"));
      return <div>{date.toLocaleDateString("zh-CN")}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">打开菜单</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>操作</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.id)}>复制用户 ID</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>查看详情</DropdownMenuItem>
            <DropdownMenuItem>编辑用户</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">删除用户</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
