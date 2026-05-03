# LTOL Zoho CRM Proxy Worker

A Cloudflare Worker that securely bridges the LTOL website forms to Zoho CRM. It holds OAuth credentials server-side and exposes simple REST endpoints for lead creation.

## Endpoints

| Method | Path | Description |
| :--- | :--- | :--- |
| POST | `/lead/contact` | Contact form submissions |
| POST | `/lead/resource` | Resource download submissions |
| POST | `/lead/assessment` | Assessment completion submissions |
| GET | `/health` | Health check |

## Deployment

### 1. Install dependencies

```bash
cd workers/zoho-proxy
npm install
```

### 2. Login to Cloudflare

```bash
npx wrangler login
```

### 3. Set secrets

```bash
npx wrangler secret put ZOHO_CLIENT_SECRET
# Enter: cfa89f5be418a665985783f8a23e5b92445aa8a163

npx wrangler secret put ZOHO_REFRESH_TOKEN
# Enter: 1000.1318e42e7ce293461b99bdb838c29497.a9a1cbfe15241928f010ffad4656692d
```

### 4. Deploy

```bash
npx wrangler deploy
```

This will output a URL like: `https://ltol-zoho-proxy.<your-subdomain>.workers.dev`

### 5. Update the website

Add the Worker URL to the website's environment variables:

```
VITE_ZOHO_PROXY_URL=https://ltol-zoho-proxy.<your-subdomain>.workers.dev
```

## Local Development

```bash
npx wrangler dev
```

The Worker will be available at `http://localhost:8787`.

## Payload Examples

### Contact Form

```json
{
  "name": "John Smith",
  "email": "john@example.com",
  "business": "Smith Construction LLC",
  "phone": "775-555-1234",
  "message": "Interested in managed IT services",
  "source_page": "/locations/reno",
  "ltol_service": ["IT Services"]
}
```

### Resource Download

```json
{
  "name": "Jane Doe",
  "email": "jane@company.com",
  "business": "Company Inc",
  "resource_slug": "ai-playbook-for-small-business"
}
```

### Assessment Completion

```json
{
  "name": "Bob Builder",
  "email": "bob@builder.com",
  "business": "Builder Corp",
  "assessment_slug": "ai-readiness",
  "score": 14,
  "band": "AI Ready"
}
```

## Architecture

```
Browser Form → Supabase (data record) 
             → Cloudflare Worker → Zoho CRM (lead creation)
```

Both writes happen in parallel from the browser. If the Zoho push fails, the Supabase record still exists as a fallback.
