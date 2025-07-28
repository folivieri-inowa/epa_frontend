'use client';

import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, styled, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';

import useCompanyColors from 'src/hooks/use-company-colors';

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

export default function SecurityManagementView() {
  const theme = useTheme();
  const companyColors = useCompanyColors();
  const mdUp = useResponsive('up', 'md');
  const pathname = usePathname();
  
  // Dati per la sezione "Come Operiamo"
  const approccioItems = [
    {
      title: 'Analisi del rischio',
      description: 'Valutiamo le vulnerabilità strutturali, della tua dimora, rischi ambientali, minacce esterne e lo stato attuale dei tuoi sistemi difensivi attivi e passivi'
    },
    {
      title: 'Pianificazione su misura',
      description: 'Gestione del Rischio personalizzato: progettiamo protocolli di sicurezza personalizzati, includendo le più moderne tecnologie di sicurezza e protezione e gestione delle emergenze, formazione tecnica alla famiglia, Creazioneprotocolli scritti e asset personalizzati'
    },
    {
      title: 'Operazioni sul campo',
      description: 'I nostri esperti, I nostri esperti, tra cui International Executive Protectors e specialisti in cybersecurity, ti assisteranno durante l’intera fase di progettazione del tuo nuovo sistema anti intrusione nella tua abitazione. Richiedici i nostri servizi di portierato e formazione di GpG art 133.'
    },
    {
      title: 'Monitoraggio avanzato',
      description: 'Utilizziamo tecnologie all\'avanguardia, come videosorveglianza intelligente, sensori perimetrali e comunicazioni criptate. I nostri sistemi possono integrarsi con i tuoi sistemi domotici.'
    },
    {
      title: 'Supporto continuo',
      description: 'Offriamo consulenza e manutenzione dei sistemi per garantire sicurezza a lungo termine.'
    },
    {
      title: 'Formazione',
      description: 'Corsi di formazione e protocolli di sicurezza per la famiglia e i dipendenti.'
    }
  ];

  // Dati per la sezione "Perché scegliere"
  const vantaggiItems = [
    {
      title: "Esperienza d'élite",
      description: "Un team con oltre 30 anni di esperienza in Security Management in Italia e all’estero, antiterrorismo, close protection, intelligence e Cyber security al servizio della tua sicurezza",
      icon: "carbon:certificate"
    },
    {
      title: "Standard globali",
      description: "Operiamo secondo i più alti standard internazionali garantendo un approccio scientifico, una sicurezza massima e costantemente aggiornati con le vigenti leggi italiane",
      icon: "carbon:certificate-check"
    },
    {
      title: "Discrezione assoluta",
      description: "Protezione invisibile per te, la tua famiglia e i tuoi ospiti, preservando la privacy della tua dimora.",
      icon: "carbon:password"
    },
    {
      title: "Copertura completa",
      description: "Dalla sicurezza fisica alla cybersecurity, proteggiamo ogni aspetto della tua proprietà.",
      icon: "carbon:security"
    },
    {
      title: "Tecnologie all'avanguardia",
      description: "Videosorveglianza AI, sensori perimetrali e comunicazioni sicure.",
      icon: "carbon:ai-status"
    },
    {
      title: "Servizio personalizzato",
      description: "Soluzioni su misura per ville private, residenze esclusive e tenute di campagna.",
      icon: "carbon:user-admin"
    }
  ];

  // Dati per la sezione "Tecnologie"
  const tecnologieItems = [
    {
      title: "Videosorveglianza intelligente",
      description: "Telecamere nascoste con rilevamento anomalie, integrate con AI e collegate con la nostra control room per un servizio proattivo e predittivo.",
      position: "left"
    },
    {
      title: "Sistemi di controllo accessi",
      description: "Cancelli sicuri, badge e biometria per ingressi riservati.",
      position: "left"
    },
    {
      title: "Sensori perimetrali",
      description: "Rilevamento di intrusioni in tempo reale, con notifiche immediate.",
      position: "right"
    },
    {
      title: "Anti droni e sorveglianza aerea",
      description: "Per la sicurezza di tenute estese o isolate.",
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
        backgroundImage: 'url(/assets/images/home/dimore.png)',
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
            Sicurezza discreta per <br />
            abitazioni di lusso
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
            Soluzioni di Security Management su misura per ville, residenze e dimore esclusive, <br />
            conformi agli standard internazionali, per garantire serenità e privacy.
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

  // Chi siamo section
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
            <Typography variant="h2" sx={{color: 'company.main'}}>Executive Protection Agency: I tuoi esperti per la sicurezza di dimore esclusive</Typography>
          </m.div>
        </Stack>

        <Grid container spacing={10} alignItems="center">
          <Grid xs={12} md={6}>
            <m.div variants={varFade().inUp}>
              <Image src="/assets/images/image1.jpeg" alt="Chi siamo" sx={{ borderRadius: 2 }} />
            </m.div>
          </Grid>

          <Grid xs={12} md={6}>
            <m.div variants={varFade().inUp}>
              <Typography sx={{ mb: 3, fontSize: '1.325rem' }}>
                Con sede in Italia e operatività globale, Executive Protection Agency è leader nel Security Management 
                per abitazioni di lusso, ville e residenze, offrendo soluzioni personalizzate per proteggere la tua 
                privacy, i tuoi beni e la tua famiglia.
              </Typography>

              <Typography sx={{ mb: 3, fontSize: '1.325rem' }}>
                Il nostro team, composto da ex appartenenti a forze dell'ordine, esercito e sicurezza privata con 
                oltre 30 anni di esperienza internazionale, garantisce protezione discreta e impeccabile. Operiamo 
                secondo standard globali come UNI ISO 31000 (Gestione del rischio), ISO/IEC 27001 (Sicurezza delle 
                informazioni), assicurando tranquillità assoluta.
              </Typography>

              <Card sx={{ p: 3, bgcolor: alpha('rgb(238, 164, 104)', 0.08), mb: 5 }}>
                <Typography variant="h5" sx={{ mb: 2, color: 'company.main' }}>
                  Perché scegliere EPA?
                </Typography>
                <Typography>
                  Discrezione, tecnologia avanzata, protezione su misura per la tua dimora.
                </Typography>
              </Card>
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  // Come Operiamo section
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
            <Typography variant="h2" sx={{color: 'company.main'}} >Un approccio integrato per la sicurezza delle dimore di lusso</Typography>
          </m.div>
          
          <m.div variants={varFade().inDown}>
            <Typography variant='h4' sx={{ mb: 3, maxWidth: 800, mx: 'auto' }}>
              Il nostro servizio di Security Management è progettato per integrarsi perfettamente con l'eleganza 
              e la privacy della tua abitazione.
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

  // Perché scegliere section
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
            <Typography variant="h2" sx={{ color: 'company.main' }}>Sicurezza di eccellenza per la tua dimora di lusso</Typography>
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
            La tua dimora, la nostra protezione: vivi con serenità nella tua oasi di lusso.
          </Typography>
        </Box>
      </Container>
    </Box>
  );

  // Tecnologie section
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
              Utilizziamo tecnologie avanzate per proteggere la tua dimora e i suoi abitanti.
            </Typography>
          </m.div>
        </Stack>

        <Grid container spacing={10}>
          <Grid xs={12} md={6}>
            <m.div variants={varFade().inUp}>
              <Image src="/assets/images/villa1.jpg" alt="Tecnologie" sx={{ borderRadius: 2, mb: 5 }} />
              
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

          <Grid xs={12} md={6}>
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

              <Image src="/assets/images/villa2.jpg" alt="Tecnologie" sx={{ borderRadius: 2, mt: 5 }} />
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  // Call-to-Action section
  const renderCallToAction = (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/assets/images/image4.jpeg)`,
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
            <Typography variant="h2">Proteggi la tua dimora di lusso: contattaci oggi</Typography>
          </m.div>
          
          <m.div variants={varFade().inDown}>
            <Typography sx={{ mb: 3, fontSize: '1.325rem' }}>
              Affidati a Executive Protection Agency per garantire la sicurezza e la privacy della tua villa o residenze. 
              Contattaci per una consulenza gratuita e scopri come possiamo personalizzare la protezione per la tua dimora.
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
