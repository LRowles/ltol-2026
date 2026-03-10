import { useEffect } from "react";
import { Mail } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import teamRob from "@/assets/photos/team-rob.jpg";
import teamLindsey from "@/assets/photos/team-lindsey.jpg";
import teamMaria from "@/assets/photos/team-maria.jpg";
import teamBailey from "@/assets/photos/team-bailey.jpg";
import teamDawn from "@/assets/photos/team-dawn.jpg";

const teamMembers = [
  {
    name: "Rob Patti",
    title: "Founder & Director of Network Infrastructure",
    description:
      "Rob leads LTOL's network and IT operations with over a decade of experience designing resilient infrastructure for small businesses. From enterprise-grade firewalls to multi-site WiFi deployments, Rob ensures every client's technology foundation is rock-solid, secure, and built to scale.",
    photo: teamRob,
    color: "from-primary to-primary/80",
  },
  {
    name: "Lindsey Rowles",
    title: "AI Implementation & SEO Strategist",
    description:
      "Lindsey bridges the gap between emerging AI tools and real business outcomes. She architects AI workflow automations, deploys intelligent customer support systems, and builds SEO strategies that drive measurable organic growth — all tailored to small business budgets and goals.",
    photo: teamLindsey,
    color: "from-secondary to-secondary/80",
  },
  {
    name: "Maria Belen Capria",
    title: "Marketing Systems & Lead Automation Specialist",
    description:
      "Maria designs the connected marketing engines that turn website visitors into loyal customers. She builds CRM automation pipelines, email nurture sequences, and lead scoring systems that work around the clock — so your sales team focuses on closing, not chasing.",
    photo: teamMaria,
    color: "from-accent to-accent/80",
  },
  {
    name: "Bailey Allen",
    title: "Creative Director — Web Design & Social Media",
    description:
      "Bailey crafts conversion-focused websites and manages social media strategies that build real brand authority. From visual identity to content calendars, she ensures every digital touchpoint reflects your brand's voice and drives engagement that converts.",
    photo: teamBailey,
    color: "from-secondary to-primary",
  },
  {
    name: "Dawn Cantley",
    title: "IT Support & Operations Manager",
    description:
      "Dawn is the backbone of LTOL's day-to-day client support. She manages help desk operations, coordinates on-site visits, and ensures every client receives fast, human, and reliable IT support — the kind where a real person actually answers the phone.",
    photo: teamDawn,
    color: "from-primary to-accent",
  },
];

const Team = () => {
  useEffect(() => {
    document.title = "Meet Our Team | LTOL";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Meet the LTOL team — local technology experts specializing in IT, AI, marketing automation, web design, and operations for small businesses.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            A small, senior team of specialists — not generalists. Every member brings deep
            expertise in their discipline, and every client gets direct access to the people
            doing the work.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="group bg-card border border-border rounded-2xl overflow-hidden card-hover"
              >
                {/* Photo Header */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.photo}
                    alt={`${member.name} — ${member.title}`}
                    className="brand-photo"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-20`} />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-1">{member.name}</h2>
                  <p className="text-sm font-medium text-secondary mb-4">{member.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-bg rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              Work With Our Team
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              We're not a faceless tech company. When you work with LTOL, you work directly
              with the people on this page. Book a strategy session to get started.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-card text-primary hover:bg-card/90 font-semibold text-lg px-8 py-3 rounded-md transition-colors"
            >
              <Mail className="w-5 h-5" />
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
