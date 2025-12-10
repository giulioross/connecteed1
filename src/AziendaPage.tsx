import React from "react";
import "./AziendaPage.css";
import Footer from "./Footer";

/**
 * Puoi sostituire questi URL con le tue immagini locali, ad esempio:
 * import imgRed from "./assets/imgRed.png";
 * ecc. e usare imgRed al posto dell'URL.
 */
const IMG_RED_WORKSHOP =
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop";
const IMG_DESK_OFFICE =
  "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1200&auto=format&fit=crop";
const IMG_CODE_SCREEN =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop";
const IMG_LAPTOP_DASHBOARD =
  "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1500&auto=format&fit=crop";

/* ---------------- ABOUT HERO + COLLAGE ---------------- */

const AboutSection: React.FC = () => {
  return (
    <section className="about-hero-section w-full bg-white flex justify-center">
      <div className="w-full max-w-[1440px]">
        {/* Testo introduttivo */}
        <h2 className="about-title font-semibold text-[#020b2d]">
          Qualcosa Su Di Noi
        </h2>

        <p className="about-intro-text text-[#5F6575]">
          Persone, idee, risultati.
          <br />
          Dietro ogni progetto di successo ci sono persone: volti, storie, idee.
          Il nostro team è prima di tutto una squadra, crediamo nella forza
          della collaborazione, nell&apos;ascolto reciproco e nella diversità di
          pensiero come motore di innovazione.
        </p>

        {/* COLLAGE IMMAGINI */}
        <div className="about-section-images">
          {/* Immagine rossa grande a sinistra */}
          <div className="about-section-img main-img">
            <img
              src={IMG_RED_WORKSHOP}
              alt="Workshop alla lavagna"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Immagine b/n centrale */}
          <div className="about-section-img grayscale">
            <img
              src={IMG_DESK_OFFICE}
              alt="Desk ufficio"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Immagine codice a destra */}
          <div className="about-section-code-img">
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

/* ---------------- STATS ---------------- */

const StatsSection: React.FC = () => {
  return (
    <section className="stats-section w-full bg-white flex justify-center">
      <div className="w-full max-w-[1440px] stats-row">
        <div className="text-center flex-1">
          <div className="stat-number">2020</div>
          <div className="stat-label">Anno di fondazione</div>
        </div>
        <div className="text-center flex-1">
          <div className="stat-number">21</div>
          <div className="stat-label">Dipendenti</div>
        </div>
        <div className="text-center flex-1">
          <div className="stat-number">70</div>
          <div className="stat-label">Progetti all’attivo</div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- VALORI ---------------- */

const ValuesSection: React.FC = () => {
  return (
    <section className="w-full bg-white flex justify-center">
      <div className="values-section">
        {/* Testo a sinistra */}
        <div className="values-text">
          <h2 className="section-title text-[#020b2d] mb-6">I nostri valori</h2>
          <p className="text-[#5F6575] text-[16px] leading-[26px]">
            Persone, idee, risultati.
            <br />
            Dietro ogni progetto di successo ci sono persone: volti, storie,
            idee. Il nostro team è prima di tutto una squadra, crediamo nella
            forza della collaborazione, nell&apos;ascolto reciproco e nella
            diversità di pensiero come motore di innovazione.
          </p>
        </div>

        {/* Checkerboard a destra */}
        <div className="values-image">
          <div
            className="checkerboard-bg"
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `
                linear-gradient(45deg, #e5ebf5 25%, transparent 25%),
                linear-gradient(-45deg, #e5ebf5 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, #e5ebf5 75%),
                linear-gradient(-45deg, transparent 75%, #e5ebf5 75%)
              `,
              backgroundSize: "60px 60px",
              backgroundPosition:
                "0 0, 0 30px, 30px -30px, -30px 0",
            }}
          />
        </div>
      </div>
    </section>
  );
};

/* ---------------- APPROCCIO ---------------- */

