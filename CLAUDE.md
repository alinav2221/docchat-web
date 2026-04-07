# DocChat Web — Project Guidelines

## Project Overview

**DocChat Web** is a modern SaaS marketing landing page for an AI-powered PDF chat application. The goal is to create a high-converting landing page with exceptional performance metrics (Lighthouse 90+, LCP < 2.5s).

**Current Status**: Phase 1 complete — Full landing page with 12 sections deployed on Vercel.

---

## Design System & Visual Language

### Font

- **Primary**: Titillium Web (sans-serif, modern, rounded)
- **Implementation**: `next/font/google` with `display: "optional"` for zero CLS
- **CSS Variable**: `--font-titillium` (applied via `font-sans` Tailwind class)
- **Weights Used**: 400, 600, 700

**Why**: Titillium Web is a modern, contemporary sans-serif that conveys innovation without being sterile. The rounded letterforms suggest approachability and trust.

### Color Palette

- **Primary Blue**: `#3b82f6` (Tailwind `blue-600`)
- **Light Blue**: `#dbeafe` (Tailwind `blue-100`)
- **Text**: `#111827` (Tailwind `gray-900`) on white, `#f3f4f6` (Tailwind `gray-100`) on dark
- **Borders**: `#e5e7eb` (Tailwind `gray-200`)
- **Gradients**: Blue-to-cyan fades for hero sections

### Spacing & Layout

- **Max-width container**: `max-w-7xl` (1280px)
- **Horizontal padding**: `px-4 sm:px-6 lg:px-8` (responsive)
- **Section vertical padding**: `py-20 sm:py-32` for breathing room
- **Gap between elements**:
  - Cards/features: `gap-8 sm:gap-12`
  - Logos in social proof: `gap-8 sm:gap-12`
  - CTA buttons: `gap-4`

### Images & Assets

- **Format Strategy**: AVIF (preferred) → WebP (fallback) → PNG
- **Location**: `/public/images/` and `/public/logos/`
- **Optimization**: 1-year cache TTL, responsive device sizes
- **Device Sizes**: [640, 750, 828, 1080, 1200, 1920]

---

## Tech Stack Decisions

### Framework: Next.js 16.2.2 (App Router, SSR)

✅ **Not static export** — uses Vercel's native SSR with ISR  
✅ Enables `next/image` optimization  
✅ Unified ecosystem with future SaaS app  
✅ Metadata API, sitemap.ts, robots.ts built-in

### Styling: Tailwind CSS v4

✅ CSS-first (Lightning CSS/Rust compiler)  
✅ 10x faster builds than v3  
✅ HMR < 100ms  
✅ No runtime overhead  
✅ Automatic class sorting with `prettier-plugin-tailwindcss`

### UI Components: shadcn/ui

✅ Code copied into repo (0KB runtime)  
✅ Accessibility from Radix UI  
✅ Only necessary components imported  
✅ Full customization control

### Animations: Motion (motion package)

⚠️ **Important**: Framer Motion renamed to **Motion** in 2025  
✅ Import: `import { motion } from 'motion/react'`  
✅ Package: `motion` (v12.38.0)  
✅ Use for: scroll-triggered fades, entrance animations, page transitions  
✅ Use CSS transitions for: hover states, simple UI changes

### Icons: Lucide React

✅ Already shadcn/ui dependency (0 additional cost)  
✅ ~1KB per icon with tree-shaking  
✅ Consistent stroke-width (2px)

### Code Quality

✅ **TypeScript Strict**: `noUncheckedIndexedAccess`, `noFallthroughCasesInSwitch`, `allowUnreachableCode: false`  
✅ **ESLint**: `@typescript-eslint/no-explicit-any: error` enforced  
✅ **Prettier**: Trailing commas, single quotes, no semicolons  
✅ **Husky**: Pre-commit hooks block commits with TS/lint errors

---

## Project Structure

