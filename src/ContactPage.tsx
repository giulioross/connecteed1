import React, { useState } from "react";
import { ContactFormData, FormStatus } from "./types";
import sfondoContattaci from "./assets/sfondoContattaci.svg";
import Footer from "./Footer";

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

  const inputClasses =
    "w-full bg-transparent text-white placeholder-white/70 text-[16px] leading-[24px] " +
    "h-[56px] border-b border-white/40 focus:border-white outline-none " +
    "transition-colors duration-200";

  return (
    <>
      <section
        className="w-full min-h-[920px] flex justify-center text-white"
        style={{
          backgroundImage: `url(${sfondoContattaci})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingTop: "218.5px",
        }}
      >
        <div
          className="w-full max-w-[1440px] px-[40px] pt-[0px] pb-[40px] box-border flex gap-[142px]"
          style={{
            minHeight: "920px",
            marginBottom: 0,
          }}
        >
          {/* COLONNA SINISTRA – 668px */}
          <div className="w-[668px] flex flex-col">
            {/* TITOLO – 668 x 186 Hug */}
            <h2
              style={{
                width: 668,
                fontFamily: "Host Grotesk, system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 40,
                lineHeight: "48px",
                color: "#FFFFFF",
                marginBottom: 16, // 39.5 circa dal bordo top, gestito dal pt-[40px]
              }}
            >
              Teniamoci in contatto
            </h2>

            {/* PARAGRAFO DESCRITTIVO */}
            <p
              style={{
                width: 668,
                fontFamily: "Host Grotesk, system-ui, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "26px",
                color: "#FFFFFF",
                marginBottom: 40, // distanza fino alle card contatto
                minHeight: 186,
              }}
            >
              Siamo a un messaggio di distanza!
              <br />
              Scrivici tramite il form e il nostro team ti ricontatterà rapidamente.
              Che si tratti di informazioni, supporto o curiosità sul nostro
              prodotto, siamo felici di darti una mano.
            </p>

            {/* CARD – SEDE LEGALE (668 Fill x 72 Hug, gap verticale 24) */}
            <div className="w-[668px] border-b border-white/25 pb-[24px] mb-[24px] flex items-start gap-[16px]">
              <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full border border-white/40 text-[18px]">
                📍
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "Host Grotesk, system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: "#FFFFFF",
                    marginBottom: 2,
                  }}
                >
                  Sede legale
                </div>
                <div
                  style={{
                    fontFamily: "Host Grotesk, system-ui, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: "22px",
                    color: "#FFFFFF",
                  }}
                >
                  Via della Conciliazione, 44 00193 – Roma
                </div>
              </div>
            </div>

            {/* CARD – EMAIL (stesse misure della card sopra) */}
            <div className="w-[668px] border-b border-white/25 pb-[24px] flex items-start gap-[16px]">
              <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full border border-white/40 text-[18px]">
                ✉️
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "Host Grotesk, system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: "#FFFFFF",
                    marginBottom: 2,
                  }}
                >
                  Email
                </div>
                <a
                  href="mailto:contact@connecteed.com"
                  style={{
                    fontFamily: "Host Grotesk, system-ui, sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: "22px",
                    color: "#FFFFFF",
                    textDecoration: "underline",
                  }}
                >
                  contact@connecteed.com
                </a>
              </div>
            </div>
          </div>

          {/* COLONNA DESTRA – FORM 550px */}
          <div className="w-[550px]">
            <form onSubmit={handleSubmit} className="w-[550px]">
              {/* 5 CAMPI STACKATI, NESSUN GAP VERTICALE VISIBILE */}
              <div className="space-y-0">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Nome E Cognome"
                  className={inputClasses}
                  required
                  style={{ marginBottom: 0 }}
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nome E Cognome"
                  className={inputClasses}
                  style={{ marginBottom: 0 }}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Nome E Cognome"
                  className={inputClasses}
                  required
                  style={{ marginBottom: 0 }}
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Nome E Cognome"
                  className={inputClasses}
                  style={{ marginBottom: 0 }}
                />
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Nome E Cognome"
                  className={inputClasses}
                  style={{ marginBottom: 0 }}
                />
              </div>

              {/* 40px tra ultimo campo e blocco Termini & Condizioni */}
              <div className="mt-[40px] mb-[24px]">
                <span
                  className="block mb-[8px]"
                  style={{
                    fontFamily: "Host Grotesk, system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: "#FFFFFF",
                  }}
                >
                  Termini e Condizioni*
                </span>

                <label className="flex items-start gap-[12px] cursor-pointer">
                  {/* Checkbox 16x16 */}
                  <div className="relative flex items-center mt-[4px]">
                    <input
                      type="checkbox"
                      name="agreedToTerms"
                      checked={formData.agreedToTerms}
                      onChange={handleCheckboxChange}
                      className="
                      peer h-[16px] w-[16px]
                      cursor-pointer appearance-none
                      border border-white/60
                      bg-transparent
                    "
                    />
                    <svg
                      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <p
                    style={{
                      fontFamily: "Host Grotesk, system-ui, sans-serif",
                      fontWeight: 400,
                      fontSize: 12,
                      lineHeight: "18px",
                      color: "#FFFFFF",
                    }}
                  >
                    Autorizzo il trattamento dei miei dati personali secondo quanto
                    riportato nell&apos;informativa ai sensi del Decreto
                    legislativo 30 Giugno 2003, n. 196
                  </p>
                </label>
              </div>

              {/* BOTTONE – 550 Fill x 56 (all’interno del blocco da 192 Hug complessivo) */}
              <button
                type="submit"
                disabled={status === FormStatus.SUBMITTING}
                className="
                w-full
                h-[56px]
                rounded-full
                bg-[#FFD7C6]
                text-[#020b2d]
                text-[16px]
                font-medium
                tracking-[0.01em]
                shadow-[0_0_20px_rgba(255,215,198,0.5)]
                transition-transform
                hover:scale-[1.01]
                active:scale-[0.99]
                disabled:opacity-70
                disabled:cursor-not-allowed
              "
                style={{ marginTop: 0 }}
              >
                {status === FormStatus.SUBMITTING ? "Invio in corso..." : "Text"}
              </button>

              {status === FormStatus.SUCCESS && (
                <div className="mt-4 text-green-400 text-center text-sm font-medium">
                  Messaggio inviato con successo!
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
      <Footer noFixedHeight={true} />
      {/* RIMUOVI eventuali altri componenti dopo il footer */}
    </>
  );
};

export { ContactForm };
