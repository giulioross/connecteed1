import React from "react";
import "./BusinessSupport.css";
import { tools } from "./toolsList";

export default function BusinessSupport() {
  return (
    <section className="business-support-section">
      <div className="business-support-title-block">
        <div className="business-support-subtitle">— Cosa facciamo —</div>
        <h2 className="business-support-title">
          <span className="blue">Supportiamo</span> il tuo business,<br />
          <span className="dark">connettendo tutto ciò di cui hai bisogno.</span>
        </h2>
        <p className="business-support-desc">
          In un mercato sempre più complesso, le aziende si trovano a gestire una moltitudine di strumenti diversi: marketing, gestione dati, vendite, post-vendita, logistica e molto altro.<br />
          <span className="business-support-highlight">Connecteed nasce per unire tutto in un'unica soluzione</span>, garantendo efficienza, automazione e crescita senza ostacoli.
        </p>
      </div>
      <div className="business-support-grid business-support-bg-white">
        {tools.map((tool) => (
          <div className="business-support-card" key={tool}>
            <div className="business-support-card-img" />
            <div className="business-support-card-title">{tool}</div>
          </div>
        ))}
      </div>
      <div className="business-support-btn-block">
        <button className="business-support-btn">Scopri tutti</button>
      </div>
    </section>
  );
}
