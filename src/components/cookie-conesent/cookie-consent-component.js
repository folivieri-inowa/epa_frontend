'use client'

import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";

const CookieConsentComponent = () => {
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    // Ottiene la lingua corrente
    const currentLang = i18n.language || 'it';
    
    // Prepara le traduzioni per la lingua corrente
    const translations = {
      it: {
        consentModal: {
          title: 'Utilizziamo i cookie per migliorare la tua esperienza',
          description: 'Questo sito utilizza cookie tecnici e di analisi per fornire una migliore esperienza di navigazione. Continuando a navigare accetti l\'utilizzo dei cookie.',
          acceptAllBtn: 'Accetta tutti',
          acceptNecessaryBtn: 'Accetta selezione',
          showPreferencesBtn: 'Gestisci preferenze',
          closeIconLabel: 'Chiudi'
        },
        preferencesModal: {
          title: 'Preferenze Cookie',
          acceptAllBtn: 'Accetta tutti',
          acceptNecessaryBtn: 'Accetta selezione',
          savePreferencesBtn: 'Salva preferenze',
          closeIconLabel: 'Chiudi',
          serviceCounterLabel: 'Servizio|Servizi',
          sections: [
            {
              title: 'Cookie necessari',
              description: 'Questi cookie sono essenziali per il funzionamento del sito web e non possono essere disabilitati.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Cookie di analisi',
              description: 'Questi cookie ci aiutano a capire come i visitatori interagiscono con il sito web raccogliendo e fornendo informazioni in modo anonimo.',
              linkedCategory: 'analytics'
            },
            {
              title: 'Cookie di marketing',
              description: 'Questi cookie vengono utilizzati per tracciare i visitatori sui siti web per mostrare annunci pertinenti e coinvolgenti.',
              linkedCategory: 'marketing'
            }
          ]
        }
      },
      en: {
        consentModal: {
          title: 'We use cookies to improve your experience',
          description: 'This site uses technical and analytical cookies to provide a better browsing experience. By continuing to browse you accept the use of cookies.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Accept selection',
          showPreferencesBtn: 'Manage preferences',
          closeIconLabel: 'Close'
        },
        preferencesModal: {
          title: 'Cookie Preferences',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Accept selection',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close',
          serviceCounterLabel: 'Service|Services',
          sections: [
            {
              title: 'Necessary cookies',
              description: 'These cookies are essential for the website to function and cannot be disabled.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Analytics cookies',
              description: 'These cookies help us understand how visitors interact with the website by collecting and providing information anonymously.',
              linkedCategory: 'analytics'
            },
            {
              title: 'Marketing cookies',
              description: 'These cookies are used to track visitors across websites to display relevant and engaging ads.',
              linkedCategory: 'marketing'
            }
          ]
        }
      }
    };
    
    // Inizializza vanilla-cookieconsent con la configurazione base
    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: 'box',
          position: 'bottom right',
          equalWeightButtons: true
        },
        preferencesModal: {
          layout: 'box',
        }
      },
      // Configurazione per permettere l'uso del nostro pulsante personalizzato
      autoShow: true, 
      hideFromBots: true,
      categories: {
        necessary: {
          enabled: true,
          readOnly: true // I cookie necessari non possono essere disabilitati
        },
        analytics: {
          enabled: false,
          readOnly: false
        },
        marketing: {
          enabled: false,
          readOnly: false
        }
      },

      language: {
        default: currentLang,
        translations
      }
    });
    
    // Non è necessario fare altro, vanilla-cookieconsent gestirà
    // automaticamente l'interazione con gli attributi data-cc
  }, [t, i18n.language]);

  return null;
}

export default CookieConsentComponent;
