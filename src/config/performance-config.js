// Performance configuration for optimal loading

// Critical images that should be preloaded
export const CRITICAL_IMAGES = [
  '/logo/logo_black.png',
  '/assets/placeholder.svg',
  '/assets/transparent.png',
];

// Page-specific image preload lists
export const PAGE_IMAGES = {
  home: [
    '/assets/images/hero-bg.jpg',
    '/assets/images/services-bg.jpg',
    '/assets/images/about-preview.jpg',
  ],
  'chi-siamo': [
    '/assets/images/about-hero.jpg',
    '/assets/images/team-bg.jpg',
  ],
  'travel-risk': [
    '/assets/images/travel-hero.jpg',
    '/assets/images/risk-assessment.jpg',
  ],
  'protezione-strategica': [
    '/assets/images/strategic-hero.jpg',
    '/assets/images/executive-protection.jpg',
  ],
  eventi: [
    '/assets/images/events-hero.jpg',
    '/assets/images/event-security.jpg',
  ],
  'luxury-security': [
    '/assets/images/luxury-hero.jpg',
    '/assets/images/vip-protection.jpg',
  ],
  contatti: [
    '/assets/images/contact-hero.jpg',
    '/assets/images/office-bg.jpg',
  ],
};

// Animation performance settings
export const ANIMATION_CONFIG = {
  // Durations in milliseconds
  pageTransition: 600,
  fastTransition: 300,
  slowTransition: 800,
  
  // Easing functions
  easing: {
    entrance: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    exit: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  
  // Reduced motion preferences
  respectReducedMotion: true,
  
  // Performance modes
  modes: {
    performance: {
      pageTransition: 300,
      animationDuration: 200,
      enableParallax: false,
    },
    quality: {
      pageTransition: 600,
      animationDuration: 400,
      enableParallax: true,
    },
  },
};

// Loading configuration
export const LOADING_CONFIG = {
  // Minimum loading times to prevent flashing
  minLoadTime: {
    page: 800,
    component: 300,
    image: 100,
  },
  
  // Preload strategies
  preload: {
    critical: true,
    nextPage: false, // Enable when navigation is predictable
    images: true,
  },
  
  // Progressive loading
  progressive: {
    enabled: true,
    chunkSize: 3,
    chunkDelay: 100,
  },
};

// Image optimization settings
export const IMAGE_CONFIG = {
  // Quality settings
  quality: {
    hero: 85,
    content: 75,
    thumbnail: 60,
    placeholder: 20,
  },
  
  // Lazy loading
  lazyLoading: {
    threshold: 10, // pixels from viewport
    rootMargin: '50px 0px',
    blur: true,
    fadeIn: true,
  },
  
  // Placeholder strategy
  placeholder: {
    blur: '/assets/placeholder.svg',
    transparent: '/assets/transparent.png',
    skeleton: true,
  },
  
  // Responsive breakpoints
  breakpoints: {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
    large: 1440,
  },
};

// Performance monitoring
export const MONITORING_CONFIG = {
  // Core Web Vitals thresholds
  thresholds: {
    LCP: 2500, // Largest Contentful Paint
    FID: 100,  // First Input Delay
    CLS: 0.1,  // Cumulative Layout Shift
  },
  
  // Performance budgets
  budgets: {
    totalSize: 2000, // KB
    imageSize: 1000, // KB
    scriptSize: 500, // KB
  },
  
  // Monitoring enabled
  enabled: process.env.NODE_ENV === 'production',
};

// Browser optimization
export const BROWSER_CONFIG = {
  // Hardware acceleration
  acceleration: {
    transform3d: true,
    willChange: ['transform', 'opacity'],
    backfaceVisibility: 'hidden',
  },
  
  // Memory management
  memory: {
    cleanupInterval: 30000, // 30 seconds
    maxCacheSize: 50, // MB
  },
  
  // Service Worker
  serviceWorker: {
    enabled: true,
    cacheStrategy: 'stale-while-revalidate',
  },
};
