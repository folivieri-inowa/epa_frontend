'use client';

import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { alpha, useTheme } from '@mui/material/styles';

import { getRatio } from './utils';

// ----------------------------------------------------------------------

const OptimizedImage = forwardRef(
  (
    {
      ratio,
      overlay,
      disabledEffect = false,
      // Performance optimizations
      priority = false,
      preload = false,
      blur = true,
      //
      alt,
      src,
      afterLoad,
      delayTime = 100,
      threshold = 10,
      beforeLoad,
      delayMethod = 'debounce',
      placeholder,
      wrapperProps,
      scrollPosition,
      effect = blur ? 'blur' : undefined,
      visibleByDefault = priority,
      wrapperClassName,
      useIntersectionObserver = true,
      sx,
      ...other
    },
    ref
  ) => {
    const theme = useTheme();
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

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

    const handleLoadStart = () => {
      setIsLoading(true);
      setHasError(false);
      if (beforeLoad) beforeLoad();
    };

    const handleLoadComplete = () => {
      setIsLoading(false);
      if (afterLoad) afterLoad();
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
    };

    // Placeholder skeleton
    const renderSkeleton = (
      <Skeleton
        variant="rectangular"
        sx={{
          width: 1,
          height: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          bgcolor: alpha(theme.palette.grey[500], 0.12),
          borderRadius: 1,
        }}
        animation="wave"
      />
    );

    // Error fallback
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
          bgcolor: alpha(theme.palette.grey[500], 0.08),
          color: 'text.disabled',
          borderRadius: 1,
        }}
      >
        📷
      </Box>
    );

    const content = (
      <>
        {/* Skeleton placeholder durante il caricamento */}
        {isLoading && !hasError && renderSkeleton}
        
        {/* Messaggio di errore se l'immagine non carica */}
        {hasError && renderError}
        
        {/* Immagine ottimizzata */}
        <Box
          component={LazyLoadImage}
          //
          alt={alt || 'Oracle Executive Protection'}
          src={src}
          onLoad={handleLoadComplete}
          onError={handleError}
          beforeLoad={handleLoadStart}
          delayTime={delayTime}
          threshold={threshold}
          delayMethod={delayMethod}
          placeholder={placeholder}
          wrapperProps={wrapperProps}
          scrollPosition={scrollPosition}
          visibleByDefault={visibleByDefault}
          effect={disabledEffect ? undefined : effect}
          useIntersectionObserver={useIntersectionObserver}
          wrapperClassName={wrapperClassName || 'component-image-wrapper'}
          placeholderSrc={
            disabledEffect 
              ? '/assets/transparent.png' 
              : '/assets/placeholder.svg'
          }
          //
          sx={{
            width: 1,
            height: 1,
            objectFit: 'cover',
            verticalAlign: 'bottom',
            transition: 'opacity 0.3s ease-in-out',
            opacity: isLoading ? 0 : 1,
            ...(!!ratio && {
              top: 0,
              left: 0,
              position: 'absolute',
            }),
            // Ottimizzazione rendering
            willChange: 'transform, opacity',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
          }}
        />
      </>
    );

    return (
      <Box
        ref={ref}
        component="span"
        className="component-image"
        sx={{
          overflow: 'hidden',
          position: 'relative',
          verticalAlign: 'bottom',
          display: 'inline-block',
          ...(!!ratio && {
            width: 1,
          }),
          '& span.component-image-wrapper': {
            width: 1,
            height: 1,
            verticalAlign: 'bottom',
            backgroundSize: 'cover !important',
            ...(!!ratio && {
              pt: getRatio(ratio),
            }),
          },
          // Preload hint per immagini prioritarie
          ...(preload && {
            '&::before': {
              content: "''",
              position: 'absolute',
              top: -1000,
              left: -1000,
              width: 1,
              height: 1,
              backgroundImage: `url(${src})`,
              backgroundSize: 0,
            },
          }),
          ...overlayStyles,
          ...sx,
        }}
        {...other}
      >
        {content}
      </Box>
    );
  }
);

OptimizedImage.propTypes = {
  afterLoad: PropTypes.func,
  alt: PropTypes.string,
  beforeLoad: PropTypes.func,
  blur: PropTypes.bool,
  delayMethod: PropTypes.string,
  delayTime: PropTypes.number,
  disabledEffect: PropTypes.bool,
  effect: PropTypes.string,
  overlay: PropTypes.string,
  placeholder: PropTypes.element,
  preload: PropTypes.bool,
  priority: PropTypes.bool,
  ratio: PropTypes.oneOf(['4/3', '3/4', '6/4', '4/6', '16/9', '9/16', '21/9', '9/21', '1/1']),
  scrollPosition: PropTypes.object,
  src: PropTypes.string,
  sx: PropTypes.object,
  threshold: PropTypes.number,
  useIntersectionObserver: PropTypes.bool,
  visibleByDefault: PropTypes.bool,
  wrapperClassName: PropTypes.string,
  wrapperProps: PropTypes.object,
};

export default OptimizedImage;
