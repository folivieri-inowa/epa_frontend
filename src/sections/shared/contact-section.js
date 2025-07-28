'use client';

import { m } from 'framer-motion';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { alpha, useTheme } from '@mui/material/styles';

import { varFade, MotionViewport } from 'src/components/animate';
import Iconify from 'src/components/iconify';
import ContactForm from '../contact/contact-form';

// ----------------------------------------------------------------------

export default function ContactSection({ title = 'Contattaci', withContainer = true }) {
  const theme = useTheme();

  const formLabels = {
    name: 'Nome',
    email: 'Email',
    phone: 'Telefono',
    subject: 'Oggetto',
    message: 'Messaggio',
    submit: 'Invia',
  };

  const contactInfo = [
    {
      icon: 'carbon:phone',
      label: 'Telefono',
      value: '+393929264907',
    },
    {
      icon: 'carbon:email',
      label: 'Email',
      value: 'info@protectionagency.it',
    },
  ];

  const content = (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        borderRadius: 2,
      }}
    >
      <Grid container spacing={3} justifyContent="space-between">
        {/* Informazioni di contatto */}
        <Grid item xs={12} md={12} sx={{ px: { md: 5 } }}>
          <Stack spacing={3}>
            <m.div variants={varFade().inUp}>
              <Typography variant="h3" sx={{ mb: 3, color: 'primary.main', textAlign: 'center' }}>
                {title}
              </Typography>
            </m.div>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} sx={{ px: { md: 5 } }}>
          <Stack component={MotionViewport} spacing={4}>
            <m.div variants={varFade().inUp}>
              <Typography sx={{ fontSize: '1.325rem' }}>
                Scopri come Executive Protection Agency può proteggere il tuo mondo con soluzioni di sicurezza personalizzate. Contattaci per una consulenza gratuita e unisciti ai nostri clienti che si affidano alla nostra esperienza globale.
              </Typography>
            </m.div>
            <Stack spacing={3}>
              {contactInfo.map((info) => (
                <m.div key={info.label} variants={varFade().inUp}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 1.5,
                        bgcolor: 'primary.main',
                      }}
                    >
                      <Iconify icon={info.icon} sx={{ color: 'common.white', width: 24, height: 24 }} />
                    </Box>

                    <Stack spacing={0.5}>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {info.label}
                      </Typography>
                      <Typography variant="subtitle1">{info.value}</Typography>
                    </Stack>
                  </Stack>
                </m.div>
              ))}
            </Stack>
          </Stack>
        </Grid>

        {/* Form di contatto */}
        <Grid item xs={12} md={6} sx={{ px: { md: 5 } }}>
          <Box
            sx={{
              pt: 0,        // Rimuove padding top per allineare con colonna sinistra
              px: { xs: 2, md: 5 }, // Mantiene padding orizzontale
              pb: 5,        // Padding bottom mantenuto
              boxShadow: 'none', // Nessuna ombra
              bgcolor: 'transparent', // Nessuno sfondo
            }}
          >
            <ContactForm title="" labels={formLabels} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );

  if (withContainer) {
    return <Container>{content}</Container>;
  }
  
  return content;
}
