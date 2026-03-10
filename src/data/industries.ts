export interface IndustryData {
  slug: string;
  industry: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  challenges: string[];
  solutions: string[];
  services: string[];
  faqs: { question: string; answer: string }[];
}

export const industries: IndustryData[] = [
  {
    slug: "construction-technology-solutions",
    industry: "Construction Companies",
    metaTitle: "Technology Solutions for Construction Companies | LTOL",
    metaDescription: "IT, AI, cybersecurity, and digital marketing for construction companies. Modernize operations with Lake Tahoe Online.",
    headline: "Technology Solutions for Construction Companies",
    intro: "Construction companies juggle complex projects, multiple job sites, and a workforce that's often in the field. LTOL builds technology systems that connect your office, your crews, and your customers — so nothing falls through the cracks.",
    challenges: [
      "Project information scattered across paper, email, and spreadsheets",
      "Difficulty tracking crews, equipment, and timelines across job sites",
      "No automated system for lead follow-up and estimates",
      "Cybersecurity risks from field devices connecting to business systems",
      "Website that doesn't generate leads or showcase completed projects",
    ],
    solutions: [
      "CRM automation for lead tracking and estimate follow-up",
      "AI-powered document processing for invoices and contracts",
      "Managed IT with mobile device management for field crews",
      "Cybersecurity for field devices and remote access",
      "SEO-optimized website with project portfolio and lead capture",
    ],
    services: ["AI Integration", "Managed IT Services", "CRM Automation", "Cybersecurity", "Website Systems", "Digital Marketing Systems"],
    faqs: [
      { question: "Can you support field workers with mobile IT?", answer: "Yes. We manage and secure mobile devices, set up field-to-office connectivity, and ensure your team can access what they need from any job site." },
      { question: "Do you work with construction-specific software?", answer: "We integrate with popular construction management platforms and can help you choose and implement the right tools for your operation." },
      { question: "How do you handle cybersecurity for construction companies?", answer: "We secure field devices, implement safe remote access, protect financial data, and train staff to recognize threats — all sized for construction business budgets." },
    ],
  },
  {
    slug: "law-firm-it-services",
    industry: "Law Firms",
    metaTitle: "IT Services & Technology Solutions for Law Firms | LTOL",
    metaDescription: "Managed IT, cybersecurity, and digital marketing for law firms. Protect client data and grow your practice with Lake Tahoe Online.",
    headline: "Technology Solutions for Law Firms",
    intro: "Law firms handle sensitive client data every day and face strict ethical obligations around data protection. LTOL provides the managed IT, cybersecurity, and marketing systems that modern law firms need — with the reliability and confidentiality your practice demands.",
    challenges: [
      "Ethical obligations to protect client confidentiality and data",
      "Outdated case management and document systems",
      "No systematic approach to client intake and follow-up",
      "Compliance requirements for data retention and security",
      "Difficulty standing out in competitive local search results",
    ],
    solutions: [
      "Managed IT with enterprise-grade security and compliance",
      "Cybersecurity audit and ongoing protection",
      "CRM automation for client intake and case tracking",
      "AI-powered document review and legal research tools",
      "Local SEO and website optimization for law firm visibility",
    ],
    services: ["Managed IT Services", "Cybersecurity", "CRM Automation", "AI Integration", "Website Systems", "Digital Marketing Systems"],
    faqs: [
      { question: "Do you understand legal compliance requirements?", answer: "Yes. We're experienced with the technology requirements around client confidentiality, data retention, and ethical obligations for law firms." },
      { question: "Can you help with legal-specific software?", answer: "We integrate with popular legal practice management platforms and can help you select and implement the right tools." },
      { question: "How do you protect client data?", answer: "We implement encrypted communications, secure file storage, access controls, and comprehensive backup systems designed for legal data protection requirements." },
    ],
  },
  {
    slug: "medical-office-cybersecurity",
    industry: "Medical Offices",
    metaTitle: "Cybersecurity & IT for Medical Offices | LTOL",
    metaDescription: "HIPAA-compliant IT services, cybersecurity, and digital marketing for medical offices. Protect patient data with Lake Tahoe Online.",
    headline: "Technology Solutions for Medical Offices",
    intro: "Medical offices handle some of the most sensitive data in any industry. LTOL provides HIPAA-aware IT services, cybersecurity, and patient communication systems that protect your practice while improving operational efficiency.",
    challenges: [
      "HIPAA compliance requirements for all technology systems",
      "Patient data at risk from cyber threats and ransomware",
      "EHR systems that don't integrate with other office technology",
      "Manual patient communication and appointment management",
      "Limited online visibility for attracting new patients",
    ],
    solutions: [
      "HIPAA-compliant managed IT infrastructure",
      "Cybersecurity with healthcare-specific protections",
      "Automated patient communication and appointment reminders",
      "EHR integration and workflow optimization",
      "Medical practice SEO and online reputation management",
    ],
    services: ["Managed IT Services", "Cybersecurity", "AI Integration", "CRM Automation", "Website Systems", "Digital Marketing Systems"],
    faqs: [
      { question: "Are your IT services HIPAA-compliant?", answer: "Yes. We design and manage IT infrastructure with HIPAA requirements at the core, including encrypted communications, access controls, and audit logging." },
      { question: "Can you help with EHR integration?", answer: "We work with major EHR platforms and can help optimize your workflows and integrate your EHR with other practice management tools." },
      { question: "How do you handle cybersecurity for medical offices?", answer: "We implement layered security including endpoint protection, email security, staff training, and incident response — all designed for healthcare environments." },
    ],
  },
  {
    slug: "real-estate-marketing-systems",
    industry: "Real Estate Agencies",
    metaTitle: "Digital Marketing & Technology for Real Estate Agencies | LTOL",
    metaDescription: "CRM automation, lead generation, and IT services for real estate agencies. Grow your listings and close more deals with LTOL.",
    headline: "Technology Solutions for Real Estate Agencies",
    intro: "Real estate is a relationship business — and technology should make those relationships stronger. LTOL builds CRM automation, lead generation, and marketing systems that help real estate agencies capture more leads, follow up faster, and close more deals.",
    challenges: [
      "Leads from multiple sources with no unified tracking",
      "Manual follow-up that can't keep pace with inquiry volume",
      "Poor online presence compared to national franchises",
      "No automated nurturing for long-cycle buyers and sellers",
      "Agent technology adoption resistance",
    ],
    solutions: [
      "Unified CRM for multi-source lead management",
      "Automated lead follow-up and drip campaigns",
      "IDX-integrated website with local SEO optimization",
      "AI-powered lead scoring and market analysis",
      "Agent-friendly tools with training and adoption support",
    ],
    services: ["CRM Automation", "Digital Marketing Systems", "Website Systems", "AI Integration", "Email Marketing Automation"],
    faqs: [
      { question: "Do you integrate with MLS and IDX?", answer: "Yes. We build websites with IDX integration and can connect your CRM to MLS data for automated listing management." },
      { question: "Can you help agents adopt new technology?", answer: "Absolutely. We design systems that are agent-friendly and provide hands-on training to ensure your team actually uses the tools." },
      { question: "How do you help compete with large franchises?", answer: "We build local SEO dominance, automated follow-up systems, and professional online presence that lets independent agencies compete effectively with larger firms." },
    ],
  },
  {
    slug: "hospitality-technology-solutions",
    industry: "Hospitality Businesses",
    metaTitle: "Technology Solutions for Hospitality Businesses | LTOL",
    metaDescription: "WiFi, IT support, marketing, and AI for hotels, restaurants, and hospitality businesses. Technology partner — Lake Tahoe Online.",
    headline: "Technology Solutions for Hospitality Businesses",
    intro: "Hospitality businesses depend on seamless technology — from guest WiFi to point-of-sale systems to online bookings. LTOL provides the IT infrastructure, marketing systems, and guest experience technology that hospitality businesses need to deliver exceptional service.",
    challenges: [
      "Unreliable guest WiFi and network infrastructure",
      "Disconnected booking, POS, and management systems",
      "Limited online visibility and review management",
      "Seasonal staffing makes technology training difficult",
      "Cybersecurity risks from guest network access",
    ],
    solutions: [
      "Commercial-grade WiFi with guest and business network separation",
      "Integrated booking and CRM systems",
      "Local SEO, review management, and social media automation",
      "AI-powered guest communication and support",
      "Managed IT with seasonal scaling flexibility",
    ],
    services: ["Network Solutions", "Managed IT Services", "Digital Marketing Systems", "AI Integration", "Website Systems", "CRM Automation"],
    faqs: [
      { question: "Can you install guest WiFi for our property?", answer: "Yes. We design and install commercial-grade guest WiFi with proper security separation from your business network." },
      { question: "Do you work with hotels and vacation rentals?", answer: "Yes. We serve hotels, vacation rental companies, restaurants, event venues, and other hospitality businesses throughout the Western US." },
      { question: "Can you help with online review management?", answer: "Yes. We set up automated review request systems and help you build a strong online reputation across Google, Yelp, and industry-specific platforms." },
    ],
  },
];
