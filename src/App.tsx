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

import LocationsHub from "./pages/LocationsHub";
import PillarPage from "./pages/PillarPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Pillar authority page slugs
const pillarRoutes = [
  "small-business-technology-stack",
  "ai-integration-for-small-business",
  "managed-it-services-for-small-business",
  "cybersecurity-for-small-business",
  "digital-marketing-systems-for-small-business",
  "marketing-automation-for-small-business",
  "crm-automation-for-small-business",
  "business-process-automation",
];

// Service slugs for direct routes
const serviceRoutes = [
  "ai-integration",
  "ai-workflow-automation",
  "ai-customer-support-systems",
  "ai-document-processing",
  "digital-marketing",
  "local-seo-services",
  "managed-it-services",
  "network-management",
  "help-desk-services",
  "cloud-services",
  "cybersecurity",
  "endpoint-security",
  "email-security",
  "data-backup-services",
  "network-solutions",
  "crm-automation",
  "website-systems",
  "email-marketing-automation",
];

// Flat industry routes (SEO-friendly aliases)
const flatIndustryRoutes = [
  "technology-solutions-for-construction-companies",
  "technology-solutions-for-law-firms",
  "technology-solutions-for-medical-offices",
  "technology-solutions-for-real-estate",
  "technology-solutions-for-hospitality",
  "technology-solutions-for-retail-businesses",
  "technology-solutions-for-professional-services",
  "technology-solutions-for-accounting-firms",
  "technology-solutions-for-dental-practices",
  "technology-solutions-for-nonprofits",
  "technology-solutions-for-restaurants",
  "technology-solutions-for-property-management",
  "technology-solutions-for-fitness-wellness",
  "technology-solutions-for-auto-dealers",
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
  // Sparks service+location (expanded)
  "sparks-managed-it-services",
  "sparks-ai-integration",
  "sparks-cybersecurity",
  "sparks-digital-marketing",
  // Incline Village (expanded)
  "incline-village-managed-it-services",
  "incline-village-ai-integration",
  "incline-village-cybersecurity",
  "incline-village-digital-marketing",
  // South Lake Tahoe (expanded)
  "south-lake-tahoe-managed-it-services",
  "south-lake-tahoe-cybersecurity",
  "south-lake-tahoe-ai-integration",
  "south-lake-tahoe-digital-marketing",
  // Sacramento service+location (expanded)
  "sacramento-managed-it-services",
  "sacramento-ai-integration",
  "sacramento-cybersecurity",
  "sacramento-digital-marketing",
  // Roseville (expanded)
  "roseville-managed-it-services",
  "roseville-ai-integration",
  "roseville-cybersecurity",
  "roseville-digital-marketing",
  // Folsom (expanded)
  "folsom-managed-it-services",
  "folsom-ai-integration",
  "folsom-cybersecurity",
  "folsom-digital-marketing",
  // Rocklin
  "rocklin-managed-it-services",
  "rocklin-ai-integration",
  "rocklin-cybersecurity",
  "rocklin-digital-marketing",
  // Auburn
  "auburn-managed-it-services",
  "auburn-ai-integration",
  "auburn-cybersecurity",
  "auburn-digital-marketing",
  // Grass Valley
  "grass-valley-managed-it-services",
  "grass-valley-ai-integration",
  "grass-valley-cybersecurity",
  "grass-valley-digital-marketing",
  // Nevada City
  "nevada-city-managed-it-services",
  "nevada-city-ai-integration",
  "nevada-city-cybersecurity",
  "nevada-city-digital-marketing",
  // Gardnerville
  "gardnerville-managed-it-services",
  "gardnerville-cybersecurity",
  // Minden
  "minden-managed-it-services",
  "minden-cybersecurity",
  // Dayton
  "dayton-managed-it-services",
  "dayton-ai-integration",
  "dayton-cybersecurity",
  "dayton-digital-marketing",
  // Fernley
  "fernley-managed-it-services",
  "fernley-ai-integration",
  "fernley-cybersecurity",
  "fernley-digital-marketing",
  // Fallon
  "fallon-managed-it-services",
  "fallon-cybersecurity",
  // Lincoln
  "lincoln-managed-it-services",
  "lincoln-cybersecurity",
  // Elk Grove
  "elk-grove-managed-it-services",
  "elk-grove-cybersecurity",
  // Rancho Cordova
  "rancho-cordova-managed-it-services",
  "rancho-cordova-cybersecurity",
  // Las Vegas
  "las-vegas-managed-it-services",
  "las-vegas-ai-integration",
  "las-vegas-cybersecurity",
  "las-vegas-digital-marketing",
  // San Jose
  "san-jose-managed-it-services",
  "san-jose-cybersecurity",
  // Industry+location
  "reno-it-support-for-construction-companies",
  "truckee-it-support-for-law-firms",
  "tahoe-cybersecurity-for-hospitality",
  "reno-marketing-for-real-estate",
  "reno-it-support-for-medical-offices",
  "tahoe-marketing-for-hospitality",
  "reno-it-support-for-professional-services",
  "truckee-marketing-for-real-estate",
  "sacramento-it-support-for-construction-companies",
  "sacramento-marketing-for-real-estate",
  // Phase 2 industry+location
  "reno-it-support-for-law-firms",
  "reno-cybersecurity-for-medical-offices",
  "reno-marketing-for-restaurants",
  "reno-ai-for-real-estate",
  "reno-it-support-for-retail",
  "truckee-cybersecurity-for-hospitality",
  "truckee-it-support-for-real-estate",
  "tahoe-it-support-for-hospitality",
  "tahoe-marketing-for-real-estate",
  "carson-city-it-support-for-law-firms",
  "carson-city-it-support-for-medical-offices",
  "sparks-it-support-for-construction",
  "sacramento-it-support-for-medical-offices",
  "sacramento-it-support-for-law-firms",
  "sacramento-marketing-for-restaurants",
  "sacramento-it-support-for-retail",
  "sacramento-cybersecurity-for-healthcare",
  "reno-it-support-for-hospitality",
  "reno-it-support-for-accounting-firms",
  "reno-it-support-for-dental-practices",
  "sparks-marketing-for-retail",
  "las-vegas-it-support-for-hospitality",
  "las-vegas-marketing-for-real-estate",
  "roseville-it-support-for-medical-offices",
  "folsom-it-support-for-law-firms",
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Pillar authority pages */}
          {pillarRoutes.map((slug) => (
            <Route key={slug} path={`/${slug}`} element={<PillarPage />} />
          ))}

          {/* Service pages - direct slug routes */}
          {serviceRoutes.map((slug) => (
            <Route key={slug} path={`/${slug}`} element={<ServicePage />} />
          ))}

          {/* Flat industry SEO routes */}
          {flatIndustryRoutes.map((slug) => (
            <Route key={slug} path={`/${slug}`} element={<IndustryPage />} />
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
          

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
