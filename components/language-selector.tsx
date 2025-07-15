"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { CNFlag, USFlag, WorldIcon } from "@/components/icons/flags";
import { Button } from "@/components/ui/button";

interface LanguageOption {
  code: "zh" | "en";
  name: string;
  nativeName: string;
  flag: React.ComponentType<any>;
}

const languages: LanguageOption[] = [
  {
    code: "zh",
    name: "Chinese",
    nativeName: "中文",
    flag: CNFlag,
  },
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: USFlag,
  },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find((lang) => lang.code === language);

  const handleLanguageChange = (langCode: "zh" | "en") => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Select language"
      >
        <WorldIcon className="h-4 w-4 text-gray-600" />
        {currentLanguage && (
          <>
            <currentLanguage.flag className="h-4 w-4 rounded-sm" />
            <span className="text-sm font-medium text-gray-700">
              {currentLanguage.nativeName}
            </span>
          </>
        )}
        <ChevronDown
          className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
            >
              {languages.map((lang) => {
                const isSelected = lang.code === language;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                      isSelected ? "bg-blue-50" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <lang.flag className="h-5 w-5 rounded-sm shadow-sm" />
                      <div className="flex flex-col">
                        <span
                          className={`text-sm font-medium ${
                            isSelected ? "text-blue-600" : "text-gray-900"
                          }`}
                        >
                          {lang.nativeName}
                        </span>
                        <span className="text-xs text-gray-500">
                          {lang.name}
                        </span>
                      </div>
                    </div>
                    {isSelected && (
                      <Check className="h-4 w-4 text-blue-600" />
                    )}
                  </button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
