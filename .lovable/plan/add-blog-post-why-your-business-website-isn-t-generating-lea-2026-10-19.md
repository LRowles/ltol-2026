# Add blog post: "Why Your Business Website Isn't Generating Leads (And How to Fix It)"

## What changes
- Add the uploaded article as a new blog post on /blog, tagged **Industry Solutions**.
- URL: `/blog/why-your-business-website-isnt-generating-leads`
- Date: Oct 19, 2026, about 9 min read.
- Keep the full text as written: the intro, all eight numbered sections with their "The Fix" bullet lists and "LTOL Tip" callouts, and the closing.
- Fix copy-paste glitches from the upload (stray bullet characters, broken quote marks, split headings). The wording stays the same.
- Related links at the bottom go to the Web Design service page and the Technology Stack guide.
- Add the post to the sitemap so Google can find it.

## Technical details
- Add an entry to `coreBlogPosts` in `src/data/blog-posts.ts`, at the top so it shows first. Bullets are kept as line breaks inside each section.
- Small update to `BlogPostTemplate`: use `whitespace-pre-line` so bullets and tips show on their own lines.
- Rerun `scripts/generate-sitemap.ts`.
