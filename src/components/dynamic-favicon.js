'use client';

/**
 * Componente per gestire favicon dinamico da Global Settings
 * Aggiorna automaticamente il favicon quando cambia in Strapi
 */

import { useEffect } from 'react';
import { useSiteImages } from 'src/hooks/use-global-settings';

export default function DynamicFavicon() {
  const { favicon, loading } = useSiteImages();

  useEffect(() => {
    if (loading || !favicon) return;

    // Aggiorna il favicon
    let faviconLink = document.querySelector('link[rel="icon"]');
    
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.rel = 'icon';
      document.head.appendChild(faviconLink);
    }

    faviconLink.href = favicon;

    // Aggiorna anche apple-touch-icon se esiste
    const appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]');
    if (appleTouchIcon && favicon) {
      appleTouchIcon.href = favicon;
    }

    console.log('✅ Favicon updated from Global Settings:', favicon);

  }, [favicon, loading]);

  return null; // Questo componente non renderizza nulla
}

// Hook per usare il favicon nelle pagine
export function useDynamicFavicon() {
  const { favicon, loading } = useSiteImages();
  
  return {
    favicon: favicon || '/favicon/favicon.ico',
    loading
  };
}
