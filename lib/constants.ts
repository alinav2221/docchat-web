// Landing page content constants
export const SITE_NAME = "DocChat";
export const SITE_TITLE = "DocChat - Chat with Your PDF Documents";
export const SITE_DESCRIPTION =
  "Upload PDFs and chat with them using AI. Extract insights, ask questions, and get instant answers from your documents.";

export const NAVIGATION_ITEMS = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
  { label: "Blog", href: "/blog" },
] as const;

export const HERO = {
  headline: "Chat with Any PDF",
  subheadline: "Get instant answers to your questions in seconds",
  primaryCta: "Try Free Now",
  secondaryCta: "Watch Demo",
} as const;

export const SOCIAL_PROOF = {
  text: "Trusted by 5000+ companies",
  logos: [
    { name: "Netflix", src: "/logos/netflix.svg" },
    { name: "Slack", src: "/logos/slack.svg" },
    { name: "Google", src: "/logos/google.svg" },
    { name: "Microsoft", src: "/logos/microsoft.svg" },
    { name: "Adobe", src: "/logos/adobe.svg" },
  ],
} as const;

export const PROBLEM_SOLUTION = {
  problem: {
    title: "Why PDFs are slowing you down",
    points: [
      "Hours spent reading documents",
      "Missing critical information",
      "Manual extraction of data",
    ],
  },
  solution: {
    title: "Why DocChat is the answer",
    points: [
      "Instant answers via AI",
      "100% accurate citations",
      "Export results instantly",
    ],
  },
} as const;

export const FEATURES = [
  {
    icon: "Zap",
    title: "Lightning Fast",
    description: "Process 100s of pages in seconds",
  },
  {
    icon: "Globe",
    title: "Any Language",
    description: "Support for 50+ languages",
  },
  {
    icon: "Search",
    title: "Accurate",
    description: "AI-powered extraction with citations",
  },
  {
    icon: "Download",
    title: "Export Anywhere",
    description: "PDF, DOCX, Excel, JSON",
  },
  {
    icon: "Lock",
    title: "Secure & Private",
    description: "End-to-end encryption",
  },
  {
    icon: "Bot",
    title: "AI-Powered",
    description: "Built on latest LLM technology",
  },
  {
    icon: "Users",
    title: "Team Ready",
    description: "Collaborate on documents",
  },
  {
    icon: "Plug",
    title: "API Access",
    description: "Integrate with your tools",
  },
  {
    icon: "Settings",
    title: "Customizable",
    description: "Fine-tune for your needs",
  },
] as const;

export const FEATURES_PAGE = {
  hero: {
    heading: "Everything You Need to Work Smarter with PDFs",
    subtext:
      "Powerful AI features designed to save you hours every day. From instant answers to team collaboration — DocChat has you covered.",
  },
} as const;

