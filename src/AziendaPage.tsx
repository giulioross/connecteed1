import React from "react";
import "./AziendaPage.css";
import Footer from "./Footer";
import MessageCircleIcon from "./assets/message-circle.svg";
import LayoutGridIcon from "./assets/layout-grid-01.svg";
import TrendingUpIcon from "./assets/trending-up-01.svg";

const IMG_RED_WORKSHOP =
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop";
const IMG_DESK_OFFICE =
  "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1200&auto=format&fit=crop";
const IMG_CODE_SCREEN =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop";
const IMG_LAPTOP_DASHBOARD =
  "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1500&auto=format&fit=crop";

const AboutSection: React.FC = () => {
  return (
    <section className="w-full bg-background pt-[180px] px-10">
      <div className="max-w-[1360px] mx-auto">
        <h1 className="text-[56px] leading-[64px] font-semibold text-navy mb-10">
          Qualcosa Su Di Noi
        </h1>

        <p className="text-gray-text text-base leading-[26px] max-w-[550px] mb-10">
          Persone, idee, risultati.
          <br />
          Dietro ogni progetto di successo ci sono persone: volti, storie, idee.
          Il nostro team è prima di tutto una squadra, crediamo nella forza
          della collaborazione, nell'ascolto reciproco e nella diversità di
          pensiero come motore di innovazione.
        </p>

        {/* Image Collage */}
        <div className="relative w-full h-[685px] mt-10">
          {/* Main red image - left bottom */}
          <div className="absolute left-0 top-[135px] w-[550px] h-[550px] rounded-3xl overflow-hidden shadow-lg z-[5]">
            <img
              src={IMG_RED_WORKSHOP}
              alt="Workshop alla lavagna"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Grayscale image - center, overlapping */}
          <div className="absolute left-[475px] top-[335px] w-[410px] h-[410px] rounded-3xl overflow-hidden shadow-lg z-[8] grayscale">
            <img
              src={IMG_DESK_OFFICE}
              alt="Desk ufficio"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Code image - right top */}
    <div
      className="absolute right-0 top-0 w-[510px] h-[315px] rounded-3xl overflow-hidden shadow-xl z-[10]"
      style={{ paddingLeft: "700px" }}
    >
      <img
        src={IMG_CODE_SCREEN}
        alt="Schermata di codice"
        className="w-full h-full object-cover"
      />
    </div>
        </div>
      </div>
    </section>
  );
};

