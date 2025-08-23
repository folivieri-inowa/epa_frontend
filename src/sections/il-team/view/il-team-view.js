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

// ----------------------------------------------------------------------

export default function IlTeamView() {
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
        backgroundImage: 'url(/assets/images/mantas-hesthaven-_g1WdcKcV3w-unsplash.jpg)',
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
              fontWeight: 800,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' },
              lineHeight: { xs: 1.2, md: 1.1 },
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            {t('team.page.hero.title')}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: 'common.white',
              fontWeight: theme.typography.fontWeightMedium,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.5rem' },
              lineHeight: { xs: 1.4, md: 1.3 },
              maxWidth: { xs: '100%', md: '80%' },
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}
          >
            {t('team.page.hero.subtitle')}
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
              {t('team.page.hero.cta')}
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
          <Typography color="text.primary">{t('team.page.breadcrumbs.team')}</Typography>
        </Breadcrumbs>
      </Container>
    </Box>
  );

  // Professionisti section
  const renderProfessionisti = (
    <Container component={MotionViewport} sx={{ py: { xs: 8, md: 12 } }}>
      <Grid container spacing={5} alignItems="center">
        <Grid xs={12} md={6}>
          <m.div variants={varFade().inLeft}>
            <Image
              alt="Il nostro team di professionisti"
              src="/assets/images/Fc1lH5DDNpnq957L_2OomURCvf4P9heCx.jpg"
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
                {t('team.page.professionals.overline')}
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 700, color: theme.palette.text.primary }}>
                {t('team.page.professionals.title')}
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography 
                sx={{ 
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8,
                  color: theme.palette.text.primary
                }}
              >
                {t('team.page.professionals.description')}
              </Typography>
            </m.div>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );

  // Leadership section
  const renderLeadership = (
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
                  {t('team.page.leadership.overline')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inLeft}>
                <Typography variant="h3" sx={{ mb: 3, fontWeight: 700, color: theme.palette.text.primary }}>
                  {t('team.page.leadership.title')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inLeft}>
                <Typography 
                  sx={{ 
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.8,
                    color: theme.palette.text.primary
                  }}
                >
                  {t('team.page.leadership.description')}
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <m.div variants={varFade().inRight}>
              <Image
                alt="Leadership operativa"
                src="/assets/images/Y1SJAsVYAXrWc2wH_iRrkzF5MD3YeyMLN.jpg"
                ratio="4/3"
                sx={{ borderRadius: 2 }}
              />
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  // Organigramma section
  const renderOrganigramma = (
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
          {t('team.page.organigramma.overline')}
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography 
          variant="h3" 
          sx={{ 
            textAlign: 'center',
            mb: 8,
            fontWeight: 700,
            color: theme.palette.text.primary
          }}
        >
          {t('team.page.organigramma.title')}
        </Typography>
      </m.div>

      {/* Security Board */}
      <m.div variants={varFade().inUp}>
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, color: 'company.main' }}>
            {t('team.page.organigramma.security_board')}
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {[
              { title: t('team.page.organigramma.roles.chief_security_manager'), icon: 'mdi:shield-crown' },
              { title: t('team.page.organigramma.roles.security_manager'), icon: 'mdi:shield-account' },
              { title: t('team.page.organigramma.roles.risk_analyst'), icon: 'mdi:chart-line' },
              { title: t('team.page.organigramma.roles.counter_terrorism_analyst'), icon: 'mdi:shield-alert' }
            ].map((role, index) => (
              <Grid key={role.title} xs={12} sm={6} md={3}>
                <Card 
                  sx={{ 
                    p: 3, 
                    height: '100%',
                    textAlign: 'center',
                    bgcolor: alpha(theme.palette.company.main, 0.08),
                    border: `1px solid ${alpha(theme.palette.company.main, 0.2)}`,
                    '&:hover': {
                      bgcolor: alpha(theme.palette.company.main, 0.12),
                      transform: 'translateY(-4px)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  <CardContent>
                    <Iconify 
                      icon={role.icon} 
                      sx={{ 
                        width: 48, 
                        height: 48, 
                        color: 'company.main',
                        mx: 'auto',
                        mb: 2
                      }} 
                    />
                    <Typography variant="h6" sx={{ color: 'company.main' }}>
                      {role.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </m.div>

      {/* Arrow Down */}
      <m.div variants={varFade().inUp}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Iconify 
            icon="mdi:arrow-down-bold" 
            sx={{ 
              width: 48, 
              height: 48, 
              color: 'company.main'
            }} 
          />
        </Box>
      </m.div>

      {/* Direzione sul campo */}
      <m.div variants={varFade().inUp}>
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, color: 'company.main' }}>
            {t('team.page.organigramma.field_direction')}
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {[
              { title: t('team.page.organigramma.roles.operative_security_manager'), icon: 'mdi:account-tie' },
              { title: t('team.page.organigramma.roles.team_leader'), icon: 'mdi:account-group' }
            ].map((role, index) => (
              <Grid key={role.title} xs={12} sm={6} md={3}>
                <Card 
                  sx={{ 
                    p: 3, 
                    height: '100%',
                    textAlign: 'center',
                    bgcolor: alpha(theme.palette.primary.main, 0.08),
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                    '&:hover': {
                      bgcolor: alpha(theme.palette.primary.main, 0.12),
                      transform: 'translateY(-4px)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  <CardContent>
                    <Iconify 
                      icon={role.icon} 
                      sx={{ 
                        width: 48, 
                        height: 48, 
                        color: 'primary.main',
                        mx: 'auto',
                        mb: 2
                      }} 
                    />
                    <Typography variant="h6" sx={{ color: 'primary.main' }}>
                      {role.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </m.div>

      {/* Arrow Down */}
      <m.div variants={varFade().inUp}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Iconify 
            icon="mdi:arrow-down-bold" 
            sx={{ 
              width: 48, 
              height: 48, 
              color: 'primary.main'
            }} 
          />
        </Box>
      </m.div>

      {/* Operatori sul campo */}
      <m.div variants={varFade().inUp}>
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, color: 'secondary.main' }}>
            {t('team.page.organigramma.field_operators')}
          </Typography>
          <Grid container spacing={3}>
            {[
              { title: t('team.page.organigramma.roles.travel_risk_officer'), icon: 'mdi:airplane-takeoff' },
              { title: t('team.page.organigramma.roles.protective_security_specialist'), icon: 'mdi:shield-check' },
              { title: t('team.page.organigramma.roles.security_officer'), icon: 'mdi:security' },
              { title: t('team.page.organigramma.roles.driver'), icon: 'mdi:car' },
              { title: t('team.page.organigramma.roles.uav_pilot'), icon: 'mdi:drone' }
            ].map((role, index) => (
              <Grid key={role.title} xs={12} sm={6} md={2.4}>
                <Card 
                  sx={{ 
                    p: 2, 
                    height: '100%',
                    textAlign: 'center',
                    bgcolor: alpha(theme.palette.secondary.main, 0.08),
                    border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
                    '&:hover': {
                      bgcolor: alpha(theme.palette.secondary.main, 0.12),
                      transform: 'translateY(-4px)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  <CardContent sx={{ p: '16px !important' }}>
                    <Iconify 
                      icon={role.icon} 
                      sx={{ 
                        width: 40, 
                        height: 40, 
                        color: 'secondary.main',
                        mx: 'auto',
                        mb: 1
                      }} 
                    />
                    <Typography variant="subtitle2" sx={{ color: 'secondary.main', fontSize: '0.9rem' }}>
                      {role.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </m.div>

      {/* Staff di supporto - Horizontal */}
      <m.div variants={varFade().inUp}>
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, color: 'info.main' }}>
            {t('team.page.organigramma.support_staff')}
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {[
              { title: t('team.page.organigramma.roles.security_system_specialist'), icon: 'mdi:cog' },
              { title: t('team.page.organigramma.roles.logistics_coordinator'), icon: 'mdi:truck-delivery' }
            ].map((role, index) => (
              <Grid key={role.title} xs={12} sm={6} md={3}>
                <Card 
                  sx={{ 
                    p: 3, 
                    height: '100%',
                    textAlign: 'center',
                    bgcolor: alpha(theme.palette.info.main, 0.08),
                    border: `1px solid ${alpha(theme.palette.info.main, 0.2)}`,
                    '&:hover': {
                      bgcolor: alpha(theme.palette.info.main, 0.12),
                      transform: 'translateY(-4px)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  <CardContent>
                    <Iconify 
                      icon={role.icon} 
                      sx={{ 
                        width: 48, 
                        height: 48, 
                        color: 'info.main',
                        mx: 'auto',
                        mb: 2
                      }} 
                    />
                    <Typography variant="h6" sx={{ color: 'info.main' }}>
                      {role.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </m.div>
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
                src="/assets/images/83WklLpbXcHLuOKL_sPAXRApn3fWJeNmz.jpg"
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
                  {t('team.page.standards.overline')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inRight}>
                <Typography variant="h3" sx={{ mb: 3, fontWeight: 700, color: theme.palette.text.primary }}>
                  {t('team.page.standards.title')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inRight}>
                <Typography 
                  sx={{ 
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.8,
                    color: theme.palette.text.primary
                  }}
                >
                  {t('team.page.standards.description')}
                </Typography>
              </m.div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  // Ricerca section
  const renderRicerca = (
    <Container component={MotionViewport} sx={{ py: { xs: 8, md: 12 } }}>
      <Grid container spacing={5} alignItems="center">
        <Grid xs={12} md={6}>
          <Stack spacing={3}>
            <m.div variants={varFade().inLeft}>
              <Typography
                variant="overline"
                sx={{ color: 'company.main', fontWeight: 'fontWeightBold' }}
              >
                {t('team.page.research.overline')}
              </Typography>
            </m.div>

            <m.div variants={varFade().inLeft}>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 700, color: theme.palette.text.primary }}>
                {t('team.page.research.title')}
              </Typography>
            </m.div>

            <m.div variants={varFade().inLeft}>
              <Typography 
                sx={{ 
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8,
                  color: theme.palette.text.primary
                }}
              >
                {t('team.page.research.description')}
              </Typography>
            </m.div>
          </Stack>
        </Grid>

        <Grid xs={12} md={6}>
          <m.div variants={varFade().inRight}>
            <Image
              alt="Ricerca e sviluppo"
              src="/assets/images/ZTEghfviryhm00Qt_kpYr-oh1MPC0u3zY.jpg"
              ratio="4/3"
              sx={{ borderRadius: 2 }}
            />
          </m.div>
        </Grid>
      </Grid>
    </Container>
  );

  // Quote section
  const renderQuote = (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.neutral }}>
      <Container component={MotionViewport}>
        <m.div variants={varFade().inUp}>
          <Typography 
            sx={{ 
              fontSize: { xs: '1rem', md: '1.1rem' },
              textAlign: 'center',
              mb: 4,
              fontStyle: 'italic',
              lineHeight: 1.8,
              color: theme.palette.text.primary
            }}
          >
            "{t('team.page.quote.text')}"
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
          <Typography variant="h3" sx={{ mb: 3, fontWeight: 700, color: theme.palette.text.primary }}>
            {t('team.page.cta.title')}
          </Typography>
          
          <Typography 
            sx={{ 
              fontSize: { xs: '1rem', md: '1.1rem' }, 
              mb: 4, 
              maxWidth: '600px', 
              mx: 'auto', 
              lineHeight: 1.8,
              color: theme.palette.text.primary
            }}
          >
            {t('team.page.cta.description')}
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
            {t('team.page.cta.button')}
          </Button>
        </Box>
      </m.div>
    </Container>
  );

  return (
    <>
      {renderHero}
      {renderBreadcrumbs}
      {renderProfessionisti}
      {renderLeadership}
      {renderOrganigramma}
      {renderStandard}
      {renderRicerca}
      {renderQuote}
      {renderCTA}
    </>
  );
}
