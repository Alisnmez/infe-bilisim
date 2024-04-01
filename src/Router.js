import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import HomePage from "./pages/HomePage";
import Partners from "./pages/Partners";
import Footer from "./components/footer/Footer";
import ManagedServices from "./pages/services/ManagedServices/ManagedServices";
import SupportServices from "./pages/services/SupportService/SuppportService";
import NetworkAndSecurity from "./pages/services/ProfessionalServices/NetworkAndSecurity";
import SupportAndMaintenance from "./pages/services/ProfessionalServices/SupportAndMaintenance";
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/managed-services" element={<ManagedServices/>} />
          <Route path="/support-services" element={<SupportServices/>} />
          <Route path="/services/:network-and-security" element={<NetworkAndSecurity/>} />
          <Route path="/services/support-and-maintenance" element={<SupportAndMaintenance/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Router;
