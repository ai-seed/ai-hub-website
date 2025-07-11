"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Globe, Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface HeaderProps {
  lang: "zh" | "en"
  setLang?: (lang: "zh" | "en") => void
}

const navItems = {
  zh: [
    { name: "首页", href: "/" },
    { name: "产品", href: "/features" },
    { name: "定价", href: "/pricing" },
    // { name: "演示", href: "/demo" }, // 暂时移除，因为页面不存在
    { name: "更新日志", href: "/changelog" },
    { name: "文档", href: "/docs" },
  ],
  en: [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    // { name: "Demo", href: "/demo" }, // Temporarily removed as page does not exist
    { name: "Changelog", href: "/changelog" },
    { name: "Docs", href: "/docs" },
  ],
}

export default function Header({ lang, setLang }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

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
            {navItems[lang].map((item, index) => (
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
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLang?.(lang === "zh" ? "en" : "zh")}
              className="flex items-center space-x-1"
            >
              <Globe className="h-4 w-4" />
              <span>{lang === "zh" ? "EN" : "中文"}</span>
            </Button>

            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost">{lang === "zh" ? "登录" : "Sign In"}</Button>
              <Button>{lang === "zh" ? "注册" : "Sign Up"}</Button>
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
                  {navItems[lang].map((item) => (
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
                  <div className="pt-4 border-t">
                    <Button variant="ghost" className="w-full justify-start">
                      {lang === "zh" ? "登录" : "Sign In"}
                    </Button>
                    <Button className="w-full mt-2">{lang === "zh" ? "注册" : "Sign Up"}</Button>
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
