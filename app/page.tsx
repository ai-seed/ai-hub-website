"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Zap, Code, Sparkles, Play, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import StatsSection from "@/components/stats-section"
import PartnersSection from "@/components/partners-section"
import Footer from "@/components/footer"

const translations = {
  zh: {
    hero: {
      title: "强大的AI API服务平台",
      subtitle: "按需付费，无需订阅",
      description: "提供最先进的AI工具和API服务，支持多种AI模型，按实际使用量计费，让您的应用快速集成AI能力。",
      cta: "立即开始",
      demo: "查看演示",
    },
    quickStart: {
      title: "快速开始",
      subtitle: "三步即可集成AI能力",
      steps: [
        {
          title: "注册账户",
          description: "免费注册并获取API密钥",
          icon: "1",
        },
        {
          title: "选择模型",
          description: "从多种AI模型中选择最适合的",
          icon: "2",
        },
        {
          title: "开始调用",
          description: "使用简单的API调用集成AI功能",
          icon: "3",
        },
      ],
    },
    features: {
      title: "核心优势",
      subtitle: "为什么选择我们的AI API服务",
      items: [
        {
          title: "高性能",
          description: "毫秒级响应，99.9%可用性",
          icon: Zap,
        },
        {
          title: "按量付费",
          description: "只为实际使用付费，无隐藏费用",
          icon: TrendingUp,
        },
        {
          title: "开发友好",
          description: "完整SDK支持，详细文档",
          icon: Code,
        },
      ],
    },
    cta: {
      title: "准备好开始了吗？",
      description: "立即注册，获取免费API调用额度",
      button: "免费开始",
    },
  },
  en: {
    hero: {
      title: "Powerful AI API Platform",
      subtitle: "Pay-as-you-go, No Subscription",
      description:
        "Access cutting-edge AI tools and APIs with multiple AI models. Pay only for what you use and integrate AI capabilities into your applications quickly.",
      cta: "Get Started",
      demo: "View Demo",
    },
    quickStart: {
      title: "Quick Start",
      subtitle: "Integrate AI capabilities in three steps",
      steps: [
        {
          title: "Sign Up",
          description: "Register for free and get your API key",
          icon: "1",
        },
        {
          title: "Choose Model",
          description: "Select the most suitable AI model",
          icon: "2",
        },
        {
          title: "Start Calling",
          description: "Integrate AI features with simple API calls",
          icon: "3",
        },
      ],
    },
    features: {
      title: "Core Advantages",
      subtitle: "Why choose our AI API service",
      items: [
        {
          title: "High Performance",
          description: "Millisecond response, 99.9% uptime",
          icon: Zap,
        },
        {
          title: "Pay-as-you-go",
          description: "Pay only for actual usage, no hidden fees",
          icon: TrendingUp,
        },
        {
          title: "Developer Friendly",
          description: "Complete SDK support, detailed documentation",
          icon: Code,
        },
      ],
    },
    cta: {
      title: "Ready to Get Started?",
      description: "Sign up now and get free API credits",
      button: "Start Free",
    },
  },
}

export default function HomePage() {
  const [lang, setLang] = useState<"zh" | "en">("zh")
  const t = translations[lang]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header lang={lang} setLang={setLang} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-teal-600/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge variant="secondary" className="mb-4 px-4 py-2">
                <Sparkles className="mr-2 h-4 w-4" />
                {t.hero.subtitle}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                {t.hero.title}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">{t.hero.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Button size="lg" className="group" asChild>
                <Link href="/pricing">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/demo">
                  <Play className="mr-2 h-4 w-4" />
                  {t.hero.demo}
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}>
            <Zap className="h-8 w-8 text-blue-500" />
          </motion.div>
        </div>
        <div className="absolute top-32 right-16 opacity-20">
          <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}>
            <Code className="h-6 w-6 text-purple-500" />
          </motion.div>
        </div>
      </section>

      <StatsSection lang={lang} />

      {/* Quick Start Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t.quickStart.title}</h2>
            <p className="mt-4 text-lg text-gray-600">{t.quickStart.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.quickStart.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">{step.icon}</span>
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{step.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t.features.title}</h2>
            <p className="mt-4 text-lg text-gray-600">{t.features.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {t.features.items.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Button variant="outline" size="lg" asChild>
              <Link href="/features">
                {lang === "zh" ? "了解更多功能" : "Learn More Features"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <PartnersSection lang={lang} />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{t.cta.title}</h2>
            <p className="mt-4 text-xl text-blue-100">{t.cta.description}</p>
            <Button size="lg" variant="secondary" className="mt-8" asChild>
              <Link href="/pricing">
                {t.cta.button}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  )
}
