'use client';

/**
 * Componente per gestire i metadati dinamici delle pagine usando Global Settings
 * Aggiorna title, meta description e keywords in base ai contenuti di Strapi
 */

import { useEffect } from 'react';
import { useSiteSettings } from 'src/hooks/use-global-settings';

export default function DynamicMetadata({ 
  pageTitle, 
  pageDescription, 
  pageKeywords,
  isHomePage = false 
}) {
  const { 
    metaTitle, 
    metaDescription, 
    metaKeywords, 
    themeColor,
    loading 
  } = useSiteSettings();

  useEffect(() => {
    if (loading) return;

    // Update document title
    const finalTitle = pageTitle || metaTitle;
    if (finalTitle && finalTitle !== document.title) {
      document.title = finalTitle;
    }

    // Update meta description
    const finalDescription = pageDescription || metaDescription;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    if (finalDescription) {
      metaDesc.content = finalDescription;
    }

    // Update meta keywords
    const finalKeywords = pageKeywords || metaKeywords;
    let metaKeys = document.querySelector('meta[name="keywords"]');
    if (!metaKeys) {
      metaKeys = document.createElement('meta');
      metaKeys.name = 'keywords';
      document.head.appendChild(metaKeys);
    }
    if (finalKeywords) {
      metaKeys.content = finalKeywords;
    }

    // Update theme color
    let metaTheme = document.querySelector('meta[name="theme-color"]');
    if (!metaTheme) {
      metaTheme = document.createElement('meta');
      metaTheme.name = 'theme-color';
      document.head.appendChild(metaTheme);
    }
    if (themeColor) {
      metaTheme.content = themeColor;
    }

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    if (finalTitle) {
      ogTitle.content = finalTitle;
    }

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    if (finalDescription) {
      ogDescription.content = finalDescription;
    }

    // Update Twitter Card tags
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.name = 'twitter:title';
      document.head.appendChild(twitterTitle);
    }
    if (finalTitle) {
      twitterTitle.content = finalTitle;
    }

    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.name = 'twitter:description';
      document.head.appendChild(twitterDescription);
    }
    if (finalDescription) {
      twitterDescription.content = finalDescription;
    }

  }, [pageTitle, pageDescription, pageKeywords, metaTitle, metaDescription, metaKeywords, themeColor, loading]);

  return null; // Questo componente non renderizza nulla
}

// Hook per usare i metadati nelle pagine
export function usePageMetadata(title, description, keywords) {
  const { metaTitle, metaDescription, metaKeywords } = useSiteSettings();
  
  return {
    title: title || metaTitle,
    description: description || metaDescription,
    keywords: keywords || metaKeywords
  };
}
