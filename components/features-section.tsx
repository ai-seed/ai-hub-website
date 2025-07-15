"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Globe, Code, BarChart3, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n"

interface FeaturesSectionProps {
  // Optional props for backward compatibility
  lang?: "zh" | "en"
}

const features = {
  zh: [
    {
      icon: Zap,
      title: "高性能API",
      description: "毫秒级响应时间，99.9%可用性保证，支持全球CDN加速",
    },
    {
      icon: Shield,
      title: "企业级安全",
      description: "端到端加密，API密钥管理，完整的访问控制和审计日志",
    },
    {
      icon: Globe,
      title: "全球部署",
      description: "多区域部署，智能路由，确保全球用户获得最佳体验",
    },
    {
      icon: Code,
      title: "开发者友好",
      description: "完整的SDK支持，详细文档，代码示例和交互式API测试",
    },
    {
      icon: BarChart3,
      title: "实时监控",
      description: "详细的使用统计，性能监控，成本分析和预算控制",
    },
    {
      icon: Clock,
      title: "按需计费",
      description: "精确到每次调用的计费，无隐藏费用，灵活的付费方式",
    },
  ],
  en: [
    {
      icon: Zap,
      title: "High Performance API",
      description: "Millisecond response times, 99.9% uptime guarantee, global CDN acceleration",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "End-to-end encryption, API key management, complete access control and audit logs",
    },
    {
      icon: Globe,
      title: "Global Deployment",
      description: "Multi-region deployment, intelligent routing for optimal global user experience",
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Complete SDK support, detailed documentation, code examples and interactive API testing",
    },
    {
      icon: BarChart3,
      title: "Real-time Monitoring",
      description: "Detailed usage statistics, performance monitoring, cost analysis and budget control",
    },
    {
      icon: Clock,
      title: "Pay-as-you-go",
      description: "Precise per-call billing, no hidden fees, flexible payment options",
    },
  ],
}

export default function FeaturesSection({ lang: propLang }: FeaturesSectionProps) {
  const { language } = useLanguage()
  const lang = propLang || language
  const featureList = features[lang]

  return (
    <section id="features" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {lang === "zh" ? "为什么选择我们" : "Why Choose Us"}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {lang === "zh" ? "专业的AI API解决方案" : "Professional AI API Solutions"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
