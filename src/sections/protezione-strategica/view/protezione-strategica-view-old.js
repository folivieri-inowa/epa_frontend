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

export default function ProtezioneStrategicaView() {
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
      <Container
        sx={{
          height: 1,
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Stack spacing={3} sx={{ textAlign: 'center', color: 'common.white', mx: 'auto' }}>
          <m.div variants={varFade().inDown}>
            <Typography variant="h1" component="h1">
              {t('strategicProtection.hero.title')}
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography variant="h5" sx={{ opacity: 0.8, maxWidth: 800, mx: 'auto' }}>
              {t('strategicProtection.hero.subtitle')}
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
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
                {t('strategicProtection.hero.cta')}
              </Button>
            </Stack>
          </m.div>
        </Stack>
      </Container>
    </Box>
  );

  // Breadcrumbs
  const renderBreadcrumbs = (
    <Container sx={{ pt: 5, pb: 3 }}>
      <Breadcrumbs
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        <Link component={RouterLink} href="/" color="inherit">
          {t('common.home')}
        </Link>
        <Typography color="text.primary">{t('strategicProtection.breadcrumb')}</Typography>
      </Breadcrumbs>
    </Container>
  );

  // Main content
  const renderContent = (
    <Container sx={{ pb: 10 }}>
      <MotionViewport>
        <m.div variants={varFade().inUp}>
          <Typography
            variant="h3"
            sx={{
              mb: 3,
              textAlign: 'center',
              color: 'common.white',
            }}
          >
            {t('strategicProtection.content.mainTitle')}
          </Typography>
        </m.div>

        <Grid container spacing={5} sx={{ mb: 8 }}>
          <Grid xs={12} md={6}>
            <m.div variants={varFade().inLeft}>
              <Stack spacing={3}>
                <Typography variant="body1" sx={{ color: 'common.white', lineHeight: 1.7, fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                  <HtmlText text={t('strategicProtection.content.description1')} />
                </Typography>
                
                <Typography variant="body1" sx={{ color: 'common.white', lineHeight: 1.7, fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                  <HtmlText text={t('strategicProtection.content.description2')} />
                </Typography>
              </Stack>
            </m.div>
          </Grid>

          <Grid xs={12} md={6}>
            <m.div variants={varFade().inRight}>
              <Box
                sx={{
                  borderRadius: 2,
                  overflow: 'hidden',
                  position: 'relative',
                  height: { xs: 280, md: 320 },
                }}
              >
                <Image
                  alt="Protezione Strategica"
                  src="/assets/images/about2.jpg"
                  sx={{ height: 1, width: 1 }}
                />
              </Box>
            </m.div>
          </Grid>
        </Grid>

        <m.div variants={varFade().inUp}>
          <Typography
            variant="body1"
            sx={{ 
              color: 'common.white', 
              lineHeight: 1.7, 
              mb: 5,
              textAlign: 'center',
              fontSize: { xs: '1.1rem', md: '1.5rem' }
            }}
          >
            <HtmlText text={t('strategicProtection.content.description3')} />
          </Typography>
        </m.div>

        {/* Services Section */}
        <m.div variants={varFade().inUp}>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              sx={{
                mb: 8,
                textAlign: 'center',
                color: 'common.white',
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
              }}
            >
              {t('strategicProtection.services.title')}
            </Typography>

            <Grid container spacing={4}>
              {t('strategicProtection.services.items', { returnObjects: true })?.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      p: 4,
                      height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      backdropFilter: 'blur(10px)',
                      border: '2px solid #FFD700',
                      borderRadius: 2,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        borderColor: '#FFA500',
                        boxShadow: '0 20px 40px rgba(255, 215, 0, 0.15)',
                      },
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        boxShadow: '0 8px 24px rgba(255, 215, 0, 0.3)',
                      }}
                    >
                      <Iconify 
                        icon={
                          index === 0 ? 'carbon:analytics' :
                          index === 1 ? 'carbon:security' :
                          index === 2 ? 'carbon:intelligence' :
                          index === 3 ? 'carbon:security-services' :
                          'carbon:education'
                        } 
                        sx={{ 
                          color: 'common.black', 
                          width: 36, 
                          height: 36,
                          fontWeight: 'bold'
                        }} 
                      />
                    </Box>
                    
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        color: 'common.white',
                        fontWeight: 700,
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                        lineHeight: 1.3,
                        mb: 2,
                      }}
                    >
                      {service}
                    </Typography>
                  </Card>
                </Grid>
              )) || []}
            </Grid>
          </Container>
        </m.div>

        {/* CTA Section */}
        <m.div variants={varFade().inUp}>
          <Box
            sx={{
              mt: 8,
              p: 5,
              textAlign: 'center',
              borderRadius: 2,
              bgcolor: alpha(theme.palette.primary.main, 0.08),
              border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                color: 'common.white',
              }}
            >
              {t('strategicProtection.cta.title')}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: 'common.white',
                maxWidth: 600,
                mx: 'auto',
                fontSize: { xs: '1.1rem', md: '1.5rem' },
                lineHeight: 1.7
              }}
            >
              {t('strategicProtection.cta.description')}
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
              {t('strategicProtection.cta.button')}
            </Button>
          </Box>
        </m.div>
      </MotionViewport>
    </Container>
  );

  // Standards and Certifications section
  const renderCertifications = (
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
            {t('strategicProtection.certifications.overline')}
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography 
            variant="h3" 
            sx={{ 
              textAlign: 'center',
              mb: 3,
              color: 'common.white'
            }}
          >
            {t('strategicProtection.certifications.title')}
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography 
            sx={{ 
              fontSize: { xs: '1.1rem', md: '1.5rem' },
              textAlign: 'center',
              maxWidth: '900px',
              mx: 'auto',
              mb: 6,
              lineHeight: 1.7,
              color: 'common.white'
            }}
          >
            {t('strategicProtection.certifications.subtitle')}
          </Typography>
        </m.div>

        <Grid container spacing={3}>
          {(Array.isArray(t('strategicProtection.certifications.items', { returnObjects: true })) 
            ? t('strategicProtection.certifications.items', { returnObjects: true }) 
            : []
          ).map((certification, index) => (
            <Grid key={certification.title} xs={12} sm={6} md={4} lg={3}>
              <m.div variants={varFade().inUp}>
                <Card 
                  sx={{ 
                    p: 3, 
                    height: 1,
                    minHeight: 180,
                    bgcolor: 'background.paper',
                    border: '2px solid',
                    borderColor: 'grey.300',
                    boxShadow: (theme) => theme.customShadows.z12
                  }}
                >
                  <CardContent sx={{ p: 0, height: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: 'common.white',
                        fontWeight: 'fontWeightBold',
                        mb: 1,
                        fontSize: { xs: '1rem', md: '1.1rem' }
                      }}
                    >
                      {certification.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'primary.main',
                        fontSize: { xs: '0.8rem', md: '0.85rem' },
                        fontWeight: 500,
                        mb: 2
                      }}
                    >
                      {certification.organization}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'common.white',
                        fontSize: { xs: '0.85rem', md: '0.9rem' },
                        lineHeight: 1.5,
                        flexGrow: 1
                      }}
                    >
                      {certification.description}
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

  return (
    <MainLayout>
      {renderHero}
      {renderBreadcrumbs}
      {renderContent}
      {renderCertifications}
    </MainLayout>
  );
}
