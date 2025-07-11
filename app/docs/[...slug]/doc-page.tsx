"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Calendar, Tag, BookOpen, Search } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import MarkdownRenderer from "@/components/markdown-renderer"
import type { DocData, DocMeta } from "@/lib/docs"
import { Input } from "@/components/ui/input"

interface DocPageProps {
  docData: DocData
  allDocs: DocMeta[]
}

const translations = {
  zh: {
    backToDocs: "返回文档列表",
    lastUpdated: "最后更新",
    tableOfContents: "目录",
    relatedDocs: "相关文档",
    searchDocs: "搜索文档...",
    categories: {
      "getting-started": "入门指南",
      "api-reference": "API参考",
      guides: "使用指南",
      examples: "代码示例",
      troubleshooting: "故障排除",
      uncategorized: "未分类",
    },
  },
  en: {
    backToDocs: "Back to Docs List",
    lastUpdated: "Last Updated",
    tableOfContents: "Table of Contents",
    relatedDocs: "Related Documents",
    searchDocs: "Search docs...",
    categories: {
      "getting-started": "Getting Started",
      "api-reference": "API Reference",
      guides: "Guides",
      examples: "Examples",
      troubleshooting: "Troubleshooting",
      uncategorized: "Uncategorized",
    },
  },
}

export default function DocPage({ docData, allDocs }: DocPageProps) {
  const [lang, setLang] = useState<"zh" | "en">("zh")
  const t = translations[lang]
  const [searchTerm, setSearchTerm] = useState("")
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])

  useEffect(() => {
    // Extract headings for Table of Contents
    const contentElement = document.getElementById("doc-content")
    if (contentElement) {
      const hElements = Array.from(contentElement.querySelectorAll("h1, h2, h3, h4, h5, h6")) as HTMLElement[]
      const extractedHeadings = hElements.map((h) => ({
        id: h.id,
        text: h.innerText,
        level: Number.parseInt(h.tagName.substring(1)),
      }))
      setHeadings(extractedHeadings)
    }
  }, [docData.contentHtml])

  const related = allDocs
    .filter(
      (d) =>
        d.slug !== docData.slug && (d.category === docData.category || d.tags.some((t) => docData.tags.includes(t))),
    )
    .filter(
      (d) =>
        d.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .slice(0, 5)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header lang={lang} setLang={setLang} />
      <BreadcrumbNav lang={lang} currentPage={docData.title} pathSegments={docData.slug.split("/")} />

      <section className="relative overflow-hidden pt-8 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-teal-600/5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Link href="/docs" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.backToDocs}
            </Link>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">{docData.title}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">{docData.description}</p>
            <div className="mt-4 flex items-center justify-center space-x-4 text-gray-500 text-sm">
              {docData.lastUpdated && (
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {t.lastUpdated}: {docData.lastUpdated}
                </span>
              )}
              {docData.tags && docData.tags.length > 0 && (
                <span className="flex items-center">
                  <Tag className="w-4 h-4 mr-1" />
                  {docData.tags.join(", ")}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Adjusted Grid Layout: 1 (TOC) + 3 (Content) + 1 (Related) = 5 columns */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left Sidebar for Table of Contents */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-1 hidden lg:block sticky top-20 h-[calc(100vh-80px)] overflow-y-auto pr-4"
        >
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              {t.tableOfContents}
            </h3>
            <nav>
              <ul className="space-y-2">
                {headings.map((heading) => (
                  <li
                    key={heading.id}
                    className={`text-gray-600 hover:text-blue-600 transition-colors ${
                      heading.level === 2
                        ? "ml-0 font-medium"
                        : heading.level === 3
                          ? "ml-4 text-sm"
                          : heading.level === 4
                            ? "ml-8 text-sm"
                            : ""
                    }`}
                  >
                    <a href={`#${heading.id}`} className="block">
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </motion.aside>

        {/* Main Content - now spans 3 columns */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3 bg-white p-8 rounded-lg shadow-lg border border-gray-200"
          id="doc-content"
        >
          <MarkdownRenderer contentHtml={docData.contentHtml} />
        </motion.main>

        {/* Right Sidebar for Related Docs */}
        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-1 sticky top-20 h-[calc(100vh-80px)] overflow-y-auto pl-4"
        >
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Search className="w-5 h-5 mr-2" />
              {t.searchDocs}
            </h3>
            <Input
              type="text"
              placeholder={t.searchDocs}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>

          {related.length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.relatedDocs}</h3>
              <ul className="space-y-3">
                {related.map((doc) => (
                  <li key={doc.slug}>
                    <Link href={`/docs/${doc.slug}`} className="block text-blue-600 hover:underline text-sm">
                      {doc.title}
                    </Link>
                    <p className="text-gray-600 text-xs line-clamp-2">{doc.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.aside>
      </div>

      <Footer lang={lang} />
    </div>
  )
}
