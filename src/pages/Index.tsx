import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Difference from "@/components/landing/Difference";
import Services from "@/components/landing/Services";
import AIIntegration from "@/components/landing/AIIntegration";
import About from "@/components/landing/About";
import Testimonials from "@/components/landing/Testimonials";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Difference />
      <Services />
      <AIIntegration />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
