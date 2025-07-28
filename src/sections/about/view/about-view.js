'use client';

import useCompanyColors from 'src/hooks/use-company-colors';
import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';

import { paths } from 'src/routes/paths';
import { useResponsive } from 'src/hooks/use-responsive';
import { RouterLink } from 'src/routes/components';
import { varFade, MotionViewport } from 'src/components/animate';
import Iconify from 'src/components/iconify';
import Image from 'src/components/image';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { usePathname } from 'next/navigation';

import AboutWhat from '../about-what';
import AboutTeam from '../about-team';
import AboutExperience from '../about-experience';
import AboutVisionValues from '../about-vision-values';
import AboutCTA from '../about-cta';
import ContactSection from '../../shared/contact-section';

// ----------------------------------------------------------------------

// Dati statici per la pagina Chi Siamo
const staticAboutData = {
  // Hero section
  hero: {
    title: 'Executive',
    title2: 'Protection Agency',
    subtitle: 'I tuoi partner per la sicurezza d’eccellenza',
    coverUrl: {
      url: '/assets/images/about/chi-siamo.png',
    }
  },
  // What section
  what: {
    title: 'La nostra storia: Protezione senza confini',
    subtitle: 'La nostra storia',
    images: [
      { url: '/assets/images/about/image1.jpg' },
      { url: '/assets/images/about/image2.jpg' }
    ],
    skills: [
      { label: 'Sicurezza Fisica', value: 95 },
      { label: 'Cyber Security', value: 90 },
      { label: 'Intelligence', value: 85 }
    ]
  },
  // Team section
  team: {
    title: 'Un team d’élite al tuo servizio',
    subtitle: 'Professionisti con background in Forze dell\'Ordine, Esercito e Sicurezza Privata',
    images: [
      { url: '/assets/images/about/vision.jpg' },
      { url: '/assets/images/about/image2.jpg' }
    ]
  }
};

export default function AboutView() {
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');
  const pathname = usePathname();
  
  // Hero section
  const renderHero = (
    <Box
      sx={{
        height: { xs: '65vh', md: '60vh' }, // Ridotto da mobile/desktop
        minHeight: { xs: 320, md: 480 },
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${staticAboutData.hero.coverUrl.url})`,
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
      <Container sx={{ height: 1, position: 'relative', zIndex: 9 }}>
        <Box
          sx={{
            bottom: { md: 80 },
            position: { md: 'absolute' },
            width: 1,
            textAlign: { xs: 'center', md: 'left' },
            pt: { xs: 15, md: 0 },
            pb: { xs: 8, md: 4 }, // Aggiunto padding bottom per mantenere il bottone nell'immagine
          }}
        >
          <Typography 
            variant="h1" 
            component="h1" 
            sx={{ 
              color: 'common.white', 
              textTransform: 'uppercase', 
              mb: 3,
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              lineHeight: { xs: 1.2, md: 1.1 }
            }}
          >
            {staticAboutData.hero.title} <br />
            {staticAboutData.hero.title2}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: 'common.white',
              fontWeight: (theme) => theme.typography.fontWeightMedium,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              lineHeight: { xs: 1.4, md: 1.3 },
              maxWidth: { xs: '100%', md: '80%' }
            }}
          >
            {staticAboutData.hero.subtitle}
          </Typography>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            sx={{ mt: 5 }}
            justifyContent={{ xs: 'center', md: 'flex-start' }}
          >
            <Button
              size="large"
              variant="contained"
              color="primary"
              component={RouterLink}
              href={paths.contact}
              sx={{
                bgcolor: 'company.main',
                '&:hover': {
                  bgcolor: (theme) => alpha(theme.palette.company.main, 0.8),
                },
              }}
              startIcon={<Iconify icon="carbon:send" />}
            >
              Richiedi una consulenza
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );

  // Breadcrumbs section
  const renderBreadcrumbs = (
    <Box
      sx={{
        py: 2,
        bgcolor: theme.palette.background.neutral,
      }}
    >
      <Container>
        <Breadcrumbs separator={<Iconify icon="carbon:chevron-right" />}>
          <Link href="/" component={RouterLink} color="inherit">
            Home
          </Link>
          <Typography color="text.secondary">
            Servizi
          </Typography>
          <Typography color="text.primary">Chi siamo</Typography>
        </Breadcrumbs>
      </Container>
    </Box>
  );

  // Main sections
  return (
    <>
      {renderHero}
      
      {renderBreadcrumbs}
      
      <Box id="chi-siamo" sx={{ py: { xs: 8, md: 12 } }}>
        <AboutWhat
          title={staticAboutData.what.title}
          subtitle={staticAboutData.what.subtitle}
          images={staticAboutData.what.images}
          skills={staticAboutData.what.skills}
        />
      </Box>
      
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.neutral }}>
        <AboutTeam
          title={staticAboutData.team.title}
          subtitle={staticAboutData.team.subtitle}
          images={staticAboutData.what.images}
        />
      </Box>
     
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <AboutVisionValues />
      </Box>
       {/* 
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.neutral }}>
        <AboutExperience />
      </Box>
      
      <ContactSection title="Affidati all’eccellenza di EPA: Contattaci oggi" /> */}
    </>
  );
}
