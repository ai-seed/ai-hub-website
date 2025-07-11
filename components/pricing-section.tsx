"use client"

import { motion } from "framer-motion"
import { Check, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PricingSectionProps {
  lang: "zh" | "en"
}

const pricingData = {
  zh: {
    title: "透明的按量计费",
    subtitle: "只为您实际使用的服务付费",
    plans: [
      {
        name: "文本生成",
        price: "¥0.02",
        unit: "/1K tokens",
        description: "GPT-4, Claude, Gemini等主流模型",
        features: ["支持多种语言模型", "实时API调用", "99.9%可用性保证", "24/7技术支持"],
        popular: false,
      },
      {
        name: "图像生成",
        price: "¥0.5",
        unit: "/张图片",
        description: "DALL-E, Midjourney, Stable Diffusion",
        features: ["高质量图像生成", "多种尺寸支持", "批量处理", "商用授权"],
        popular: true,
      },
      {
        name: "语音服务",
        price: "¥0.1",
        unit: "/分钟",
        description: "语音识别和语音合成",
        features: ["多语言支持", "高精度识别", "自然语音合成", "实时流式处理"],
        popular: false,
      },
    ],
  },
  en: {
    title: "Transparent Pay-as-you-go",
    subtitle: "Pay only for what you actually use",
    plans: [
      {
        name: "Text Generation",
        price: "$0.003",
        unit: "/1K tokens",
        description: "GPT-4, Claude, Gemini and other mainstream models",
        features: [
          "Multiple language models",
          "Real-time API calls",
          "99.9% uptime guarantee",
          "24/7 technical support",
        ],
        popular: false,
      },
      {
        name: "Image Generation",
        price: "$0.07",
        unit: "/image",
        description: "DALL-E, Midjourney, Stable Diffusion",
        features: ["High-quality image generation", "Multiple size support", "Batch processing", "Commercial license"],
        popular: true,
      },
      {
        name: "Voice Services",
        price: "$0.015",
        unit: "/minute",
        description: "Speech recognition and synthesis",
        features: [
          "Multi-language support",
          "High accuracy recognition",
          "Natural voice synthesis",
          "Real-time streaming",
        ],
        popular: false,
      },
    ],
  },
}

export default function PricingSection({ lang }: PricingSectionProps) {
  const data = pricingData[lang]

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{data.title}</h2>
          <p className="mt-4 text-lg text-gray-600">{data.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`h-full relative ${plan.popular ? "ring-2 ring-blue-500" : ""}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                    <Zap className="w-3 h-3 mr-1" />
                    {lang === "zh" ? "最受欢迎" : "Most Popular"}
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.unit}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    {lang === "zh" ? "开始使用" : "Get Started"}
                  </Button>
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
          <p className="text-gray-600">
            {lang === "zh"
              ? "所有新用户可获得 ¥50 免费额度 • 无最低消费 • 随时取消"
              : "All new users get $7 free credits • No minimum spend • Cancel anytime"}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
