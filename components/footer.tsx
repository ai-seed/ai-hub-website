"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

interface FooterProps {
  // Optional props for backward compatibility
  lang?: "zh" | "en"
}



const socialLinks = [
  { name: "GitHub", href: "https://github.com/ai-api-hub", icon: Github },
  { name: "Twitter", href: "https://twitter.com/ai_api_hub", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/company/ai-api-hub", icon: Linkedin },
]

export default function Footer({}: FooterProps) {
  const { t } = useTranslation()

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
                  <span className="text-xl font-bold">{t("footer.company.name")}</span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{t("footer.company.description")}</p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <a href={`mailto:${t("footer.contact.email")}`} className="hover:text-white transition-colors">
                      {t("footer.contact.email")}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span>{t("footer.contact.phone")}</span>
                  </div>
                  <div className="flex items-start space-x-3 text-gray-300">
                    <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span>{t("footer.contact.address")}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            {Object.entries(t("footer.links")).map(([key, section]: [string, any], index: number) => (
              <div key={key}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item: any) => (
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
              <span className="text-gray-300">{t("footer.social.title")}</span>
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
              <p className="text-gray-300">{t("footer.copyright")}</p>
              {t("footer.icp") && <p className="text-gray-400 text-sm mt-1">{t("footer.icp")}</p>}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
