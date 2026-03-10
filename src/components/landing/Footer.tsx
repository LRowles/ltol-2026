import { Facebook, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import ltolLogo from "@/assets/ltol-logo.svg";

const footerLinks = {
  solutions: [
    { name: "AI Integration", href: "/ai-integration" },
    { name: "Digital Marketing", href: "/digital-marketing" },
    { name: "Managed IT Services", href: "/managed-it-services" },
    { name: "Cybersecurity", href: "/cybersecurity" },
    { name: "Network Solutions", href: "/network-solutions" },
    { name: "CRM Automation", href: "/crm-automation" },
    { name: "Website Systems", href: "/website-systems" },
    { name: "Email Marketing", href: "/email-marketing-automation" },
  ],
  industries: [
    { name: "Small Business", href: "/solutions/small-business" },
    { name: "Construction", href: "/solutions/construction" },
    { name: "Healthcare", href: "/solutions/healthcare" },
    { name: "Legal", href: "/solutions/legal" },
    { name: "Real Estate", href: "/solutions/real-estate" },
    { name: "Hospitality", href: "/solutions/hospitality" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "AI Playbook", href: "/resources/small-business-ai-playbook" },
    { name: "Cybersecurity Checklist", href: "/resources/cybersecurity-checklist" },
    { name: "Marketing Blueprint", href: "/resources/marketing-automation-blueprint" },
    { name: "Tech Stack Guide", href: "/resources/technology-stack-guide" },
  ],
  assessments: [
    { name: "AI Readiness", href: "/assessments/ai-readiness" },
    { name: "Technology Stack", href: "/assessments/technology-stack" },
    { name: "Cybersecurity Risk", href: "/assessments/cybersecurity-risk-check" },
    { name: "Marketing Systems", href: "/assessments/marketing-systems-scorecard" },
  ],
  locations: [
    { name: "Reno", href: "/reno-managed-it" },
    { name: "Truckee", href: "/truckee-managed-it" },
    { name: "Lake Tahoe", href: "/tahoe-managed-it" },
    { name: "Northern Nevada", href: "/northern-nevada-ai-integration" },
    { name: "California", href: "/california-small-business-it" },
    { name: "Western US", href: "/western-us-digital-infrastructure" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img src={ltolLogo} alt="LTOL" className="h-8 w-auto brightness-0 invert" />
              <span className="text-sm font-medium text-background/70">LTOL</span>
            </Link>
            <p className="text-background/70 mb-4 max-w-md text-sm">
              Digital Infrastructure for Small Businesses. AI, marketing, IT, and cybersecurity — connected into one powerful system.
            </p>
            <p className="text-background/50 text-xs mb-4">
              Serving Tahoe • Reno • Northern Nevada • Western US
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} aria-label={social.label} className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center text-background/70 hover:text-background hover:bg-background/20 transition-colors">
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-xs font-semibold text-background uppercase tracking-wider mb-3">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link, i) => (
                <li key={i}><Link to={link.href} className="text-background/70 hover:text-background transition-colors text-xs">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-xs font-semibold text-background uppercase tracking-wider mb-3">Industries</h3>
            <ul className="space-y-2">
              {footerLinks.industries.map((link, i) => (
                <li key={i}><Link to={link.href} className="text-background/70 hover:text-background transition-colors text-xs">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-semibold text-background uppercase tracking-wider mb-3">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, i) => (
                <li key={i}><Link to={link.href} className="text-background/70 hover:text-background transition-colors text-xs">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Assessments */}
          <div>
            <h3 className="text-xs font-semibold text-background uppercase tracking-wider mb-3">Assessments</h3>
            <ul className="space-y-2">
              {footerLinks.assessments.map((link, i) => (
                <li key={i}><Link to={link.href} className="text-background/70 hover:text-background transition-colors text-xs">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xs font-semibold text-background uppercase tracking-wider mb-3">Locations</h3>
            <ul className="space-y-2">
              {footerLinks.locations.map((link, i) => (
                <li key={i}><Link to={link.href} className="text-background/70 hover:text-background transition-colors text-xs">{link.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/15 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/50">© {new Date().getFullYear()} LTOL. All rights reserved.</p>
          <div className="flex space-x-6 text-xs text-background/50">
            <Link to="/privacy-policy" className="hover:text-background transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-background transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
