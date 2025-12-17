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
    <section className="about-hero-section w-full bg-background px-10">
      <div className="max-w-[1360px] mx-auto">
        <h1 className="about-title text-navy font-semibold">
          Qualcosa Su Di Noi
        </h1>

        <p className="about-intro-text text-gray-text text-base leading-[26px] mb-10">
          Persone, idee, risultati.
          <br />
          Dietro ogni progetto di successo ci sono persone: volti, storie, idee.
          Il nostro team è prima di tutto una squadra, crediamo nella forza
          della collaborazione, nell'ascolto reciproco e nella diversità di
          pensiero come motore di innovazione.
        </p>

        {/* Image Collage */}
        <div className="about-section-images">
          <div className="about-section-img main-img shadow-lg">
            <img
              src={IMG_RED_WORKSHOP}
              alt="Workshop alla lavagna"
            />
          </div>

          <div className="about-section-img grayscale shadow-lg">
            <img
              src={IMG_DESK_OFFICE}
              alt="Desk ufficio"
            />
          </div>

          {/* Quarta immagine solo mobile per riempire la griglia */}
          <div className="about-section-img mobile-only shadow-lg">
           
          </div>

          <div className="about-section-code-img shadow-xl">
            <img
              src={IMG_CODE_SCREEN}
              alt="Schermata di codice"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="stats-section w-full bg-background">
      <div className="stats-row px-10">
        <div className="text-left">
          <div className="stat-number font-semibold text-navy">2020</div>
          <div className="stat-label text-navy">Anno di fondazione</div>
        </div>
        <div className="text-left">
          <div className="stat-number font-semibold text-navy">21</div>
          <div className="stat-label text-navy">Dipendenti</div>
        </div>
        <div className="text-left">
          <div className="stat-number font-semibold text-navy">70</div>
          <div className="stat-label text-navy">Progetti all'attivo</div>
        </div>
      </div>
    </section>
  );
};

const ValuesSection: React.FC = () => {
  return (
    <section className="values-section w-full bg-background px-10">
      <div className="values-text">
        <h2 className="text-navy font-semibold">
          I nostri valori
        </h2>
        <p className="text-gray-text font-normal">
          Persone, idee, risultati.<br />
          Dietro ogni progetto di successo ci sono persone: volti, storie, idee. Il nostro team è prima di tutto una squadra, crediamo nella forza della collaborazione, nell'ascolto reciproco e nella diversità di pensiero come motore di innovazione.
        </p>
      </div>

      <div className="values-image">
        <div className="checkerboard-bg" />
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
    <section className="approach-section w-full bg-background">
      <div className="max-w-[1360px] mx-auto px-10">
        <h2 className="section-title text-navy font-semibold text-left">
          Il nostro approccio
        </h2>
        
        <div className="h-[80px] lg:h-[120px]"></div>

        <div className="flex gap-12 justify-center items-start">
          {approaches.map((approach, index) => (
            <div key={index} className="flex-1 flex flex-col items-center max-w-[400px]">
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
        <div className="aspirations-text">
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

        <div className="aspirations-image">
          <img
            src={IMG_LAPTOP_DASHBOARD}
            alt="Dashboard su laptop"
          />
        </div>
      </div>
    </section>
  );
};

const AziendaPage: React.FC = () => {
  return (
    <>
      <div id="azienda-page-root" className="w-full mx-auto min-h-screen bg-background">
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