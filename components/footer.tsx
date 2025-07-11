"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

interface FooterProps {
  lang: "zh" | "en"
}

const footerData = {
  zh: {
    company: {
      name: "AI API Hub",
      description: "专业的AI API服务平台，为开发者提供高质量的人工智能接口服务。",
    },
    links: {
      product: {
        title: "产品",
        items: [
          { name: "功能特性", href: "/features" },
          { name: "定价方案", href: "/pricing" },
          // { name: "在线演示", href: "/demo" }, // 暂时移除
          { name: "API文档", href: "/docs" },
        ],
      },
      company: {
        title: "公司",
        items: [
          // { name: "关于我们", href: "/about" }, // 暂时移除
          { name: "更新日志", href: "/changelog" },
          // { name: "博客", href: "/blog" }, // 暂时移除
          // { name: "招聘", href: "/careers" }, // 暂时移除
        ],
      },
      support: {
        title: "支持",
        items: [
          // { name: "帮助中心", href: "/help" }, // 暂时移除
          // { name: "联系我们", href: "/contact" }, // 暂时移除
          // { name: "状态页面", href: "/status" }, // 暂时移除
          // { name: "社区", href: "/community" }, // 暂时移除
        ],
      },
      legal: {
        title: "法律",
        items: [
          // { name: "隐私政策", href: "/privacy" }, // 暂时移除
          // { name: "服务条款", href: "/terms" }, // 暂时移除
          // { name: "Cookie政策", href: "/cookies" }, // 暂时移除
          // { name: "合规", href: "/compliance" }, // 暂时移除
        ],
      },
    },
    contact: {
      title: "联系方式",
      email: "contact@api-hub.ai",
      phone: "+86 400-123-4567",
      address: "中国上海市浦东新区张江高科技园区",
    },
    social: {
      title: "关注我们",
    },
    copyright: "© 2024 AI API Hub. 保留所有权利。",
    icp: "沪ICP备12345678号-1",
  },
  en: {
    company: {
      name: "AI API Hub",
      description: "Professional AI API service platform providing high-quality artificial intelligence interface services for developers.",
    },
    links: {
      product: {
        title: "Product",
        items: [
          { name: "Features", href: "/features" },
          { name: "Pricing", href: "/pricing" },
          { name: "API Docs", href: "/docs" },
        ],
      },
      company: {
        title: "Company",
        items: [
          { name: "Changelog", href: "/changelog" },
        ],
      },
      support: {
        title: "Support",
        items: [],
      },
      legal: {
        title: "Legal",
        items: [],
      },
    },
    contact: {
      title: "Contact",
      email: "contact@api-hub.ai",
      phone: "+1 (555) 123-4567",
      address: "San Francisco, CA, USA",
    },
    social: {
      title: "Follow Us",
    },
    copyright: "© 2024 AI API Hub. All rights reserved.",
    icp: "",
  },
}

const socialLinks = [
  { name: "GitHub", href: "https://github.com/ai-api-hub", icon: Github },
  { name: "Twitter", href: "https://twitter.com/ai_api_hub", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/company/ai-api-hub", icon: Linkedin },
]

export default function Footer({ lang }: FooterProps) {
  const data = footerData[lang]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AI</span>
                  </div>
                  <span className="text-xl font-bold">{data.company.name}</span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{data.company.description}</p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <a href={`mailto:${data.contact.email}`} className="hover:text-white transition-colors">
                      {data.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span>{data.contact.phone}</span>
                  </div>
                  <div className="flex items-start space-x-3 text-gray-300">
                    <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span>{data.contact.address}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            {Object.entries(data.links).map(([key, section], index) => (
              <div key={key}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className="text-gray-300 hover:text-white transition-colors">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-6"
            >
              <span className="text-gray-300">{data.social.title}</span>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-right"
            >
              <p className="text-gray-300">{data.copyright}</p>
              {data.icp && <p className="text-gray-400 text-sm mt-1">{data.icp}</p>}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
