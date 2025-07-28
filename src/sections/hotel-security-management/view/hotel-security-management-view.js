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

export default function HotelSecurityManagementView() {
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');
  const pathname = usePathname();
  
  // Dati per la sezione "Come Operiamo"
  const approccioItems = [
    {
      title: 'Analisi del rischio',
      description: 'Attraverso un approfondito Risk Assesment valutiamo tutte le vulnerabilità fisiche, strutturali e tecnologiche del tuo Hotel. I rischi per gli ospiti, minacce esterne ed interne atte a rovinare la reputazione del tuo Hotel e la sicurezza di clienti e personale in linea con i più importanti standard internazionali come UNI ISO 31000, UNI ISO 31030 e Hospitality Security Guidelines.'
    },
    {
      title: 'Gestione del Rischio',
      description: 'Progettiamo protocolli di sicurezza e asset personalizzati, che includono la gestione della sicurezza attiva e passiva, controllo accessi e video sorveglianza IA, protezione VIP ed eventi, gestione delle emergenze, formazione del personale.'
    },
    {
      title: 'I nostri esperti sul campo',
      description: 'Mettiamo a tua disposizione I nostri esperti, tra cui International Executive Protectors, analisti e specialisti in cybersecurity che assicurano protezione discreta e continua e oﬀriamo un servizio di formazione specifica per il tuo personale.'
    },
    {
      title: 'Monitoraggio avanzato',
      description: 'Utilizziamo tecnologie di ultima generazione, come videosorveglianza intelligente, sistemi di rilevamento minacce e comunicazioni criptate.'
    },
    {
      title: 'Formazione del personale',
      description: 'Offriamo corsi per il tuo staff su gestione delle crisi, sicurezza VIP e protocolli di emergenza, conformi a ISO 28000 e ISO 31000.'
    },
    {
      title: 'Supporto continuo',
      description: 'Offriamo consulenza e manutenzione dei sistemi per garantire sicurezza a lungo termine.'
    }
  ];

  // Dati per la sezione "Perché Scegliere"
  const vantaggiItems = [
    {
      title: "Esperienza d'élite",
      description: "Un Security boad composto da un Team di Security Manager e Risk Analyst che lavora per te. Un Security Operational Manager e i nostri Security Oﬃcier si occuperanno della sicurezza globale del tuo Hotel, dei tuoi clienti e dipendenti e della vostra reputazione.",
      icon: "carbon:certificate"
    },
    {
      title: "Standard globali",
      description: "Operiamo in conformità con UNI ISO 31000, ISO/IEC 27001, ISO 28000, UNI ISO 31030  e Hospitality Security Guidelines, garantendo un approccio scientifico.",
      icon: "carbon:certificate-check"
    },
    {
      title: "Discrezione assoluta",
      description: "Protezione invisibile per ospiti VIP, preservando l'atmosfera di lusso del tuo hotel.",
      icon: "carbon:password"
    },
    {
      title: "Copertura completa",
      description: "Dalla sicurezza fisica alla cybersecurity, proteggiamo ogni aspetto della tua struttura.",
      icon: "carbon:security"
    },
    {
      title: "Tecnologie all'avanguardia",
      description: "Sistemi di videosorveglianza AI, rilevamento minacce e comunicazioni sicure.",
      icon: "carbon:ai-status"
    },
    {
      title: "Servizio personalizzato",
      description: "Soluzioni su misura per catene di lusso, boutique hotel e resort esclusivi.",
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
      description: "Badge sicuri e biometria per aree riservate (es. suite VIP, sale conferenze).",
      position: "left"
    },
    {
      title: "Comunicazioni criptate",
      description: "Canali sicuri per il coordinamento del team di sicurezza.",
      position: "right"
    },
    {
      title: "Cybersecurity",
      description: "Protezione contro attacchi informatici e violazioni dei dati, conforme a ISO/IEC 27001.",
      position: "right"
    },
    {
      title: "Droni e sensori",
      description: "Per la sicurezza perimetrale di resort e strutture in aree isolate.",
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
        backgroundImage: 'url(/assets/images/home/hotel.png)',
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
            Protocolli di sicurezza <br />
            per hotel di lusso
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
            Soluzioni di Security Management su misura per garantire protezione e serenità <br />
            agli ospiti tutelando la reputazione della tua struttura.
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
          <Typography color="text.primary">Ville e Residenze di Lusso</Typography>
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
            <Typography variant="h2" sx={{color: 'company.main'}}>Executive Protection Agency: I tuoi partner per la sicurezza di lusso</Typography>
          </m.div>
        </Stack>

        <Grid container spacing={10} alignItems="center">
          <Grid xs={12} md={6}>
            <m.div variants={varFade().inUp}>
              <Image src="/assets/images/image5.jpeg" alt="Chi siamo" sx={{ borderRadius: 2 }} />
            </m.div>
          </Grid>

          <Grid xs={12} md={6}>
            <m.div variants={varFade().inUp}>
              <Typography sx={{ mb: 3, fontSize: '1.325rem' }}>
                Con sede in Italia e operatività globale, Executive Protection Agency è leader nel Security Management 
                per hotel di lusso, offrendo soluzioni personalizzate per proteggere ospiti, strutture e reputazione.
              </Typography>

              <Typography sx={{ mb: 3, fontSize: '1.325rem' }}>
                Il nostro team, composto da ex appartenenti a forze dell'ordine, esercito e sicurezza privata con 
                oltre 30 anni di esperienza internazionale, garantisce protezione discreta e impeccabile. Operiamo 
                secondo standard globali come UNI ISO 31000 (Gestione del rischio), ISO/IEC 27001 (Sicurezza delle 
                informazioni) e Hospitality Security Guidelines, assicurando un'esperienza sicura per i tuoi ospiti VIP 
                e la protezione della reputazione del tuo hotel.
              </Typography>

              <Card sx={{ p: 3, bgcolor: 'company.lighter', mb: 5 }}>
                <Typography variant="h5" sx={{ mb: 2, color: 'company.main' }}>
                  Perché scegliere EPA?
                </Typography>
                <Typography>
                  Protezione invisibile, servizio eccellente, tranquillità garantita.
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
            <Typography variant="h2" sx={{color: 'company.main'}}>Un approccio integrato per la sicurezza degli hotel di lusso</Typography>
          </m.div>
          
          <m.div variants={varFade().inDown}>
            <Typography variant="h4" sx={{ mb: 3, maxWidth: 800, mx: 'auto' }}>
              Il nostro servizio di Security Management è progettato per integrarsi perfettamente con l'eleganza 
              e l'ospitalità del tuo hotel.
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
            <Typography variant="h2" sx={{ color: 'company.main' }}>Sicurezza di élite per un'ospitalità senza compromessi</Typography>
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
            La sicurezza dei tuoi ospiti è la nostra priorità: eleva l'esperienza del tuo hotel con EPA.
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
            <Typography variant="h2" sx={{ color: 'company.main' }}>Innovazione per una sicurezza senza pari</Typography>
          </m.div>
          
          <m.div variants={varFade().inDown}>
            <Typography variant="h4" sx={{ mb: 3, maxWidth: 800, mx: 'auto' }}>
              Utilizziamo tecnologie avanzate per proteggere il tuo hotel e i suoi ospiti.
            </Typography>
          </m.div>
        </Stack>

        <Grid container spacing={10}>
          <Grid xs={12} md={6} >
            <m.div variants={varFade().inUp}>
              <Image src="/assets/images/image6.jpeg" alt="Tecnologie" sx={{ borderRadius: 2, mb: 5 }} />
              
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

              <Image src="/assets/images/image7.jpeg" alt="Tecnologie" sx={{ borderRadius: 2, mt: 5 }} />
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
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/assets/images/image8.jpeg)`,
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
            <Typography variant="h2">Eleva la sicurezza del tuo hotel: contattaci oggi</Typography>
          </m.div>
          
          <m.div variants={varFade().inDown}>
            <Typography sx={{ mb: 3, fontSize: '1.325rem' }}>
              Affidati a Executive Protection Agency per proteggere i tuoi ospiti e la reputazione del tuo hotel. 
              Contattaci per una consulenza gratuita e scopri come possiamo personalizzare la sicurezza per la tua struttura.
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