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
            {t('eventi.page.hero.title')}
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
            {t('eventi.page.hero.subtitle')}
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
              {t('eventi.page.hero.cta')}
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
            {t('eventi.page.breadcrumbs.home')}
          </Link>
          <Typography color="text.primary">{t('eventi.page.breadcrumbs.current')}</Typography>
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
              alt="Eventi di lusso"
              src="/assets/images/events2.jpg"
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
                {t('eventi.page.service.overline')}
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography variant="h3" sx={{ mb: 3 }}>
                {t('eventi.page.service.title')}
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <HtmlText sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                {t('eventi.page.service.description')}
              </HtmlText>
            </m.div>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );

  // Protezione section
  const renderProtezione = (
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
                  {t('eventi.page.protection.overline')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inLeft}>
                <Typography variant="h3" sx={{ mb: 3 }}>
                  {t('eventi.page.protection.title')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inLeft}>
                <HtmlText sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                  {t('eventi.page.protection.description')}
                </HtmlText>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <m.div variants={varFade().inRight}>
              <Image
                alt="Protezione eventi"
                src="/assets/images/events3.jpg"
                ratio="4/3"
                sx={{ borderRadius: 2 }}
              />
            </m.div>
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
          {t('eventi.page.services.overline')}
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
          {t('eventi.page.services.title')}
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
          {t('eventi.page.services.subtitle')}
        </Typography>
      </m.div>

      <Grid container spacing={3}>
        {[
          {
            title: t('eventi.page.services.vip_protection.title'),
            description: t('eventi.page.services.vip_protection.description'),
            icon: 'mdi:shield-crown'
          },
          {
            title: t('eventi.page.services.risk_assessment.title'), 
            description: t('eventi.page.services.risk_assessment.description'),
            icon: 'mdi:clipboard-check'
          },
          {
            title: t('eventi.page.services.advanced_tech.title'),
            description: t('eventi.page.services.advanced_tech.description'),
            icon: 'mdi:drone'
          },
          {
            title: t('eventi.page.services.iso_standards.title'),
            description: t('eventi.page.services.iso_standards.description'),
            icon: 'mdi:certificate'
          }
        ].map((servizio, index) => (
          <Grid key={servizio.title} xs={12} sm={6} md={3}>
            <m.div variants={varFade().inUp}>
              <Card 
                sx={{ 
                  p: 3, 
                  height: '100%',
                  minHeight: 290, // Altezza minima garantita
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
                    icon={servizio.icon} 
                    sx={{ 
                      width: 64, 
                      height: 64, 
                      color: 'company.main',
                      mx: 'auto',
                      mb: 2
                    }} 
                  />
                  <Typography variant="h6" sx={{ mb: 2, minHeight: 32 }}>
                    {servizio.title}
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
                    {servizio.description}
                  </Typography>
                </CardContent>
              </Card>
            </m.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );

  // Team section
  const renderTeam = (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.neutral }}>
      <Container component={MotionViewport}>
        <Grid container spacing={5} alignItems="center">
          <Grid xs={12} md={6}>
            <m.div variants={varFade().inLeft}>
              <Image
                alt="Team professionale"
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
                  {t('eventi.page.team.overline')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inRight}>
                <Typography variant="h3" sx={{ mb: 3 }}>
                  {t('eventi.page.team.title')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inRight}>
                <HtmlText sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                  {t('eventi.page.team.description')}
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
          {t('eventi.page.antiterrorism.overline')}
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
          {t('eventi.page.antiterrorism.title')}
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
          {t('eventi.page.antiterrorism.description')}
        </Typography>
      </m.div>

      <Grid container spacing={3} justifyContent="center">
        {[
          { title: t('eventi.page.antiterrorism.roles.security_manager.title'), description: t('eventi.page.antiterrorism.roles.security_manager.description') },
          { title: t('eventi.page.antiterrorism.roles.risk_analyst.title'), description: t('eventi.page.antiterrorism.roles.risk_analyst.description') },
          { title: t('eventi.page.antiterrorism.roles.counter_terrorism.title'), description: t('eventi.page.antiterrorism.roles.counter_terrorism.description') },
          { title: t('eventi.page.antiterrorism.roles.field_operators.title'), description: t('eventi.page.antiterrorism.roles.field_operators.description') }
        ].map((ruolo, index) => (
          <Grid key={ruolo.title} xs={12} sm={6} md={3}>
            <m.div variants={varFade().inUp}>
              <Card 
                sx={{ 
                  p: 3, 
                  height: '100%',
                  minHeight: 160, // Altezza minima garantita
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
              fontStyle: 'italic'
            }}
          >
            {t('eventi.page.quote')}
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
          <Typography variant="h3" sx={{ mb: 3 }}>
            {t('eventi.page.cta.title')}
          </Typography>
          
          <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' }, mb: 4, maxWidth: '600px', mx: 'auto' }}>
            {t('eventi.page.cta.description')}
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
            {t('eventi.page.cta.button')}
          </Button>
        </Box>
      </m.div>
    </Container>
  );

  return (
    <MainLayout>
      {renderHero}
      {renderBreadcrumbs}
      {renderServizio}
      {renderProtezione}
      {renderServizi}
      {renderTeam}
      {renderAntiterrorismo}
      {renderCitazione}
      {renderCTA}
    </MainLayout>
  );
}
