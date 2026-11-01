# ITSA Website — Agent & Developer Guide

> This document is intended for **AI coding agents and new developers** onboarding to the ITSA website project. Read this before touching any file.

---

## 1. What This Project Is

A **React 19 + Vite 6** single-page application for the ITSA student body at PVG's COET & M. It has no React Router — routing is custom, managed via `useState` in `App.jsx`. The animated `SlicedWaves` canvas background is always visible; page content renders as transparent overlays on top of it.

---

## 2. Environment Setup

### Requirements

| Tool | Minimum Version | Check |
|---|---|---|
| Node.js | 18.x | `node --version` |
| npm | 9.x | `npm --version` |
| Git | any | `git --version` |

### First-time setup

```bash
git clone <repo-url>
cd itsa-website
npm install        # installs all dependencies from package-lock.json
npm run dev        # starts dev server at http://localhost:5173
```

> ⚠️ **Never run `npm install <package>` without checking with the team first.** The dependency list is intentional and carefully chosen.

---

## 3. Dependency Map

### Runtime dependencies (`dependencies` in package.json)

| Package | Purpose | Key import |
|---|---|---|
| `react` `react-dom` | UI framework | `import { useState } from 'react'` |
| `framer-motion` | Page transitions, micro-animations | `import { motion, AnimatePresence } from 'framer-motion'` |
| `gsap` | Available for complex timeline animations | `import gsap from 'gsap'` |
| `@hugeicons/react` | Icon renderer component | `import { HugeiconsIcon } from '@hugeicons/react'` |
| `@hugeicons/core-free-icons` | Icon definitions (tree-shakeable) | `import { Calendar01Icon } from '@hugeicons/core-free-icons'` |
| `lucide-react` | Secondary icon set | `import { ChevronRight } from 'lucide-react'` |
| `clsx` | Conditional classname joining | `import clsx from 'clsx'` |
| `tailwind-merge` | Merge Tailwind classes safely | `import { twMerge } from 'tailwind-merge'` |

### Dev dependencies

| Package | Purpose |
|---|---|
| `vite` | Build tool and dev server |
| `@vitejs/plugin-react` | JSX transform for Vite |
| `tailwindcss` `@tailwindcss/vite` | TailwindCSS v4 via Vite plugin |
| `@types/react` `@types/react-dom` | TypeScript types (for editor intellisense even in JSX) |

---

## 4. The Routing System (Critical — Read This)

**There is no React Router.** Do not install it without team approval.

Routing works like this:

```
navigationData.js  →  BranchedMenu  →  onSelect(value)
                                              ↓
                                    App.jsx: PAGE_MAP[value]
                                              ↓
                              { component, label, category }
                                              ↓
                              <AnimatePresence> renders page
```

### `PAGE_MAP` lives in `src/App.jsx`

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

### To build a new page

1. Create `src/pages/YourPage.jsx`
2. Component **must** accept these props:
   - `onBack` — function, call it when the user navigates back
   - `label` — string, the page title (already passed by App)
   - `category` — string, the menu group name (already passed by App)
3. Replace the `PlaceholderPage` entry in `PAGE_MAP` with your new component
4. Import your component at the top of `App.jsx`

---

## 5. Page Component Template

Copy this shell when building any new page:

```jsx
import { motion } from 'framer-motion';

const pageVariants = {
  hidden:  { opacity: 0, x: 60, filter: 'blur(10px)' },
  visible: { opacity: 1, x: 0,  filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 120, damping: 20, delay: 0.05 } },
  exit:    { opacity: 0, x: -60, filter: 'blur(10px)',
    transition: { duration: 0.28, ease: 'easeInOut' } },
};

export default function YourPage({ onBack, label, category }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        position: 'absolute',
        top: 0, right: 0, bottom: 0,
        left: 'calc(240px + 2rem)',  /* clear the left nav menu */
        overflowY: 'auto',
        zIndex: 20,
        paddingTop: '2.4rem',
        paddingLeft: '2.4rem',
        paddingRight: '2.4rem',
        paddingBottom: '8rem',
        /* NO background — SlicedWaves shows through */
      }}
    >
      {/* Back button */}
      <motion.button
        onClick={onBack}
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: 'transparent',
          border: '1px solid rgba(196,247,255,0.2)',
          color: '#c4f7ff', padding: '6px 18px', borderRadius: '999px',
          cursor: 'pointer', fontSize: '13px', letterSpacing: '0.06em',
          fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', gap: '8px',
          backdropFilter: 'blur(8px)', marginBottom: '2.2rem',
        }}
      >
        ← Back
      </motion.button>

      {/* Page heading block */}
      <div style={{ marginBottom: '3rem' }}>
        <p style={{
          fontSize: '11px', letterSpacing: '0.24em', textTransform: 'uppercase',
          color: 'rgba(173,244,255,0.65)', margin: '0 0 6px', fontFamily: 'inherit',
        }}>
          {category}
        </p>
        <h1 style={{
          fontSize: 'clamp(2rem, 3vw, 2.6rem)', fontWeight: 800,
          color: '#f5f5f5', letterSpacing: '-0.02em', lineHeight: 1,
          margin: '0 0 10px', fontFamily: 'inherit',
        }}>
          {label}
          <span style={{
            display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
            background: '#adf4ff', marginLeft: 10, verticalAlign: 'middle',
            boxShadow: '0 0 12px #adf4ff',
          }} />
        </h1>
      </div>

      {/* Your content here */}
    </motion.div>
  );
}
```

