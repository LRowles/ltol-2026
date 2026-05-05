
import { ArrowRight, BookOpen, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHeader from "./PageHeader";
import FAQSection from "./FAQSection";
import CTABlock from "./CTABlock";
import { PillarData } from "@/data/pillars";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog-posts";
import { resources } from "@/data/resources";
import { assessments } from "@/data/assessments";
import { useJsonLd, faqSchema } from "@/lib/structured-data";
import { useSEO, breadcrumbSchema } from "@/lib/seo";
import heroMountain from "@/assets/photos/hero-mountain-town.jpg";

interface PillarPageTemplateProps {
  pillar: PillarData;
}

const PillarPageTemplate = ({ pillar }: PillarPageTemplateProps) => {
  useSEO({
    title: pillar.metaTitle,
    description: pillar.metaDescription,
    path: `/${pillar.slug}`,
  });

  useJsonLd({
    "@graph": [
      {
        "@type": "WebPage",
        name: pillar.title,
        description: pillar.intro,
        url: `https://www.ltol.com/${pillar.slug}`,
        publisher: { "@type": "Organization", name: "LTOL" },
      },
      faqSchema(pillar.faqs),
      breadcrumbSchema([
        { name: "Home", url: "https://www.ltol.com" },
        { name: pillar.title, url: `https://www.ltol.com/${pillar.slug}` },
      ]),
    ],
  });

  const linkedServices = services.filter((s) => pillar.relatedServices.includes(s.slug));
  const linkedBlogs = blogPosts.filter((b) => pillar.relatedBlogs.includes(b.slug));
  const linkedResources = resources.filter((r) => pillar.relatedResources.includes(r.slug));
  const linkedAssessments = assessments.filter((a) => pillar.relatedAssessments.includes(a.slug));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        headline={pillar.headline}
        intro={pillar.intro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: pillar.title },
        ]}
        badge="Authority Guide"
        backgroundImage={heroMountain}
      />

      {/* Content Sections */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">What You Need to Know</h2>
          </div>
          <div className="gradient-line w-16 mb-10" />
          <div className="grid grid-cols-1 gap-8">
            {pillar.sections.map((section, i) => (
              <div key={i} className="glass-card p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">{section.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{section.content}</p>
                {section.linkedService && (
                  <Link
                    to={`/${section.linkedService}`}
                    className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors text-sm font-medium"
                  >
                    Learn more about {section.title} <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {linkedServices.length > 0 && (
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-2">
              <Lightbulb className="w-6 h-6 text-secondary" />
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Related Services</h2>
            </div>
            <div className="gradient-line w-16 mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {linkedServices.map((svc) => (
                <Link key={svc.slug} to={`/${svc.slug}`} className="glass-card-hover p-5">
                  <h3 className="text-foreground font-semibold mb-2">{svc.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{svc.intro}</p>
                  <span className="inline-flex items-center gap-1 text-secondary text-sm mt-3 font-medium">
                    View Service <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Internal Links Network */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Explore More</h2>
          <div className="gradient-line w-16 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {linkedBlogs.length > 0 && (
              <div>
                <h3 className="text-foreground font-semibold mb-3">Related Articles</h3>
                <ul className="space-y-2">
                  {linkedBlogs.map((b) => (
                    <li key={b.slug}>
                      <Link to={`/blog/${b.slug}`} className="text-muted-foreground hover:text-secondary transition-colors text-sm">
                        {b.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {linkedResources.length > 0 && (
              <div>
                <h3 className="text-foreground font-semibold mb-3">Resources & Guides</h3>
                <ul className="space-y-2">
                  {linkedResources.map((r) => (
                    <li key={r.slug}>
                      <Link to={`/resources/${r.slug}`} className="text-muted-foreground hover:text-secondary transition-colors text-sm">
                        {r.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {linkedAssessments.length > 0 && (
              <div>
                <h3 className="text-foreground font-semibold mb-3">Free Assessments</h3>
                <ul className="space-y-2">
                  {linkedAssessments.map((a) => (
                    <li key={a.slug}>
                      <Link to={`/assessments/${a.slug}`} className="text-muted-foreground hover:text-secondary transition-colors text-sm">
                        {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <FAQSection faqs={pillar.faqs} />
      <CTABlock />
      <Footer />
    </div>
  );
};

export default PillarPageTemplate;
