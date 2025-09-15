/**
 * Helper per generare metadati dinamici usando Global Settings
 * Utilizzabile nelle pagine per sostituire metadati hardcoded
 */

// Fallback se Strapi non è disponibile
const FALLBACK_SETTINGS = {
  site_title: 'Oracle Executive Protection',
  site_description: 'Consulenza, analisi e formazione nel settore sicurezza. Protezione esecutiva e security management con oltre 30 anni di esperienza.',
  meta_title: 'Oracle Executive Protection | Sicurezza e Protezione Globale',
  meta_description: 'Oracle Executive Protection: leader nella sicurezza d\'élite con oltre 30 anni di esperienza. Protezione esecutiva, travel risk management, security management e servizi di sicurezza globale.',
  meta_keywords: 'oracle Executive Protection, sicurezza globale, protezione esecutiva, executive protection, security management, travel risk management',
  theme_color: '#000000'
};

/**
 * Genera metadati per una pagina specifica con supporto per immagini
 * @param {Object} options - Opzioni per i metadati
 * @param {string} options.pageTitle - Titolo specifico della pagina
 * @param {string} options.pageDescription - Descrizione specifica della pagina  
 * @param {string} options.pageKeywords - Keywords specifiche della pagina
 * @param {string} options.siteName - Nome del sito (default da Global Settings)
 * @param {boolean} options.isHomePage - Se è la homepage (default false)
 * @param {string} options.ogImage - URL immagine Open Graph specifica
 * @param {string} options.favicon - URL favicon specifico
 * @returns {Object} Oggetto metadati per Next.js
 */
export function generatePageMetadata({
  pageTitle,
  pageDescription,
  pageKeywords,
  siteName,
  isHomePage = false,
  ogImage,
  favicon
} = {}) {
  const finalSiteName = siteName || FALLBACK_SETTINGS.site_title;
  
  let finalTitle;
  if (isHomePage) {
    finalTitle = FALLBACK_SETTINGS.meta_title || pageTitle || finalSiteName;
  } else if (pageTitle) {
    finalTitle = `${pageTitle} | ${finalSiteName}`;
  } else {
    finalTitle = FALLBACK_SETTINGS.meta_title || finalSiteName;
  }
  
  const finalDescription = pageDescription || FALLBACK_SETTINGS.meta_description;
  const finalKeywords = pageKeywords || FALLBACK_SETTINGS.meta_keywords;
  const themeColor = FALLBACK_SETTINGS.theme_color;
  const finalOgImage = ogImage || '/assets/images/og-default.jpg';
  const finalFavicon = favicon || '/favicon/favicon.ico';

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: finalKeywords,
    themeColor,
    viewport: { width: 'device-width', initialScale: 1, maximumScale: 1 },
    icons: [
      { rel: 'icon', url: finalFavicon },
      { rel: 'apple-touch-icon', url: finalFavicon }
    ],
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      siteName: finalSiteName,
      type: 'website',
      locale: 'it_IT',
      images: [
        {
          url: finalOgImage,
          width: 1200,
          height: 630,
          alt: finalTitle
        }
      ]
    },
    twitter: {
      title: finalTitle,
      description: finalDescription,
      card: 'summary_large_image',
      images: [finalOgImage]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true
      }
    }
  };
}

/**
 * Metadati di default per pagine che non specificano nulla
 */
export function getDefaultMetadata() {
  return generatePageMetadata({ isHomePage: true });
}

/**
 * Genera metadati per pagine di errore
 */
export function generateErrorMetadata(errorCode = '404') {
  const titles = {
    '404': 'Pagina non trovata',
    '500': 'Errore del server',
    '403': 'Accesso negato'
  };
  
  const descriptions = {
    '404': 'La pagina che stai cercando non esiste o è stata spostata.',
    '500': 'Si è verificato un errore interno del server. Riprova più tardi.',
    '403': 'Non hai i permessi necessari per accedere a questa pagina.'
  };

  return generatePageMetadata({
    pageTitle: titles[errorCode] || 'Errore',
    pageDescription: descriptions[errorCode] || 'Si è verificato un errore.',
    pageKeywords: 'errore, oracle Executive Protection'
  });
}
