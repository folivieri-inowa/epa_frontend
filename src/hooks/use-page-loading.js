import { useState, useEffect } from 'react';

// Hook personalizzato per gestire il loading delle pagine con tempo minimo
export function usePageLoading(minimumLoadingTime = 1500) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();

    // Simula il caricamento della pagina
    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumLoadingTime - elapsed);

      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    // Controlla se la pagina è già caricata
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }

    // Fallback per assicurarsi che il loading finisca sempre
    const maxTimeout = setTimeout(() => {
      setIsLoading(false);
    }, minimumLoadingTime + 2000);

    return () => clearTimeout(maxTimeout);
  }, [minimumLoadingTime]);

  return isLoading;
}
