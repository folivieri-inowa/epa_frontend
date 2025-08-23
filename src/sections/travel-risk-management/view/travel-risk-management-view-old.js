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
            {t('travel_risk.page.breadcrumbs.home')}
          </Link>
          <Typography color="text.primary">{t('travel_risk.page.breadcrumbs.current')}</Typography>
        </Breadcrumbs>
      </Container>
    </Box>
  );

  // Servizio section
  const renderServizio = (
    <Container component={MotionViewport} sx={{ py: { xs: 8, md: 12 } }}>
      <Grid container spacing={5} alignItems="center">
        <Grid xs={12} md={6}>
          <m.div variants={varFade().inLeft}>
            <Image
              alt="Travel Risk Management"
              src="/assets/images/travel2.jpg"
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
                {t('travel_risk.page.service.overline')}
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography variant="h3" sx={{ mb: 3 }}>
                {t('travel_risk.page.service.title')}
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <HtmlText sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                {t('travel_risk.page.service.description')}
              </HtmlText>
            </m.div>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );

  // Valutazione section
  const renderValutazione = (
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
                  {t('travel_risk.page.methodology.overline')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inLeft}>
                <Typography variant="h3" sx={{ mb: 3 }}>
                  {t('travel_risk.page.methodology.title')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inLeft}>
                <HtmlText sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                  {t('travel_risk.page.methodology.description')}
                </HtmlText>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <m.div variants={varFade().inRight}>
              <Image
                alt="Valutazione rischi"
                src="/assets/images/travel3.jpg"
                ratio="4/3"
                sx={{ borderRadius: 2 }}
              />
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  // Team specializzato section
  const renderTeam = (
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
          {t('travel_risk.page.team.overline')}
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
          {t('travel_risk.page.team.title')}
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
          {t('travel_risk.page.team.subtitle')}
        </Typography>
      </m.div>

      <Grid container spacing={3}>
        {[
          {
            title: t('travel_risk.page.team.security_board.title'),
            description: t('travel_risk.page.team.security_board.description'),
            icon: 'mdi:shield-account'
          },
          {
            title: t('travel_risk.page.team.travel_risk_officer.title'), 
            description: t('travel_risk.page.team.travel_risk_officer.description'),
            icon: 'mdi:account-tie'
          },
          {
            title: t('travel_risk.page.team.logistics_coordinator.title'),
            description: t('travel_risk.page.team.logistics_coordinator.description'),
            icon: 'mdi:clipboard-list'
          }
        ].map((team, index) => (
          <Grid key={team.title} xs={12} md={4}>
            <m.div variants={varFade().inUp}>
              <Card 
                sx={{ 
                  p: 3, 
                  height: '100%',
                  minHeight: 300, // Altezza minima garantita
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  '&:hover': {
                    boxShadow: theme.customShadows.z24,
                    transform: 'translateY(-4px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 0 }}>
                  <Iconify 
                    icon={team.icon} 
                    sx={{ 
                      width: 64, 
                      height: 64, 
                      color: 'company.main',
                      mx: 'auto',
                      mb: 2
                    }} 
                  />
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    {team.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', flexGrow: 1 }}>
                    {team.description}
                  </Typography>
                </CardContent>
              </Card>
            </m.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );

  // Standard section
  const renderStandard = (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.neutral }}>
      <Container component={MotionViewport}>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <m.div variants={varFade().inLeft}>
              <Image
                alt="Standard internazionali"
                src="/assets/images/travel4.jpg"
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
                  {t('travel_risk.page.standards.overline')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inRight}>
                <Typography variant="h3" sx={{ mb: 3 }}>
                  {t('travel_risk.page.standards.title')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inRight}>
                <HtmlText sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                  {t('travel_risk.page.standards.description')}
                </HtmlText>
              </m.div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  // Servizi section
  const renderServizi = (
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
          {t('travel_risk.page.services.overline')}
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
          {t('travel_risk.page.services.title')}
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
          {t('travel_risk.page.services.subtitle')}
        </Typography>
      </m.div>

      <Grid container spacing={4}>
        {/* Dall'estero in Italia */}
        <Grid xs={12} md={6}>
          <m.div variants={varFade().inUp}>
            <Card 
              sx={{ 
                p: 4, 
                height: 650, // Altezza fissa invece di minHeight
                display: 'flex',
                flexDirection: 'column',
                border: `1px solid ${alpha(theme.palette.company.main, 0.2)}`,
                '&:hover': {
                  borderColor: 'company.main',
                  boxShadow: theme.customShadows.z8,
                  transition: 'all 0.3s ease'
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 0 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Iconify 
                    icon="mdi:airplane-landing" 
                    sx={{ 
                      width: 48, 
                      height: 48, 
                      color: 'company.main',
                      mr: 2
                    }} 
                  />
                  <Typography variant="h5" sx={{ color: 'company.main' }}>
                    {t('travel_risk.page.services.from_abroad.title')}
                  </Typography>
                </Box>
                <Stack spacing={2} sx={{ flexGrow: 1 }}>
                  <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                    • {t('travel_risk.page.services.from_abroad.item1')}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                    • {t('travel_risk.page.services.from_abroad.item2')}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                    • {t('travel_risk.page.services.from_abroad.item3')}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                    • {t('travel_risk.page.services.from_abroad.item4')}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                    • {t('travel_risk.page.services.from_abroad.item5')}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </m.div>
        </Grid>

        {/* Dall'Italia verso l'estero */}
        <Grid xs={12} md={6}>
          <m.div variants={varFade().inUp}>
            <Card 
              sx={{ 
                p: 4, 
                height: 650, // Altezza fissa uguale alla prima card
                display: 'flex',
                flexDirection: 'column',
                border: `1px solid ${alpha(theme.palette.company.main, 0.2)}`,
                '&:hover': {
                  borderColor: 'company.main',
                  boxShadow: theme.customShadows.z8,
                  transition: 'all 0.3s ease'
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 0 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Iconify 
                    icon="mdi:airplane-takeoff" 
                    sx={{ 
                      width: 48, 
                      height: 48, 
                      color: 'company.main',
                      mr: 2
                    }} 
                  />
                  <Typography variant="h5" sx={{ color: 'company.main' }}>
                    {t('travel_risk.page.services.to_abroad.title')}
                  </Typography>
                </Box>
                <Stack spacing={2} sx={{ flexGrow: 1 }}>
                  <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                    • {t('travel_risk.page.services.to_abroad.item1')}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                    • {t('travel_risk.page.services.to_abroad.item2')}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                    • {t('travel_risk.page.services.to_abroad.item3')}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                    • {t('travel_risk.page.services.to_abroad.item4')}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                    • {t('travel_risk.page.services.to_abroad.item5')}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </m.div>
        </Grid>
      </Grid>
    </Container>
  );

  // Missione section
  const renderMissione = (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.neutral }}>
      <Container component={MotionViewport}>
        <m.div variants={varFade().inUp}>
          <Typography 
            sx={{ 
              fontSize: { xs: '1.1rem', md: '1.5rem' },
              textAlign: 'center',
              mb: 4,
              fontStyle: 'italic'
            }}
          >
            {t('travel_risk.page.mission.quote')}
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
            backgroundColor: alpha(theme.palette.company.main, 0.08),
          }}
        >
          <Typography variant="h3" sx={{ mb: 3, color: 'white' }}>
            {t('travel_risk.page.cta.title')}
          </Typography>
          
          <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' }, mb: 4, maxWidth: '600px', mx: 'auto' }}>
            {t('travel_risk.page.cta.description')}
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
            {t('travel_risk.page.cta.button')}
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
      {renderTravelRiskOfficer}
      {renderLogisticsCoordinator}
      {renderTravelDirections}
      {renderCTA}
    </MainLayout>
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

  // Security Board section
  const renderSecurityBoard = (
    <Container component={MotionViewport} sx={{ py: { xs: 10, md: 15 } }}>
      <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
        <Grid xs={12} md={6}>
          <m.div variants={varFade().inLeft}>
            <Card
              sx={{
                p: { xs: 4, md: 6 },
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                boxShadow: (theme) => theme.customShadows.z24,
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

  // Travel Risk Officer section (already included above)
  const renderTravelRiskOfficer = null;

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
}
