# Business Requirements Document — erxes-20x-web

> **Version:** 1.0
> **Date:** 2026-08-26
> **Author:** Business Analyst (AI)
> **Status:** Draft

---

## 1. Executive Summary

`erxes-20x-web` is a public information website for a five-day erxes training course. It mirrors the structure and visual style of the existing `erxes-app.vercel.app/day/1` course portal, replacing the Expo mobile-app curriculum with the client’s own Day 1–Day 5 training content. The site is bilingual (Mongolian default, English fallback) and targets trainees, team leads, and prospective learners who need a clear, day-by-day overview of what is taught during the five-day program.

---

## 2. Business Objectives & Success Metrics

| # | Objective | Success Metric | Target |
|---|-----------|---------------|--------|
| 1 | Inform trainees what is covered each day | Unique page views on `/day-1`–`/day-5` | ≥ 70% of total sessions visit a day page |
| 2 | Present a modern, trustworthy course brand | Average engagement time | ≥ 2 minutes per session |
| 3 | Support Mongolian and English learners | Language switch usage | ≥ 20% use English version |
| 4 | Drive course sign-ups / participation | CTA clicks on “Бүртгүүлэх” / “Register” | ≥ 5% CTR |

---

## 3. Stakeholder Analysis

| Role | Name/Department | Responsibility |
|------|----------------|---------------|
| Course Owner | Training lead / Enkhee | Provides Day 1–Day 5 slide content and approves messaging |
| Learners | Trainees | Consume course material and register for sessions |
| Developers / AI Agent | erxes web pipeline | Build, connect CMS, seed content, deploy |

---

## 4. Scope

### 4.1 In-scope
- Homepage with hero, curriculum overview, learning path, CTA, footer
- Dedicated pages for Day 1, Day 2, Day 3, Day 4, Day 5
- Bilingual content (Mongolian default, English translations)
- Sticky day navigation and language switcher
- Dark theme with lime/accent palette copied from reference site
- CMS-managed pages and menus connected to erxes CMS
- Mobile-responsive layout

### 4.2 Out-of-scope
- User authentication / progress tracking per user
- Payment or booking engine
- Blog or news section
- E-commerce features
- Real-time chat or notifications

---

## 5. Target Audience & User Personas

### Primary Persona — Mongolian Trainee
- **Demographics:** 20–35 years old, developer or marketer, based in Mongolia
- **Goals:** Quickly understand the 5-day course structure and what will be taught each day
- **Pain Points:** Scattered slide links, unclear daily agenda, hard to share with team
- **Tech Proficiency:** Intermediate — comfortable browsing web, switching languages

### Secondary Persona — English-Speaking Team Lead
- **Demographics:** 30–45 years old, engineering manager or project lead
- **Goals:** Evaluate course content for a team, share schedule with stakeholders
- **Pain Points:** Needs clean overview, wants to switch to English easily
- **Tech Proficiency:** High — expects fast, mobile-friendly experience

---

## 6. Site Information Architecture & Sitemap

### 6.1 Page Hierarchy

```text
Home (mn|en)
├── About
├── Services / Curriculum
│   ├── Day 1
│   ├── Day 2
│   ├── Day 3
│   ├── Day 4
│   └── Day 5
├── Team
├── Contact
└── Legal
    └── Privacy Policy (placeholder)
```

### 6.2 Navigation Structure

- **Header:** Brand logo, Day 1–Day 5 links, language switch (MN / EN), progress mini-widget
- **Footer:** Brand logo, copyright, contact link
- **Mobile:** Hamburger or bottom day-nav bar with Day 1–Day 5 shortcuts

---

## 7. Functional Requirements

### 7.1 Section-specific Requirements

#### Hero
- **Purpose:** Introduce the 5-day course and build excitement
- **Content:** Course title, short value proposition, CTA buttons, terminal/console visual
- **CTA:** “Сургалт эхлүүлэх” / “Start Learning” → `/day-1`
- **Interactions:** Smooth scroll, language-aware copy

#### About
- **Purpose:** Explain what the training covers at a high level
- **Content:** Course description, duration, audience, outcomes
- **CTA:** “Дэлгэрэнгүй” / “Learn More” → `/about`

#### Services / Curriculum
- **Purpose:** Visual overview of the 5 days as clickable cards
- **Content:** Day number, short summary, duration estimate, progress indicator
- **CTA:** Each card links to `/day-1`–`/day-5`

#### Day Pages (`/day-1` to `/day-5`)
- **Purpose:** Show detailed content for that day
- **Content:** Day title, learning outcomes, lesson cards, code/command blocks, checkpoints
- **CTA:** “Дараагийн өдөр” / “Next Day” pagination
- **Interactions:** Lesson completion toggles (visual only), copy-code buttons

#### Team
- **Purpose:** Introduce instructors or organizers
- **Content:** Names, roles, short bios
- **CTA:** Connect on LinkedIn / contact

#### Contact
- **Purpose:** Let visitors reach the training organizers
- **Content:** Email, phone, simple contact form or link
- **CTA:** “Холбогдох” / “Contact Us”

### 7.2 E-commerce Requirements
- Not applicable.

