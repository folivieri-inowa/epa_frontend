import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { alpha, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import { useResponsive } from '../../hooks/use-responsive';
import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function AboutVisionValues() {
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');
  
  const lightMode = theme.palette.mode === 'light';
  
  const shadow = `-40px 40px 80px ${alpha(
    lightMode ? theme.palette.grey[500] : theme.palette.common.black,
    0.24
  )}`;

  const values = [
    {
      title: 'Discrezione',
      icon: 'carbon:password',
      description: 'Operiamo nell\'ombra per garantire la tua tranquillità, proteggendo la tua privacy e le tue operazioni.',
    },
    {
      title: 'Eccellenza',
      icon: 'carbon:star',
      description: 'Combiniamo esperienza, formazione continua e tecnologie all\'avanguardia per offrire soluzioni di sicurezza senza pari.',
    },
    {
      title: 'Innovazione',
      icon: 'carbon:idea',
      description: 'Utiliziamo tecnologie come videosorveglianza AI, droni, piattaforme OSINT e sistemi biometrici per anticipare le minacce.',
    },
    {
      title: 'Personalizzazione',
      icon: 'carbon:user-settings',
      description: 'Ogni cliente è unico, e ogni soluzione è progettata su misura per le tue esigenze specifiche.',
    },
    {
      title: 'Resilienza',
      icon: 'carbon:security', // Modificata l'icona per assicurarsi che sia visibile
      description: 'Operiamo secondo standard come ISO 22301 per garantire che le tue attività continuino anche nelle situazioni più critiche.',
    },
  ];

  return (
    <Container
      component={MotionViewport}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: 'center',
          mb: { xs: 5, md: 10 },
        }}
      >
        <m.div variants={varFade().inUp}>
          <Typography variant="h2" sx={{ color: 'primary.main', mb: 2 }}>
            La nostra promessa
          </Typography>
          <Typography variant="h2" sx={{ color: 'primary.main', mb: 2 }}>
            Sicurezza, discrezione, eccellenza
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h5" sx={{ mb: 3, maxWidth: 800, mx: 'auto' }}>
              In Executive Protection Agency, ogni azione è guidata da valori fondamentali che garantiscono il massimo livello di servizio per i nostri clienti attraverso un concept di sicurezza Proattiva,
Preventiva, Predittiva e Multi-difensiva.
          </Typography>
        </m.div>
      </Stack>

      <Box
        gap={{ xs: 3, lg: 10 }}
        display="flex"
        flexDirection="column"
        sx={{ width: '100%' }}
      >
        {/* Immagine che occupa l'intera larghezza */}
        <Box sx={{ width: '100%', maxWidth: '75%', mx: 'auto' }}>
          <m.div variants={varFade().inUp}>
            <Image
              alt="security operations center"
              src="/assets/images/about/image3.jpeg"
              ratio="16/9"  // Modificato il ratio per un'immagine leggermente più piccola
              sx={{ borderRadius: 2, boxShadow: shadow, width: '100%' }}
            />
          </m.div>
        </Box>

        {/* Card sotto l'immagine */}
       {/*  <Box sx={{ width: '100%' }}>
          <Box sx={{ my: { xs: 5, md: 8 } }}>
            <Grid container spacing={3}>
              {values.map((value, index) => (
                <Grid key={value.title} xs={12} md={6} lg={4}>
                  <m.div variants={varFade().inUp} style={{ height: '100%' }}>
                    <Card
                      sx={{
                        backgroundColor: (theme) => alpha(theme.palette.company.main, 0.05), // Leggero sfondo aziendale trasparente
                        borderRadius: 2,
                        boxShadow: (theme) => theme.customShadows.z24,
                        p: 2,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid',
                        borderColor: alpha('rgb(224, 197, 77)', 0.2), // Bordo leggero per definire meglio i contorni
                      }}
                    >
                      <CardContent sx={{ 
                        flexGrow: 1, 
                        display: 'flex', 
                        flexDirection: 'column',
                        justifyContent: 'flex-start'
                      }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 2,
                          }}
                        >
                          <Box
                            sx={{
                              width: 48,
                              height: 48,
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderRadius: 1,
                              bgcolor: 'rgb(224, 197, 77)', // Colore oro pieno per l'icona
                              mr: 2,
                            }}
                          >
                            <Iconify
                              icon={value.icon}
                              sx={{
                                color: 'common.white',
                                width: 24,
                                height: 24,
                              }}
                            />
                          </Box>
                          <Typography variant="h6" sx={{ color: 'rgb(224, 197, 77)' }}>
                            {value.title}
                          </Typography>
                        </Box>

                        <Typography variant="body2" sx={{ color: 'text.primary', flexGrow: 1, fontSize: '1rem' }}>
                          {value.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </m.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box> */}
      </Box>
    </Container>
  );
}
