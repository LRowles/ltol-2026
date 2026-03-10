import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service | LTOL";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <p><strong>Last Updated:</strong> March 10, 2026</p>

          <h2 className="text-xl font-semibold text-foreground mt-8">1. Acceptance of Terms</h2>
          <p>By accessing or using the Lake Tahoe Online (LTOL) website, you agree to be bound by these Terms of Service and our Privacy Policy.</p>

          <h2 className="text-xl font-semibold text-foreground mt-8">2. Services</h2>
          <p>LTOL provides technology consulting, managed IT, digital marketing, AI integration, and related services to small and mid-sized businesses. Service specifics are defined in individual client agreements.</p>

          <h2 className="text-xl font-semibold text-foreground mt-8">3. Intellectual Property</h2>
          <p>All content on this website — including text, graphics, logos, and software — is the property of Lake Tahoe Online and is protected by applicable intellectual property laws.</p>

          <h2 className="text-xl font-semibold text-foreground mt-8">4. User Conduct</h2>
          <p>You agree not to misuse our website or services, including attempting to gain unauthorized access, transmitting harmful code, or using content for unauthorized commercial purposes.</p>

          <h2 className="text-xl font-semibold text-foreground mt-8">5. Limitation of Liability</h2>
          <p>LTOL shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services.</p>

          <h2 className="text-xl font-semibold text-foreground mt-8">6. Modifications</h2>
          <p>We reserve the right to update these terms at any time. Continued use of the site after changes constitutes acceptance of the revised terms.</p>

          <h2 className="text-xl font-semibold text-foreground mt-8">7. Contact</h2>
          <p>Questions about these terms can be directed to <a href="mailto:hello@laketahoeonline.com" className="text-primary underline">hello@laketahoeonline.com</a>.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
