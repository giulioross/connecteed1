import React from "react";
// import bg from "./assets/Artboard1.png";

export default function ContactPage() {
  return (
    <section
      className="w-full min-h-screen flex flex-col lg:flex-row"
      style={{
        backgroundColor: '#051b3b', // Fallback color
        backgroundImage: `url('/assets/Artboard 1.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Colonna sinistra */}
      <div className="w-full lg:w-1/2 bg-black/80 text-white px-10 py-16 flex flex-col justify-between rounded-tr-[32px] rounded-br-[32px]">
        <div className="space-y-6">
          {/* Badge disponibile */}
          <div className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-4 py-1 rounded-full">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
            Sempre disponibili
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Teniamoci in contatto
          </h2>

          <p className="text-white/90 text-base leading-relaxed max-w-md">
            Siamo a un messaggio di distanza! Scrivici tramite il form e il nostro team ti ricontatterà rapidamente. Che si tratti di informazioni, supporto o curiosità sul nostro prodotto, siamo felici di darti una mano.
          </p>
        </div>

        <div className="mt-16 space-y-8 text-sm md:text-base">
          {/* Indirizzo */}
          <div className="flex items-start gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10c0 7.5-7.5 11-7.5 11S4.5 17.5 4.5 10a7.5 7.5 0 1115 0z"
              />
            </svg>
            <div>
              <p className="font-semibold">Sede legale</p>
              <p className="text-white/80">
                Via della Conciliazione, 44<br />00193 – Roma
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <div>
              <p className="font-semibold">Email</p>
              <a
                href="mailto:contact@connecteed.com"
                className="text-white/80 underline underline-offset-2"
              >
                contact@connecteed.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Colonna destra */}
      <div className="w-full lg:w-1/2 bg-white text-black p-10 md:p-16 rounded-tl-[32px] rounded-bl-[32px]">
        <form className="space-y-6 text-sm md:text-base">
          {/* Nome e Azienda */}
          <div>
            <label className="block font-medium mb-1">
              Nome e Cognome <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Inserisci il tuo nome completo"
              className="w-full border border-[#1d2a58] rounded-lg px-4 py-2 outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Azienda <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Inserisci il nome dell’azienda"
              className="w-full border border-[#1d2a58] rounded-lg px-4 py-2 outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Inserisci la tua email"
              className="w-full border border-[#1d2a58] rounded-lg px-4 py-2 outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Vogliamo capire la tua esigenza <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              placeholder="Per quale motivo ci contatti? Ci servirà ai fini della call di contatto"
              className="w-full border border-[#1d2a58] rounded-lg px-4 py-2 outline-none resize-none"
              required
            />
          </div>

          {/* Checkbox e CTA */}
          <div>
            <label className="inline-flex items-start gap-2 text-xs leading-snug">
              <input type="checkbox" required className="mt-1" />
              <span>
                Autorizzo il trattamento dei miei dati personali secondo quanto riportato
                nell’informativa ai sensi del Decreto legislativo 30 Giugno 2003, n. 196
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0045ff] hover:bg-[#0036cc] text-white py-3 mt-2 rounded-full font-semibold transition"
          >
            Invia messaggio
          </button>
        </form>
      </div>
    </section>
  );
}
