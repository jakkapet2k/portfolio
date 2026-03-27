import enMessages from "@/public/assets/lang/en.json";
import thMessages from "@/public/assets/lang/th.json";

export const LOCALES = ["en", "th"] as const;
export type Locale = (typeof LOCALES)[number];
export type Messages = typeof enMessages;

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_STORAGE_KEY = "portfolio-locale";

const dictionaries: Record<Locale, Messages> = {
  en: enMessages,
  th: thMessages,
};

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "th";
}

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale] ?? dictionaries.en;
}

export function getNextLocale(locale: Locale): Locale {
  return locale === "en" ? "th" : "en";
}

export function translate(messages: Messages, key: string): string {
  const value = key.split(".").reduce<unknown>((current, part) => {
    if (!current || typeof current !== "object") {
      return undefined;
    }

    return (current as Record<string, unknown>)[part];
  }, messages);

  return typeof value === "string" ? value : key;
}
