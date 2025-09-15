'use client';

import { m } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import { useStrapiHome } from 'src/hooks/use-strapi';
import { useContactSettings } from 'src/hooks/use-global-settings';
import { varFade, MotionViewport } from 'src/components/animate';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function HomeContact() {
  const { t } = useTranslation();
  const theme = useTheme();
  const { contactComponent } = useStrapiHome();
  const { contactCards, email, phone, whatsapp, businessHours } = useContactSettings();

  // Utilizza i dati da Strapi con fallback alle traduzioni
  const title = contactComponent?.title || t('home.contact.title');
  const description = contactComponent?.description || t('home.contact.description');
  const ctaText = contactComponent?.cta_text || t('home.contact.button');
  const ctaLink = contactComponent?.cta_link || paths.contact;

  // Usa le contact cards da Global Settings o fallback statico
  const contactInfo = contactCards?.length > 0 ? contactCards : [
    {
      title: t('home.contact.info.whatsapp.title'),
      value: whatsapp,
      icon: 'logos:whatsapp-icon',
      href: `https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`,
      color: '#25D366',
    },
    {
      title: t('home.contact.info.signal.title'),
      value: phone,
      icon: 'simple-icons:signal',
      href: `https://signal.me/#p/${phone.replace(/[^0-9]/g, '')}`,
      color: '#3A76F0',
    },
    {
      title: t('home.contact.info.1.title'),
      value: email,
      icon: 'solar:letter-bold',
      href: `mailto:${email}`,
    },
    {
      title: t('home.contact.info.2.title'),
      value: businessHours,
      icon: 'solar:clock-circle-bold',
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.default }}>
      <Container component={MotionViewport}>
        {/* Header */}
        <Stack spacing={3} sx={{ textAlign: 'center', mb: 8 }}>
          <m.div variants={varFade().inUp}>
            <Typography
              variant="overline"
              sx={{ 
                color: 'company.main', 
                fontWeight: 'fontWeightBold',
              }}
            >
              {t('home.contact.overline')}
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography 
              variant="h2" 
              sx={{ 
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
              }}
            >
              {title}
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography 
              sx={{ 
                fontSize: { xs: '1.0rem', md: '1.2rem' },
                maxWidth: '700px',
                mx: 'auto',
                color: 'text.secondary'
              }}
            >
              {description}
            </Typography>
          </m.div>
        </Stack>

        {/* Contact Cards */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {contactInfo.map((contact, index) => (
            <Grid key={contact.title} xs={12} md={3}>
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
                        color: contact.color || 'company.main',
                        mx: 'auto',
                        mb: 2
                      }} 
                    />
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {contact.title}
                    </Typography>
                    {contact.href ? (
                      <Link 
                        href={contact.href} 
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        sx={{ 
                          color: 'text.secondary',
                          textDecoration: 'none',
                          '&:hover': { color: contact.color || 'company.main' }
                        }}
                      >
                        {contact.value}
                      </Link>
                    ) : (
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {contact.value}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </m.div>
            </Grid>
          ))}
        </Grid>

        {/* CTA Button */}
        <m.div variants={varFade().inUp}>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              size="large"
              variant="contained"
              color="primary"
              component={RouterLink}
              href={ctaLink}
              sx={{
                bgcolor: 'company.main',
                color: 'black',
                px: 4,
                py: 1.5,
                fontSize: { xs: '1.0rem', md: '1.1rem' },
                '&:hover': {
                  bgcolor: (theme) => alpha(theme.palette.company.main, 0.8),
                  color: 'black',
                },
              }}
              startIcon={<Iconify icon="carbon:send" />}
            >
              {ctaText}
            </Button>
          </Box>
        </m.div>
      </Container>
    </Box>
  );
}
