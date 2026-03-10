

# Location-Based SEO Architecture Expansion

## Scope

This is a large-scale content expansion. Most work is adding data entries to existing data files and creating one new page (Location Hub). The existing templates, routing patterns, and structured data system handle everything else automatically.

## What Already Exists
- 6 location pages, 6 flat service+location pages, 8 services, 6+ industries, 50+ blog posts
- Templates: `LocationPageTemplate`, `ServicePageTemplate`, `IndustryPageTemplate` with immersive heroes, glass cards, FAQs, CTAs, and JSON-LD schema
- Flat route pattern in `App.tsx` for service+location SEO pages

## Changes

### 1. Expand `src/data/locations.ts` (~50 new entries)

**Tier 1 — Primary Service Area** (add 7 new):
carson-city, incline-village, tahoe-city, kings-beach, south-lake-tahoe, gardnerville, minden

**Tier 2 — Regional Expansion** (add 7):
sacramento, roseville, folsom, rocklin, auburn, grass-valley, nevada-city

**Tier 3 — Western US** (add 6):
phoenix, denver, salt-lake-city, boise, portland, seattle

**Service + Location SEO pages** (add ~25 flat-route entries):
For each major city (reno, truckee, tahoe, carson-city, sparks, incline-village, south-lake-tahoe), create entries like:
- `{city}-managed-it-services`
- `{city}-ai-integration`
- `{city}-cybersecurity-services`
- `{city}-digital-marketing`

**Industry + Location SEO pages** (add ~12 flat-route entries):
- `reno-it-support-for-construction-companies`
- `truckee-it-support-for-law-firms`
- `tahoe-cybersecurity-for-hospitality`
- `reno-marketing-for-real-estate`
- Plus additional combinations

Each entry follows the existing `LocationData` interface with city-specific content, 4-6 FAQs, local context paragraph, and service list. Tier 3 pages position LTOL as a remote technology partner.

### 2. Create Location Hub Page

**New file**: `src/pages/LocationsHub.tsx`

Route: `/locations`

Sections:
- Hero header: "Technology Services for Small Businesses Across the Western United States"
- Four regional groups: Northern Nevada, Lake Tahoe Basin, Northern California, Western United States
- Each group lists linked location pages as modern glass cards with city name and region
- Uses existing Navbar, Footer, PageHeader components

### 3. Update `src/App.tsx` Routes

- Add `/locations` route pointing to `LocationsHub`
- Add all new flat service+location and industry+location slugs to the `flatLocationRoutes` array
- Add new Tier 1/2/3 cities to `/locations/:slug` (these work automatically via the existing dynamic route)

### 4. Add Local SEO Blog Posts to `src/data/blog-posts.ts`

Add 5 new entries:
1. `ai-for-small-businesses-in-reno`
2. `cybersecurity-risks-businesses-truckee`
3. `technology-systems-tahoe-hospitality`
4. `how-northern-nevada-businesses-use-ai`
5. `marketing-automation-real-estate-reno`

Each with 3-4 sections, local context, and linked to relevant services/resources.

### 5. Update `src/lib/structured-data.ts`

Add a `professionalServiceSchema()` function generating:
```json
{
  "@type": "ProfessionalService",
  "name": "Lake Tahoe Online",
  "areaServed": ["Reno", "Truckee", "Lake Tahoe", "Northern Nevada", "Western United States"]
}
```

Inject this on the Location Hub page and homepage.

### 6. Update Internal Linking in `src/components/templates/LocationPageTemplate.tsx`

Ensure each location page links to:
- All 4 core service pages (AI, IT, Cybersecurity, Marketing)
- A relevant blog post
- A relevant resource/lead magnet
- The consultation CTA

Add a new `InternalLinks` section if not already rendering these connections from the template.

## Files Summary

| Action | File |
|--------|------|
| Edit (major) | `src/data/locations.ts` — ~50 new entries |
| Edit | `src/data/blog-posts.ts` — 5 new posts |
| Edit | `src/App.tsx` — new routes |
| Edit | `src/lib/structured-data.ts` — ProfessionalService schema |
| Edit | `src/components/templates/LocationPageTemplate.tsx` — internal links |
| Create | `src/pages/LocationsHub.tsx` — hub page |

## Result
- 20+ new location pages
- 25+ service+location SEO pages
- 12+ industry+location SEO pages
- 5 local blog posts
- Location hub with regional grouping
- ProfessionalService schema markup
- Full internal linking structure

All pages automatically get the modern immersive hero, glass cards, FAQs, CTAs, and JSON-LD from existing templates.

