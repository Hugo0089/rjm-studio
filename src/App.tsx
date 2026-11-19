import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import RJMStudioHomepage from "./components/RJMStudioHomepage";
const RJMStudioServicesPage = lazy(() => import("./components/ServicesPage"));
const WorkPage = lazy(() => import("./components/WorkPage"));
const ContactPage = lazy(() => import("./components/ContactPage"));
const AboutPage = lazy(() => import("./components/AboutPage"));

const VentosusCaseStudy = lazy(() => import("./components/VentosusCaseStudy"));

const LegalDraftPage = import.meta.env.DEV ? lazy(() => import("./components/LegalDraftPage")) : null;

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div role="status" className="min-h-screen bg-[#06070a] p-10 text-zinc-200">Loading page…</div>}>
        <Routes>
          {LegalDraftPage && <Route path="/privacy" element={<LegalDraftPage kind="privacy" />} />}
          {LegalDraftPage && <Route path="/terms" element={<LegalDraftPage kind="terms" />} />}
          <Route path="/" element={<RJMStudioHomepage />} />
          <Route path="/services" element={<RJMStudioServicesPage />} />
          <Route path="/work/ventosus" element={<VentosusCaseStudy />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        </Suspense>
      </BrowserRouter>

      <Analytics />
      <SpeedInsights />
    </>
  );
}
