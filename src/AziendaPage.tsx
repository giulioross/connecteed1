import React from "react";
import "./AziendaPage.css";
import Footer from "./Footer";



import MessageCircleIcon from "./assets/message-circle.svg";
import LayoutGridIcon from "./assets/layout-grid-01.svg";
import TrendingUpIcon from "./assets/trending-up-01.svg";
import FrameAspirazioni from "./assets/azienda/Frame 1707480702.svg";
import ImgCode from "./assets/azienda/imgCode.svg";
import ImgDesk from "./assets/azienda/imgDesk.svg";
import ImgRed from "./assets/azienda/imgRed.svg";




export default function AziendaPage() {
  return (
    <>
      <div id="azienda-page-root">
        {/* HERO / ABOUT */}
        <section className="about-hero-section">
          <h1 className="about-title">Qualcosa Su Di Noi</h1>

          <p className="about-intro-text">
            Persone, idee, risultati. Dietro ogni progetto di successo ci sono
            persone: voli, storie, idee. Il nostro team è prima di tutto una
            squadra, crediamo nella forza della collaborazione, nell’ascolto
            reciproco e nella diversità di pensiero come motore di innovazione.
          </p>

        <div className="about-section-images expand-hover">
  {[ImgCode, ImgRed, ImgDesk].map((img, index) => (
    <div
      key={index}
      className="expand-item"
    >
      <img src={img} alt={`Azienda immagine ${index + 1}`} />
    </div>
  ))}
</div>


        </section>

        {/* STATS */}
        <section className="stats-section">
          <div className="stats-row">
            <div>
              <div className="stat-number">2020</div>
              <div className="stat-label">Anno di fondazione</div>
            </div>

            <div>
              <div className="stat-number">21</div>
              <div className="stat-label">Dipendenti</div>
            </div>

            <div>
              <div className="stat-number">70</div>
              <div className="stat-label">Progetti all’attivo</div>
            </div>
          </div>
        </section>

        {/* VALORI */}
        <section className="values-section">
          <div>
            <h2 className="section-title">I nostri valori</h2>
            <p className="about-intro-text">
              Persone, idee, risultati. Dietro ogni progetto di successo ci sono
              persone: voli, storie, idee. Il nostro team è prima di tutto una
              squadra, crediamo nella forza della collaborazione, nell’ascolto
              reciproco e nella diversità di pensiero come motore di innovazione.
            </p>
          </div>

          <div className="values-image placeholder" />
        </section>

        {/* APPROCCIO */}
        <section className="approach-section">
          <h2 className="approccio-titolo">Il nostro approccio</h2>

          <div className="approach-steps">
            <div className="approach-step">
              <div className="approach-icon">
                <img src={MessageCircleIcon} alt="" aria-hidden="true" />
              </div>
              <h3 className="approach-step-title">Ascoltiamo</h3>
              <p className="approach-step-text">
                Ogni progetto inizia con una fase di deep listening per
                comprendere a fondo le vostre esigenze, i vostri processi e i
                vostri obiettivi di business.
              </p>
            </div>

            <div className="approach-step">
              <div className="approach-icon">
                <img src={LayoutGridIcon} alt="" aria-hidden="true" />
              </div>
              <h3 className="approach-step-title">Progettiamo</h3>
              <p className="approach-step-text">
                Sviluppiamo soluzioni su misura che si integrano perfettamente
                nel vostro ecosistema esistente, minimizzando disruption e
                massimizzando valore.
              </p>
            </div>

            <div className="approach-step">
              <div className="approach-icon">
                <img src={TrendingUpIcon} alt="" aria-hidden="true" />
              </div>
              <h3 className="approach-step-title">Evolviamo</h3>
              <p className="approach-step-text">
                Il nostro lavoro non finisce al go-live. Monitoriamo,
                ottimizziamo e facciamo evolvere le soluzioni insieme al vostro
                business.
              </p>
            </div>
          </div>
        </section>

        {/* ASPIRATIONS */}
        <section className="aspirations-section">
          <div className="aspirations-inner">
            <div className="pd">
              <h2 className="aspiration-titlee">A cosa aspiriamo</h2>
              <p className="aspirations-paragraph">
                Vogliamo offrire soluzioni su misura e servizi digitali costruiti
                intorno ai bisogni reali delle imprese, unendo competenza
                tecnica, design e supporto continuo. Crediamo in un’innovazione
                semplice e accessibile, resa possibile da modelli di investimento
                flessibili che permettono alle aziende di evolversi senza
                generare valore.
              </p>
              <p className="aspirations-paragraph">
                I nostri obiettivi si muovono in un ecosistema digitale in cui
                ogni impresa possa innovare senza limiti, grazie a tecnologie
                personalizzate e sostenibili che trasformano i processi, liberano
                il potenziale e accelerano la crescita.
              </p>
            </div>

            <div className="aspirations-image">
              <img src={FrameAspirazioni} alt="Aspirazioni azienda" />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
