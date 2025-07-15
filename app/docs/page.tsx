"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import DocsList from "@/components/docs-list"
import { Badge } from "@/components/ui/badge"
import { FileText } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

export default function DocsPage() {
  const { t } = useTranslation()
  const [docs, setDocs] = useState([])

  // 在客户端获取文档数据
  useEffect(() => {
    // 这里可以调用API获取文档数据，暂时使用空数组
    setDocs([])
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      <BreadcrumbNav currentPage={t("docs.title")} />
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-teal-600/5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <FileText className="mr-2 h-4 w-4" />
              {t("docs.title")}
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">{t("docs.title")}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">{t("docs.description")}</p>
          </div>
        </div>
      </section>
      {/* Docs list */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <DocsList docs={docs} />
        </div>
      </section>
      <Footer />
    </div>
  )
}
