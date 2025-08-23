'use client';

import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { SplashScreen } from 'src/components/loading-screen';
import { defaultLang } from './config-lang';
import translationIt from './langs/it.json';
import translationEn from './langs/en.json';

// Funzione helper per localStorage che funziona sia client che server
const getStorageItem = (key, defaultValue) => {
  if (typeof window !== 'undefined') {
    try {
      return localStorage.getItem(key) || defaultValue;
    } catch (error) {
      return defaultValue;
    }
  }
  return defaultValue;
};

export default function I18nProvider({ children }) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initI18n = async () => {
      try {
        if (!i18n.isInitialized) {
          const lng = getStorageItem('i18nextLng', defaultLang.value);
          
          await i18n
            .use(LanguageDetector)
            .use(initReactI18next)
            .init({
              resources: {
                it: { translations: translationIt },
                en: { translations: translationEn },
              },
              lng,
              fallbackLng: 'it',
              debug: false,
              ns: ['translations'],
              defaultNS: 'translations',
              interpolation: {
                escapeValue: false,
              },
              react: {
                useSuspense: false,
              },
            });
        }
        setIsInitialized(true);
      } catch (error) {
        console.error('I18n initialization error:', error);
        setIsInitialized(true); // Fallback per non bloccare l'app
      }
    };

    initI18n();
  }, []);

  if (!isInitialized) {
    return <SplashScreen />;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

I18nProvider.propTypes = {
  children: PropTypes.node,
};
