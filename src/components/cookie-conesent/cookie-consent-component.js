'use client'

import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";
import {useEffect} from "react";


const CookieConsentComponent = () => {
  useEffect(() => {
    CookieConsent.run({
      categories: {
        necessary: {
          enabled: true,
          readOnly: true // I cookie necessari non possono essere disabilitati
        }
        // analytics: {}  <-- RIMUOVI questa categoria perché non usi analytics
      },

      language: {
        default: 'it',
        translations: {
          it: {
            consentModal: {
              title: 'Utilizzo dei cookie', // Titolo più chiaro
              description: 'Questo sito utilizza solo cookie tecnici necessari al funzionamento. Non utilizziamo cookie di profilazione o di terze parti. Per maggiori informazioni, consulta la nostra <a href="/privacy">Informativa sulla Privacy</a>.', // Descrizione concisa e link all'informativa
              acceptAllBtn: 'Ho capito', // Pulsante più appropriato
              // acceptNecessaryBtn: 'Rifiuta tutti', <-- RIMUOVI, non hai cookie non necessari
              showPreferencesBtn: 'Maggiori informazioni' // Opzionale, se vuoi dare più dettagli
            },
            preferencesModal: {
              title: 'Informazioni sui cookie', // Titolo più chiaro
              // acceptAllBtn: 'Accetta tutti', <-- RIMUOVI
              // acceptNecessaryBtn: 'Rifiuta tutti', <-- RIMUOVI
              // savePreferencesBtn: 'Salva preferenze', <-- RIMUOVI
              closeIconLabel: 'Chiudi',
              sections: [
                {
                  title: 'Cookie necessari', // Titolo più chiaro
                  description: 'Questi cookie sono essenziali per il corretto funzionamento del sito e non possono essere disabilitati.  Essi includono cookie di sessione, mantenimento dello stato dell\'utente durante la navigazione, ecc.', // Descrizione dettagliata dei cookie tecnici
                  linkedCategory: 'necessary'
                },
                // {  <-- RIMUOVI la sezione analytics
                //   title: 'Performance e Analytics',
                //   description: 'Questi cookie...',
                //   linkedCategory: 'analytics'
                // },
                {
                  title: 'Informativa sulla Privacy', // Titolo più chiaro
                  description: 'Per maggiori informazioni sul trattamento dei dati personali, consulta la nostra <a href="/privacy">Informativa sulla Privacy</a>.' // Link all'informativa
                }
              ]
            }
          }
        }
      }
    });
  }, []);

  return null;
}

export default CookieConsentComponent;
