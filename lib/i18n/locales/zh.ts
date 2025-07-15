import type { Translations } from "../types";

export const zh: Translations = {
  common: {
    signIn: "登录",
    signUp: "注册",
    getStarted: "立即开始",
    learnMore: "了解更多",
    backToHome: "返回首页",
    loading: "加载中...",
    error: "错误",
    success: "成功",
    cancel: "取消",
    confirm: "确认",
    save: "保存",
    edit: "编辑",
    delete: "删除",
    search: "搜索",
    noResults: "没有找到结果",
    lastUpdated: "最后更新",
  },
  navigation: {
    home: "首页",
    features: "产品",
    pricing: "定价",
    demo: "演示",
    changelog: "更新日志",
    docs: "文档",
  },
  hero: {
    title: "强大的AI API服务平台",
    subtitle: "按需付费，无需订阅",
    description: "提供最先进的AI工具和API服务，支持多种AI模型，按实际使用量计费，让您的应用快速集成AI能力。",
    cta: "立即开始",
    demo: "查看演示",
  },
  quickStart: {
    title: "快速开始",
    subtitle: "三步即可集成AI能力",
    steps: [
      {
        title: "注册账户",
        description: "免费注册并获取API密钥",
        icon: "1",
      },
      {
        title: "选择模型",
        description: "从多种AI模型中选择最适合的",
        icon: "2",
      },
      {
        title: "开始调用",
        description: "使用简单的API调用集成AI功能",
        icon: "3",
      },
    ],
  },
  features: {
    title: "产品功能",
    subtitle: "了解我们强大的AI API功能特性",
    description: "我们提供全面的AI API解决方案，涵盖文本生成、图像处理、语音服务等多个领域，助力您的应用快速集成AI能力。",
    items: [
      {
        title: "高性能",
        description: "毫秒级响应，99.9%可用性",
      },
      {
        title: "按量付费",
        description: "只为实际使用付费，无隐藏费用",
      },
      {
        title: "开发友好",
        description: "完整SDK支持，详细文档",
      },
    ],
  },
  pricing: {
    title: "定价方案",
    subtitle: "透明的按量计费，只为您实际使用的服务付费",
    description: "我们提供灵活的按量付费模式，无需订阅费用，让您可以根据实际需求灵活使用AI服务。",
    calculator: "成本计算器",
  },
  changelog: {
    title: "更新日志",
    subtitle: "了解我们最新的功能更新和改进",
    description: "我们持续改进和优化我们的AI API服务，为您提供更好的使用体验。查看我们的最新更新和功能发布。",
  },
  docs: {
    title: "文档",
    description: "查找关于如何使用我们AI API的详细信息、代码示例和最佳实践。",
    searchPlaceholder: "搜索文档...",
    backToDocs: "返回文档列表",
    tableOfContents: "目录",
    relatedDocs: "相关文档",
    categories: {
      "getting-started": "入门指南",
      "api-reference": "API参考",
      guides: "使用指南",
      examples: "代码示例",
      troubleshooting: "故障排除",
      uncategorized: "未分类",
    },
  },
  footer: {
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
          { name: "API文档", href: "/docs" },
        ],
      },
      company: {
        title: "公司",
        items: [
          { name: "更新日志", href: "/changelog" },
        ],
      },
      support: {
        title: "支持",
        items: [],
      },
      legal: {
        title: "法律",
        items: [],
      },
    },
    contact: {
      title: "联系我们",
      email: "contact@api-hub.ai",
      phone: "+86 400-123-4567",
      address: "中国北京市朝阳区",
    },
    social: {
      title: "关注我们",
    },
    copyright: "© 2024 AI API Hub. 保留所有权利。",
    icp: "京ICP备12345678号",
  },
  cta: {
    title: "准备好开始了吗？",
    description: "立即注册，获取免费API调用额度",
    button: "免费开始",
  },
  stats: [
    { number: "99.9%", label: "服务可用性" },
    { number: "50ms", label: "平均响应时间" },
    { number: "10M+", label: "月API调用量" },
    { number: "150+", label: "服务国家地区" },
  ],
  faq: {
    title: "常见问题",
    items: [
      {
        question: "如何计费？",
        answer: "我们采用按量计费模式，根据您实际使用的API调用次数和数据量进行计费，无最低消费要求。",
      },
      {
        question: "是否有免费额度？",
        answer: "是的，所有新用户注册后可获得¥50的免费使用额度，足够您测试和评估我们的服务。",
      },
      {
        question: "支持哪些支付方式？",
        answer: "我们支持支付宝、微信支付、银行卡等多种支付方式，同时支持企业对公转账。",
      },
    ],
  },
  newsletter: {
    title: "订阅更新通知",
    description: "第一时间获取最新功能发布和重要更新通知",
    placeholder: "输入您的邮箱地址",
    button: "订阅",
  },
};
