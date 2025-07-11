"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Calculator } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import PricingSection from "@/components/pricing-section"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import Footer from "@/components/footer"

const translations = {
  zh: {
    title: "定价方案",
    subtitle: "透明的按量计费，只为您实际使用的服务付费",
    description: "我们提供灵活的按量付费模式，无需订阅费用，让您可以根据实际需求灵活使用AI服务。",
    backToHome: "返回首页",
    calculator: "成本计算器",
  },
  en: {
    title: "Pricing Plans",
    subtitle: "Transparent pay-as-you-go pricing, pay only for what you use",
    description:
      "We offer flexible pay-as-you-go pricing with no subscription fees, allowing you to use AI services flexibly based on your actual needs.",
    backToHome: "Back to Home",
    calculator: "Cost Calculator",
  },
}

export default function PricingPage() {
  const [lang, setLang] = useState<"zh" | "en">("zh")
  const t = translations[lang]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header lang={lang} setLang={setLang} />

      <BreadcrumbNav lang={lang} currentPage={lang === "zh" ? "定价" : "Pricing"} />

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

            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <Calculator className="mr-2 h-4 w-4" />
              {t.calculator}
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">{t.title}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">{t.description}</p>
          </motion.div>
        </div>
      </section>

      <PricingSection lang={lang} />

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {lang === "zh" ? "常见问题" : "Frequently Asked Questions"}
            </h2>
          </motion.div>

          <div className="space-y-8">
            {(lang === "zh"
              ? [
                  {
                    question: "如何计费？",
                    answer: "我们采用按量计费模式，根据您实际使用的API调用次数和数据量进行计费，无最低消费要求。",
                  },
                  {
                    question: "是否有免费额度？",
                    answer: "是的，所有新用户注册后可获得¥50的免费使用额度，足够您测试和评估我们的服务。",
                  },
                  {
                    question: "支持哪些支付方式？",
                    answer: "我们支持支付宝、微信支付、银行卡等多种支付方式，同时支持企业对公转账。",
                  },
                ]
              : [
                  {
                    question: "How is billing calculated?",
                    answer:
                      "We use a pay-as-you-go billing model based on your actual API calls and data usage, with no minimum spending requirements.",
                  },
                  {
                    question: "Is there a free tier?",
                    answer:
                      "Yes, all new users receive $7 in free credits upon registration, which is sufficient for testing and evaluating our services.",
                  },
                  {
                    question: "What payment methods are supported?",
                    answer:
                      "We support various payment methods including credit cards, PayPal, and bank transfers for enterprise customers.",
                  },
                ]
            ).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              {lang === "zh" ? "准备好开始了吗？" : "Ready to Get Started?"}
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              {lang === "zh" ? "立即注册，获取免费API调用额度" : "Sign up now and get free API credits"}
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Button size="lg" variant="secondary">
                {lang === "zh" ? "免费注册" : "Sign Up Free"}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
                asChild
              >
                <Link href="/demo">{lang === "zh" ? "先试用" : "Try Demo"}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  )
}