export const FEATURES_DETAILED = [
  {
    icon: "Zap",
    title: "Lightning Fast Processing",
    description: "Process 100s of pages in seconds",
    longDescription:
      "Our AI engine processes even the largest documents in seconds, not minutes. Upload a 500-page report and start asking questions immediately — no waiting, no loading screens.",
    benefits: [
      "Process up to 1000 pages per document",
      "Results in under 3 seconds on average",
      "Batch processing for multiple files",
      "Background indexing while you work",
    ],
  },
  {
    icon: "Search",
    title: "Pinpoint Accurate Answers",
    description: "AI-powered extraction with citations",
    longDescription:
      "Every answer comes with page numbers and direct quotes from your document. No hallucinations, no guesswork — just accurate, verifiable information you can trust.",
    benefits: [
      "Page-level citations for every answer",
      "Confidence scores for accuracy",
      "Source highlighting in original PDF",
      "Cross-reference multiple documents",
    ],
  },
  {
    icon: "Globe",
    title: "50+ Languages Supported",
    description: "Work in any language seamlessly",
    longDescription:
      "Upload documents in any of 50+ supported languages and ask questions in your preferred language. DocChat automatically detects and translates, making multilingual workflows effortless.",
    benefits: [
      "Auto-detect document language",
      "Ask questions in a different language",
      "Mixed-language document support",
      "Translation summaries on demand",
    ],
  },
  {
    icon: "Lock",
    title: "Enterprise-Grade Security",
    description: "End-to-end encryption for all data",
    longDescription:
      "Your documents are encrypted in transit with TLS 1.3 and at rest with AES-256. We're SOC 2 Type II certified, GDPR compliant, and never train our models on your data.",
    benefits: [
      "TLS 1.3 + AES-256 encryption",
      "SOC 2 Type II certified",
      "GDPR & HIPAA compliant",
      "Zero data retention option",
    ],
  },
  {
    icon: "Users",
    title: "Built for Teams",
    description: "Real-time collaboration on documents",
    longDescription:
      "Share documents, insights, and conversations with your team. Set permissions, create shared workspaces, and keep everyone aligned with collaborative document intelligence.",
    benefits: [
      "Shared workspaces and folders",
      "Role-based access control",
      "Real-time collaborative chat",
      "Team activity dashboard",
    ],
  },
  {
    icon: "Download",
    title: "Export Anywhere",
    description: "PDF, DOCX, Excel, JSON, and more",
    longDescription:
      "Extract insights and export them in the format you need. Generate summaries, data tables, or structured JSON — ready to plug into your existing workflows and tools.",
    benefits: [
      "One-click export to PDF, DOCX, Excel",
      "Structured JSON for developers",
      "Custom export templates",
      "Automated report generation",
    ],
  },
  {
    icon: "Bot",
    title: "State-of-the-Art AI",
    description: "Built on the latest LLM technology",
    longDescription:
      "Powered by the most advanced language models available, DocChat understands context, nuance, and complex questions. It gets smarter with every interaction.",
    benefits: [
      "Latest GPT and Claude models",
      "Context-aware responses",
      "Follow-up question understanding",
      "Continuous model improvements",
    ],
  },
  {
    icon: "Plug",
    title: "Powerful API",
    description: "Integrate DocChat into your tools",
    longDescription:
      "Full REST API with webhooks, SDKs for Python and JavaScript, and native integrations with Slack, Notion, and Zapier. Automate document intelligence at scale.",
    benefits: [
      "RESTful API with full documentation",
      "Python & JavaScript SDKs",
      "Slack, Notion, Zapier integrations",
      "Webhook notifications",
    ],
  },
  {
    icon: "Settings",
    title: "Fully Customizable",
    description: "Fine-tune for your specific needs",
    longDescription:
      "Configure AI behavior, set custom prompts, define extraction rules, and create templates tailored to your industry and workflow requirements.",
    benefits: [
      "Custom AI prompt templates",
      "Industry-specific extraction rules",
      "Branded output formatting",
      "Workflow automation triggers",
    ],
  },
] as const;

export const DOCS_PAGE = {
  hero: {
    heading: "Documentation",
    subtext:
      "Everything you need to get started with DocChat and make the most of it.",
  },
  sections: [
    {
      title: "Getting Started",
      description: "Set up your account and upload your first PDF in minutes.",
      icon: "Rocket",
      articles: [
        {
          title: "Quick Start Guide",
          description:
            "Upload your first PDF and ask a question in under 2 minutes",
        },
        {
          title: "Supported File Formats",
          description: "PDF files up to 10MB on Free tier, 100MB on Pro",
        },
        {
          title: "Account Setup",
          description: "Configure your workspace and preferences",
        },
      ],
    },
    {
      title: "Using DocChat",
      description: "Learn how to get the best answers from your documents.",
      icon: "MessageCircle",
      articles: [
        {
          title: "Asking Effective Questions",
          description: "Tips for getting accurate, detailed responses",
        },
        {
          title: "Working with Large Documents",
          description: "Strategies for navigating 100+ page PDFs",
        },
        {
          title: "Exporting Results",
          description: "Save answers as PDF, DOCX, Excel, or JSON",
        },
        {
          title: "Multi-Language Support",
          description: "Using DocChat with documents in 50+ languages",
        },
      ],
    },
    {
      title: "API Reference",
      description: "Integrate DocChat into your applications and workflows.",
      icon: "Code",
      articles: [
        {
          title: "Authentication",
          description: "API keys, OAuth, and security best practices",
        },
        {
          title: "Upload Endpoint",
          description: "POST /api/upload — upload and process PDF documents",
        },
        {
          title: "Chat Endpoint",
          description:
            "POST /api/chat — send questions and receive streaming answers",
        },
        {
          title: "Webhooks",
          description:
            "Get notified when documents are processed or chats complete",
        },
      ],
    },
    {
      title: "Team & Enterprise",
      description: "Collaboration features for teams and organizations.",
      icon: "Users",
      articles: [
        {
          title: "Workspace Management",
          description: "Create shared workspaces and manage team access",
        },
        {
          title: "Role-Based Access Control",
          description: "Set permissions for team members",
        },
        {
          title: "SSO & Security",
          description: "SAML, OIDC, and enterprise security configurations",
        },
        {
          title: "Usage & Billing",
          description: "Monitor usage, manage subscriptions, and view invoices",
        },
      ],
    },
  ],
} as const;

