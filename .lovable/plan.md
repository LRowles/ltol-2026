

# Updated Site Architecture, Homepage, and Design System

## Overview

Restructure the navigation, homepage sections, design tokens, and routing to match the new specification. This builds on the existing content engine infrastructure.

## Design Token Changes (`src/index.css`)

Update CSS variables to match the new color system:
- Primary: `#0A2540` (deep navy) → HSL ~210 73% 14%
- Secondary: `#00A8E8` (bright cyan) → HSL ~196 100% 45%
- Accent: `#7B61FF` (purple) → HSL ~252 100% 69%
- Neutral dark: `#111111`, Neutral light: `#F5F7FA`
- Keep gradient utilities but update to new primary→accent gradient

## Navigation Restructure (`Navbar.tsx`)

New top nav structure:
- **Home** (link)
- **Solutions** (dropdown): AI Integration, Digital Marketing, IT & Network Solutions (grouped as 3 pillars)
- **Industries** (dropdown): Small Business, Construction, Healthcare, Legal, Real Estate, Hospitality
- **Resources** (dropdown): Blog + lead magnets + assessments
- **About** (link to #about)
- **Contact** (link to #contact)
- CTA: "Book a Consultation"

## Homepage Restructure (`Hero.tsx`, new components, `Index.tsx`)

Rewrite homepage sections in this order:

1. **Hero** — New headline: "Enterprise-Level Technology for Small Businesses", subhead lists AI/Marketing/IT pillars, dual CTAs: "Start a Technology Assessment" + "Book a Consultation"

2. **Problem Section** (new `src/components/landing/Problem.tsx`) — "Most small businesses operate with disconnected tools, cybersecurity risk, inconsistent marketing, lost leads, no AI adoption strategy"

3. **Solution Section** (new `src/components/landing/Solution.tsx`) — "LTOL builds connected digital systems" showing integrated capabilities

4. **Three Pillars** (replaces current `Services.tsx`) — AI Integration, Digital Marketing Systems, IT & Network Solutions — each with sub-features

5. **Industries We Serve** (new `src/components/landing/IndustriesServed.tsx`) — Grid of 6 industry cards linking to industry pages

6. **Why LTOL** (replaces current `Difference.tsx`) — Local team, human support, no outsourcing, enterprise-grade systems

7. **CTA Section** — "Book a Technology Strategy Session"

8. **Contact** — existing, keep as-is

## Routing Changes (`App.tsx`, data files)

New routes to add:
- `/solutions/small-business`, `/solutions/construction`, `/solutions/healthcare`, `/solutions/legal`, `/solutions/real-estate`, `/solutions/hospitality` → industry pages (add `/solutions/:slug` route, update industry data slugs)
- Geographic flat routes: `/reno-managed-it`, `/truckee-managed-it`, `/tahoe-managed-it`, `/northern-nevada-ai-integration`, `/california-small-business-it`, `/western-us-digital-infrastructure` → location pages (add these as defined routes mapping to LocationPage)
- Keep existing `/locations/:slug` routes working too

Update `src/data/locations.ts` to add new geographic entries (california, western-us).
Update `src/data/industries.ts` to add slugs matching `/solutions/` paths (small-business, healthcare, legal).

## Footer Update (`Footer.tsx`)

Add Industries column, update links to match new routing structure.

## Files to Create
- `src/components/landing/Problem.tsx`
- `src/components/landing/Solution.tsx`
- `src/components/landing/IndustriesServed.tsx`

## Files to Modify
- `src/index.css` — new color tokens
- `src/components/landing/Navbar.tsx` — new nav structure
- `src/components/landing/Hero.tsx` — new headline, CTAs
- `src/components/landing/Services.tsx` → rewrite as 3 Pillars
- `src/components/landing/Difference.tsx` → rewrite as "Why LTOL"
- `src/components/landing/Footer.tsx` — updated links
- `src/pages/Index.tsx` — new section order
- `src/App.tsx` — new routes
- `src/data/locations.ts` — add geographic entries
- `src/data/industries.ts` — add new industry entries with /solutions/ slugs

~13 files total.

