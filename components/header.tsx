"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useLanguage, useTranslation } from "@/lib/i18n"
import LanguageSelector from "@/components/language-selector"

interface HeaderProps {
  // Optional props for backward compatibility
  lang?: "zh" | "en"
  setLang?: (lang: "zh" | "en") => void
}

export default function Header({}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useTranslation()

  // Navigation items using translations
  const navItems = [
    { name: t("navigation.home"), href: "/" },
    { name: t("navigation.features"), href: "/features" },
    { name: t("navigation.pricing"), href: "/pricing" },
    // { name: t("navigation.demo"), href: "/demo" }, // Temporarily removed as page does not exist
    { name: t("navigation.changelog"), href: "/changelog" },
    { name: t("navigation.docs"), href: "/docs" },
  ]

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold text-gray-900">API Hub</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    pathname === item.href ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <LanguageSelector />

            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost">{t("common.signIn")}</Button>
              <Button>{t("common.signUp")}</Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-lg font-medium transition-colors ${
                        pathname === item.href ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t space-y-4">
                    <div className="flex justify-center">
                      <LanguageSelector />
                    </div>
                    <div className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start">
                        {t("common.signIn")}
                      </Button>
                      <Button className="w-full">{t("common.signUp")}</Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
