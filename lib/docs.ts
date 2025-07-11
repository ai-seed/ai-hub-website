import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeStringify from "rehype-stringify"

/// helper — place near the top of the file
function normalizeDate(value: unknown) {
  if (value instanceof Date) return value.toISOString().slice(0, 10) // "YYYY-MM-DD"
  if (typeof value === "string") return value
  return ""
}

export interface DocMeta {
  slug: string
  title: string
  description: string
  category: string
  order: number
  tags: string[]
  lastUpdated: string
}

export interface DocData extends DocMeta {
  contentHtml: string
}

const docsDirectory = path.join(process.cwd(), "docs")

function getMarkdownFiles(dir: string, prefix = ""): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  return entries.flatMap((entry) => {
    const relPath = path.join(prefix, entry.name) // relative to /docs
    const fullPath = path.join(dir, entry.name) // absolute
    if (entry.isDirectory()) {
      return getMarkdownFiles(fullPath, relPath) // dive deeper
    }
    return entry.isFile() && entry.name.endsWith(".md") ? [relPath] : []
  })
}

function pathToSlugArray(filePath: string) {
  // "api-reference/chat-completions.md" ➜ ["api-reference", "chat-completions"]
  return filePath.replace(/\.md$/, "").split(path.sep)
}

// ----------------------------------------------------------------------------
// getSortedDocsData
// ----------------------------------------------------------------------------
export function getSortedDocsData(): DocMeta[] {
  const fileNames = getMarkdownFiles(docsDirectory)
  const allDocsData = fileNames.map((file) => {
    const slug = file.replace(/\.md$/, "") // <— 用 slug
    const fullPath = path.join(docsDirectory, file)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const matterResult = matter(fileContents)

    return {
      slug, // <— 保持与前端一致
      title: matterResult.data.title || slug,
      description: matterResult.data.description || "",
      category: matterResult.data.category || "uncategorized",
      order: matterResult.data.order || 999,
      tags: matterResult.data.tags || [],
      lastUpdated: normalizeDate(matterResult.data.lastUpdated),
    }
  })

  // 可按 order + title 排序
  return allDocsData.sort((a, b) => (a.order === b.order ? a.title.localeCompare(b.title) : a.order - b.order))
}

// ----------------------------------------------------------------------------
// getAllDocSlugs
// ----------------------------------------------------------------------------
export function getAllDocSlugs() {
  const fileNames = getMarkdownFiles(docsDirectory)
  return fileNames.map((file) => ({
    params: { slug: pathToSlugArray(file) },
  }))
}

// Legacy – not used by current routes but kept for potential future use.
export const getAllDocIds = getAllDocSlugs

export async function getDocData(slugOrId: string | string[]) {
  const slugPath = Array.isArray(slugOrId) ? slugOrId.join(path.sep) : slugOrId
  const fullPath = path.join(docsDirectory, `${slugPath}.md`)

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const matterResult = matter(fileContents)

  // 使用 remark 和 rehype 插件链进行 Markdown 处理和代码高亮
  const processedContent = await remark()
    .use(remarkGfm) // 支持 GitHub Flavored Markdown
    .use(remarkRehype, { allowDangerousHtml: true }) // 将 Markdown AST 转换为 HTML AST
    .use(rehypeSlug) // 为标题添加 ID
    .use(rehypeAutolinkHeadings, { behavior: "wrap" }) // 为标题添加链接
    .use(rehypeStringify, { allowDangerousHtml: true }) // 将 HTML AST 转换为 HTML 字符串
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  return {
    slug: slugPath,
    contentHtml,
    title: matterResult.data.title || slugPath,
    description: matterResult.data.description || "",
    category: matterResult.data.category || "uncategorized",
    order: matterResult.data.order || 999,
    tags: matterResult.data.tags || [],
    lastUpdated: normalizeDate(matterResult.data.lastUpdated),
  }
}
