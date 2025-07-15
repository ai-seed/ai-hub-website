// Define the structure of our translations
export interface Translations {
  common: {
    signIn: string;
    signUp: string;
    getStarted: string;
    learnMore: string;
    backToHome: string;
    loading: string;
    error: string;
    success: string;
    cancel: string;
    confirm: string;
    save: string;
    edit: string;
    delete: string;
    search: string;
    noResults: string;
    lastUpdated: string;
  };
  navigation: {
    home: string;
    features: string;
    pricing: string;
    demo: string;
    changelog: string;
    docs: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    demo: string;
  };
  quickStart: {
    title: string;
    subtitle: string;
    steps: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  features: {
    title: string;
    subtitle: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  pricing: {
    title: string;
    subtitle: string;
    description: string;
    calculator: string;
  };
  changelog: {
    title: string;
    subtitle: string;
    description: string;
  };
  docs: {
    title: string;
    description: string;
    searchPlaceholder: string;
    backToDocs: string;
    tableOfContents: string;
    relatedDocs: string;
    categories: {
      "getting-started": string;
      "api-reference": string;
      guides: string;
      examples: string;
      troubleshooting: string;
      uncategorized: string;
    };
  };
  footer: {
    company: {
      name: string;
      description: string;
    };
    links: {
      product: {
        title: string;
        items: Array<{
          name: string;
          href: string;
        }>;
      };
      company: {
        title: string;
        items: Array<{
          name: string;
          href: string;
        }>;
      };
      support: {
        title: string;
        items: Array<{
          name: string;
          href: string;
        }>;
      };
      legal: {
        title: string;
        items: Array<{
          name: string;
          href: string;
        }>;
      };
    };
    contact: {
      title: string;
      email: string;
      phone: string;
      address: string;
    };
    social: {
      title: string;
    };
    copyright: string;
    icp: string;
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
  stats: Array<{
    number: string;
    label: string;
  }>;
}

// Type for nested object keys (for translation key paths)
export type TranslationKey = string;
