"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define the available languages
export type Language = "zh" | "en";

// Define the language context type
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

// Create the language context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: "zh",
  setLanguage: () => {},
});

// Create a provider component for the language context
interface LanguageProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
}

export const LanguageProvider = ({ children, defaultLanguage = "zh" }: LanguageProviderProps) => {
  // Initialize language state with the default language
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  // Detect browser language and load language preference from localStorage on component mount
  useEffect(() => {
    // Try to get language from localStorage first
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "zh" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
      return;
    }

    // If no saved preference, detect browser language
    try {
      const browserLang = navigator.language.toLowerCase();
      // Check if browser language starts with 'zh' (zh-CN, zh-TW, etc.)
      if (browserLang.startsWith('zh')) {
        setLanguage('zh');
      } else {
        // Default to English for all other languages
        setLanguage('en');
      }
    } catch (error) {
      console.error("Error detecting browser language:", error);
      // Fallback to default language
      setLanguage(defaultLanguage);
    }
  }, [defaultLanguage]);

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language);
    // Also update the html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  // Create the context value
  const contextValue: LanguageContextType = {
    language,
    setLanguage,
  };

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
};

// Create a custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
