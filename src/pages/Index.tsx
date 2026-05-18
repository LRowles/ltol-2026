import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import Services from "@/components/landing/Services";
import IndustriesServed from "@/components/landing/IndustriesServed";
import Difference from "@/components/landing/Difference";
import About from "@/components/landing/About";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { useSEO, breadcrumbSchema } from "@/lib/seo";
import { useJsonLd, homepageLocalBusinessSchema, websiteSchema } from "@/lib/structured-data";

const Index = () => {
  useSEO({
    title: "LTOL — Managed IT, Web Design & AI for Small Businesses",
    description:
      "LTOL is your digital guardian — local managed IT services, web design, AI integration, and digital marketing for small businesses in Lake Tahoe, Reno, and the Western United States.",
    path: "/",
  });

  useJsonLd({
    "@graph": [
      homepageLocalBusinessSchema(),
      websiteSchema(),
      breadcrumbSchema([{ name: "Home", url: "https://www.ltol.com/" }]),
    ],
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <IndustriesServed />
      <Difference />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
