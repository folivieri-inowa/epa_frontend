'use client';

import { useEffect } from 'react';

import { BROWSER_CONFIG, MONITORING_CONFIG } from '../../config/performance-config';

// ----------------------------------------------------------------------

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Apply hardware acceleration optimizations
    const applyHardwareAcceleration = () => {
      const style = document.createElement('style');
      style.textContent = `
        /* Hardware acceleration for smooth animations */
        .MuiContainer-root,
        .component-image,
        .MuiBox-root,
        [class*="animate"],
        [class*="transition"] {
          transform: translateZ(0);
          backface-visibility: ${BROWSER_CONFIG.acceleration.backfaceVisibility};
          will-change: ${BROWSER_CONFIG.acceleration.willChange.join(', ')};
        }

        /* Optimize font rendering */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Prevent layout shift */
        img, video {
          max-width: 100%;
          height: auto;
        }

        /* Optimize animations */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        /* GPU acceleration for specific components */
        .component-image-wrapper {
          transform: translate3d(0, 0, 0);
        }

        /* Prevent FOUC (Flash of Unstyled Content) */
        .page-loading {
          visibility: hidden;
        }

        .page-loaded {
          visibility: visible;
        }
      `;
      document.head.appendChild(style);
    };

    // Performance monitoring
    const setupPerformanceMonitoring = () => {
      if (!MONITORING_CONFIG.enabled) return;

      // Monitor Core Web Vitals
      const observeWebVitals = () => {
        if ('web-vital' in window) {
          window.webVital.getCLS(console.log);
          window.webVital.getFID(console.log);
          window.webVital.getLCP(console.log);
        }
      };

      // Monitor resource loading
      const observeResources = () => {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.initiatorType === 'img' && entry.transferSize > 100000) {
              console.warn(`Large image detected: ${entry.name} (${Math.round(entry.transferSize / 1024)}KB)`);
            }
          });
        });
        observer.observe({ entryTypes: ['resource'] });
      };

      observeWebVitals();
      observeResources();
    };

    // Memory management
    const setupMemoryManagement = () => {
      const cleanupInterval = setInterval(() => {
        // Clean up unused images
        const images = document.querySelectorAll('img[data-loaded="true"]');
        images.forEach((img) => {
          if (!img.isConnected) {
            img.src = '';
            img.removeAttribute('src');
          }
        });

        // Force garbage collection if available
        if (window.gc) {
          window.gc();
        }
      }, BROWSER_CONFIG.memory.cleanupInterval);

      return () => clearInterval(cleanupInterval);
    };

    // Apply optimizations
    applyHardwareAcceleration();
    setupPerformanceMonitoring();
    const cleanupMemory = setupMemoryManagement();

    // Cleanup
    return () => {
      if (cleanupMemory) cleanupMemory();
    };
  }, []);

  return null;
}
