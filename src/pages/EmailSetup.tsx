import { useEffect, useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Monitor, Apple, Smartphone, TabletSmartphone, ArrowLeft, Info } from "lucide-react";
import { Link } from "react-router-dom";

const serverSettings = {
  incoming: {
    server: "mail.cityemail.com",
    security: "SSL/TLS",
    port: "993",
    auth: "Yes",
  },
  outgoing: {
    server: "mail.cityemail.com",
    security: "STARTTLS or SSL/TLS",
    port: "587",
    auth: "Yes",
  },
};

const EmailSetup = () => {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    document.title = "Email Setup Instructions | LTOL Client Portal";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        {/* Back to Portal */}
        <Link
          to="/portal"
          className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Client Portal
        </Link>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Email Setup <span className="gradient-text">Instructions</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Follow the guides below to configure your LTOL email account on your computer or mobile device.
          </p>
        </div>

        {/* Server Settings Reference Card */}
        <Card className="bg-muted/30 border-border mb-10">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <Info className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">IMAP Server Settings (All Platforms)</h3>
                <p className="text-sm text-muted-foreground">
                  We recommend IMAP for the best experience across multiple devices. Use these settings regardless of which device or app you're configuring.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background rounded-lg p-4 border border-border">
                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Incoming Server (IMAP)</h4>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Server:</dt>
                    <dd className="font-mono font-medium text-foreground">{serverSettings.incoming.server}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Security:</dt>
                    <dd className="font-medium text-foreground">{serverSettings.incoming.security}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Port:</dt>
                    <dd className="font-mono font-medium text-foreground">{serverSettings.incoming.port}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Authentication:</dt>
                    <dd className="font-medium text-foreground">{serverSettings.incoming.auth}</dd>
                  </div>
                </dl>
              </div>
              <div className="bg-background rounded-lg p-4 border border-border">
                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Outgoing Server (SMTP)</h4>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Server:</dt>
                    <dd className="font-mono font-medium text-foreground">{serverSettings.outgoing.server}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Security:</dt>
                    <dd className="font-medium text-foreground">{serverSettings.outgoing.security}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Port:</dt>
                    <dd className="font-mono font-medium text-foreground">{serverSettings.outgoing.port}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Authentication:</dt>
                    <dd className="font-medium text-foreground">{serverSettings.outgoing.auth}</dd>
                  </div>
                </dl>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Your username is always your <strong>full email address</strong> (e.g., yourname@yourdomain.com). If you need POP settings instead of IMAP, please contact us.
            </p>
          </CardContent>
        </Card>

        {/* Tabbed Instructions */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="outlook" className="flex items-center gap-2 text-xs sm:text-sm">
              <Monitor className="w-4 h-4 hidden sm:block" />
              Outlook
            </TabsTrigger>
            <TabsTrigger value="mac" className="flex items-center gap-2 text-xs sm:text-sm">
              <Apple className="w-4 h-4 hidden sm:block" />
              Mac Mail
            </TabsTrigger>
            <TabsTrigger value="ios" className="flex items-center gap-2 text-xs sm:text-sm">
              <Smartphone className="w-4 h-4 hidden sm:block" />
              iPhone/iPad
            </TabsTrigger>
            <TabsTrigger value="android" className="flex items-center gap-2 text-xs sm:text-sm">
              <TabletSmartphone className="w-4 h-4 hidden sm:block" />
              Android
            </TabsTrigger>
          </TabsList>

          {/* Microsoft Outlook */}
          <TabsContent value="outlook">
            <Card className="bg-card border-border">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Microsoft Outlook Setup</h2>
                <p className="text-muted-foreground mb-6 text-sm">
                  For Outlook 365, 2021, 2019, or 2016. Older versions follow a similar process but screens may look different.
                </p>
                <ol className="space-y-4 text-foreground">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">1</span>
                    <span>Select <strong>File</strong> from the top menu bar.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">2</span>
                    <span>Click the <strong>Add Account</strong> button.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">3</span>
                    <span>Select <strong>"Manual setup or additional server types"</strong>, then click <strong>Next</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">4</span>
                    <span>Select <strong>"POP or IMAP"</strong>, then click <strong>Next</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">5</span>
                    <span>Under "User Information", type in your <strong>name</strong> and <strong>email address</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">6</span>
                    <span>Under "Server Information", select <strong>IMAP</strong> as the Account Type.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">7</span>
                    <span>For Incoming Mail Server, type: <code className="bg-muted px-2 py-0.5 rounded text-sm font-mono">mail.cityemail.com</code></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">8</span>
                    <span>For Outgoing Mail Server, type: <code className="bg-muted px-2 py-0.5 rounded text-sm font-mono">mail.cityemail.com</code></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">9</span>
                    <span>Under "Logon Information", type in your <strong>full email address</strong> and <strong>password</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">10</span>
                    <span>Click the <strong>More Settings...</strong> button on the right.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">11</span>
                    <span>Select the <strong>Outgoing Server</strong> tab.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">12</span>
                    <span>Check <strong>"My outgoing server (SMTP) requires authentication"</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">13</span>
                    <span>Select the <strong>Advanced</strong> tab.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">14</span>
                    <span>Under "Server Port Numbers": Incoming server (IMAP) — enter <strong>993</strong> and select <strong>SSL/TLS</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">15</span>
                    <span>Outgoing server (SMTP) — enter <strong>587</strong> and select <strong>STARTTLS</strong> or <strong>Auto</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">16</span>
                    <span>Click <strong>OK</strong>, then click <strong>Next</strong> to complete setup.</span>
                  </li>
                </ol>
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-sm text-green-400 font-medium">Your email account setup is now complete.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Apple Mac Mail */}
          <TabsContent value="mac">
            <Card className="bg-card border-border">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Apple Mail (macOS) Setup</h2>
                <p className="text-muted-foreground mb-6 text-sm">
                  For macOS Ventura, Sonoma, Sequoia, or later. Earlier versions follow a similar process.
                </p>
                <ol className="space-y-4 text-foreground">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">1</span>
                    <span>Open <strong>Mail</strong> from the Dock or Applications folder.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">2</span>
                    <span>In the menu bar, click <strong>Mail &gt; Add Account...</strong> (or go to <strong>System Settings &gt; Internet Accounts &gt; Add Account</strong>).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">3</span>
                    <span>Select <strong>"Other Mail Account..."</strong> and click <strong>Continue</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">4</span>
                    <span>Enter your <strong>Name</strong>, <strong>Email Address</strong> (full address), and <strong>Password</strong>. Click <strong>Sign In</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">5</span>
                    <span>If prompted that the account must be manually configured, click <strong>Next</strong> or <strong>Continue</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">6</span>
                    <span>Select <strong>IMAP</strong> as the account type.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">7</span>
                    <span>For Incoming Mail Server, enter: <code className="bg-muted px-2 py-0.5 rounded text-sm font-mono">mail.cityemail.com</code></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">8</span>
                    <span>For Outgoing Mail Server, enter: <code className="bg-muted px-2 py-0.5 rounded text-sm font-mono">mail.cityemail.com</code></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">9</span>
                    <span>Enter your <strong>full email address</strong> as the User Name and your <strong>password</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">10</span>
                    <span>Click <strong>Sign In</strong>. Mail will verify the settings and connect.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">11</span>
                    <span>If port settings are needed: Incoming port <strong>993</strong> with <strong>SSL/TLS</strong>; Outgoing port <strong>587</strong> with <strong>STARTTLS</strong>.</span>
                  </li>
                </ol>
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-sm text-green-400 font-medium">Your email account setup is now complete.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* iPhone / iPad */}
          <TabsContent value="ios">
            <Card className="bg-card border-border">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">iPhone &amp; iPad (iOS) Setup</h2>
                <p className="text-muted-foreground mb-6 text-sm">
                  For iOS 16 and later. Earlier versions follow a similar process.
                </p>
                <ol className="space-y-4 text-foreground">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">1</span>
                    <span>Open the <strong>Settings</strong> app.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">2</span>
                    <span>Scroll down and tap <strong>Mail</strong>, then <strong>Accounts</strong>, then <strong>Add Account</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">3</span>
                    <span>Select <strong>"Other"</strong> at the bottom of the list, then tap <strong>"Add Mail Account"</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">4</span>
                    <span>Fill in your <strong>Name</strong>, <strong>Email</strong> (full address), <strong>Password</strong>, and <strong>Description</strong>. Tap <strong>Next</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">5</span>
                    <span>Make sure <strong>IMAP</strong> is selected (highlighted at the top).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">6</span>
                    <span>Under <strong>Incoming Mail Server</strong>: Host Name — <code className="bg-muted px-2 py-0.5 rounded text-sm font-mono">mail.cityemail.com</code></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">7</span>
                    <span>Username: your <strong>full email address</strong>. Password should be filled in already.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">8</span>
                    <span>Under <strong>Outgoing Mail Server</strong>: Host Name — <code className="bg-muted px-2 py-0.5 rounded text-sm font-mono">mail.cityemail.com</code></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">9</span>
                    <span>Username: your <strong>full email address</strong>. Enter your <strong>password</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">10</span>
                    <span>On the next screen, make sure <strong>Mail</strong> is toggled on (green). Tap <strong>Save</strong>.</span>
                  </li>
                </ol>
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-sm text-green-400 font-medium">Your email account setup is now complete.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Android */}
          <TabsContent value="android">
            <Card className="bg-card border-border">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Android Setup</h2>
                <p className="text-muted-foreground mb-6 text-sm">
                  For Samsung Galaxy, Google Pixel, and other Android devices. Screens may vary slightly between manufacturers and Android versions.
                </p>
                <ol className="space-y-4 text-foreground">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">1</span>
                    <span>Open <strong>Settings</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">2</span>
                    <span>Tap <strong>Accounts</strong> (or <strong>Accounts &amp; backup</strong>).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">3</span>
                    <span>Tap <strong>Add Account</strong>, then select <strong>Email</strong> (or <strong>Personal (IMAP)</strong>).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">4</span>
                    <span>Enter your <strong>full email address</strong> and <strong>password</strong>, then tap <strong>Manual Setup</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">5</span>
                    <span>Select <strong>"IMAP"</strong> as the account type.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">6</span>
                    <span>Enter your full email address for both <strong>Email Address</strong> and <strong>Username</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">7</span>
                    <span>For IMAP Server, enter: <code className="bg-muted px-2 py-0.5 rounded text-sm font-mono">mail.cityemail.com</code></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">8</span>
                    <span>Security type: <strong>SSL/TLS</strong> (or "SSL — accept all certificates").</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">9</span>
                    <span>Incoming port: <strong>993</strong>. Tap <strong>Next</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">10</span>
                    <span>For SMTP Server, enter: <code className="bg-muted px-2 py-0.5 rounded text-sm font-mono">mail.cityemail.com</code></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">11</span>
                    <span>Security type: <strong>TLS</strong> (or "STARTTLS — accept all certificates").</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">12</span>
                    <span>Outgoing port: <strong>587</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">13</span>
                    <span>Enter your <strong>Username</strong> (full email address) and <strong>Password</strong>. Tap <strong>Next</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">14</span>
                    <span>Select your sync/notification preferences, give the account a name, and tap <strong>Done</strong>.</span>
                  </li>
                </ol>
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-sm text-green-400 font-medium">Your email account setup is now complete.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Exchange Section */}
        <Card className="bg-card border-border mt-10">
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Exchange Email Accounts</h2>
            <p className="text-muted-foreground">
              If you have an Exchange email account, it is configured for <strong>autodiscover</strong>. When adding an account to a computer or mobile device, select <strong>"Exchange"</strong> as the email account type, then enter your email address and password when prompted. The email server settings will be automatically detected.
            </p>
            <p className="text-muted-foreground mt-3">
              If autodiscover doesn't work on your device, please{" "}
              <a href="tel:+15305822080" className="text-primary hover:underline font-medium">call us at (530) 582-2080</a>{" "}
              or{" "}
              <a href="mailto:support@ltol.com" className="text-primary hover:underline font-medium">email support@ltol.com</a>{" "}
              for assistance.
            </p>
          </CardContent>
        </Card>

        {/* Anti-Spam Section */}
        <Card className="bg-card border-border mt-6">
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Webmail Anti-Spam Settings</h2>
            <p className="text-muted-foreground mb-4">
              You can manage your spam whitelist and blacklist through the webmail interface:
            </p>
            <ol className="space-y-3 text-foreground text-sm">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">1</span>
                <span>Log in to your webmail at <a href="https://ltol.cityemail.com/tuxedo/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-mono">ltol.cityemail.com/tuxedo/</a></span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">2</span>
                <span>Navigate to <strong>Settings</strong> (gear icon) &gt; <strong>Spam Settings</strong> or <strong>Filters</strong>.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">3</span>
                <span>Add email addresses or domains to your <strong>Whitelist</strong> (always allow) or <strong>Blacklist</strong> (always block).</span>
              </li>
            </ol>
            <p className="text-muted-foreground mt-4 text-sm">
              If you're receiving excessive spam or missing important emails, contact us and we can adjust your server-level spam filtering.
            </p>
          </CardContent>
        </Card>

        {/* Help Footer */}
        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            Still having trouble?{" "}
            <a href="tel:+15305822080" className="text-primary hover:underline font-medium">Call (530) 582-2080</a>{" "}
            or{" "}
            <a href="mailto:support@ltol.com" className="text-primary hover:underline font-medium">email support@ltol.com</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmailSetup;
