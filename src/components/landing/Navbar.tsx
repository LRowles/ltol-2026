import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import ltolLogo from "@/assets/ltol-logo.svg";

const solutionsLinks = [
  { name: "AI Integration", href: "/ai-integration" },
  { name: "Digital Marketing", href: "/digital-marketing" },
  { name: "Managed IT Services", href: "/managed-it-services" },
  { name: "Cybersecurity", href: "/cybersecurity" },
  { name: "Network Solutions", href: "/network-solutions" },
  { name: "CRM Automation", href: "/crm-automation" },
  { name: "Website Systems", href: "/website-systems" },
  { name: "Email Marketing", href: "/email-marketing-automation" },
];

const industryLinks = [
  { name: "Small Business", href: "/solutions/small-business" },
  { name: "Construction", href: "/solutions/construction" },
  { name: "Healthcare", href: "/solutions/healthcare" },
  { name: "Legal", href: "/solutions/legal" },
  { name: "Real Estate", href: "/solutions/real-estate" },
  { name: "Hospitality", href: "/solutions/hospitality" },
];

const resourceLinks = [
  { name: "Blog", href: "/blog" },
  { name: "AI Playbook", href: "/resources/small-business-ai-playbook" },
  { name: "Cybersecurity Checklist", href: "/resources/cybersecurity-checklist" },
  { name: "Marketing Blueprint", href: "/resources/marketing-automation-blueprint" },
  { name: "AI Readiness Assessment", href: "/assessments/ai-readiness" },
  { name: "Cybersecurity Risk Check", href: "/assessments/cybersecurity-risk-check" },
];

type DropdownKey = "solutions" | "industries" | "resources";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (window.location.pathname === "/") {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" }), 150);
    }
  };

  const Dropdown = ({ id, label, links }: { id: DropdownKey; label: string; links: { name: string; href: string }[] }) => (
    <div
      className="relative"
      onMouseEnter={() => setOpenDropdown(id)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2">
        {label} <ChevronDown className="w-3 h-3" />
      </button>
      {openDropdown === id && (
        <div className="absolute top-full left-0 w-56 bg-card border border-border rounded-lg shadow-lg py-2 mt-0">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              onClick={() => setOpenDropdown(null)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img src={ltolLogo} alt="Lake Tahoe Online" className="h-8 w-auto" />
            <span className="text-sm font-medium text-muted-foreground hidden sm:block">Lake Tahoe Online</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Home</Link>
            <Dropdown id="solutions" label="Solutions" links={solutionsLinks} />
            <Dropdown id="industries" label="Industries" links={industryLinks} />
            <Dropdown id="resources" label="Resources" links={resourceLinks} />
            <button onClick={() => scrollToSection("#about")} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">About</button>
            <button onClick={() => scrollToSection("#contact")} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Contact</button>
            <Button onClick={() => scrollToSection("#contact")} className="gradient-bg hover:opacity-90 text-primary-foreground font-semibold">
              Book a Consultation
            </Button>
          </div>

          <button className="lg:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-foreground font-medium px-4 py-2 text-sm">Home</Link>

              <div className="px-2 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Solutions</div>
              {solutionsLinks.map((link) => (
                <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground px-4 py-2 text-sm font-medium">
                  {link.name}
                </Link>
              ))}

              <div className="px-2 py-2 mt-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Industries</div>
              {industryLinks.map((link) => (
                <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground px-4 py-2 text-sm font-medium">
                  {link.name}
                </Link>
              ))}

              <div className="px-2 py-2 mt-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Resources</div>
              {resourceLinks.map((link) => (
                <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground px-4 py-2 text-sm font-medium">
                  {link.name}
                </Link>
              ))}

              <button onClick={() => scrollToSection("#about")} className="text-muted-foreground hover:text-foreground px-4 py-2 text-sm font-medium text-left">About</button>
              <button onClick={() => scrollToSection("#contact")} className="text-muted-foreground hover:text-foreground px-4 py-2 text-sm font-medium text-left">Contact</button>

              <div className="pt-4 px-2">
                <Button onClick={() => scrollToSection("#contact")} className="gradient-bg hover:opacity-90 text-primary-foreground font-semibold w-full">
                  Book a Consultation
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
