import React from "react";
import "./CenteredHero.css";

import { useState } from "react";
import ContactPage from "./ContactPage";

export default function CenteredHero() {
  const [showContact, setShowContact] = useState(false);
  return (
    <>
      <section className="centered-hero-section">
        <h1 className="centered-hero-title">Lorem Ipsum Dolor Sit</h1>
        <button className="centered-hero-btn" onClick={() => setShowContact(true)}>Contattaci</button>
      </section>
      {showContact && (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 9999, background: 'rgba(0,0,0,0.7)'}}>
          <div style={{position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{background: 'white', borderRadius: 24, overflow: 'hidden', maxWidth: 900, width: '100%', boxShadow: '0 8px 32px rgba(0,0,0,0.2)'}}>
              <ContactPage onBack={() => setShowContact(false)} />
            </div>
            <button onClick={() => setShowContact(false)} style={{position: 'absolute', top: 32, right: 32, background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', borderRadius: 8, padding: '8px 16px', fontSize: 18, cursor: 'pointer'}}>Chiudi</button>
          </div>
        </div>
      )}
    </>
  );
}
