'use client';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

import { RouterLink } from 'src/routes/components';
import { varFade, MotionViewport } from 'src/components/animate';
import Iconify from 'src/components/iconify';
import DynamicHeroImage from 'src/components/dynamic-hero-image';
import { getStrapiImageUrl, useStrapiHomeComponent } from 'src/hooks/use-strapi';
import { useSiteSettings } from 'src/hooks/use-global-settings';

// ----------------------------------------------------------------------

export default function HomeHeroStrapi() {
  const theme = useTheme();
  const { title: siteTitle, description: siteDescription } = useSiteSettings();

  // Ottieni dati da Strapi per il componente hero della home
  const { data, loading, error } = useStrapiHomeComponent('home_hero');

  // Dati di fallback che utilizzano Global Settings
  const FALLBACK_DATA = {
    title: siteTitle || 'ORACLE EXECUTIVE PROTECTION',
    subtitle: 'Sicurezza d\'élite per un mondo complesso. Protezione predittiva, preventiva, proattiva e multilivello.',
    description: siteDescription || 'Leader globale nella sicurezza esecutiva con oltre 30 anni di esperienza operativa d\'élite.',
    cta_text: 'Scopri i nostri servizi',
    cta_link: '/chi-siamo',
    background_image: null
  };
  const heroData = error ? FALLBACK_DATA : data;

  // Loading state
  if (loading) {
    return (
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'grey.900'
        }}
      >
        <CircularProgress sx={{ color: 'company.main' }} />
      </Box>
    );
  }

  // Se non ci sono dati e non è in loading, usa fallback
  if (!heroData) {
    return null;
  }

  // Determina l'immagine da utilizzare - prima da Strapi, poi da Global Settings come fallback
  const backgroundImageUrl = getStrapiImageUrl(heroData.background_image);

  const renderContent = (
    <Container component={MotionViewport} sx={{ height: 1, position: 'relative', zIndex: 9 }}>
      <Box
        sx={{
          bottom: { md: 80 },
          position: { md: 'absolute' },
          width: 1,
          textAlign: { xs: 'center', md: 'left' },
          pt: { xs: 15, md: 0 },
          pb: { xs: 8, md: 4 },
          px: { xs: 2, md: 0 },
        }}
      >
        <Stack spacing={3} sx={{ maxWidth: { xs: '100%', md: '70%' } }}>
          <m.div variants={varFade().inUp}>
            <Typography 
              variant="h1" 
              component="h1" 
              sx={{ 
                color: 'common.white', 
                textTransform: 'uppercase', 
                fontWeight: 800,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                lineHeight: { xs: 1.2, md: 1.1 },
                textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
              }}
            >
              {heroData.title}
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography
              variant="h4"
              sx={{
                color: 'common.white',
                fontWeight: theme.typography.fontWeightMedium,
                fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.4rem' },
                lineHeight: { xs: 1.4, md: 1.3 },
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              {heroData.subtitle}
            </Typography>
          </m.div>

          {heroData.description && (
            <m.div variants={varFade().inUp}>
              <Typography
                sx={{
                  color: alpha(theme.palette.common.white, 0.9),
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.6,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                }}
                dangerouslySetInnerHTML={{ __html: heroData.description }}
              />
            </m.div>
          )}

          <m.div variants={varFade().inUp}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mt: 2 }}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              {heroData.cta_text && heroData.cta_link && (
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  component={RouterLink}
                  href={heroData.cta_link}
                  sx={{
                    bgcolor: 'company.main',
                    color: 'black',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    '&:hover': {
                      bgcolor: alpha(theme.palette.company.main, 0.8),
                      color: 'black',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                  startIcon={<Iconify icon="carbon:arrow-right" />}
                >
                  {heroData.cta_text}
                </Button>
              )}
            </Stack>
          </m.div>
        </Stack>
      </Box>
    </Container>
  );

  return (
    <DynamicHeroImage 
      customImageUrl={backgroundImageUrl}
      overlayOpacity={0.6}
      minHeight={{ xs: 600, md: 800 }}
    >
      {renderContent}

      {/* Debug Info (solo in development) */}
      {process.env.NODE_ENV === 'development' && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            zIndex: 10,
            p: 1,
            bgcolor: alpha(theme.palette.common.black, 0.7),
            color: 'white',
            fontSize: '0.75rem',
            borderRadius: 1
          }}
        >
          <Typography variant="caption">
            {error ? '⚠️ Fallback Data' : '✅ Strapi Data'}
            {loading && ' 🔄 Loading...'}
          </Typography>
        </Box>
      )}
    </DynamicHeroImage>
  );
}
