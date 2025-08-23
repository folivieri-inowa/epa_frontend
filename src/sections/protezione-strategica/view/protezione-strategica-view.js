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
        backgroundImage: 'url(/assets/images/us-army-blackhawk-middle-east-web.jpg)',
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
            {t('strategicProtection.hero.title')}
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
            {t('strategicProtection.hero.subtitle')}
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
              {t('strategicProtection.hero.cta')}
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );

  // Breadcrumbs
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
          <Typography color="text.primary">{t('strategicProtection.breadcrumb')}</Typography>
        </Breadcrumbs>
      </Container>
    </Box>
  );

  // Main content section (bianco)
  const renderContent = (
    <Container component={MotionViewport} sx={{ py: { xs: 10, md: 15 } }}>
      <Grid container spacing={5} alignItems="center">
        <Grid xs={12} md={7}>
          <Stack spacing={4}>
            <m.div variants={varFade().inLeft}>
              <Typography 
                variant="h3" 
                sx={{ 
                  mb: 2,
                  fontWeight: 700,
                  color: theme.palette.text.primary
                }}
              >
                {t('strategicProtection.content.mainTitle')}
              </Typography>
            </m.div>

            <m.div variants={varFade().inLeft}>
              <Typography 
                sx={{ 
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8,
                  whiteSpace: 'pre-line',
                  color: theme.palette.text.primary,
                  mb: 3
                }}
              >
                {t('strategicProtection.content.description1')}
              </Typography>
            </m.div>

            <m.div variants={varFade().inLeft}>
              <Typography 
                sx={{ 
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8,
                  whiteSpace: 'pre-line',
                  color: theme.palette.text.primary,
                  mb: 3
                }}
              >
                {t('strategicProtection.content.description2')}
              </Typography>
            </m.div>
          </Stack>
        </Grid>

        <Grid xs={12} md={5}>
          <m.div variants={varFade().inRight}>
            <Image
              alt="Protezione Strategica"
              src="/assets/images/glowing-europe-sunrise-space-illuminated-cities-roads-earth-day-hour-353108841.webp"
              ratio="4/3"
              sx={{ borderRadius: 2 }}
            />
          </m.div>
        </Grid>
      </Grid>
    </Container>
  );

  // Overview section with services list (grigio neutro per alternanza)
  const renderOverview = (
    <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.neutral' }}>
      <Container component={MotionViewport}>
        <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center">
          <Grid xs={12} md={6}>
            <m.div variants={varFade().inLeft}>
              <Typography 
                variant="h3" 
                sx={{ 
                  mb: 3,
                  fontWeight: 700,
                  color: theme.palette.text.primary
                }}
              >
                {t('strategicProtection.overview.title')}
              </Typography>

              <Typography
                sx={{
                  color: theme.palette.text.primary,
                  mb: 4,
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  whiteSpace: 'pre-line',
                }}
              >
                {t('strategicProtection.overview.description')}
              </Typography>

              {/* Services as bulleted list */}
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 2, 
                  color: 'company.main',
                  fontWeight: 700
                }}
              >
                {t('strategicProtection.services.title')}
              </Typography>
              <List sx={{ pl: 0 }}>
                {t('strategicProtection.services.items', { returnObjects: true })?.map((service, index) => (
                  <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <Iconify icon="carbon:checkmark" sx={{ color: 'company.main', width: 20, height: 20 }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={service}
                      primaryTypographyProps={{
                        sx: { 
                          fontSize: { xs: '1rem', md: '1.1rem' },
                          fontWeight: 500,
                          color: theme.palette.text.primary
                        }
                      }}
                    />
                  </ListItem>
                )) || []}
              </List>
            </m.div>
          </Grid>

          <Grid xs={12} md={6}>
            <m.div variants={varFade().inRight}>
              <Image
                alt="Expertise in Security"
                src="/assets/images/Neptune-P2P-Group-Risk-Map-Q1-Q2.png"
                ratio="4/3"
                sx={{ borderRadius: 2 }}
              />
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  // Standards and Certifications section (bianco)
  const renderCertifications = (
    <Box sx={{ py: { xs: 10, md: 15 } }}>
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
              fontWeight: 700,
              color: theme.palette.text.primary
            }}
          >
            {t('strategicProtection.certifications.title')}
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography 
            sx={{ 
              fontSize: { xs: '1rem', md: '1.1rem' },
              textAlign: 'center',
              maxWidth: '900px',
              mx: 'auto',
              mb: 6,
              lineHeight: 1.8,
              color: theme.palette.text.primary
            }}
          >
            {t('strategicProtection.certifications.subtitle')}
          </Typography>
        </m.div>

        <Grid container spacing={3} alignItems="stretch" sx={{ minHeight: { md: 250 } }}>
          {(Array.isArray(t('strategicProtection.certifications.items', { returnObjects: true })) 
            ? t('strategicProtection.certifications.items', { returnObjects: true }) 
            : []
          ).map((certification, index) => (
            <Grid key={certification.title} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex' }}>
              <m.div variants={varFade().inUp} style={{ width: '100%', display: 'flex' }}>
                <Card 
                  sx={{ 
                    p: 3, 
                    height: 1,
                    width: 1,
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
                        color: theme.palette.text.primary,
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
                        color: 'company.main',
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
                        color: theme.palette.text.secondary,
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

  // Call to action (grigio neutro per alternanza)
  const renderCTA = (
    <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.neutral' }}>
      <Container component={MotionViewport}>
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
            variant="h3" 
            sx={{ 
              mb: 3,
              fontWeight: 700,
              color: theme.palette.text.primary
            }}
          >
            {t('strategicProtection.cta.title')}
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
      </Container>
    </Box>
  );

  return (
    <>
      {renderHero}
      {renderBreadcrumbs}
      {renderContent}
      {renderOverview}
      {renderCertifications}
      {renderCTA}
    </>
  );
}
