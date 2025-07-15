"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/lib/i18n"

interface StatsSectionProps {
  // Optional props for backward compatibility
  lang?: "zh" | "en"
}

export default function StatsSection({}: StatsSectionProps) {
  const { t } = useTranslation()
  const statsList = t("stats")

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsList.map((stat: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
