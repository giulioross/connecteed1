import React from "react";
import logo from "./assets/Logo (1).svg";
import footerBg from "./assets/Footer (1).svg";
import "./Footer.css";
import {
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
} from "./Icons";
function SocialBtn({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="w-[48px] h-[48px] rounded-[14px] border border-white/40 flex items-center justify-center transition-colors duration-200"
      style={{ position: "relative" }}
      onMouseDown={e => e.currentTarget.style.background = "#07205F"}
      onMouseUp={e => e.currentTarget.style.background = "#2877FF"}
      onMouseLeave={e => e.currentTarget.style.background = ""}
      onFocus={e => e.currentTarget.style.background = "#2877FF"}
      onBlur={e => e.currentTarget.style.background = ""}
      onMouseOver={e => e.currentTarget.style.background = "#2877FF"}
    >
      <div className="w-[20px] h-[20px] text-white opacity-90">{children}</div>
    </a>
  );
}

export default function Footer({ noFixedHeight = false }: { noFixedHeight?: boolean } = {}) {
  return (
<footer
  className="w-full text-white flex justify-center overflow-hidden"
  style={{
    fontFamily: "Host Grotesk, system-ui, sans-serif",
    background: `
      radial-gradient(circle at right bottom, rgb(123, 152, 231) 13%, rgb(0, 61, 214) 36%, rgb(1, 15, 28) 69%, rgb(1, 15, 28) 80%)
    `,
  }}
>


      {/* FRAME 1440 × 746 */}
      <div className="w-full h-full max-w-[1440px] px-[40px] pt-[40px] pb-[40px] box-border flex flex-col justify-between">
        {/* ----------------- BLOCCO SUPERIORE ----------------- */}
        <div className="flex w-full">
          {/* COLONNA SINISTRA – larghezza visiva 1179px */}
          <div className="w-[1179px] flex flex-col items-start">
            {/* Logo: 32px di spazio sotto */}
            <div className="mb-[32px]">
              <img src={logo} alt="Logo" className="w-[72px] h-[72px]" />
            </div>

            {/* TITOLO */}
            <h1
              style={{
                width: 883,
                height: 144,
                fontFamily: "Host Grotesk, system-ui, sans-serif",
                fontWeight: 400,
                fontSize: 64,
                lineHeight: "72px",
                letterSpacing: "0px",
                color: "rgba(248,250,255,0.98)",
                marginBottom: 48,
                textAlign: "left",
                marginTop: 0,
                display: "block",
              }}
            >
              Tecnologia che Unisce,
              <br />
              Automatizza e fa Crescere.
            </h1>

            {/* BLOCCO INDIRIZZO + CONTATTI */}
            <div className="flex flex-col gap-[24px] items-start w-full">
              {/* INDIRIZZO */}
              <div className="flex flex-col gap-[4px] items-start">
                {/* Label: Bold 18 / 26, bianco */}
                <span
                  style={{
                    fontFamily: "Host Grotesk, system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                    lineHeight: "26px",
                    letterSpacing: "0px",
                    color: "#FFFFFF",
                  }}
                >
                  Indirizzo
                </span>

                {/* Testo: Regular 16 / 24, Neutral/300 chiaro */}
                <p
                  style={{
                    
                    fontFamily: "Host Grotesk, system-ui, sans-serif",
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    color: "rgba(248,250,255,0.80)",
                  }}
                >
                  Via della Conciliazione, 44
                  
                  00193 – Roma IT
                </p>
              </div>

              {/* CONTATTI */}
              <div className="flex flex-col gap-[4px] items-start">
                {/* Label: Bold 18 / 26, bianco */}
                <span
                  style={{
                    fontFamily: "Host Grotesk, system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                    lineHeight: "26px",
                    letterSpacing: "0px",
                    color: "#FFFFFF",
                  }}
                >
                  Contatti
                </span>

                {/* Email: Regular 16 / 24, underline */}
                <a
                  href="mailto:contact@connecteed.com"
                  style={{
                    fontFamily: "Host Grotesk, system-ui, sans-serif",
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    color: "rgba(248,250,255,0.80)",
                    textDecoration: "underline",
                  }}
                  className="hover:text-white transition-colors"
                >
                  contact@connecteed.com
                </a>

                {/* PEC: Regular 16 / 24 */}
                <span
                  style={{
                    fontFamily: "Host Grotesk, system-ui, sans-serif",
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    color: "rgba(248,250,255,0.80)",
                  }}
                >
                  Pec: progetriosrl@pec.it
                </span>
              </div>
            </div>
          </div>

          {/* COLONNA DESTRA – MENU A CHIP */}
          <div className="flex flex-col items-end justify-start w-[181px] h-[432px]">
            
            <nav
              className="flex flex-col items-end gap-[16px]"
              aria-label="Footer navigation"
            >
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
                  style={{
                    fontFamily: "Host Grotesk, system-ui, sans-serif",
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    color: "#FFFFFF",
                    textAlign: "left",
                    width: "fit-content",
                    height: 40,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 8,
                    paddingBottom: 8,
                  }}
                  className="flex items-center justify-start"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* ----------------- BLOCCO INFERIORE ----------------- */}
        <div className="relative w-full flex items-end justify-between">
          {/* Testo legale in basso a sinistra – Regular 16 / 24, Neutral/10 */}
          <div className="flex flex-col gap-[4px]" style={{ textAlign: 'left', maxWidth: 360 }}>
            <span
              style={{
                fontFamily: "Host Grotesk, system-ui, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "24px",
                color: "rgba(248,250,255,0.70)",
                marginBottom: "99px",
              }}
            >
              Connecteed S.r.l. PMI innovativa – società benefit
            </span>
            <span
              style={{
                fontFamily: "Host Grotesk, system-ui, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "24px",
                color: "rgba(248,250,255,0.70)",
                
              }}
            >
              P IVA: IT15798401004
            </span>
            <span
              style={{
                fontFamily: "Host Grotesk, system-ui, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "24px",
                color: "rgba(248,250,255,0.70)",
              }}
            >
              Numero REA: RM-1614796
            </span>
            <span
              style={{
                fontFamily: "Host Grotesk, system-ui, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "24px",
                color: "rgba(248,250,255,0.70)",
                 // <-- SPAZIO DI 99px
                display: "block"
              }}
            >
              Capitale sociale €5.437.953,14
            </span>
          </div>

          {/* Copyright centrato rispetto al frame 1440 – Regular 16 / 24 */}
          <p
            className="absolute left-1/2 -translate-x-1/2 text-center"
            style={{
              fontFamily: "Host Grotesk, system-ui, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "24px",
              color: "rgba(248,250,255,0.80)",
            }}
          >
            © 2025 Copyright Connecteed
          </p>

          {/* Social in basso a destra – card 48×48, gap 16 */}
          <div className="flex gap-[16px]">
            <SocialBtn label="LinkedIn">
              <LinkedInIcon />
            </SocialBtn>
            <SocialBtn label="Instagram">
              <InstagramIcon />
            </SocialBtn>
            <SocialBtn label="Facebook">
              <FacebookIcon />
            </SocialBtn>
          </div>
        </div>
      </div>
    </footer>
  );
}

