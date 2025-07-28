'use client';

import useCompanyColors from 'src/hooks/use-company-colors';

import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, styled, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';
import { useResponsive } from 'src/hooks/use-responsive';

import MainLayout from 'src/layouts/main';
import { varFade, MotionViewport } from 'src/components/animate';
import Iconify from 'src/components/iconify';
import Image from 'src/components/image';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { usePathname } from 'next/navigation';
import { RouterLink } from 'src/routes/components';
import Divider from '@mui/material/Divider';

// ----------------------------------------------------------------------

export default function CorporateInfrastruttureSitiView() {
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');
  const pathname = usePathname();
  
  // Dati per la sezione "Come Operiamo"
  const approccioItems = [
    {
      title: 'Analisi del rischio',
      description: 'Valutiamo vulnerabilità strutturali, minacce fisiche e digitali (es. terrorismo, cyberattacchi, spionaggio industriale), seguendo UNI ISO 31000.'
    },
    {
      title: 'Pianificazione su misura',
      description: 'Progettiamo protocolli di sicurezza personalizzati, includendo controllo accessi, protezione perimetrale, gestione delle emergenze e continuità operativa.'
    },
    {
      title: 'Operazioni sul campo',
      description: 'I nostri esperti, tra cui International Executive Protectors, specialisti in cybersecurity e intelligence, assicurano protezione continua e discreta.'
    },
    {
      title: 'Monitoraggio avanzato',
      description: 'Utilizziamo tecnologie di punta, come videosorveglianza AI, droni, sensori perimetrali e sistemi di rilevamento minacce.'
    },
    {
      title: 'Formazione e resilienza',
      description: 'Offriamo corsi per il personale su gestione delle crisi, sicurezza informatica e protocolli di emergenza, conformi agli standard internazionali.'
    }
  ];

  // Dati per la sezione "Perché Scegliere"
  const vantaggiItems = [
    {
      title: "Esperienza d'élite",
      description: "Un team con oltre 30 anni di esperienza in antiterrorismo, close protection e intelligence, guidato da professionisti di primo livello.",
      icon: "carbon:certificate"
    },
    {
      title: "Standard globali",
      description: "Operiamo in conformità con UNI ISO 31000, ISO/IEC 27001, ISO 28000, ISO 22301, garantendo un approccio scientifico.",
      icon: "carbon:certificate-check"
    },
    {
      title: "Protezione integrata",
      description: "Soluzioni che combinano sicurezza fisica, cybersecurity e gestione della continuità operativa.",
      icon: "carbon:security"
    },
    {
      title: "Tecnologie all'avanguardia",
      description: "Videosorveglianza intelligente, droni, sistemi di rilevamento minacce e comunicazioni criptate.",
      icon: "carbon:ai-status"
    },
    {
      title: "Discrezione assoluta",
      description: "Protezione invisibile per personale, dati e infrastrutture, preservando la tua operatività.",
      icon: "carbon:password"
    },
    {
      title: "Servizio personalizzato",
      description: "Soluzioni su misura per sedi aziendali, data center, impianti energetici, porti e siti governativi.",
      icon: "carbon:user-admin"
    }
  ];

  // Dati per la sezione "Tecnologie"
  const tecnologieItems = [
    {
      title: "Videosorveglianza intelligente",
      description: "Telecamere integrate con AI per il rilevamento delle anomalie.",
      position: "left"
    },
    {
      title: "Sistemi di controllo accessi",
      description: "Biometria, badge sicuri e autenticazione multi-fattore per aree sensibili.",
      position: "left"
    },
    {
      title: "Sensori perimetrali e droni",
      description: "Rilevamento di intrusioni in tempo reale e sorveglianza aerea per siti estesi.",
      position: "right"
    },
    {
      title: "Cybersecurity",
      description: "Protezione contro attacchi informatici, ransomware e violazioni dei dati, conforme a ISO/IEC 27001.",
      position: "right"
    },
    {
      title: "Sistemi di continuità operativa",
      description: "Soluzioni per garantire resilienza in caso di crisi, conformi a ISO 22301.",
      position: "right"
    }
  ];

  // Hero section
  const renderHero = (
    <Box
      sx={{
        height: { xs: '65vh', md: '60vh' }, // Ridotto da mobile/desktop
        minHeight: { xs: 320, md: 480 },
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'url(/assets/images/home/corporate.png)', // Immagine di una sala di controllo high-tech
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
            pb: { xs: 8, md: 4 }, // Aggiunto padding bottom per mantenere il bottone nell'immagine
          }}
        >
          <Typography 
            variant="h1" 
            component="h1" 
            sx={{ 
              color: 'common.white', 
              textTransform: 'uppercase', 
              mb: 3,
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              lineHeight: { xs: 1.2, md: 1.1 }
            }}
          >
            Sicurezza Integrata per <br />
            Corporate e Siti Sensibili
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: 'common.white',
              fontWeight: (theme) => theme.typography.fontWeightMedium,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              lineHeight: { xs: 1.4, md: 1.3 },
              maxWidth: { xs: '100%', md: '80%' }
            }}
          >
            Soluzioni di Security Management su misura per aziende, infrastrutture critiche <br /> 
            e siti ad alta sicurezza, conformi agli standard internazionali.
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
                '&:hover': {
                  bgcolor: 'company.dark',
                },
              }}
              startIcon={<Iconify icon="carbon:send" />}
            >
              Richiedi una consulenza
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
            Home
          </Link>
           <Typography color="text.secondary">
            Servizi
          </Typography>
          <Typography color="text.primary">Corporate, Infrastrutture e Siti Sensibili</Typography>
        </Breadcrumbs>
      </Container>
    </Box>
  );

  // Chi Siamo
  const renderChiSiamo = (
    <Box
      id="chi-siamo"
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Container component={MotionViewport}>
        <Stack spacing={3} sx={{ textAlign: 'center', mb: 8 }}>
          <m.div variants={varFade().inDown}>
            <Typography variant="h2" sx={{color: 'company.main'}}>Executive Protection Agency: I Tuoi Partner per la Sicurezza Strategica</Typography>
          </m.div>
        </Stack>

        <Grid container spacing={10} alignItems="center">
          <Grid xs={12} md={6}>
            <m.div variants={varFade().inUp}>
              <Image src="/assets/images/image27.jpeg" alt="Chi siamo" sx={{ borderRadius: 2 }} />
            </m.div>
          </Grid>

          <Grid xs={12} md={6}>
            <m.div variants={varFade().inUp}>
              <Typography sx={{ mb: 3, fontSize: '1.325rem' }}>
                Con sede in Italia e operatività globale, Executive Protection Agency è leader nel Security Management per corporate, 
                infrastrutture critiche e siti sensibili, offrendo soluzioni personalizzate per proteggere operazioni, dati e personale.
              </Typography>

              <Typography sx={{ mb: 3, fontSize: '1.325rem' }}>
                Il nostro team, composto da ex appartenenti a forze dell'ordine, esercito e sicurezza privata con 
                oltre 30 anni di esperienza internazionale, garantisce protezione integrata e discreta. 
                Operiamo secondo standard globali come UNI ISO 31000 (Gestione del rischio), ISO/IEC 27001 (Sicurezza delle informazioni), 
                ISO 28000 (Sicurezza della supply chain), ISO 22301 (Continuità operativa) e UNI 10459 (Professionista della sicurezza), 
                assicurando resilienza e tranquillità.
              </Typography>

              <Card sx={{ p: 3, bgcolor: 'company.lighter', mb: 5 }}>
                <Typography variant="h5" sx={{ mb: 2, color: 'company.main' }}>
                  Perché scegliere EPA?
                </Typography>
                <Typography>
                  Sicurezza strategica, tecnologie all'avanguardia, protezione senza compromessi.
                </Typography>
              </Card>
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  // Come Operiamo
  const renderComeOperiamo = (
    <Box
      id="come-operiamo"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: theme.palette.background.neutral,
      }}
    >
      <Container component={MotionViewport}>
        <Stack spacing={3} sx={{ textAlign: 'center', mb: 8 }}>
          <m.div variants={varFade().inDown}>
            <Typography variant="h2" sx={{ color: 'company.main' }}>Un Approccio Integrato per la Sicurezza di Corporate e Siti Sensibili</Typography>
          </m.div>
          
          <m.div variants={varFade().inDown}>
            <Typography variant='h4' sx={{ mb: 3, maxWidth: 800, mx: 'auto' }}>
              Il nostro servizio di Security Management è progettato per proteggere le operazioni critiche e i siti strategici.
            </Typography>
          </m.div>
        </Stack>

        <Grid container spacing={10} sx={{ pt: 3 }}>
          {approccioItems.map((item, index) => (
            <Grid xs={12} md={6} key={index}>
              <m.div variants={varFade().inUp}>
                <Box sx={{ mb: 5 }}>
                  <Typography variant="h4" paragraph sx={{ color: 'company.main' }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: '1.325rem' }}>
                    {item.description}
                  </Typography>
                </Box>
              </m.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );

  // Perché Scegliere
  const renderPercheScegliere = (
    <Box
      id="perche-scegliere"
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Container component={MotionViewport}>
        <Stack spacing={3} sx={{ textAlign: 'center', mb: 8 }}>
          <m.div variants={varFade().inDown}>
            <Typography variant="h2" sx={{ color: 'company.main' }}>Sicurezza d'eccellenza per aziende e infrastrutture</Typography>
          </m.div>
        </Stack>

        <Grid container spacing={4}>
          {vantaggiItems.map((item, index) => (
            <Grid key={index} xs={12} md={4} sx={{ display: 'flex' }}>
              <m.div variants={varFade().inUp} style={{ height: '100%', width: '100%', display: 'flex' }}>
                <Card 
                  sx={{ 
                    p: 4, 
                    height: '100%',
                    width: '100%',
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Iconify icon={item.icon} width={36} sx={{ color: 'company.main', mr: 2 }} />
                    <Typography variant="h5">{item.title}</Typography>
                  </Box>
                  <Typography sx={{ flexGrow: 1, fontSize: '1.325rem' }}>{item.description}</Typography>
                </Card>
              </m.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 8, p: 3, bgcolor: 'company.lighter', borderRadius: 2 }}>
          <Typography variant="h4">
            Proteggi le tue attività con EPA: resilienza, innovazione, sicurezza.
          </Typography>
        </Box>
      </Container>
    </Box>
  );

  // Tecnologie
  const renderTecnologie = (
    <Box
      id="tecnologie"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: theme.palette.background.neutral,
      }}
    >
      <Container component={MotionViewport}>
        <Stack spacing={3} sx={{ textAlign: 'center', mb: 8 }}>
          <m.div variants={varFade().inDown}>
            <Typography variant="h2" sx={{ color: 'company.main' }}>Innovazione per una Sicurezza senza Pari</Typography>
          </m.div>
          
          <m.div variants={varFade().inDown}>
            <Typography variant="h4" sx={{ mb: 3, maxWidth: 800, mx: 'auto' }}>
              Utilizziamo tecnologie avanzate per proteggere la tua organizzazione.
            </Typography>
          </m.div>
        </Stack>

        <Grid container spacing={10}>
          <Grid xs={12} md={6}>
            <m.div variants={varFade().inUp}>
              <Image src="/assets/images/image17.jpeg" alt="Tecnologie" sx={{ borderRadius: 2, mb: 5 }} />
              
              {tecnologieItems
                .filter(item => item.position === "left")
                .map((item, index) => (
                  <Box key={index} sx={{ mb: 3, mt: { md: 7 } }}>         
                    <Typography variant="h4" paragraph sx={{ color: 'company.main' }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: '1.325rem' }}>
                      {item.description}
                    </Typography>
                  </Box>
                ))
              }
            </m.div>
          </Grid>

          <Grid xs={12} md={6} sx={{ mt: { md: 10 } }}>
            <m.div variants={varFade().inUp}>
              {tecnologieItems
                .filter(item => item.position === "right")
                .map((item, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Typography variant="h4" paragraph sx={{ color: 'company.main' }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: '1.325rem' }}>
                      {item.description}
                    </Typography>
                  </Box>
                ))
              }

              <Image src="/assets/images/image18.jpeg" alt="Tecnologie" sx={{ borderRadius: 2, mt: 5 }} />
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  // Call To Action
  const renderCallToAction = (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/assets/images/image19.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'common.white',
      }}
    >
      <Container component={MotionViewport}>
        <Stack
          spacing={3}
          sx={{
            textAlign: 'center',
            maxWidth: 680,
            mx: 'auto',
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography variant="h2">Proteggi le Tue Attività: Contattaci Oggi</Typography>
          </m.div>
          
          <m.div variants={varFade().inDown}>
            <Typography sx={{ mb: 3, fontSize: '1.325rem' }}>
              Affidati a Executive Protection Agency per garantire la sicurezza e la resilienza della tua organizzazione. 
              Contattaci per una consulenza gratuita e scopri come possiamo personalizzare la protezione per le tue esigenze.
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Button
              size="large"
              variant="contained"
              color="primary"
              component={RouterLink}
              href={paths.contact}
              sx={{
                mt: 3,
                bgcolor: 'company.main',
                '&:hover': {
                  bgcolor: 'company.dark',
                },
              }}
              startIcon={<Iconify icon="carbon:send" />}
            >
              Richiedi una consulenza
            </Button>
          </m.div>
        </Stack>
      </Container>
    </Box>
  );
  
  return (
    <MainLayout>
      {renderHero}
      {renderBreadcrumbs}  
      {renderComeOperiamo}
      {renderPercheScegliere}
      {renderTecnologie}
      {renderCallToAction}
    </MainLayout>
  );
}
