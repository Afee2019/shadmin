"use client";

import { useEffect, useState, useTransition } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { createUserAction, updateUserAction } from "../_lib/actions";
import { userFormSchema, userRoles, userStatuses, type User, type UserFormInput } from "../_lib/store";

const departments = ["技术部", "产品部", "设计部", "市场部", "运营部", "财务部", "人事部", "客服部"];

type UserFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user?: User;
};

const emptyDefaults: UserFormInput = {
  name: "",
  email: "",
  role: "用户",
  status: "活跃",
  department: "技术部",
};

export function UserFormDialog({ open, onOpenChange, user }: UserFormDialogProps) {
  const isEdit = !!user;
  const [isPending, startTransition] = useTransition();

  const form = useForm<UserFormInput>({
    resolver: zodResolver(userFormSchema),
    defaultValues: user
      ? { name: user.name, email: user.email, role: user.role, status: user.status, department: user.department }
      : emptyDefaults,
  });

  useEffect(() => {
    if (open) {
      form.reset(
        user
          ? { name: user.name, email: user.email, role: user.role, status: user.status, department: user.department }
          : emptyDefaults,
      );
    }
  }, [open, user, form]);

  const onSubmit = form.handleSubmit((data) => {
    startTransition(async () => {
      const result = isEdit ? await updateUserAction(user.id, data) : await createUserAction(data);
      if (result.ok) {
        toast.success(isEdit ? "用户已更新" : "用户已创建");
        onOpenChange(false);
      } else {
        toast.error(result.error);
      }
    });
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle>{isEdit ? "编辑用户" : "添加用户"}</DialogTitle>
          <DialogDescription>
            {isEdit ? "修改用户信息，保存后立即生效。" : "填写用户基本信息以创建账户。"}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>姓名</FormLabel>
                  <FormControl>
                    <Input placeholder="请输入姓名" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>邮箱</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="user@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>角色</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {userRoles.map((r) => (
                          <SelectItem key={r} value={r}>
                            {r}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>状态</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {userStatuses.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>部门</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {departments.map((d) => (
                        <SelectItem key={d} value={d}>
                          {d}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isPending}>
                取消
              </Button>
              <Button type="submit" disabled={isPending}>
                {isPending ? "保存中..." : isEdit ? "保存修改" : "创建用户"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
