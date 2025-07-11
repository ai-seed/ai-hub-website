"use client"

import { useEffect, useRef } from "react"
import { useToast } from "@/hooks/use-toast"

interface MarkdownRendererProps {
  contentHtml: string
}

export default function MarkdownRenderer({ contentHtml }: MarkdownRendererProps) {
  const { toast } = useToast()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 添加代码复制功能到全局
    if (typeof window !== "undefined") {
      ;(window as any).copyCode = (button: HTMLButtonElement) => {
        // 查找最近的代码块容器，rehype-pretty-code 会生成 <pre><code> 结构
        const codeBlock = button.closest("[data-rehype-pretty-code-fragment]")?.querySelector("code")
        if (codeBlock) {
          const code = codeBlock.textContent || ""
          navigator.clipboard
            .writeText(code)
            .then(() => {
              const originalIcon = button.querySelector("svg")?.outerHTML || ""
              const originalText = button.textContent || ""

              button.innerHTML = `
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20,6 9,17 4,12"></polyline>
              </svg>
              Copied!
            `
              setTimeout(() => {
                button.innerHTML = originalIcon + originalText
              }, 2000)

              toast({
                title: "Copied!",
                description: "Code snippet copied to clipboard.",
              })
            })
            .catch(() => {
              toast({
                title: "Copy failed",
                description: "Failed to copy code to clipboard.",
                variant: "destructive",
              })
            })
        }
      }
    }
  }, [toast])

  return (
    <div
      ref={containerRef}
      className="prose prose-lg dark:prose-invert max-w-none
        prose-headings:font-bold prose-headings:text-gray-900
        prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
        prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
        prose-ul:list-disc prose-ul:pl-5 prose-li:mb-1
        prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic
        prose-img:rounded-lg prose-img:shadow-md
      "
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  )
}
