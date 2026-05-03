import { useEffect, useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Monitor, Apple, Smartphone, TabletSmartphone, ArrowLeft, Info, AlertCircle } from "lucide-react";
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
  const [activeTab, setActiveTab] = useState("outlook");

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
                  For Microsoft 365 (Outlook 2024) and Outlook 2021/2019. Instructions for Outlook 2016 Classic are included below.
                </p>

                {/* Outlook Mockup Image */}
                <div className="mb-8 rounded-lg overflow-hidden border border-border">
                  <img
                    src="/images/email-setup-outlook.png"
                    alt="Microsoft Outlook Add Account dialog showing Advanced options with 'Let me set up my account manually' checkbox"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>

                {/* Modern Outlook 365 */}
                <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">Outlook 365 / 2024 / 2021</h3>
                <ol className="space-y-4 text-foreground mb-8">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">1</span>
                    <span>Select <strong>File</strong> from the top menu bar.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">2</span>
                    <span>Click <strong>Add Account</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">3</span>
                    <span>Enter your <strong>full email address</strong> in the field.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">4</span>
                    <span>Click <strong>Advanced options</strong>, then check the box for <strong>"Let me set up my account manually"</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">5</span>
                    <span>Click <strong>Connect</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">6</span>
                    <span>Select <strong>IMAP</strong> as the account type.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">7</span>
                    <span>Enter the incoming server settings:<br />
                      Server: <code className="bg-muted px-2 py-0.5 rounded text-sm font-mono">mail.cityemail.com</code><br />
                      Port: <code className="bg-muted px-2 py-0.5 rounded text-sm font-mono">993</code><br />
                      Encryption: <strong>SSL/TLS</strong>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">8</span>
                    <span>Enter the outgoing server settings:<br />
                      Server: <code className="bg-muted px-2 py-0.5 rounded text-sm font-mono">mail.cityemail.com</code><br />
                      Port: <code className="bg-muted px-2 py-0.5 rounded text-sm font-mono">587</code><br />
                      Encryption: <strong>STARTTLS</strong>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">9</span>
                    <span>Enter your <strong>password</strong> and click <strong>Connect</strong>.</span>
                  </li>
                </ol>

                {/* Outlook 2016/2019 Classic */}
                <details className="group">
                  <summary className="cursor-pointer text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    Using Outlook 2016 or 2019 Classic? Click here for those instructions.
                  </summary>
                  <div className="mt-4 pl-6 border-l-2 border-border">
                    <ol className="space-y-3 text-foreground text-sm">
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs font-bold flex items-center justify-center">1</span>
                        <span>Select <strong>File</strong> &gt; <strong>Add Account</strong>.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs font-bold flex items-center justify-center">2</span>
                        <span>Select <strong>"Manual setup or additional server types"</strong>, click <strong>Next</strong>.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs font-bold flex items-center justify-center">3</span>
                        <span>Select <strong>"POP or IMAP"</strong>, click <strong>Next</strong>.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs font-bold flex items-center justify-center">4</span>
                        <span>Fill in your name, email, select <strong>IMAP</strong>, enter <code className="bg-muted px-1 py-0.5 rounded font-mono">mail.cityemail.com</code> for both servers, and your login credentials.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs font-bold flex items-center justify-center">5</span>
                        <span>Click <strong>More Settings</strong> &gt; <strong>Outgoing Server</strong> tab &gt; check "My outgoing server requires authentication".</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs font-bold flex items-center justify-center">6</span>
                        <span>Go to <strong>Advanced</strong> tab: Incoming port <strong>993</strong> (SSL/TLS), Outgoing port <strong>587</strong> (STARTTLS or Auto).</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs font-bold flex items-center justify-center">7</span>
                        <span>Click <strong>OK</strong>, then <strong>Next</strong> to complete.</span>
                      </li>
                    </ol>
                  </div>
                </details>

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
                  For macOS Sequoia, Sonoma, and Ventura. Earlier versions follow a similar process.
                </p>

                {/* Mac Mail Mockup Image */}
                <div className="mb-8 rounded-lg overflow-hidden border border-border">
                  <img
                    src="/images/email-setup-mac.png"
                    alt="Apple Mail Add Account dialog showing 'Other Mail Account' option selected"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <ol className="space-y-4 text-foreground">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">1</span>
                    <span>Open <strong>Mail</strong> from the Dock or Applications folder.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">2</span>
                    <span>In the menu bar, click <strong>Mail &gt; Add Account...</strong></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">3</span>
                    <span>Select <strong>"Other Mail Account..."</strong> at the bottom of the list, then click <strong>Continue</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">4</span>
                    <span>Enter your <strong>Name</strong>, <strong>Email Address</strong> (full address), and <strong>Password</strong>. Click <strong>Sign In</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">5</span>
                    <span>Mail will attempt to auto-detect your settings. <strong>If it cannot connect automatically</strong>, it will display the manual configuration screen. Continue to the next step.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">6</span>
                    <span>Select <strong>IMAP</strong> as the account type (if prompted).</span>
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
                    <span>Verify your <strong>username</strong> (full email address) and <strong>password</strong> are correct.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">10</span>
                    <span>Click <strong>Sign In</strong>. Mail will verify the connection.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">11</span>
                    <span>If prompted for port settings: Incoming <strong>993</strong> with <strong>SSL/TLS</strong>; Outgoing <strong>587</strong> with <strong>STARTTLS</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">12</span>
                    <span>Ensure <strong>Mail</strong> is checked in the apps list, then click <strong>Done</strong>.</span>
                  </li>
                </ol>
                <div className="mt-6 p-4 bg-muted/50 border border-border rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Tip:</strong> You can also add accounts via <strong>System Settings &gt; Internet Accounts &gt; Add Account &gt; Other Mail Account</strong>.
                  </p>
                </div>
                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
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
                  For iOS 18 and later. Instructions for iOS 16–17 are noted where different.
                </p>

                {/* iOS Mockup Image */}
                <div className="mb-8 flex justify-center">
                  <img
                    src="/images/email-setup-ios.png"
                    alt="iPhone showing the New Account IMAP setup screen with mail.cityemail.com as the incoming server"
                    className="w-64 h-auto rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </div>
                <ol className="space-y-4 text-foreground">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">1</span>
                    <span>Open the <strong>Settings</strong> app.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">2</span>
                    <span>
                      Tap <strong>Apps</strong>, then tap <strong>Mail</strong>.<br />
                      <span className="text-xs text-muted-foreground">(On iOS 16–17: Tap <strong>Mail</strong> directly from the main Settings list.)</span>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">3</span>
                    <span>
                      Tap <strong>Mail Accounts</strong>, then tap <strong>Add Account</strong>.<br />
                      <span className="text-xs text-muted-foreground">(On iOS 16–17: Tap <strong>Accounts</strong> &gt; <strong>Add Account</strong>.)</span>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">4</span>
                    <span>Select <strong>"Other"</strong> at the bottom of the provider list, then tap <strong>"Add Mail Account"</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">5</span>
                    <span>Fill in your <strong>Name</strong>, <strong>Email</strong> (full address), <strong>Password</strong>, and a <strong>Description</strong> (e.g., "Work Email"). Tap <strong>Next</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">6</span>
                    <span>Make sure <strong>IMAP</strong> is selected (highlighted at the top of the screen).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">7</span>
                    <span>Under <strong>Incoming Mail Server</strong>:<br />
                      Host Name: <code className="bg-muted px-2 py-0.5 rounded text-sm font-mono">mail.cityemail.com</code><br />
                      Username: <strong>your full email address</strong><br />
                      Password: your email password
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">8</span>
                    <span>Under <strong>Outgoing Mail Server</strong>:<br />
                      Host Name: <code className="bg-muted px-2 py-0.5 rounded text-sm font-mono">mail.cityemail.com</code><br />
                      Username: <strong>your full email address</strong><br />
                      Password: your email password
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">9</span>
                    <span>Tap <strong>Next</strong>. iOS will verify the settings.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">10</span>
                    <span>Make sure <strong>Mail</strong> is toggled on (green). Tap <strong>Save</strong>.</span>
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
                  For Samsung Galaxy, Google Pixel, and other Android devices. Most Android phones now use the <strong>Gmail app</strong> for all email accounts.
                </p>

                {/* Android Mockup Image */}
                <div className="mb-8 flex justify-center">
                  <img
                    src="/images/email-setup-android.png"
                    alt="Android phone showing Gmail app Add Account screen with 'Other' option highlighted"
                    className="w-64 h-auto rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </div>

                {/* Gmail App (Primary) */}
                <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">Using the Gmail App (Recommended)</h3>
                <ol className="space-y-4 text-foreground mb-8">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">1</span>
                    <span>Open the <strong>Gmail</strong> app.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">2</span>
                    <span>Tap your <strong>profile icon</strong> (top right), then tap <strong>"Add another account"</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">3</span>
                    <span>Select <strong>"Other"</strong> from the list of email providers.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">4</span>
                    <span>Enter your <strong>full email address</strong> and tap <strong>Next</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">5</span>
                    <span>Select <strong>"Personal (IMAP)"</strong> as the account type.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">6</span>
                    <span>Enter your <strong>password</strong> and tap <strong>Next</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">7</span>
                    <span>For Incoming Server settings:<br />
                      Server: <code className="bg-muted px-2 py-0.5 rounded text-sm font-mono">mail.cityemail.com</code><br />
                      Port: <code className="bg-muted px-2 py-0.5 rounded text-sm font-mono">993</code><br />
                      Security type: <strong>SSL/TLS</strong>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">8</span>
                    <span>Tap <strong>Next</strong>. For Outgoing Server settings:<br />
                      Server: <code className="bg-muted px-2 py-0.5 rounded text-sm font-mono">mail.cityemail.com</code><br />
                      Port: <code className="bg-muted px-2 py-0.5 rounded text-sm font-mono">587</code><br />
                      Security type: <strong>STARTTLS</strong>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">9</span>
                    <span>Tap <strong>Next</strong>, configure your sync preferences, and tap <strong>Next</strong> again to finish.</span>
                  </li>
                </ol>

                {/* Samsung Email App */}
                <details className="group">
                  <summary className="cursor-pointer text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    Using Samsung Email app instead? Click here for those instructions.
                  </summary>
                  <div className="mt-4 pl-6 border-l-2 border-border">
                    <ol className="space-y-3 text-foreground text-sm">
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs font-bold flex items-center justify-center">1</span>
                        <span>Open <strong>Settings</strong> &gt; <strong>Accounts &amp; backup</strong> &gt; <strong>Manage accounts</strong>.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs font-bold flex items-center justify-center">2</span>
                        <span>Tap <strong>Add account</strong> &gt; <strong>Email</strong>.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs font-bold flex items-center justify-center">3</span>
                        <span>Enter your email and password, tap <strong>Manual setup</strong>.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs font-bold flex items-center justify-center">4</span>
                        <span>Select <strong>IMAP</strong>. Enter <code className="bg-muted px-1 py-0.5 rounded font-mono">mail.cityemail.com</code> for both servers.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs font-bold flex items-center justify-center">5</span>
                        <span>Incoming: port <strong>993</strong>, security <strong>SSL/TLS</strong>. Outgoing: port <strong>587</strong>, security <strong>TLS</strong>.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs font-bold flex items-center justify-center">6</span>
                        <span>Enter your full email as username for both. Tap <strong>Sign in</strong>.</span>
                      </li>
                    </ol>
                  </div>
                </details>

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
              If you have an Exchange email account, it is configured for <strong>autodiscover</strong>. When adding an account to a computer or mobile device, select <strong>"Exchange"</strong> or <strong>"Microsoft 365"</strong> as the email account type, then enter your email address and password when prompted. The email server settings will be automatically detected.
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
