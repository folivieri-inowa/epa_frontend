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
import HtmlText from 'src/components/html-text';
import MainLayout from 'src/layouts/main';

// ----------------------------------------------------------------------

export default function EventiView() {
  const { t } = useTranslation();
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');

  // Hero section
  const renderHero = (
    <Box
      sx={{
        height: { xs: '50vh', md: '60vh' },
        minHeight: { xs: 320, md: 480 },
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'url(/assets/images/events1.jpeg)',
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
            {t('events.hero.title')}
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
            {t('events.hero.subtitle')}
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
              {t('events.hero.cta')}
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
          <Typography color="text.primary">{t('events.hero.title')}</Typography>
        </Breadcrumbs>
      </Container>
    </Box>
  );

  // Overview section
  const renderOverview = (
    <Container component={MotionViewport} sx={{ py: { xs: 8, md: 12 } }}>
      <Grid container spacing={5} alignItems="center">
        <Grid xs={12} md={6}>
          <m.div variants={varFade().inLeft}>
            <Image
              alt="Eventi di lusso"
              src="/assets/images/Dining-in-the-Clouds.jpg"
              ratio="4/3"
              sx={{ borderRadius: 2 }}
            />
          </m.div>
        </Grid>

        <Grid xs={12} md={6}>
          <Stack spacing={3}>
            <m.div variants={varFade().inRight}>
              <Typography
                variant="overline"
                sx={{ color: 'company.main', fontWeight: 'fontWeightBold' }}
              >
                {t('events.overview.overline')}
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography 
                variant="h2" 
                sx={{ 
                  mb: 3,
                  fontWeight: 700,
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
                }}
              >
                {t('events.overview.title')}
              </Typography>
            </m.div>            <m.div variants={varFade().inRight}>
              <HtmlText sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                {t('events.overview.description')}
              </HtmlText>
            </m.div>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );

  // Expertise section
  const renderExpertise = (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.neutral }}>
      <Container component={MotionViewport}>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              <m.div variants={varFade().inLeft}>
                <Typography
                  variant="overline"
                  sx={{ color: 'company.main', fontWeight: 'fontWeightBold' }}
                >
                  {t('events.expertise.overline')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inLeft}>
                <Typography 
                  variant="h2" 
                  sx={{ 
                    mb: 3,
                    fontWeight: 700,
                    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
                  }}
                >
                  {t('events.expertise.title')}
                </Typography>
              </m.div>              <m.div variants={varFade().inLeft}>
                <HtmlText sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                  {t('events.expertise.description')}
                </HtmlText>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <m.div variants={varFade().inRight}>
              <Image
                alt="Expertise eventi"
                src="/assets/images/events1.jpeg"
                ratio="4/3"
                sx={{ borderRadius: 2 }}
              />
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  // Standards section
  const renderStandards = (
    <Container component={MotionViewport} sx={{ py: { xs: 8, md: 12 } }}>
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
          {t('events.standards.overline')}
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography 
          variant="h2" 
          sx={{ 
            textAlign: 'center',
            mb: 3,
            fontWeight: 700,
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
          }}
        >
          {t('events.standards.title')}
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography 
          sx={{ 
            fontSize: { xs: '1.1rem', md: '1.5rem' },
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
            mb: 6
          }}
        >
          {t('events.standards.subtitle')}
        </Typography>
      </m.div>

      <Grid container spacing={3} alignItems="stretch" sx={{ minHeight: { md: 280 } }}>
        {t('events.standards.items', { returnObjects: true }).map((standard, index) => (
          <Grid key={standard.title} xs={12} sm={6} md={3} sx={{ display: 'flex' }}>
            <m.div variants={varFade().inUp} style={{ width: '100%', display: 'flex' }}>
              <Card 
                sx={{ 
                  p: 3, 
                  height: '100%',
                  width: '100%',
                  minHeight: 200,
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  border: `2px solid ${theme.palette.company.main}`,
                  '&:hover': {
                    boxShadow: theme.customShadows.z24,
                    transform: 'translateY(-4px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 0 }}>
                  <Typography variant="h6" sx={{ mb: 2, minHeight: 32 }}>
                    {standard.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary', 
                      flexGrow: 1,
                      display: 'flex',
                      alignItems: 'flex-start'
                    }}
                  >
                    {standard.description}
                  </Typography>
                </CardContent>
              </Card>
            </m.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );

  // VIP Protection section
  const renderVipProtection = (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.neutral }}>
      <Container component={MotionViewport}>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <m.div variants={varFade().inLeft}>
              <Image
                alt="VIP Protection"
                src="/assets/images/events4.png"
                ratio="4/3"
                sx={{ borderRadius: 2 }}
              />
            </m.div>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack spacing={3}>
              <m.div variants={varFade().inRight}>
                <Typography
                  variant="overline"
                  sx={{ color: 'company.main', fontWeight: 'fontWeightBold' }}
                >
                  {t('events.vip_protection.overline')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inRight}>
                <Typography 
                  variant="h2" 
                  sx={{ 
                    mb: 3,
                    fontWeight: 700,
                    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
                  }}
                >
                  {t('events.vip_protection.title')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inRight}>
                <HtmlText sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                  {t('events.vip_protection.description')}
                </HtmlText>
              </m.div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  // Antiterrorismo section
  const renderAntiterrorismo = (
    <Container component={MotionViewport} sx={{ py: { xs: 8, md: 12 } }}>
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
          {t('events.antiterrorism.overline')}
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography 
          variant="h2" 
          sx={{ 
            textAlign: 'center',
            mb: 3,
            fontWeight: 700,
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
          }}
        >
          {t('events.antiterrorism.title')}
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography 
          sx={{ 
            fontSize: { xs: '1.1rem', md: '1.5rem' },
            textAlign: 'center',
            maxWidth: '900px',
            mx: 'auto',
            mb: 6
          }}
        >
          {t('events.antiterrorism.subtitle')}
        </Typography>
      </m.div>

      <Grid container spacing={3} justifyContent="center" alignItems="stretch" sx={{ minHeight: { md: 220 } }}>
        {t('events.antiterrorism.roles', { returnObjects: true }).map((ruolo, index) => (
          <Grid key={ruolo.title} xs={12} sm={6} md={3} sx={{ display: 'flex' }}>
            <m.div variants={varFade().inUp} style={{ width: '100%', display: 'flex' }}>
              <Card 
                sx={{ 
                  p: 3, 
                  height: '100%',
                  width: '100%',
                  minHeight: 160,
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  border: `1px solid ${alpha(theme.palette.company.main, 0.2)}`,
                  '&:hover': {
                    borderColor: 'company.main',
                    boxShadow: theme.customShadows.z8,
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 0 }}>
                  <Typography variant="h6" sx={{ mb: 1, color: 'company.main', minHeight: 32 }}>
                    {ruolo.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      flexGrow: 1,
                      display: 'flex',
                      alignItems: 'flex-start'
                    }}
                  >
                    {ruolo.description}
                  </Typography>
                </CardContent>
              </Card>
            </m.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );

  // Citazione section
  const renderCitazione = (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.neutral }}>
      <Container component={MotionViewport}>
        <m.div variants={varFade().inUp}>
          <Typography 
            sx={{ 
              fontSize: { xs: '1.1rem', md: '1.5rem' },
              textAlign: 'center',
              mb: 4,
              fontStyle: 'italic',
              color: 'common.white'
            }}
          >
            "{t('events.quote')}"
          </Typography>
        </m.div>
      </Container>
    </Box>
  );

  // Call to action
  const renderCTA = (
    <Container component={MotionViewport} sx={{ py: { xs: 8, md: 12 } }}>
      <m.div variants={varFade().inUp}>
        <Box
          sx={{
            textAlign: 'center',
            p: { xs: 4, md: 6 },
            borderRadius: 2,
            // backgroundColor: alpha(theme.palette.company.main, 0.08),
          }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 3,
              fontWeight: 700,
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
            }}
          >
            {t('events.cta.title')}
          </Typography>
          
          <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' }, mb: 4, maxWidth: '600px', mx: 'auto' }}>
            {t('events.cta.subtitle')}
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
            {t('events.cta.button')}
          </Button>
        </Box>
      </m.div>
    </Container>
  );

  return (
    <MainLayout>
      {renderHero}
      {renderBreadcrumbs}
      {renderOverview}
      {renderExpertise}
      {renderStandards}
      {renderVipProtection}
      {renderAntiterrorismo}
      {renderCitazione}
      {renderCTA}
    </MainLayout>
  );
}
