import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHeader from "./PageHeader";
import CTABlock from "./CTABlock";
import InternalLinks from "./InternalLinks";
import { AssessmentData } from "@/data/assessments";
import { services } from "@/data/services";
import { resources } from "@/data/resources";
import { useJsonLd } from "@/lib/structured-data";

interface AssessmentTemplateProps {
  assessment: AssessmentData;
}

const AssessmentTemplate = ({ assessment }: AssessmentTemplateProps) => {
  const [step, setStep] = useState(0); // 0 = intro, 1..N = questions, N+1 = contact, N+2 = results
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [contact, setContact] = useState({ name: "", email: "", business: "" });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ score: number; band: typeof assessment.bands[0] } | null>(null);

  const totalSteps = assessment.questions.length + 2; // questions + contact + results
  const progress = Math.min(((step) / totalSteps) * 100, 100);

  useEffect(() => {
    document.title = assessment.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", assessment.metaDescription);
    window.scrollTo(0, 0);
  }, [assessment]);

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

    const { error } = await supabase.from("assessment_submissions").insert({
      name: contact.name.trim(),
      email: contact.email.trim(),
      business: contact.business.trim() || null,
      assessment_slug: assessment.slug,
      answers,
      score,
      band: band.label,
    });

    setSubmitting(false);
    if (error) {
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

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {step > 0 && !isResultStep && (
            <div className="mb-8">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}

          {/* Intro */}
          {step === 0 && (
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">Take the Assessment</h2>
                <p className="text-muted-foreground mb-8">
                  Answer {assessment.questions.length} quick questions to get your personalized score and recommendations.
                  Takes about 2 minutes.
                </p>
                <Button onClick={() => setStep(1)} className="gradient-bg text-primary-foreground font-semibold px-8 py-6">
                  Start Assessment <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Questions */}
          {currentQuestion && (
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="text-sm text-muted-foreground mb-2">
                  Question {step} of {assessment.questions.length}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-6">{currentQuestion.question}</h3>
                <div className="space-y-3">
                  {currentQuestion.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(currentQuestion.id, opt.value)}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${
                        answers[currentQuestion.id] === opt.value
                          ? "border-primary bg-primary/5 text-foreground"
                          : "border-border bg-background text-muted-foreground hover:border-primary/30"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={() => setStep(step - 1)}>
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
              </CardContent>
            </Card>
          )}

          {/* Contact step */}
          {isContactStep && !isResultStep && (
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-2">Almost Done!</h3>
                <p className="text-muted-foreground mb-6">Enter your details to see your personalized results and recommendations.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input placeholder="Your Name" required value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} className="bg-muted border-border" />
                  <Input placeholder="Email Address" type="email" required value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} className="bg-muted border-border" />
                  <Input placeholder="Business Name (optional)" value={contact.business} onChange={(e) => setContact({ ...contact, business: e.target.value })} className="bg-muted border-border" />
                  <div className="flex justify-between mt-6">
                    <Button variant="outline" type="button" onClick={() => setStep(step - 1)}>
                      <ArrowLeft className="mr-2 w-4 h-4" /> Back
                    </Button>
                    <Button type="submit" disabled={submitting} className="gradient-bg text-primary-foreground font-semibold">
                      {submitting ? "Calculating..." : "See My Results"} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Results */}
          {isResultStep && result && (
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-foreground">{result.score}</span>
                </div>
                <div className="inline-flex items-center px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <span className="text-sm text-primary font-semibold">{result.band.label}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Your Score: {result.score} / {assessment.questions.length * 2}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">{result.band.description}</p>
                <Button
                  onClick={() => {
                    window.location.href = "/#contact";
                  }}
                  className="gradient-bg text-primary-foreground font-semibold px-8 py-6"
                >
                  {result.band.cta} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {isResultStep && (
        <>
          <InternalLinks
            relatedService={relatedService ? { slug: relatedService.slug, title: relatedService.title } : undefined}
            relatedResource={relatedResource ? { slug: relatedResource.slug, title: relatedResource.title } : undefined}
          />
        </>
      )}
      <Footer />
    </div>
  );
};

export default AssessmentTemplate;
