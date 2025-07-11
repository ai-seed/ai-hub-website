import { notFound } from "next/navigation"
import { getDocData, getSortedDocsData, type DocMeta } from "@/lib/docs"
import DocPage from "./doc-page"

/** 让 Next.js 在构建时生成所有静态路径 */
export async function generateStaticParams() {
  return getSortedDocsData().map((doc) => ({
    slug: doc.slug.split("/"),
  }))
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  try {
    const docData = await getDocData(params.slug)
    /** 仅在服务器端读取所有文档元数据，客户端不再接触 fs */
    const allDocs: DocMeta[] = getSortedDocsData()

    return <DocPage docData={docData} allDocs={allDocs} />
  } catch (err) {
    console.error("Failed to load doc:", err)
    notFound()
  }
}
