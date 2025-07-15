import { zh } from "./locales/zh";
import { en } from "./locales/en";
import type { Translations } from "./types";
import type { Language } from "./context";

// Export all translations
export const translations: Record<Language, Translations> = {
  zh,
  en,
};
