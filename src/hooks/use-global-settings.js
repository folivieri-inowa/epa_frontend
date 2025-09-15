/**
 * Hook per gestire Global Settings da Strapi
 * Gestisce tutte le impostazioni globali del sito (navigation, footer, contatti, etc.)
 */

import { useState, useEffect } from 'react';

import { fetcher } from '../utils/axios';

// Cache globale per Global Settings
let globalSettingsCache = null;
let globalSettingsCacheTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minuti

export function useGlobalSettings() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGlobalSettings() {
      try {
        setLoading(true);
        setError(null);

        // Controllo cache
        const now = Date.now();
        if (globalSettingsCache && (now - globalSettingsCacheTime) < CACHE_DURATION) {
          console.log('📋 Using cached Global Settings');
          setData(globalSettingsCache);
          setLoading(false);
          return;
        }

        console.log('🌐 Fetching Global Settings from Strapi...');
        
        const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
        const url = `${strapiUrl}/api/global-setting?populate[social_links]=true&populate[footer_links]=true&populate[contact_info_cards]=true`;
        
        const response = await fetcher(url);

        if (response?.data) {
          console.log('✅ Global Settings loaded successfully');
          
          // Aggiorna cache
          globalSettingsCache = response.data;
          globalSettingsCacheTime = now;
          
          setData(response.data);
        } else {
          console.log('⚠️ No Global Settings found, using fallback');
          
          // Fallback con dati di default
          const fallbackData = {
            site_title: 'Oracle Executive Protection',
            site_description: 'Consulenza e formazione nel settore sicurezza',
            contact_email: 'info@oracleprotection.it',
            contact_phone: '+39 392 926 4907',
            contact_whatsapp: '+39 392 926 4907',
            footer_description: 'Oracle Executive Protection offre servizi di consulenza specializzati nel settore della sicurezza.',
            footer_copyright: '© 2025 Oracle Executive Protection. Tutti i diritti riservati.',
            navigation_menu_text: 'Menu',
            navigation_contact_text: 'Contatti',
            navigation_contact_button_text: 'Contattaci',
            social_links: [],
            footer_links: [],
            // Immagini di fallback
            site_logo: null,
            site_logo_white: null,
            site_favicon: null,
            hero_background_image: null,
            about_image: null,
            team_image: null,
            default_og_image: null,
            contact_info_cards: [
              {
                title: 'WhatsApp',
                value: '+39 392 926 4907',
                icon: 'logos:whatsapp-icon',
                href: 'https://wa.me/393929264907',
                color: '#25D366'
              },
              {
                title: 'Email',
                value: 'info@oracleprotection.it',
                icon: 'solar:letter-bold',
                href: 'mailto:info@oracleprotection.it',
                color: '#1976d2'
              }
            ]
          };
          
          setData(fallbackData);
        }
      } catch (err) {
        console.error('❌ Error fetching Global Settings:', err);
        setError(err);
        
        // Fallback in caso di errore
        setData({
          site_title: 'Oracle Executive Protection',
          contact_email: 'info@oracleprotection.it',
          contact_phone: '+39 392 926 4907',
          // Immagini di fallback
          site_logo: null,
          site_logo_white: null,
          hero_background_image: null
        });
      } finally {
        setLoading(false);
      }
    }

    fetchGlobalSettings();
  }, []);

  return {
    globalSettings: data,
    loading,
    error,
    refresh: () => {
      globalSettingsCache = null;
      globalSettingsCacheTime = 0;
      setLoading(true);
    }
  };
}

// Hook specifici per singole sezioni

export function useNavigationSettings() {
  const { globalSettings, loading, error } = useGlobalSettings();
  
  return {
    menuText: globalSettings?.navigation_menu_text || 'Menu',
    contactText: globalSettings?.navigation_contact_text || 'Contatti',
    contactButtonText: globalSettings?.navigation_contact_button_text || 'Contattaci',
    loading,
    error
  };
}

