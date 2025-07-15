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
import { useLanguage, useTranslation } from "@/lib/i18n"



export default function HomePage() {
  // Use the language context instead of local state
  const { language, setLanguage } = useLanguage()
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-teal-600/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge variant="secondary" className="mb-4 px-4 py-2">
                <Sparkles className="mr-2 h-4 w-4" />
                {t("hero.subtitle")}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                {t("hero.title")}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">{t("hero.description")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Button size="lg" className="group" asChild>
                <Link href="/pricing">
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/demo">
                  <Play className="mr-2 h-4 w-4" />
                  {t("hero.demo")}
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

      <StatsSection />

      {/* Quick Start Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t("quickStart.title")}</h2>
            <p className="mt-4 text-lg text-gray-600">{t("quickStart.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t("quickStart.steps").map((step: any, index: number) => (
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
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t("features.title")}</h2>
            <p className="mt-4 text-lg text-gray-600">{t("features.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {t("features.items").map((feature: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                      {index === 0 && <Zap className="h-6 w-6 text-white" />}
                      {index === 1 && <TrendingUp className="h-6 w-6 text-white" />}
                      {index === 2 && <Code className="h-6 w-6 text-white" />}
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
                {t("common.learnMore")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <PartnersSection />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{t("cta.title")}</h2>
            <p className="mt-4 text-xl text-blue-100">{t("cta.description")}</p>
            <Button size="lg" variant="secondary" className="mt-8" asChild>
              <Link href="/pricing">
                {t("cta.button")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
