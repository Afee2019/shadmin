"use client";

import { Moon, Sun } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { persistPreference } from "@/lib/preferences-storage";
import { applyThemeMode, applyThemePreset } from "@/lib/theme-utils";
import { cn } from "@/lib/utils";
import { usePreferencesStore } from "@/stores/preferences/preferences-provider";
import { THEME_PRESET_OPTIONS, type ThemeMode, type ThemePreset } from "@/types/preferences/theme";

export function AppearanceSettings() {
  const { themeMode, themePreset, setThemeMode, setThemePreset } = usePreferencesStore((state) => state);

  const handleThemeModeChange = (value: string) => {
    const newMode = value as ThemeMode;
    applyThemeMode(newMode);
    setThemeMode(newMode);
    persistPreference("theme_mode", newMode);
  };

  const handleThemePresetChange = (value: string) => {
    const newPreset = value as ThemePreset;
    applyThemePreset(newPreset);
    setThemePreset(newPreset);
    persistPreference("theme_preset", newPreset);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>外观设置</CardTitle>
        <CardDescription>自定义您的界面外观和主题</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* 主题模式 */}
        <div className="space-y-3">
          <Label className="text-muted-foreground text-sm font-semibold">主题模式</Label>
          <RadioGroup value={themeMode} onValueChange={handleThemeModeChange} className="grid grid-cols-2 gap-3">
            <Label
              htmlFor="theme-light"
              className={cn(
                "flex cursor-pointer flex-col items-center gap-2 rounded-lg border p-4 transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                themeMode === "light" && "border-primary bg-accent",
              )}
            >
              <RadioGroupItem value="light" id="theme-light" className="sr-only" />
              <Sun className="h-6 w-6" />
              <span className="text-sm font-medium">浅色</span>
            </Label>
            <Label
              htmlFor="theme-dark"
              className={cn(
                "flex cursor-pointer flex-col items-center gap-2 rounded-lg border p-4 transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                themeMode === "dark" && "border-primary bg-accent",
              )}
            >
              <RadioGroupItem value="dark" id="theme-dark" className="sr-only" />
              <Moon className="h-6 w-6" />
              <span className="text-sm font-medium">深色</span>
            </Label>
          </RadioGroup>
        </div>

        {/* 主题预设 */}
        <div className="space-y-3">
          <Label className="text-muted-foreground text-sm font-semibold">主题预设</Label>
          <RadioGroup
            value={themePreset}
            onValueChange={handleThemePresetChange}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3"
          >
            {THEME_PRESET_OPTIONS.map((preset) => (
              <Label
                key={preset.value}
                htmlFor={`preset-${preset.value}`}
                className={cn(
                  "flex cursor-pointer flex-col items-center gap-2 rounded-lg border p-4 transition-colors",
                  "hover:bg-accent hover:text-accent-foreground",
                  themePreset === preset.value && "border-primary bg-accent",
                )}
              >
                <RadioGroupItem value={preset.value} id={`preset-${preset.value}`} className="sr-only" />
                <div
                  className="ring-offset-background h-6 w-6 rounded-full ring-2 ring-offset-2"
                  style={{
                    backgroundColor: `oklch(${preset.primary.light})`,
                  }}
                />
                <span className="text-sm font-medium">{preset.label}</span>
              </Label>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
}
