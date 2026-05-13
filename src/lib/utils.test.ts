import { describe, expect, it } from "vitest";

import { cn, formatCurrency, getInitials } from "./utils";

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("drops falsy values", () => {
    const falsy: false | string = false;
    expect(cn("a", falsy && "b", undefined, null, "c")).toBe("a c");
  });

  it("resolves Tailwind conflicts via tailwind-merge", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
    expect(cn("text-sm text-base")).toBe("text-base");
  });
});

describe("getInitials", () => {
  it("returns first letter of single word", () => {
    expect(getInitials("Shawn")).toBe("S");
  });

  it("returns first letters of multi-word strings, uppercased", () => {
    expect(getInitials("ada lovelace")).toBe("AL");
    expect(getInitials("Grace Hopper Cooper")).toBe("GHC");
  });

  it("collapses internal whitespace", () => {
    expect(getInitials("john   doe")).toBe("JD");
  });

  it('returns "?" for empty / whitespace / non-string', () => {
    expect(getInitials("")).toBe("?");
    expect(getInitials("   ")).toBe("?");
    expect(getInitials(undefined as unknown as string)).toBe("?");
  });
});

describe("formatCurrency", () => {
  it("formats with default USD / en-US", () => {
    expect(formatCurrency(1234.5)).toBe("$1,234.50");
  });

  it("respects noDecimals", () => {
    expect(formatCurrency(1234.5, { noDecimals: true })).toBe("$1,235");
  });

  it("supports custom locale + currency", () => {
    const formatted = formatCurrency(1234.5, { currency: "CNY", locale: "zh-CN" });
    // 不同 ICU 版本对 ￥ vs ¥ 的全/半角输出可能略有差异——只断言数字部分
    expect(formatted).toMatch(/1[,，]234\.50/);
  });
});
