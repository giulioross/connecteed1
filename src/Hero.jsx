import React, { useEffect, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <section className={`hero-section${visible ? " fade-in" : ""}`}>
      <div className="hero-text-block">
        <span className="hero-title">Innovazione Digitale che</span>
        <br />
        <span className="hero-subtitle">Trasforma il Tuo Business</span>
      </div>
    </section>
  );
}
