'use client';

/**
 * Componente per gestire immagini hero dinamiche da Global Settings
 * Supporta fallback e ottimizzazioni per performance
 */

import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';

import { useSiteImages } from 'src/hooks/use-global-settings';
import { LightweightImage } from '../image';

// ----------------------------------------------------------------------

const DynamicHeroImage = forwardRef(({ 
  fallbackImage = '/assets/images/hero-bg-default.jpg',
  alt = 'Oracle Executive Protection',
  overlay = true,
  overlayColor = 'rgba(0,0,0,0.4)',
  sx,
  children,
  ...other 
}, ref) => {
  const { heroBackground, loading } = useSiteImages();

  const imageUrl = heroBackground || fallbackImage;

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        ...sx
      }}
      {...other}
    >
      {/* Immagine di background */}
      <LightweightImage
        src={imageUrl}
        alt={alt}
        priority
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: loading ? 0.7 : 1,
          transition: 'opacity 0.5s ease'
        }}
      />

      {/* Overlay opzionale */}
      {overlay && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: overlayColor,
            zIndex: 1
          }}
        />
      )}

      {/* Contenuto sovrapposto */}
      {children && (
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            height: '100%'
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  );
});

DynamicHeroImage.propTypes = {
  fallbackImage: PropTypes.string,
  alt: PropTypes.string,
  overlay: PropTypes.bool,
  overlayColor: PropTypes.string,
  sx: PropTypes.object,
  children: PropTypes.node,
};

export default DynamicHeroImage;
