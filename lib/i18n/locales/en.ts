import type { Translations } from "../types";

export const en: Translations = {
  common: {
    signIn: "Sign In",
    signUp: "Sign Up",
    getStarted: "Get Started",
    learnMore: "Learn More",
    backToHome: "Back to Home",
    loading: "Loading...",
    error: "Error",
    success: "Success",
    cancel: "Cancel",
    confirm: "Confirm",
    save: "Save",
    edit: "Edit",
    delete: "Delete",
    search: "Search",
    noResults: "No results found",
    lastUpdated: "Last Updated",
  },
  navigation: {
    home: "Home",
    features: "Features",
    pricing: "Pricing",
    demo: "Demo",
    changelog: "Changelog",
    docs: "Docs",
  },
  hero: {
    title: "Powerful AI API Platform",
    subtitle: "Pay-as-you-go, No Subscription",
    description: "Access cutting-edge AI tools and APIs with multiple AI models. Pay only for what you use and integrate AI capabilities into your applications quickly.",
    cta: "Get Started",
    demo: "View Demo",
  },
  quickStart: {
    title: "Quick Start",
    subtitle: "Integrate AI capabilities in three steps",
    steps: [
      {
        title: "Sign Up",
        description: "Register for free and get your API key",
        icon: "1",
      },
      {
        title: "Choose Model",
        description: "Select the most suitable AI model",
        icon: "2",
      },
      {
        title: "Start Calling",
        description: "Integrate AI features with simple API calls",
        icon: "3",
      },
    ],
  },
  features: {
    title: "Product Features",
    subtitle: "Discover our powerful AI API capabilities",
    description: "We provide comprehensive AI API solutions covering text generation, image processing, speech services, and more, helping your applications quickly integrate AI capabilities.",
    items: [
      {
        title: "High Performance",
        description: "Millisecond response, 99.9% uptime",
      },
      {
        title: "Pay-as-you-go",
        description: "Pay only for actual usage, no hidden fees",
      },
      {
        title: "Developer Friendly",
        description: "Complete SDK support, detailed documentation",
      },
    ],
  },
  pricing: {
    title: "Pricing Plans",
    subtitle: "Transparent pay-as-you-go pricing, pay only for what you use",
    description: "We offer flexible pay-as-you-go pricing with no subscription fees, allowing you to use AI services flexibly based on your actual needs.",
    calculator: "Cost Calculator",
  },
  changelog: {
    title: "Changelog",
    subtitle: "Stay updated with our latest features and improvements",
    description: "We continuously improve and optimize our AI API services to provide you with a better user experience. Check out our latest updates and feature releases.",
  },
  docs: {
    title: "Documentation",
    description: "Find detailed information, code examples, and best practices on how to use our AI APIs.",
    searchPlaceholder: "Search documentation...",
    backToDocs: "Back to Docs List",
    tableOfContents: "Table of Contents",
    relatedDocs: "Related Documents",
    categories: {
      "getting-started": "Getting Started",
      "api-reference": "API Reference",
      guides: "Guides",
      examples: "Examples",
      troubleshooting: "Troubleshooting",
      uncategorized: "Uncategorized",
    },
  },
  footer: {
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
  cta: {
    title: "Ready to Get Started?",
    description: "Sign up now and get free API credits",
    button: "Start Free",
  },
  stats: [
    { number: "99.9%", label: "Service Uptime" },
    { number: "50ms", label: "Average Response" },
    { number: "10M+", label: "Monthly API Calls" },
    { number: "150+", label: "Countries Served" },
  ],
};
