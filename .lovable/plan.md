

# Add Branded Photography Across the Site

## Approach

Use high-quality Unsplash stock photos depicting Western US small business scenes (mountain towns, storefronts, local professionals, tech teams), applied with a uniform CSS treatment (subtle brand-colored overlay/duotone filter) for visual consistency across all sections.

## Where Photos Will Be Placed

| Section | Image Subject | Treatment |
|---------|--------------|-----------|
| **Hero** | Wide landscape of Western mountain town with small businesses | Full-width background with gradient overlay |
| **About** | Local business owner shaking hands / in-person meeting | Side-by-side with text content |
| **Team** | Generate AI headshot-style portraits for each team member | Rounded, consistent framing replacing initials |
| **Services** | One photo per pillar (AI/tech, marketing dashboard, network rack) | Card header images |
| **Industries** | Small photos per industry (construction site, medical office, hotel, etc.) | Behind icon overlay |
| **Difference** | Western US landscape (Tahoe/Sierra region) | Section background |
| **Contact** | Friendly office/support scene | Left column background |

## Uniform Visual Treatment

A shared CSS class (`brand-photo`) will apply:
- Slight navy-to-cyan gradient overlay for brand cohesion
- Consistent border-radius and aspect ratios
- `object-cover` sizing for uniform framing
- Optional subtle desaturation + brand tint for a treated, editorial look

## Team Headshots

Use the AI image generation API (via an edge function) to create professional, stylized portrait illustrations for each team member. These get stored in a storage bucket and referenced by URL. This avoids stock photo inauthenticity for the team specifically.

## Files to Create/Edit

- **Create** `src/components/ui/BrandImage.tsx` — reusable image component with overlay treatment
- **Create** edge function `supabase/functions/generate-team-photos/index.ts` — generates and stores AI portraits
- **Create** storage bucket `team-photos` via migration
- **Edit** `Hero.tsx` — add background photo
- **Edit** `About.tsx` — add side photo
- **Edit** `Services.tsx` — add card header images
- **Edit** `IndustriesServed.tsx` — add industry thumbnails
- **Edit** `Difference.tsx` — add background photo
- **Edit** `Contact.tsx` — add photo element
- **Edit** `Team.tsx` — replace initials with generated portraits
- **Edit** `src/index.css` — add `brand-photo` utility class

## Image Sources

- **Sections**: Unsplash direct URLs (free, no API key, immediate)
- **Team portraits**: AI-generated via Lovable AI (`google/gemini-3.1-flash-image-preview`)

All photos will evoke: mountain towns, local storefronts, professional settings, Nevada/California/Idaho/Montana/Arizona/Washington landscapes — warm, approachable, and distinctly Western US.

