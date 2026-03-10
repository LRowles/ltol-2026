

# Fix: Interior Pages Returning 404

## Root Cause

`ServicePage.tsx` uses `useParams()` to get the slug, but service routes are defined as **static paths** (e.g., `/ai-integration`) without a `:slug` parameter. So `useParams()` returns `undefined`, the service lookup fails, and `NotFound` renders.

Location pages already handle this correctly by falling back to `pathname`. Service pages do not.

## Fix (1 file)

**`src/pages/ServicePage.tsx`** — Add the same pathname fallback pattern used by `LocationPage`:

```tsx
import { useParams, useLocation } from "react-router-dom";
import { services } from "@/data/services";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import NotFound from "./NotFound";

const ServicePage = () => {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const resolvedSlug = slug || pathname.replace("/", "");
  const service = services.find((s) => s.slug === resolvedSlug);
  if (!service) return <NotFound />;
  return <ServicePageTemplate service={service} />;
};
```

This is a one-file fix. All other interior pages (industries, locations, blog, resources, assessments) have working slug resolution already.

## Remaining "Lake Tahoe" Reference

Footer line 68 still says "Serving Lake Tahoe" — will update to "Serving Tahoe" to stay consistent with the LTOL rebrand.

