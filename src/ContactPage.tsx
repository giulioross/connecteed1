import React, { useMemo, useState } from "react";
import { ContactFormData, FormStatus } from "./types";
import Footer from "./Footer";
import videoBg from "./assets/Composizione1.mp4";
import markerPin from "./assets/marker-pin-01.svg";
import mailIcon from "./assets/mail-01.svg";
import rectangleCheck from "./assets/Rectangle 42.svg";

/* =========================
   CSS INLINE (stesso metodo: root + before/after)
   ========================= */
const pageStyles = `
  /* ROOT come nelle altre pagine */
  html, body, #root {
    width: 100vw;
    max-width: 100vw;
    overflow-x: hidden;
    box-sizing: border-box;
  }
  *, *::before, *::after { box-sizing: border-box; }

  /* ============ PAGE WRAPPER (before/after) ============ */
  .contact-page {
    position: relative;
    isolation: isolate;
    overflow-x: clip;
  }

  /* Glow decorativi dietro */
  .contact-page::after{
    content:"";
    position:absolute;
    z-index: 1;          /* sopra video (0), sotto overlay (10) e contenuto (20) */
    pointer-events:none;
    display:block;
  }

  .contact-page::before{
    width: 520px;
    height: 520px;
    top: -160px;
    right: -180px;
    background: radial-gradient(circle at 30% 30%, rgba(0, 61, 214, 0.18), rgba(0, 61, 214, 0) 60%);
  }

  .contact-page::after{
    width: 520px;
    height: 520px;
    bottom: -220px;
    left: -200px;
    background: radial-gradient(circle at 40% 40%, rgba(255,255,255,0.10), rgba(255,255,255,0) 60%);
  }

  /* placeholder bianco */
  .floating-input::placeholder,
  .floating-textarea::placeholder {
    color: #fff !important;
    opacity: 1 !important;
  }

  /* Nascondi scrollbar textarea */
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }

  /* CTA button (stile coerente) */
  .navbar-contact {
    background: rgba(255,255,255,0.9);
    color: #001b66;
    border: 1px solid rgba(255,255,255,0.35);
    height: 40px;
    padding: 8px 16px;
    border-radius: 20px;
    font-family: "Host Grotesk", system-ui, sans-serif;
    font-size: 16px;
    line-height: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background .18s ease, color .18s ease, transform .10s ease;
    width: auto;
    min-width: 0;
  }
  .navbar-contact:hover { background: #D7EBFF; color: #001B66; }
  .navbar-contact:active { background: #4FA1FF; color: #fff; transform: scale(0.97); }

  /* =====================================================
   DESKTOP FLUIDO 1025px → 1439px
   Stesso layout 1440px, ma senza overflow
   ===================================================== */
  @media (min-width: 1025px) and (max-width: 1439px) {
    .contact-form-container {
      gap: 80px !important;
      padding-left: 40px !important;
      padding-right: 40px !important;
    }
    .text-column {
      width: auto !important;
      max-width: 620px !important;
      flex: 1 1 0;
    }
    .form-column {
      width: auto !important;
      max-width: 520px !important;
      min-width: 0 !important;
      flex: 1 1 0;
    }
    .contact-form {
      width: 100% !important;
      max-width: 520px !important;
    }
  }

  /* ===========================================
    iPAD ONLY (portrait + landscape)
    641px – 1024px
    NON tocca desktop, NON tocca mobile
  =========================================== */
  @media (min-width: 641px) and (max-width: 1024px) {
    .contact-form-container {
      gap: 64px;
      padding-left: 32px;
      padding-right: 32px;
    }
    .text-column {
      width: auto !important;
      max-width: 100% !important;
      flex: 1 1 0;
    }
    .form-column {
      width: auto !important;
      max-width: 520px !important;
      min-width: 0 !important;
      flex: 1 1 0;
    }
    .contact-title {
      font-size: 36px !important;
      line-height: 44px !important;
    }
    .contact-description {
      font-size: 18px !important;
      line-height: 26px !important;
      min-height: auto !important;
    }
    .floating-input-container {
      width: 100% !important;
      max-width: 100% !important;
    }
    .contact-form {
      width: 100% !important;
      max-width: 100% !important;
    }
  }

  /* ============ RESPONSIVE (mobile layout) ============ */
  @media (max-width: 900px) {
    .contact-page::before,
    .contact-page::after { display: none; }

    .contact-form-container {
      flex-direction: column !important;
      gap: 72px !important;
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
      margin-bottom: 16px !important;
      font-weight: 500 !important;
    }

    .contact-description {
      width: 100% !important;
      font-size: 16px !important;
      line-height: 24px !important;
      font-weight: 300 !important;
      color: #F5F4F9 !important;
      margin-bottom: 40px !important;
      min-height: auto !important;
    }

    .contact-info-card {
      width: 100% !important;
      margin-bottom: 20px !important;
      padding-bottom: 16px !important;
    }

    .contact-icon {
      width: 24px !important;
      height: 24px !important;
      min-width: 24px !important;
    }
    .contact-icon img { width: 20px !important; height: 20px !important; }

    .contact-info-title { font-size: 16px !important; line-height: 24px !important; margin-bottom: 4px !important; font-weight: 300 !important; }
    .contact-info-value, .contact-email-link { font-size: 13px !important; line-height: 20px !important; font-weight: 400 !important; }

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

    .floating-input-container {
      width: 288px !important;
      max-width: 100% !important;
      margin-bottom: 24px !important;
    }

    .floating-input,
    .floating-textarea {
      font-size: 16px !important;
      line-height: 24px !important;
      height: 48px !important;
      border-bottom: 1px solid rgba(255,255,255,1) !important;
      padding-top: 8px !important;
      padding-bottom: 8px !important;
      border-width: 0 !important;
      border-bottom-width: 1px !important;
    }

    .floating-textarea {
      min-height: 48px !important;
      max-height: 150px !important;
      resize: vertical !important;
      overflow-y: auto !important;
    }

    .terms-container {
      max-width: 100% !important;
      margin-top: 24px !important;
      margin-bottom: 24px !important;
    }
    .terms-text { font-size: 14px !important; line-height: 22px !important; }

    .contact-form-btn {
      width: 100% !important;
      max-width: 288px !important;
      margin-top: 8px !important;
      height: 48px !important;
    }
  }
`;

