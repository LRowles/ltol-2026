import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import ltolLogo from "@/assets/ltol-logo.svg";

const serviceLinks = [
  { name: "AI Integration", href: "/ai-integration" },
  { name: "Digital Marketing", href: "/digital-marketing" },
  { name: "Managed IT Services", href: "/managed-it-services" },
  { name: "Cybersecurity", href: "/cybersecurity" },
  { name: "Network Solutions", href: "/network-solutions" },
  { name: "CRM Automation", href: "/crm-automation" },
  { name: "Website Systems", href: "/website-systems" },
  { name: "Email Marketing", href: "/email-marketing-automation" },
];

const resourceLinks = [
  { name: "Blog", href: "/blog" },
  { name: "AI Playbook", href: "/resources/small-business-ai-playbook" },
  { name: "Cybersecurity Checklist", href: "/resources/cybersecurity-checklist" },
  { name: "AI Readiness Assessment", href: "/assessments/ai-readiness" },
  { name: "Cybersecurity Risk Check", href: "/assessments/cybersecurity-risk-check" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToContact = () => {
    setIsOpen(false);
    if (window.location.pathname === "/") {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }), 150);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img src={ltolLogo} alt="Lake Tahoe Online" className="h-8 w-auto" />
            <span className="text-sm font-medium text-muted-foreground hidden sm:block">Lake Tahoe Online</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            {/* Services Dropdown */}
            <div className="relative group" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2">
                Services <ChevronDown className="w-3 h-3" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-56 bg-card border border-border rounded-lg shadow-lg py-2 mt-0">
                  {serviceLinks.map((link) => (
                    <Link key={link.href} to={link.href} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors" onClick={() => setServicesOpen(false)}>
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative group" onMouseEnter={() => setResourcesOpen(true)} onMouseLeave={() => setResourcesOpen(false)}>
              <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2">
                Resources <ChevronDown className="w-3 h-3" />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-0 w-56 bg-card border border-border rounded-lg shadow-lg py-2 mt-0">
                  {resourceLinks.map((link) => (
                    <Link key={link.href} to={link.href} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors" onClick={() => setResourcesOpen(false)}>
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Blog</Link>

            <Button onClick={scrollToContact} className="gradient-bg hover:opacity-90 text-primary-foreground font-semibold">
              Schedule a Consultation
            </Button>
          </div>

          <button className="lg:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              <div className="px-2 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Services</div>
              {serviceLinks.map((link) => (
                <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors text-left px-4 py-2 text-sm font-medium">
                  {link.name}
                </Link>
              ))}
              <div className="px-2 py-2 mt-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Resources</div>
              {resourceLinks.map((link) => (
                <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors text-left px-4 py-2 text-sm font-medium">
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-2">
                <Button onClick={scrollToContact} className="gradient-bg hover:opacity-90 text-primary-foreground font-semibold w-full">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
