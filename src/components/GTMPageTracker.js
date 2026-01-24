import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function GTMPageTracker() {
  const location = useLocation();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "virtual_pageview",
      page_path: location.pathname,
    });
  }, [location.pathname]);

  return null;
}

export default GTMPageTracker;
