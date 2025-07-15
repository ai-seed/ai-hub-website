import { useLanguage } from "./context";
import { translations } from "./translations";
import type { Translations, TranslationKey } from "./types";

// Helper function to get nested object value by path
function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Custom hook for translations
export const useTranslation = () => {
  const { language } = useLanguage();
  
  // Get the current language translations
  const t = (key: TranslationKey): any => {
    const value = getNestedValue(translations[language], key);
    if (value === undefined) {
      console.warn(`Translation key "${key}" not found for language "${language}"`);
      return key; // Return the key itself as fallback
    }
    return value;
  };

  // Get the current language translations object
  const getTranslations = (): Translations => {
    return translations[language];
  };

  return {
    t,
    language,
    translations: getTranslations(),
  };
};
