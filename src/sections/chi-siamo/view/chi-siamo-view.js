'use client';

import { m } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { paths } from 'src/routes/paths';
import { useResponsive } from 'src/hooks/use-responsive';
import { RouterLink } from 'src/routes/components';
import { varFade, MotionViewport } from 'src/components/animate';
import Iconify from 'src/components/iconify';
import Image from 'src/components/image';
import MainLayout from 'src/layouts/main';
import { useStrapiPage } from 'src/hooks/use-strapi';

// ----------------------------------------------------------------------

export default function ChiSiamoView() {
  const { t } = useTranslation();
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');
  
  // Hook per dati Strapi
  const { data: pageData, loading: strapiLoading } = useStrapiPage('chi-siamo');

  // Hero section
  const renderHero = (
    <Box
      sx={{
        height: { xs: '50vh', md: '60vh' },
        minHeight: { xs: 320, md: 480 },
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'url(/assets/images/about1.jpg)',
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
            pb: { xs: 8, md: 4 },
            px: { xs: 2, md: 0 },
          }}
        >
          <Typography 
            variant="h1" 
            component="h1" 
            sx={{ 
              color: 'common.white', 
              textTransform: 'uppercase', 
              mb: 3,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              lineHeight: { xs: 1.2, md: 1.1 }
            }}
          >
            {pageData?.title || t('about.page.hero.title')}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: 'common.white',
              fontWeight: theme.typography.fontWeightMedium,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              lineHeight: { xs: 1.4, md: 1.3 },
              maxWidth: { xs: '100%', md: '80%' }
            }}
          >
            {pageData?.description || t('about.page.hero.subtitle')}
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
                color: 'black',
                '&:hover': {
                  bgcolor: (theme) => alpha(theme.palette.company.main, 0.8),
                  color: 'black',
                },
              }}
              startIcon={<Iconify icon="carbon:send" />}
            >
              {t('about.page.hero.cta')}
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
            {t('navigation.home')}
          </Link>
          <Typography color="text.primary">{t('about.page.breadcrumbs.about')}</Typography>
        </Breadcrumbs>
      </Container>
    </Box>
  );

  // Content section - Main content with image (bianco)
  const renderContent = (
    <Container component={MotionViewport} sx={{ py: { xs: 10, md: 15 } }}>
      <Grid container spacing={5} alignItems="center">
        <Grid xs={12} md={7}>
          <Stack spacing={4}>
            <m.div variants={varFade().inLeft}>
              <Typography variant="h3" sx={{ mb: 2 }}>
                {t('about.page.content.title')}
              </Typography>
            </m.div>

            <m.div variants={varFade().inLeft}>
              <Typography 
                variant="h5"
                sx={{ 
                  color: 'company.main',
                  fontWeight: 500,
                  mb: 3
                }}
              >
                {t('about.page.content.subtitle')}
              </Typography>
            </m.div>

            <m.div variants={varFade().inLeft}>
              <Typography 
                sx={{ 
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  lineHeight: 1.8,
                  whiteSpace: 'pre-line',
                  color: theme.palette.text.primary
                }}
              >
                {t('about.page.content.description')}
              </Typography>
            </m.div>
          </Stack>
        </Grid>

        <Grid xs={12} md={5}>
          <m.div variants={varFade().inRight}>
            <Image
              alt="Oracle Executive Protection"
              src="/assets/images/image.avif"
              ratio="4/3"
              sx={{ borderRadius: 2 }}
            />
          </m.div>
        </Grid>
      </Grid>
    </Container>
  );

  // Expertise section (grigio neutro per alternanza)
  const renderExpertise = (
    <Box sx={{ py: { xs: 10, md: 15 }, position: 'relative', bgcolor: 'background.neutral' }}>
      <Container>
        <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
          <Grid xs={12} md={6}>
            <m.div variants={varFade().inLeft}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                {t('about.page.expertise.title')}
              </Typography>

              <Typography
                sx={{
                  color: theme.palette.text.primary,
                  mb: 3,
                  lineHeight: 1.8,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  whiteSpace: 'pre-line',
                }}
              >
                {t('about.page.expertise.description')}
              </Typography>
            </m.div>
          </Grid>

          <Grid xs={12} md={6}>
            <m.div variants={varFade().inRight}>
              <Box
                component="img"
                alt="Expertise in Security"
                src="/assets/images/about2.jpg"
                sx={{
                  width: 1,
                  height: { xs: 280, md: 360 },
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: (theme) => theme.customShadows.z8,
                }}
              />
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  // Technology section (bianco per alternanza)
  const renderTechnology = (
    <Box sx={{ py: { xs: 10, md: 15 } }}>
      <Container component={MotionViewport}>
        <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
          <Grid xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <m.div variants={varFade().inLeft}>
              <Box
                component="img"
                alt="Advanced Technology"
                src="/assets/images/team4.jpg"
                sx={{
                  width: 1,
                  height: { xs: 280, md: 360 },
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: (theme) => theme.customShadows.z8,
                }}
              />
            </m.div>
          </Grid>

          <Grid xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Stack spacing={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <m.div variants={varFade().inUp}>
                <Typography
                  variant="overline"
                  sx={{ color: 'company.main', fontWeight: 'fontWeightBold' }}
                >
                  {t('about.page.technology.overline')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography variant="h3" sx={{ mb: 3 }}>
                  {t('about.page.technology.title')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography 
                  sx={{ 
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    lineHeight: 1.8,
                    color: theme.palette.text.primary,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {t('about.page.technology.description')}
                </Typography>
              </m.div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  // Team section (grigio neutro per alternanza)
  const renderTeam = (
    <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.neutral' }}>
      <Container component={MotionViewport}>
        <Stack spacing={4} alignItems="center" sx={{ textAlign: 'center', mb: 6 }}>
          <m.div variants={varFade().inUp}>
            <Typography
              variant="overline"
              sx={{ color: 'company.main', fontWeight: 'fontWeightBold' }}
            >
              {t('about.page.team.overline')}
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography variant="h3" sx={{ mb: 3, maxWidth: 600 }}>
              {t('about.page.team.title')}
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography 
              sx={{ 
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                lineHeight: 1.8,
                maxWidth: 900,
                mx: 'auto',
                whiteSpace: 'pre-line',
                color: theme.palette.text.primary
              }}
            >
              {t('about.page.team.description')}
            </Typography>
          </m.div>
        </Stack>
      </Container>
    </Box>
  );

  // Standards section (bianco per alternanza) 
  const renderStandards = (
    <Box sx={{ py: { xs: 10, md: 15 } }}>
      <Container component={MotionViewport}>
        <m.div variants={varFade().inUp}>
        <Typography
          variant="overline"
          sx={{ 
            color: 'company.main', 
            fontWeight: 'fontWeightBold',
            textAlign: 'center',
            display: 'block',
            mb: 2
          }}
        >
          {t('about.page.standards.overline')}
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography 
          variant="h3" 
          sx={{ 
            textAlign: 'center',
            mb: 3
          }}
        >
          {t('about.page.standards.title')}
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography 
          sx={{ 
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            textAlign: 'center',
            maxWidth: '900px',
            mx: 'auto',
            mb: 6,
            whiteSpace: 'pre-line',
            lineHeight: 1.8,
            color: theme.palette.text.primary
          }}
        >
          {t('about.page.standards.description')}
        </Typography>
      </m.div>
    </Container>
    </Box>
  );

  // Call to action (grigio neutro per alternanza)
  const renderCTA = (
    <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.neutral' }}>
      <Container component={MotionViewport}>
        <m.div variants={varFade().inUp}>
          <Box
            sx={{
              textAlign: 'center',
              p: { xs: 4, md: 6 },
              borderRadius: 2,
              // backgroundColor: alpha(theme.palette.company.main, 0.08),
            }}
          >
          <Typography variant="h3" sx={{ mb: 3 }}>
            {t('about.page.cta.title')}
          </Typography>
          
          <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.25rem' }, mb: 4, maxWidth: '600px', mx: 'auto', lineHeight: 1.8 }}>
            {t('about.page.cta.description')}
          </Typography>
          
          <Button
            size="large"
            variant="contained"
            color="primary"
            component={RouterLink}
            href={paths.contact}
            sx={{
              bgcolor: 'company.main',
              color: 'black',
              '&:hover': {
                bgcolor: (theme) => alpha(theme.palette.company.main, 0.8),
                color: 'black',
              },
            }}
            startIcon={<Iconify icon="carbon:send" />}
          >
            {t('about.page.cta.button')}
            </Button>
          </Box>
        </m.div>
      </Container>
    </Box>
  );  return (
    <>
      {renderHero}
      {renderBreadcrumbs}
      {renderContent}
      {renderExpertise}
      {renderTechnology}
      {renderTeam}
      {renderStandards}
      {renderCTA}
    </>
  );
}
