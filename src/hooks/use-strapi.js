'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
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
 * @param {string} locale - Locale (default: 'it')
 * @returns {Object} { data, loading, error }
 */
export const useStrapiPage = (slug, locale = 'it') => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchPage = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await strapiApi.get(`/page-contents/slug/${slug}`, {
          params: { locale }
        });

        setData(response.data);
      } catch (err) {
        console.error('Errore fetch pagina Strapi:', err);
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [slug, locale]);

  return { data, loading, error };
};

/**
 * Hook per ottenere tutti i componenti della homepage
 * @param {string} locale - Locale (default: 'it')
 * @returns {Object} { data, loading, error }
 */
export const useStrapiHome = (locale = 'it') => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHomeComponents = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await strapiApi.get('/home-components/visible', {
          params: { locale }
        });

        // Ordina per order_position
        const sortedData = response.data.sort((a, b) => a.order_position - b.order_position);
        setData(sortedData);
      } catch (err) {
        console.error('Errore fetch home components:', err);
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeComponents();
  }, [locale]);

  return { data, loading, error };
};

/**
 * Hook per ottenere componente home specifico per tipo
 * @param {string} componentType - Tipo componente
 * @param {string} locale - Locale (default: 'it')
 * @returns {Object} { data, loading, error }
 */
export const useStrapiHomeComponent = (componentType, locale = 'it') => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!componentType) return;

    const fetchComponent = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await strapiApi.get(`/home-components/type/${componentType}`, {
          params: { locale }
        });

        // Prendi il primo componente se ce ne sono più di uno
        setData(response.data[0] || null);
      } catch (err) {
        console.error('Errore fetch home component:', err);
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComponent();
  }, [componentType, locale]);

  return { data, loading, error };
};

/**
 * Hook per ottenere media assets per categoria
 * @param {string} category - Categoria media
 * @param {string} locale - Locale (default: 'it')
 * @returns {Object} { data, loading, error }
 */
export const useStrapiMedia = (category, locale = 'it') => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!category) return;

    const fetchMedia = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await strapiApi.get(`/media-assets/category/${category}`, {
          params: { locale }
        });

        setData(response.data);
      } catch (err) {
        console.error('Errore fetch media assets:', err);
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, [category, locale]);

  return { data, loading, error };
};

/**
 * Hook per ottenere impostazioni globali del sito
 * @param {string} locale - Locale (default: 'it')
 * @returns {Object} { data, loading, error }
 */
export const useStrapiGlobal = (locale = 'it') => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGlobal = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await strapiApi.get('/global-setting', {
          params: { locale }
        });

        setData(response.data);
      } catch (err) {
        console.error('Errore fetch global settings:', err);
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGlobal();
  }, [locale]);

  return { data, loading, error };
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
 * Funzione helper per ottenere dati fallback in caso di errore API
 * @param {Object} fallbackData - Dati di fallback
 * @param {boolean} hasError - Se c'è un errore API
 * @returns {Object} Dati da utilizzare
 */
export const useFallbackData = (fallbackData, hasError) => (hasError ? fallbackData : null);

// Esportazioni per uso diretto delle API
export { strapiApi };
export default {
  useStrapiPage,
  useStrapiHome,
  useStrapiHomeComponent,
  useStrapiMedia,
  useStrapiGlobal,
  getStrapiImageUrl,
  useFallbackData,
  strapiApi
};
