import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/Approach";
import ServicesOverview from "./components/ServicesOverview";
import Footer from "./components/Footer";
import ServicePage from "./pages/ServicePage";
import ServicesPage from "./pages/ServicesPage";
import Contact from "./pages/Contact";
import MyApproach from "./pages/MyApproach";
import Resources from "./pages/Resources";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router basename="/iosinsights">
      <ScrollToTop />
      <div className="min-h-screen bg-[var(--color-cream)] text-[var(--color-text-dark)] selection:bg-[var(--color-wine)]/30 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <AboutMe />
                <ServicesOverview />
                <div id="contact">
                  <Contact />
                </div>
              </>
            } />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/approach" element={<MyApproach />} />
            <Route path="/blog" element={<Resources />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
