import React, { useState } from "react";
import { ContactFormData, FormStatus } from "./types";
import Footer from "./Footer";
import videoBg from "./assets/Composizione1.mp4";
import markerPin from "./assets/marker-pin-01.svg";
import mailIcon from "./assets/mail-01.svg";
import rectangleCheck from "./assets/Rectangle 42.svg";

// Campo input con label animata sopra la linea
function FloatingInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
}) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value;
  
  // Placeholder contestuale (omesso per brevità, resta invariato)
  let contextualPlaceholder = "";
  if (isActive && !value) {
    switch (name) {
      case "fullName":
        contextualPlaceholder = "Inserisci nome e cognome";
        break;
      case "company":
        contextualPlaceholder = "Inserisci azienda";
        break;
      case "email":
        contextualPlaceholder = "Inserisci email";
        break;
      case "phone":
        contextualPlaceholder = "Inserisci numero di telefono";
        break;
      case "message":
        contextualPlaceholder = "Inserisci il messaggio";
        break;
      default:
        contextualPlaceholder = "";
    }
  }

  return (
    // AGGIUNTO w-[288px] PER DESKTOP E MOBILE (sarà sovrascritto in mobile via CSS/JSX)
    <div className="floating-input-container w-[550px] md:w-[288px]" style={{ position: "relative", marginBottom: 32 }}>
      <label
        htmlFor={name}
        className="floating-label"
        style={{
          position: "absolute",
          left: 0,
          top: isActive ? -18 : 16,
          fontSize: isActive ? 14 : 20,
          color: isActive ? "#dcdcdc" : "#F5F4F9",
          fontFamily: "Host Grotesk, system-ui, sans-serif",
          fontWeight: 400,
          lineHeight: isActive ? "18px" : "28px",
          transition: "all 0.22s cubic-bezier(.4,0,.2,1)",
          pointerEvents: "none",
        }}
      >
        {label}
      </label>
      {name === "message" ? (
        <>
          <style>{`
            /* Nascondi scrollbar per textarea messaggio */
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
              /* Placeholder bianco per tutti gli input e textarea */
              .floating-input::placeholder,
              .floating-textarea::placeholder {
                color: #fff !important;
                opacity: 1 !important;
              }
          `}</style>
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            // LA LARGHEZZA w-full QUI È SOSTITUITA DA w-288px NEL CSS
            className="floating-textarea bg-transparent text-white text-[16px] leading-[28px] min-h-[56px] max-h-[200px] border-b border-white focus:border-white outline-none transition-colors duration-200 px-0 resize-y no-scrollbar"
            style={{
              fontFamily: "Host Grotesk, system-ui, sans-serif",
              fontWeight: 400,
              fontSize: 20,
              lineHeight: "28px",
              border: "none",
              borderBottom: "2px solid #fff",
              background: "transparent",
              color: "#fff",
              paddingTop: 8,
              paddingBottom: 8,
              resize: "vertical",
              overflowY: "auto",
              width: "100%", // Prende la larghezza del container (550px desktop)
            }}
            autoComplete="off"
            placeholder={contextualPlaceholder}
          />
        </>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          // LA LARGHEZZA w-full QUI È SOSTITUITA DA w-288px NEL CSS
          className="floating-input bg-transparent text-white text-[16px] leading-[28px] h-[56px] border-b border-white focus:border-white outline-none transition-colors duration-200 px-0"
          style={{
            fontFamily: "Host Grotesk, system-ui, sans-serif",
            fontWeight: 400,
            fontSize: 20,
            lineHeight: "28px",
            border: "none",
            borderBottom: "2px solid #fff",
            background: "transparent",
            color: "#fff",
            width: "100%", // Prende la larghezza del container (550px desktop)
          }}
          autoComplete="off"
          placeholder={contextualPlaceholder}
        />
      )}
    </div>
  );
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    agreedToTerms: false,
  });

  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, agreedToTerms: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreedToTerms) {
      alert("Devi accettare i termini e le condizioni.");
      return;
    }

    setStatus(FormStatus.SUBMITTING);

    setTimeout(() => {
      setStatus(FormStatus.SUCCESS);
      setTimeout(() => setStatus(FormStatus.IDLE), 3000);
      setFormData({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        message: "",
        agreedToTerms: false,
      });
    }, 1500);
  };

  return (
    <>
      <section
        className="relative w-full min-h-[920px] flex justify-center text-white overflow-hidden"
      >
        {/* VIDEO DI SFONDO (omesso per brevità, resta invariato) */}
        <video
          src={videoBg}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* OVERLAY SCURO (omesso per brevità, resta invariato) */}
        <div
          className="absolute inset-0 z-10"
          style={{ background: "rgba(2, 11, 45, 0.78)" }}
        />

        {/* CONTENUTO */}
        <div
          className="relative z-20 w-full max-w-[1440px] px-[40px] pt-[0px] pb-[40px] box-border flex gap-[142px] contact-form-container"
          style={{
            marginTop: 150,
            minHeight: "920px",
            marginBottom: 0,
          }}
        >
          {/* COLONNA SINISTRA – TESTO (omesso per brevità, resta invariato) */}
          <div className="text-column w-[668px] flex flex-col">
            <h2
              className="contact-title"
              style={{
                width: 668,
                fontFamily: "Host Grotesk, system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 40,
                lineHeight: "48px",
                color: "#FFFFFF",
                marginBottom: 16,
              }}
            >
              Teniamoci in contatto
            </h2>

            <p
              className="contact-description"
              style={{
                width: 668,
                fontFamily: "Host Grotesk, system-ui, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "26px",
                color: "#FFFFFF",
                marginBottom: 40,
                minHeight: 186,
              }}
            >
              Siamo a un messaggio di distanza!
              <br />
              Scrivici tramite il form e il nostro team ti ricontatterà rapidamente.
              Che si tratti di informazioni, supporto o curiosità sul nostro
              prodotto, siamo felici di darti una mano.
            </p>

            {/* CARD – SEDE LEGALE (omesso per brevità, resta invariato) */}
            <div className="contact-info-card w-[668px] border-b border-white/25 pb-[24px] mb-[24px] flex items-start gap-[16px] ">
              <div className="contact-icon w-[32px] h-[32px] flex items-center justify-center">
                <img src={markerPin} alt="Sede legale" style={{ width: 24, height: 24 }} />
              </div>
              <div className="contact-info-text," style={{ textAlign: "left" }}>
                <div
                  className="contact-info-title"
                  style={{
                    fontFamily: "Host Grotesk, system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: "#FFFFFF",
                    marginBottom: 2,
                    textAlign: "left",
                  }}
                >
                  Sede legale
                </div>
                <div
                  className="contact-info-value"
                  style={{
                    fontFamily: "Host Grotesk, system-ui, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: "22px",
                    color: "#FFFFFF",
                    textAlign: "left",
                  }}
                >
                  Via della Conciliazione, 44 00193 – Roma
                </div>
              </div>
            </div>

            {/* CARD – EMAIL (omesso per brevità, resta invariato) */}
            <div className="contact-info-card w-[668px] border-b border-white/25 pb-[24px] flex items-start gap-[16px]">
              <div className="contact-icon w-[32px] h-[32px] flex items-center justify-center">
                <img src={mailIcon} alt="Email" style={{ width: 24, height: 24 }} />
              </div>
              <div className="contact-info-text" style={{ textAlign: "left" }}>
                <div
                  className="contact-info-title"
                  style={{
                    fontFamily: "Host Grotesk, system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: "#FFFFFF",
                    marginBottom: 2,
                    textAlign: "left",
                  }}
                >
                  Email
                </div>
                <a
                  href="mailto:contact@connecteed.com"
                  className="contact-info-value contact-email-link"
                  style={{
                    fontFamily: "Host Grotesk, system-ui, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: "22px",
                    color: "#FFFFFF",
                    textDecoration: "underline",
                    textAlign: "left",
                  }}
                >
                  contact@connecteed.com
                </a>
              </div>
            </div>
          </div>

          {/* COLONNA DESTRA – FORM */}
          <div
            className="form-column w-[550px] flex flex-col items-center"
            style={{
              minWidth: 550,
              maxWidth: 550,
              background: "transparent",
              padding: "0",
              color: "#FFFFFF",
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="contact-form w-full flex flex-col"
              style={{
                width: 550,
                maxWidth: 550,
                gap: 0,
              }}
            >
              {/* Gli input ora hanno la classe w-[288px] in mobile grazie al CSS */}
              <FloatingInput
                label="Nome E Cognome"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <FloatingInput
                label="Azienda"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
              <FloatingInput
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <FloatingInput
                label="Numero Di Telefono"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <FloatingInput
                label="Messaggio"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              {/* Termini e Condizioni (omesso per brevità, resta invariato) */}
              <div className="terms-container mt-[24px]" style={{ marginBottom: 24 }}>
                <span
                  className="terms-title block font-medium text-[20px] leading-[28px] text-white mb-[8px]"
                  style={{
                    fontFamily: "Host Grotesk, system-ui, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Termini e Condizioni*
                </span>
                <label
                  className="terms-checkbox flex gap-[12px] cursor-pointer terms-container"
                  style={{ alignItems: "flex-start" }}
                >
                  <div
                    className="relative"
                    style={{
                      height: 24,
                      marginTop: 4,
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <input
                      type="checkbox"
                      name="agreedToTerms"
                      checked={formData.agreedToTerms}
                      onChange={handleCheckboxChange}
                      required
                      className="peer h-[16px] w-[16px] cursor-pointer appearance-none border border-white bg-transparent rounded-[4px]"
                      style={{
                        borderRadius: 4,
                        border: "1px solid #ffffffff",
                        background: "transparent",
                        verticalAlign: "top",
                        marginTop: 4,
                        marginBottom: 0,
                        display: "block",
                      }}
                    />
                    {/* Rectangle SVG check custom */}
                    {formData.agreedToTerms && (
                      <img
                        src={rectangleCheck}
                        alt="Checkbox checked"
                        className="checkbox-checked"
                        style={{
                          position: "absolute",
                          left: "52.5%",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                          width: 12,
                          height: 12,
                          pointerEvents: "none",
                        }}
                      />
                    )}
                  </div>
                  <p
                    className="terms-text font-normal text-[16px] leading-[24px] text-white"
                    style={{
                      fontFamily: "Host Grotesk, system-ui, sans-serif",
                      fontWeight: 400,
                      color: "#F5F4F9",
                      margin: 0,
                      paddingTop: 2,
                      lineHeight: "24px",
                      display: "block",
                    }}
                  >
                    Autorizzo il trattamento dei miei dati personali secondo quanto
                    riportato nell&apos;informativa ai sensi del Decreto legislativo
                    30 Giugno 2003, n. 196
                  </p>
                </label>
              </div>

              {/* Button */}

              <button
                type="submit"
                disabled={status === FormStatus.SUBMITTING}
                className="contact-form-btn navbar-contact"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  color: "#001b66",
                  border: "1px solid rgba(255,255,255,0.35)",
                  height: 40,
                  padding: "8px 16px",
                  borderRadius: 20,
                  fontFamily: 'Host Grotesk, sans-serif',
                  fontSize: 16,
                  lineHeight: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background .18s ease, color .18s ease, transform .10s ease",
                  minWidth: 0,
                  width: "auto"
                }}
              >
                {status === FormStatus.SUBMITTING ? "Invio in corso..." : "Invia messaggio"}
              </button>

              {status === FormStatus.SUCCESS && (
                <div className="mt-2 text-green-400 text-center text-sm font-medium">
                  Messaggio inviato con successo!
                </div>
              )}
            </form>
          </div>
        </div>

        {/* STILI MOBILE AGGIORNATI CON W-288PX E STILI BOTTONE */}
        <style>{`
          .navbar-contact {
            background: rgba(255,255,255,0.9);
            color: #001b66;
            border: 1px solid rgba(255,255,255,0.35);
            height: 40px;
            padding: 8px 16px;
            border-radius: 20px;
            font-family: "Host Grotesk", sans-serif;
            font-size: 16px;
            line-height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background .18s ease, color .18s ease, transform .10s ease;
            width: auto;
            min-width: 0;
          }
          .navbar-contact:hover {
            background: #D7EBFF;
            color: #001B66;
          }
          .navbar-contact:active {
            background: #4FA1FF;
            color: white;
            transform: scale(0.97);
          }
          @media (max-width: 768px) {
            .contact-form-container {
              flex-direction: column !important;
              gap: 40px !important;
              padding: 0 16px !important; 
              margin-top: 96px !important;
              padding-bottom: 40px !important;
              min-height: auto !important;
            }

            .text-column {
              width: 100% !important;
              max-width: 100% !important;
              order: 1 !important;
            }

            .contact-title {
              width: 100% !important;
              font-size: 24px !important; 
              line-height: 32px !important;
              margin-bottom: 12px !important;
              font-weight: 700 !important;
            }

            .contact-description {
              width: 100% !important;
              font-size: 14px !important;
              line-height: 22px !important;
              margin-bottom: 32px !important;
              min-height: auto !important;
            }

            /* Sezione Informazioni (omessa per brevità, resta invariata) */
            .contact-info-card {
              width: 100% !important;
              margin-bottom: 20px !important;
              padding-bottom: 16px !important;
            }
            .contact-info-card:first-of-type { border-bottom: 1px solid rgba(255, 255, 255) !important; }
            .contact-info-card:nth-of-type(2) { border-bottom:1px solid rgba(255, 255, 255) !important; margin-bottom: 0 !important; }
            .contact-icon { width: 24px !important; height: 24px !important; min-width: 24px !important; padding-top: 0px !important; margin-right: 0px !important; }
            .contact-icon img { width: 20px !important; height: 20px !important; }
            .contact-info-title { font-size: 14px !important; line-height: 20px !important; margin-bottom: 4px !important; font-weight: 600 !important; }
            .contact-info-value, .contact-email-link { font-size: 13px !important; line-height: 20px !important; font-weight: 400 !important; }


            /* Sezione Form */
            .form-column {
              width: 100% !important;
              max-width: 100% !important;
              min-width: auto !important;
              order: 2 !important;
              padding: 0 !important;
            }

            .contact-form {
              width: 100% !important;
              max-width: 100% !important;
            }

            /* 💥 CAMBIO CHIAVE: LARGHEZZA INPUT A 288PX 💥 */
            .floating-input-container {
              width: 288px !important; /* Forza il container a 288px */
              max-width: 100% !important; /* Rende il container responsivo se la viewport è minore di 288px */
              margin-bottom: 24px !important;
            }

            /* Etichetta (Label) */
            .floating-label {
              line-height: 24px !important; 
              transition: all 0.22s cubic-bezier(.4,0,.2,1) !important;
            }

            /* Regola l'animazione della label in base al suo stato (vuota/piena) */
            .floating-input-container > .floating-label[style*="top: 16px"] {
                top: 12px !important; 
                font-size: 16px !important; 
                
            }
             .floating-input-container > .floating-label[style*="top: -18px"] {
                top: -12px !important; 
                font-size: 14px !important; 
                              width: 288px !important; /* Forza il container a 288px */

            }

            /* Input/Textarea Fields */
            .floating-input,
            .floating-textarea {
                          width: 360px !important; /* Forza il container a 288px */

              /* L'input eredita width: 100% dal suo stile inline, che è il 100% del container (288px) */
              font-size: 16px !important; 
              line-height: 24px !important;
              height: 48px !important;
              border-bottom: 1px solid rgba(255, 255, 255) !important; 
              padding-top: 8px !important; 
              padding-bottom: 8px !important;
              
              /* Rimuove i bordi desktop */
              border-width: 0 !important; 
              border-bottom-width: 1px !important; /* Riabilita il bordo inferiore mobile */
            }
            
            .floating-textarea {
              min-height: 48px !important;
              max-height: 150px !important;
              resize: vertical !important;
            }

            /* Termini e Condizioni (omesso per brevità, resta invariato) */
            .terms-container { margin-top: 24px !important; margin-bottom: 24px !important; width: 100% !important; }
            .terms-title { font-size: 16px !important; line-height: 24px !important; margin-bottom: 8px !important; }
            .terms-text { font-size: 13px !important; line-height: 20px !important; padding-top: 0 !important; }
            .terms-checkbox .relative { margin-top: 2px !important; }
            .terms-checkbox input[type="checkbox"] { width: 16px !important; height: 16px !important; margin-top: 2px !important; }
            .checkbox-checked { width: 12px !important; height: 12px !important; }


            /* Bottone */
            .contact-form-btn {
              width: 100% !important;
              max-width: 288px !important;
              margin-top: 8px !important;
              background: none;
              border: none;
              box-shadow: none;
              padding: 0;
            }
              /* Termini e Condizioni */
             .terms-container { 
                width: 288px !important; /* Allineato agli input */
                max-width: 100% !important;
                margin-top: 24px !important; 
                margin-bottom: 24px !important; 
                max-height: 212px !important;
                height: auto !important;
            }
            .terms-title { font-size: 16px !important; line-height: 24px !important; margin-bottom: 8px !important; }
            .terms-text { font-size: 13px !important; line-height: 20px !important; padding-top: 0 !important; }
            .terms-checkbox .relative { margin-top: 2px !important; }
            .terms-checkbox input[type="checkbox"] { width: 16px !important; height: 16px !important; margin-top: 2px !important; }
            .checkbox-checked { width: 12px !important; height: 12px !important; }
          }
          }
        `}</style>
      </section>

      <Footer />
    </>
  );
};

export { ContactForm };