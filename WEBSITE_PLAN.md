# Next.js Website Plan

## 1) Project Goal
Build a modern marketing website in **Next.js** with clear calls to action, strong SEO, and fast performance.

## 2) Recommended Stack
- Framework: **Next.js 14+ (App Router)**
- Language: **TypeScript**
- Styling: **Tailwind CSS**
- UI primitives: shadcn/ui (optional)
- Content: MDX or headless CMS (if non-developers will edit content)
- Deployment: **Vercel**
- Analytics: Vercel Analytics or Plausible

## 3) Quick Start
```bash
npx create-next-app@latest my-website --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd my-website
npm run dev
```

## 4) Suggested Pages (App Router)
Create these routes inside `src/app`:
- `/` (Home)
- `/about`
- `/services`
- `/blog`
- `/contact`
- Optional: `/pricing`, `/faq`, `/privacy-policy`, `/terms`

## 5) Suggested Folder Structure
```text
src/
  app/
    layout.tsx
    page.tsx
    about/page.tsx
    services/page.tsx
    blog/page.tsx
    contact/page.tsx
    api/contact/route.ts
  components/
    ui/
    layout/
    sections/
  lib/
    seo.ts
    analytics.ts
  content/
    blog/
  styles/
```

## 6) Core Implementation Plan
1. **Global layout**
   - Build `layout.tsx` with header, footer, and metadata defaults.
2. **Reusable sections**
   - Hero, feature grid, testimonial cards, CTA strip, contact form.
3. **Navigation + footer**
   - Keep links consistent across all pages.
4. **Contact form**
   - Use a route handler (`/api/contact`) or server actions.
5. **Blog content**
   - Start with MDX files; render with static generation.

## 7) SEO Plan (Next.js-specific)
- Use route-level `metadata` exports for title/description.
- Add Open Graph and Twitter metadata.
- Generate sitemap (`app/sitemap.ts`) and robots (`app/robots.ts`).
- Use semantic headings (`h1` to `h3`) and internal linking.

## 8) Performance & Accessibility Plan
- Use `next/image` for optimized images.
- Use dynamic imports for heavy components.
- Keep CLS low by setting image dimensions.
- Ensure keyboard navigation and visible focus styles.
- Run Lighthouse and fix critical issues before launch.

## 9) Deployment Plan
1. Push project to GitHub.
2. Import into Vercel.
3. Configure environment variables.
4. Set custom domain.
5. Run final QA on production URL.

## 10) 4-Week Timeline
- **Week 1:** Setup project, sitemap, wireframes, core components.
- **Week 2:** Build all primary pages and responsive layout.
- **Week 3:** Add blog, contact flow, analytics, SEO metadata.
- **Week 4:** QA, performance tuning, accessibility checks, launch.
