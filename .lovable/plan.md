

# LTOL Website Rebrand and Restructure

This is a comprehensive rebrand from "LRJ Digital Media" to "Lake Tahoe Online (LTOL)" — a premium boutique technology consultancy. The scope covers content, branding, structure, and SEO throughout.

## Color and Design Direction

Shift from the current dark/neon aesthetic to a premium, trustworthy, minimal feel:
- Light background with clean white space
- Primary: deep navy/slate blue (guardian trust)
- Accent: warm teal or forest green (Tahoe nature)
- Typography: clean, confident, modern sans-serif
- Remove glow effects and pulsing animations in favor of subtle, professional transitions

## Files to Modify

### 1. `index.html` — SEO metadata
- Update title, meta description, Open Graph tags, JSON-LD structured data
- Add geographic and service keywords

### 2. `src/index.css` — Complete theme overhaul
- New light-mode color palette (premium, trustworthy)
- Remove neon gradient utilities; replace with subtle, professional gradients
- Keep utility classes but update values

### 3. `src/components/landing/Navbar.tsx`
- Rebrand to "LTOL" / "Lake Tahoe Online"
- Update nav links: Services, AI Integration, About, Contact
- Update CTA to "Schedule a Consultation"

### 4. `src/components/landing/Hero.tsx`
- Headline: "Your Business Deserves a Digital Guardian"
- Subheadline: "Local IT, digital marketing, and AI integration designed to protect and grow small businesses."
- CTA: "Schedule a Consultation"
- Stats: update to LTOL-relevant metrics
- Badge: "Your Digital Infrastructure Partner"

### 5. `src/components/landing/Services.tsx` — Full rewrite
Seven service cards matching LTOL's offerings:
- Web Design
- Branding & Design
- Social Media & Content Strategy
- WiFi & Network Installation
- Managed IT Services
- Email Hosting & Cloud Systems
- AI Integration Services

Each with icon, description, and feature bullets using LTOL content.

### 6. New component: `src/components/landing/Difference.tsx`
"The LTOL Difference" section highlighting key differentiators:
- We answer the phone
- We visit your business
- We never outsource support
- Complete top-to-bottom digital solutions

### 7. New component: `src/components/landing/AIIntegration.tsx`
Dedicated section for AI integration services:
- AI workflow automation, customer service assistants, marketing automation, productivity tools, staff training
- Messaging: "AI made practical for small businesses."

### 8. `src/components/landing/About.tsx`
- Rebrand to LTOL, Guardian archetype messaging
- Update features to reflect: trustworthy, local, boutique quality, expert guidance
- Geographic: Lake Tahoe, Reno, Northern Nevada, Western US

### 9. `src/components/landing/Testimonials.tsx`
- Update placeholder testimonials with small business owners from Western US regions
- Reference LTOL services (IT, web design, AI)

### 10. `src/components/landing/Pricing.tsx`
- Remove this section entirely (consultancy model, not tiered pricing)
- Replace with a simpler "How We Work" or remove

### 11. `src/components/landing/Contact.tsx`
- Update company name, placeholder contact info
- Update messaging to match Guardian tone
- Add phone/email/consultation form per spec

### 12. `src/components/landing/Footer.tsx`
- Rebrand to LTOL
- Update service links, company links
- Add geographic info (Lake Tahoe, serving Western US)

### 13. `src/pages/Index.tsx`
- Import new components (Difference, AIIntegration)
- Remove Pricing, add Difference and AIIntegration sections
- Section order: Hero → Difference → Services → AIIntegration → About → Testimonials → Contact → Footer

### 14. `src/App.tsx`
- Add routes for future pages: `/services`, `/ai-integration`, `/managed-it`, `/web-design`, `/about`, `/blog`, `/contact`
- For now, placeholder pages that link back to homepage sections

## Content and SEO

All content will:
- Use proper heading hierarchy (H1, H2, H3)
- Include local keywords (Lake Tahoe, Reno, Northern Nevada, Western United States)
- Match Guardian brand voice: clear, confident, helpful, human
- Avoid corporate jargon and hype marketing
- Use short paragraphs and bullet lists

## Implementation Order

1. Theme/CSS overhaul
2. Navbar rebrand
3. Hero section
4. Difference section (new)
5. Services rewrite
6. AI Integration section (new)
7. About section
8. Testimonials
9. Contact
10. Footer
11. Index page assembly
12. Route setup and SEO metadata

This is a large change touching ~14 files. I will implement it all in one pass.

