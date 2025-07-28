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

export default function RiskTravelManagementView() {
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');
  const pathname = usePathname();
  
  // Dati per la sezione "Come Operiamo"
  const approccioItems = [
    {
      title: 'Analisi del rischio',
      description: 'Valutiamo ogni aspetto del viaggio (destinazione, itinerario, profilo del cliente) utilizzando i più alti standard internazionali.'
    },
    {
      title: 'Pianificazione su misura',
      description: 'Progettiamo piani di sicurezza dettagliati, includendo rotte sicure, protocolli di emergenza e gestione delle minacce specifiche (es. terrorismo, criminalità, instabilità politica, cybersecurity, spionaggio).'
    },
    {
      title: 'Operazioni sul campo',
      description: 'Il nostro Team sul Campo composto dal Security Operational Manager (SOM) e dai nostri Close Protection Oﬃcier, Security Oﬃcier e Security driver costantemente supportati daI nostro Security Board composto da Security Manager con esperienza internazionale e Risk Analyst assicurano protezione discreta e continua senza eguali'
    },
    {
      title: 'Monitoraggio in tempo reale',
      description: 'Utilizziamo tecnologie avanzate per il tracciamento, la comunicazione sicura e l\'analisi delle minacce durante il viaggio.'
    }
  ];

  // Dati per la sezione "Perché Scegliere"
  const vantaggiItems = [
    {
      title: "Esperienza senza pari",
      description: "Un team di élite con oltre 30 anni di esperienza in antiterrorismo, close protection e intelligence, guidato da professionisti di 1° classe.",
      icon: "carbon:certificate"
    },
    {
      title: "Standard globali",
      description: "Operiamo secondo i più alti standard internazionali come UNI ISO 31030, e 31000 garantendo un approccio scientifico, una sicurezza massima e costantemente aggiornati con le vigenti leggi italiane.",
      icon: "carbon:certificate-check"
    },
    {
      title: "Discrezione assoluta",
      description: "Protezione invisibile ma sempre presente e una filosofia proattiva, ideali per VIP, dirigenti e famiglie di alto profilo.",
      icon: "carbon:password"
    },
    {
      title: "Copertura globale",
      description: "Operiamo in ogni continente, con esperienza in destinazioni ad alto rischio e contesti di lusso.",
      icon: "carbon:earth"
    },
    {
      title: "Tecnologie all'avanguardia",
      description: "Sistemi di monitoraggio in tempo reale, comunicazioni criptate e analisi predittiva delle minacce.",
      icon: "carbon:ai-status"
    },
    {
      title: "Servizio personalizzato",
      description: "Ogni piano è tailor-made, con attenzione ai dettagli e alle esigenze del cliente.",
      icon: "carbon:user-admin"
    }
  ];

  // Dati per la sezione "Tecnologie"
  const tecnologieItems = [
    {
      title: "Sistemi di monitoraggio GPS",
      description: "Tracciamento in tempo reale di veicoli e persone per una risposta immediata.",
      position: "left"
    },
    {
      title: "Comunicazioni criptate",
      description: "Canali sicuri per coordinare il team e comunicare con i clienti.",
      position: "left"
    },
    {
      title: "Analisi predittiva delle minacce",
      description: "Software di intelligence per identificare rischi in anticipo.",
      position: "right"
    },
    {
      title: "Droni e videosorveglianza",
      description: "Per la sicurezza perimetrale in destinazioni critiche.",
      position: "right"
    },
    {
      title: "Sistemi di cybersecurity",
      description: "Protezione dei dati personali e delle informazioni di viaggio, conformi a ISO/IEC 27001.",
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
        backgroundImage: 'url(/assets/images/home/travel.png)',
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
            Viaggi sicuri, <br />
            ovunque nel mondo
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
            Protezione personalizzata per viaggi d'affari e di piacere, <br />
            con competenza globale e standard internazionali.
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
          <Typography color="text.primary">Travel Risk Management</Typography>
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
            <Typography variant="h2" color='rgb(246,142,59)'>Executive Protection Agency: I tuoi esperti in sicurezza globale</Typography>
          </m.div>
        </Stack>

        <Grid container spacing={10} alignItems="center">
          <Grid xs={12} md={6}>
            <m.div variants={varFade().inUp}>
              <Image src="/assets/images/image26.jpeg" alt="Chi siamo" sx={{ borderRadius: 2 }} />
            </m.div>
          </Grid>

          <Grid xs={12} md={6}>
            <m.div variants={varFade().inUp}>
              <Typography sx={{ mb: 3, fontSize: '1.325rem' }}>
                Fondata in Italia con una visione globale, Executive Protection Agency è leader nel Security/Travel Risk Management, 
                offrendo soluzioni su misura per clienti di alto profilo.
              </Typography>

              <Typography sx={{ mb: 3, fontSize: '1.325rem' }}>
                Il nostro team, composto da ex appartenenti a forze dell'ordine, esercito e sicurezza privata con 
                oltre 30 anni di esperienza internazionale, garantisce protezione discreta e impeccabile in ogni contesto. 
                Operiamo secondo i più alti standard globali, tra cui UNI ISO 31030 (Gestione del rischio nei viaggi), 
                UNI ISO 31000 (Gestione del rischio) e ISO/IEC 27001 (Sicurezza delle informazioni), per assicurare viaggi 
                sicuri e senza preoccupazioni.
              </Typography>

              <Card sx={{ p: 3, bgcolor: 'company.lighter', mb: 5 }}>
                <Typography variant="h5" sx={{ mb: 2, color: 'company.main' }}>
                  Perché scegliere EPA?
                </Typography>
                <Typography>
                  Professionalità, discrezione e un approccio personalizzato per ogni cliente.
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
            <Typography variant="h2" sx={{ color: 'company.main' }}>Un approccio integrato alla sicurezza nei viaggi</Typography>
          </m.div>
          
          <m.div variants={varFade().inDown}>
            <Typography variant='h4' sx={{ mb: 3, maxWidth: 800, mx: 'auto' }}>
              Il nostro servizio di Travel Risk Management si basa su un processo strutturato e personalizzato.
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
            <Typography variant="h2" sx={{ color: 'company.main' }}>Sicurezza senza compromessi per viaggi di lusso</Typography>
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
            La tua tranquillità è la nostra missione: viaggia senza pensieri, ovunque tu sia.
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
            <Typography variant="h2" sx={{ color: 'company.main' }}>Innovazione al servizio della tua sicurezza</Typography>
          </m.div>
          
          <m.div variants={varFade().inDown}>
            <Typography variant='h4' sx={{ mb: 3, maxWidth: 800, mx: 'auto' }}>
              Utilizziamo le tecnologie più avanzate per garantire protezione e tranquillità.
            </Typography>
          </m.div>
        </Stack>

        <Grid container spacing={10}>
          <Grid xs={12} md={6}>
            <m.div variants={varFade().inUp}>
              <Image src="/assets/images/image10.jpeg" alt="Tecnologie" sx={{ borderRadius: 2, mb: 5 }} />
              
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

              <Image src="/assets/images/image11.jpeg" alt="Tecnologie" sx={{ borderRadius: 2, mt: 5 }} />
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
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/assets/images/image12.jpeg)`,
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
            <Typography variant="h2">Viaggia con serenità: contattaci oggi</Typography>
          </m.div>
          
          <m.div variants={varFade().inDown}>
            <Typography sx={{ mb: 3, fontSize: '1.325rem' }}>
              Affidati a Executive Protection Agency per un'esperienza di viaggio sicura e senza stress. Contattaci 
              per una consulenza gratuita e scopri come possiamo proteggere te, la tua famiglia o il tuo team.
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
