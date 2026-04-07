// Landing page content constants
export const SITE_NAME = "DocChat";
export const SITE_TITLE = "DocChat - Chat with Your PDF Documents";
export const SITE_DESCRIPTION =
  "Upload PDFs and chat with them using AI. Extract insights, ask questions, and get instant answers from your documents.";

export const NAVIGATION_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "#docs" },
  { label: "Blog", href: "#blog" },
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
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Docs", href: "#docs" },
        { label: "Blog", href: "#blog" },
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
