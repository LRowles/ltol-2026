export interface AssessmentQuestion {
  id: string;
  question: string;
  options: { label: string; value: number }[];
}

export interface AssessmentBand {
  min: number;
  max: number;
  label: string;
  description: string;
  cta: string;
}

export interface AssessmentData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  description: string;
  questions: AssessmentQuestion[];
  bands: AssessmentBand[];
  relatedService: string;
  relatedResource: string;
}

export const assessments: AssessmentData[] = [
  {
    slug: "ai-readiness",
    title: "AI Readiness Assessment",
    metaTitle: "AI Readiness Assessment for Small Businesses | LTOL",
    metaDescription: "Take our free AI Readiness Assessment to evaluate your business's readiness for AI adoption. Get a personalized readiness score and recommendations.",
    headline: "Is Your Business Ready for AI?",
    description: "Answer these questions to assess your organization's readiness for AI adoption. You'll receive a personalized readiness score and recommendations for your next steps.",
    questions: [
      { id: "crm", question: "Do you currently use a CRM system?", options: [{ label: "Yes, actively", value: 2 }, { label: "Yes, but underutilized", value: 1 }, { label: "No", value: 0 }] },
      { id: "data", question: "Are your customer interactions documented centrally?", options: [{ label: "Yes, in a central system", value: 2 }, { label: "Partially — some are documented", value: 1 }, { label: "No — scattered or not documented", value: 0 }] },
      { id: "repetitive", question: "Do you have repetitive admin tasks that take significant time?", options: [{ label: "Yes, many", value: 2 }, { label: "Some", value: 1 }, { label: "Not really", value: 0 }] },
      { id: "leads", question: "Do you respond to leads manually?", options: [{ label: "Yes, all manual", value: 2 }, { label: "Some automation in place", value: 1 }, { label: "Fully automated", value: 0 }] },
      { id: "support", question: "Do you want to automate customer support?", options: [{ label: "Yes, definitely", value: 2 }, { label: "Maybe — need to learn more", value: 1 }, { label: "Not a priority", value: 0 }] },
      { id: "team", question: "Is your team open to AI adoption?", options: [{ label: "Yes, enthusiastic", value: 2 }, { label: "Open but cautious", value: 1 }, { label: "Resistant", value: 0 }] },
      { id: "workflows", question: "Do you have documented workflows?", options: [{ label: "Yes, most are documented", value: 2 }, { label: "Some are documented", value: 1 }, { label: "No formal documentation", value: 0 }] },
      { id: "connected", question: "Are your marketing and operations systems connected?", options: [{ label: "Yes, well integrated", value: 2 }, { label: "Partially connected", value: 1 }, { label: "Completely separate", value: 0 }] },
    ],
    bands: [
      { min: 0, max: 5, label: "Early Stage", description: "Your business has significant opportunities for AI, but some foundational systems need to be in place first. We recommend starting with CRM and workflow documentation before AI adoption.", cta: "Book a Foundation Strategy Session" },
      { min: 6, max: 11, label: "Emerging Opportunity", description: "You have a solid foundation for AI adoption. There are clear opportunities to automate workflows, improve follow-up, and enhance customer experience with AI tools.", cta: "Book an AI Strategy Session" },
      { min: 12, max: 16, label: "Strong AI Readiness", description: "Your business is well-positioned for AI integration. You have the systems, data, and team readiness to achieve significant results from strategic AI adoption.", cta: "Book an AI Implementation Session" },
    ],
    relatedService: "ai-integration",
    relatedResource: "small-business-ai-playbook",
  },
  {
    slug: "technology-stack",
    title: "Technology Stack Assessment",
    metaTitle: "Technology Stack Assessment for Small Businesses | LTOL",
    metaDescription: "Evaluate your business technology stack. Identify gaps, redundancies, and opportunities for improvement. Free assessment from LTOL.",
    headline: "How Strong Is Your Technology Stack?",
    description: "Evaluate the key components of your business technology infrastructure. Get a clear picture of your strengths, gaps, and priorities for improvement.",
    questions: [
      { id: "website", question: "What platform is your website built on?", options: [{ label: "Modern CMS with integrations", value: 2 }, { label: "Basic website builder", value: 1 }, { label: "No website or very outdated", value: 0 }] },
      { id: "crm_status", question: "Do you use a CRM?", options: [{ label: "Yes, actively used by team", value: 2 }, { label: "Have one but underused", value: 1 }, { label: "No CRM in place", value: 0 }] },
      { id: "helpdesk", question: "Do you have IT help desk support?", options: [{ label: "Yes, managed IT provider", value: 2 }, { label: "Ad-hoc support as needed", value: 1 }, { label: "No formal IT support", value: 0 }] },
      { id: "security", question: "What security tools are in place?", options: [{ label: "Comprehensive (EDR, MFA, backups)", value: 2 }, { label: "Basic antivirus and passwords", value: 1 }, { label: "Minimal or none", value: 0 }] },
      { id: "cloud", question: "Do you use cloud services for business operations?", options: [{ label: "Yes, cloud-first approach", value: 2 }, { label: "Some cloud, some local", value: 1 }, { label: "Mostly local/on-premise", value: 0 }] },
      { id: "email_auto", question: "Is email marketing automated?", options: [{ label: "Yes, with sequences and segmentation", value: 2 }, { label: "Basic newsletters", value: 1 }, { label: "No email marketing", value: 0 }] },
      { id: "lead_mgmt", question: "How do you manage leads?", options: [{ label: "CRM with automated workflows", value: 2 }, { label: "Spreadsheets or manual tracking", value: 1 }, { label: "No formal system", value: 0 }] },
      { id: "analytics", question: "Do you track marketing and business analytics?", options: [{ label: "Yes, with dashboards and reporting", value: 2 }, { label: "Basic Google Analytics only", value: 1 }, { label: "No analytics tracking", value: 0 }] },
    ],
    bands: [
      { min: 0, max: 5, label: "Foundation Needed", description: "Your technology stack has significant gaps that are likely impacting your efficiency and growth. Building a connected foundation should be a priority.", cta: "Book a Technology Strategy Session" },
      { min: 6, max: 11, label: "Growing but Disconnected", description: "You have several tools in place but they may not be working together effectively. Connecting and optimizing your existing stack could deliver significant improvements.", cta: "Book a Stack Optimization Session" },
      { min: 12, max: 16, label: "Well-Equipped", description: "Your technology stack is solid. Focus on optimization, advanced automation, and AI integration to maximize your investment.", cta: "Book an Advanced Strategy Session" },
    ],
    relatedService: "managed-it-services",
    relatedResource: "technology-stack-guide",
  },
  {
    slug: "cybersecurity-risk-check",
    title: "Cybersecurity Risk Check",
    metaTitle: "Cybersecurity Risk Assessment for Small Businesses | LTOL",
    metaDescription: "Check your business's cybersecurity risk level. Identify vulnerabilities and get practical recommendations. Free assessment from LTOL.",
    headline: "How Secure Is Your Business?",
    description: "Answer these questions to identify your most critical cybersecurity vulnerabilities. Get a risk score and actionable recommendations to improve your security posture.",
    questions: [
      { id: "mfa", question: "Do you use multi-factor authentication (MFA)?", options: [{ label: "Yes, on all accounts", value: 2 }, { label: "On some accounts", value: 1 }, { label: "No", value: 0 }] },
      { id: "backup", question: "How often is your data backed up?", options: [{ label: "Daily with tested restoration", value: 2 }, { label: "Regular but not tested", value: 1 }, { label: "Rarely or never", value: 0 }] },
      { id: "devices", question: "Are employee devices monitored and managed?", options: [{ label: "Yes, centrally managed", value: 2 }, { label: "Partially managed", value: 1 }, { label: "Not managed", value: 0 }] },
      { id: "endpoint", question: "Do you have endpoint security (EDR)?", options: [{ label: "Yes, enterprise-grade", value: 2 }, { label: "Basic antivirus only", value: 1 }, { label: "No endpoint protection", value: 0 }] },
      { id: "phishing", question: "Do you have phishing protection?", options: [{ label: "Yes, with training and filters", value: 2 }, { label: "Email filters only", value: 1 }, { label: "No protection", value: 0 }] },
      { id: "passwords", question: "Do you have a password policy?", options: [{ label: "Yes, enforced with a manager", value: 2 }, { label: "Informal policy", value: 1 }, { label: "No policy", value: 0 }] },
      { id: "remote", question: "How do remote workers access your systems?", options: [{ label: "Secure VPN with MFA", value: 2 }, { label: "Basic VPN or remote desktop", value: 1 }, { label: "No secure access setup", value: 0 }] },
    ],
    bands: [
      { min: 0, max: 4, label: "High Risk", description: "Your business has significant cybersecurity vulnerabilities that need immediate attention. You're at elevated risk for data breaches, ransomware, and other cyber threats.", cta: "Book an Urgent Security Assessment" },
      { min: 5, max: 9, label: "Moderate Risk", description: "You have some protections in place but there are notable gaps. Strengthening your security fundamentals would significantly reduce your risk exposure.", cta: "Book a Security Assessment" },
      { min: 10, max: 14, label: "Well-Protected", description: "Your security posture is solid. Focus on advanced protections, regular testing, and employee training to maintain and improve your defenses.", cta: "Book a Security Optimization Review" },
    ],
    relatedService: "cybersecurity",
    relatedResource: "cybersecurity-checklist",
  },
  {
    slug: "marketing-systems-scorecard",
    title: "Marketing Systems Scorecard",
    metaTitle: "Marketing Systems Scorecard for Small Businesses | LTOL",
    metaDescription: "Score your marketing systems. Evaluate lead capture, CRM, email automation, and analytics. Free scorecard from Lake Tahoe Online.",
    headline: "How Effective Are Your Marketing Systems?",
    description: "Evaluate the key components of your marketing infrastructure. Identify what's working, what's missing, and where automation could have the biggest impact.",
    questions: [
      { id: "lead_capture", question: "Do leads enter your CRM automatically from your website?", options: [{ label: "Yes, all forms connected", value: 2 }, { label: "Some forms connected", value: 1 }, { label: "No automatic capture", value: 0 }] },
      { id: "form_tracking", question: "Are your forms tracked and measured?", options: [{ label: "Yes, with conversion tracking", value: 2 }, { label: "Basic submission tracking", value: 1 }, { label: "No tracking", value: 0 }] },
      { id: "followup", question: "Is lead follow-up automated?", options: [{ label: "Yes, automated sequences", value: 2 }, { label: "Partially automated", value: 1 }, { label: "All manual", value: 0 }] },
      { id: "seo", question: "Is SEO actively managed?", options: [{ label: "Yes, with ongoing optimization", value: 2 }, { label: "Basic setup done once", value: 1 }, { label: "No SEO strategy", value: 0 }] },
      { id: "campaigns", question: "Are marketing campaigns measured for ROI?", options: [{ label: "Yes, with clear attribution", value: 2 }, { label: "Some tracking in place", value: 1 }, { label: "No measurement", value: 0 }] },
      { id: "nurture", question: "Is email nurturing in place for leads?", options: [{ label: "Yes, segmented sequences", value: 2 }, { label: "Basic drip campaigns", value: 1 }, { label: "No email nurturing", value: 0 }] },
    ],
    bands: [
      { min: 0, max: 4, label: "Marketing Gap", description: "Your marketing systems have significant gaps that are likely costing you leads and revenue. Building connected infrastructure should be a priority.", cta: "Book a Marketing Systems Review" },
      { min: 5, max: 8, label: "Partially Connected", description: "You have some marketing tools but they're not working together effectively. Connecting and automating your systems could significantly improve your lead conversion.", cta: "Book a Marketing Optimization Session" },
      { min: 9, max: 12, label: "Marketing Machine", description: "Your marketing systems are well-built. Focus on advanced automation, AI-powered optimization, and expanding your content strategy.", cta: "Book an Advanced Marketing Strategy Session" },
    ],
    relatedService: "digital-marketing",
    relatedResource: "marketing-automation-blueprint",
  },
];
