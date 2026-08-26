# Design Handoff — erxes-20x-web

## 0. Approval Record

- **Homepage options shown:** 2
  - `output/erxes-20x-web/designs/homepage-option-a.png` — Faithful dark course design with lime accent
  - `output/erxes-20x-web/designs/homepage-option-b.png` — Same design with cyan CTA accent
- **Selected option:** Option A (faithful lime accent)
- **Preview artifact file paths:**
  - `output/erxes-20x-web/designs/homepage-option-a.png`
  - `output/erxes-20x-web/designs/homepage-option-b.png`
- **Pencil project paths used:**
  - `output/erxes-20x-web/designs/homepage-directions.pen`
  - `output/erxes-20x-web/designs/design.pen`
- **Final design export:** `output/erxes-20x-web/designs/design.png`
- **Reference site:** https://erxes-app.vercel.app/day/1
- **Design strategy:** `copy-site`
- **User requested light/dark mode toggle:** Yes — implement with `next-themes`

## 1. Frontend Build Map

### Global Components
- **Header:** sticky, blurred dark background, top lime border, brand logo + "erxes 20x", Day 1–5 nav, MN/EN language switch, optional progress widget
- **Footer:** minimal, brand logo, copyright, contact link
- **Mobile nav:** bottom fixed bar with Day 1–5 links and language switch

### Homepage Sections (in order)
1. **Hero:** two-column (text left, console visual right), eyebrow, H1, lead, primary/secondary CTAs, tags
2. **Course Stats:** dark panel with 3 stats + progress ring
3. **Curriculum:** section header + 5 day cards in grid
4. **Method:** section header + 5 method cards
5. **CTA Banner:** lime background, dark text, CTA button
6. **Footer**

### Standalone Pages
- `/about` — expands About section
- `/services` or `/curriculum` — curriculum overview
- `/team` — instructors
- `/contact` — contact info/form
- `/day-1` to `/day-5` — day detail pages with sidebar nav, lessons, code blocks, checkpoints, next/prev pagination

### Dynamic CMS Routes
- All pages driven by erxes CMS
- Language switcher updates locale prefix (`/mn/day-1`, `/en/day-1`)
- Slugs stay identical across languages

## 2. erxes CMS Field Map

### Pages
- `home` — homepage content (sections as JSON or markdown)
- `about` — about content
- `services` — curriculum/summary content
- `team` — team content
- `contact` — contact content
- `day-1` to `day-5` — day page content with lessons and code blocks

### Menu
- **Header:** Brand/Home, Day 1–5, About, Team, Contact, language switch
- **Footer:** Home, Contact

### Translation
- Primary language: Mongolian (`mn`)
- Secondary: English (`en`)
- All page names, titles, content, and menu labels translated

## 3. Visual System

### Color
- Background: `#0a0a0a`
- Panel: `#161616`
- Panel Raised: `#1d1d1d`
- Lines: `#323232`
- Ink: `#f5f5f5`
- Muted: `#adadad`
- Primary accent (lime): `#d8ff00`
- Secondary accent (cyan): `#a5f3fc`

### Typography
- Body: Inter
- Mono: SFMono-Regular / Consolas / Menlo

### Spacing & Radius
- Max width: 1240px
- Section padding: 80–126px vertical
- Card radius: 16px
- Button radius: 10px
- Console radius: 24px

## 4. Interaction & Motion

- Card hover: lift 6px, border brighten
- Button hover: lift 2px
- Progress bars animate width on load
- Smooth scroll with Lenis
- Respect `prefers-reduced-motion`
- Light/dark mode toggle via next-themes (default dark)

## 5. Responsive Behavior

- Desktop: full grid, sticky sidebar
- Tablet: narrower grid, sidebar narrows
- Mobile: single column, bottom day nav, sidebar hidden

## 6. Content Notes

- Day 1 and Day 2 content approximated from provided Google Slides
- Day 3–5 use plausible placeholder content
- Tone: casual, developer-friendly, Mongolian-first
- CTA labels: "Сургалт эхлүүлэх" / "Start Learning", "Дараагийн өдөр" / "Next Day"
