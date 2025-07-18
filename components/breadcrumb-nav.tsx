"use client"

import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import { useLanguage, useTranslation } from "@/lib/i18n"

interface BreadcrumbNavProps {
  // Optional props for backward compatibility
  lang?: "zh" | "en"
  currentPage?: string
  pathSegments?: string[] // 这个 prop 目前在组件内部没有被使用，但保留其定义
}

export default function BreadcrumbNav({ lang: propLang, currentPage, pathSegments }: BreadcrumbNavProps) {
  const { language } = useLanguage()
  const { t } = useTranslation()

  // Use context language if no prop is provided
  const lang = propLang || language

  // 注意：当前的 breadcrumbs 逻辑只使用了 currentPage，没有利用 pathSegments 来构建多级路径。
  // 如果需要更复杂的面包屑，需要修改此处的逻辑。
  const homeName = lang === "zh" ? "首页" : "Home"
  const items = [
    { name: homeName, href: "/", current: !currentPage },
    ...(currentPage ? [{ name: currentPage, href: "#", current: true }] : []),
  ]

  return (
    <nav className="pt-20 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        {items.map((item, index) => (
          <li key={item.name} className="flex items-center">
            {index > 0 && <ChevronRight className="h-4 w-4 mx-2 text-gray-400" aria-hidden="true" />}
            {index === 0 && <Home className="h-4 w-4 mr-1" aria-hidden="true" />}
            {item.current ? (
              <span className="font-medium text-gray-900" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-gray-700 transition-colors">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
