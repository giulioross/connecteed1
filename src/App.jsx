import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Hero from './Hero';
import BlueGradientSection from './BlueGradientSection';
import BusinessSupport from './BusinessSupport';
import Services from './Services';
import { HoverPreview } from '../components/ui/hover-preview';
import Partners from './Partners';
import { WaitlistHero } from '../components/ui/waitlist-hero';
import Footer from "./Footer.tsx";
import { ContactForm } from "./ContactPage"; // Assicurati che ContactForm sia esportato

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <BlueGradientSection />
            <BusinessSupport />
            <Services />
            <HoverPreview />
            <Partners />
            <WaitlistHero />
            <Footer />
          </>
        } />
        <Route path="/ContactPage" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App