export const BLOG_PAGE = {
  hero: {
    heading: "Blog",
    subtext: "Insights on AI, document intelligence, and productivity.",
  },
} as const;

export const BLOG_POSTS = [
  {
    slug: "introducing-docchat",
    title: "Introducing DocChat: Chat with Any PDF",
    description:
      "We built DocChat to solve a simple problem — reading long PDFs is painful. Now you can just ask questions and get instant answers.",
    category: "Product",
    date: "2026-04-01",
    readTime: "5 min read",
    featured: true,
  },
  {
    slug: "ai-document-processing-2026",
    title: "The State of AI Document Processing in 2026",
    description:
      "How large language models are transforming the way we extract insights from documents, contracts, and reports.",
    category: "Industry",
    date: "2026-03-25",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "10x-productivity-with-pdf-ai",
    title: "10x Your Productivity with AI-Powered PDF Analysis",
    description:
      "Real-world workflows showing how teams use DocChat to save hours every week on document review.",
    category: "Guides",
    date: "2026-03-18",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "enterprise-security-compliance",
    title: "Enterprise Security: How We Keep Your Documents Safe",
    description:
      "A deep dive into our encryption, compliance certifications, and zero-retention architecture.",
    category: "Security",
    date: "2026-03-10",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "multilingual-document-ai",
    title: "Breaking Language Barriers: Multilingual Document AI",
    description:
      "How DocChat handles 50+ languages and enables cross-language document queries.",
    category: "Product",
    date: "2026-03-03",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "api-integration-guide",
    title: "Building with the DocChat API: A Developer Guide",
    description:
      "Step-by-step tutorial on integrating DocChat into your application with our REST API and SDKs.",
    category: "Developers",
    date: "2026-02-24",
    readTime: "10 min read",
    featured: false,
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Upload",
    description: "Drop your PDF or select from device",
    icon: "Upload",
  },
  {
    step: 2,
    title: "Ask",
    description: "Chat naturally, ask anything",
    icon: "MessageCircle",
  },
  {
    step: 3,
    title: "Get Answers",
    description: "Receive instant answers with sources",
    icon: "CheckCircle",
  },
] as const;

export const USE_CASES = [
  {
    icon: "Briefcase",
    title: "Legal",
    description: "Speed up contract review",
  },
  {
    icon: "BarChart3",
    title: "Finance",
    description: "Extract data from reports",
  },
  {
    icon: "BookOpen",
    title: "Research",
    description: "Synthesize academic papers",
  },
  {
    icon: "Users2",
    title: "HR",
    description: "Find policies in seconds",
  },
  {
    icon: "Pen",
    title: "Content",
    description: "Research faster, create better",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "DocChat saved us hours every week. We went from spending 2-3 hours analyzing reports to just 15 minutes.",
    author: "Sarah Chen",
    role: "Financial Analyst",
    company: "Goldman Sachs",
    rating: 5,
  },
  {
    quote:
      "The accuracy of citations is incredible. Our legal team now uses it for every contract review.",
    author: "James Wilson",
    role: "General Counsel",
    company: "TechCorp Inc",
    rating: 5,
  },
  {
    quote:
      "Research just became 10x faster. I can synthesize 50 academic papers in the time it used to take for 5.",
    author: "Dr. Lisa Martinez",
    role: "Research Director",
    company: "Stanford University",
    rating: 5,
  },
] as const;