// Campo input con label animata
function FloatingInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
}: any) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value;

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
    <div
      className="floating-input-container  md:w-[288px]"
      style={{ position: "relative", marginBottom: 32 }}
    >
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
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
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
            paddingTop: 1,
            paddingBottom: 1,
            resize: "vertical",
            overflowY: "auto",
            width: "100%",
          }}
          autoComplete="off"
          placeholder={contextualPlaceholder}
        />
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
            width: "100%",
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
  const [errorMsg, setErrorMsg] = useState<string>("");


const apiBaseUrl = useMemo(() => {
  return import.meta.env.VITE_API_URL || "http://localhost:8086";
}, []);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, agreedToTerms: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.agreedToTerms) {
      alert("Devi accettare i termini e le condizioni.");
      return;
    }

    setStatus(FormStatus.SUBMITTING);

    try {
      // ⚠️ questo endpoint deve esistere nel tuo backend
      // esempio: POST http://localhost:8086/api/contact
      const res = await fetch(`${apiBaseUrl}/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          agreedToTerms: formData.agreedToTerms,
        }),
      });

      if (!res.ok) {
        // prova a leggere un messaggio dal backend
        let serverMsg = "";
        try {
          const data = await res.json();
          serverMsg = data?.message || "";
        } catch {
          // ignore
        }
        throw new Error(serverMsg || `Errore invio (${res.status})`);
      }

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
    } catch (err: any) {
      setStatus(FormStatus.ERROR as any); // se nel tuo enum non c'è ERROR, lasciamo messaggio e torniamo IDLE
      setErrorMsg(err?.message || "Errore durante l’invio. Riprova.");
      setTimeout(() => setStatus(FormStatus.IDLE), 2500);
    }
  };

  return (
    <>
      <style>{`
        ${pageStyles}
        input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type=number] {
          -moz-appearance: textfield;
        }
      `}</style>

      <section className="contact-page relative w-full min-h-[920px] flex justify-center text-white overflow-hidden">
        {/* VIDEO */}
        <video
          src={videoBg}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* OVERLAY SCURO */}
        <div className="absolute inset-0 z-10" style={{ background: "rgba(2, 11, 45, 0.78)" }} />

        {/* CONTENUTO */}
        <div
          className="relative z-20 w-full max-w-[1440px] px-[40px] pt-[0px] pb-[40px] box-border flex gap-[142px] contact-form-container"
          style={{ marginTop: 150, minHeight: "920px", marginBottom: 0 }}
        >
          {/* COLONNA SINISTRA */}
          <div className="text-column w-[668px] flex flex-col">
            <h2
              className="contact-title"
              style={{
                width: 668,
                fontFamily: "Host Grotesk, system-ui, sans-serif",
                fontWeight: 500,
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
                fontWeight: 300,
                fontSize: 20,
                lineHeight: "28px",
                color: "#f5f4f9",
                marginBottom: 40,
                minHeight: 186,
              }}
            >
              Siamo a un messaggio di distanza!
              <br />
              Scrivici tramite il form e il nostro team ti ricontatterà rapidamente.
              Che si tratti di informazioni, supporto o curiosità sul nostro prodotto,
              siamo felici di darti una mano.
            </p>

            <div className="contact-info-card w-[668px] border-b border-white/25 pb-[24px] mb-[24px] flex items-start gap-[16px]">
              <div className="contact-icon w-[32px] h-[32px] flex items-center justify-center">
                <img src={markerPin} alt="Sede legale" style={{ width: 24, height: 24 }} />
              </div>
              <div style={{ textAlign: "left" }}>
                <div
                  className="contact-info-title"
                  style={{
                    fontFamily: "Host Grotesk, system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: 20,
                    lineHeight: "28px",
                    color: "#f8faff",
                    marginBottom: 2,
                  }}
                >
                  Sede legale
                </div>
                <div
                  className="contact-info-value"
                  style={{
                    fontFamily: "Host Grotesk, system-ui, sans-serif",
                    fontWeight: 300,
                    fontSize: 16,
                    lineHeight: "20px",
                    color: "#f8faff",
                  }}
                >
                  Via della Conciliazione, 44 00193 – Roma
                </div>
              </div>
            </div>

            <div className="contact-info-card w-[668px] border-b border-white/25 pb-[24px] flex items-start gap-[16px]">
              <div className="contact-icon w-[32px] h-[32px] flex items-center justify-center">
                <img src={mailIcon} alt="Email" style={{ width: 24, height: 24 }} />
              </div>
              <div style={{ textAlign: "left" }}>
                <div
                  className="contact-info-title"
                  style={{
                    fontFamily: "Host Grotesk, system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: 20,
                    lineHeight: "28px",
                    color: "#f8faff",
                    marginBottom: 2,
                  }}
                >
                  Email
                </div>
                <a
                  href="mailto:info@connecteed.com"
                  className="contact-info-value contact-email-link"
                  style={{
                    fontFamily: "Host Grotesk, system-ui, sans-serif",
                    fontWeight: 300,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: "#f8faff",
                    textDecoration: "underline",
                  }}
                >
                  info@connecteed.com
                </a>
              </div>
            </div>
          </div>

          {/* COLONNA DESTRA */}
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
            <form onSubmit={handleSubmit} className="contact-form w-full flex flex-col" style={{ width: 550, maxWidth: 550 }}>
              <FloatingInput label="Nome E Cognome" name="fullName" value={formData.fullName} onChange={handleChange} required />
              <FloatingInput label="Azienda" name="company" value={formData.company} onChange={handleChange} />
              <FloatingInput label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              <FloatingInput label="Numero Di Telefono" name="phone" type="number" value={formData.phone} onChange={handleChange} required pattern="[0-9]*" inputMode="numeric" />
              <FloatingInput label="Messaggio" name="message" value={formData.message} onChange={handleChange} required />

              <div className="terms-container mt-[24px]" style={{ marginBottom: 24 }}>
                <label className="terms-checkbox flex gap-[12px] cursor-pointer terms-container" style={{ alignItems: "flex-start" }}>
                  <div className="relative" style={{ height: 24, marginTop: 4, display: "flex", alignItems: "flex-start" }}>
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
                        display: "block",
                      }}
                    />
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
                    Autorizzo il trattamento dei miei dati personali secondo quanto riportato nell&apos;informativa ai sensi del Decreto legislativo 30 Giugno 2003, n. 196
                  </p>
                </label>
              </div>

              <button type="submit" disabled={status === FormStatus.SUBMITTING} className="contact-form-btn navbar-contact">
                {status === FormStatus.SUBMITTING ? "Invio in corso..." : "Invia messaggio"}
              </button>

              {status === FormStatus.SUCCESS && (
                <div className="mt-2 text-green-400 text-center text-sm font-medium">
                  Messaggio inviato con successo!
                </div>
              )}

              {!!errorMsg && (
                <div className="mt-2 text-red-300 text-center text-sm font-medium">
                  {errorMsg}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export { ContactForm };
