# ITSA Website

> **Information Technology Students Association** — Official website for PVG's College of Engineering, Technology & Management, Pune.

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite)](https://vitejs.dev)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-14-ff0055?logo=framer)](https://www.framer.com/motion)

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Getting Started](#3-getting-started)
4. [Project Structure](#4-project-structure)
5. [Routing & Navigation Architecture](#5-routing--navigation-architecture)
6. [Component Library](#6-component-library)
7. [Data Layer](#7-data-layer)
8. [Design System](#8-design-system)
9. [Pages — Current Status](#9-pages--current-status)
10. [Contribution Workflow](#10-contribution-workflow)
11. [Scripts](#11-scripts)

---

## 1. Project Overview

The ITSA website is a **single-page React application** with an animated dark-mode UI. It uses a custom left-side branched navigation menu and a full-viewport animated wave background. Each menu item routes to a dedicated page rendered as an animated overlay, keeping the background always alive behind the content.

**Current live pages:**
- ✅ **Home** — Animated hero with masked video heading, split-flap year display, and tagline
- ✅ **Our Team** — Interactive folder-based team member explorer

**Placeholder pages (heading only, ready for content):**
- 🔲 About Us · Vision & Mission · Flagship Events · Achievements · Us on Socials · Get in Touch

---

## 2. Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | React | 19 |
| Build Tool | Vite | 6 |
| Animations | Framer Motion | 14 |
| Supplemental Animation | GSAP | 3 |
| Icon Library | HugeIcons (core-free + react) | 1.0 |
| Utility Icons | Lucide React | 1.16 |
| CSS Utilities | TailwindCSS v4 (via `@tailwindcss/vite`) | 4 |
| Class Merging | clsx + tailwind-merge | latest |
| Fonts | Google Fonts — Anton, Bebas Neue, Plus Jakarta Sans, Space Grotesk, Orbitron, Rajdhani, Audiowide, League Spartan | CDN |

> **Note:** TailwindCSS is installed but **not the primary styling method**. The main app (`App.jsx`) and all pages use **inline styles** for precise control. Tailwind is available for utility classes inside section components where needed.

---

## 3. Getting Started

### Prerequisites
- **Node.js** ≥ 18.x ([download](https://nodejs.org))
- **npm** ≥ 9.x (comes with Node)
- **Git**

### Setup

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd itsa-website

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The dev server runs at **http://localhost:5173** by default.

---

## 4. Project Structure

```
itsa-website/
├── public/
│   └── logo.png               # ITSA logo (used in top-centre of every page)
│
├── src/
│   ├── main.jsx               # React entry point — mounts <App /> into #root
│   ├── App.jsx                # Root component: layout, routing, page orchestration
│   ├── index.css              # Global base styles (minimal — mostly inline styles used)
│   │
│   ├── data/                  # Static data files — edit these to update content
│   │   ├── navigationData.js  # Menu structure (groups + items + icons)
│   │   ├── domainsData.js     # Technical domains list
│   │   ├── eventsData.js      # Events/workshops data
│   │   └── teamData.js        # Team member records (legacy, TeamPage has its own inline data)
│   │
│   ├── pages/                 # Full-page route components
│   │   ├── TeamPage.jsx       # ✅ Built — folder-based team explorer
│   │   ├── PlaceholderPage.jsx# Shared blank page template (shows bg + page heading)
│   │   └── BlankPage.jsx      # Utility: renders null (kept for reference)
│   │
│   └── components/
│       ├── background/
│       │   ├── SlicedWaves.jsx        # ⭐ Animated WebGL-style ribbon background
│       │   ├── SlicedWaves.css
│       │   ├── Background.jsx         # Simple background wrapper
│       │   └── BackgroundPlaceholder.jsx
│       │
│       ├── navigation/
│       │   ├── BranchedMenu.jsx       # ⭐ Left-side tree navigation menu
│       │   ├── BranchedMenu.css
│       │   └── Navbar.jsx             # Alternative navbar (not currently active)
│       │
│       ├── text/
│       │   ├── FullformText.jsx       # ⭐ Video/image masked heading (MaskedHeading)
│       │   ├── MaskedHeading.css
│       │   ├── SplitFlapText.jsx      # ⭐ Mechanical split-flap display animation
│       │   ├── SplitFlapText.css
│       │   ├── TechText.jsx           # Animated tech/typewriter-style text
│       │   └── TechText.css
│       │
│       ├── folder/
│       │   ├── Folder.jsx             # ⭐ Interactive glassmorphic file-folder UI component
│       │   └── Folder.css
│       │
│       ├── gallery/
│       │   ├── AccordionGallery.jsx   # Expandable image gallery component
│       │   └── AccordionGallery.css
│       │
│       ├── hero/
│       │   └── HeroPlaceholder.jsx    # Hero section placeholder
│       │
│       └── sections/                 # Legacy section components (Tailwind-based, not active in routing)
│           ├── AboutSection.jsx
│           ├── ContactSection.jsx
│           ├── DomainsSection.jsx
│           ├── EventsSection.jsx
│           ├── TeamSection.jsx
│           └── Footer.jsx
│
├── index.html                 # HTML shell — fonts, meta, root div
├── vite.config.js             # Vite config — React + TailwindCSS v4 plugins
├── package.json
└── package-lock.json
```

---

## 5. Routing & Navigation Architecture

This project does **not use React Router**. Routing is handled manually in `App.jsx` via a `PAGE_MAP` object and `useState`.

### How it works

```
User clicks menu item
       ↓
BranchedMenu fires onSelect(value)
       ↓
handleSelect(value) → setActivePage(value)
       ↓
pageEntry = PAGE_MAP[value]           ← { component, label, category }
PageComponent = pageEntry.component
       ↓
<AnimatePresence> renders <PageComponent label=... category=... onBack=... />
       ↓
Home content visibility = 'hidden'   ← prevents bleed-through
Background (SlicedWaves) stays visible always
```

### PAGE_MAP (in `App.jsx`)

```js
const PAGE_MAP = {
  about:        { component: PlaceholderPage, label: 'About Us',        category: 'Explore ITSA'   },
  vision:       { component: PlaceholderPage, label: 'Vision & Mission', category: 'Explore ITSA'   },
  events:       { component: PlaceholderPage, label: 'Flagship Events',  category: 'Activities'     },
  achievements: { component: PlaceholderPage, label: 'Achievements',     category: 'Activities'     },
  team:         { component: TeamPage,        label: 'Our Team',         category: 'Community & Us' },
  socials:      { component: PlaceholderPage, label: 'Us on Socials',    category: 'Community & Us' },
  contact:      { component: PlaceholderPage, label: 'Get in Touch',     category: 'Community & Us' },
};
```

### Adding a new page

1. Create `src/pages/MyPage.jsx` — must accept `{ onBack, label, category }` props
2. Add an entry to `PAGE_MAP` in `App.jsx`
3. The menu item `value` in `navigationData.js` must match the `PAGE_MAP` key exactly

### Logo → Home navigation

Clicking the ITSA logo (top-centre) calls `handleBack()` → sets `activePage = null` → home page reappears.

---

## 6. Component Library

### ⭐ SlicedWaves (`components/background/SlicedWaves.jsx`)
Animated ribbon/wave background rendered on a `<canvas>`. Always at `zIndex: 0`.

**Key props:** `color1`, `color2`, `color3`, `ribbons`, `spacing`, `perspective`, `blur`, `glow`, `position`, `mouseInteraction`

---

### ⭐ BranchedMenu (`components/navigation/BranchedMenu.jsx`)
Left-side collapsible tree navigation. Fires `onSelect(value)` on leaf click.

**Key props:** `items` (from `navigationData.js`), `defaultOpen`, `onSelect`, `color`, `accentColor`, `lineColor`, `width`

---

### ⭐ MaskedHeading / FullformText (`components/text/FullformText.jsx`)
Renders heading text with a **video or image mask** clipped to the characters. Used for the hero "Information Technology Students Association" title and tagline.

**Key props:** `text`, `tag`, `mediaType`, `src`, `reveal`, `trigger`, `parallax`, `textScale`, `weight`, `tracking`

---

### ⭐ SplitFlapText (`components/text/SplitFlapText.jsx`)
Mechanical departure-board–style flip animation for text. Used for the `2026-2027` year display on the home page.

**Key props:** `words`, `flipDuration`, `stagger`, `cycleDelay`, `charset`, `tileStyle`, `tileColor`, `textColor`, `fontSize`, `loop`

---

### ⭐ Folder (`components/folder/Folder.jsx`)
Glassmorphic interactive file-folder component used in `TeamPage`. Supports click-to-open with item cards inside.

**Key props:** `label`, `items`, `mode`, `variant`, `color`, `size`, `openOn`, `frost`, `intro`, `theme`

---

### AccordionGallery (`components/gallery/AccordionGallery.jsx`)
Horizontally-expanding image gallery with accordion animation. Available for use in event/gallery pages.

---

## 7. Data Layer

All content lives in `src/data/`. Edit these files to update website content — no component changes needed.

| File | Exports | Used In |
|---|---|---|
| `navigationData.js` | `itsaMenuItems` | `App.jsx`, `BranchedMenu` |
| `domainsData.js` | `technicalDomains` | Available for DomainsPage |
| `eventsData.js` | `itsaEvents` | Available for EventsPage |
| `teamData.js` | `teamMembers` | Available (TeamPage uses its own inline data currently) |

### Adding a new menu item

Edit `navigationData.js` — add a `{ value, label, icon }` entry to the appropriate group's `children` array. The `value` string **must** have a matching key in `PAGE_MAP` in `App.jsx`.

---

## 8. Design System

### Colors (used throughout inline styles)

| Token | Value | Usage |
|---|---|---|
| Background | `#09090b` | Root div background |
| Accent cyan | `#adf4ff` | Logo glow, headings, highlights |
| Accent cyan dim | `rgba(173,244,255,0.55)` | Category labels |
| Text primary | `#f5f5f5` | Headings, main text |
| Text muted | `rgba(245,245,245,0.4)` | Subtext, labels |
| Border subtle | `rgba(255,255,255,0.07)` | Card borders |
| Blue | `#3b82f6` | Activities accent |
| Purple | `#a78bfa` | Secondary accent |
| Amber | `#f59e0b` | Achievements/Events |
| Green | `#10b981` | Success/Upcoming status |

### Z-index layers

| Layer | Z-Index | Element |
|---|---|---|
| Background | `0` | SlicedWaves canvas |
| Home content | `5` | Scroll container (hidden when page active) |
| Page overlay | `20` | Page components |
| Navigation menu | `30` | BranchedMenu |
| Logo | `50` | Logo button |

### Typography

- **Display / Hero:** `Anton` (uppercase, weight 400/800)
- **Body:** `Plus Jakarta Sans` via system inherit
- **Monospace accents:** `Space Grotesk`, `Orbitron`, `Audiowide`
- **Page headings:** `Anton, inherit` — `clamp(2.8rem, 6vw, 5.5rem)`, weight 800

### Page layout convention

All page components follow this shell:

```jsx
<motion.div
  variants={pageVariants}   // enter/exit animation
  initial="hidden"
  animate="visible"
  exit="exit"
  style={{
    position: 'absolute',
    inset: 0,              // or left: 'calc(240px + 2rem)' for menu clearance
    zIndex: 20,
    // NO background — SlicedWaves shows through
  }}
>
  {/* ← Back button */}
  {/* Page content */}
</motion.div>
```

---

## 9. Pages — Current Status

| Route Value | Label | Status | File |
|---|---|---|---|
| `about` | About Us | 🔲 Placeholder | `PlaceholderPage` |
| `vision` | Vision & Mission | 🔲 Placeholder | `PlaceholderPage` |
| `events` | Flagship Events | 🔲 Placeholder | `PlaceholderPage` |
| `achievements` | Achievements | 🔲 Placeholder | `PlaceholderPage` |
| `team` | Our Team | ✅ Built | `TeamPage.jsx` |
| `socials` | Us on Socials | 🔲 Placeholder | `PlaceholderPage` |
| `contact` | Get in Touch | 🔲 Placeholder | `PlaceholderPage` |

---

## 10. Contribution Workflow

```
main          ← stable, production-ready
  └── dev     ← integration branch, always working
        ├── feat/about-page
        ├── feat/events-page
        ├── feat/contact-form
        └── fix/...
```

1. **Branch off `dev`**, never directly off `main`
2. Name branches: `feat/<page-or-feature>` or `fix/<issue>`
3. One page = one branch = one pull request
4. PR must be reviewed before merging into `dev`
5. `dev` → `main` only when a release is ready

---

## 11. Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server at `http://localhost:5173` |
| `npm run build` | Build production bundle into `/dist` |
| `npm run preview` | Serve the built `/dist` locally for testing |
