'use client';

import { useRef, useEffect } from 'react';

// ----------------------------------------------------------------------

export const usePagePerformance = () => {
  const performanceRef = useRef({});

  useEffect(() => {
    // Preload critical resources
    const preloadCriticalAssets = () => {
      const criticalImages = [
        '/assets/images/hero-bg.jpg',
        '/logo/logo_black.png',
        '/assets/placeholder.svg',
      ];

      criticalImages.forEach((src) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize fonts loading
    const optimizeFonts = () => {
      const fontLinks = document.querySelectorAll('link[rel="stylesheet"]');
      fontLinks.forEach((link) => {
        link.setAttribute('rel', 'preload');
        link.setAttribute('as', 'style');
        link.setAttribute('onload', "this.onload=null;this.rel='stylesheet'");
      });
    };

    // Minimize layout shift
    const preventLayoutShift = () => {
      // Force hardware acceleration on main containers
      const containers = document.querySelectorAll('.MuiContainer-root, .component-image');
      containers.forEach((container) => {
        container.style.transform = 'translateZ(0)';
        container.style.willChange = 'transform';
        container.style.backfaceVisibility = 'hidden';
      });
    };

    preloadCriticalAssets();
    optimizeFonts();
    preventLayoutShift();

    // Performance monitoring
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        performanceRef.current[entry.name] = entry;
      });
    });

    observer.observe({ entryTypes: ['measure', 'navigation', 'resource'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  return performanceRef.current;
};

// Image preloader utility
export const preloadImage = (src) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = src;
  });

// Batch image preloader
export const preloadImages = async (sources) => {
  try {
    await Promise.all(sources.map(preloadImage));
    return true;
  } catch (error) {
    console.warn('Some images failed to preload:', error);
    return false;
  }
};

// Progressive loading hook
export const useProgressiveLoading = () => {
  const loadedImages = useRef(new Set());

  const markAsLoaded = (src) => {
    loadedImages.current.add(src);
  };

  const isLoaded = (src) => loadedImages.current.has(src);

  const preloadNextImages = async (sources) => {
    // Load in chunks to avoid overwhelming the browser
    const chunks = [];
    const chunkSize = 3;
    
    for (let i = 0; i < sources.length; i += chunkSize) {
      chunks.push(sources.slice(i, i + chunkSize));
    }

    // Process chunks sequentially
    const processChunks = async (chunkArray, index = 0) => {
      if (index >= chunkArray.length) return;
      
      const chunk = chunkArray[index];
      await preloadImages(chunk);
      chunk.forEach(markAsLoaded);
      
      // Small delay between chunks
      setTimeout(() => {
        processChunks(chunkArray, index + 1);
      }, 100);
    };

    await processChunks(chunks);
  };

  return {
    markAsLoaded,
    isLoaded,
    preloadNextImages,
  };
};