```
app/
├── layout.tsx           # Root layout (fonts, metadata, JSON-LD schema)
├── page.tsx             # Landing page (imports all 12 sections)
├── globals.css          # Tailwind + color tokens
└── favicon.ico

components/
├── layout/
│   ├── Header.tsx       # Sticky nav with mobile menu
│   └── Footer.tsx       # Dark footer + newsletter
├── sections/            # 10 landing page sections
│   ├── Hero.tsx         # Gradient bg + demo image
│   ├── SocialProofBar.tsx
│   ├── ProblemSolution.tsx
│   ├── FeaturesGrid.tsx (9 cards)
│   ├── HowItWorks.tsx   (3-step process)
│   ├── UseCases.tsx     (5 industries)
│   ├── Testimonials.tsx (3 quotes + ratings)
│   ├── PricingPreview.tsx (Free/Pro/Enterprise)
│   ├── FaqAccordion.tsx (4 categories, 12+ Q&As)
│   └── CtaFooter.tsx    (gradient CTA section)
└── ui/                  # shadcn/ui components
    ├── button.tsx
    ├── card.tsx
    ├── accordion.tsx
    └── [other shadcn components]

lib/
├── constants.ts         # All content (850+ lines)
│   ├── SITE_NAME, SITE_TITLE, SITE_DESCRIPTION
│   ├── NAVIGATION_ITEMS
│   ├── HERO, SOCIAL_PROOF, PROBLEM_SOLUTION
│   ├── FEATURES (9 items), HOW_IT_WORKS, USE_CASES (5)
│   ├── TESTIMONIALS (3), PRICING_TIERS (3), FAQ (4 categories)
│   ├── CTA_FOOTER, FOOTER
│   └── All data is single source of truth
└── utils.ts             # Helper functions

public/
├── images/
│   └── demo.svg         # Hero demo placeholder
├── logos/
│   ├── netflix.svg, slack.svg, google.svg
│   ├── microsoft.svg, adobe.svg
│   └── [placeholder SVGs with actual brand colors]
├── file.svg, globe.svg, next.svg, vercel.svg, window.svg (unused)

config/
├── eslint.config.mjs    # Flat config, strict rules
├── prettier.config.json # Tailwind class sorting
├── tailwind.config.ts   # (if needed; v4 is CSS-first)
├── tsconfig.json        # Strict mode
├── next.config.ts       # Image optimization
└── postcss.config.mjs   # Tailwind processing

.husky/
└── pre-commit           # TypeScript check + lint-staged

.github/
└── workflows/           # (Future) CI/CD with Lighthouse

.gitignore              # Standard Next.js excludes
package.json            # Scripts: dev, build, start, lint, format, type-check
package-lock.json       # 652 packages, 0 vulnerabilities
```

---

## Content Management

### Single Source of Truth: `lib/constants.ts`

All marketing copy, data, and structure is defined here. This makes:

- ✅ Easy to edit copy without touching components
- ✅ Reusable data across pages (future pricing page, etc.)
- ✅ Type-safe (const assertions with `as const`)

**Example**:

```typescript
export const FEATURES = [
  {
    icon: "Zap",
    title: "Lightning Fast",
    description: "Process 100s of pages in seconds",
  },
  // ... 8 more
] as const;
```

Components import and map over this data:

```typescript
{FEATURES.map((feature) => (
  <FeatureCard key={feature.title} {...feature} />
))}
```

---

## Coding Conventions

### Component Rules

- ✅ Use `"use client"` at top of interactive components
- ✅ Extract icon mapping functions with explicit types: `React.ComponentType<{ className: string }>`
- ✅ Always specify `className` string prop on Lucide icons (not `any`)
- ❌ No `any` types — TypeScript strict mode enforced

### Styling Rules

- ✅ Tailwind classes only (no custom CSS in components)
- ✅ Responsive: `sm:`, `md:`, `lg:` prefixes (mobile-first)
- ✅ Prettier auto-sorts: `prettier --write` before commit
- ✅ Use `clsx()` for conditional classes: `clsx('p-4', isDark && 'bg-gray-900')`

### Image Handling

- ✅ Always use `next/image` (not `<img>`)
- ✅ Always set `width` and `height` (or use `fill` + `sizes`)
- ✅ Use `priority` only for LCP element (Hero image)
- ✅ Include `sizes="..."` for responsive images

### SEO & Metadata

- ✅ Metadata defined in `app/layout.tsx` (title, OG, Twitter cards)
- ✅ JSON-LD schema in layout (future enhancement)
- ✅ sitemap.ts and robots.ts (future routes)

---

## Performance Goals & Verification

### Lighthouse Targets

- **Desktop**: 90+ Performance, 95+ Accessibility, 95+ SEO
- **Mobile (4G)**: 85+ Performance
- **CLS**: < 0.1 (zero layout shift)
- **LCP**: < 2.5s
- **FCP**: < 1.5s

### Verification Commands

```bash
npm run build        # 2.7s with Turbopack
npm run type-check   # No TypeScript errors
npm run lint         # No ESLint errors
npm run format       # Code formatted
```

### Image Optimization Checklist

- ✅ AVIF/WebP formats used (check Network tab)
- ✅ Fonts from self-hosted domain (not fonts.googleapis.com)
- ✅ Demo image: `/images/demo.svg`
- ✅ Company logos: `/logos/*.svg` with brand colors

---

## Deployment & Environments

### Current Deployment

