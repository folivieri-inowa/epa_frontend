'use client';

import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import { useTheme } from '@mui/material/styles';

import SplashScreen from '../loading-screen/splash-screen';
import { useProgressiveLoading } from '../../hooks/use-page-performance';

// ----------------------------------------------------------------------

export default function SmoothPageTransition({ 
  children, 
  loading = false, 
  minLoadTime = 800,
  images = [],
  priority = false
}) {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(loading || true);
  const [showContent, setShowContent] = useState(false);
  const loadingRef = useRef(false);
  const { preloadNextImages } = useProgressiveLoading();

  useEffect(() => {
    const startLoading = async () => {
      if (loadingRef.current) return;
      loadingRef.current = true;

      const startTime = Date.now();
      
      // Preload images if provided
      if (images.length > 0) {
        try {
          await preloadNextImages(images);
        } catch (error) {
          console.warn('Image preloading failed:', error);
        }
      }

      // Ensure minimum loading time for smooth transition
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsedTime);
      
      if (remainingTime > 0) {
        await new Promise(resolve => setTimeout(resolve, remainingTime));
      }

      setIsLoading(false);
      
      // Small delay before showing content
      setTimeout(() => {
        setShowContent(true);
      }, 100);
    };

    startLoading();
  }, [images, minLoadTime, preloadNextImages]);

  // Force loading state reset when loading prop changes
  useEffect(() => {
    if (loading) {
      setIsLoading(true);
      setShowContent(false);
      loadingRef.current = false;
    }
  }, [loading]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Fade 
      in={showContent} 
      timeout={{
        enter: priority ? 300 : 600,
        exit: 200,
      }}
      easing={{
        enter: theme.transitions.easing.easeOut,
        exit: theme.transitions.easing.sharp,
      }}
    >
      <Box
        sx={{
          minHeight: '100vh',
          // Performance optimizations
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          willChange: 'transform, opacity',
          // Smooth scrolling
          scrollBehavior: 'smooth',
        }}
      >
        {children}
      </Box>
    </Fade>
  );
}

SmoothPageTransition.propTypes = {
  children: PropTypes.node,
  images: PropTypes.arrayOf(PropTypes.string),
  loading: PropTypes.bool,
  minLoadTime: PropTypes.number,
  priority: PropTypes.bool,
};
