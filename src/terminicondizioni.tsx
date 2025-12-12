
import React from "react"; 
import Footer from "./Footer";

const TerminiCondizioni: React.FC = () => {
  return (
    <>
      <main
        className="min-h-screen py-16"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #FFFFFF 0%, #B0DFFF 47%, #D3EFFF 100%)",
          paddingTop: "94px",
          paddingLeft: "40px",
          paddingRight: "40px",
          paddingBottom: "159px",
        }}
      >
        <article className="max-w-4xl mx-auto">
          <header className="text-center mb-16">
            <h1
              className="mb-4"
              style={{
                fontFamily: 'Host Grotesk, sans-serif',
                fontWeight: 500,
                fontSize: "72px",
                lineHeight: "80px",
                letterSpacing: 0,
                color: "#010F1C",
                marginBottom: "24px"
              }}
            >
              Termini E Condizioni
            </h1>
            <p className="text-terms-subtitle text-lg">
              Termini e condizioni di utilizzo del software SaaS
            </p>
          </header>
          {/* Articolo 4 */}
          <section>
            <h2 className="text-terms-article font-semibold mb-6" style={{ textAlign: 'left' }}>
              Articolo 4 – Corrispettivi e Pagamenti
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed" style={{ textAlign: 'left' }}>
              <p>
                4.1 I corrispettivi, le modalità e i termini di pagamento sono
                indicati nell'offerta economica accettata dal Cliente.
              </p>
              <p>
                4.2 Il mancato pagamento, anche parziale, delle somme dovute entro
                i termini concordati attribuisce al Provider il diritto di
                sospendere i servizi senza necessità di ulteriori comunicazioni.
              </p>
              <p>
                4.3 Restano impregiudicati i diritti del Provider alla richiesta
                di risarcimento degli eventuali danni derivanti dal ritardato o
                mancato pagamento.
              </p>
            </div>
          </section>

          {/* Articolo 5 */}
          <section>
            <h2 className="text-terms-article font-semibold mb-6" style={{ textAlign: 'left' }}>
              Articolo 5 – Obblighi Generali del Provider
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed" style={{ textAlign: 'left' }}>
              <p>Il Provider si impegna a:</p>
              <div className="pl-4 space-y-2">
                <p>a) garantire la continuità, regolarità e conformità del servizio secondo i livelli concordati;</p>
                <p>b) mantenere aggiornata l'infrastruttura tecnologica e garantire la conformità del Software agli standard di sicurezza;</p>
                <p>c) adottare misure tecniche e organizzative adeguate a protezione dei dati trattati.</p>
              </div>
            </div>
          </section>

          {/* Articolo 6 */}
          <section>
            <h2 className="text-terms-article font-semibold mb-6" style={{ textAlign: 'left' }}>
              Articolo 6 – Supporto e Assistenza Tecnica
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed" style={{ textAlign: 'left' }}>
              <p>
                6.1 Il Provider assicura, per tutta la durata contrattuale, i
                seguenti servizi inclusi nel canone:
              </p>
              <div className="pl-4 space-y-2">
                <p>supporto tecnico di secondo livello su funzionalità e procedure;</p>
                <p>correzione tempestiva di bug e anomalie operative;</p>
                <p>rilascio di aggiornamenti di sicurezza e patch;</p>
              </div>
            </div>
          </section>

          {/* Articolo 7 */}
          <section>
            <h2 className="text-terms-article font-semibold mb-6" style={{ textAlign: 'left' }}>
              Articolo 7 – Manutenzione e Aggiornamenti
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed" style={{ textAlign: 'left' }}>
              <p>7.1 La manutenzione ordinaria e straordinaria include:</p>
              <div className="pl-4 space-y-2">
                <p>interventi correttivi e di tuning del Software;</p>
                <p>adeguamenti alle evoluzioni tecnologiche di sistema.</p>
              </div>
            </div>
          </section>

          {/* Articolo 8 */}
          <section>
            <h2 className="text-terms-article font-semibold mb-6" style={{ textAlign: 'left' }}>
              Articolo 8 – Garanzie
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed" style={{ textAlign: 'left' }}>
              <p>
                8.1 Il Provider garantisce che il Software sarà conforme alle
                specifiche tecniche sottoscritte.
              </p>
              <p>
                8.2 In caso di malfunzionamenti imputabili al Provider, quest'ultimo
                si impegna a effettuare gratuitamente tutti gli interventi
                correttivi necessari.
              </p>
              <p>
                8.3 È esclusa qualsiasi garanzia implicita non espressamente
                prevista nel presente contratto.
              </p>
            </div>
          </section>

          {/* Articolo 9 */}
          <section>
            <h2 className="text-terms-article font-semibold mb-6" style={{ textAlign: 'left' }}>
              Articolo 9 – Proprietà Intellettuale
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed" style={{ textAlign: 'left' }}>
              <p>
                9.1 Tutti i diritti di proprietà intellettuale e industriale
                relativi al Software, ivi inclusi codice sorgente, documentazione,
                manuali, materiali tecnici e know-how, rimangono di esclusiva
                titolarità del Provider.
              </p>
              <p>
                9.2 Al Cliente è concesso un mero diritto d'uso limitato, non
                esclusivo, non trasferibile e revocabile, per la sola durata del
                contratto.
              </p>
            </div>
          </section>

          {/* Articolo 10 */}
          <section>
            <h2 className="text-terms-article font-semibold mb-6" style={{ textAlign: 'left' }}>
              Articolo 10 – Backup, Sicurezza e Responsabilità sui Dati
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed" style={{ textAlign: 'left' }}>
              <p>
                10.1 Il Provider esegue backup periodici secondo le proprie policy
                interne, salvo diverso accordo scritto.
              </p>
              <p>
                10.2 Il Cliente è responsabile della custodia e riservatezza delle
                proprie credenziali di accesso.
              </p>
              <p>
                10.3 Il Provider non risponde di perdite o danni ai dati causati
                da:
              </p>
              <div className="pl-4 space-y-2">
                <p>a) uso improprio o negligente da parte del Cliente;</p>
                <p>b) accessi non autorizzati conseguenti a condotte imputabili al Cliente.</p>
              </div>
            </div>
          </section>

          {/* Articolo 11 */}
          <section>
            <h2 className="text-terms-article font-semibold mb-6" style={{ textAlign: 'left' }}>
              Articolo 11 – Strumenti di Terze Parti
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed" style={{ textAlign: 'left' }}>
              <p>
                11.1 Il Provider non è responsabile di interruzioni o
                malfunzionamenti derivanti da software, API, servizi di hosting o
                infrastrutture di terze parti.
              </p>
              <p>
                11.2 Il Provider garantisce, nei limiti della documentazione
                fornita da tali terzi, l'integrazione e il corretto mantenimento
                delle connessioni tecniche.
              </p>
            </div>
          </section>

          {/* Articolo 12 */}
          <section>
            <h2 className="text-terms-article font-semibold mb-6" style={{ textAlign: 'left' }}>
              Articolo 12 – Riservatezza
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed" style={{ textAlign: 'left' }}>
              <p>
                12.1 Le Parti si impegnano a mantenere strettamente riservate tutte
                le informazioni commerciali, tecniche e strategiche apprese in
                occasione dell'esecuzione del presente contratto.
              </p>
              <p>
                12.2 L'obbligo di riservatezza permane anche dopo la cessazione,
                per qualsivoglia motivo, del rapporto contrattuale.
              </p>
            </div>
          </section>

          {/* Articolo 13 */}
          <section>
            <h2 className="text-terms-article font-semibold mb-6" style={{ textAlign: 'left' }}>
              Articolo 13 – Forza Maggiore
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed" style={{ textAlign: 'left' }}>
              <p>
                13.1 Nessuna delle Parti sarà ritenuta responsabile per
                inadempimenti dovuti a eventi imprevisti e non imputabili alla
                volontà delle stesse, tra cui, a titolo esemplificativo e non
                esaustivo: calamità naturali, attacchi informatici, lockdown,
                indisponibilità di servizi esterni critici.
              </p>
            </div>
          </section>

          {/* Articolo 14 */}
          <section>
            <h2 className="text-terms-article font-semibold mb-6" style={{ textAlign: 'left' }}>
              Articolo 14 – Comunicazioni
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed" style={{ textAlign: 'left' }}>
              <p>
                14.1 Tutte le comunicazioni ufficiali e aventi rilevanza giuridica
                o contabile dovranno avvenire esclusivamente a mezzo PEC
                all'indirizzo: progretiosrl@pec.it.
              </p>
              <p>
                14.2 Per comunicazioni generiche, di supporto, carattere
                informativo e/o commerciale: contact@connecteed.com.
              </p>
            </div>
          </section>

          {/* Articolo 15 */}
          <section>
            <h2 className="text-terms-article font-semibold mb-6" style={{ textAlign: 'left' }}>
              Articolo 15 – Clausola di Salvaguardia
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed" style={{ textAlign: 'left' }}>
              <p>
                15.1 L'eventuale nullità o inefficacia di una o più disposizioni
                del presente contratto non pregiudica la validità delle restanti
                clausole, che continueranno a produrre pienamente i loro effetti.
              </p>
            </div>
          </section>

          {/* Articolo 16 */}
          <section>
            <h2 className="text-terms-article font-semibold mb-6" style={{ textAlign: 'left' }}>
              Articolo 16 – Richieste Extra Contrattuali
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed" style={{ textAlign: 'left' }}>
              <p>
                16.1 Qualsiasi attività aggiuntiva rispetto a quelle previste,
                incluse personalizzazioni, nuove funzionalità o modifiche, sarà
                oggetto di separata valutazione economica e regolata da apposito
                accordo scritto.
              </p>
            </div>
          </section>

          {/* Articolo 17 */}
          <section>
            <h2 className="text-terms-article font-semibold mb-6" style={{ textAlign: 'left' }}>
              Articolo 17 – Obblighi del Cliente
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed" style={{ textAlign: 'left' }}>
              <p>Il Cliente si impegna a:</p>
              <div className="pl-4 space-y-2">
                <p>a) fornire tempestivamente tutte le informazioni e i materiali necessari al corretto funzionamento del servizio;</p>
                <p>b) segnalare con sollecitudine eventuali anomalie o difformità riscontrate;</p>
                <p>c) non intervenire direttamente sul Software né consentire a terzi di farlo senza preventiva autorizzazione scritta del Provider.</p>
              </div>
            </div>
          </section>

          {/* Articolo 18 */}
          <section>
            <h2 className="text-terms-article font-semibold mb-6" style={{ textAlign: 'left' }}>
              Articolo 18 – Limitazioni di Responsabilità
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed" style={{ textAlign: 'left' }}>
              <p>18.1 Il Provider non sarà responsabile per:</p>
              <div className="pl-4 space-y-2">
                <p>a) modifiche o interventi non autorizzati sul Software da parte del Cliente o di terzi;</p>
                <p>b) malfunzionamenti derivanti da servizi di terzi (es. Amazon, PayPal, hosting ecc.);</p>
                <p>c) danni indiretti, lucro cessante o interruzioni dell'attività non imputabili direttamente al Provider.</p>
              </div>
              <p>
                18.2 In ogni caso, la responsabilità massima del Provider non potrà eccedere il valore complessivo del contratto.
              </p>
            </div>
          </section>

          {/* Articolo 19 */}
          <section>
            <h2 className="text-terms-article font-semibold mb-6" style={{ textAlign: 'left' }}>
              Articolo 19 – Foro Competente
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed" style={{ textAlign: 'left' }}>
              <p>
                19.1 Per qualsiasi controversia relativa all'interpretazione,
                esecuzione o validità del presente contratto sarà competente, in
                via esclusiva, il Foro di Roma.
              </p>
            </div>
          </section>
        </article>

      </main>
      {/* 👇 Footer aggiunto qui */}
      <Footer />
    </> 
  );
};



export default TerminiCondizioni;
