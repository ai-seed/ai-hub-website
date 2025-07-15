"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n"

interface PartnersSectionProps {
  // Optional props for backward compatibility
  lang?: "zh" | "en"
}

const partnersData = {
  zh: {
    title: "合作伙伴",
    subtitle: "与行业领先企业共同构建AI生态",
    categories: {
      tech: {
        title: "技术合作伙伴",
        partners: [
          { name: "OpenAI", logo: "/images/openai.svg", url: "https://openai.com"},
          { name: "Google Cloud", logo: "/images/google-cloud.svg", url: "https://cloud.google.com"},
          // { name: "Google Cloud", logo: "/images/google-cloud.svg", url: "https://cloud.google.com", className: "mt-2"},
          { name: "Microsoft Azure", logo: "/images/microsoft-azure.svg", url: "https://azure.microsoft.com"},
          { name: "AWS", logo: "/images/amazon.svg", url: "https://aws.amazon.com"},
        ],
      },
      // enterprise: {
      //   title: "企业客户",
      //   partners: [
      //     { name: "阿里巴巴", logo: "/placeholder.svg?height=60&width=120&text=Alibaba", url: "#" },
      //     { name: "腾讯", logo: "/placeholder.svg?height=60&width=120&text=Tencent", url: "#" },
      //     { name: "字节跳动", logo: "/placeholder.svg?height=60&width=120&text=ByteDance", url: "#" },
      //     { name: "美团", logo: "/placeholder.svg?height=60&width=120&text=Meituan", url: "#" },
      //   ],
      // },
      // investment: {
      //   title: "投资机构",
      //   partners: [
      //     { name: "红杉资本", logo: "/placeholder.svg?height=60&width=120&text=Sequoia", url: "#" },
      //     { name: "IDG资本", logo: "/placeholder.svg?height=60&width=120&text=IDG", url: "#" },
      //     { name: "经纬中国", logo: "/placeholder.svg?height=60&width=120&text=Matrix", url: "#" },
      //     { name: "真格基金", logo: "/placeholder.svg?height=60&width=120&text=ZhenFund", url: "#" },
      //   ],
      // },
    },
    friendLinks: {
      title: "友情链接",
      links: [
        { name: "AI研习社", url: "https://ai.yanxishe.com" },
        { name: "机器之心", url: "https://www.jiqizhixin.com" },
        { name: "量子位", url: "https://www.qbitai.com" },
        { name: "新智元", url: "https://www.aiuav.com" },
        { name: "雷锋网", url: "https://www.leiphone.com" },
        { name: "36氪", url: "https://36kr.com" },
        { name: "虎嗅", url: "https://www.huxiu.com" },
        { name: "钛媒体", url: "https://www.tmtpost.com" },
      ],
    },
  },
  en: {
    title: "Partners",
    subtitle: "Building AI ecosystem with industry leaders",
    categories: {
      tech: {
        title: "Technology Partners",
        partners: [
          { name: "OpenAI", logo: "/placeholder.svg?height=60&width=120&text=OpenAI", url: "https://openai.com" },
          { name: "Google Cloud", logo: "/placeholder.svg?height=60&width=120&text=Google", url: "https://cloud.google.com", },
          { name: "Microsoft Azure", logo: "/placeholder.svg?height=60&width=120&text=Azure", url: "https://azure.microsoft.com", },
          { name: "AWS", logo: "/placeholder.svg?height=60&width=120&text=AWS", url: "https://aws.amazon.com" },
        ],
      },
      enterprise: {
        title: "Enterprise Clients",
        partners: [
          { name: "Alibaba", logo: "/placeholder.svg?height=60&width=120&text=Alibaba", url: "#" },
          { name: "Tencent", logo: "/placeholder.svg?height=60&width=120&text=Tencent", url: "#" },
          { name: "ByteDance", logo: "/placeholder.svg?height=60&width=120&text=ByteDance", url: "#" },
          { name: "Meituan", logo: "/placeholder.svg?height=60&width=120&text=Meituan", url: "#" },
        ],
      },
      investment: {
        title: "Investors",
        partners: [
          { name: "Sequoia Capital", logo: "/placeholder.svg?height=60&width=120&text=Sequoia", url: "#" },
          { name: "IDG Capital", logo: "/placeholder.svg?height=60&width=120&text=IDG", url: "#" },
          { name: "Matrix Partners", logo: "/placeholder.svg?height=60&width=120&text=Matrix", url: "#" },
          { name: "ZhenFund", logo: "/placeholder.svg?height=60&width=120&text=ZhenFund", url: "#" },
        ],
      },
    },
    friendLinks: {
      title: "Friend Links",
      links: [
        { name: "AI News", url: "https://artificialintelligence-news.com" },
        { name: "VentureBeat", url: "https://venturebeat.com" },
        { name: "TechCrunch", url: "https://techcrunch.com" },
        { name: "Wired", url: "https://wired.com" },
        { name: "MIT Tech Review", url: "https://technologyreview.com" },
        { name: "The Verge", url: "https://theverge.com" },
        { name: "Ars Technica", url: "https://arstechnica.com" },
        { name: "IEEE Spectrum", url: "https://spectrum.ieee.org" },
      ],
    },
  },
}

export default function PartnersSection({ lang: propLang }: PartnersSectionProps) {
  const { language } = useLanguage()
  const lang = propLang || language
  const data = partnersData[lang]

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{data.title}</h2>
          <p className="mt-4 text-lg text-gray-600">{data.subtitle}</p>
        </motion.div>

        {/* Partners Categories */}
        <div className="space-y-16">
          {Object.entries(data.categories).map(([key, category], categoryIndex) => (
            <div key={key}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">{category.title}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {category.partners.map((partner, index) => (
                    <motion.div
                      key={partner.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Card className="h-24 hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <CardContent className="flex items-center justify-center h-full p-4">
                          <a
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full h-full"
                          >
                            <img
                              src={partner.logo || "/placeholder.svg"}
                              alt={partner.name}
                              className="max-w-full max-h-full object-contain mx-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                              // className={`max-w-full max-h-full object-contain mx-auto filter grayscale hover:grayscale-0 transition-all duration-300 ${
                              //     partner.className || ""
                              // }`}
                            />
                          </a>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Friend Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-16 border-t border-gray-200"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">{data.friendLinks.title}</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {data.friendLinks.links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-1 rounded-md hover:bg-blue-50"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
            <CardContent className="py-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {lang === "zh" ? "成为我们的合作伙伴" : "Become Our Partner"}
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                {lang === "zh"
                  ? "我们正在寻找志同道合的合作伙伴，共同推动AI技术的发展和应用。如果您有兴趣与我们合作，请联系我们。"
                  : "We are looking for like-minded partners to jointly promote the development and application of AI technology. If you are interested in partnering with us, please contact us."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:partnership@api-hub.ai"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  {lang === "zh" ? "商务合作" : "Business Partnership"}
                </a>
                <a
                  href="mailto:tech@api-hub.ai"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  {lang === "zh" ? "技术合作" : "Technical Partnership"}
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