const StatsSection: React.FC = () => {
return (
  <section className="w-full bg-background mt-[80px] mb-[80px]">
    <div className="max-w-[1360px] mx-auto px-10 py-10 border-t border-b border-border">
      <div className="flex justify-between items-center">
          <div className="text-center flex-1">
            <div className="text-[80px] leading-none font-semibold text-navy">2020</div>
            <div className="mt-3 text-xl text-navy">Anno di fondazione</div>
          </div>
          <div className="text-center flex-1">
            <div className="text-[80px] leading-none font-semibold text-navy">21</div>
            <div className="mt-3 text-xl text-navy">Dipendenti</div>
          </div>
          <div className="text-center flex-1">
            <div className="text-[80px] leading-none font-semibold text-navy">70</div>
            <div className="mt-3 text-xl text-navy">Progetti all'attivo</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ValuesSection: React.FC = () => {
  return (
    <section className="w-full bg-background ">
      <div className="max-w-[1360px] mx-auto px-10 grid grid-cols-[553px_1fr] gap-[179px] items-center">
        {/* Text */}
        <div className="w-[553px]" style={{ minHeight: 256 }}>
          <h2
            style={{
              fontFamily: 'Host Grotesk, sans-serif',
              fontWeight: 400,
              fontSize: 32,
              lineHeight: '40px',
              color: '#10101C',
              marginBottom: 24,
              textAlign: 'left',
              letterSpacing: 0
            }}
          >
            I nostri valori
          </h2>
          <p
            style={{
              fontFamily: 'Host Grotesk, sans-serif',
              fontWeight: 400,
              fontSize: 18,
              lineHeight: '26px',
              color: '#464646',
              textAlign: 'left',
              margin: 0
            }}
          >
            Persone, idee, risultati.<br />
            Dietro ogni progetto di successo ci sono persone: volti, storie, idee. Il nostro team è prima di tutto una squadra, crediamo nella forza della collaborazione, nell'ascolto reciproco e nella diversità di pensiero come motore di innovazione.
          </p>
        </div>

        {/* Checkerboard */}
        <div
          className="w-full h-[400px] rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(45deg, hsl(220 30% 92%) 25%, transparent 25%),
              linear-gradient(-45deg, hsl(220 30% 92%) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, hsl(220 30% 92%) 75%),
              linear-gradient(-45deg, transparent 75%, hsl(220 30% 92%) 75%)
            `,
            backgroundSize: "60px 60px",
            backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0",
            backgroundColor: "hsl(0 0% 100%)",
          }}
        />
      </div>
    </section>
  );
};

const approaches = [
  {
    icon: MessageCircleIcon,
    title: "Ascoltiamo",
    description:
      "Ogni progetto inizia con una fase di deep strategy per comprendere a fondo le vostre esigenze, i vostri processi e i vostri obiettivi di business.",
  },
  {
    icon: LayoutGridIcon,
    title: "Progettiamo",
    description:
      "Sviluppiamo soluzioni su misura che si integrano perfettamente nel vostro ecosistema esistente, minimizzando l'impatto e massimizzando valore.",
  },
  {
    icon: TrendingUpIcon,
    title: "Evolviamo",
    description:
      "Il nostro lavoro non finisce mai. Monitoriamo, ottimizziamo e facciamo evolvere le soluzioni insieme al vostro business.",
  },
];

const ApproachSection: React.FC = () => {
  return (
    <section className="w-full bg-background py-24" style={{ marginTop: 160 , marginBottom: 203 }}>
      <div className="max-w-[1360px] mx-auto px-10">
        <h2
          className="text-[40px] leading-[48px] font-semibold text-navy mb-0 text-left"
          style={{ textAlign: "left" }}
        >
          Il nostro approccio
        </h2>
        <div style={{ height: 120 }} />
        <div className="flex gap-12 justify-center items-start">
          {approaches.map((approach, index) => (
            <div key={index} className="text-center flex flex-col items-center flex-1 max-w-[400px]">
              <div className="w-16 h-16 mb-6 rounded-full bg-icon-bg flex items-center justify-center">
                <img
                  src={approach.icon}
                  alt={approach.title + " icon"}
                  className="w-7 h-7"
                />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">
                {approach.title}
              </h3>
              <p className="text-gray-text text-base leading-relaxed max-w-[300px]">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AspirationsSection: React.FC = () => {
  return (
    <section className="aspirations-section">
      <div className="aspirations-inner">
        {/* Text */}
        <div className="aspirations-text py-20 px-10">
          <h2 className="section-title mb-10 text-primary-foreground">
            A cosa aspiriamo
          </h2>
          <p className="text-primary-foreground/90 text-base leading-[26px] mb-6">
            Vogliamo offrire soluzioni software e servizi digitali costruiti
            intorno ai bisogni reali delle imprese, unendo competenza tecnica,
            design e supporto continuo. Crediamo in un'innovazione semplice e
            accessibile, resa possibile da modelli di investimento flessibili
            che permettono alle aziende di evolvere mentre generano valore.
          </p>
          <p className="text-primary-foreground/90 text-base leading-[26px]">
            Il nostro obiettivo è creare un ecosistema digitale in cui ogni
            impresa possa innovare senza limiti, grazie a tecnologie
            personalizzate e sostenibili che trasformano i processi, liberano il
            potenziale e accelerano la crescita.
          </p>
        </div>

        {/* Image */}
        <div className="aspirations-image">
          <img
            src={IMG_LAPTOP_DASHBOARD}
            alt="Dashboard su laptop"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

const AziendaPage: React.FC = () => {
  return (
    <>
      <div className="w-full mx-auto min-h-screen bg-background">
        <AboutSection />
        <StatsSection />
        <ValuesSection />
        <ApproachSection />
        <AspirationsSection />
      </div>
      <Footer />
    </>
  );
};

export default AziendaPage;