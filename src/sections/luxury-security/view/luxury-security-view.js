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
        backgroundImage: 'url(/assets/images/Kestrel-Aviation-Management-BBJ-Living.jpg)',
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

  // Introduction section (unified hotel + residences)
  const renderIntroduction = (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.neutral }}>
      <Container component={MotionViewport}>
        <m.div variants={varFade().inUp}>
          <Box sx={{ textAlign: 'center', maxWidth: '900px', mx: 'auto' }}>
            <Typography
              variant="overline"
              sx={{ 
                color: 'company.main', 
                fontWeight: 'fontWeightBold', 
                mb: 2, 
                display: 'block' 
              }}
            >
              {t('luxurySecurity.introduction.overline')}
            </Typography>
            
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 4,
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
              }}
            >
              {t('luxurySecurity.introduction.title')}
            </Typography>
            
            <Typography 
              sx={{ 
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                lineHeight: 1.8,
                color: 'common.white'
              }}
            >
              {t('luxurySecurity.introduction.description')}
            </Typography>
          </Box>
        </m.div>
      </Container>
    </Box>
  );

  // Risk Assessment section
  const renderRiskAssessment = (
    <Container component={MotionViewport} sx={{ py: { xs: 8, md: 12 } }}>
      <Grid container spacing={5} alignItems="center">
        <Grid xs={12} md={6}>
          <m.div variants={varFade().inLeft}>
            <Image
              alt="Risk Assessment"
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
                sx={{ 
                  color: 'company.main', 
                  fontWeight: 'fontWeightBold',
                  mb: 2,
                  display: 'block'
                }}
              >
                {t('luxurySecurity.riskAssessment.overline')}
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography 
                variant="h2" 
                sx={{ 
                  mb: 3,
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
                }}
              >
                {t('luxurySecurity.riskAssessment.title')}
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.25rem' }, lineHeight: 1.8 }}>
                {t('luxurySecurity.riskAssessment.description')}
              </Typography>
            </m.div>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );

  // Security Systems section (removed image - text only)
  const renderSecuritySystems = (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: theme.palette.background.neutral }}>
      <Container component={MotionViewport}>
        <m.div variants={varFade().inUp}>
          <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            <Typography
              variant="overline"
              sx={{ 
                color: 'company.main', 
                fontWeight: 'fontWeightBold', 
                mb: 2, 
                display: 'block' 
              }}
            >
              {t('luxurySecurity.securitySystems.overline')}
            </Typography>

            <Typography 
              variant="h2" 
              sx={{ 
                mb: 4,
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
              }}
            >
              {t('luxurySecurity.securitySystems.title')}
            </Typography>

            <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.25rem' }, lineHeight: 1.8 }}>
              {t('luxurySecurity.securitySystems.description')}
            </Typography>
          </Box>
        </m.div>
      </Container>
    </Box>
  );

  // Expert Team section (removed image - text only)
  const renderExpertTeam = (
    <Container component={MotionViewport} sx={{ py: { xs: 8, md: 12 } }}>
      <m.div variants={varFade().inUp}>
        <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
          <Typography
            variant="overline"
            sx={{ 
              color: 'company.main', 
              fontWeight: 'fontWeightBold', 
              mb: 2, 
              display: 'block' 
            }}
          >
            {t('luxurySecurity.expertTeam.overline')}
          </Typography>

          <Typography 
            variant="h2" 
            sx={{ 
              mb: 4,
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
            }}
          >
            {t('luxurySecurity.expertTeam.title')}
          </Typography>

          <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.25rem' }, lineHeight: 1.8 }}>
            {t('luxurySecurity.expertTeam.description')}
          </Typography>
        </Box>
      </m.div>
    </Container>
  );

  // Private Residences intro section
  const renderPrivateResidencesIntro = (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.neutral }}>
      <Container component={MotionViewport}>
        <m.div variants={varFade().inUp}>
          <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            <Typography
              variant="overline"
              sx={{ 
                color: 'company.main', 
                fontWeight: 'fontWeightBold', 
                mb: 2, 
                display: 'block' 
              }}
            >
              {t('luxurySecurity.privateResidences.overline')}
            </Typography>
            
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 4,
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
              }}
            >
              {t('luxurySecurity.privateResidences.title')}
            </Typography>
            
            <Typography 
              variant="h5"
              sx={{ 
                fontStyle: 'italic',
                color: 'primary.main',
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                lineHeight: 1.6
              }}
            >
              {t('luxurySecurity.privateResidences.quote')}
            </Typography>
          </Box>
        </m.div>
      </Container>
    </Box>
  );

  // Residence Assessment section
  const renderResidenceAssessment = (
    <Container component={MotionViewport} sx={{ py: { xs: 8, md: 12 } }}>
      <Grid container spacing={5} alignItems="center">
        <Grid xs={12} md={6}>
          <Stack spacing={3}>
            <m.div variants={varFade().inLeft}>
              <Typography
                variant="overline"
                sx={{ 
                  color: 'company.main', 
                  fontWeight: 'fontWeightBold',
                  mb: 2,
                  display: 'block'
                }}
              >
                {t('luxurySecurity.residenceAssessment.overline')}
              </Typography>
            </m.div>

            <m.div variants={varFade().inLeft}>
              <Typography 
                variant="h2" 
                sx={{ 
                  mb: 3,
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
                }}
              >
                {t('luxurySecurity.residenceAssessment.title')}
              </Typography>
            </m.div>            <m.div variants={varFade().inLeft}>
              <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.25rem' }, lineHeight: 1.8 }}>
                {t('luxurySecurity.residenceAssessment.description')}
              </Typography>
            </m.div>
          </Stack>
        </Grid>

        <Grid xs={12} md={6}>
          <m.div variants={varFade().inRight}>
            <Image
              alt="Residence Assessment"
              src="/assets/images/Y1SJAsVYAXrWc2wH_iRrkzF5MD3YeyMLN.jpg"
              ratio="4/3"
              sx={{ borderRadius: 2 }}
            />
          </m.div>
        </Grid>
      </Grid>
    </Container>
  );

  // Custom Security section (removed image - text only)
  const renderCustomSecurity = (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: theme.palette.background.neutral }}>
      <Container component={MotionViewport}>
        <m.div variants={varFade().inUp}>
          <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            <Typography
              variant="overline"
              sx={{ 
                color: 'company.main', 
                fontWeight: 'fontWeightBold', 
                mb: 2, 
                display: 'block' 
              }}
            >
              {t('luxurySecurity.customSecurity.overline')}
            </Typography>

            <Typography 
              variant="h2" 
              sx={{ 
                mb: 4,
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
              }}
            >
              {t('luxurySecurity.customSecurity.title')}
            </Typography>

            <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.25rem' }, lineHeight: 1.8 }}>
              {t('luxurySecurity.customSecurity.description')}
            </Typography>
          </Box>
        </m.div>
      </Container>
    </Box>
  );

  // Family Training section (removed image - text only)
  const renderFamilyTraining = (
    <Container component={MotionViewport} sx={{ py: { xs: 8, md: 12 } }}>
      <m.div variants={varFade().inUp}>
        <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
          <Typography
            variant="overline"
            sx={{ color: 'company.main', fontWeight: 'fontWeightBold', mb: 2, display: 'block' }}
          >
            {t('luxurySecurity.familyTraining.overline')}
          </Typography>

                    <Typography 
            variant="h2" 
            sx={{ 
              mb: 4,
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
            }}
          >
            {t('luxurySecurity.familyTraining.title')}
          </Typography>

          <HtmlText sx={{ fontSize: { xs: '1.1rem', md: '1.25rem' }, lineHeight: 1.8 }}>
            {t('luxurySecurity.familyTraining.description')}
          </HtmlText>
        </Box>
      </m.div>
    </Container>
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
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 3, 
              color: 'primary.main',
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
            }}
          >
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
      {renderIntroduction}
      {renderRiskAssessment}
      {renderSecuritySystems}
      {renderExpertTeam}
      {renderPrivateResidencesIntro}
      {renderResidenceAssessment}
      {renderCustomSecurity}
      {renderFamilyTraining}
      {renderCTA}
    </MainLayout>
  );
}
