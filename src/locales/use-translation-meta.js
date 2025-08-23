'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

export function useTranslationWithMeta() {
  const { t, i18n } = useTranslation();
  const [currentLocale, setCurrentLocale] = useState('it');

  useEffect(() => {
    // Sincronizza lo stato locale con i18next
    setCurrentLocale(i18n.language || 'it');
  }, [i18n.language]);

  // Funzione helper per ottenere i metadati di una pagina
  const getPageMeta = (pageKey) => ({
    title: t(`meta.${pageKey}.title`),
    description: t(`meta.${pageKey}.description`),
    keywords: t(`meta.${pageKey}.keywords`),
  });

  // Funzione helper per cambiare lingua
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLocale(lng);
  };

  return {
    t,
    i18n,
    currentLocale,
    getPageMeta,
    changeLanguage,
  };
}

export default useTranslationWithMeta;
