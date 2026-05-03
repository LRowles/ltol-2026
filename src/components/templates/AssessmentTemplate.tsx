import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { pushAssessmentLead } from "@/lib/zoho-proxy";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHeader from "./PageHeader";
import CTABlock from "./CTABlock";
import InternalLinks from "./InternalLinks";
import { AssessmentData } from "@/data/assessments";
import { services } from "@/data/services";
import { resources } from "@/data/resources";
import { useJsonLd } from "@/lib/structured-data";
import { useSEO, breadcrumbSchema } from "@/lib/seo";

interface AssessmentTemplateProps {
  assessment: AssessmentData;
}

const AssessmentTemplate = ({ assessment }: AssessmentTemplateProps) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [contact, setContact] = useState({ name: "", email: "", business: "" });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ score: number; band: typeof assessment.bands[0] } | null>(null);

  const totalSteps = assessment.questions.length + 2;
  const progress = Math.min(((step) / totalSteps) * 100, 100);

  useSEO({
    title: assessment.metaTitle,
    description: assessment.metaDescription,
    path: `/assessments/${assessment.slug}`,
  });

  useJsonLd({
    "@graph": [
      {
        "@type": "WebPage",
        name: assessment.title,
        description: assessment.description,
        url: `https://ltol.com/assessments/${assessment.slug}`,
        provider: { "@type": "Organization", name: "LTOL" },
      },
      breadcrumbSchema([
        { name: "Home", url: "https://ltol.com" },
        { name: "Assessments", url: "https://ltol.com/assessments" },
        { name: assessment.title, url: `https://ltol.com/assessments/${assessment.slug}` },
      ]),
    ],
  });

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((sum, v) => sum + v, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const score = calculateScore();
    const band = assessment.bands.find((b) => score >= b.min && score <= b.max) || assessment.bands[0];

    // Write to Supabase and Zoho CRM in parallel
    const [supabaseResult] = await Promise.allSettled([
      supabase.from("assessment_submissions").insert({
        name: contact.name.trim(),
        email: contact.email.trim(),
        business: contact.business.trim() || null,
        assessment_slug: assessment.slug,
        answers,
        score,
        band: band.label,
      }),
      pushAssessmentLead({
        name: contact.name.trim(),
        email: contact.email.trim(),
        business: contact.business.trim() || undefined,
        assessment_slug: assessment.slug,
        score,
        band: band.label,
      }),
    ]);

    setSubmitting(false);

    if (supabaseResult.status === "rejected" || (supabaseResult.status === "fulfilled" && supabaseResult.value.error)) {
      toast.error("Something went wrong. Please try again.");
      return;
    }

    setResult({ score, band });
    setStep(totalSteps);
  };

  const currentQuestion = step >= 1 && step <= assessment.questions.length ? assessment.questions[step - 1] : null;
  const isContactStep = step === assessment.questions.length + 1;
  const isResultStep = step > assessment.questions.length + 1;

  const relatedService = services.find((s) => s.slug === assessment.relatedService);
  const relatedResource = resources.find((r) => r.slug === assessment.relatedResource);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        headline={assessment.headline}
        intro={assessment.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Assessments" },
          { label: assessment.title },
        ]}
        badge="Free Assessment"
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress bar */}
          {step > 0 && !isResultStep && (
            <div className="mb-8">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${progress}%`,
                    background: `linear-gradient(90deg, hsl(var(--secondary)), hsl(var(--accent)))`,
                  }}
                />
              </div>
            </div>
          )}

          {/* Intro */}
          {step === 0 && (
            <div className="glass-card p-8 sm:p-10 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Take the Assessment</h2>
              <p className="text-muted-foreground mb-8">
                Answer {assessment.questions.length} quick questions to get your personalized score and recommendations.
                Takes about 2 minutes.
              </p>
              <Button onClick={() => setStep(1)} className="gradient-bg text-primary-foreground font-semibold px-8 py-6">
                Start Assessment <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          )}

          {/* Questions */}
          {currentQuestion && (
            <div className="glass-card p-8 sm:p-10">
              <div className="text-sm text-muted-foreground mb-2">
                Question {step} of {assessment.questions.length}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-6">{currentQuestion.question}</h3>
              <div className="space-y-3">
                {currentQuestion.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(currentQuestion.id, opt.value)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      answers[currentQuestion.id] === opt.value
                        ? "border-secondary bg-secondary/5 text-foreground shadow-sm"
                        : "border-border/50 bg-card/50 text-muted-foreground hover:border-secondary/30 hover:bg-card"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={() => setStep(step - 1)} className="glass-card border-border/50">
                  <ArrowLeft className="mr-2 w-4 h-4" /> Back
                </Button>
                <Button
                  onClick={() => setStep(step + 1)}
                  disabled={answers[currentQuestion.id] === undefined}
                  className="gradient-bg text-primary-foreground"
                >
                  {step === assessment.questions.length ? "Get Results" : "Next"} <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Contact step */}
          {isContactStep && !isResultStep && (
            <div className="glass-card p-8 sm:p-10">
              <h3 className="text-xl font-bold text-foreground mb-2">Almost Done!</h3>
              <p className="text-muted-foreground mb-6">Enter your details to see your personalized results.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Your Name" required value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} className="bg-muted/50 border-border/50" />
                <Input placeholder="Email Address" type="email" required value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} className="bg-muted/50 border-border/50" />
                <Input placeholder="Business Name (optional)" value={contact.business} onChange={(e) => setContact({ ...contact, business: e.target.value })} className="bg-muted/50 border-border/50" />
                <div className="flex justify-between mt-6">
                  <Button variant="outline" type="button" onClick={() => setStep(step - 1)} className="glass-card border-border/50">
                    <ArrowLeft className="mr-2 w-4 h-4" /> Back
                  </Button>
                  <Button type="submit" disabled={submitting} className="gradient-bg text-primary-foreground font-semibold">
                    {submitting ? "Calculating..." : "See My Results"} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Results */}
          {isResultStep && result && (
            <div className="glass-card p-8 sm:p-10 text-center">
              {/* Animated score circle */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 96 96">
                  <circle cx="48" cy="48" r="42" fill="none" stroke="hsl(var(--muted))" strokeWidth="6" />
                  <circle
                    cx="48" cy="48" r="42" fill="none"
                    stroke="url(#scoreGrad)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${(result.score / (assessment.questions.length * 2)) * 264} 264`}
                    className="transition-all duration-1000 ease-out"
                  />
                  <defs>
                    <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--secondary))" />
                      <stop offset="100%" stopColor="hsl(var(--accent))" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-foreground">{result.score}</span>
                </div>
              </div>
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                <span className="text-sm text-secondary font-semibold">{result.band.label}</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Your Score: {result.score} / {assessment.questions.length * 2}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">{result.band.description}</p>
              <Button
                onClick={() => { window.location.href = "/#contact"; }}
                className="gradient-bg text-primary-foreground font-semibold px-8 py-6"
              >
                {result.band.cta} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {isResultStep && (
        <InternalLinks
          relatedService={relatedService ? { slug: relatedService.slug, title: relatedService.title } : undefined}
          relatedResource={relatedResource ? { slug: relatedResource.slug, title: relatedResource.title } : undefined}
        />
      )}
      <Footer />
    </div>
  );
};

export default AssessmentTemplate;
