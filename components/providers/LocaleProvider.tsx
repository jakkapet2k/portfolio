"use client";

import {
  DEFAULT_LOCALE,
  getMessages,
  getNextLocale,
  LOCALE_STORAGE_KEY,
  type Locale,
  type Messages,
  translate,
  isLocale,
} from "@/lib/i18n/service";
import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";

type LocaleContextValue = {
  locale: Locale;
  messages: Messages;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === "undefined") {
    return DEFAULT_LOCALE;
  }

  const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return isLocale(storedLocale) ? storedLocale : DEFAULT_LOCALE;
}

function subscribeLocale(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const handleChange = () => onStoreChange();

  window.addEventListener("storage", handleChange);
  window.addEventListener("portfolio-locale-change", handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener("portfolio-locale-change", handleChange);
  };
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribeLocale, readStoredLocale, () => DEFAULT_LOCALE);
  const messages = useMemo<Messages>(() => getMessages(locale), [locale]);

  const setLocale = (nextLocale: Locale) => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
    window.dispatchEvent(new Event("portfolio-locale-change"));
  };

  useEffect(() => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      messages,
      setLocale,
      toggleLocale: () => setLocale(getNextLocale(locale)),
      t: (key) => translate(messages, key),
    }),
    [locale, messages],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }

  return context;
}
