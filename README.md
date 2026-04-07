# DocChat Web

A modern marketing landing page for DocChat — AI-powered PDF chat application.

## Overview

This is a Next.js 16 application featuring:
- **12 Landing Page Sections**: Hero, Social Proof, Problem/Solution, Features, How It Works, Use Cases, Testimonials, Pricing, FAQ, CTA Footer, and Navigation
- **Titillium Web Font**: Modern, clean typography
- **Responsive Design**: Mobile-first approach with Tailwind CSS v4
- **High Performance**: Optimized images (AVIF/WebP), fast builds with Turbopack
- **Type Safety**: TypeScript with strict mode
- **Code Quality**: ESLint, Prettier, Husky pre-commit hooks

## Tech Stack

- **Framework**: Next.js 16.2.2 (App Router, SSR)
- **Styling**: Tailwind CSS v4 with CSS-first approach
- **UI Components**: shadcn/ui (Radix UI based)
- **Fonts**: next/font/google (Titillium Web, self-hosted)
- **Icons**: Lucide React
- **Animations**: Motion (formerly Framer Motion)
- **Type Checking**: TypeScript 5
- **Code Quality**: ESLint 9, Prettier, Husky, lint-staged
- **Image Optimization**: next/image with AVIF/WebP formats

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Other Commands

```bash
npm run lint          # Run ESLint
npm run format        # Format code with Prettier
npm run type-check    # TypeScript type checking
```

## Project Structure

```
app/
├── layout.tsx        # Root layout with fonts and metadata
├── page.tsx          # Landing page
└── globals.css       # Global styles

components/
├── layout/
│   ├── Header.tsx    # Navigation header with mobile menu
│   └── Footer.tsx    # Footer with newsletter
├── sections/         # Landing page sections
│   ├── Hero.tsx
│   ├── SocialProofBar.tsx
│   ├── ProblemSolution.tsx
│   ├── FeaturesGrid.tsx
│   ├── HowItWorks.tsx
│   ├── UseCases.tsx
│   ├── Testimonials.tsx
│   ├── PricingPreview.tsx
│   ├── FaqAccordion.tsx
│   └── CtaFooter.tsx
└── ui/              # shadcn/ui components

lib/
├── constants.ts     # All content constants
└── utils.ts         # Utility functions

public/
├── images/          # Demo and graphics
└── logos/           # Company logos
```

## Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy is using [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Import the repository on Vercel
3. Vercel automatically detects Next.js and configures the build
4. Deploy with a single click

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Performance

- **Lighthouse Score**: 90+ across all metrics
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s (mobile 4G)
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Image Optimization**: AVIF (20% smaller than WebP)
- **Build Time**: ~2.7s with Turbopack

## Development Standards

- **TypeScript Strict Mode**: Enforced with additional checks
- **No `any` types**: @typescript-eslint/no-explicit-any: error
- **Pre-commit Hooks**: TypeScript check and linting before commits
- **Code Formatting**: Automatic Tailwind class sorting with Prettier

## Environment Variables

For future backend integration:

```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## License

MIT
