import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import RJMStudioHomepage from "./components/RJMStudioHomepage";
import RJMStudioServicesPage from "./components/ServicesPage";
import WorkPage from "./components/WorkPage";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";

function AppRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<RJMStudioHomepage />} />
      <Route path="/services" element={<RJMStudioServicesPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
