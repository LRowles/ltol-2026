export interface PillarData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  sections: {
    title: string;
    content: string;
    linkedService?: string;
  }[];
  relatedServices: string[];
  relatedBlogs: string[];
  relatedResources: string[];
  relatedAssessments: string[];
  faqs: { question: string; answer: string }[];
}

export const pillars: PillarData[] = [
  {
    slug: "small-business-technology-stack",
    title: "Small Business Technology Stack",
    metaTitle: "Small Business Technology Stack Guide | LTOL",
    metaDescription: "Complete guide to building a modern technology stack for small businesses. Websites, CRM, email marketing, cybersecurity, AI tools, and IT infrastructure explained.",
    headline: "The Complete Small Business Technology Stack",
    intro: "Every modern small business runs on technology — but most are using disconnected tools that waste time and money. This guide breaks down the essential components of a complete technology stack, how they connect, and how to build one that drives growth.",
    sections: [
      {
        title: "Website Systems",
        content: "Your website is the foundation of your digital presence. A modern small business website needs to do more than look good — it should generate leads, integrate with your CRM, and rank in local search results. Conversion-focused design, mobile responsiveness, and SEO are non-negotiable.",
        linkedService: "website-systems",
      },
      {
        title: "CRM & Sales Automation",
        content: "A CRM system is the central nervous system of your business. It tracks every lead, automates follow-up, and gives you visibility into your sales pipeline. Without a CRM, leads fall through the cracks and growth becomes unpredictable.",
        linkedService: "crm-automation",
      },
      {
        title: "Email Marketing Automation",
        content: "Email remains the highest-ROI marketing channel. Automated sequences nurture leads, re-engage past customers, and keep your business top-of-mind — all without manual effort. The key is integration with your CRM and website.",
        linkedService: "email-marketing-automation",
      },
      {
        title: "Cybersecurity",
        content: "Small businesses are the #1 target for cybercrime. A proper security stack includes endpoint protection, email security, multi-factor authentication, backup systems, and employee training. The cost of prevention is a fraction of the cost of a breach.",
        linkedService: "cybersecurity",
      },
      {
        title: "AI Integration",
        content: "AI tools can automate customer support, process documents, score leads, and optimize marketing — but only when strategically implemented. The best AI integrations start with identifying high-impact use cases and building from there.",
        linkedService: "ai-integration",
      },
      {
        title: "IT Infrastructure",
        content: "Reliable IT infrastructure — networks, devices, cloud services, and help desk support — keeps your team productive. Proactive managed IT prevents the downtime and disruptions that cost small businesses thousands each year.",
        linkedService: "managed-it-services",
      },
      {
        title: "Digital Marketing Systems",
        content: "Marketing isn't a campaign — it's a system. When your website, SEO, email, CRM, and analytics work together, you get predictable lead generation. Disconnected tools produce disconnected results.",
        linkedService: "digital-marketing",
      },
    ],
    relatedServices: ["ai-integration", "managed-it-services", "cybersecurity", "digital-marketing", "crm-automation", "website-systems", "email-marketing-automation", "network-solutions"],
    relatedBlogs: ["small-business-technology-stack", "ai-for-small-businesses-2026", "how-marketing-automation-increases-revenue"],
    relatedResources: ["technology-stack-guide", "small-business-ai-playbook"],
    relatedAssessments: ["technology-stack", "ai-readiness"],
    faqs: [
      { question: "What technology does every small business need?", answer: "At minimum: a conversion-focused website, CRM for lead tracking, email marketing, cybersecurity protection, and reliable IT infrastructure. AI integration is rapidly becoming essential as well." },
      { question: "How much does a full technology stack cost?", answer: "It varies widely based on business size and needs. LTOL designs stacks that match your budget, starting with the highest-impact systems and scaling from there." },
      { question: "Do I need all of this at once?", answer: "No. We help you prioritize based on your biggest pain points and build a technology roadmap that grows with your business." },
      { question: "How do these systems connect?", answer: "Integration is the key. Your website feeds leads to your CRM, which triggers email sequences, while your IT and security systems protect everything. We build these connections so everything works as one system." },
      { question: "Can a small business really use AI?", answer: "Absolutely. AI tools are now accessible and affordable for businesses of any size. The key is starting with practical use cases that deliver measurable ROI." },
    ],
  },
  {
    slug: "ai-integration-for-small-business",
    title: "AI Integration for Small Business",
    metaTitle: "AI Integration for Small Business — Complete Guide | LTOL",
    metaDescription: "How small businesses use AI to automate workflows, improve customer service, and grow revenue. Practical AI integration strategies from LTOL.",
    headline: "AI Integration for Small Business",
    intro: "Artificial intelligence is no longer just for large enterprises. Small businesses across every industry are using AI to automate repetitive tasks, improve customer interactions, and make smarter decisions. This guide explains how AI works for small businesses and where to start.",
    sections: [
      {
        title: "AI Workflow Automation",
        content: "AI can automate data entry, document processing, scheduling, and dozens of other repetitive tasks. The result is fewer errors, faster turnaround, and more time for your team to focus on high-value work.",
        linkedService: "ai-workflow-automation",
      },
      {
        title: "AI Customer Support",
        content: "AI-powered chatbots and support systems handle common questions 24/7, route complex issues to the right team member, and provide instant responses that improve customer satisfaction.",
        linkedService: "ai-customer-support-systems",
      },
      {
        title: "AI Document Processing",
        content: "From invoices to contracts to applications, AI can extract data from documents, classify them, and route them through your workflows — eliminating hours of manual processing.",
        linkedService: "ai-document-processing",
      },
      {
        title: "AI-Enhanced Marketing",
        content: "AI improves marketing through lead scoring, personalized content recommendations, predictive analytics, and automated A/B testing. The result is better targeting and higher conversion rates.",
        linkedService: "digital-marketing",
      },
      {
        title: "Getting Started with AI",
        content: "The best approach is to identify 2-3 high-impact use cases, implement them with expert guidance, and measure results before expanding. LTOL helps you avoid the hype and focus on AI that delivers real ROI.",
        linkedService: "ai-integration",
      },
    ],
    relatedServices: ["ai-integration", "ai-workflow-automation", "ai-customer-support-systems", "ai-document-processing", "crm-automation"],
    relatedBlogs: ["ai-for-small-businesses-2026", "how-northern-nevada-businesses-use-ai"],
    relatedResources: ["small-business-ai-playbook"],
    relatedAssessments: ["ai-readiness"],
    faqs: [
      { question: "Is AI affordable for small businesses?", answer: "Yes. Many AI tools are available at small business price points, and the ROI from automation often pays for the investment within months." },
      { question: "Will AI replace my employees?", answer: "No. AI handles repetitive tasks so your team can focus on higher-value work. Most businesses see improved employee satisfaction after AI adoption." },
      { question: "Where should I start with AI?", answer: "Start with your biggest time-wasters — repetitive data entry, manual customer support, or inconsistent follow-up. These are usually the highest-ROI AI implementations." },
      { question: "Do I need technical expertise?", answer: "Not at all. LTOL handles all the technical implementation and trains your team to use the tools confidently." },
    ],
  },
  {
    slug: "managed-it-services-for-small-business",
    title: "Managed IT Services for Small Business",
    metaTitle: "Managed IT Services for Small Business — Complete Guide | LTOL",
    metaDescription: "Everything small businesses need to know about managed IT services. Monitoring, help desk, cloud, networks, and strategic planning explained.",
    headline: "Managed IT Services for Small Business",
    intro: "Small businesses can't afford the downtime, security risks, and productivity losses that come from unmanaged technology. Managed IT services provide enterprise-level support, monitoring, and maintenance — without hiring a full IT department.",
    sections: [
      {
        title: "24/7 Monitoring & Maintenance",
        content: "Proactive monitoring catches problems before they cause downtime. Automated patch management, system updates, and performance optimization keep your infrastructure running smoothly.",
        linkedService: "managed-it-services",
      },
      {
        title: "Help Desk Support",
        content: "Your team needs fast, reliable support when technology issues arise. A managed help desk provides expert assistance for everyday problems — from password resets to software troubleshooting.",
        linkedService: "help-desk-services",
      },
      {
        title: "Network Management",
        content: "Reliable WiFi and network infrastructure is the foundation of modern business. Professional network management ensures consistent connectivity, security, and performance.",
        linkedService: "network-management",
      },
      {
        title: "Cloud Services",
        content: "Cloud infrastructure provides flexibility, scalability, and disaster recovery. Managed cloud services ensure your data is secure, accessible, and properly backed up.",
        linkedService: "cloud-services",
      },
      {
        title: "Strategic IT Planning",
        content: "Technology should align with business goals. A managed IT partner provides a technology roadmap that guides investments, prevents costly mistakes, and keeps your infrastructure current.",
        linkedService: "managed-it-services",
      },
    ],
    relatedServices: ["managed-it-services", "network-management", "help-desk-services", "cloud-services", "cybersecurity", "network-solutions"],
    relatedBlogs: ["small-business-technology-stack"],
    relatedResources: ["technology-stack-guide"],
    relatedAssessments: ["technology-stack"],
    faqs: [
      { question: "What does managed IT include?", answer: "Typically: 24/7 monitoring, help desk support, patch management, device management, cloud services, network management, vendor coordination, and strategic planning." },
      { question: "How much does managed IT cost?", answer: "Pricing varies based on the number of users and devices. Most small businesses find it significantly cheaper than hiring even one full-time IT employee." },
      { question: "Can you support remote workers?", answer: "Absolutely. We manage devices, secure connections, and provide support regardless of where your team works." },
      { question: "What's the difference between break-fix and managed IT?", answer: "Break-fix is reactive — you call when something breaks. Managed IT is proactive — we prevent problems before they happen, which reduces downtime and costs." },
    ],
  },
  {
    slug: "cybersecurity-for-small-business",
    title: "Cybersecurity for Small Business",
    metaTitle: "Cybersecurity for Small Business — Complete Guide | LTOL",
    metaDescription: "Essential cybersecurity guide for small businesses. Endpoint protection, email security, backup, compliance, and security awareness training explained.",
    headline: "Cybersecurity for Small Business",
    intro: "Small businesses are targeted by 43% of all cyberattacks, yet most lack basic protections. This guide covers the essential cybersecurity measures every small business needs — and how to implement them without enterprise-level budgets or complexity.",
    sections: [
      {
        title: "Endpoint Security",
        content: "Every device that connects to your network is a potential entry point for attackers. Endpoint detection and response (EDR) tools monitor devices in real-time, detect threats, and respond automatically.",
        linkedService: "endpoint-security",
      },
      {
        title: "Email Security",
        content: "Email is the #1 attack vector for small businesses. Advanced email security filters phishing attempts, blocks malicious attachments, and prevents business email compromise.",
        linkedService: "email-security",
      },
      {
        title: "Data Backup & Recovery",
        content: "Ransomware can encrypt your entire business in minutes. Reliable backup systems with tested recovery procedures ensure you can restore operations quickly without paying a ransom.",
        linkedService: "data-backup-services",
      },
      {
        title: "Security Awareness Training",
        content: "Your employees are your first line of defense — and your biggest vulnerability. Regular security awareness training helps your team recognize threats and respond correctly.",
        linkedService: "cybersecurity",
      },
      {
        title: "Compliance & Regulations",
        content: "Industries like healthcare, legal, and finance have specific compliance requirements. A proper cybersecurity program helps you meet HIPAA, PCI-DSS, and other regulatory obligations.",
        linkedService: "cybersecurity",
      },
    ],
    relatedServices: ["cybersecurity", "endpoint-security", "email-security", "data-backup-services", "managed-it-services"],
    relatedBlogs: ["cybersecurity-risks-small-businesses", "cybersecurity-risks-businesses-truckee"],
    relatedResources: ["cybersecurity-checklist"],
    relatedAssessments: ["cybersecurity-risk-check"],
    faqs: [
      { question: "How do I know if my business is at risk?", answer: "If you haven't had a professional security assessment, there are almost certainly gaps. We offer a free consultation to help you understand your risk level." },
      { question: "Is cybersecurity expensive for small businesses?", answer: "Basic protection is surprisingly affordable. The cost of a breach — lost data, downtime, reputation damage — is far more expensive than prevention." },
      { question: "What's the most common attack on small businesses?", answer: "Phishing emails are the #1 attack vector, followed by ransomware and business email compromise. All three can be significantly reduced with proper protections." },
      { question: "Do I need compliance?", answer: "It depends on your industry. Healthcare (HIPAA), payment processing (PCI-DSS), and legal services all have specific requirements. We help you determine and meet your obligations." },
    ],
  },
  {
    slug: "digital-marketing-systems-for-small-business",
    title: "Digital Marketing Systems for Small Business",
    metaTitle: "Digital Marketing Systems for Small Business | LTOL",
    metaDescription: "Build a complete digital marketing system for your small business. SEO, websites, CRM, email automation, and analytics working together.",
    headline: "Digital Marketing Systems for Small Business",
    intro: "Most small businesses approach marketing as disconnected activities — a website here, some social posts there, occasional email blasts. The businesses that grow consistently build marketing systems where every channel works together to attract, nurture, and convert customers.",
    sections: [
      {
        title: "SEO & Local Search",
        content: "Search engine optimization puts your business in front of customers actively looking for your services. Local SEO is especially powerful for service-based businesses competing in specific geographic markets.",
        linkedService: "local-seo-services",
      },
      {
        title: "Conversion-Focused Websites",
        content: "Your website should generate leads, not just exist. Conversion-focused design, clear calls-to-action, and CRM integration turn visitors into prospects.",
        linkedService: "website-systems",
      },
      {
        title: "Email Marketing",
        content: "Automated email sequences nurture leads over time, re-engage past customers, and drive repeat business. Integration with your CRM makes every email relevant and timely.",
        linkedService: "email-marketing-automation",
      },
      {
        title: "Marketing Automation",
        content: "Marketing automation connects your website, CRM, email, and analytics into a single system. Leads are captured, scored, nurtured, and handed off to sales automatically.",
        linkedService: "digital-marketing",
      },
      {
        title: "Analytics & Reporting",
        content: "You can't improve what you don't measure. Proper analytics tracking shows you which marketing channels drive real business results — not just clicks and impressions.",
        linkedService: "digital-marketing",
      },
    ],
    relatedServices: ["digital-marketing", "local-seo-services", "website-systems", "email-marketing-automation", "crm-automation"],
    relatedBlogs: ["how-marketing-automation-increases-revenue", "marketing-automation-real-estate-reno"],
    relatedResources: ["marketing-automation-blueprint"],
    relatedAssessments: ["marketing-systems-scorecard"],
    faqs: [
      { question: "How is a marketing system different from marketing campaigns?", answer: "Campaigns are temporary. Systems are permanent infrastructure that generates leads continuously. We build the systems so you're not starting from scratch every month." },
      { question: "How long before I see results?", answer: "Quick wins like improved lead capture happen in weeks. SEO and content marketing typically show strong results within 3–6 months." },
      { question: "Do I need a new website?", answer: "Not always. We evaluate your current website and either optimize it or recommend a rebuild based on your goals and current performance." },
      { question: "What's the ROI of marketing automation?", answer: "Businesses using marketing automation see 451% more qualified leads on average. The key is proper setup and integration with your sales process." },
    ],
  },
  {
    slug: "marketing-automation-for-small-business",
    title: "Marketing Automation for Small Business",
    metaTitle: "Marketing Automation for Small Business | LTOL",
    metaDescription: "How marketing automation helps small businesses generate and nurture leads automatically. CRM, email, and workflow automation explained.",
    headline: "Marketing Automation for Small Business",
    intro: "Marketing automation is the bridge between generating interest and closing deals. It captures leads from your website, nurtures them with targeted content, scores them based on engagement, and alerts your team when prospects are ready to buy — all automatically.",
    sections: [
      {
        title: "Lead Capture & Scoring",
        content: "Automated forms, landing pages, and lead magnets capture prospect information. Lead scoring assigns points based on engagement, helping your sales team focus on the hottest opportunities.",
        linkedService: "crm-automation",
      },
      {
        title: "Email Nurture Sequences",
        content: "Automated email sequences deliver the right message at the right time based on prospect behavior. Welcome series, educational content, and re-engagement campaigns run continuously.",
        linkedService: "email-marketing-automation",
      },
      {
        title: "CRM Integration",
        content: "Marketing automation is most powerful when connected to your CRM. Lead data flows seamlessly from marketing to sales, with full visibility into every interaction.",
        linkedService: "crm-automation",
      },
      {
        title: "Workflow Automation",
        content: "Beyond email, marketing automation can trigger tasks, notifications, list segmentation, and data updates based on prospect actions — reducing manual work across your marketing and sales process.",
        linkedService: "ai-workflow-automation",
      },
    ],
    relatedServices: ["crm-automation", "email-marketing-automation", "digital-marketing", "ai-integration", "website-systems"],
    relatedBlogs: ["how-marketing-automation-increases-revenue", "marketing-automation-real-estate-reno"],
    relatedResources: ["marketing-automation-blueprint"],
    relatedAssessments: ["marketing-systems-scorecard"],
    faqs: [
      { question: "Is marketing automation only for big companies?", answer: "Not at all. Small businesses often benefit most because automation multiplies your limited team's capacity." },
      { question: "What platforms do you recommend?", answer: "We work with several platforms and recommend based on your business size, budget, and existing tech stack." },
      { question: "How long does setup take?", answer: "Basic automation can be live within 2–4 weeks. More complex systems with multiple sequences and integrations typically take 4–8 weeks." },
      { question: "Will it feel impersonal to my customers?", answer: "Done right, automation feels more personal because every message is triggered by the prospect's actual behavior and interests." },
    ],
  },
  {
    slug: "crm-automation-for-small-business",
    title: "CRM Automation for Small Business",
    metaTitle: "CRM Automation for Small Business | LTOL",
    metaDescription: "Complete guide to CRM automation for small businesses. Lead tracking, sales pipeline management, and automated follow-up explained.",
    headline: "CRM Automation for Small Business",
    intro: "A CRM system is only as good as the data in it and the automation around it. Most small businesses buy a CRM but never fully implement it. This guide explains how to turn your CRM into an automated growth engine that tracks leads, manages pipelines, and follows up without manual effort.",
    sections: [
      {
        title: "Lead Management",
        content: "Automated lead capture from your website, email, and other sources feeds directly into your CRM. No more copy-pasting or manual data entry — every lead is tracked from first touch to close.",
        linkedService: "crm-automation",
      },
      {
        title: "Pipeline Automation",
        content: "Automated pipeline stages, task creation, and notifications ensure deals move forward without manual tracking. Your team knows exactly what to do next for every opportunity.",
        linkedService: "crm-automation",
      },
      {
        title: "Follow-Up Sequences",
        content: "Automated follow-up emails and tasks ensure no lead goes cold. Triggered by behavior and timing, these sequences feel personal while running entirely on autopilot.",
        linkedService: "email-marketing-automation",
      },
      {
        title: "Reporting & Analytics",
        content: "CRM analytics show you pipeline value, conversion rates, sales cycle length, and team performance. Data-driven decisions replace gut feelings.",
        linkedService: "crm-automation",
      },
    ],
    relatedServices: ["crm-automation", "email-marketing-automation", "ai-integration", "digital-marketing"],
    relatedBlogs: ["how-marketing-automation-increases-revenue"],
    relatedResources: ["marketing-automation-blueprint"],
    relatedAssessments: ["marketing-systems-scorecard"],
    faqs: [
      { question: "Which CRM is best for small businesses?", answer: "It depends on your industry, team size, and budget. We evaluate your needs and recommend the best fit — then handle setup and training." },
      { question: "Can you migrate from our current system?", answer: "Yes. We handle data migration from spreadsheets, old CRMs, or other systems — cleanly and accurately." },
      { question: "How do I get my team to actually use it?", answer: "We design the CRM around your actual workflow and provide hands-on training. When the system makes their job easier, adoption follows naturally." },
      { question: "What's the ROI of CRM automation?", answer: "Businesses with properly implemented CRMs see 29% increases in sales and 34% improvements in sales productivity on average." },
    ],
  },
  {
    slug: "business-process-automation",
    title: "Business Process Automation",
    metaTitle: "Business Process Automation for Small Business | LTOL",
    metaDescription: "Automate repetitive business processes to save time and reduce errors. Workflow automation, AI integration, and system optimization for small businesses.",
    headline: "Business Process Automation for Small Business",
    intro: "Every small business has processes that eat up hours of manual work — data entry, document handling, customer communication, reporting. Business process automation eliminates these bottlenecks, reduces errors, and frees your team to focus on growth.",
    sections: [
      {
        title: "Workflow Automation",
        content: "Map your current processes, identify bottlenecks, and automate repetitive steps. From approval workflows to data routing, automation keeps work flowing without manual intervention.",
        linkedService: "ai-workflow-automation",
      },
      {
        title: "Document Processing",
        content: "AI-powered document processing extracts data from invoices, contracts, applications, and forms — eliminating manual data entry and reducing errors.",
        linkedService: "ai-document-processing",
      },
      {
        title: "Customer Communication",
        content: "Automated communication systems handle appointment reminders, follow-ups, feedback requests, and status updates — keeping customers informed without requiring staff time.",
        linkedService: "ai-customer-support-systems",
      },
      {
        title: "System Integration",
        content: "When your tools don't talk to each other, your team becomes the integration layer. Connecting your CRM, email, accounting, and operations systems eliminates duplicate data entry and ensures accuracy.",
        linkedService: "crm-automation",
      },
      {
        title: "Reporting & Analytics",
        content: "Automated reporting pulls data from multiple systems into dashboards that update in real-time. No more spreadsheet wrangling — just clear visibility into business performance.",
        linkedService: "managed-it-services",
      },
    ],
    relatedServices: ["ai-integration", "ai-workflow-automation", "ai-document-processing", "ai-customer-support-systems", "crm-automation"],
    relatedBlogs: ["ai-for-small-businesses-2026", "how-marketing-automation-increases-revenue"],
    relatedResources: ["small-business-ai-playbook", "technology-stack-guide"],
    relatedAssessments: ["ai-readiness", "technology-stack"],
    faqs: [
      { question: "What processes can be automated?", answer: "Almost any repetitive, rule-based process: data entry, document handling, customer communication, scheduling, reporting, and more." },
      { question: "How long does automation take to implement?", answer: "Simple automations can be live in days. Complex multi-system workflows typically take 2–6 weeks depending on scope." },
      { question: "Will automation break if something changes?", answer: "Well-built automations are resilient. We design systems with error handling and monitoring so issues are caught and resolved quickly." },
      { question: "What's the ROI?", answer: "Most businesses see ROI within 2–3 months through reduced labor costs, fewer errors, and faster processing times." },
    ],
  },
];
