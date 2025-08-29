'use client';

import PropTypes from 'prop-types';
import { useState, useEffect, forwardRef } from 'react';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { alpha, useTheme } from '@mui/material/styles';

import { getRatio } from './utils';
import { 
  generateOptimizedUrl,
  generateSrcSet, 
  getSupportedFormat,
  getAutoOptimization 
} from '../../utils/image-optimizer';

// ----------------------------------------------------------------------

const LightweightImage = forwardRef(
  (
    {
      src,
      alt,
      ratio,
      overlay,
      priority = false,
      loading = 'lazy',
      quality = 'auto',
      formats = ['webp', 'jpg'],
      sizes,
      containerWidth,
      containerHeight,
      onLoad,
      onError,
      sx,
      ...other
    },
    ref
  ) => {
    const theme = useTheme();
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [currentSrc, setCurrentSrc] = useState('');

    // Ottimizzazione automatica
    const autoConfig = getAutoOptimization(src, { 
      width: containerWidth, 
      height: containerHeight 
    });

    // Genera URL ottimizzate
    const optimizedSources = generateSrcSet(src, {
      formats: formats.length > 0 ? formats : autoConfig.formats,
      quality: quality === 'auto' ? autoConfig.quality : quality,
      width: autoConfig.width,
    });

    // Fallback per browser non supportati
    const fallbackSrc = generateOptimizedUrl(src, {
      width: autoConfig.width,
      quality: autoConfig.quality,
      format: 'jpg',
    });

    useEffect(() => {
      // Preload per immagini prioritarie
      if (priority && src) {
        const format = getSupportedFormat();
        const optimizedSrc = generateOptimizedUrl(src, {
          width: autoConfig.width,
          quality: autoConfig.quality,
          format,
        });
        
        const img = new Image();
        img.src = optimizedSrc;
        setCurrentSrc(optimizedSrc);
      } else {
        setCurrentSrc(fallbackSrc);
      }
    }, [src, priority, autoConfig.width, autoConfig.quality, fallbackSrc]);

    const handleLoad = (event) => {
      setIsLoading(false);
      setHasError(false);
      if (onLoad) onLoad(event);
    };

    const handleError = (event) => {
      setIsLoading(false);
      setHasError(true);
      if (onError) onError(event);
    };

    const overlayStyles = !!overlay && {
      '&:before': {
        content: "''",
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        zIndex: 1,
        position: 'absolute',
        background: overlay || alpha(theme.palette.grey[900], 0.48),
      },
    };

    // Placeholder durante il caricamento
    const renderSkeleton = (
      <Skeleton
        variant="rectangular"
        sx={{
          width: 1,
          height: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          bgcolor: alpha(theme.palette.grey[500], 0.08),
          borderRadius: 1,
        }}
        animation="wave"
      />
    );

    // Messaggio di errore
    const renderError = (
      <Box
        sx={{
          width: 1,
          height: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: alpha(theme.palette.grey[500], 0.04),
          color: 'text.disabled',
          fontSize: '2rem',
          borderRadius: 1,
        }}
      >
        📷
      </Box>
    );

    const imageElement = (
      <Box
        component="picture"
        sx={{ 
          width: 1, 
          height: 1,
          display: 'block'
        }}
      >
        {/* Sorgenti ottimizzate per browser moderni */}
        {Object.entries(optimizedSources).map(([format, srcSet]) => (
          <source
            key={format}
            type={`image/${format}`}
            srcSet={srcSet}
            sizes={sizes || '100vw'}
          />
        ))}
        
        {/* Fallback per tutti i browser */}
        <Box
          component="img"
          ref={ref}
          src={currentSrc}
          alt={alt || 'Oracle Executive Protection'}
          loading={priority ? 'eager' : loading}
          onLoad={handleLoad}
          onError={handleError}
          sx={{
            width: 1,
            height: 1,
            objectFit: 'cover',
            verticalAlign: 'bottom',
            transition: 'opacity 0.3s ease-in-out',
            opacity: isLoading ? 0 : 1,
            // Performance optimizations
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            ...(!!ratio && {
              top: 0,
              left: 0,
              position: 'absolute',
            }),
          }}
          {...other}
        />
      </Box>
    );

    return (
      <Box
        component="span"
        className="lightweight-image"
        sx={{
          overflow: 'hidden',
          position: 'relative',
          verticalAlign: 'bottom',
          display: 'inline-block',
          ...(!!ratio && {
            width: 1,
          }),
          '& picture': {
            width: 1,
            height: 1,
            verticalAlign: 'bottom',
            ...(!!ratio && {
              pt: getRatio(ratio),
            }),
          },
          ...overlayStyles,
          ...sx,
        }}
      >
        {/* Skeleton durante caricamento */}
        {isLoading && !hasError && renderSkeleton}
        
        {/* Messaggio di errore */}
        {hasError && renderError}
        
        {/* Immagine ottimizzata */}
        {imageElement}
      </Box>
    );
  }
);

LightweightImage.propTypes = {
  alt: PropTypes.string,
  containerHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  containerWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  formats: PropTypes.arrayOf(PropTypes.string),
  loading: PropTypes.oneOf(['lazy', 'eager']),
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  overlay: PropTypes.string,
  priority: PropTypes.bool,
  quality: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ratio: PropTypes.oneOf(['4/3', '3/4', '6/4', '4/6', '16/9', '9/16', '21/9', '9/21', '1/1']),
  sizes: PropTypes.string,
  src: PropTypes.string.isRequired,
  sx: PropTypes.object,
};

export default LightweightImage;
