import { useEffect } from "react";
import { Calendar, Clock } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import CTABlock from "./CTABlock";
import InternalLinks from "./InternalLinks";
import { BlogPostData } from "@/data/blog-posts";
import { services } from "@/data/services";
import { resources } from "@/data/resources";
import { useJsonLd, articleSchema } from "@/lib/structured-data";

interface BlogPostTemplateProps {
  post: BlogPostData;
}

const BlogPostTemplate = ({ post }: BlogPostTemplateProps) => {
  useEffect(() => {
    document.title = post.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", post.metaDescription);
    window.scrollTo(0, 0);
  }, [post]);

  const relatedService = services.find((s) => s.slug === post.relatedService);
  const relatedResource = resources.find((r) => r.slug === post.relatedResource);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article>
        <header className="pt-24 pb-8 sm:pt-28 sm:pb-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-xs text-primary font-medium">{post.category}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</span>
            </div>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">{post.intro}</p>
          {post.sections.map((section, i) => (
            <div key={i} className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">{section.heading}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </article>

      <CTABlock buttonText="Book a Technology Strategy Session" />
      <InternalLinks
        relatedService={relatedService ? { slug: relatedService.slug, title: relatedService.title } : undefined}
        relatedResource={relatedResource ? { slug: relatedResource.slug, title: relatedResource.title } : undefined}
      />
      <Footer />
    </div>
  );
};

export default BlogPostTemplate;
