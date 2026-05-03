import { useEffect, useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Monitor, ExternalLink, Phone, MessageSquare, Shield, Headphones, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/lib/seo";

const emailPortals = [
  {
    name: "LTOL Webmail",
    description: "Access your LTOL-hosted email through the web portal.",
    url: "https://ltol.cityemail.com/tuxedo/",
    icon: Mail,
    primary: true,
  },
  {
    name: "Outlook Web Access (OWA)",
    description: "Access your Microsoft-hosted email via Outlook Web App.",
    url: "https://controlpanel.msoutlookonline.net/Portal/ADUser/Login",
    icon: Mail,
    primary: false,
  },
  {
    name: "POPmail Control Panel",
    description: "Manage your POP email account settings and configuration.",
    url: "https://cp.serverdata.net/Portal/ADUser/Login",
    icon: Mail,
    primary: false,
  },
];

const CustomerPortal = () => {
  const [sessionId, setSessionId] = useState("");

  useSEO({
    title: "Customer Portal | LTOL",
    description: "Access your LTOL customer portal for webmail, remote support sessions, and email setup instructions.",
    path: "/portal",
    noindex: true,
  });

  const handleRemoteSession = () => {
    if (sessionId.trim()) {
      window.open(`https://join.zoho.com/join?key=${encodeURIComponent(sessionId.trim())}`, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Customer <span className="gradient-text">Portal</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access your email, start a remote support session, or get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Remote Support Session */}
          <Card className="bg-card border-border lg:row-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-primary" />
                </div>
                Start a Remote Session
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm">
                To start a remote support session, enter the Session ID provided by your LTOL support technician.
              </p>
              <div className="flex gap-3">
                <Input
                  placeholder="Enter Session ID"
                  value={sessionId}
                  onChange={(e) => setSessionId(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleRemoteSession()}
                  className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
                />
                <Button
                  onClick={handleRemoteSession}
                  disabled={!sessionId.trim()}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold whitespace-nowrap"
                >
                  Connect
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Powered by Zoho Assist. Don't have a Session ID?{" "}
                <a href="tel:+15305822080" className="text-primary hover:underline">Call us</a> to start a support request.
              </p>
            </CardContent>
          </Card>

          {/* Quick Contact */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-secondary" />
                </div>
                Need Help?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm">
                Our support team is available Monday through Friday, 8:00 AM to 6:00 PM.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="tel:+15305822080"
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Call Us</div>
                    <div className="text-sm font-medium text-foreground">(530) 582-2080</div>
                  </div>
                </a>
                <a
                  href="mailto:support@ltol.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-colors"
                >
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Email Us</div>
                    <div className="text-sm font-medium text-foreground">support@ltol.com</div>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Email Portals */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
            <Shield className="w-6 h-6 text-primary" />
            Email Access
          </h2>
          <p className="text-muted-foreground mb-6">
            Select your email platform below to access your inbox.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emailPortals.map((portal) => (
              <Card
                key={portal.name}
                className={`bg-card border-border hover:border-primary/50 transition-all group cursor-pointer ${
                  portal.primary ? "ring-1 ring-primary/20" : ""
                }`}
                onClick={() => window.open(portal.url, "_blank")}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      portal.primary ? "bg-primary/10" : "bg-muted"
                    }`}>
                      <portal.icon className={`w-5 h-5 ${portal.primary ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    {portal.primary && (
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        Most Common
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{portal.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{portal.description}</p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:underline">
                    Open Portal <ExternalLink className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Email Setup Help */}
        <Card className="bg-muted/30 border-border">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email Setup Instructions</h3>
                  <p className="text-sm text-muted-foreground">
                    Step-by-step guides for Outlook, Mac Mail, iPhone, iPad, and Android.
                  </p>
                </div>
              </div>
              <Link
                to="/portal/email-setup"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                View Setup Guides
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerPortal;
