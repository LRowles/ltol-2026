

# LTOL Automated Content Engine — Implementation Plan

This is a massive system (100+ pages, blog engine, assessments, lead magnets, email funnels). It must be built in phases. This plan covers **Phase 1** — the foundational infrastructure and first set of content pages. Subsequent phases will add more content, assessments, and automation.

## What Phase 1 Delivers

1. **Scalable page infrastructure** — reusable templates and data-driven routing
2. **Core service hub pages** (8 pages)
3. **First location pages** (5 pages)
4. **First industry pages** (5 pages)
5. **Blog system** with index + first 5 article pages
6. **Resource/lead magnet landing pages** (5 pages)
7. **Assessment landing pages** (4 pages, form-based with scoring)
8. **Updated navigation, footer, and internal linking**
9. **Contact form connected to the database**

---

## Architecture

All programmatic pages share reusable templates. Content is defined as data objects, making it trivial to add 100+ pages later by just adding data entries.

```text
src/
  data/
    services.ts          # Service page content definitions
    locations.ts         # Location page content definitions
    industries.ts        # Industry page content definitions
    blog-posts.ts        # Blog post content definitions
    resources.ts         # Lead magnet content definitions
    assessments.ts       # Assessment questions + scoring
  components/
    templates/
      ServicePageTemplate.tsx    # Reusable service landing page
      LocationPageTemplate.tsx   # Reusable location landing page
      IndustryPageTemplate.tsx   # Reusable industry landing page
      BlogPostTemplate.tsx       # Reusable blog article layout
      ResourcePageTemplate.tsx   # Lead magnet download page
      AssessmentTemplate.tsx     # Interactive scored assessment
      CTABlock.tsx               # Reusable CTA section
      FAQSection.tsx             # Reusable FAQ accordion
      InternalLinks.tsx          # Related content links block
    landing/
      (existing components unchanged)
  pages/
    Index.tsx                    # Homepage (existing)
    ServicePage.tsx              # Dynamic route handler
    LocationPage.tsx             # Dynamic route handler
    IndustryPage.tsx             # Dynamic route handler
    BlogIndex.tsx                # Blog listing page
    BlogPost.tsx                 # Dynamic blog route handler
    ResourcePage.tsx             # Dynamic resource route handler
    AssessmentPage.tsx           # Dynamic assessment route handler
```

## Routing Structure

```text
/                                    → Homepage
/ai-integration                      → Service page
/digital-marketing                   → Service page
/managed-it-services                 → Service page
/cybersecurity                       → Service page
/network-solutions                   → Service page
/crm-automation                      → Service page
/website-systems                     → Service page
/email-marketing-automation          → Service page
/locations/:slug                     → Location pages
/industries/:slug                    → Industry pages
/blog                               → Blog index
/blog/:slug                         → Blog articles
/resources/:slug                    → Lead magnet pages
/assessments/:slug                  → Assessment tools
```

## Database

One table for contact/consultation submissions and one for lead magnet downloads:

```sql
-- Contact form submissions
CREATE TABLE contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  business text,
  phone text,
  message text,
  source_page text,
  created_at timestamptz DEFAULT now()
);

-- Lead magnet downloads
CREATE TABLE lead_downloads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  business text,
  resource_slug text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Assessment submissions
CREATE TABLE assessment_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  business text,
  assessment_slug text NOT NULL,
  answers jsonb NOT NULL,
  score integer,
  band text,
  created_at timestamptz DEFAULT now()
);

-- RLS: allow anonymous inserts only (public lead gen forms)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anonymous inserts" ON contact_submissions FOR INSERT WITH CHECK (true);

ALTER TABLE lead_downloads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anonymous inserts" ON lead_downloads FOR INSERT WITH CHECK (true);

ALTER TABLE assessment_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anonymous inserts" ON assessment_submissions FOR INSERT WITH CHECK (true);
```

## Template Design

### ServicePageTemplate
Each service page follows the specified template:
- H1 with primary keyword
- Intro paragraph (service, audience, outcome)
- Common Problems section (bullets)
- How LTOL Helps section
- Core Services Included (deliverables list)
- Why LTOL (differentiators)
- Ideal Fit (industries, size, stage)
- FAQ accordion (3-6 questions)
- CTA block: "Book a Technology Strategy Session"
- InternalLinks block (related service, blog post, lead magnet, assessment)

### AssessmentTemplate
Interactive multi-step form:
- Questions rendered one at a time or as a scrollable form
- Radio/checkbox answers
- Score calculated on completion
- Result bands displayed (Early Stage / Emerging / Strong Readiness)
- CTA based on result band
- Saves submission to database

### BlogPostTemplate
- SEO title as H1
- Intro stating business challenge
- 5 sections (Why it matters, Common mistakes, Better system, How LTOL helps, Next steps)
- CTA block
- Internal links to related content

## Phase 1 Content Scope

**Service Pages (8):** AI Integration, Digital Marketing Systems, Managed IT Services, Cybersecurity, Network Solutions, CRM Automation, Website Systems, Email Marketing Automation

**Location Pages (5):** Reno, Truckee, Lake Tahoe, Northern Nevada, Sparks

**Industry Pages (5):** Construction, Law Firms, Medical Offices, Real Estate, Hospitality

**Blog Posts (5):** AI for Small Businesses 2026, Cybersecurity Risks, Marketing Automation Revenue, Technology Stack, AI Customer Support

**Resources (5):** AI Playbook, Cybersecurity Checklist, Marketing Automation Blueprint, Technology Stack Guide, AI Readiness Scorecard

**Assessments (4):** AI Readiness, Technology Stack, Cybersecurity Risk, Marketing Systems

## Updated Navigation

Navbar gets a dropdown/mega menu for Services, Resources, and Assessments. Footer updated with full site hierarchy links.

## SEO

- Each page gets unique `<title>` and `<meta description>` via `document.title` updates in useEffect
- JSON-LD structured data per page type (LocalBusiness, Service, Article, FAQPage)
- Proper H1/H2/H3 hierarchy
- Internal linking on every page

## Implementation Order

1. Create data files (services, locations, industries, blog, resources, assessments)
2. Create reusable template components (CTABlock, FAQSection, InternalLinks)
3. Create page templates (Service, Location, Industry, Blog, Resource, Assessment)
4. Create page route handlers
5. Update App.tsx with all routes
6. Create database tables for form submissions
7. Connect contact form + lead magnet forms + assessment forms to database
8. Update Navbar with expanded navigation
9. Update Footer with full site links
10. Create BlogIndex page

This is approximately 30+ new files. Implementation will proceed in one pass with the data-driven architecture making future page additions trivial (just add data entries).

