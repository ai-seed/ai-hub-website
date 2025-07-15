"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import FeaturesSection from "@/components/features-section"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import Footer from "@/components/footer"
import { useTranslation } from "@/lib/i18n"

export default function FeaturesPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />

      <BreadcrumbNav currentPage={t("features.title")} />

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
              {t("common.backToHome")}
            </Link>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">{t("features.title")}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">{t("features.description")}</p>
          </motion.div>
        </div>
      </section>

      <FeaturesSection />

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
              {t("cta.title")}
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              {t("cta.description")}
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/pricing">{t("pricing.title")}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
                asChild
              >
                <Link href="/demo">{t("navigation.demo")}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
