import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "./assets/logo.svg";

const NAV_LINKS = [
  { label: "Azienda", href: "/Azienda" },
  { label: "Servizi", href: "/Comingsoon" },
  { label: "Settori", href: "/Comingsoon" },
  { label: "Prodotti", href: "/Comingsoon" },
  { label: "I nostri lavori", href: "/Comingsoon" },
];

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Blocca scroll quando menu mobile è aperto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar-glass${visible ? " navbar-visible" : ""}`}>
        <div className="navbar-glass-inner">
          {/* SINISTRA: LOGO SVG (icona + scritta) */}
          <div className="navbar-left">
            <img
              src={logo}
              alt="Connecteed logo"
              className="navbar-logo"
              style={{ cursor: "pointer" }}
              tabIndex={0}
              aria-label="Homepage Connecteed"
              onClick={() => window.location.pathname = "/"}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") {
                  window.location.pathname = "/";
                }
              }}
            />
          </div>

          {/* CENTRO: MENU (desktop) */}
          <ul className="navbar-menu">
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <button
                  type="button"
                  style={{ background: "none", border: "none", color: "inherit", font: "inherit", cursor: "pointer", padding: 0 }}
                  onClick={() => window.location.pathname = link.href}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* DESTRA: CTA o Burger */}
          <div className="navbar-right">
            {/* Desktop CTA */}
            <button
              className="navbar-contact navbar-contact-desktop"
              type="button"
              onClick={() => window.location.pathname = "/ContactPage"}
            >
              Contattaci
            </button>
            {/* Burger menu solo su mobile */}
            <button
              className="navbar-burger"
              aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(m => !m)}
              style={{
                background: "none",
                border: "none",
                display: "none",
                marginLeft: 16,
                cursor: "pointer",
                padding: 12,
              }}
            >
              <span style={{ display: "block", width: 18, height: 12, borderRadius: 2, position: "relative" }}>
                <span style={{
                  display: "block",
                  width: 24,
                  height: 3,
                  background: "#fff",
                  borderRadius: 2,
                  marginTop: 5,
                  marginBottom: 5,
                  transition: "transform .3s",
                  transform: menuOpen ? "rotate(45deg) translateY(9px)" : "none"
                }} />
                <span style={{
                  display: "block",
                  width: 24,
                  height: 3,
                  background: "#fff",
                  borderRadius: 2,
                  marginBottom: 5,
                  opacity: menuOpen ? 0 : 1,
                  transition: "opacity .3s"
                }} />
                <span style={{
                  display: "block",
                  width: 24,
                  height: 3,
                  background: "#fff",
                  borderRadius: 2,
                  transition: "transform .3s",
                  transform: menuOpen ? "rotate(-45deg) translateY(-9px)" : "none"
                }} />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay menu mobile */}
     {menuOpen && (
  <div
    id="mobile-menu"
    className="bs-mobile-overlay"
    role="dialog"
    aria-modal="true"
  >
    {/* TOP identico alla navbar chiusa */}
    <div className="bs-mobile-topbar">
      <div className="navbar-left">
        <img
          src={logo}
          alt="Connecteed logo"
          className="navbar-logo"
          onClick={() => {
            setMenuOpen(false);
            window.location.pathname = "/";
          }}
          style={{ cursor: "pointer" }}
        />
      </div>

      <div className="navbar-right">
        <button
          aria-label="Chiudi menu"
          className="navbar-burger bs-mobile-close"
          onClick={() => setMenuOpen(false)}
        >
          <span className="close-x-bar close-x-bar1"></span>
          <span className="close-x-bar close-x-bar2"></span>
        </button>
      </div>
    </div>

    {/* CONTENUTO CENTRATO */}
    <div className="bs-mobile-body">
      <div className="bs-mobile-links">
        {NAV_LINKS.map((link, idx) => (
          <React.Fragment key={link.label}>
            <button
              type="button"
              className="bs-mobile-link"
              onClick={() => {
                setMenuOpen(false);
                window.location.pathname = link.href;
              }}
            >
              {link.label}
            </button>
            {link.label === "I nostri lavori" && (
              <button
                type="button"
                className="bs-mobile-cta"
                style={{ marginTop: 12, marginBottom: 0 }}
                onClick={() => {
                  setMenuOpen(false);
                  window.location.pathname = "/ContactPage";
                }}
              >
                Contattaci
              </button>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
)}



      {/* Responsive CSS per mostrare burger solo su mobile */}
      <style>{`
        @media (max-width: 900px) {
          .navbar-menu { display: none !important; }
          .navbar-contact-desktop { display: none !important; }
          .navbar-burger { display: block !important; }
        }
        @media (min-width: 901px) {
          .navbar-burger { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
