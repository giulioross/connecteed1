import React from "react";

import { useState } from "react";
import ContactPage from "./ContactPage";

export default function Footer() {
  const [showContact, setShowContact] = useState(false);
  return (
    <>
      <footer
        className="w-full min-h-screen flex flex-col justify-between text-white font-sans"
        style={{
          background: `url('/assets/Artboard 1.png') center/cover no-repeat, linear-gradient(180deg, #0a0a0a 0%, #232d47 100%)`,
        }}
      >
        <div className="max-w-[1600px] mx-auto px-8 pt-24 pb-12 flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* Colonna sinistra */}
          <div className="flex-1 flex flex-col justify-start">
            <img
              src="/assets/Vector.png"
              alt="Logo"
              className="w-20 h-20 mb-10"
            />
            <h2
              className="text-6xl md:text-7xl font-light leading-tight mb-16"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Restiamo
              <br />
              In Contatto
            </h2>
            <div className="flex flex-row gap-16 mt-8">
              <div>
                <span className="font-semibold text-lg">Indirizzo</span>
                <br />
                <span className="text-white/80 text-base">
                  Via della Conciliazione, 44
                  <br />
                  00193 – Roma IT
                </span>
              </div>
              <div>
                <span className="font-semibold text-lg">Email</span>
                <br />
                <a
                  href="mailto:contact@connecteed.com"
                  className="text-white/80 text-base underline"
                >
                  contact@connecteed.com
                </a>
              </div>
            </div>
          </div>
          {/* Colonna destra: form */}
          <form className="flex-1 flex flex-col gap-10 justify-center" onSubmit={e => {e.preventDefault(); setShowContact(true);}}>
            <div className="grid grid-cols-2 gap-10">
              <div>
                <label className="block text-base font-semibold mb-2">
                  Nome E Cognome
                </label>
                <input className="w-full bg-transparent border-b border-white/40 text-white py-2 outline-none" />
              </div>
              <div>
                <label className="block text-base font-semibold mb-2">
                  Azienda
                </label>
                <input className="w-full bg-transparent border-b border-white/40 text-white py-2 outline-none" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div>
                <label className="block text-base font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-white/40 text-white py-2 outline-none"
                />
              </div>
              <div>
                <label className="block text-base font-semibold mb-2">
                  Numero Di Telefono
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/40 text-white py-2 outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-base font-semibold mb-2">Messaggio</label>
              <input className="w-full bg-transparent border-b border-white/40 text-white py-2 outline-none" />
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="text-xl font-semibold flex items-center gap-2 text-white"
              >
                Invia{" "}
                <span style={{ fontSize: 28 }}>&rarr;</span>
              </button>
            </div>
          </form>
        </div>
        {/* Bottom bar */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center mt-12 pt-8 border-t border-white/20 text-white/80 text-base gap-4 px-8">
          <div className="flex gap-8">
            <a href="#" className="hover:underline">
              Termini &amp; Condizioni
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Cookies
            </a>
          </div>
          <div>© 2025 Copyright Connecteed</div>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 border border-white/20 rounded flex items-center justify-center hover:bg-white/10"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                alt="LinkedIn"
                className="w-6 h-6 opacity-80"
              />
            </a>
            <a
              href="#"
              className="w-10 h-10 border border-white/20 rounded flex items-center justify-center hover:bg-white/10"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                alt="Instagram"
                className="w-6 h-6 opacity-80"
              />
            </a>
            <a
              href="#"
              className="w-10 h-10 border border-white/20 rounded flex items-center justify-center hover:bg-white/10"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                alt="Facebook"
                className="w-6 h-6 opacity-80"
              />
            </a>
          </div>
        </div>
      </footer>
      {showContact && (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 9999, background: 'rgba(0,0,0,0.7)'}}>
          <div style={{position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{background: 'white', borderRadius: 24, overflow: 'hidden', maxWidth: 900, width: '100%', boxShadow: '0 8px 32px rgba(0,0,0,0.2)'}}>
              <ContactPage />
            </div>
            <button onClick={() => setShowContact(false)} style={{position: 'absolute', top: 32, right: 32, background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', borderRadius: 8, padding: '8px 16px', fontSize: 18, cursor: 'pointer'}}>Chiudi</button>
          </div>
        </div>
      )}
    </>
  );
}