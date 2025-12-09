import { Table } from "@tanstack/react-table";
import { ChevronRight, ChevronsRight, ChevronLeft, ChevronsLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({ table }: DataTablePaginationProps<TData>) {
  return (
    <div className="flex flex-col gap-4 px-2 sm:flex-row sm:items-center sm:justify-between sm:px-4">
      {/* 移动端：显示简化的选择信息 */}
      <div className="text-muted-foreground text-center text-sm sm:text-left">
        <span className="sm:hidden">
          {table.getFilteredSelectedRowModel().rows.length > 0 && (
            <>已选 {table.getFilteredSelectedRowModel().rows.length} 行 · </>
          )}
          共 {table.getFilteredRowModel().rows.length} 行
        </span>
        <span className="hidden sm:inline">
          已选择 {table.getFilteredSelectedRowModel().rows.length} / {table.getFilteredRowModel().rows.length} 行
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-end sm:gap-6">
        {/* 每页行数选择器 - 移动端也显示 */}
        <div className="flex items-center gap-2">
          <Label htmlFor="rows-per-page" className="text-sm font-medium whitespace-nowrap">
            每页
          </Label>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger size="sm" className="w-16" id="rows-per-page">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* 页码显示 */}
        <div className="flex items-center justify-center text-sm font-medium whitespace-nowrap">
          {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
        </div>

        {/* 分页按钮 */}
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            className="hidden size-8 sm:flex"
            size="icon"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">转到第一页</span>
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="size-8"
            size="icon"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">上一页</span>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="size-8"
            size="icon"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">下一页</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="hidden size-8 sm:flex"
            size="icon"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">转到最后一页</span>
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