### 7.3 Content Management Requirements
- All day pages and homepage content managed via erxes CMS
- Menu items (header/footer) managed via erxes CMS
- Multi-language support via CMS translations
- Slugs remain identical across languages (`/day-1`, `/mn/day-1`, `/en/day-1`)

### 7.4 Multi-language Requirements
- Default language: Mongolian (`mn`)
- Secondary language: English (`en`)
- Language switcher in header
- All homepage and day-page content translated

### 7.5 User Account & Authentication
- Not required.

### 7.6 Search & Filtering
- Not required.

---

## 8. Non-functional Requirements

### 8.1 Performance
- Page load time: < 3 seconds
- Time to First Byte (TTFB): < 200ms
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1

### 8.2 SEO
- Meta title/description per page in both languages
- Clean slugs and canonical URLs
- Open Graph tags for social sharing

### 8.3 Accessibility
- WCAG 2.1 AA contrast ratios on dark theme
- Focus-visible styles
- Semantic HTML and ARIA labels on interactive elements

### 8.4 Security
- CMS tokens stored in environment variables, not client bundles
- No sensitive user data collected

### 8.5 Browser & Device Support
- Chrome, Safari, Firefox, Edge (latest 2 versions)
- iOS Safari and Android Chrome
- Responsive from 320px to 1440px+

---

## 9. Design Direction

### 9.1 Visual Style
- Dark, premium developer-education aesthetic
- Code-terminal motif, monospace accents, rounded panels
- Clean hierarchy, generous whitespace, sticky progress indicators
- Faithful copy of `erxes-app.vercel.app/day/1` visual system

### 9.2 Color Palette
- **Background:** `#0a0a0a`
- **Background Soft:** `#101010`
- **Panel:** `#161616`
- **Panel Raised:** `#1d1d1d`
- **Lines/Borders:** `#323232`, `#242424`
- **Text (Ink):** `#f5f5f5`
- **Muted Text:** `#adadad`, `#777777`
- **Primary Accent (Lime):** `#d8ff00` or closest Tailwind lime
- **Secondary Accent (Cyan):** `#a5f3fc`
- **Success:** `#4ade80`
- **Warning:** `#f97316`

### 9.3 Typography
- **Sans:** Inter, system-ui, sans-serif
- **Mono:** SF Mono, Consolas, Menlo, monospace for code, day numbers, durations

### 9.4 Imagery & Photography
- Minimal photography; use abstract code/console visuals, progress rings, card accents
- Logo/SVG brand mark in header and footer

---

## 10. CTA Strategy & Conversion Goals

| Location | CTA Text | Destination | Goal |
|----------|----------|------------|------|
| Hero | Сургалт эхлүүлэх / Start Learning | /day-1 | Begin course journey |
| Curriculum | Өдөр 1–5-ийг үзэх / View Day 1–5 | /day-1 … /day-5 | Navigate to daily content |
| Day page bottom | Дараагийн өдөр / Next Day | Next day page | Continue learning |
| Contact | Холбогдох / Contact Us | /contact | Reach organizers |

---

## 11. Success Metrics & Acceptance Criteria

### 11.1 Quantitative Metrics
- Day page visits: ≥ 70% of sessions
- Average engagement time: ≥ 2 minutes
- Bounce rate: < 50%
- CTA click-through: ≥ 5%

### 11.2 Qualitative Criteria
- Visual fidelity matches reference site at ≥ 80%
- All 5 day pages render correctly in MN and EN
- Language switcher works across all pages
- Mobile navigation is usable

---

## 12. Assumptions & Constraints

### Assumptions
- Day 1 and Day 2 slide content will be extracted/approximated from the provided Google Slides links
- Day 3, Day 4, Day 5 content can be created as plausible placeholders until real content is supplied
- The client will review and refine CMS content after deployment

### Constraints
- Must use erxes CMS for content and menus
- Must deploy to Vercel via the pipeline scripts
- Must keep starter Next.js/React versions unchanged
- Must support Mongolian and English

---

## 13. References & Appendices

### 13.1 Reference Documents
- Reference site: https://erxes-app.vercel.app/day/1
- Day 1 content source: https://docs.google.com/presentation/d/1lR-pHrnV5NaIHUVl-T9eNTK7j43uHQhX-OKUHtwbODg/edit
- Day 2 content source: https://docs.google.com/presentation/d/197hrJnl4szBpt_19AcnwXo4Nx6kKrvXjigusG7n8Wjk/edit?slide=id.g3cddc7d8cda_0_18#slide=id.g3cddc7d8cda_0_18

### 13.2 Competitor Analysis

| Competitor | URL | Strengths | Weaknesses |
|-----------|-----|-----------|------------|
| Reference site | https://erxes-app.vercel.app/day/1 | Polished dark UI, clear day navigation, code-oriented visuals | Single-language, content tied to Expo app course |

### 13.3 Glossary

| Term | Definition |
|------|-----------|
| CMS | erxes Content Management System used to store pages, posts, menus, and translations |
| Day page | A dedicated route (`/day-1` … `/day-5`) showing that day’s lessons |
| MN / EN | Mongolian / English language codes |
