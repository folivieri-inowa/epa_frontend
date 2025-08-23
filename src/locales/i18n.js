'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { defaultLang } from './config-lang';
import translationIt from './langs/it.json';
import translationEn from './langs/en.json';
import translationFr from './langs/fr.json';
import translationVi from './langs/vi.json';
import translationCn from './langs/cn.json';
import translationAr from './langs/ar.json';

// ----------------------------------------------------------------------

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

const lng = getStorageItem('i18nextLng', defaultLang.value);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      it: { translations: translationIt },
      en: { translations: translationEn },
      fr: { translations: translationFr },
      vi: { translations: translationVi },
      cn: { translations: translationCn },
      ar: { translations: translationAr },
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
      useSuspense: false, // Questo risolve il problema con l'SSR
    },
    initImmediate: false, // Per Next.js App Router
  });

export default i18n;
