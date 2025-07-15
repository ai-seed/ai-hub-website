"use client"

import { motion } from "framer-motion"
import { ArrowLeft, History } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import ChangelogSection from "@/components/changelog-section"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import Footer from "@/components/footer"
import { useTranslation } from "@/lib/i18n"

export default function ChangelogPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />

      <BreadcrumbNav currentPage={t("changelog.title")} />

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

            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <History className="mr-2 h-4 w-4" />
              {t("changelog.subtitle")}
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">{t("changelog.title")}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">{t("changelog.description")}</p>
          </motion.div>
        </div>
      </section>

      <ChangelogSection />

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {t("newsletter.title")}
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              {t("newsletter.description")}
            </p>
            <div className="mt-8 flex justify-center">
              <div className="flex max-w-md w-full">
                <input
                  type="email"
                  placeholder={t("newsletter.placeholder")}
                  className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                />
                <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-r-lg hover:bg-gray-50 transition-colors">
                  {t("newsletter.button")}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
