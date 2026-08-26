# UX Research Document — erxes-20x-web

> **Version:** 1.0
> **Date:** 2026-08-26
> **Author:** UX Researcher (AI)
> **Based on:** business-requirements.md v1.0

---

## 1. Research Overview

### 1.1 Objectives
- Define the ideal information architecture for a 5-day training course site.
- Identify how learners navigate daily content and switch languages.
- Preserve the proven UX patterns from the reference site while adapting to Mongolian/English audiences.

### 1.2 Methodology
- Document analysis (BRD, site.config.json, reference site audit)
- Stakeholder interview (one question, confirmed goals)
- Competitive/reference analysis of `erxes-app.vercel.app/day/1`

### 1.3 Scope
- Homepage, About, Curriculum, Team, Contact, and Day 1–5 pages.
- Bilingual Mongolian/English UX.
- Responsive design from mobile to desktop.

### 1.4 Key Findings Summary
1. **Day-by-day navigation is the primary mental model:** Users expect a persistent Day 1–5 nav and a landing card grid.
2. **Language switching must be global:** Every page, including day pages, needs MN/EN toggle.
3. **Code/terminal visuals build trust:** The reference site’s dark console aesthetic signals a developer-focused course.
4. **Mobile bottom day-nav is critical:** On small screens, quick day switching should sit at the bottom for thumb reach.

---

## 2. User Personas

### Persona 1: Boldoo — Mongolian Trainee

#### Demographics & Context
- **Age Range:** 22–32
- **Location:** Ulaanbaatar, Mongolia
- **Occupation:** Junior developer or marketing ops trainee
- **Tech Proficiency:** Intermediate — can browse, copy commands, switch languages
- **Primary Device:** Smartphone, sometimes laptop

#### Behavioral Patterns
- **Usage Frequency:** A few times per week during the course
- **Task Priorities:** 1) See today’s topic, 2) Review earlier days, 3) Share a link with a classmate
- **Decision Factors:** Clarity of daily agenda, credibility of content, ease of switching to English
- **Pain Points:** Scattered slide links, unclear schedule, poor mobile layout
- **Motivations:** Keep up with the course, prepare before each day, look competent in front of team

#### Goals & Needs
- **Primary Goals:** Quickly understand what each day covers
- **Secondary Goals:** Share day pages, contact organizers
- **Success Criteria:** Finds the right day page in under 5 seconds, understands the topic

#### Context of Use
- **Environment:** Office, home, commute
- **Time Constraints:** Checks site in short breaks
- **Distractions:** Notifications, multitasking

#### Quote
> “Өдөр бүр юу заахаа хурдан олж үзмээр байна.”

### Persona 2: Sarah — English-Speaking Team Lead

#### Demographics & Context
- **Age Range:** 30–45
- **Location:** International or local expat
- **Occupation:** Engineering manager or project lead
- **Tech Proficiency:** High
- **Primary Device:** Laptop, occasionally phone

#### Behavioral Patterns
- **Usage Frequency:** One to two visits to evaluate the course
- **Task Priorities:** 1) Evaluate curriculum, 2) Share with team, 3) Contact organizers
- **Decision Factors:** Professional presentation, clear outcomes, English quality
- **Pain Points:** Bad translations, missing English pages
- **Motivations:** Decide whether to enroll the team

#### Goals & Needs
- **Primary Goals:** Assess the full 5-day curriculum
- **Secondary Goals:** Reach out for corporate training
- **Success Criteria:** Can read every day page in English, sees clear CTA

#### Context of Use
- **Environment:** Work desk
- **Time Constraints:** Limited evaluation time
- **Distractions:** Meetings, Slack

#### Quote
> “I need a clean overview I can send to my team in English.”

---

## 3. Customer Journey Mapping

### Journey Overview
**Stages:** Discovery → Consideration → Engagement → Retention

### Stage 1: Discovery
- **Touchpoints:** Social share, search, direct link from slides
- **User Actions:** Lands on homepage or a day page
- **Emotions:** Curious, slightly skeptical
- **Pain Points:** Unclear what the course is about
- **Opportunities:** Strong hero, clear value prop, trust signals

### Stage 2: Consideration
- **Touchpoints:** Curriculum cards, About page
- **User Actions:** Skims Day 1–5 cards, clicks one or two days
- **Emotions:** Evaluating, comparing
- **Pain Points:** Too much text, no clear structure
- **Opportunities:** Scannable day cards with consistent labels

### Stage 3: Engagement
- **Touchpoints:** Day pages
- **User Actions:** Reads lessons, copies commands, clicks next/previous
- **Emotions:** Focused, learning
- **Pain Points:** Can’t find the next day, language mismatch
- **Opportunities:** Persistent day nav, next/prev pagination, language switcher

