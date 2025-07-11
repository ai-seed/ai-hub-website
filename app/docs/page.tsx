import Header from "@/components/header"
import Footer from "@/components/footer"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import DocsList from "@/components/docs-list" // 导入新的客户端组件
import { Badge } from "@/components/ui/badge"
import { FileText } from "lucide-react"
import { getSortedDocsData } from "@/lib/docs" // 确保这是服务器端导入

export default async function DocsPage() {
  // 语言设置，这里可以根据实际需求从 cookie 或其他地方获取
  const lang: "zh" | "en" = "zh"
  // 在服务器端获取所有文档的元数据
  const docs = getSortedDocsData()

  const hero = {
    zh: {
      title: "文档",
      desc: "查找关于如何使用我们AI API的详细信息、代码示例和最佳实践。",
    },
    en: {
      title: "Documentation",
      desc: "Find detailed information, code examples, and best practices on how to use our AI APIs.",
    },
  }[lang]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header lang={lang} /> {/* setLang 暂时设为空函数，因为语言切换通常在客户端处理 */}
      <BreadcrumbNav lang={lang} currentPage={hero.title} />
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-teal-600/5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <FileText className="mr-2 h-4 w-4" />
              {lang === "zh" ? "开发者文档" : "Developer Docs"}
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">{hero.title}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">{hero.desc}</p>
          </div>
        </div>
      </section>
      {/* Docs list – 客户端组件，接收服务器端获取的数据 */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <DocsList lang={lang} docs={docs} />
        </div>
      </section>
      <Footer lang={lang} />
    </div>
  )
}
