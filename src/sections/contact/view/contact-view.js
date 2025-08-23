'use client';

import { m } from 'framer-motion';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { alpha, useTheme } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import { RouterLink } from 'src/routes/components';
import { varFade, MotionViewport } from 'src/components/animate';
import Iconify from 'src/components/iconify';

import ContactHero from '../contact-hero';
import ContactForm from '../contact-form';

// ----------------------------------------------------------------------

const CONTACT_INFO = [
  {
    titleKey: 'contact.page.info.phone.title',
    value: '+39 392 926 4907',
    icon: 'solar:phone-bold',
    href: 'tel:+393929264907',
  },
  {
    titleKey: 'contact.page.info.email.title',
    value: 'info@protectionagency.it',
    icon: 'solar:letter-bold',
    href: 'mailto:info@protectionagency.it',
  },
  {
    titleKey: 'contact.page.info.availability.title',
    valueKey: 'contact.page.info.availability.value',
    icon: 'solar:clock-circle-bold',
  },
];

const WHY_CONTACT_US = [
  {
    titleKey: 'contact.page.why.experience.title',
    descriptionKey: 'contact.page.why.experience.description',
    icon: 'solar:shield-star-bold',
  },
  {
    titleKey: 'contact.page.why.response.title',
    descriptionKey: 'contact.page.why.response.description',
    icon: 'solar:speed-bold',
  },
  {
    titleKey: 'contact.page.why.solutions.title',
    descriptionKey: 'contact.page.why.solutions.description',
    icon: 'solar:settings-bold',
  },
];

export default function ContactView({ data }) {
  const { t } = useTranslation();
  const theme = useTheme();

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
            {t('contact.page.breadcrumbs.home')}
          </Link>
          <Typography color="text.primary">{t('contact.page.breadcrumbs.current')}</Typography>
        </Breadcrumbs>
      </Container>
    </Box>
  );

  // Contact info cards
  const renderContactInfo = (
    <Container component={MotionViewport} sx={{ py: { xs: 6, md: 8 } }}>
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
          {t('contact.page.info.overline')}
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
          {t('contact.page.info.title')}
        </Typography>
      </m.div>

      <Grid container spacing={3}>
        {CONTACT_INFO.map((contact, index) => (
          <Grid key={contact.title} xs={12} md={4}>
            <m.div variants={varFade().inUp}>
              <Card 
                sx={{ 
                  p: 3, 
                  height: '100%',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: theme.customShadows.z24,
                    transform: 'translateY(-4px)',
                  }
                }}
              >
                <CardContent>
                  <Iconify 
                    icon={contact.icon} 
                    sx={{ 
                      width: 48, 
                      height: 48, 
                      color: 'company.main',
                      mx: 'auto',
                      mb: 2
                    }} 
                  />
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {t(contact.titleKey)}
                  </Typography>
                  {contact.href ? (
                    <Link 
                      href={contact.href} 
                      sx={{ 
                        color: 'text.secondary',
                        textDecoration: 'none',
                        '&:hover': { color: 'company.main' }
                      }}
                    >
                      {contact.value}
                    </Link>
                  ) : (
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {contact.valueKey ? t(contact.valueKey) : contact.value}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </m.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );

  // Why contact us section
  const renderWhyContactUs = (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: theme.palette.background.neutral }}>
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
            {t('contact.page.why.overline')}
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography 
            variant="h3" 
            sx={{ 
              textAlign: 'center',
              mb: 2
            }}
          >
            {t('contact.page.why.title')}
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography 
            sx={{ 
              fontSize: '1.2rem',
              textAlign: 'center',
              maxWidth: '700px',
              mx: 'auto',
              mb: 6,
              color: 'text.secondary'
            }}
          >
            {t('contact.page.why.subtitle')}
          </Typography>
        </m.div>
      </Container>
    </Box>
  );

  // Main form section
  const renderMainForm = (
    <Container sx={{ py: { xs: 8, md: 12 } }}>
      <Grid container spacing={8} alignItems="center">
        {/* Form Column */}
        <Grid xs={12} md={7}>
          <ContactForm title={data.contact_title} labels={data.form} />
        </Grid>

        {/* Info Column */}
        <Grid xs={12} md={5}>
          <Stack spacing={4}>
            <Box>
              <Typography
                variant="overline"
                sx={{ color: 'company.main', fontWeight: 'fontWeightBold' }}
              >
                {t('contact.page.form.overline')}
              </Typography>
              <Typography variant="h4" sx={{ mt: 1, mb: 2 }}>
                {t('contact.page.form.title')}
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
                {t('contact.page.form.description')}
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {t('contact.page.form.call_preference')}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Iconify 
                  icon="solar:phone-bold" 
                  sx={{ width: 20, height: 20, color: 'company.main' }} 
                />
                <Link 
                  href="tel:+393929264907" 
                  sx={{ 
                    fontSize: '1.1rem',
                    fontWeight: 'fontWeightMedium',
                    textDecoration: 'none',
                    color: 'text.primary',
                    '&:hover': { color: 'company.main' }
                  }}
                >
                  +39 392 926 4907
                </Link>
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );

  return (
    <>
      <ContactHero title={data.title} subtitle={data.subtitle} />
      {renderBreadcrumbs}
      {renderContactInfo}
      {renderWhyContactUs}
      {renderMainForm}
    </>
  );
}

ContactView.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    contact_title: PropTypes.string.isRequired,
    form: PropTypes.object.isRequired,
  }).isRequired,
};
