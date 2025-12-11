import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "./assets/logo.svg";   // il tuo SVG con icona + scritta Connecteed

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

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

          {/* CENTRO: MENU */}
          <ul className="navbar-menu">
            <li>
              <button
                type="button"
                style={{ background: "none", border: "none", color: "inherit", font: "inherit", cursor: "pointer", padding: 0 }}
                onClick={() => window.location.pathname = "/Azienda"}
              >
                Azienda
              </button>
            </li>
            <li>Servizi</li>
            <li>Settori</li>
            <li>Prodotti</li>
            <li>I nostri lavori</li>
          </ul>

          {/* DESTRA: CTA */}
          <div className="navbar-right">
            <button
              className="navbar-contact"
              type="button"
              onClick={() => window.location.pathname = "/ContactPage"}
            >
              Contattaci
            </button>
          </div>
        </div>
      </nav>
     
    </>
  );
};

export default Navbar;
