import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import RJMStudioHomepage from "./components/RJMStudioHomepage";
import RJMStudioServicesPage from "./components/ServicesPage";
import WorkPage from "./components/WorkPage";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RJMStudioHomepage />} />
          <Route path="/services" element={<RJMStudioServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>

      <Analytics />
    </>
  );
}
