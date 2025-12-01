import React from "react";
import "./AiInnovation.css";
import videoImg from "./assets/Video.png";

export default function AiInnovation() {
  return (
    <section className="ai-innovation-section">
      <div className="ai-innovation-title-block">
        <div className="ai-innovation-subtitle">— Innovazione AI —</div>
        <h2 className="ai-innovation-title">
          <span className="blue">Il futuro</span> dell’intelligenza artificiale
        </h2>
      </div>
      <div className="ai-innovation-columns">
        <div className="ai-innovation-col">
          <span className="ai-innovation-col-title">Obiettivo:</span> sviluppare un’intelligenza artificiale avanzata che superi il modello puramente razionale, integrando capacità emotive e cognitive per un’interazione più simile a quella umana.
        </div>
        <div className="ai-innovation-col">
          <span className="ai-innovation-col-title">Stato dell’arte:</span> l’AI tradizionale si è concentrata su classificazione e riconoscimento di pattern. La nostra innovazione introduce il Neuromorphic Computing, ispirato al funzionamento del cervello umano, per un’AI più efficiente e adattabile.
        </div>
        <div className="ai-innovation-col">
          <span className="ai-innovation-col-title">Progetto scientifico:</span> creazione di una Intelligenza Artificiale Liquida, capace di simulare emozioni e affetti attraverso neurotrasmettitori digitali. Un passo concreto verso la coscienza artificiale, con applicazioni rivoluzionarie e molteplici settori.
        </div>
      </div>
      <div className="ai-innovation-img-block">
        <img src={videoImg} alt="AI Innovation" className="ai-innovation-img" />
      </div>
    </section>
  );
}
