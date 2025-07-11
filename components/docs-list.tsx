"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Search, Folder } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { DocMeta } from "@/lib/docs"

interface DocsListProps {
  lang: "zh" | "en"
  docs: DocMeta[]
}

const translations = {
  zh: {
    searchPlaceholder: "搜索文档...",
    categories: {
      "getting-started": "入门指南",
      "api-reference": "API参考",
      guides: "使用指南",
      examples: "代码示例",
      troubleshooting: "故障排除",
      uncategorized: "未分类",
    },
    noResults: "没有找到匹配的文档。",
  },
  en: {
    searchPlaceholder: "Search documentation...",
    categories: {
      "getting-started": "Getting Started",
      "api-reference": "API Reference",
      guides: "Guides",
      examples: "Examples",
      troubleshooting: "Troubleshooting",
      uncategorized: "Uncategorized",
    },
    noResults: "No matching documents found.",
  },
}

export default function DocsList({ lang, docs }: DocsListProps) {
  const t = translations[lang]
  const [searchTerm, setSearchTerm] = useState("")

  const filtered = docs.filter((doc) => {
    const q = searchTerm.toLowerCase()
    return (
      doc.title.toLowerCase().includes(q) ||
      doc.description.toLowerCase().includes(q) ||
      doc.tags.some((tg) => tg.toLowerCase().includes(q)) ||
      t.categories[doc.category as keyof typeof t.categories]?.toLowerCase().includes(q)
    )
  })

  const grouped = filtered.reduce(
    (acc, doc) => {
      const cat = t.categories[doc.category as keyof typeof t.categories] || t.categories.uncategorized
      ;(acc[cat] ||= []).push(doc)
      return acc
    },
    {} as Record<string, DocMeta[]>,
  )

  return (
    <>
      <div className="mt-8 max-w-md mx-auto relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <Input
          placeholder={t.searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10"
        />
      </div>

      <div className="pt-16">
        {Object.keys(grouped).length === 0 && <p className="text-center text-gray-600">{t.noResults}</p>}

        {Object.entries(grouped).map(([cat, list], i) => (
          <div key={cat} className="mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
            >
              <Folder className="w-6 h-6 mr-2 text-blue-600" />
              {cat}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {list.map((doc, j) => (
                <motion.div
                  key={doc.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 + j * 0.05 }}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <Link href={`/docs/${doc.slug}`} className="block p-6">
                    <h3 className="text-xl font-semibold mb-2">{doc.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{doc.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {doc.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
