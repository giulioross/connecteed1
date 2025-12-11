import React from "react";


const TerminiCondizioni: React.FC = () => {
  return (
    <main
      className="min-h-screen py-16 px-4 md:px-8"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #FFFFFF 0%, #B0DFFF 47%, #D3EFFF 100%)",
        paddingTop: "180px",
      }}
    >
      <article className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold text-terms-title mb-4">
            Termini E Condizioni
          </h1>
          <p className="text-terms-subtitle text-lg">
            Termini e condizioni di utilizzo del software SaaS
          </p>
        </header>

        {/* Articles */}
        <div className="space-y-10">
          {/* Articolo 1 */}
          <section>
            <h2 className="text-terms-article font-semibold mb-6">
              Articolo 1 – Oggetto del Contratto
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed">
              <p>
                1.1 La presente disciplina i termini e le condizioni che regolano
                l'utilizzo del software fornito in modalità SaaS ("Software") dal
                fornitore del servizio ("Provider") al soggetto utilizzatore
                ("Cliente").
              </p>
              <p>
                1.2 L'accesso e l'utilizzo del Software da parte del Cliente
                comportano l'accettazione integrale e incondizionata delle
                presenti condizioni contrattuali.
              </p>
              <p>
                1.3 Le caratteristiche tecniche, funzionali e i livelli di
                servizio del Software sono descritti nella documentazione
                contrattuale e/o nell'offerta commerciale allegata, che
                costituiscono parte integrante del presente accordo.
              </p>
            </div>
          </section>

          {/* Articolo 2 */}
          <section>
            <h2 className="text-terms-article font-semibold mb-6">
              Articolo 2 – Disponibilità dei Servizi
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed">
              <p>
                2.1 Il Provider si impegna a garantire la piena operatività e
                funzionalità del Software per tutta la durata contrattuale, salvo
                quanto diversamente previsto.
              </p>
              <p>
                2.2 La disponibilità del servizio potrà essere temporaneamente
                sospesa in caso di:
              </p>
              <div className="pl-4 space-y-2">
                <p>a) interventi di manutenzione programmata o straordinaria;</p>
                <p>b) inadempimento del Cliente agli obblighi contrattuali;</p>
                <p>c) eventi di forza maggiore, come definiti al successivo Articolo 14.</p>
              </div>
            </div>
          </section>

          {/* Articolo 3 */}
          <section>
            <h2 className="text-terms-article font-semibold mb-6">
              Articolo 3 – Durata e Recesso
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed">
              <p>
                3.1 La durata del presente contratto è quella stabilita
                nell'offerta commerciale sottoscritta dal Cliente.
              </p>
              <p>
                3.2 Il Cliente potrà esercitare il diritto di recesso unicamente
                mediante comunicazione a mezzo PEC, da inviarsi con un preavviso
                minimo di 60 (sessanta) giorni rispetto alla scadenza del termine
                contrattuale.
              </p>
              <p>
                3.3 Il mancato esercizio del recesso comporterà il tacito rinnovo
                del contratto, ove espressamente previsto.
              </p>
            </div>
          </section>

          {/* Articolo 4 */}
          <section>
            <h2 className="text-terms-article font-semibold mb-6">
              Articolo 4 – Corrispettivi e Pagamenti
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed">
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
            <h2 className="text-terms-article font-semibold mb-6">
              Articolo 5 – Obblighi Generali del Provider
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed">
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
            <h2 className="text-terms-article font-semibold mb-6">
              Articolo 6 – Supporto e Assistenza Tecnica
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed">
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
            <h2 className="text-terms-article font-semibold mb-6">
              Articolo 7 – Manutenzione e Aggiornamenti
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed">
              <p>7.1 La manutenzione ordinaria e straordinaria include:</p>
              <div className="pl-4 space-y-2">
                <p>interventi correttivi e di tuning del Software;</p>
                <p>adeguamenti alle evoluzioni tecnologiche di sistema.</p>
              </div>
            </div>
          </section>

          {/* Articolo 8 */}
          <section>
            <h2 className="text-terms-article font-semibold mb-6">
              Articolo 8 – Garanzie
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed">
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
            <h2 className="text-terms-article font-semibold mb-6">
              Articolo 9 – Proprietà Intellettuale
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed">
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
            <h2 className="text-terms-article font-semibold mb-6">
              Articolo 10 – Backup, Sicurezza e Responsabilità sui Dati
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed">
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
            <h2 className="text-terms-article font-semibold mb-6">
              Articolo 11 – Strumenti di Terze Parti
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed">
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
            <h2 className="text-terms-article font-semibold mb-6">
              Articolo 12 – Riservatezza
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed">
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
            <h2 className="text-terms-article font-semibold mb-6">
              Articolo 13 – Forza Maggiore
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed">
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
            <h2 className="text-terms-article font-semibold mb-6">
              Articolo 14 – Comunicazioni
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed">
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
            <h2 className="text-terms-article font-semibold mb-6">
              Articolo 15 – Clausola di Salvaguardia
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed">
              <p>
                15.1 L'eventuale nullità o inefficacia di una o più disposizioni
                del presente contratto non pregiudica la validità delle restanti
                clausole, che continueranno a produrre pienamente i loro effetti.
              </p>
            </div>
          </section>

          {/* Articolo 16 */}
          <section>
            <h2 className="text-terms-article font-semibold mb-6">
              Articolo 16 – Richieste Extra Contrattuali
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed">
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
            <h2 className="text-terms-article font-semibold mb-6">
              Articolo 17 – Obblighi del Cliente
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed">
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
            <h2 className="text-terms-article font-semibold mb-6">
              Articolo 18 – Limitazioni di Responsabilità
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed">
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
            <h2 className="text-terms-article font-semibold mb-6">
              Articolo 19 – Foro Competente
            </h2>
            <div className="space-y-4 text-terms-text text-sm leading-relaxed">
              <p>
                19.1 Per qualsiasi controversia relativa all'interpretazione,
                esecuzione o validità del presente contratto sarà competente, in
                via esclusiva, il Foro di Roma.
              </p>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
};

export default TerminiCondizioni;
