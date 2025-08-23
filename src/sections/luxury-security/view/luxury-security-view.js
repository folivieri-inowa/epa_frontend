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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { paths } from 'src/routes/paths';
import { useResponsive } from 'src/hooks/use-responsive';
import { RouterLink } from 'src/routes/components';
import { varFade, MotionViewport } from 'src/components/animate';
import Iconify from 'src/components/iconify';
import Image from 'src/components/image';
import HtmlText from 'src/components/html-text';
import MainLayout from 'src/layouts/main';

// ----------------------------------------------------------------------

export default function LuxurySecurityView() {
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
        backgroundImage: 'url(/assets/images/luxury1.jpg)',
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
            {t('luxurySecurity.hero.title')}
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
            {t('luxurySecurity.hero.subtitle')}
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
              {t('luxurySecurity.hero.cta')}
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
            {t('luxurySecurity.breadcrumbs.home')}
          </Link>
          <Typography color="text.primary">{t('luxurySecurity.breadcrumbs.current')}</Typography>
        </Breadcrumbs>
      </Container>
    </Box>
  );

  // Hotel Security section
  const renderHotelSecurity = (
    <Container component={MotionViewport} sx={{ py: { xs: 8, md: 12 } }}>
      <Grid container spacing={5} alignItems="center">
        <Grid xs={12} md={6}>
          <m.div variants={varFade().inLeft}>
            <Image
              alt="Luxury Hotel Security"
              src="/assets/images/luxury2.jpg"
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
                {t('luxurySecurity.hotelSecurity.overline')}
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography variant="h3" sx={{ mb: 3 }}>
                {t('luxurySecurity.hotelSecurity.title')}
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <HtmlText 
                text={t('luxurySecurity.hotelSecurity.description')}
                sx={{ fontSize: { xs: '1.1rem', md: '1.25rem' }, lineHeight: 1.8 }}
              />
            </m.div>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );

  // Hotel Services section
  const renderHotelServices = (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.neutral }}>
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
            {t('luxurySecurity.hotelServices.overline')}
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography 
            variant="h3" 
            sx={{ 
              textAlign: 'center',
              mb: 6
            }}
          >
            {t('luxurySecurity.hotelServices.title')}
          </Typography>
        </m.div>

        <Grid container spacing={4}>
          {t('luxurySecurity.hotelServices.items', { returnObjects: true }).map((service, index) => (
            <Grid key={service.title} xs={12} md={6} lg={3}>
              <m.div variants={varFade().inUp}>
                <Card 
                  sx={{ 
                    p: 3, 
                    height: '100%',
                    minHeight: 300,
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
                      icon={service.icon} 
                      sx={{ 
                        width: 64, 
                        height: 64, 
                        color: 'company.main',
                        mx: 'auto',
                        mb: 2
                      }} 
                    />
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', flexGrow: 1 }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </m.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );

  // Private Residences section
  const renderPrivateResidences = (
    <Container component={MotionViewport} sx={{ py: { xs: 8, md: 12 } }}>
      <Grid container spacing={5} alignItems="center">
        <Grid xs={12} md={6}>
          <Stack spacing={3}>
            <m.div variants={varFade().inLeft}>
              <Typography
                variant="overline"
                sx={{ color: 'company.main', fontWeight: 'fontWeightBold' }}
              >
                {t('luxurySecurity.privateResidences.overline')}
              </Typography>
            </m.div>

            <m.div variants={varFade().inLeft}>
              <Typography variant="h3" sx={{ mb: 3 }}>
                {t('luxurySecurity.privateResidences.title')}
              </Typography>
            </m.div>

            <m.div variants={varFade().inLeft}>
              <Typography 
                variant="h5"
                sx={{ 
                  mb: 3,
                  fontStyle: 'italic',
                  color: 'primary.main'
                }}
              >
                {t('luxurySecurity.privateResidences.quote')}
              </Typography>
            </m.div>

            <m.div variants={varFade().inLeft}>
              <HtmlText 
                text={t('luxurySecurity.privateResidences.description')}
                sx={{ fontSize: { xs: '1.1rem', md: '1.25rem' }, lineHeight: 1.8 }}
              />
            </m.div>
          </Stack>
        </Grid>

        <Grid xs={12} md={6}>
          <m.div variants={varFade().inRight}>
            <Image
              alt="Private Residences Security"
              src="/assets/images/luxury3.jpg"
              ratio="4/3"
              sx={{ borderRadius: 2 }}
            />
          </m.div>
        </Grid>
      </Grid>
    </Container>
  );

  // Team Recruitment section
  const renderTeamRecruitment = (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.neutral }}>
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
            {t('luxurySecurity.teamRecruitment.overline')}
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
            {t('luxurySecurity.teamRecruitment.title')}
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography 
            sx={{ 
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              mb: 6,
              lineHeight: 1.8
            }}
          >
            {t('luxurySecurity.teamRecruitment.description')}
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              size="large"
              variant="outlined"
              color="primary"
              component={RouterLink}
              href={paths.contact}
              sx={{
                borderColor: 'company.main',
                color: 'company.main',
                '&:hover': {
                  borderColor: 'company.main',
                  bgcolor: alpha(theme.palette.company.main, 0.08),
                },
              }}
              startIcon={<Iconify icon="mdi:account-plus" />}
            >
              {t('luxurySecurity.teamRecruitment.button')}
            </Button>
          </Box>
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
          <Typography variant="h3" sx={{ mb: 3, color: 'primary.main' }}>
            {t('luxurySecurity.cta.title')}
          </Typography>
          
          <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.25rem' }, mb: 4, maxWidth: '600px', mx: 'auto' }}>
            {t('luxurySecurity.cta.description')}
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
            {t('luxurySecurity.cta.button')}
          </Button>
        </Box>
      </m.div>
    </Container>
  );

  return (
    <MainLayout>
      {renderHero}
      {renderBreadcrumbs}
      {renderHotelSecurity}
      {renderHotelServices}
      {renderPrivateResidences}
      {renderTeamRecruitment}
      {renderCTA}
    </MainLayout>
  );
}
