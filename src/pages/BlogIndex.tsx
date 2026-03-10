import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHeader from "@/components/templates/PageHeader";
import { blogPosts } from "@/data/blog-posts";

const BlogIndex = () => {
  useEffect(() => {
    document.title = "Blog — Small Business Technology Insights | LTOL";
    window.scrollTo(0, 0);
  }, []);

  const categories = [...new Set(blogPosts.map((p) => p.category))];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        headline="Small Business Technology Insights"
        intro="Practical advice on AI, cybersecurity, marketing automation, and technology strategy for small businesses."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <span key={cat} className="px-3 py-1 rounded-full bg-primary/10 text-xs text-primary font-medium">{cat}</span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
                <Card className="bg-card border-border hover:border-primary/30 hover:shadow-lg transition-all h-full">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary/10 mb-3">
                      <span className="text-xs text-primary font-medium">{post.category}</span>
                    </div>
                    <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{post.intro}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogIndex;
