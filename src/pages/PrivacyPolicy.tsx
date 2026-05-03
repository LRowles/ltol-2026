
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useSEO } from "@/lib/seo";

const PrivacyPolicy = () => {
  useSEO({
    title: "Privacy Policy | LTOL",
    description: "LTOL privacy policy. Learn how we collect, use, and protect your personal information.",
    path: "/privacy",
    noindex: true,
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <p><strong>Last Updated:</strong> March 10, 2026</p>

          <h2 className="text-xl font-semibold text-foreground mt-8">1. Information We Collect</h2>
          <p>We collect information you voluntarily provide when you fill out contact forms, download resources, or complete assessments — including your name, email address, phone number, and business name.</p>

          <h2 className="text-xl font-semibold text-foreground mt-8">2. How We Use Your Information</h2>
          <p>We use the information to respond to inquiries, deliver requested resources, improve our services, and send relevant communications. We do not sell your personal information to third parties.</p>

          <h2 className="text-xl font-semibold text-foreground mt-8">3. Cookies &amp; Analytics</h2>
          <p>Our website may use cookies and analytics tools to understand visitor behavior and improve user experience. You can control cookie preferences through your browser settings.</p>

          <h2 className="text-xl font-semibold text-foreground mt-8">4. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction.</p>

          <h2 className="text-xl font-semibold text-foreground mt-8">5. Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us at the information provided below.</p>

          <h2 className="text-xl font-semibold text-foreground mt-8">6. Contact</h2>
          <p>For privacy-related inquiries, please contact us at <a href="mailto:support@ltol.com" className="text-primary underline">support@ltol.com</a>.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
