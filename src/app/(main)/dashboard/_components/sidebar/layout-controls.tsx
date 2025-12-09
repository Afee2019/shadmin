"use client";

import { Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { applyContentLayout, applyNavbarStyle, applySidebarVariant, applySidebarCollapsible } from "@/lib/layout-utils";
import { persistPreference } from "@/lib/preferences-storage";
import { applyThemeMode, applyThemePreset } from "@/lib/theme-utils";
import { usePreferencesStore } from "@/stores/preferences/preferences-provider";
import type { SidebarVariant, SidebarCollapsible, ContentLayout, NavbarStyle } from "@/types/preferences/layout";
import { THEME_PRESET_OPTIONS, type ThemePreset, type ThemeMode } from "@/types/preferences/theme";

type LayoutControlsProps = {
  readonly variant: SidebarVariant;
  readonly collapsible: SidebarCollapsible;
  readonly contentLayout: ContentLayout;
  readonly navbarStyle: NavbarStyle;
};

export function LayoutControls(props: LayoutControlsProps) {
  const { variant, collapsible, contentLayout, navbarStyle } = props;

  const themeMode = usePreferencesStore((s) => s.themeMode);
  const setThemeMode = usePreferencesStore((s) => s.setThemeMode);
  const themePreset = usePreferencesStore((s) => s.themePreset);
  const setThemePreset = usePreferencesStore((s) => s.setThemePreset);

  const onThemePresetChange = async (preset: ThemePreset) => {
    applyThemePreset(preset);
    setThemePreset(preset);
    persistPreference("theme_preset", preset);
  };

  const onThemeModeChange = async (mode: ThemeMode | "") => {
    if (!mode) return;
    applyThemeMode(mode);
    setThemeMode(mode);
    persistPreference("theme_mode", mode);
  };

  const onContentLayoutChange = async (layout: ContentLayout | "") => {
    if (!layout) return;
    applyContentLayout(layout);
  };

  const onNavbarStyleChange = async (style: NavbarStyle | "") => {
    if (!style) return;
    applyNavbarStyle(style);
  };

  const onSidebarStyleChange = async (value: SidebarVariant | "") => {
    if (!value) return;
    applySidebarVariant(value);
  };

  const onSidebarCollapseModeChange = async (value: SidebarCollapsible | "") => {
    if (!value) return;
    applySidebarCollapsible(value);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon">
          <Settings />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end">
        <div className="flex flex-col gap-5">
          <div className="space-y-1.5">
            <h4 className="text-sm leading-none font-medium">偏好设置</h4>
            <p className="text-muted-foreground text-xs">自定义仪表盘布局偏好。</p>
          </div>
          <div className="space-y-3 **:data-[slot=toggle-group]:w-full **:data-[slot=toggle-group-item]:flex-1 **:data-[slot=toggle-group-item]:text-xs">
            <div className="space-y-1">
              <Label className="text-xs font-medium">主题预设</Label>
              <Select value={themePreset} onValueChange={onThemePresetChange}>
                <SelectTrigger size="sm" className="w-full text-xs">
                  <SelectValue placeholder="选择预设" />
                </SelectTrigger>
                <SelectContent>
                  {THEME_PRESET_OPTIONS.map((preset) => (
                    <SelectItem key={preset.value} className="text-xs" value={preset.value}>
                      <span
                        className="size-2.5 rounded-full"
                        style={{
                          backgroundColor: themeMode === "dark" ? preset.primary.dark : preset.primary.light,
                        }}
                      />
                      {preset.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-medium">主题模式</Label>
              <ToggleGroup
                size="sm"
                variant="outline"
                type="single"
                value={themeMode}
                onValueChange={onThemeModeChange}
              >
                <ToggleGroupItem value="light" aria-label="切换浅色模式">
                  浅色
                </ToggleGroupItem>
                <ToggleGroupItem value="dark" aria-label="切换深色模式">
                  深色
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-medium">页面布局</Label>
              <ToggleGroup
                size="sm"
                variant="outline"
                type="single"
                value={contentLayout}
                onValueChange={onContentLayoutChange}
              >
                <ToggleGroupItem value="centered" aria-label="切换居中布局">
                  居中
                </ToggleGroupItem>
                <ToggleGroupItem value="full-width" aria-label="切换全宽布局">
                  全宽
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-medium">导航栏行为</Label>
              <ToggleGroup
                size="sm"
                variant="outline"
                type="single"
                value={navbarStyle}
                onValueChange={onNavbarStyleChange}
              >
                <ToggleGroupItem value="sticky" aria-label="切换固定">
                  固定
                </ToggleGroupItem>
                <ToggleGroupItem value="scroll" aria-label="切换滚动">
                  滚动
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-medium">侧边栏样式</Label>
              <ToggleGroup
                size="sm"
                variant="outline"
                type="single"
                value={variant}
                onValueChange={onSidebarStyleChange}
              >
                <ToggleGroupItem value="inset" aria-label="切换内嵌">
                  内嵌
                </ToggleGroupItem>
                <ToggleGroupItem value="sidebar" aria-label="切换侧边栏">
                  侧边栏
                </ToggleGroupItem>
                <ToggleGroupItem value="floating" aria-label="切换浮动">
                  浮动
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-medium">侧边栏折叠模式</Label>
              <ToggleGroup
                size="sm"
                variant="outline"
                type="single"
                value={collapsible}
                onValueChange={onSidebarCollapseModeChange}
              >
                <ToggleGroupItem value="icon" aria-label="切换图标模式">
                  图标
                </ToggleGroupItem>
                <ToggleGroupItem value="offcanvas" aria-label="切换抽屉模式">
                  抽屉
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
