"use client";

import { setValueToCookie } from "@/server/server-actions";

import { PERSISTED_PREFERENCES, type PreferenceKey } from "./preferences-config";

export async function persistPreference(key: PreferenceKey, value: string) {
  // eslint-disable-next-line security/detect-object-injection -- key is typed as PreferenceKey union
  const shouldPersist = Object.prototype.hasOwnProperty.call(PERSISTED_PREFERENCES, key) && PERSISTED_PREFERENCES[key];
  if (!shouldPersist) return;

  await setValueToCookie(key, value);
}
