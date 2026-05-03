import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { findLegacyRedirect } from "@/lib/legacy-redirects";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showNotFound, setShowNotFound] = useState(false);

  useEffect(() => {
    const redirect = findLegacyRedirect(location.pathname);

    if (redirect) {
      // Legacy URL detected — redirect seamlessly
      console.log(`Legacy redirect: ${location.pathname} → ${redirect}`);
      navigate(redirect, { replace: true });
    } else {
      // No redirect found — show the 404 page
      console.error(
        "404 Error: User attempted to access non-existent route:",
        location.pathname
      );
      setShowNotFound(true);
    }
  }, [location.pathname, navigate]);

  // Don't flash the 404 page while checking for redirects
  if (!showNotFound) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground text-sm">
          Loading…
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
        <p className="mb-2 text-xl text-foreground font-semibold">
          Page Not Found
        </p>
        <p className="mb-8 text-muted-foreground">
          The page you're looking for may have moved or no longer exists. Let us
          help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center gradient-bg text-primary-foreground font-semibold py-3 px-6 rounded-md hover:opacity-90 transition-opacity"
          >
            Go to Homepage
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center border border-border text-foreground font-semibold py-3 px-6 rounded-md hover:bg-muted transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
