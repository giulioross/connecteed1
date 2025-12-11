import React, { useState } from "react";
import { ContactFormData, FormStatus } from "./types";
import Footer from "./Footer";
import videoBg from "./assets/Composizione1.mp4";

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

  return (
    <div style={{ position: "relative", marginBottom: 32 }}>
      <label
        htmlFor={name}
        style={{
          position: "absolute",
          left: 0,
          top: isActive ? -18 : 16,
          fontSize: isActive ? 14 : 20,
          color: isActive ? "#D7EBFF" : "#F5F4F9",
          fontFamily: "Host Grotesk, system-ui, sans-serif",
          fontWeight: 400,
          lineHeight: isActive ? "18px" : "28px",
          transition: "all 0.22s cubic-bezier(.4,0,.2,1)",
          pointerEvents: "none",
        }}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-transparent text-white text-[16px] leading-[28px] h-[56px] border-b border-white focus:border-white outline-none transition-colors duration-200 px-0"
        style={{
          fontFamily: "Host Grotesk, system-ui, sans-serif",
          fontWeight: 400,
          fontSize: 20,
          lineHeight: "28px",
          border: "none",
          borderBottom: "2px solid #fff",
          background: "transparent",
          color: "#fff",
        }}
        autoComplete="off"
        // Mostra il placeholder solo se la label non è attiva
        placeholder={isActive ? "" : ""}
      />
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

  const labelStyle: React.CSSProperties = {
    fontFamily: "Host Grotesk, system-ui, sans-serif",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "22px",
    color: "#FFFFFF",
    marginBottom: 4,
  };

  const inputClasses =
    "w-full bg-transparent text-white text-[16px] leading-[24px] " +
    "h-[56px] border-b border-white/40 focus:border-white outline-none " +
    "transition-colors duration-200 placeholder-white/40";

  return (
    <>
      <section
        className="relative w-full min-h-[920px] flex justify-center text-white overflow-hidden"
      >
        {/* VIDEO DI SFONDO */}
        <video
          src={videoBg}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* OVERLAY SCURO PER LEGGIBILITÀ */}
        <div
          className="absolute inset-0 z-10"
          style={{ background: "rgba(2, 11, 45, 0.78)" }}
        />

        {/* CONTENUTO */}
        <div
          className="relative z-20 w-full max-w-[1440px] px-[40px] pt-[0px] pb-[40px] box-border flex gap-[142px]"
          style={{
            marginTop: 236,
            minHeight: "920px",
            marginBottom: 0,
          }}
        >
          {/* COLONNA SINISTRA – TESTO */}
          <div className="w-[668px] flex flex-col">
            <h2
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

            {/* CARD – SEDE LEGALE */}
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

            {/* CARD – EMAIL */}
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

          {/* COLONNA DESTRA – FORM */}
          <div
            className="w-[550px] flex flex-col items-center"
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
              className="w-full flex flex-col"
              style={{
                width: 550,
                maxWidth: 550,
                gap: 0,
              }}
            >
              <FloatingInput
                label="Nome E Cognome"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
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

              {/* Termini e Condizioni */}
              <div className="mt-[24px]" style={{ marginBottom: 24 }}>
                <span
                  className="block font-medium text-[20px] leading-[28px] text-white mb-[8px]"
                  style={{
                    fontFamily: "Host Grotesk, system-ui, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Termini e Condizioni*
                </span>
                <label className="flex items-start gap-[16px] cursor-pointer">
                  <div className="relative flex items-center mt-[2px]">
                    <input
                      type="checkbox"
                      name="agreedToTerms"
                      checked={formData.agreedToTerms}
                      onChange={handleCheckboxChange}
                      required
                      className="peer h-[16px] w-[16px] cursor-pointer appearance-none border border-white bg-transparent rounded-[4px]"
                      style={{
                        borderRadius: 4,
                        border: "1px solid #F5F4F9",
                        background: "transparent",
                      }}
                    />
                    <svg
                      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5L7 10L4 7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p
                    className="font-normal text-[16px] leading-[24px] text-white"
                    style={{
                      fontFamily: "Host Grotesk, system-ui, sans-serif",
                      fontWeight: 400,
                      color: "#F5F4F9",
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
                style={{
                  background: "rgba(255,255,255,0.9)",
                  color: "#001b66",
                  border: "1px solid rgba(255,255,255,0.35)",
                  height: 40,
                  width: 108,
                  padding: "8px 16px",
                  borderRadius: 20,
                  fontFamily: "Host Grotesk, sans-serif",
                  fontSize: 16,
                  lineHeight: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition:
                    "background .18s ease, color .18s ease, transform .10s ease",
                  fontWeight: 400,
                  marginTop: 16,
                  boxShadow: "0_0_20px_rgba(255,255,255,0.35)",
                  opacity: status === FormStatus.SUBMITTING ? 0.7 : 1,
                }}
                className="
                  shadow-[0_0_20px_rgba(255,255,255,0.35)]
                  transition-transform
                  hover:scale-[1.01]
                  active:scale-[0.99]
                  disabled:cursor-not-allowed
                  mt-8
                "
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
      </section>

      <Footer noFixedHeight={true} />
    </>
  );
};

export { ContactForm };
