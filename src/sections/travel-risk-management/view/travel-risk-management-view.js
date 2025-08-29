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
        backgroundImage: 'url(/assets/images/JetOut-CJ4-750.jpg)',
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
              {t('common.cta_consultation')}
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
          <Typography color="text.primary">{t('travel_risk.hero.title')}</Typography>
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
            <Typography variant="h3" sx={{ mb: 3, color: 'common.white' }}>
              {t('travel_risk.overview.title')}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                color: 'common.white',
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
              src="/assets/images/depositphotos_75876245-stock-illustration-world-map-with-shining-points.webp"
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
                src="/assets/images/aeroplane-aircraft-airplane-1792072.jpg"
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
              <Typography variant="h3" sx={{ mb: 3, color: 'common.white' }}>
                {t('travel_risk.expertise.title')}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  color: 'common.white',
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
        <Typography variant="h3" sx={{ textAlign: 'center', mb: 3, color: 'common.white' }}>
          {t('travel_risk.standards.title')}
        </Typography>

        <Typography
          sx={{
            mx: 'auto',
            maxWidth: 900,
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            color: 'common.white',
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
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 3, color: 'common.white' }}>
            {t('travel_risk.team_intro.title')}
          </Typography>

          <Typography
            sx={{
              mx: 'auto',
              maxWidth: 700,
              color: 'common.white',
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
      <Grid container spacing={{ xs: 3, md: 5 }} alignItems="stretch" sx={{ minHeight: { md: 400 } }}>
        <Grid xs={12} md={6} sx={{ display: 'flex' }}>
          <m.div variants={varFade().inLeft} style={{ width: '100%', display: 'flex' }}>
            <Card
              sx={{
                p: { xs: 4, md: 6 },
                bgcolor: 'background.paper',
                border: '2px solid',
                borderColor: 'primary.main',
                boxShadow: (theme) => theme.customShadows.z12,
                height: 1,
                width: 1,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent sx={{ p: 0, height: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box
                    sx={{
                      width: 4,
                      height: 40,
                      bgcolor: 'primary.main',
                      borderRadius: 1,
                      mr: 2
                    }}
                  />
                  <Typography variant="h3" sx={{ color: 'text.primary' }}>
                    {t('travel_risk.security_board.title')}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontSize: { xs: '0.95rem', md: '1.1rem' },
                    lineHeight: 1.7,
                    whiteSpace: 'pre-line',
                    color: 'common.white',
                    flex: 1
                  }}
                >
                  {t('travel_risk.security_board.description')}
                </Typography>
              </CardContent>
            </Card>
          </m.div>
        </Grid>

        <Grid xs={12} md={6} sx={{ display: 'flex' }}>
          <m.div variants={varFade().inRight} style={{ width: '100%', display: 'flex' }}>
            <Card
              sx={{
                p: { xs: 4, md: 6 },
                bgcolor: 'background.paper',
                border: '2px solid',
                borderColor: 'grey.300',
                boxShadow: (theme) => theme.customShadows.z12,
                height: 1,
                width: 1,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent sx={{ p: 0, height: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box
                    sx={{
                      width: 4,
                      height: 40,
                      bgcolor: 'grey.400',
                      borderRadius: 1,
                      mr: 2
                    }}
                  />
                  <Typography variant="h3" sx={{ color: 'text.primary' }}>
                    {t('travel_risk.travel_risk_officer.title')}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontSize: { xs: '0.95rem', md: '1.1rem' },
                    lineHeight: 1.7,
                    whiteSpace: 'pre-line',
                    color: 'common.white',
                    flex: 1
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
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 3, color: 'common.white' }}>
            {t('travel_risk.logistics_coordinator.title')}
          </Typography>

          <Typography
            sx={{
              mx: 'auto',
              maxWidth: 800,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              color: 'common.white',
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
    <Container component={MotionViewport} sx={{ py: { xs: 8, md: 12 } }}>
      <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch" sx={{ minHeight: { md: 300 } }}>
        <Grid xs={12} md={6} sx={{ display: 'flex' }}>
          <m.div variants={varFade().inLeft} style={{ width: '100%', display: 'flex' }}>
            <Card
              sx={{
                p: { xs: 2, md: 2.5 },
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'primary.main',
                boxShadow: (theme) => theme.customShadows.z8,
                height: 1,
                width: 1,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent sx={{ p: 0, height: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      width: 3,
                      height: 24,
                      bgcolor: 'primary.main',
                      borderRadius: 0.5,
                      mr: 1.5
                    }}
                  />
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: 'text.primary',
                      fontWeight: 400,
                      fontSize: { xs: '1.1rem', md: '1.25rem' }
                    }}
                  >
                    {t('travel_risk.from_abroad.title')}
                  </Typography>
                </Box>

                <Stack spacing={1.5} sx={{ flex: 1 }}>
                  {(Array.isArray(t('travel_risk.from_abroad.items', { returnObjects: true })) 
                    ? t('travel_risk.from_abroad.items', { returnObjects: true }) 
                    : []
                  ).map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Iconify
                        icon="carbon:checkmark-filled"
                        sx={{ 
                          color: 'primary.main',
                          mt: 0.25,
                          mr: 1.5,
                          flexShrink: 0,
                          fontSize: 14
                        }}
                      />
                      <Typography 
                        sx={{ 
                          lineHeight: 1.4,
                          color: 'common.white',
                          fontSize: { xs: '0.8rem', md: '0.875rem' },
                          fontWeight: 300
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </m.div>
        </Grid>

        <Grid xs={12} md={6} sx={{ display: 'flex' }}>
          <m.div variants={varFade().inRight} style={{ width: '100%', display: 'flex' }}>
            <Card
              sx={{
                p: { xs: 2, md: 2.5 },
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'grey.300',
                boxShadow: (theme) => theme.customShadows.z8,
                height: 1,
                width: 1,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent sx={{ p: 0, height: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      width: 3,
                      height: 24,
                      bgcolor: 'grey.400',
                      borderRadius: 0.5,
                      mr: 1.5
                    }}
                  />
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: 'text.primary',
                      fontWeight: 400,
                      fontSize: { xs: '1.1rem', md: '1.25rem' }
                    }}
                  >
                    {t('travel_risk.to_abroad.title')}
                  </Typography>
                </Box>

                <Stack spacing={1.5} sx={{ flex: 1 }}>
                  {(Array.isArray(t('travel_risk.to_abroad.items', { returnObjects: true })) 
                    ? t('travel_risk.to_abroad.items', { returnObjects: true }) 
                    : []
                  ).map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Iconify
                        icon="carbon:checkmark-filled"
                        sx={{ 
                          color: 'grey.500',
                          mt: 0.25,
                          mr: 1.5,
                          flexShrink: 0,
                          fontSize: 14
                        }}
                      />
                      <Typography 
                        sx={{ 
                          lineHeight: 1.4,
                          color: 'common.white',
                          fontSize: { xs: '0.8rem', md: '0.875rem' },
                          fontWeight: 300
                        }}
                      >
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
          sx={{ 
            color: 'company.main', 
            fontWeight: 'fontWeightBold',
            mb: 2,
            display: 'block'
          }}
        >
          {t('travel_risk.cta.overline')}
        </Typography>

        <Typography 
          variant="h2" 
          sx={{ 
            mb: 3,
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
          }}
        >
          {t('travel_risk.cta.title')}
        </Typography>

        <Typography
          sx={{
            mx: 'auto',
            maxWidth: 640,
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            color: 'common.white',
            mb: 5
          }}
        >
          {t('travel_risk.cta.description')}
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
            {t('common.contact_us')}
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