### Stage 4: Retention
- **Touchpoints:** Contact page, return visits
- **User Actions:** Contacts organizer, revisits days
- **Emotions:** Satisfied, returning
- **Pain Points:** Hard to reach organizers
- **Opportunities:** Visible contact CTA, bookmarkable day URLs

---

## 4. Information Architecture & Sitemap

### 4.1 Content Hierarchy

```text
Home (mn | en)
├── Hero
├── About
├── Curriculum (Day 1–5 cards)
├── Team
├── Contact
└── Footer

Day Pages
├── Day 1
├── Day 2
├── Day 3
├── Day 4
└── Day 5

Standalone Pages
├── About
├── Team
└── Contact
```

### 4.2 Navigation Design
- **Primary Navigation:** Brand logo, Day 1–Day 5 links, MN/EN switch
- **Secondary Navigation:** Header progress widget (visual only)
- **Footer Navigation:** Copyright, contact link
- **Mobile Navigation:** Bottom fixed bar with Day 1–Day 5 links and language switch

### 4.3 Content Organization Principles
- Each day is a first-class route with identical MN/EN slugs.
- Homepage summarizes all days; day pages expand the detail.
- Code/commands are grouped in copyable code windows.
- Completion/checkpoint UI is visual-only for MVP.

### 4.4 Search & Filter Strategy
- Not required for MVP.

---

## 5. Wireframe Guidance

### 5.1 Global Layout Structure
- **Header:** Sticky, blurred dark background, top lime border, 72px min-height
- **Footer:** Minimal, brand logo + copyright, top border
- **Content Width:** max 1240px, centered, 40px side gutters (desktop), 28px (mobile)
- **Grid System:** CSS Grid + Flexbox; 6-column day grid on desktop, 2 on tablet, 1 on mobile

### 5.2 Section Layouts

#### Hero
- **Layout Type:** Two-column grid (text left, console visual right)
- **Content Priority:** Course title, lead, CTA, tags
- **Component Types:** Eyebrow, H1, paragraph, buttons, terminal card
- **White Space:** Large top/bottom padding (94px/82px desktop)
- **Responsive Behavior:** Stacks to single column, console moves below

#### Curriculum Cards
- **Layout Type:** 6-column grid, first 3 cards span 2 cols, last 2 span 3 cols
- **Content Priority:** Day number, eyebrow, title, summary, progress bar
- **Component Types:** Cards with accent top border, hover lift
- **White Space:** 16px gap, 27px padding
- **Responsive Behavior:** 2-column tablet, 1-column mobile

#### Day Page
- **Layout Type:** Two-column (sidebar nav + lesson stack)
- **Content Priority:** Day outcome banner, lesson cards, code blocks, checkpoints
- **Component Types:** Sidebar, lesson cards, code window, pagination
- **White Space:** 76px top padding, 34px gap between lessons
- **Responsive Behavior:** Sidebar hidden on mobile; lessons stack

### 5.3 Content Priority
1. **Homepage:** Hero → Course stats → Curriculum → Method list → CTA → Footer
2. **Day Page:** Back link → Day hero → Outcome banner → Sidebar → Lessons → Pagination

### 5.4 Component Patterns
- **Cards:** Dark panel, 1px border, rounded 16px, accent top border on hover
- **Lists:** No bullets, custom lime diamond bullets for lesson items
- **Forms:** Minimal contact form or mailto link
- **Media:** SVG logo, CSS-only terminal/console visual

---

## 6. Accessibility Requirements

### 6.1 WCAG 2.1 Level AA Compliance

| Requirement | Implementation | Priority |
|-------------|---------------|----------|
| Keyboard Navigation | All nav links, buttons, pagination keyboard accessible | High |
| Screen Reader Support | ARIA labels on language switch, day nav, progress | High |
| Color Contrast | Lime accent on dark bg ≥ 3:1 for large text, muted text ≥ 4.5:1 | High |
| Focus Indicators | 3px cyan outline, 4px offset | High |
| Alt Text | Logo and any imagery alt text | High |
| Form Labels | Contact form inputs labeled | Medium |
| Text Resizing | Supports 200% zoom | Medium |
| Motion Sensitivity | `prefers-reduced-motion` disables heavy animations | Medium |

### 6.2 Multi-language Accessibility
- Allow 20% text expansion for English translations.
- Ensure Cyrillic characters render cleanly (Inter + system fonts).

### 6.3 Mobile Accessibility
- Touch targets ≥ 44x44px for day nav and buttons.
- Bottom nav avoids overlap with content (safe-area inset).

---

## 7. Responsive Design Strategy

### 7.1 Breakpoints

| Breakpoint | Width | Target Devices | Layout Changes |
|-----------|-------|---------------|----------------|
| Mobile | < 760px | Smartphones | Single column, bottom day nav, hero stacks |
| Tablet | 761–1050px | Tablets | 2-column day grid, sidebar narrows |
| Desktop | > 1050px | Laptops, desktops | Full grid, sticky header, full sidebar |

