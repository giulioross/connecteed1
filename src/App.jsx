import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import BusinessSupport from './BusinessSupport';
import Services from './Services';
import { HoverPreview } from '../components/ui/hover-preview';
import Partners from './Partners';
import { WaitlistHero } from '../components/ui/waitlist-hero';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="hero-gradient-section">
        <div className="hero-gradient-text">
          Come professionisti digitali, superiamo<br />
          i limiti e offriamo soluzioni per far<br />
          crescere il tuo business.
        </div>
      </section>
      <BusinessSupport />
      <Services />
      {/* Sostituisce la sezione AI Innovation con HoverPreview */}
      <HoverPreview />
      <Partners />
      {/* WaitlistHero dopo la sezione Partners */}
      <WaitlistHero />
      <Footer />
    </>
  );
}

export default App
