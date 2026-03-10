export interface ResourceData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  description: string;
  includes: string[];
  ctaText: string;
  relatedService: string;
  relatedAssessment: string;
}

export const resources: ResourceData[] = [
  {
    slug: "small-business-ai-playbook",
    title: "The Small Business AI Playbook",
    metaTitle: "Small Business AI Playbook — Free Download | LTOL",
    metaDescription: "A practical guide to AI for small businesses. Learn where AI creates real value, how to avoid wasted spend, and how to adopt strategically. Free download.",
    headline: "A Practical Guide to AI for Small Businesses",
    subheadline: "Learn where AI creates real value, how to avoid wasted spend, and how to adopt it strategically.",
    description: "This playbook cuts through the AI hype and gives you a clear, actionable framework for bringing AI into your small business. Written for business owners, not technologists — it focuses on practical applications that deliver measurable ROI.",
    includes: [
      "The best first AI use cases for small businesses",
      "Workflow automation ideas by department",
      "A step-by-step AI adoption roadmap",
      "Team implementation and training tips",
      "ROI calculation framework for AI investments",
      "Common pitfalls and how to avoid them",
    ],
    ctaText: "Download the AI Playbook",
    relatedService: "ai-integration",
    relatedAssessment: "ai-readiness",
  },
  {
    slug: "cybersecurity-checklist",
    title: "Cybersecurity Checklist for Small Businesses",
    metaTitle: "Cybersecurity Checklist for Small Businesses — Free Download | LTOL",
    metaDescription: "See the most common cybersecurity vulnerabilities and the practical steps that reduce risk. Free checklist for small businesses from LTOL.",
    headline: "Protect Your Business with a Simple Cybersecurity Checklist",
    subheadline: "See the most common vulnerabilities and the practical steps that reduce risk.",
    description: "This checklist helps you quickly assess your current cybersecurity posture and identify the most critical gaps. It's designed for small business owners who want to improve security without getting overwhelmed by technical jargon.",
    includes: [
      "Device and endpoint security assessment",
      "Email and phishing protection checklist",
      "Password and access management review",
      "Backup and recovery verification",
      "Network security evaluation",
      "Employee awareness training needs",
    ],
    ctaText: "Download the Checklist",
    relatedService: "cybersecurity",
    relatedAssessment: "cybersecurity-risk-check",
  },
  {
    slug: "marketing-automation-blueprint",
    title: "Marketing Automation Blueprint",
    metaTitle: "Marketing Automation Blueprint — Free Download | LTOL",
    metaDescription: "Learn how websites, CRM, email, and lead nurturing should work together. Free marketing automation blueprint for small businesses.",
    headline: "Build a Marketing System That Follows Up Automatically",
    subheadline: "Learn how websites, CRM, email, and lead nurturing should work together.",
    description: "This blueprint shows you how to connect your marketing tools into a system that generates leads, nurtures them automatically, and converts them into customers — without requiring constant manual effort from your team.",
    includes: [
      "Website-to-CRM lead capture workflow",
      "Automated email nurture sequence templates",
      "Lead scoring and qualification framework",
      "CRM pipeline design recommendations",
      "Analytics and reporting setup guide",
      "Integration checklist for common tools",
    ],
    ctaText: "Download the Blueprint",
    relatedService: "digital-marketing",
    relatedAssessment: "marketing-systems-scorecard",
  },
  {
    slug: "technology-stack-guide",
    title: "Small Business Technology Stack Guide",
    metaTitle: "Small Business Technology Stack Guide — Free Download | LTOL",
    metaDescription: "Understand the core systems needed for secure, scalable operations. Free technology stack guide for small businesses from Lake Tahoe Online.",
    headline: "The Essential Technology Stack for Growth-Minded Small Businesses",
    subheadline: "Understand the core systems needed for secure, scalable operations.",
    description: "This guide walks you through the essential technology systems every growing small business needs — from IT infrastructure to marketing tools to security — and how they should connect to reduce friction and support growth.",
    includes: [
      "Core infrastructure requirements",
      "Communication and collaboration tools",
      "CRM and customer management systems",
      "Marketing and sales automation platforms",
      "Security and compliance foundations",
      "Integration planning framework",
    ],
    ctaText: "Download the Guide",
    relatedService: "managed-it-services",
    relatedAssessment: "technology-stack",
  },
  {
    slug: "ai-readiness-scorecard",
    title: "AI Readiness Scorecard",
    metaTitle: "AI Readiness Scorecard — Free Download | LTOL",
    metaDescription: "Score your current systems and identify the best next step for AI adoption. Free AI readiness scorecard for small businesses.",
    headline: "Is Your Business Ready for AI?",
    subheadline: "Score your current systems and identify the best next step for AI adoption.",
    description: "This scorecard helps you evaluate your business's readiness for AI adoption across key dimensions — from data infrastructure to team readiness to workflow complexity. Use it to prioritize your AI investment for maximum impact.",
    includes: [
      "Data readiness evaluation",
      "Workflow complexity assessment",
      "Team readiness indicators",
      "Technology infrastructure review",
      "AI opportunity prioritization matrix",
      "Recommended next steps by readiness level",
    ],
    ctaText: "Download the Scorecard",
    relatedService: "ai-integration",
    relatedAssessment: "ai-readiness",
  },
];
