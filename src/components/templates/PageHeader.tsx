import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  headline: string;
  intro: string;
  breadcrumbs?: BreadcrumbItem[];
  badge?: string;
  backgroundImage?: string;
}

const PageHeader = ({ headline, intro, breadcrumbs, badge, backgroundImage }: PageHeaderProps) => {
  if (backgroundImage) {
    return (
      <section className="relative min-h-[340px] sm:min-h-[400px] flex items-end overflow-hidden">
        {/* Background image */}
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover brand-photo"
          aria-hidden="true"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-primary/30" />
        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-28 sm:pt-32">
          {breadcrumbs && (
            <nav className="flex items-center gap-1 text-sm text-white/60 mb-5 flex-wrap">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight className="w-3 h-3" />}
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:text-white/90 transition-colors">{crumb.label}</Link>
                  ) : (
                    <span className="text-white/90 font-medium">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          {badge && (
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-4">
              <span className="text-xs text-white font-medium">{badge}</span>
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{headline}</h1>
          <p className="text-lg text-white/80 leading-relaxed max-w-3xl">{intro}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && (
          <nav className="flex items-center gap-1 text-sm text-muted-foreground mb-6 flex-wrap">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="w-3 h-3" />}
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-primary transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-foreground font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {badge && (
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-xs text-primary font-medium">{badge}</span>
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">{headline}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">{intro}</p>
      </div>
    </section>
  );
};

export default PageHeader;
