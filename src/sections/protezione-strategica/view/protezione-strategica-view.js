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
            variant="h2"
            sx={{
              mb: 3,
              textAlign: 'center',
              color: 'primary.main',
            }}
          >
            {t('strategicProtection.content.mainTitle')}
          </Typography>
        </m.div>

        <Grid container spacing={5} sx={{ mb: 8 }}>
          <Grid xs={12} md={6}>
            <m.div variants={varFade().inLeft}>
              <Stack spacing={3}>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                  <HtmlText text={t('strategicProtection.content.description1')} />
                </Typography>
                
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
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
              color: 'text.secondary', 
              lineHeight: 1.8, 
              mb: 5,
              textAlign: 'justify'
            }}
          >
            <HtmlText text={t('strategicProtection.content.description3')} />
          </Typography>
        </m.div>

        {/* Services List */}
        <m.div variants={varFade().inUp}>
          <Card
            sx={{
              p: 4,
              mt: 5,
              background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 4,
                textAlign: 'center',
                color: 'primary.main',
              }}
            >
              {t('strategicProtection.services.title')}
            </Typography>

            <List sx={{ width: '100%' }}>
              {[
                'riskAnalysis',
                'physicalProtection', 
                'intelligence',
                'cybersecurity',
                'training'
              ].map((service, index) => (
                <ListItem
                  key={service}
                  sx={{
                    py: 2,
                    px: 0,
                    borderBottom: index < 4 ? `1px solid ${alpha(theme.palette.divider, 0.1)}` : 'none',
                  }}
                >
                  <ListItemIcon>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Iconify 
                        icon={
                          service === 'riskAnalysis' ? 'carbon:analytics' :
                          service === 'physicalProtection' ? 'carbon:security' :
                          service === 'intelligence' ? 'carbon:intelligence' :
                          service === 'cybersecurity' ? 'carbon:security-services' :
                          'carbon:education'
                        } 
                        sx={{ color: 'common.black', width: 24, height: 24 }} 
                      />
                    </Box>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 600 }}>
                        {t(`strategicProtection.services.items.${service}.title`)}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                        {t(`strategicProtection.services.items.${service}.description`)}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Card>
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
              variant="h4"
              sx={{
                mb: 2,
                color: 'primary.main',
              }}
            >
              {t('strategicProtection.cta.title')}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
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
              mb: 3
            }}
          >
            {t('strategicProtection.certifications.title')}
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
              lineHeight: 1.8
            }}
          >
            {t('strategicProtection.certifications.subtitle')}
          </Typography>
        </m.div>

        <Grid container spacing={4}>
          {t('strategicProtection.certifications.items', { returnObjects: true }).map((certification, index) => (
            <Grid key={certification.title} xs={12} md={6}>
              <m.div variants={varFade().inUp}>
                <Card 
                  sx={{ 
                    p: 4, 
                    height: '100%',
                    minHeight: 280,
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
                        icon="mdi:certificate-outline" 
                        sx={{ 
                          width: 40, 
                          height: 40, 
                          color: 'company.main',
                          mr: 2
                        }} 
                      />
                      <Typography variant="h6" sx={{ color: 'company.main', fontWeight: 'bold' }}>
                        {certification.code}
                      </Typography>
                    </Box>
                    <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'medium' }}>
                      {certification.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'text.secondary', 
                        flexGrow: 1,
                        lineHeight: 1.7
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
