'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1338';
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

// Cache per le richieste API
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minuti

// Utility per le richieste API ottimizzate
const fetchStrapi = async (endpoint, options = {}) => {
  const cacheKey = `${endpoint}_${JSON.stringify(options)}`;
  const cached = cache.get(cacheKey);
  
  // Restituisci dalla cache se valido
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  const url = `${STRAPI_BASE_URL}/api${endpoint}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(API_TOKEN && { 'Authorization': `Bearer ${API_TOKEN}` }),
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Salva in cache
    cache.set(cacheKey, {
      data,
      timestamp: Date.now(),
    });
    
    return data;
  } catch (error) {
    console.error(`Errore fetching ${endpoint}:`, error);
    throw error;
  }
};

// Hook principale per Strapi
export const useStrapi = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef();

  const { 
    immediate = true,
    dependencies = [],
    transform,
    onSuccess,
    onError
  } = options;

  const fetchData = useCallback(async () => {
    if (!endpoint) return;

    // Cancella richiesta precedente se in corso
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();
    setLoading(true);
    setError(null);

    try {
      const result = await fetchStrapi(endpoint, {
        signal: abortControllerRef.current.signal,
      });
      
      const processedData = transform ? transform(result) : result;
      setData(processedData);
      
      if (onSuccess) onSuccess(processedData);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err);
        if (onError) onError(err);
      }
    } finally {
      setLoading(false);
    }
  }, [endpoint, transform, onSuccess, onError, ...dependencies]);

  useEffect(() => {
    if (immediate) {
      fetchData();
    }

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [fetchData, immediate]);

  const refetch = useCallback(() => {
    // Pulisci cache per questo endpoint
    const cacheKeys = Array.from(cache.keys()).filter(key => 
      key.startsWith(endpoint.split('?')[0])
    );
    cacheKeys.forEach(key => cache.delete(key));
    
    return fetchData();
  }, [endpoint, fetchData]);

  return {
    data,
    loading,
    error,
    refetch,
  };
};

/**
 * Hook per ottenere contenuto di una pagina specifica
 * @param {string} slug - Slug della pagina
 * @returns {Object} { data, loading, error }
 */
export const useStrapiPage = (slug) => {
  return useStrapi(`/pages?filters[slug][$eq]=${slug}`, {
    transform: (result) => {
      // In Strapi 5 prendi il primo risultato direttamente
      const page = result?.data?.[0] || null;
      return page;
    },
    dependencies: [slug],
  });
};

/**
 * Hook per ottenere tutti i componenti della homepage
 * @returns {Object} { data, loading, error }
 */
export const useStrapiHome = () => {
  return useStrapi('/home-components?sort=order_position:asc', {
    transform: (result) => {
      // In Strapi 5 la struttura è diretta, non dentro attributes
      const components = result?.data || [];
      
      // Converte i componenti in un oggetto per facile accesso
      const componentsByType = {};
      components.forEach(component => {
        componentsByType[component.component_type] = component;
      });
      
      return {
        components: componentsByType,
        list: components,
        // Proprietà specifiche per ogni componente per facile accesso
        heroComponent: componentsByType.home_hero,
        aboutComponent: componentsByType.home_about,
        pillarsComponent: componentsByType.home_pillars,
        splitSectionComponent: componentsByType.home_split_section,
        separatorBannerComponent: componentsByType.home_separator_banner,
        contactComponent: componentsByType.home_contact,
        standardsComponent: componentsByType.home_standards,
      };
    },
  });
};

/**
 * Hook per ottenere componente home specifico per tipo
 * @param {string} componentType - Tipo componente
 * @returns {Object} { data, loading, error }
 */
export const useStrapiHomeComponent = (componentType) => {
  return useStrapi(`/home-components?filters[componentType][$eq]=${componentType}&populate=*`, {
    transform: (result) => result?.data?.[0] || null,
    dependencies: [componentType],
  });
};

/**
 * Hook per ottenere media assets per categoria
 * @param {string} category - Categoria media
 * @returns {Object} { data, loading, error }
 */
export const useStrapiMedia = (category) => {
  return useStrapi(`/media-assets?filters[category][$eq]=${category}&populate=*`, {
    transform: (result) => result?.data || [],
    dependencies: [category],
    immediate: !!category,
  });
};

/**
 * Hook per ricerca globale
 */
export const useStrapiSearch = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = useCallback(async (query, collections = ['page-contents']) => {
    if (!query?.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const searchPromises = collections.map(collection =>
        fetchStrapi(`/${collection}?filters[$or][0][title][$containsi]=${query}&filters[$or][1][content][$containsi]=${query}&populate=*`)
      );

      const responses = await Promise.all(searchPromises);
      const allResults = responses.flatMap(response => response?.data || []);
      
      setResults(allResults);
    } catch (err) {
      setError(err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const clearResults = useCallback(() => {
    setResults([]);
    setError(null);
  }, []);

  return {
    results,
    loading,
    error,
    search,
    clearResults,
  };
};

/**
 * Hook per gestione stato della connessione
 */
export const useStrapiConnection = () => {
  const [isConnected, setIsConnected] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [lastCheck, setLastCheck] = useState(null);

  const checkConnection = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${STRAPI_BASE_URL}/api/pages?pagination[limit]=1`, {
        headers: {
          ...(API_TOKEN && { 'Authorization': `Bearer ${API_TOKEN}` }),
        },
      });
      setIsConnected(response.ok);
      setLastCheck(new Date());
    } catch (error) {
      setIsConnected(false);
      setLastCheck(new Date());
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    checkConnection();
    
    // Controlla connessione ogni 30 secondi
    const interval = setInterval(checkConnection, 30000);
    
    return () => clearInterval(interval);
  }, [checkConnection]);

  return {
    isConnected,
    isLoading,
    lastCheck,
    checkConnection,
  };
};