export function useFooterSettings() {
  const { globalSettings, loading, error } = useGlobalSettings();
  
  return {
    description: globalSettings?.footer_description || '',
    copyright: globalSettings?.footer_copyright || '© 2025 Oracle Executive Protection',
    links: globalSettings?.footer_links || [],
    socialLinks: globalSettings?.social_links || [],
    loading,
    error
  };
}

export function useContactSettings() {
  const { globalSettings, loading, error } = useGlobalSettings();
  
  return {
    email: globalSettings?.contact_email || 'info@oracleprotection.it',
    phone: globalSettings?.contact_phone || '+39 392 926 4907',
    whatsapp: globalSettings?.contact_whatsapp || '+39 392 926 4907',
    signal: globalSettings?.contact_signal || '+39 392 926 4907',
    address: globalSettings?.company_address || 'Italia',
    businessHours: globalSettings?.business_hours || 'Disponibili 24/7',
    contactCards: globalSettings?.contact_info_cards || [],
    loading,
    error
  };
}

export function useSiteSettings() {
  const { globalSettings, loading, error } = useGlobalSettings();
  
  return {
    title: globalSettings?.site_title || 'Oracle Executive Protection',
    description: globalSettings?.site_description || 'Consulenza nel settore sicurezza',
    privacyPolicyUrl: globalSettings?.privacy_policy_url || '/privacy-policy',
    metaTitle: globalSettings?.meta_title || globalSettings?.site_title || 'Oracle Executive Protection',
    metaDescription: globalSettings?.meta_description || globalSettings?.site_description || 'Consulenza, analisi e formazione nel settore sicurezza',
    metaKeywords: globalSettings?.meta_keywords || 'sicurezza, protezione, executive protection, security management',
    themeColor: globalSettings?.theme_color || '#000000',
    loading,
    error
  };
}

// Helper per ottenere URL completo delle immagini Strapi
function getStrapiImageUrl(imageData) {
  if (!imageData) return null;
  
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
  
  // Se l'immagine ha già l'URL completo, ritornala così com'è
  if (imageData.url?.startsWith('http')) {
    return imageData.url;
  }
  
  // Se è un oggetto con url relativo, costruisci l'URL completo
  if (imageData.url) {
    return `${strapiUrl}${imageData.url}`;
  }
  
  // Se è una stringa, assumiamo sia un URL relativo
  if (typeof imageData === 'string') {
    return imageData.startsWith('http') ? imageData : `${strapiUrl}${imageData}`;
  }
  
  return null;
}

// Hook per la gestione delle immagini del sito
export function useSiteImages() {
  const { globalSettings, loading, error } = useGlobalSettings();
  
  return {
    logo: getStrapiImageUrl(globalSettings?.site_logo) || '/logo/logo.png',
    logoWhite: getStrapiImageUrl(globalSettings?.site_logo_white) || '/logo/logo_white.png',
    favicon: getStrapiImageUrl(globalSettings?.site_favicon) || '/favicon/favicon.ico',
    heroBackground: getStrapiImageUrl(globalSettings?.hero_background_image) || '/assets/images/hero-bg-default.jpg',
    aboutImage: getStrapiImageUrl(globalSettings?.about_image) || '/assets/images/about1.jpg',
    teamImage: getStrapiImageUrl(globalSettings?.team_image) || '/assets/images/team.jpg',
    defaultOgImage: getStrapiImageUrl(globalSettings?.default_og_image) || '/assets/images/og-default.jpg',
    loading,
    error
  };
}

// Hook specifico per il logo (più performante se serve solo quello)
export function useSiteLogo() {
  const { globalSettings, loading, error } = useGlobalSettings();
  
  return {
    logo: getStrapiImageUrl(globalSettings?.site_logo) || '/logo/logo.png',
    logoWhite: getStrapiImageUrl(globalSettings?.site_logo_white) || '/logo/logo_white.png',
    loading,
    error
  };
}
