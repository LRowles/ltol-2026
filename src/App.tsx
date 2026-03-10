import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicePage from "./pages/ServicePage";
import LocationPage from "./pages/LocationPage";
import IndustryPage from "./pages/IndustryPage";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import ResourcePage from "./pages/ResourcePage";
import AssessmentPage from "./pages/AssessmentPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Team from "./pages/Team";
import LocationsHub from "./pages/LocationsHub";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Service slugs for direct routes
const serviceRoutes = [
  "ai-integration",
  "digital-marketing",
  "managed-it-services",
  "cybersecurity",
  "network-solutions",
  "crm-automation",
  "website-systems",
  "email-marketing-automation",
];

// Programmatic SEO flat location routes
const flatLocationRoutes = [
  // Legacy
  "northern-nevada-ai-integration",
  "california-small-business-it",
  "western-us-digital-infrastructure",
  // Reno service+location
  "reno-managed-it-services",
  "reno-ai-integration",
  "reno-cybersecurity-services",
  "reno-digital-marketing",
  // Truckee service+location
  "truckee-managed-it-services",
  "truckee-ai-integration",
  "truckee-cybersecurity",
  "truckee-digital-marketing",
  // Tahoe service+location
  "tahoe-managed-it-services",
  "tahoe-ai-integration",
  "tahoe-cybersecurity",
  // Carson City service+location
  "carson-city-managed-it-services",
  "carson-city-ai-integration",
  "carson-city-cybersecurity",
  "carson-city-digital-marketing",
  // Sparks service+location
  "sparks-managed-it-services",
  "sparks-ai-integration",
  // Incline Village
  "incline-village-managed-it-services",
  // South Lake Tahoe
  "south-lake-tahoe-managed-it-services",
  "south-lake-tahoe-cybersecurity",
  // Industry+location
  "reno-it-support-for-construction-companies",
  "truckee-it-support-for-law-firms",
  "tahoe-cybersecurity-for-hospitality",
  "reno-marketing-for-real-estate",
  "reno-it-support-for-medical-offices",
  "tahoe-marketing-for-hospitality",
  "reno-it-support-for-professional-services",
  "truckee-marketing-for-real-estate",
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Service pages - direct slug routes */}
          {serviceRoutes.map((slug) => (
            <Route key={slug} path={`/${slug}`} element={<ServicePage />} />
          ))}

          {/* Flat programmatic SEO location routes */}
          {flatLocationRoutes.map((slug) => (
            <Route key={slug} path={`/${slug}`} element={<LocationPage />} />
          ))}

          {/* Location hub */}
          <Route path="/locations" element={<LocationsHub />} />

          {/* Location pages */}
          <Route path="/locations/:slug" element={<LocationPage />} />

          {/* Industry pages - new /solutions/ routes */}
          <Route path="/solutions/:slug" element={<IndustryPage />} />

          {/* Industry pages - legacy /industries/ routes */}
          <Route path="/industries/:slug" element={<IndustryPage />} />

          {/* Blog */}
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* Resources */}
          <Route path="/resources/:slug" element={<ResourcePage />} />

          {/* Assessments */}
          <Route path="/assessments/:slug" element={<AssessmentPage />} />

          {/* Legal */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/team" element={<Team />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
