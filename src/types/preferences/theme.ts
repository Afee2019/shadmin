export const THEME_MODE_OPTIONS = [
  {
    label: "Light",
    value: "light",
  },
  {
    label: "Dark",
    value: "dark",
  },
] as const;

export const THEME_MODE_VALUES = THEME_MODE_OPTIONS.map((m) => m.value);

export type ThemeMode = (typeof THEME_MODE_VALUES)[number];

// --- generated:themePresets:start ---

export const THEME_PRESET_OPTIONS = [
  {
    label: "Default",
    value: "default",
    primary: {
      light: "oklch(0.205 0 0)",
      dark: "oklch(0.922 0 0)",
    },
  },
  {
    label: "Brutalist",
    value: "brutalist",
    primary: {
      light: "oklch(0.6489 0.237 26.9728)",
      dark: "oklch(0.7044 0.1872 23.1858)",
    },
  },
  {
    label: "樱桃",
    value: "cherry",
    primary: {
      light: "oklch(0.5 0.2 15)",
      dark: "oklch(0.6 0.18 15)",
    },
  },
  {
    label: "森林",
    value: "forest",
    primary: {
      light: "oklch(0.55 0.16 145)",
      dark: "oklch(0.65 0.14 145)",
    },
  },
  {
    label: "薰衣草",
    value: "lavender",
    primary: {
      light: "oklch(0.58 0.18 285)",
      dark: "oklch(0.68 0.15 285)",
    },
  },
  {
    label: "午夜",
    value: "midnight",
    primary: {
      light: "oklch(0.48 0.2 250)",
      dark: "oklch(0.62 0.18 250)",
    },
  },
  {
    label: "薄荷",
    value: "mint",
    primary: {
      light: "oklch(0.6 0.15 165)",
      dark: "oklch(0.65 0.12 165)",
    },
  },
  {
    label: "海洋",
    value: "ocean",
    primary: {
      light: "oklch(0.55 0.18 230)",
      dark: "oklch(0.65 0.15 230)",
    },
  },
  {
    label: "玫瑰",
    value: "rose",
    primary: {
      light: "oklch(0.62 0.2 350)",
      dark: "oklch(0.72 0.16 350)",
    },
  },
  {
    label: "Soft Pop",
    value: "soft-pop",
    primary: {
      light: "oklch(0.5106 0.2301 276.9656)",
      dark: "oklch(0.6801 0.1583 276.9349)",
    },
  },
  {
    label: "日落",
    value: "sunset",
    primary: {
      light: "oklch(0.65 0.2 35)",
      dark: "oklch(0.72 0.18 35)",
    },
  },
  {
    label: "Tangerine",
    value: "tangerine",
    primary: {
      light: "oklch(0.64 0.17 36.44)",
      dark: "oklch(0.64 0.17 36.44)",
    },
  },
] as const;

export const THEME_PRESET_VALUES = THEME_PRESET_OPTIONS.map((p) => p.value);

export type ThemePreset = (typeof THEME_PRESET_OPTIONS)[number]["value"];

// --- generated:themePresets:end ---
