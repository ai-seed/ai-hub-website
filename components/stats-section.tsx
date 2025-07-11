"use client"

import { motion } from "framer-motion"

interface StatsSectionProps {
  lang: "zh" | "en"
}

const stats = {
  zh: [
    { number: "99.9%", label: "服务可用性" },
    { number: "50ms", label: "平均响应时间" },
    { number: "10M+", label: "月API调用量" },
    { number: "150+", label: "服务国家地区" },
  ],
  en: [
    { number: "99.9%", label: "Service Uptime" },
    { number: "50ms", label: "Average Response" },
    { number: "10M+", label: "Monthly API Calls" },
    { number: "150+", label: "Countries Served" },
  ],
}

export default function StatsSection({ lang }: StatsSectionProps) {
  const statsList = stats[lang]

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsList.map((stat, index) => (
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
