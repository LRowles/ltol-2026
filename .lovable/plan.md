

# Redesign Interior Pages for a Modern Look

## Current Issues
- Flat, text-heavy layouts with basic bullet lists
- Hero images sit as standalone rectangles — feel disconnected
- Sections alternate between white and faint gray with no visual drama
- Cards and list items are plain with minimal visual hierarchy
- No depth, glassmorphism, or modern spacing techniques

## Design Direction
A modern SaaS-style interior page design with:
- **Immersive hero** — full-bleed image with overlaid text (replacing separate PageHeader + BrandImage)
- **Glass-style cards** with backdrop-blur and subtle borders
- **Icon accent cards** instead of plain bullet lists
- **Alternating layout grids** (text + image side-by-side) instead of all centered text
- **Gradient accent lines and decorative dots** for visual rhythm
- **Wider max-width** (5xl/6xl) for breathing room

## Files to Change

### 1. `src/components/templates/PageHeader.tsx`
Transform into an immersive hero header that accepts an optional background image. When an image is provided, render full-bleed with overlay gradient and white text on top. Breadcrumbs become translucent. Badge gets a glass treatment.

### 2. `src/components/templates/IndustryPageTemplate.tsx`
- Remove the separate BrandImage block — image moves into PageHeader as background
- **Challenges**: Convert from bullet list to a grid of glass cards, each with an icon and text
- **Solutions**: Side-by-side layout — checklist on left, decorative gradient accent on right
- **Related Services**: Upgrade cards with hover gradient borders and arrow indicators
- Wider container (max-w-6xl)

### 3. `src/components/templates/ServicePageTemplate.tsx`
- Add a service-specific hero image to PageHeader (map slugs to existing service photos)
- **Problems**: Glass card grid instead of bullet list
- **How We Help / Deliverables**: Two-column layout with numbered steps or icon cards
- **Why LTOL**: Gradient-bordered feature cards with subtle glow on hover
- **Ideal Fit**: Horizontal badge-style chips instead of a list

### 4. `src/components/templates/ResourcePageTemplate.tsx`
- Move resource image into PageHeader background
- Give the download form card a glass effect with gradient border
- Style the "What's Included" list as icon cards in a grid

### 5. `src/components/templates/LocationPageTemplate.tsx`
- Add a location-appropriate hero image (can reuse landscape photos)
- Convert local context to a feature card with map pin accent
- Service links get modern card treatment matching industry pages

### 6. `src/components/templates/AssessmentTemplate.tsx`
- Glass-style cards for the quiz steps
- Progress bar with gradient fill
- Results card with animated score circle

### 7. `src/components/templates/FAQSection.tsx`
- Add a decorative gradient line above the section
- Accordion items get glass card treatment

### 8. `src/components/templates/CTABlock.tsx`
- Add subtle background pattern/dots for texture
- Slightly larger with more whitespace

### 9. `src/index.css`
- Add `.glass-card` utility (backdrop-blur, semi-transparent bg, subtle border)
- Add `.gradient-line` decorative accent

## Summary of Visual Changes
- Immersive hero headers with background images
- Glass-morphism cards replacing plain borders
- Grid layouts replacing bullet lists
- Gradient accents and decorative elements for depth
- More whitespace and wider containers
- Consistent hover states with gradient borders

