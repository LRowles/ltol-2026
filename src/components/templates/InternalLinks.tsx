import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, FileText, ClipboardCheck, Briefcase } from "lucide-react";

interface InternalLinksProps {
  relatedService?: { slug: string; title: string };
  relatedBlog?: { slug: string; title: string };
  relatedResource?: { slug: string; title: string };
  relatedAssessment?: { slug: string; title: string };
}

const InternalLinks = ({ relatedService, relatedBlog, relatedResource, relatedAssessment }: InternalLinksProps) => {
  const links = [
    relatedService && { icon: Briefcase, label: "Related Service", title: relatedService.title, href: `/${relatedService.slug}` },
    relatedBlog && { icon: BookOpen, label: "Related Article", title: relatedBlog.title, href: `/blog/${relatedBlog.slug}` },
    relatedResource && { icon: FileText, label: "Free Resource", title: relatedResource.title, href: `/resources/${relatedResource.slug}` },
    relatedAssessment && { icon: ClipboardCheck, label: "Free Assessment", title: relatedAssessment.title, href: `/assessments/${relatedAssessment.slug}` },
  ].filter(Boolean) as { icon: any; label: string; title: string; href: string }[];

  if (links.length === 0) return null;

  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Explore Related Resources</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="group flex items-start gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <link.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{link.label}</div>
                <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">{link.title}</div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto flex-shrink-0 mt-0.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternalLinks;
