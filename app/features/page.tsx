"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import FeaturesSection from "@/components/features-section"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import Footer from "@/components/footer"

const translations = {
  zh: {
    title: "产品功能",
    subtitle: "了解我们强大的AI API功能特性",
    description:
      "我们提供全面的AI API解决方案，涵盖文本生成、图像处理、语音服务等多个领域，助力您的应用快速集成AI能力。",
    backToHome: "返回首页",
  },
  en: {
    title: "Product Features",
    subtitle: "Discover our powerful AI API capabilities",
    description:
      "We provide comprehensive AI API solutions covering text generation, image processing, speech services, and more, helping your applications quickly integrate AI capabilities.",
    backToHome: "Back to Home",
  },
}

export default function FeaturesPage() {
  const [lang, setLang] = useState<"zh" | "en">("zh")
  const t = translations[lang]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header lang={lang} setLang={setLang} />

      <BreadcrumbNav lang={lang} currentPage={lang === "zh" ? "产品功能" : "Features"} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-teal-600/5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.backToHome}
            </Link>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">{t.title}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">{t.description}</p>
          </motion.div>
        </div>
      </section>

      <FeaturesSection lang={lang} />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {lang === "zh" ? "准备好体验这些功能了吗？" : "Ready to Experience These Features?"}
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              {lang === "zh" ? "立即注册，开始使用我们的AI API服务" : "Sign up now and start using our AI API services"}
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/pricing">{lang === "zh" ? "查看定价" : "View Pricing"}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
                asChild
              >
                <Link href="/demo">{lang === "zh" ? "在线演示" : "Live Demo"}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  )
}
