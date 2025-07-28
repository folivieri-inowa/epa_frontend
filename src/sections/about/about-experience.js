import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import { useResponsive } from '../../hooks/use-responsive';

// ----------------------------------------------------------------------

export default function AboutExperience() {
  const theme = useTheme();
  
  const mdUp = useResponsive('up', 'md');
  
  const lightMode = theme.palette.mode === 'light';
  
  const shadow = `-40px 40px 80px ${alpha(
    lightMode ? theme.palette.grey[500] : theme.palette.common.black,
    0.24
  )}`;

  const experiences = [
    {
      title: 'Soggetti istituzionali',
      icon: 'carbon:building',
      description: 'Protezione fisica, proattiva e preventiva, sistemi biometrici e intelligence OSINT per contrastare minacce terroristiche.',
    },
    {
      title: 'Aziende multinazionali',
      icon: 'carbon:enterprise',
      description: 'Protezione di sedi aziendali e data center con soluzioni integrate di sicurezza fisica e cybersecurity (ISO/IEC 27001).',
    },
    {
      title: 'Hotel di lusso ed eventi VIP',
      icon: 'carbon:hotel',
      description: 'Garanzia di discrezione e sicurezza per ospiti di alto profilo e red carpet.',
    },
    {
      title: 'Dimore private',
      icon: 'carbon:home',
      description: 'Protezione perimetrale e tecnologie domotiche per ville esclusive.',
    },
    {
      title: 'Viaggi VIP',
      icon: 'carbon:location',
      description: 'Pianificazione di itinerari sicuri con il nostro servizio di Travel Risk Management.',
    },
  ];

  return (
    <Box>
      <Container
        component={MotionViewport}
      >
        <m.div variants={varFade().inUp}>
          <Typography variant="h2" sx={{ mb: 3, textAlign: 'center', color: 'primary.main' }}>
            Un patrimonio di competenza globale
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 3,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Con oltre 30 anni di esperienza in ogni continente, il Team di Executive Protection Agency ha protetto:
          </Typography>
        </m.div>

        <Box sx={{ my: 8 }}>
          <Grid container spacing={4}>
            {experiences.map((experience) => (
              <Grid key={experience.title} xs={12} md={6} lg={4}>
                <m.div variants={varFade().inUp} style={{ height: '100%' }}>
                  <Card
                    sx={{
                      bgcolor: 'background.default',
                      borderRadius: 2,
                      boxShadow: (theme) => theme.customShadows.z24,
                      height: '100%',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                      },
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <CardContent sx={{ 
                      p: 3,
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
                            width: 56,
                            height: 56,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 1,
                            bgcolor: 'primary.main',
                            mr: 2,
                          }}
                        >
                          <Iconify
                            icon={experience.icon}
                            sx={{
                              color: 'common.white',
                              width: 28,
                              height: 28,
                            }}
                          />
                        </Box>
                        <Typography variant="h5" sx={{ color: 'text.primary' }}>
                          {experience.title}
                        </Typography>
                      </Box>

                      <Typography variant="body1" sx={{ color: 'text.secondary', flexGrow: 1 }}>
                        {experience.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </m.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Grid container spacing={4} alignItems="center" sx={{ mt: 6 }}>
          {mdUp && (
            <Grid xs={12} md={5}>
              <m.div variants={varFade().inLeft}>
                <Image
                  alt="security expertise"
                  src="/assets/images/about/image4.jpeg"
                  ratio="4/3"
                  sx={{ borderRadius: 2, boxShadow: shadow }}
                />
              </m.div>
            </Grid>
          )}
          
          <Grid xs={12} md={7}>
            <Stack spacing={3}>
              <m.div variants={varFade().inRight}>
                <Typography variant="h4" sx={{ color: 'primary.main' }}>
                  Una missione: la tua sicurezza
                </Typography>
              </m.div>

              <m.div variants={varFade().inRight}>
                <Typography sx={{ color: 'text.secondary' }}>
                  Abbiamo gestito scenari complessi, mantenendo sempre con un approccio conforme agli standard internazionali. I nostri casi studio, pur mantenendo l'anonimato dei clienti, dimostrano il nostro impegno: dalla protezione di un sito sensibile alla sicurezza di un evento internazionale di alto profilo.
                </Typography>
              </m.div>

              <Box sx={{ mt: 4 }}>
                <Grid container spacing={2}>
                  <Grid md={6}>
                    <m.div variants={varFade().inRight}>
                      <Paper
                        sx={{
                          py: 2.5,
                          textAlign: 'center',
                          bgcolor: 'background.neutral',
                          borderRadius: 2,
                        }}
                      >
                        <Typography variant="h3" sx={{ color: 'primary.main' }}>30+</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          Anni di esperienza
                        </Typography>
                      </Paper>
                    </m.div>
                  </Grid>

                  <Grid md={6}>
                    <m.div variants={varFade().inRight}>
                      <Paper
                        sx={{
                          py: 2.5,
                          textAlign: 'center',
                          bgcolor: 'background.neutral',
                          borderRadius: 2,
                        }}
                      >
                        <Typography variant="h3" sx={{ color: 'primary.main' }}>5+</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          Certificazioni ISO
                        </Typography>
                      </Paper>
                    </m.div>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
