'use client';

import { m } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from '../routes/paths';
import { RouterLink } from '../routes/components';
import { varFade, MotionViewport } from './animate';

import MainLayout from '../layouts/main';
import { useStrapiPage } from '../hooks/use-strapi';

// ----------------------------------------------------------------------

export default function DynamicPageView({ slug, fallbackTitle, fallbackDescription, heroImage = '/assets/images/about1.jpg' }) {
  const { t } = useTranslation();
  const theme = useTheme();
  
  // Hook per dati Strapi
  const { data: pageData, loading: strapiLoading, error } = useStrapiPage(slug);

  const title = pageData?.title || fallbackTitle;
  const description = pageData?.description || fallbackDescription;

  // Hero section
  const renderHero = (
    <Box
      sx={{
        height: { xs: '50vh', md: '60vh' },
        minHeight: { xs: 320, md: 480 },
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${heroImage})`,
        '&:after': {
          top: 0,
          content: '""',
          width: '100%',
          height: '100%',
          position: 'absolute',
          backgroundColor: alpha(theme.palette.grey[900], 0.6),
        },
      }}
    >
      <Container
        component={MotionViewport}
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Stack spacing={3}>
          <m.div variants={varFade().inUp}>
            <Typography
              variant="h2"
              sx={{
                color: 'common.white',
                textAlign: { xs: 'center', md: 'left' },
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
              }}
            >
              {title}
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography
              variant="h5"
              sx={{
                color: 'grey.300',
                textAlign: { xs: 'center', md: 'left' },
                maxWidth: 600,
                fontWeight: 400,
                textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
              }}
            >
              {description}
            </Typography>
          </m.div>
        </Stack>
      </Container>
    </Box>
  );

  // Breadcrumbs
  const renderBreadcrumbs = (
    <Container sx={{ py: 3 }}>
      <Breadcrumbs>
        <Link component={RouterLink} href={paths.root} color="inherit">
          {t('navigation.home')}
        </Link>
        <Typography color="text.primary">{title}</Typography>
      </Breadcrumbs>
    </Container>
  );

  // Content section
  const renderContent = (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <m.div variants={varFade().inUp}>
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          {title}
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', md: '1.2rem' },
            lineHeight: 1.8,
            textAlign: 'justify',
            maxWidth: 800,
            mx: 'auto',
          }}
        >
          {description}
        </Typography>
      </m.div>

      {strapiLoading && (
        <m.div variants={varFade().inUp}>
          <Typography sx={{ textAlign: 'center', mt: 4, color: 'text.secondary' }}>
            Caricamento contenuti...
          </Typography>
        </m.div>
      )}

      {error && (
        <m.div variants={varFade().inUp}>
          <Typography sx={{ textAlign: 'center', mt: 4, color: 'error.main' }}>
            Errore nel caricamento dei contenuti. Verranno mostrati i contenuti di fallback.
          </Typography>
        </m.div>
      )}
    </Container>
  );

  return (
    <MainLayout>
      {renderHero}
      {renderBreadcrumbs}
      {renderContent}
    </MainLayout>
  );
}