export const PRICING_TIERS = [
  {
    name: "Free",
    price: 0,
    billingPeriod: "month",
    description: "Perfect for trying it out",
    features: ["2 documents/day", "50 questions/day", "Basic support"],
    cta: "Start for Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: 19.99,
    billingPeriod: "month",
    description: "Best for professionals",
    features: [
      "Unlimited documents",
      "Unlimited questions",
      "Priority support",
      "API access",
    ],
    cta: "Get Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: null,
    billingPeriod: "custom",
    description: "For large teams",
    features: [
      "Everything in Pro",
      "SSO & advanced security",
      "Dedicated support",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
] as const;

export const ANNUAL_DISCOUNT = 0.2 as const;

export const PRICING_PAGE = {
  hero: {
    heading: "Simple, Transparent Pricing",
    subtext:
      "Start free, scale when you're ready. No hidden fees. Cancel anytime.",
  },
} as const;

export const FAQ = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "What file formats does DocChat support?",
        a: "DocChat supports PDF files. We're working on adding support for Word documents, Excel sheets, and images.",
      },
      {
        q: "How do I upload a PDF?",
        a: "You can drag and drop your PDF directly into the application or click the upload button to select from your device.",
      },
      {
        q: "Is there a file size limit?",
        a: "Free tier supports files up to 10MB. Pro tier supports files up to 100MB. Enterprise has custom limits.",
      },
      {
        q: "Can I use DocChat offline?",
        a: "DocChat requires an internet connection to process PDFs and generate answers using our AI models.",
      },
    ],
  },
  {
    category: "Features & Capabilities",
    questions: [
      {
        q: "What languages are supported?",
        a: "DocChat supports over 50 languages including English, Spanish, French, German, Chinese, Japanese, and more.",
      },
      {
        q: "Can I process multiple PDFs at once?",
        a: "Yes, with Pro and Enterprise plans you can process multiple PDFs and ask questions across all of them.",
      },
      {
        q: "Does DocChat remember our conversation?",
        a: "Yes, all conversations are saved to your account and you can access them anytime.",
      },
      {
        q: "Can I export my conversations?",
        a: "Yes, you can export conversations as PDF, DOCX, Excel, or JSON formats.",
      },
    ],
  },
  {
    category: "Pricing & Billing",
    questions: [
      {
        q: "Is there a free trial?",
        a: "Yes, you can start with our Free tier which includes 2 documents per day and 50 questions per day.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Absolutely. You can cancel your subscription at any time with no cancellation fees.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for enterprise plans.",
      },
    ],
  },
  {
    category: "Security & Privacy",
    questions: [
      {
        q: "Is my data encrypted?",
        a: "Yes, all data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.",
      },
      {
        q: "Who can access my documents?",
        a: "Only you and team members you explicitly invite can access your documents. We never train our models on user documents.",
      },
      {
        q: "Is DocChat GDPR compliant?",
        a: "Yes, DocChat is fully GDPR compliant. We also comply with CCPA, HIPAA, and SOC 2 Type II standards.",
      },
    ],
  },
] as const;

export const CTA_FOOTER = {
  heading: "Ready to work smarter with PDFs?",
  subtext: "Join 500K+ users who've transformed their workflow",
  primaryCta: "Start Your Free Trial",
  secondaryCta: "Schedule a demo",
} as const;

export const FOOTER = {
  columns: [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Docs", href: "/docs" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
        { label: "Security", href: "#security" },
        { label: "Privacy", href: "#privacy" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms of Service", href: "#terms" },
        { label: "Privacy Policy", href: "#privacy-policy" },
        { label: "Cookie Policy", href: "#cookie-policy" },
      ],
    },
    {
      title: "Follow",
      links: [
        { label: "Twitter", href: "https://twitter.com/docchatai" },
        { label: "LinkedIn", href: "https://linkedin.com/company/docchat" },
        { label: "GitHub", href: "https://github.com/docchatai" },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} DocChat. All rights reserved.`,
} as const;
