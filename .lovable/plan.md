

# Add Photography to Solution, Industry, and Resource Pages

## Changes

### 1. Solution Section (`src/components/landing/Solution.tsx`)
Add a background image behind the section — a wide-angle shot of a Western US tech workspace or connected business environment using an Unsplash photo, with the brand overlay treatment.

### 2. Industry Page Template (`src/components/templates/IndustryPageTemplate.tsx`)
Add a hero-style image at the top of each industry page. Map each industry slug to the corresponding photo already in `src/assets/photos/industry-*.jpg`. Add the image between the PageHeader and Challenges section using BrandImage.

The mapping:
- `small-business` → `industry-retail.jpg`
- `healthcare` → `industry-healthcare.jpg`
- `hospitality` → `industry-hospitality.jpg`
- `construction` → `industry-construction.jpg`
- `real-estate` → `industry-realestate.jpg`
- `legal` → `industry-legal.jpg`

### 3. Resource Page Template (`src/components/templates/ResourcePageTemplate.tsx`)
Add a contextual illustration/photo above the content area — a professional workspace scene showing someone working with digital resources. Use an Unsplash image with BrandImage, placed between PageHeader and the content grid.

### Files to Edit
- `src/components/landing/Solution.tsx` — add background photo
- `src/components/templates/IndustryPageTemplate.tsx` — add industry-specific hero image
- `src/components/templates/ResourcePageTemplate.tsx` — add resource hero image
- Download 2 new photos (solution workspace, resource/guide scene) to `src/assets/photos/`

