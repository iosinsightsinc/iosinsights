import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Approach from "./components/Approach";
import ServicesOverview from "./components/ServicesOverview";
import Footer from "./components/Footer";
import ServicePage from "./pages/ServicePage";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-text selection:bg-primary/30 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Approach />
                <ServicesOverview />
              </>
            } />
            <Route path="/services/depression" element={<ServicePage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
