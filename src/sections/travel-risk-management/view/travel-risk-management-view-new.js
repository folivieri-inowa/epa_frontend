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
import MainLayout from 'src/layouts/main';

// ----------------------------------------------------------------------

export default function TravelRiskManagementView() {
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
        backgroundImage: 'url(/assets/images/travel1.jpg)',
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
            {t('travel_risk.hero.title')}
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
            {t('travel_risk.hero.subtitle')}
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
              {t('contact')}
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
          <Typography color="text.primary">Travel Risk Management</Typography>
        </Breadcrumbs>
      </Container>
    </Box>
  );

  // Overview section
  const renderOverview = (
    <Container component={MotionViewport} sx={{ py: { xs: 10, md: 15 } }}>
      <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
        <Grid xs={12} md={6}>
          <m.div variants={varFade().inLeft}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              {t('travel_risk.overview.title')}
            </Typography>

            <Typography
              sx={{
                color: 'text.secondary',
                mb: 3,
                lineHeight: 1.7,
                whiteSpace: 'pre-line'
              }}
            >
              {t('travel_risk.overview.description')}
            </Typography>
          </m.div>
        </Grid>

        <Grid xs={12} md={6}>
          <m.div variants={varFade().inRight}>
            <Box
              component="img"
              alt="Travel Risk Management Overview"
              src="/assets/images/travel2.jpg"
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
  );

  // Expertise section
  const renderExpertise = (
    <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.neutral' }}>
      <Container component={MotionViewport}>
        <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
          <Grid xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <m.div variants={varFade().inLeft}>
              <Box
                component="img"
                alt="Elite Operational Experience"
                src="/assets/images/travel3.jpg"
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
            <m.div variants={varFade().inRight}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                {t('travel_risk.expertise.title')}
              </Typography>

              <Typography
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.7,
                  whiteSpace: 'pre-line'
                }}
              >
                {t('travel_risk.expertise.description')}
              </Typography>
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  // Standards section  
  const renderStandards = (
    <Container component={MotionViewport} sx={{ py: { xs: 10, md: 15 } }}>
      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 3 }}>
          {t('travel_risk.standards.title')}
        </Typography>

        <Typography
          sx={{
            mx: 'auto',
            maxWidth: 900,
            color: 'text.secondary',
            textAlign: 'center',
            lineHeight: 1.7,
            whiteSpace: 'pre-line'
          }}
        >
          {t('travel_risk.standards.description')}
        </Typography>
      </m.div>
    </Container>
  );

  // Team Introduction section
  const renderTeamIntro = (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.neutral' }}>
      <Container component={MotionViewport}>
        <m.div variants={varFade().inUp}>
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 3 }}>
            {t('travel_risk.team_intro.title')}
          </Typography>

          <Typography
            sx={{
              mx: 'auto',
              maxWidth: 700,
              color: 'text.secondary',
              textAlign: 'center',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.7
            }}
          >
            {t('travel_risk.team_intro.description')}
          </Typography>
        </m.div>
      </Container>
    </Box>
  );

  // Security Board & Travel Risk Officer section
  const renderSecurityBoard = (
    <Container component={MotionViewport} sx={{ py: { xs: 10, md: 15 } }}>
      <Grid container spacing={{ xs: 3, md: 5 }} alignItems="stretch">
        <Grid xs={12} md={6}>
          <m.div variants={varFade().inLeft}>
            <Card
              sx={{
                p: { xs: 4, md: 6 },
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                boxShadow: (theme) => theme.customShadows.z24,
                height: 1,
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Typography variant="h3" sx={{ mb: 3 }}>
                  {t('travel_risk.security_board.title')}
                </Typography>

                <Typography
                  sx={{
                    lineHeight: 1.7,
                    whiteSpace: 'pre-line'
                  }}
                >
                  {t('travel_risk.security_board.description')}
                </Typography>
              </CardContent>
            </Card>
          </m.div>
        </Grid>

        <Grid xs={12} md={6}>
          <m.div variants={varFade().inRight}>
            <Card
              sx={{
                p: { xs: 4, md: 6 },
                bgcolor: 'grey.900',
                color: 'common.white',
                boxShadow: (theme) => theme.customShadows.z24,
                height: 1,
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Typography variant="h3" sx={{ mb: 3 }}>
                  {t('travel_risk.travel_risk_officer.title')}
                </Typography>

                <Typography
                  sx={{
                    lineHeight: 1.7,
                    whiteSpace: 'pre-line'
                  }}
                >
                  {t('travel_risk.travel_risk_officer.description')}
                </Typography>
              </CardContent>
            </Card>
          </m.div>
        </Grid>
      </Grid>
    </Container>
  );

  // Logistics Coordinator section
  const renderLogisticsCoordinator = (
    <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.neutral' }}>
      <Container component={MotionViewport}>
        <m.div variants={varFade().inUp}>
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 3 }}>
            {t('travel_risk.logistics_coordinator.title')}
          </Typography>

          <Typography
            sx={{
              mx: 'auto',
              maxWidth: 800,
              color: 'text.secondary',
              textAlign: 'center',
              lineHeight: 1.7
            }}
          >
            {t('travel_risk.logistics_coordinator.description')}
          </Typography>
        </m.div>
      </Container>
    </Box>
  );

  // Travel Directions section
  const renderTravelDirections = (
    <Container component={MotionViewport} sx={{ py: { xs: 10, md: 15 } }}>
      <Grid container spacing={{ xs: 5, md: 8 }}>
        <Grid xs={12} md={6}>
          <m.div variants={varFade().inLeft}>
            <Card
              sx={{
                p: { xs: 4, md: 6 },
                bgcolor: 'company.main',
                color: 'grey.800',
                height: 1,
                boxShadow: (theme) => theme.customShadows.z16,
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Typography variant="h3" sx={{ mb: 4 }}>
                  {t('travel_risk.from_abroad.title')}
                </Typography>

                <Stack spacing={2}>
                  {t('travel_risk.from_abroad.items', { returnObjects: true }).map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Iconify
                        icon="carbon:checkmark"
                        sx={{ 
                          color: 'success.main',
                          mt: 0.5,
                          mr: 2,
                          flexShrink: 0
                        }}
                      />
                      <Typography sx={{ lineHeight: 1.6 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </m.div>
        </Grid>

        <Grid xs={12} md={6}>
          <m.div variants={varFade().inRight}>
            <Card
              sx={{
                p: { xs: 4, md: 6 },
                bgcolor: 'grey.900',
                color: 'common.white',
                height: 1,
                boxShadow: (theme) => theme.customShadows.z16,
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Typography variant="h3" sx={{ mb: 4 }}>
                  {t('travel_risk.to_abroad.title')}
                </Typography>

                <Stack spacing={2}>
                  {t('travel_risk.to_abroad.items', { returnObjects: true }).map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Iconify
                        icon="carbon:checkmark"
                        sx={{ 
                          color: 'company.main',
                          mt: 0.5,
                          mr: 2,
                          flexShrink: 0
                        }}
                      />
                      <Typography sx={{ lineHeight: 1.6 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </m.div>
        </Grid>
      </Grid>
    </Container>
  );

  // CTA section
  const renderCTA = (
    <Container component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 8, md: 12 } }}>
      <m.div variants={varFade().inUp}>
        <Typography
          variant="overline"
          sx={{ color: 'company.main', fontWeight: 'fontWeightBold' }}
        >
          La tua tranquillità è la nostra missione
        </Typography>

        <Typography variant="h2" sx={{ my: 3 }}>
          Contattaci per una consulenza personalizzata
        </Typography>

        <Typography
          sx={{
            mx: 'auto',
            maxWidth: 640,
            color: 'text.secondary',
            mb: 5
          }}
        >
          I nostri esperti sono pronti a valutare le tue esigenze di sicurezza nei viaggi e sviluppare un piano di protezione su misura.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Button
            size="large"
            variant="contained"
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
            {t('contact')}
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
      {renderTeamIntro}
      {renderSecurityBoard}
      {renderLogisticsCoordinator}
      {renderTravelDirections}
      {renderCTA}
    </MainLayout>
  );
}
