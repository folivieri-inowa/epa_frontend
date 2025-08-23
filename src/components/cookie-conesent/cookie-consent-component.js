'use client'

import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";

const CookieConsentComponent = () => {
  const { t } = useTranslation();
  useEffect(() => {
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
        }
        // analytics: {}  <-- RIMUOVI questa categoria perché non usi analytics
      },

      language: {
        default: 'it',
        translations: {
          it: {
            consentModal: {
              title: t('cookies.title'),
              description: t('cookies.description'),
              acceptAllBtn: t('cookies.accept'),
              showPreferencesBtn: t('cookies.moreInfo')
            },
            preferencesModal: {
              title: t('cookies.modal.title'),
              closeIconLabel: t('cookies.modal.close'),
              sections: [
                {
                  title: t('cookies.modal.necessary.title'),
                  description: t('cookies.modal.necessary.description'),
                  linkedCategory: 'necessary'
                },
                {
                  title: t('cookies.modal.privacy.title'),
                  description: t('cookies.modal.privacy.description')
                }
              ]
            }
          }
        }
      }
    });
    
    // Non è necessario fare altro, vanilla-cookieconsent gestirà
    // automaticamente l'interazione con gli attributi data-cc
  }, [t]);

  return null;
}

export default CookieConsentComponent;