---

## 6. Styling Rules

### Rule 1 — Use inline styles, not Tailwind, for pages and App.jsx

The main layout, page shells, and `App.jsx` use **inline `style={{}}` objects**. This is intentional for precise z-index/position control and to avoid Tailwind purging issues.

### Rule 2 — Tailwind is available for component internals

If you're building cards, grids, or typography-heavy sections inside a page, you may use Tailwind utility classes. But the outer page shell must remain inline.

### Rule 3 — Never hardcode a background color on a page container

Pages must have **no background** (or `background: transparent`) on their root element. This lets the `SlicedWaves` canvas show through. If you need to block the background for a card, apply it only to the card element, not the page wrapper.

### Rule 4 — Color palette to follow

```
Site background:      #09090b
Accent (cyan):        #adf4ff
Text primary:         #f5f5f5
Text muted:           rgba(245,245,245,0.4)
Card border:          rgba(255,255,255,0.07)
Card background:      rgba(255,255,255,0.03)
```

---

## 7. Data Files — How to Edit Content

All content data is in `src/data/`. These are plain JS files exporting arrays.

### `navigationData.js` — Menu structure

```js
export const itsaMenuItems = [
  {
    label: 'Group Name',       // shown as section header in menu
    children: [
      { value: 'route-key', label: 'Display Name', icon: SomeIcon },
    ]
  }
];
```

- `value` **must** match a key in `PAGE_MAP` in `App.jsx`
- Icons must be imported from `@hugeicons/core-free-icons`

### `domainsData.js` — Technical domains (for Domains page)

```js
export const technicalDomains = [
  { id, title, tagline, techStack: [], color, borderColor }
];
```

### `eventsData.js` — Events (for Events page)

```js
export const itsaEvents = [
  { id, title, type, date, location, status, description, tag }
];
```

### `teamData.js` — Team members (legacy, available for use)

```js
export const teamMembers = [
  { name, role, wing, avatar, github, linkedin }
];
```

---

## 8. Key Files — Quick Reference

| File | What it does | When to edit |
|---|---|---|
| `src/App.jsx` | Root layout, routing, logo, menu | Adding routes, changing layout |
| `src/data/navigationData.js` | Menu items & icons | Adding/removing menu entries |
| `src/pages/PlaceholderPage.jsx` | Shared blank page template | Changing placeholder style |
| `src/pages/TeamPage.jsx` | Team explorer (fully built) | Updating team content |
| `src/components/navigation/BranchedMenu.jsx` | Left nav tree component | Fixing menu behaviour |
| `src/components/background/SlicedWaves.jsx` | Animated canvas background | Changing background animation |
| `index.html` | HTML shell, Google Fonts | Adding fonts, changing meta |
| `vite.config.js` | Build config | Changing plugins, aliases |

---

## 9. Common Mistakes to Avoid

| ❌ Don't | ✅ Do instead |
|---|---|
| Add a background to the page root element | Keep page root transparent |
| Use `position: fixed` on page components | Use `position: absolute` — fixed breaks AnimatePresence |
| Import from `react-router-dom` | Use the existing `PAGE_MAP` system |
| Edit `node_modules/` | Never. Run `npm install` if something is missing |
| Commit `node_modules/` | It's in `.gitignore` |
| Commit `.env` files | Never commit secrets |
| Use `document.querySelector` for animations | Use Framer Motion refs or GSAP with React refs |
| Create components with `class` (CSS class) names that clash | Prefix your CSS classes with the component name |

---

## 10. Icons — How to Use HugeIcons

```jsx
// 1. Import the icon definition
import { Calendar01Icon, Award01Icon } from '@hugeicons/core-free-icons';

// 2. Import the renderer
import { HugeiconsIcon } from '@hugeicons/react';

// 3. Use it
<HugeiconsIcon icon={Calendar01Icon} size={20} strokeWidth={2} color="#adf4ff" />
```

Browse all available icons at: https://hugeicons.com/icons

---

## 11. Git Workflow

```bash
# Always start from dev
git checkout dev
git pull origin dev

# Create your feature branch
git checkout -b feat/about-page

# Work, then stage and commit
git add .
git commit -m "feat(about): build About Us page with mission highlights"

# Push and open PR to dev
git push origin feat/about-page
```

### Commit message convention

```
feat(<scope>):  new feature
fix(<scope>):   bug fix
style(<scope>): visual/CSS only
refactor:       code change, no behaviour change
data:           updating data files only
docs:           README or comments only
```

---

## 12. Build & Deploy

```bash
# Build production bundle
npm run build
# Output: /dist folder

# Preview the production build locally
npm run preview
```

The `/dist` folder is git-ignored. Deploy it to any static host (Vercel, Netlify, GitHub Pages, etc.).

For **Vercel**: connect the repo, set framework to `Vite`, build command `npm run build`, output dir `dist`.  
For **Netlify**: same settings, add `_redirects` file in `/public` with `/* /index.html 200` if needed.
