
-- Contact form submissions
CREATE TABLE public.contact_submissions (
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
CREATE TABLE public.lead_downloads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  business text,
  resource_slug text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Assessment submissions
CREATE TABLE public.assessment_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  business text,
  assessment_slug text NOT NULL,
  answers jsonb NOT NULL DEFAULT '{}',
  score integer,
  band text,
  created_at timestamptz DEFAULT now()
);

-- RLS: allow anonymous inserts only (public lead gen forms)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anonymous inserts" ON public.contact_submissions FOR INSERT TO anon, authenticated WITH CHECK (true);

ALTER TABLE public.lead_downloads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anonymous inserts" ON public.lead_downloads FOR INSERT TO anon, authenticated WITH CHECK (true);

ALTER TABLE public.assessment_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anonymous inserts" ON public.assessment_submissions FOR INSERT TO anon, authenticated WITH CHECK (true);
