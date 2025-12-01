import React from "react";
import "./Partners.css";

const partners = [
  { name: "Boltshift", color: "#c00", icon: "⚡" },
  { name: "Lightbox", color: "#800", icon: "🧊" },
  { name: "FeatherDev", color: "#c9b800", icon: "🪶" },
  { name: "Spherule", color: "#b800c9", icon: "⭕" },
  { name: "GlobalBank", color: "#00c97b", icon: "⬢" },
  { name: "Other", color: "#222", icon: "≡" }
];

export default function Partners() {
  return (
    <section className="partners-section">
      <div className="partners-title-block">
        <div className="partners-subtitle">— Partnership & Clienti —</div>
        <p className="partners-desc">
          Dalle startup in crescita alle aziende consolidate, ogni giorno professionisti di diversi settori scelgono la nostra agenzia per trasformare idee in progetti concreti. Ci affidano la loro visione perché trovano in noi un partner strategico, capace di unire creatività, competenza tecnica e attenzione reale ai risultati.
        </p>
      </div>
      <div className="partners-slider-wrapper">
        <div className="partners-slider">
          {[...partners, ...partners].map((p, i) => (
            <div className="partner-card" key={p.name + i}>
              <span className="partner-icon" style={{ color: p.color }}>{p.icon}</span>
              <span className="partner-name" style={{ color: p.color }}>{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
