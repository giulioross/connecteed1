import React from "react";
import logo from "./assets/Logo (1).svg";
import "./Footer.css";
import {
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
} from "./Icons";

function SocialBtn({
  children,
  label,
  href
}: {
  children: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a href={href} aria-label={label} className="social-btn" target="_blank" rel="noopener noreferrer">
      <div className="social-icon">{children}</div>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BLOCCO SUPERIORE */}
        <div className="footer-top-ordered">
          {/* SINISTRA */}
          <div className="flex-1 flex flex-col items-start">
            <div className="footer-header-row mb-[32px]" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 0 }}>
              <img src={logo} alt="Logo" className="footer-logo" />
              <h1 className="footer-title" style={{  marginTop: 16 }}>
                Tecnologia che Unisce,<br />Automatizza e fa Crescere.
              </h1>
            </div>
            <div className="flex flex-col gap-[24px]">
              {/* INDIRIZZO */}
              <div className="flex flex-col gap-[4px]">
                <span className="footer-label">Indirizzo</span>
                <p className="footer-text">
                  Via della Conciliazione, 44 <br />
                  00193 – Roma IT
                </p>
              </div>
              {/* CONTATTI */}
              <div className="flex flex-col gap-[4px]">
                <span className="footer-label">Contatti</span>
                <a
                  href="mailto:contact@connecteed.com"
                  className="footer-link"
                >
                  contact@connecteed.com
                </a>
                <span className="footer-text">
                  Pec: progetriosrl@pec.it
                </span>
              </div>
            </div>
          </div>
          {/* DESTRA: MENU */}
          <div className="footer-menu-col">
            <nav className="footer-menu-nav">
              {[
                "Azienda",
                "Servizi",
                "Settori",
                "Prodotti",
                "I nostri lavori",
                "Termini & Condizioni",
                "Privacy Policy",
                "Cookies",
              ].map((item) => (
                <a
                  key={item}
                  href={
                    item === "Termini & Condizioni"
                      ? "/terminicondizioni"
                      : "/ContactPage"
                  }
                  className="footer-menu-link"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* BLOCCO INFERIORE ORDINATO */}
        <div className="footer-bottom-ordered">
          <div className="footer-legal flex flex-col gap-[4px]">
            <span className="footer-text-muted footer-legal-spacing">
              Connecteed S.r.l. PMI innovativa – società benefit
            </span>
            <span className="footer-text-muted">
              P IVA: IT15798401004
            </span>
            <span className="footer-text-muted">
              Numero REA: RM-1614796
            </span>
            <span className="footer-text-muted">
              Capitale sociale €5.437.953,14
            </span>
          </div>
          <div className="footer-socials">
            <div className="flex gap-[16px]">
              <SocialBtn label="LinkedIn" href="https://www.linkedin.com/company/connecteed/product/">
                <LinkedInIcon />
              </SocialBtn>
              <SocialBtn label="Instagram" href="https://www.instagram.com/connecteed.it/">
                <InstagramIcon />
              </SocialBtn>
              <SocialBtn label="Facebook" href="https://www.facebook.com/profile.php?id=61552167357765">
                <FacebookIcon />
              </SocialBtn>
            </div>
            <p className="footer-copyright">
              © 2025 Copyright Connecteed
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
