'use client';

import { useRef, useState, useEffect, useCallback } from 'react';

import { getSupportedFormat, generateOptimizedUrl, preloadOptimizedImage } from '../utils/image-optimizer';

// Hook per gestire il caricamento progressivo delle immagini
export const useProgressiveImageLoading = () => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [loadingImages, setLoadingImages] = useState(new Set());
  const preloadQueueRef = useRef([]);
  const isProcessingRef = useRef(false);

  // Marca un'immagine come caricata
  const markAsLoaded = useCallback((src) => {
    setLoadedImages(prev => new Set([...prev, src]));
    setLoadingImages(prev => {
      const newSet = new Set(prev);
      newSet.delete(src);
      return newSet;
    });
  }, []);

  // Controlla se un'immagine è già caricata
  const isLoaded = useCallback((src) => loadedImages.has(src), [loadedImages]);

  // Controlla se un'immagine è in caricamento
  const isLoading = useCallback((src) => loadingImages.has(src), [loadingImages]);

  // Carica una singola immagine ottimizzata
  const loadOptimizedImage = useCallback(async (src, options = {}) => {
    if (isLoaded(src) || isLoading(src)) {
      return Promise.resolve();
    }

    setLoadingImages(prev => new Set([...prev, src]));

    try {
      const format = getSupportedFormat();
      await preloadOptimizedImage(src, { ...options, format });
      markAsLoaded(src);
    } catch (error) {
      console.warn(`Failed to load optimized image: ${src}`, error);
      setLoadingImages(prev => {
        const newSet = new Set(prev);
        newSet.delete(src);
        return newSet;
      });
      throw error;
    }
  }, [isLoaded, isLoading, markAsLoaded]);

  // Aggiunge immagini alla coda di preload
  const addToPreloadQueue = useCallback((images) => {
    const imagesToAdd = Array.isArray(images) ? images : [images];
    preloadQueueRef.current.push(...imagesToAdd.filter(img => !isLoaded(img)));
    processPreloadQueue();
  }, [isLoaded]);

  // Processa la coda di preload
  const processPreloadQueue = useCallback(async () => {
    if (isProcessingRef.current || preloadQueueRef.current.length === 0) {
      return;
    }

    isProcessingRef.current = true;

    // Carica immagini in batch di 3
    const batchSize = 3;
    while (preloadQueueRef.current.length > 0) {
      const batch = preloadQueueRef.current.splice(0, batchSize);
      
      // Processa il batch in parallelo
      const promises = batch.map(src => 
        loadOptimizedImage(src).catch(error => {
          console.warn(`Preload failed for ${src}:`, error);
          return null;
        })
      );

      await Promise.allSettled(promises);

      // Piccola pausa tra i batch per non sovraccaricare il browser
      if (preloadQueueRef.current.length > 0) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }

    isProcessingRef.current = false;
  }, [loadOptimizedImage]);

  return {
    loadedImages: Array.from(loadedImages),
    loadingImages: Array.from(loadingImages),
    isLoaded,
    isLoading,
    markAsLoaded,
    loadOptimizedImage,
    addToPreloadQueue,
  };
};

// Hook per ottimizzazione automatica delle immagini
export const useImageOptimization = (containerRef) => {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const supportedFormat = useRef(getSupportedFormat());

  useEffect(() => {
    if (!containerRef?.current) return;

    const updateSize = () => {
      const container = containerRef.current;
      if (container) {
        const { width, height } = container.getBoundingClientRect();
        setContainerSize({ width: Math.round(width), height: Math.round(height) });
      }
    };

    // Observer per cambiamenti di dimensione
    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(containerRef.current);

    // Dimensione iniziale
    updateSize();

    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef]);

  // Genera URL ottimizzata basata sul container
  const getOptimizedUrl = useCallback((src, options = {}) => {
    const { width, height } = containerSize;
    return generateOptimizedUrl(src, {
      width: width || undefined,
      height: height || undefined,
      format: supportedFormat.current,
      ...options,
    });
  }, [containerSize]);

  return {
    containerSize,
    supportedFormat: supportedFormat.current,
    getOptimizedUrl,
  };
};

// Hook per gestire il lazy loading con Intersection Observer
export const useLazyImageLoading = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '50px 0px',
    triggerOnce = true,
  } = options;

  const [inView, setInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  const handleImageLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return {
    ref: elementRef,
    inView,
    isLoaded,
    handleImageLoad,
    shouldLoad: inView,
  };
};

// Hook per gestire le immagini critiche
export const useCriticalImages = (criticalImages = []) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);
  const { loadOptimizedImage } = useProgressiveImageLoading();

  useEffect(() => {
    if (criticalImages.length === 0) {
      setAllLoaded(true);
      return;
    }

    let loadedCount = 0;

    const loadCriticalImages = async () => {
      const promises = criticalImages.map(async (src) => {
        try {
          await loadOptimizedImage(src, { priority: true });
          loadedCount += 1;
          setLoadingProgress((loadedCount / criticalImages.length) * 100);
        } catch (error) {
          console.warn(`Failed to load critical image: ${src}`, error);
          loadedCount += 1;
          setLoadingProgress((loadedCount / criticalImages.length) * 100);
        }
      });

      await Promise.allSettled(promises);
      setAllLoaded(true);
    };

    loadCriticalImages();
  }, [criticalImages, loadOptimizedImage]);

  return {
    loadingProgress,
    allLoaded,
  };
};
