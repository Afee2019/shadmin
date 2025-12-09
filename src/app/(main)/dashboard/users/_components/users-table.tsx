"use client";

import { Download, Plus, Search } from "lucide-react";

import { DataTable } from "@/components/data-table/data-table";
import { DataTablePagination } from "@/components/data-table/data-table-pagination";
import { DataTableViewOptions } from "@/components/data-table/data-table-view-options";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useDataTableInstance } from "@/hooks/use-data-table-instance";

import { usersColumns } from "./columns";
import { usersData } from "./users-data";

export function UsersTable() {
  const table = useDataTableInstance({
    data: usersData,
    columns: usersColumns,
    getRowId: (row) => row.id,
  });

  return (
    <Card>
      <CardHeader className="flex-col gap-4 space-y-0 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <CardTitle>用户列表</CardTitle>
          <CardDescription>管理系统中的所有用户账户</CardDescription>
        </div>
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
          <div className="relative w-full sm:w-[200px]">
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              placeholder="搜索用户..."
              value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
              onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
              className="w-full pl-9"
            />
          </div>
          <div className="flex items-center gap-2">
            <DataTableViewOptions table={table} />
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4" />
              <span className="hidden lg:inline">导出</span>
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4" />
              <span className="hidden lg:inline">添加用户</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex size-full flex-col gap-4">
        <div className="overflow-hidden rounded-md border">
          <DataTable table={table} columns={usersColumns} />
        </div>
        <DataTablePagination table={table} />
      </CardContent>
    </Card>
  );
}