/**
 * Funzione helper per costruire URL completo delle immagini Strapi
 * @param {string|Object} imageData - Dati immagine da Strapi
 * @returns {string|null} URL completo dell'immagine
 */
export const getStrapiImageUrl = (imageData) => {
  if (!imageData) return null;
  
  // Se è già un URL completo, restituiscilo così
  if (typeof imageData === 'string' && imageData.startsWith('http')) {
    return imageData;
  }

  // Se è un oggetto con url
  if (imageData.url) {
    return imageData.url.startsWith('http') 
      ? imageData.url 
      : `${STRAPI_BASE_URL}${imageData.url}`;
  }

  // Se è solo un path
  if (typeof imageData === 'string') {
    return imageData.startsWith('/') 
      ? `${STRAPI_BASE_URL}${imageData}`
      : imageData;
  }

  return null;
};

/**
 * Utility per pulire la cache
 */
export const clearStrapiCache = () => {
  cache.clear();
};

/**
 * Hook per preload dei contenuti critici
 */
export const useStrapiPreload = (endpoints = []) => {
  useEffect(() => {
    // Preload in background
    const preloadEndpoints = async () => {
      const preloadPromises = endpoints.map(endpoint =>
        fetchStrapi(endpoint).catch(console.warn)
      );
      
      await Promise.allSettled(preloadPromises);
    };

    if (endpoints.length > 0) {
      preloadEndpoints();
    }
  }, [endpoints]);
};

/**
 * Funzione helper per ottenere dati fallback in caso di errore API
 * @param {Object} fallbackData - Dati di fallback
 * @param {boolean} hasError - Se c'è un errore API
 * @returns {Object} Dati da utilizzare
 */
export const useFallbackData = (fallbackData, hasError) => (hasError ? fallbackData : null);

// Esportazioni per uso diretto
export { fetchStrapi };
export default {
  useStrapi,
  useStrapiPage,
  useStrapiHome,
  useStrapiHomeComponent,
  useStrapiMedia,
  useStrapiSearch,
  useStrapiConnection,
  getStrapiImageUrl,
  clearStrapiCache,
  useStrapiPreload,
  useFallbackData,
  fetchStrapi
};