### 7.2 Mobile-first Approach
- Core content is readable on 320px.
- Enhance with multi-column and sticky elements at larger widths.

### 7.3 Content Adaptation
- Hide progress ring widget on tablet.
- Hide sidebar on mobile day pages; use top/back link and pagination.
- Reduce terminal visual height on mobile.

### 7.4 Performance Budget
- Mobile: < 1MB initial load, < 3s load time
- Desktop: < 2MB initial load, < 2s load time

---

## 8. Interaction & Motion Design

### 8.1 Animation Principles
- Fast, purposeful micro-interactions only.
- Respect reduced motion.
- Lime accent draws attention to progress and CTAs.

### 8.2 Micro-interactions

| Element | Trigger | Animation | Duration |
|---------|---------|-----------|----------|
| Buttons | Hover | translateY(-2px) | 160ms |
| Day cards | Hover | translateY(-6px), border brighten | 180ms |
| Card top border | Hover | scaleX 0.18 → 1 | 220ms |
| Links | Hover | Color transition | 160ms |
| Progress bars | Load | width transition | 300ms |
| Language switch | Click | Background pill transition | 160ms |

### 8.3 Page Transitions
- None for MVP; rely on Next.js default navigation.

### 8.4 Scroll Behaviors
- `scroll-behavior: smooth`
- `scroll-padding-top: 112px` to account for sticky header

---

## 9. Content Strategy & UX Writing

### 9.1 Tone of Voice
- Casual but professional.
- Developer-friendly: clear, direct, no fluff.
- Encouraging for learners.

### 9.2 Terminology

| Term | Usage | Avoid |
|------|-------|-------|
| Сургалт / Course | The overall 5-day program | “Class” |
| Өдөр / Day | Individual day pages | “Module” unless client prefers |
| Хичээл / Lesson | Sub-sections within a day | “Lecture” |
| Гүйцэтгэл / Progress | Visual completion indicator | “Score” |

### 9.3 CTA Copy Guidelines
- Use action verbs: Эхлэх, Үзэх, Холбогдох / Start, View, Contact
- Keep primary CTA consistent: “Сургалт эхлүүлэх” / “Start Learning”

### 9.4 Multi-language UX Writing
- Mongolian first; English as parallel, not literal word-for-word where meaning differs.
- Keep labels short so they fit in header and bottom nav.

### 9.5 Error Messages
- 404: “Энэ хуудас олдсонгүй. Нүүр хуудас руу буцах уу?” / “Page not found. Go home?”

---

## 10. Usability Testing Plan

### 10.1 Test Scenarios
1. Find Day 3 content from the homepage.
2. Switch the Day 2 page to English.
3. Navigate from Day 1 to Day 5 using only the day nav.
4. Contact the course organizers.

### 10.2 Testing Methods
- Task-based walkthrough with 3–5 trainees
- Mobile and desktop

### 10.3 Success Metrics
- 100% of participants can find any day page within 10 seconds
- 100% can switch language
- ≤ 1 misclick per task

---

## 11. Competitive UX Analysis

| Competitor | Strengths | Weaknesses | Opportunities |
|-----------|-----------|------------|---------------|
| erxes-app.vercel.app/day/1 | Strong day navigation, clear card hierarchy, code-first visuals, progress tracking | Single language, content locked to Expo mobile course | Add MN/EN, replace content with client’s 5-day curriculum |

---

## 12. Success Metrics & KPIs

### 12.1 UX Metrics
- Task success rate: ≥ 90%
- Time on task: < 15 seconds for day navigation
- Error rate: < 5%

### 12.2 Business Metrics
- Day page visits / total sessions: ≥ 70%
- Language switch usage: ≥ 20%
- Contact CTA CTR: ≥ 5%

### 12.3 Technical Metrics
- Lighthouse performance ≥ 75
- Accessibility score ≥ 90

---

## 13. Design Agent Collaboration

- Reference-site CSS extracted; primary lime accent confirmed.
- Pencil design stage should produce 2–3 homepage options using this dark-course aesthetic.
- Motion level recommendation: 3 (Framer Motion + Lenis for smooth scroll, GSAP optional for complex sequences).

---

## 14. Assumptions & Constraints

### Assumptions
- Day 1 and Day 2 content will be approximated from Google Slides.
- Day 3–5 content will be placeholder until real material is supplied.
- User wants a faithful visual copy of the reference site.

### Constraints
- Must use erxes CMS for pages and menus.
- Must support Mongolian and English.
- Must deploy to Vercel.
- Must pass `pnpm build` before deploy.

---

## 15. Next Steps

1. Confirm UX research is acceptable.
2. Proceed to Section B — Step 2 (Design) in Pencil.
3. Create 2–3 homepage direction previews based on this research and the reference site.
