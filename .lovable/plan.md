

# Regional Digital Infrastructure SEO Authority — Implementation Plan

## Current Inventory vs. Target

| Layer | Have | Need | Gap |
|-------|------|------|-----|
| Pillar Authority Pages | 0 | 8 | 8 (new concept) |
| Service Pages | 8 | 15 | 7 sub-services |
| Location Pages | ~30 | 50 | ~20 |
| Service + Location | ~25 | 120 | ~95 |
| Industry Pages | ~11 | 20 | ~9 |
| Industry + Location | ~8 | 40 | ~32 |
| Blog Posts | ~55 | 200 | ~145 |
| Resources | 5 | 5 | 0 ✓ |
| Assessments | 4 | 4 | 0 ✓ |

Resources and Assessments are already complete.

## Implementation Approach

This is too large for a single message (~462 pages total). I recommend implementing in **3 phases** across multiple messages. Each phase is self-contained and functional.

---

### Phase 1 (This Message): Pillar Pages + Sub-Service Pages

**New concept: Pillar Authority Pages** — 8 broad education/traffic pages that link to all service pages. These are different from service pages (which are conversion-focused). They rank for national keywords like "small business technology stack."

**Files:**
- **Create** `src/data/pillars.ts` — 8 pillar page entries with slug, headline, intro, sections covering the topic broadly, and links to related services/blog/resources
- **Create** `src/components/templates/PillarPageTemplate.tsx` — Full-width authority page with hero, section grid, internal link network, CTA
- **Create** `src/pages/PillarPage.tsx` — Route handler
- **Edit** `src/data/services.ts` — Add 7 new sub-service entries: `ai-workflow-automation`, `ai-customer-support-systems`, `ai-document-processing`, `network-management`, `help-desk-services`, `cloud-services`, `endpoint-security`, `email-security`, `data-backup-services`, `local-seo-services`, `marketing-automation`, `email-marketing`
- **Edit** `src/App.tsx` — Add pillar routes + new service routes

Pillar page slugs:
- `/small-business-technology-stack`
- `/ai-integration-for-small-business`
- `/managed-it-services-for-small-business`
- `/cybersecurity-for-small-business`
- `/digital-marketing-systems-for-small-business`
- `/marketing-automation-for-small-business`
- `/crm-automation-for-small-business`
- `/business-process-automation`

---

### Phase 2 (Next Message): Location + Service/Location Expansion

Scale locations to 50, service+location combos to ~120, and industry+location to ~40. All data additions to existing files — templates already handle rendering.

---

### Phase 3 (Following Message): Blog Content Engine to 200 Posts

Add ~145 new blog posts across all categories. Pure data expansion in `blog-posts.ts`.

---

### Also in Phase 1: Industry Route Aliases

Add flat routes for `/technology-solutions-for-construction-companies` etc. that map to existing industry data, giving those pages SEO-friendly URLs.

**Edit** `src/App.tsx` — Add flat industry routes
**Edit** `src/data/industries.ts` — Add remaining industry entries to reach 20

---

Shall I proceed with Phase 1?

