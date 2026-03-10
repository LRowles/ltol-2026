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

const Index = () => {
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
