'use client';

// Utility per ottimizzazione automatica delle immagini

// Configurazione formati e qualità
const IMAGE_FORMATS = {
  webp: { quality: 80, fallback: 'jpg' },
  avif: { quality: 65, fallback: 'webp' },
  jpg: { quality: 85 },
  png: { quality: 90 }, // Per immagini con trasparenza
};

// Breakpoints responsive
const RESPONSIVE_BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  large: 1440,
  xl: 1920,
};

// Generazione URL ottimizzate (per servizi come Cloudinary, ImageKit, etc.)
export const generateOptimizedUrl = (src, options = {}) => {
  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
    crop = 'smart',
    blur,
    placeholder = false,
  } = options;

  // Se l'immagine è locale, restituisci l'URL originale
  if (src.startsWith('/') && !src.startsWith('//')) {
    return src;
  }

  // Esempio per Cloudinary (sostituire con il proprio servizio)
  // const cloudinaryBase = 'https://res.cloudinary.com/your-cloud-name/image/fetch/';
  // let transformations = [];
  
  // if (quality !== 'auto') transformations.push(`q_${quality}`);
  // if (format !== 'auto') transformations.push(`f_${format}`);
  // if (width) transformations.push(`w_${width}`);
  // if (height) transformations.push(`h_${height}`);
  // if (crop) transformations.push(`c_${crop}`);
  // if (blur) transformations.push(`e_blur:${blur}`);
  
  // return `${cloudinaryBase}${transformations.join(',')}/${encodeURIComponent(src)}`;

  return src; // Fallback per ora
};

// Genera srcSet responsive
export const generateSrcSet = (src, options = {}) => {
  const { formats = ['webp', 'jpg'], breakpoints = RESPONSIVE_BREAKPOINTS } = options;
  
  const srcSets = {};
  
  formats.forEach(format => {
    const sources = Object.entries(breakpoints)
      .map(([name, width]) => {
        const optimizedUrl = generateOptimizedUrl(src, {
          ...options,
          width,
          format,
        });
        return `${optimizedUrl} ${width}w`;
      })
      .join(', ');
    
    srcSets[format] = sources;
  });
  
  return srcSets;
};

// Rileva il formato supportato dal browser
export const getSupportedFormat = () => {
  if (typeof window === 'undefined') return 'jpg';
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  // Test AVIF support
  if (canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0) {
    return 'avif';
  }
  
  // Test WebP support
  if (canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0) {
    return 'webp';
  }
  
  return 'jpg';
};

// Preload con formato ottimizzato
export const preloadOptimizedImage = (src, options = {}) => {
  if (typeof window === 'undefined') return Promise.resolve();
  
  const format = getSupportedFormat();
  const optimizedSrc = generateOptimizedUrl(src, { ...options, format });
  
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = optimizedSrc;
    
    link.onload = resolve;
    link.onerror = reject;
    
    document.head.appendChild(link);
  });
};

// Compressione lato client (per upload)
export const compressImage = (file, options = {}) => {
  const {
    maxWidth = 1920,
    maxHeight = 1080,
    quality = 0.8,
    format = 'image/jpeg',
  } = options;

  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      // Calcola le dimensioni mantenendo l'aspect ratio
      let { width, height } = img;
      
      if (width > maxWidth || height > maxHeight) {
        const ratio = Math.min(maxWidth / width, maxHeight / height);
        width *= ratio;
        height *= ratio;
      }

      canvas.width = width;
      canvas.height = height;

      // Disegna e comprimi
      ctx.drawImage(img, 0, 0, width, height);
      
      canvas.toBlob(resolve, format, quality);
    };

    img.src = URL.createObjectURL(file);
  });
};

// Converti dimensioni CSS in pixels
export const parseDimension = (dimension, containerSize = 1920) => {
  if (typeof dimension === 'number') return dimension;
  if (typeof dimension !== 'string') return null;
  
  if (dimension.includes('%')) {
    return Math.round((parseFloat(dimension) / 100) * containerSize);
  }
  
  if (dimension.includes('px')) {
    return parseInt(dimension.replace('px', ''), 10);
  }
  
  if (dimension.includes('vw')) {
    return Math.round((parseFloat(dimension) / 100) * window.innerWidth);
  }
  
  if (dimension.includes('vh')) {
    return Math.round((parseFloat(dimension) / 100) * window.innerHeight);
  }
  
  return parseInt(dimension, 10) || null;
};

// Calcola dimensioni ottimali based sul container
export const getOptimalDimensions = (containerWidth, containerHeight, imageAspectRatio) => {
  if (!containerWidth && !containerHeight) return {};
  
  let width = containerWidth;
  let height = containerHeight;
  
  if (imageAspectRatio && containerWidth && !containerHeight) {
    height = Math.round(containerWidth / imageAspectRatio);
  } else if (imageAspectRatio && containerHeight && !containerWidth) {
    width = Math.round(containerHeight * imageAspectRatio);
  }
  
  return { width, height };
};

// Lista delle immagini da ottimizzare
export const IMAGES_TO_OPTIMIZE = {
  // Immagini hero - alta qualità ma compresse
  hero: {
    formats: ['avif', 'webp', 'jpg'],
    quality: 85,
    breakpoints: [480, 768, 1024, 1440, 1920],
  },
  
  // Immagini di contenuto - qualità media
  content: {
    formats: ['webp', 'jpg'],
    quality: 75,
    breakpoints: [400, 600, 800, 1200],
  },
  
  // Thumbnail - dimensioni piccole
  thumbnail: {
    formats: ['webp', 'jpg'],
    quality: 60,
    breakpoints: [150, 300, 400],
  },
  
  // Loghi e icone - PNG con trasparenza
  logo: {
    formats: ['webp', 'png'],
    quality: 90,
    breakpoints: [100, 200, 400],
  },
};

// Rileva tipo di immagine dal path
export const detectImageType = (src) => {
  if (src.includes('/logo/') || src.includes('/icons/')) return 'logo';
  if (src.includes('/thumb/') || src.includes('-thumb')) return 'thumbnail';
  if (src.includes('/hero/') || src.includes('-hero')) return 'hero';
  return 'content';
};

// Ottimizzazione automatica basata sul tipo
export const getAutoOptimization = (src, container = {}) => {
  const type = detectImageType(src);
  const config = IMAGES_TO_OPTIMIZE[type];
  
  const { width: containerWidth, height: containerHeight } = container;
  const optimalWidth = containerWidth ? parseDimension(containerWidth) : null;
  
  // Scegli il breakpoint più appropriato
  let targetWidth = optimalWidth;
  if (!targetWidth && config.breakpoints) {
    targetWidth = config.breakpoints[Math.floor(config.breakpoints.length / 2)];
  }
  
  return {
    width: targetWidth,
    quality: config.quality,
    formats: config.formats,
  };
};
