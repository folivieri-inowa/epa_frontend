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

export default function EventiVipView() {
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');
  const pathname = usePathname();
  
  // Dati per la sezione "Come Operiamo"
  const approccioItems = [
    {
      title: 'Analisi del rischio',
      description: 'Il nostro Team di professionisti valuterà ogni vulnerabilità della struttura e dell’organizzazione e ogni possibile minaccia alla riuscita e alla sicurezza dell’evento.'
    },
    {
      title: 'Pianificazione su misura',
      description: 'Progettiamo protocolli di sicurezza personalizzati, includendo controllo accessi, protezione VIP, gestione della folla e piani di emergenza.'
    },
    {
      title: 'I nostri esperti sul campo',
      description: 'Il nostro Team sul campo composto da un Security Operational Manager e dai nostri Security Oﬃcier supportarti costantemente dal nostro Security Board assicureanno protezione discreta globale e senza pari al tuo evento Vip'
    },
    {
      title: 'Monitoraggio avanzato',
      description: 'Utilizziamo tecnologie all\'avanguardia, come videosorveglianza AI, droni e comunicazioni criptate, per una sicurezza in tempo reale.'
    },
    {
      title: 'Coordinamento con organizzatori',
      description: 'Collaboriamo con il tuo team per garantire un\'esperienza fluida, mantenendo la sicurezza invisibile agli ospiti.'
    }
  ];

  // Dati per la sezione "Perché Scegliere"
  const vantaggiItems = [
    {
      title: "Esperienza senza pari",
      description: "Un team con oltre 30 anni di esperienza in antiterrorismo, close protection e intelligence, guidato da professionisti internazionali.",
      icon: "carbon:certificate"
    },
    {
      title: "Standard globali",
      description: "Operiamo in conformità con UNI ISO 31000, garantendo un approccio scientifico.",
      icon: "carbon:certificate-check"
    },
    {
      title: "Discrezione assoluta",
      description: "Protezione invisibile per VIP, celebrità e ospiti di alto profilo, preservando l'atmosfera dell'evento.",
      icon: "carbon:password"
    },
    {
      title: "Copertura completa",
      description: "Dalla sicurezza fisica alla cybersecurity, proteggiamo ogni aspetto del tuo evento.",
      icon: "carbon:earth"
    },
    {
      title: "Tecnologie all'avanguardia",
      description: "Videosorveglianza intelligente, droni, comunicazioni sicure e analisi predittiva delle minacce.",
      icon: "carbon:ai-status"
    },
    {
      title: "Servizio personalizzato",
      description: "Soluzioni su misura per gala, summit aziendali, matrimoni esclusivi e festival di lusso.",
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
      description: "Badge sicuri e biometria per aree riservate (es. zone VIP, backstage).",
      position: "left"
    },
    {
      title: "Comunicazioni criptate",
      description: "Canali sicuri per il coordinamento del team di sicurezza.",
      position: "right"
    },
    {
      title: "Droni e sensori",
      description: "Per la sicurezza perimetrale in location all'aperto o di grandi dimensioni.",
      position: "right"
    },
    {
      title: "Cybersecurity",
      description: "Protezione contro attacchi informatici e violazioni dei dati, conforme a ISO/IEC 27001.",
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
        backgroundImage: 'url(/assets/images/home/vip.png)', // Immagine di un evento VIP
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
            Sicurezza impeccabile <br />
            per eventi VIP
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
            Soluzioni di Security Management su misura per garantire <br />
            la sicurezza di eventi esclusivi.
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
          <Typography color="text.primary">Security Management per Eventi VIP</Typography>
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
            <Typography variant="h2" sx={{color: 'company.main'}}>Executive Protection Agency: I tuoi esperti per la sicurezza di eventi esclusivi</Typography>
          </m.div>
        </Stack>

        <Grid container spacing={10} alignItems="center">
          <Grid xs={12} md={6}>
            <m.div variants={varFade().inUp}>
              <Image src="/assets/images/image13.jpeg" alt="Chi siamo" sx={{ borderRadius: 2 }} />
            </m.div>
          </Grid>

          <Grid xs={12} md={6}>
            <m.div variants={varFade().inUp}>
              <Typography sx={{ mb: 3, fontSize: '1.325rem' }}>
                Con sede in Italia e operatività globale, Executive Protection Agency è leader nel Security Management per eventi VIP, 
                offrendo soluzioni personalizzate per proteggere ospiti di alto profilo, organizzatori e reputazione.
              </Typography>

              <Typography sx={{ mb: 3, fontSize: '1.325rem' }}>
                Il nostro team, composto da ex appartenenti a forze dell'ordine, esercito e sicurezza privata con 
                oltre 30 anni di esperienza internazionale, garantisce protezione discreta e impeccabile. 
                Operiamo secondo standard globali come UNI ISO 31000 (Gestione del rischio), 
                ISO/IEC 27001 (Sicurezza delle informazioni), assicurando eventi 
                sicuri e memorabili.
              </Typography>

              <Card sx={{ p: 3, bgcolor: 'company.lighter', mb: 5 }}>
                <Typography variant="h5" sx={{ mb: 2, color: 'company.main' }}>
                  Perché scegliere EPA?
                </Typography>
                <Typography>
                  Discrezione assoluta, sicurezza d'élite, eventi senza preoccupazioni.
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
            <Typography variant="h2" sx={{color: 'company.main'}}>Un approccio integrato per la sicurezza degli eventi VIP</Typography>
          </m.div>
          
          <m.div variants={varFade().inDown}>
            <Typography variant='h4' sx={{ mb: 3, maxWidth: 800, mx: 'auto' }}>
              Il nostro servizio di Security Management è progettato per integrarsi perfettamente con l'eleganza e l'esclusività del tuo evento.
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
            <Typography variant="h2" sx={{color: 'company.main'}}>Sicurezza d'eccellenza per eventi indimenticabili</Typography>
          </m.div>
        </Stack>

        <Grid container spacing={4}>
          {vantaggiItems.map((item, index) => (
            <Grid key={index} xs={12} md={4}>
              <m.div variants={varFade().inUp} style={{ height: '100%' }}>
                <Card 
                  sx={{ 
                    p: 4, 
                    height: '100%',
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
            La tua visione, la nostra protezione: rendi il tuo evento VIP indimenticabile con EPA.
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
            <Typography variant="h2" sx={{color: 'company.main'}}>Innovazione al servizio della sicurezza dei tuoi eventi</Typography>
          </m.div>
          
          <m.div variants={varFade().inDown}>
            <Typography variant='h4' sx={{ mb: 3, maxWidth: 800, mx: 'auto' }}>
              Utilizziamo tecnologie avanzate per garantire protezione e tranquillità durante il tuo evento.
            </Typography>
          </m.div>
        </Stack>

        <Grid container spacing={10}>
          <Grid xs={12} md={6}>
            <m.div variants={varFade().inUp}>
              <Image src="/assets/images/image14.jpeg" alt="Tecnologie" sx={{ borderRadius: 2, mb: 5 }} />
              
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

              <Image src="/assets/images/image15.jpeg" alt="Tecnologie" sx={{ borderRadius: 2, mt: 5 }} />
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
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/assets/images/image16.jpeg)`,
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
            <Typography variant="h2">Proteggi il tuo evento VIP: contattaci oggi</Typography>
          </m.div>
          
          <m.div variants={varFade().inDown}>
            <Typography sx={{ mb: 3, fontSize: '1.325rem' }}>
              Affidati a Executive Protection Agency per un evento sicuro, esclusivo e senza stress. Contattaci 
              per una consulenza gratuita e scopri come possiamo personalizzare la sicurezza per il tuo prossimo evento.
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