const ApproachSection: React.FC = () => {
  return (
    <section className="approach-section w-full bg-white flex justify-center">
      <div className="w-full max-w-[1440px]">
        <h2 className="section-title text-[#020b2d] mb-16">
          Il nostro approccio
        </h2>

        <div className="approach-grid">
          {/* Card 1 */}
          <div className="approach-card flex flex-col items-center group text-center">
            <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
              <div className="w-[80px] h-[80px] rounded-full bg-[#E6F0FF] flex items-center justify-center text-[#2D7FF9]">
                {/* Icona Ascoltiamo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
              </div>
            </div>
            <h3 className="font-semibold text-[20px] text-[#020b2d] mb-4">
              Ascoltiamo
            </h3>
            <p className="text-[14px] leading-[22px] text-[#5F6575] max-w-[300px]">
              Ogni progetto inizia con una fase di deep listening per
              comprendere a fondo le vostre esigenze, i vostri processi e i
              vostri obiettivi di business.
            </p>
          </div>

          {/* Card 2 */}
          <div className="approach-card flex flex-col items-center group text-center">
            <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
              <div className="w-[80px] h-[80px] rounded-full bg-[#E6F0FF] flex items-center justify-center text-[#2D7FF9]">
                {/* Icona Progettiamo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12h20" />
                  <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
                  <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                  <path d="M10 2h4" />
                  <path d="m14 2 4 10h-8L14 2z" />
                </svg>
              </div>
            </div>
            <h3 className="font-semibold text-[20px] text-[#020b2d] mb-4">
              Progettiamo
            </h3>
            <p className="text-[14px] leading-[22px] text-[#5F6575] max-w-[300px]">
              Sviluppiamo soluzioni su misura che si integrano perfettamente nel
              vostro ecosistema esistente, minimizzando disruption e
              massimizzando valore.
            </p>
          </div>

          {/* Card 3 */}
          <div className="approach-card flex flex-col items-center group text-center">
            <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
              <div className="w-[80px] h-[80px] rounded-full bg-[#E6F0FF] flex items-center justify-center text-[#2D7FF9]">
                {/* Icona Evolviamo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>
            </div>
            <h3 className="font-semibold text-[20px] text-[#020b2d] mb-4">
              Evolviamo
            </h3>
            <p className="text-[14px] leading-[22px] text-[#5F6575] max-w-[300px]">
              Il nostro lavoro non finisce al go-live. Monitoriamo, ottimizziamo
              e facciamo evolvere le soluzioni insieme al vostro business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- A COSA ASPIRIAMO ---------------- */

const AspirationsSection: React.FC = () => {
  return (
    <section className="aspirations-section w-full flex justify-center">
      <div className="aspirations-inner">
        {/* Testo a sinistra */}
        <div className="aspirations-text">
          <h2 className="section-title text-white mb-10">
            A cosa aspiriamo
          </h2>
          <p className="text-white/90 text-[16px] leading-[26px] mb-6">
            Vogliamo offrire soluzioni software e servizi digitali costruiti
            intorno ai bisogni reali delle imprese, unendo competenza tecnica,
            design e supporto continuo. Crediamo in un’innovazione semplice e
            accessibile, resa possibile da modelli di investimento flessibili
            che permettono alle aziende di evolvere mentre generano valore.
          </p>
          <p className="text-white/90 text-[16px] leading-[26px]">
            Il nostro obiettivo è creare un ecosistema digitale in cui ogni
            impresa possa innovare senza limiti, grazie a tecnologie
            personalizzate e sostenibili che trasformano i processi, liberano il
            potenziale e accelerano la crescita.
          </p>
        </div>

        {/* Immagine a destra */}
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

/* ---------------- PAGE WRAPPER ---------------- */

const AziendaPage: React.FC = () => {
  return (
    <div id="azienda-page-root">
      <AboutSection />
      <StatsSection />
      <ValuesSection />
      <ApproachSection />
      <AspirationsSection />
      <Footer />
    </div>
  );
};

export default AziendaPage;
