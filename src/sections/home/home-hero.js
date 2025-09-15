import { m, useScroll } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, styled, useTheme } from '@mui/material/styles';

import useCompanyColors from 'src/hooks/use-company-colors';
import { useResponsive } from 'src/hooks/use-responsive';
import { useTranslation } from 'react-i18next';
import { useStrapiHome } from 'src/hooks/use-strapi';

import { HEADER } from 'src/layouts/config-layout';
import { bgBlur, bgGradient } from 'src/theme/css';

import { varFade, MotionContainer } from 'src/components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  width: '100%',
  height: '60vh',
  position: 'relative',
  paddingTop: HEADER.H_MOBILE,
  zIndex: 0,
  marginBottom: 0,
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    position: 'relative',
    paddingTop: HEADER.H_DESKTOP,
    height: '70vh',
  },
}));

const StyledVideoBackground = styled('video')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: -2,
}));

const StyledVideoOverlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: alpha(theme.palette.common.black, 0.4),
  zIndex: -1,
}));

const StyledWrapper = styled('div')(({ theme }) => ({
  height: 'calc(100% - 72px)',
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  paddingTop: 20,
  [theme.breakpoints.up('md')]: {
    height: 'calc(100% - 80px)',
    paddingTop: 30,
  },
}));

const StyledTextGradient = styled(m.h1)(({ theme }) => ({
  padding: 0,
  marginTop: 8,
  lineHeight: 1.1,
  fontWeight: 900,
  marginBottom: 16,
  letterSpacing: 6,
  textAlign: 'left',
  backgroundSize: '400%',
  fontSize: `${42 / 16}rem`,
  fontFamily: theme.typography.fontSecondaryFamily,
  [theme.breakpoints.up('md')]: {
    fontSize: `${84 / 16}rem`,
    letterSpacing: 8,
  },
}));

const StyledEllipseTop = styled('div')(({ theme }) => ({
  top: -80,
  width: 480,
  right: -80,
  height: 480,
  borderRadius: '50%',
  position: 'absolute',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.darker, 0.12),
}));

const StyledEllipseBottom = styled('div')(({ theme }) => ({
  height: 300,
  bottom: -100,
  left: '10%',
  right: '10%',
  borderRadius: '50%',
  position: 'absolute',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.darker, 0.12),
}));

const StyledPolygon = styled('div')(({ opacity = 1, anchor = 'left', theme }) => ({
  ...bgBlur({
    opacity,
    color: theme.palette.background.default,
  }),
  zIndex: 9,
  bottom: 0,
  height: 80,
  width: '50%',
  position: 'absolute',
  clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
  ...(anchor === 'left' && {
    left: 0,
    ...(theme.direction === 'rtl' && {
      transform: 'scale(-1, 1)',
    }),
  }),
  ...(anchor === 'right' && {
    right: 0,
    transform: 'scaleX(-1)',
    ...(theme.direction === 'rtl' && {
      transform: 'scaleX(1)',
    }),
  }),
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  const mdUp = useResponsive('up', 'md');
  const { t } = useTranslation();
  
  // Hook per dati Strapi
  const { data: homeData, loading: strapiLoading } = useStrapiHome();
  const heroComponent = homeData?.components?.home_hero;

  const theme = useTheme();
  const companyColors = useCompanyColors();

  const heroRef = useRef(null);

  const { scrollY } = useScroll();

  const [percent, setPercent] = useState(0);

  const lightMode = theme.palette.mode === 'light';

  const getScroll = useCallback(() => {
    let heroHeight = 0;

    if (heroRef.current) {
      heroHeight = heroRef.current.offsetHeight;
    }

    scrollY.on('change', (scrollHeight) => {
      const scrollPercent = (scrollHeight * 100) / heroHeight;

      setPercent(Math.floor(scrollPercent));
    });
  }, [scrollY]);

  useEffect(() => {
    getScroll();
  }, [getScroll]);

  const transition = {
    repeatType: 'loop',
    ease: 'linear',
    duration: 60 * 4,
    repeat: Infinity,
  };

  const opacity = 1 - percent / 100;

  const hide = percent > 120;

  const renderDescription = (
    <Stack
      alignItems="left"
      justifyContent="center"
      sx={{
        height: 1,
        mx: 'auto',
        maxWidth: { xs: 480, md: 880 },
        opacity: opacity > 0 ? opacity : 0,
        mt: { xs: 0, md: 0 },
        px: { xs: 2, md: 0 }
      }}
    >
      <m.div variants={varFade().in}>
        <Typography
          variant="h6"
          sx={{
            color: 'common.white',
            mb: 2,
            textAlign: 'left',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          {heroComponent?.title || t('home.hero.title')}
        </Typography>
        <StyledTextGradient
          animate={{ backgroundPosition: '200% center' }}
          transition={{
            repeatType: 'reverse',
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
          }}
          sx={{ 
            overflow: 'visible',
            color: 'common.white',
            textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
          }}
        >
          {heroComponent?.subtitle || t('home.hero.subtitle')}
        </StyledTextGradient>
      </m.div>
    </Stack>
  );

  const renderPolygons = (
    <>
      <StyledPolygon />
      <StyledPolygon anchor="right" opacity={0.48} />
      <StyledPolygon anchor="right" opacity={0.48} sx={{ height: 48, zIndex: 10 }} />
      <StyledPolygon anchor="right" sx={{ zIndex: 11, height: 24 }} />
    </>
  );

  const renderEllipses = (
    <>
      {mdUp && <StyledEllipseTop />}
      <StyledEllipseBottom />
    </>
  );

  return (
    <>
      <StyledRoot
        ref={heroRef}
        sx={{
          ...(hide && {
            opacity: 0,
          }),
        }}
      >
        <StyledVideoBackground
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/assets/videos/bangkok-hero.mp4" type="video/mp4" />
          {/* Fallback per browser che non supportano il video */}
        </StyledVideoBackground>
        <StyledVideoOverlay />
        
        <StyledWrapper>
          <Container component={MotionContainer} sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
            <Grid container columnSpacing={{ md: 10 }} sx={{ height: 'auto' }}>
              <Grid xs={12} md={12}>
                {renderDescription}
              </Grid>
            </Grid>
          </Container>

          {renderEllipses}
        </StyledWrapper>
      </StyledRoot>
    </>
  );
}