- **Host**: Vercel (https://docchat-web.vercel.app)
- **Branch**: `main` → auto-deploys to production
- **Preview**: Each PR → automatic preview deploy
- **Build Command**: `next build` (Vercel auto-detects)

### Environment Variables (Future)

When backend integration happens:

```bash
# .env.local (development)
NEXT_PUBLIC_API_URL=http://localhost:3000

# Vercel Dashboard (production)
NEXT_PUBLIC_API_URL=https://api.docchat.com
```

---

## Common Workflows

### Adding New Section

1. Create component in `components/sections/NewSection.tsx`
2. Mark as `"use client"` if interactive
3. Add data to `lib/constants.ts` (new constant)
4. Import section in `app/page.tsx`
5. Add to render order
6. `npm run format` → `git commit`

### Updating Copy

1. Edit `lib/constants.ts` (single change)
2. All components automatically use new text
3. No component edits needed

### Adding Images

1. Add to `/public/images/` or `/public/logos/`
2. Use in component: `<Image src="/images/..." />`
3. Set `width`, `height`, and `priority` as needed

### Running Pre-commit Checks

```bash
npm run type-check    # TypeScript
npm run lint          # ESLint
npm run format        # Prettier + Tailwind sorting
git add -A && git commit -m "..."
```

---

## Known Decisions & Trade-offs

| Decision              | Why                                   | Trade-off                                       |
| --------------------- | ------------------------------------- | ----------------------------------------------- |
| Titillium Web font    | Modern, contemporary                  | Slightly more bandwidth than system fonts       |
| AVIF + WebP images    | 20% smaller files, better performance | Requires browser support (modern browsers only) |
| CSS-first Tailwind v4 | Faster, Rust compiler                 | Newer, less stack overflow answers              |
| shadcn/ui over UI kit | Full customization, copyable code     | Must maintain component updates manually        |
| Motion (not GSAP)     | MIT license, free                     | GSAP more powerful but commercial license       |
| Vercel deployment     | Native Next.js support                | Vendor lock-in (though minimal)                 |

---

## Phase 2 & Beyond

### Phase 2: Additional Pages

- [ ] `/pricing` — Full pricing page with comparison table
- [ ] `/features` — Detailed features with animations
- [ ] `/docs` — Documentation site (MDX support)
- [ ] `/blog` — Blog with static generation

### Phase 3: Backend Integration

- [ ] API route handlers (`app/api/...`)
- [ ] Authentication (login, sign-up)
- [ ] Newsletter subscription
- [ ] Contact form submissions

### Phase 4: Analytics & SEO

- [ ] Vercel Analytics integration
- [ ] Google Analytics / Hotjar heatmaps
- [ ] JSON-LD schema (SoftwareApplication, FAQPage)
- [ ] Open Graph images generation

---

## Quick Reference

### Key Commands

```bash
npm run dev            # Start dev server (localhost:3000)
npm run build          # Production build
npm start              # Run production build locally
npm run lint           # Check for errors
npm run format         # Auto-format all files
npm run type-check     # TypeScript validation
```

### Important Files to Know

- `app/page.tsx` — Landing page structure (orchestrates all sections)
- `lib/constants.ts` — All content (edit here first)
- `app/layout.tsx` — Fonts, metadata, root setup
- `components/sections/*.tsx` — Individual landing page parts
- `package.json` — Dependencies, scripts, lint-staged config

### File Size Targets

- **Bundle JS**: < 150KB (with code splitting)
- **Images**: < 50KB each (AVIF format)
- **Fonts**: < 100KB (Titillium Web, self-hosted)

---

## Notes for Future Sessions

This project prioritizes:

1. **User Experience** — Fast, accessible, beautiful
2. **Code Quality** — Strict TypeScript, pre-commit checks
3. **Maintainability** — Constants-driven, DRY principles
4. **Performance** — Lighthouse 90+, image optimization
5. **Scalability** — Ready for backend integration, additional pages

When continuing development:

- Always check `lib/constants.ts` for content structure
- Use Tailwind classes exclusively (no custom CSS)
- Verify `npm run build` succeeds before committing
- Test locally: `npm run dev` → browser → Network/Lighthouse
- Ensure pre-commit hooks pass (TypeScript + lint)

---

## Questions to Ask Yourself

- ✅ Is this component reusable or specific to one section?
- ✅ Did I add the data to `constants.ts` first?
- ✅ Does this image need to be optimized with `next/image`?
- ✅ Did `npm run build` succeed?
- ✅ Did pre-commit hooks pass?
- ✅ Is my code using `any` types? (Should not be!)
- ✅ Did I test mobile view in DevTools?

---

**Last Updated**: 2026-04-07 (Phase 1 Complete)  
**Deployed**: Vercel (https://docchat-web.vercel.app)  
**Status**: ✅ Fully functional landing page, ready for Phase 2
