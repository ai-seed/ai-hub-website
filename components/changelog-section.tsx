"use client"

import { motion } from "framer-motion"
import { Plus, Zap, Bug, ArrowUp, Calendar, Tag } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage, useTranslation } from "@/lib/i18n"

interface ChangelogSectionProps {
  // Optional props for backward compatibility
  lang?: "zh" | "en"
}

const changelogData = {
  zh: {
    title: "产品更新日志",
    subtitle: "了解我们最新的功能更新和改进",
    updates: [
      {
        version: "v2.4.0",
        date: "2024-01-15",
        type: "major",
        title: "GPT-4 Turbo 模型上线",
        description: "新增支持 OpenAI 最新的 GPT-4 Turbo 模型，性能提升 40%，成本降低 50%",
        changes: [
          { type: "new", text: "支持 GPT-4 Turbo 模型" },
          { type: "new", text: "新增批量处理 API" },
          { type: "improvement", text: "响应速度提升 40%" },
          { type: "improvement", text: "API 调用成本降低 50%" },
        ],
      },
      {
        version: "v2.3.2",
        date: "2024-01-08",
        type: "minor",
        title: "性能优化与错误修复",
        description: "修复了多个已知问题，优化了系统性能和稳定性",
        changes: [
          { type: "fix", text: "修复图像生成偶尔超时的问题" },
          { type: "fix", text: "解决语音识别中文支持问题" },
          { type: "improvement", text: "优化 API 文档搜索功能" },
          { type: "improvement", text: "提升控制台加载速度" },
        ],
      },
      {
        version: "v2.3.0",
        date: "2024-01-01",
        type: "major",
        title: "多模态 AI 能力发布",
        description: "全新推出图像理解、视频分析等多模态 AI 功能",
        changes: [
          { type: "new", text: "图像理解和分析 API" },
          { type: "new", text: "视频内容识别功能" },
          { type: "new", text: "文档智能解析服务" },
          { type: "improvement", text: "升级用户控制台界面" },
        ],
      },
      {
        version: "v2.2.1",
        date: "2023-12-20",
        type: "patch",
        title: "安全性增强",
        description: "加强了 API 安全防护，新增多项安全特性",
        changes: [
          { type: "new", text: "API 密钥轮换功能" },
          { type: "improvement", text: "增强请求频率限制" },
          { type: "fix", text: "修复潜在的安全漏洞" },
        ],
      },
    ],
  },
  en: {
    title: "Product Changelog",
    subtitle: "Stay updated with our latest features and improvements",
    updates: [
      {
        version: "v2.4.0",
        date: "2024-01-15",
        type: "major",
        title: "GPT-4 Turbo Model Launch",
        description:
          "Added support for OpenAI's latest GPT-4 Turbo model with 40% better performance and 50% cost reduction",
        changes: [
          { type: "new", text: "GPT-4 Turbo model support" },
          { type: "new", text: "Batch processing API" },
          { type: "improvement", text: "40% faster response times" },
          { type: "improvement", text: "50% lower API costs" },
        ],
      },
      {
        version: "v2.3.2",
        date: "2024-01-08",
        type: "minor",
        title: "Performance Optimization & Bug Fixes",
        description: "Fixed multiple known issues and improved system performance and stability",
        changes: [
          { type: "fix", text: "Fixed occasional image generation timeouts" },
          { type: "fix", text: "Resolved Chinese language support in speech recognition" },
          { type: "improvement", text: "Enhanced API documentation search" },
          { type: "improvement", text: "Improved console loading speed" },
        ],
      },
      {
        version: "v2.3.0",
        date: "2024-01-01",
        type: "major",
        title: "Multimodal AI Capabilities Release",
        description: "Launched new multimodal AI features including image understanding and video analysis",
        changes: [
          { type: "new", text: "Image understanding and analysis API" },
          { type: "new", text: "Video content recognition" },
          { type: "new", text: "Intelligent document parsing service" },
          { type: "improvement", text: "Upgraded user console interface" },
        ],
      },
      {
        version: "v2.2.1",
        date: "2023-12-20",
        type: "patch",
        title: "Security Enhancements",
        description: "Strengthened API security protection with multiple new security features",
        changes: [
          { type: "new", text: "API key rotation feature" },
          { type: "improvement", text: "Enhanced rate limiting" },
          { type: "fix", text: "Fixed potential security vulnerabilities" },
        ],
      },
    ],
  },
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case "new":
      return Plus
    case "improvement":
      return ArrowUp
    case "fix":
      return Bug
    default:
      return Zap
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "new":
      return "bg-green-100 text-green-800"
    case "improvement":
      return "bg-blue-100 text-blue-800"
    case "fix":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getVersionBadgeColor = (type: string) => {
  switch (type) {
    case "major":
      return "bg-purple-500"
    case "minor":
      return "bg-blue-500"
    case "patch":
      return "bg-green-500"
    default:
      return "bg-gray-500"
  }
}

export default function ChangelogSection({ lang: propLang }: ChangelogSectionProps) {
  const { language } = useLanguage()
  const lang = propLang || language
  const data = changelogData[lang]

  return (
    <section id="changelog" className="py-16 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{data.title}</h2>
          <p className="mt-4 text-lg text-gray-600">{data.subtitle}</p>
        </motion.div>

        <div className="space-y-8">
          {data.updates.map((update, index) => (
            <motion.div
              key={update.version}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center space-x-3">
                      <Badge className={`${getVersionBadgeColor(update.type)} text-white`}>
                        <Tag className="w-3 h-3 mr-1" />
                        {update.version}
                      </Badge>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {update.date}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl mt-2">{update.title}</CardTitle>
                  <CardDescription className="text-gray-600">{update.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    {update.changes.map((change, changeIndex) => {
                      const IconComponent = getTypeIcon(change.type)
                      return (
                        <motion.div
                          key={changeIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: changeIndex * 0.05 }}
                          className="flex items-start space-x-3"
                        >
                          <div className={`p-1 rounded-full ${getTypeColor(change.type)}`}>
                            <IconComponent className="w-3 h-3" />
                          </div>
                          <span className="text-gray-700 text-sm leading-relaxed">{change.text}</span>
                        </motion.div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-sm">
            <Zap className="w-4 h-4 mr-2" />
            {lang === "zh" ? "关注我们的更新，获取最新功能通知" : "Follow our updates to get notified of new features"}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
