"use client";

import { useState, useTransition } from "react";

import { MoreHorizontal } from "lucide-react";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { deleteUserAction } from "../_lib/actions";
import { type User } from "../_lib/store";

import { UserFormDialog } from "./user-form-dialog";

export function UserActionsCell({ user }: { user: User }) {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      const result = await deleteUserAction(user.id);
      if (result.ok) {
        toast.success(`已删除用户 ${user.name}`);
        setDeleteOpen(false);
      } else {
        toast.error(result.error);
      }
    });
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">打开操作菜单</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>操作</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.id)}>复制用户 ID</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setEditOpen(true)}>编辑用户</DropdownMenuItem>
          <DropdownMenuItem className="text-destructive" onClick={() => setDeleteOpen(true)}>
            删除用户
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <UserFormDialog open={editOpen} onOpenChange={setEditOpen} user={user} />

      <AlertDialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>确认删除？</AlertDialogTitle>
            <AlertDialogDescription>
              即将删除用户 <span className="text-foreground font-medium">{user.name}</span>（{user.email}
              ）。此操作无法撤销。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isPending}>取消</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} disabled={isPending}>
              {isPending ? "删除中..." : "确认删除"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
