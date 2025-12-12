import React from "react";
import "./Partners.css";
import leoniana from "./assets/partners/leoniana.svg";
import overture from "./assets/partners/overture.svg";
import bounz from "./assets/partners/bounz.svg";
import luxr from "./assets/partners/luxr.svg";
import insyde from "./assets/partners/insyde.svg";
import scicon from "./assets/partners/scicon.svg";
import novare from "./assets/partners/novare.svg";
import jakala from "./assets/partners/jakala.svg";
import intesa from "./assets/partners/intesasanpaolo.svg";
import bricobravo from "./assets/partners/bricobravo.svg";
import manomano from "./assets/partners/manomano.svg";
import eprice from "./assets/partners/eprice.svg";
import googlegpc from "./assets/partners/googlegpc.svg";
import contesquare from "./assets/partners/contesquare.svg";
import shopify from "./assets/partners/shopify.svg";

const clienti = [
  { name: "Leoniana", logo: leoniana },
  { name: "Overture", logo: overture },
  { name: "Bounz", logo: bounz, url: "https://www.bounz.it/" },
  { name: "LUXR", logo: luxr, url: "https://luxr.com/" },
  { name: "Insyde", logo: insyde },
  { name: "Scicon", logo: scicon, url: "https://www.sciconbike.com/" },
  { name: "NovaRe", logo: novare, url: "https://www.novaregroup.it/" },
];

const partner = [
  { name: "Jakala", logo: jakala, url: "https://www.jakala.com/" },
  { name: "Intesa for Value", logo: intesa, url: "https://www.intesaforvalue.it/" },
  { name: "Bricobravo", logo: bricobravo, url: "https://www.bricobravo.com/" },
  { name: "Manomano", logo: manomano, url: "https://www.manomano.it/" },
  { name: "Eprice", logo: eprice, url: "https://www.eprice.it/" },
  { name: "Google GPC", logo: googlegpc, url: "https://www.google.com/partners/" },
  { name: "Contentsquare", logo: contesquare, url: "https://contentsquare.com/" },
  { name: "Shopify", logo: shopify },
];

export default function Partners() {
  return (
    <section className="partners-section">
      <div className="partners-inner">
        {/* BLOCCO TITOLO */}
        <div className="partners-title-block">
          <div className="partners-subtitle">— Partnership &amp; Clienti —</div>

          <h2 className="partners-title">Chi si affida a noi</h2>

          <p className="partners-desc">
            Dalle startup in crescita alle aziende consolidate, ogni giorno
            professionisti di diversi settori scelgono la nostra agenzia per
            trasformare idee in progetti concreti. Ci affidano la loro visione
            perché trovano in noi un partner strategico, capace di unire
            creatività, competenza tecnica e attenzione reale ai risultati.
          </p>
        </div>

        {/* CLIENTI */}
        <div className="partners-group">
          <div className="partners-label">Tra i nostri clienti</div>

          <div className="partners-slider-wrapper">
            <div className="partners-slider">
              {[...clienti, ...clienti].map((p, i) => (
                <a
                  className="partner-card"
                  key={p.name + i}
                  href={p.url ? p.url : `https://www.google.com/search?q=${encodeURIComponent(p.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={0}
                >
                  <img
                    src={p.logo}
                    alt={p.name + " logo"}
                    className="partner-icon"
                    style={{ width: 152, height: 119 }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* PARTNER */}
        <div className="partners-group partners-group-bottom">
          <div className="partners-label">E i nostri partner</div>

          <div className="partners-slider-wrapper">
            <div className="partners-slider partners-slider-alt partners-slider-reverse">
              {[...partner, ...partner].map((p, i) => (
                <a
                  className="partner-card"
                  key={p.name + i}
                  href={p.url ? p.url : `https://www.google.com/search?q=${encodeURIComponent(p.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={0}
                >
                  {p.logo && (
                    <img
                      src={p.logo}
                      alt={p.name + " logo"}
                      className="partner-icon"
                      style={{ width: 152, height: 119 }}
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
