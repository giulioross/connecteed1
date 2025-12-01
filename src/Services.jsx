import React from "react";
import "./Services.css";
import imgCustom from "./assets/Frame 1707480667.png";
import imgSaas from "./assets/Group 1171275099.png";
import imgFeed from "./assets/image 1.png";
import imgUi from "./assets/Group 1171275098.png";
import imgEcom from "./assets/E-commerce.png";

const services = [
  {
    title: "Software Custom",
    desc: "Realizziamo soluzioni software personalizzate che rispondano a esigenze concrete di business.",
    img: imgCustom
  },
  {
    title: "SaaS Development",
    desc: "Creiamo siti e piattaforme e-commerce progettati per vendere. User experience fluida, design professionale e tecnologie Top Tier.",
    img: imgSaas
  },
  {
    title: "Product Feed Manager",
    desc: "Il nostro motore centrale per la gestione avanzata dei feed: semplice, potente, scalabile.",
    img: imgFeed
  },
  {
    title: "UX/UI Design & Branding",
    desc: "Realizziamo soluzioni software personalizzate che rispondano a esigenze concrete di business.",
    img: imgUi
  },
  {
    title: "Website & E-commerce",
    desc: "Creiamo siti e piattaforme e-commerce progettati per vendere. User experience fluida, design professionale e tecnologie top tier.",
    img: imgEcom
  }
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-title-block">
        <div className="services-subtitle">— I nostri servizi —</div>
        <div className="services-icons">{'<'} <span className="services-icon-underscore">_</span> {'/>'}</div>
        <p className="services-desc">
          Potenziare i brand e far crescere i business è ciò che facciamo, dando vita a esperienze digitali costruite sulle reali esigenze delle persone. Partiamo sempre dall’ascolto, superando ogni barriera, per trasformare i bisogni in risultati concreti.<br />
          Usiamo tecnologia, design e creatività per raggiungere ciò che conta davvero: coinvolgere, sorprendere, convertire e creare valore.
        </p>
      </div>
      <div className="services-grid">
        <div className="services-row">
          <ServiceCard {...services[0]} />
          <ServiceCard {...services[1]} />
        </div>
        <div className="services-row services-row-full">
          <ServiceCard {...services[2]} full />
        </div>
        <div className="services-row">
          <ServiceCard {...services[3]} />
          <ServiceCard {...services[4]} />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, desc, img, full }) {
  return (
    <div className={`service-card${full ? " service-card-full" : ""}`}>
      <div className="service-card-img">
        <img src={img} alt={title} className="service-card-img-real" />
      </div>
      <div className="service-card-content">
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-desc">{desc}</p>
        <div className="service-card-btns">
          <button className="service-btn">Contattaci</button>
        </div>
      </div>
    </div>
  );
}
