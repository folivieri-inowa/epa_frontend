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

export default function AntiTerrorismView() {
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');
  const pathname = usePathname();
  
  // Dati per la sezione "Come Operiamo"
  const approccioItems = [
    {
      title: 'Analisi del rischio',
      description: 'Valutiamo minacce terroristiche, vulnerabilità strutturali e rischi geopolitici, per identificare i punti critici di siti sensibili (es. ambasciate, data center).'
    },
    {
      title: 'Intelligence avanzata',
      description: 'Utilizziamo Open-Source Intelligence (OSINT) e reti globali per raccogliere e analizzare dati in tempo reale, anticipando potenziali attacchi.'
    },
    {
      title: 'Protezione fisica',
      description: 'Il nostro Team operativo con oltre 30 anni di esperienza sul campo, Implementazione dei controllo ad accessi biometrico, sorveglianza perimetrale con droni e squadre di risposta rapida per garantire la sicurezza di siti strategici.'
    },
    {
      title: 'Cybersecurity antiterrorismo',
      description: 'Proteggiamo contro attacchi informatici legati al terrorismo (es. hacking, propaganda online).'
    },
    {
      title: 'Gestione delle crisi',
      description: 'Sviluppiamo piani di emergenza e conduciamo simulazioni per garantire resilienza operativa.'
    },
    {
      title: 'Formazione specializzata',
      description: 'Offriamo corsi per personale, forze di sicurezza e manager su prevenzione del terrorismo, gestione delle crisi e protocolli operativi.'
    },
    {
      title: 'Monitoraggio continuo',
      description: 'Utilizziamo sale operative high-tech e tecnologie AI per una sorveglianza in tempo reale, garantendo una risposta immediata.'
    },
    {
      title: 'Gestione del rischio',
      description: 'Attraverso il nostro security Board e il nostro Team sul campo creiamo protocolli di sicurezza e prevenzione Anti terrorismo seguendo la nostra filosofia di Protezione attiva e passiva: preventiva, predittiva, pro attiva e multi difensiva.'
    }
  ];

  // Dati per la sezione "Perché Scegliere"
  const vantaggiItems = [
    {
      title: "Esperienza d'élite",
      description: "Un Team con oltre 30 anni di esperienza nel in operazioni di sicurezza globale, specializzato in protezione fisica e gestione di contesti ad alto rischio, esperti in Counter-Terrorism, con un impareggiabile sinergia tra certificazioni accademiche prestigiose ed esperienza sul campo, tra intelligence strategica, cybersecurity e protezione di infrastrutture critiche",
      icon: "carbon:certificate"
    },
    {
      title: "Protezione olistica",
      description: "Combiniamo intelligence, sicurezza fisica, cybersecurity e gestione delle crisi per una difesa completa.",
      icon: "carbon:security"
    },
    {
      title: "Tecnologie avanzate",
      description: "Videosorveglianza AI, droni, piattaforme OSINT, sensori perimetrali e comunicazioni criptate.",
      icon: "carbon:ai-status"
    },
    {
      title: "Discrezione assoluta",
      description: "Operazioni invisibili che preservano l'operatività di soggetti istituzionali, aziende e siti sensibili.",
      icon: "carbon:password"
    },
    {
      title: "Formazione d'eccellenza",
      description: "Corsi personalizzati per forze di sicurezza e personale, con simulazioni pratiche per affrontare scenari reali.",
      icon: "carbon:education"
    },
    {
      title: "Personale sul campo",
      description: "Il nostro Team al servizio della tua sicurezza: Executive e Close Protector, Security Manager, Analisti anti terrorismo e Security Oﬃcier con un esperienza impareggiabile sul campo e formazioni di altissimo livello.",
      icon: "carbon:checkmark-outline"
    }
  ];

  // Dati per la sezione "Tecnologie"
  const tecnologieItems = [
    {
      title: 'Videosorveglianza intelligente',
      description: 'Telecamere integrate con AI per il rilevamento delle anomalie.',
      colonna: 'sinistra'
    },
    {
      title: 'Controllo accessi avanzato',
      description: 'Sistemi biometrici e autenticazione multi-fattore per aree ad alta sicurezza.',
      colonna: 'sinistra'
    },
    {
      title: 'Droni e sensori perimetrali',
      description: 'Sorveglianza aerea e rilevamento di intrusioni per siti estesi, come porti e infrastrutture critiche.',
      colonna: 'sinistra'
    },
    {
      title: 'Piattaforme di intelligence OSINT',
      description: 'Analisi di dati open-source per identificare minacce potenziali, con software di ultima generazione.',
      colonna: 'destra'
    },
    {
      title: 'Cybersecurity avanzata',
      description: 'Firewall, protezione contro ransomware e attacchi terroristici informatici, conforme a ISO/IEC 27001.',
      colonna: 'destra'
    },
    {
      title: 'Sistemi di gestione crisi',
      description: 'Software per coordinare risposte rapide e piani di emergenza, conforme a ISO 22301.',
      colonna: 'destra'
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
        backgroundImage: 'url(/assets/images/home/antiterrorismo.png)', // Immagine di una sala operativa high-tech
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
      <Container sx={{ height: 1, position: 'relative', zIndex: 9 }}>          <Box
          sx={{
            bottom: { md: 80 },
            position: { md: 'absolute' },
            width: 1,
            textAlign: { xs: 'center', md: 'left' },
            pt: { xs: 20, md: 8 },
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
            Anti Terrorismo: <br />
            Protezione Strategica contro le Minacce Globali
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
            Soluzioni avanzate di sicurezza antiterrorismo per istituzioni, aziende e siti critici, <br />
            progettate per prevenire, proteggere e rispondere alle minacce, conformi agli standard internazionali.
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
          <Typography color="text.primary">Servizio Anti Terrorismo</Typography>
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
            <Typography variant="h2" sx={{ color: 'company.main' }}>Executive Protection Agency: Leader nella Sicurezza Antiterrorismo</Typography>
          </m.div>
        </Stack>

        <Grid container spacing={10} alignItems="center">
          <Grid xs={12} md={6}>
            <m.div variants={varFade().inUp}>
              <Image src="/assets/images/image20.jpeg" alt="Chi siamo" sx={{ borderRadius: 2 }} />
            </m.div>
          </Grid>

          <Grid xs={12} md={6}>
            <m.div variants={varFade().inUp} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography paragraph sx={{ fontSize: '1.325rem' }}>
                  Executive Protection Agency è il partner di fiducia per soggetti istituzionali, organizzazioni internazionali e aziende che richiedono 
                  protezione avanzata contro le minacce terroristiche. Con sede in Italia e operatività globale, il nostro team di esperti, 
                  con oltre 30 anni di esperienza in antiterrorismo, intelligence e gestione delle crisi, offre soluzioni di sicurezza integrate e discrete.
                </Typography>

                <Typography paragraph sx={{ fontSize: '1.325rem' }}>
                  Con un team di professionisti di prima fascia internazionale, operiamo secondo standard globali come UNI ISO 31000 
                  (Gestione del rischio), ISO/IEC 27001 (Sicurezza delle informazioni), ISO 22301 (Continuità operativa), garantendo protezione e resilienza.
                </Typography>
              </Box>
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
        py: { xs: 10, md: 15 },
        bgcolor: theme.palette.background.neutral,
      }}
    >
      <Container component={MotionViewport}>
        <Stack spacing={3} sx={{ textAlign: 'center', mb: 8 }}>
          <m.div variants={varFade().inDown}>
            <Typography variant="h2" sx={{ color: 'company.main'}}>Un Processo Integrato per Contrastare il Terrorismo</Typography>
          </m.div>
          
          <m.div variants={varFade().inDown}>
            <Typography variant="h4" sx={{ mb: 3, maxWidth: 800, mx: 'auto' }}>
              Il nostro servizio di Anti Terrorismo combina intelligence, protezione fisica e tecnologie all'avanguardia 
              per una sicurezza multistrato, predittiva, preventiva e proattiva.
            </Typography>
          </m.div>
        </Stack>

        <Grid container spacing={10} sx={{ pt: 3 }}>
          {approccioItems.map((item, index) => (
            <Grid xs={12} md={6} key={index}>
              <m.div variants={varFade().inUp}>
                <Box sx={{ mb: 4 }}>
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
            <Typography variant="h2" sx={{ color: 'company.main'}}>La Scelta Strategica per la Protezione Antiterrorismo</Typography>
          </m.div>
        </Stack>

        <Grid container spacing={4}>
          {vantaggiItems.map((item, index) => (
            <Grid key={index} xs={12} md={4} sx={{ display: 'flex' }}>
              <m.div variants={varFade().inUp} style={{ height: '100%', width: '100%', display: 'flex' }}>
                <Card 
                  sx={{ 
                    p: 4, 
                    width: '100%',
                    height: '100%',
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    mb: 3 
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
            Neutralizza le minacce con EPA: competenza, innovazione, resilienza.
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
            <Typography variant="h2" sx={{ color: 'company.main'}}>Innovazione per Contrastare le Minacce Terroristiche</Typography>
          </m.div>
          
          <m.div variants={varFade().inDown}>
            <Typography variant="h4" sx={{ mb: 3, maxWidth: 800, mx: 'auto' }}>
              Sfruttiamo tecnologie di punta per garantire una protezione totale.
            </Typography>
          </m.div>
        </Stack>

        <Grid container spacing={10}>
          <Grid xs={12} md={6}>
            <m.div variants={varFade().inUp}>
              <Image src="/assets/images/image22.jpeg" alt="Tecnologie" sx={{ borderRadius: 2, mb: 5 }} />
              
              {tecnologieItems
                .filter((item) => item.colonna === 'sinistra')
                .map((item, index) => (
                  <Box key={index} sx={{ mb: 3, mt: { md: 7 } }}>         
                    <Typography variant="h4" paragraph sx={{ color: 'company.main' }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: '1.325rem' }}>
                      {item.description}
                    </Typography>
                  </Box>
                ))}
            </m.div>
          </Grid>

          <Grid xs={12} md={6}>
            <m.div variants={varFade().inUp}>
              {tecnologieItems
                .filter((item) => item.colonna === 'destra')
                .map((item, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Typography variant="h4" paragraph sx={{ color: 'company.main' }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: '1.325rem' }}>
                      {item.description}
                    </Typography>
                  </Box>
                ))}

              <Image src="/assets/images/image23.jpeg" alt="Tecnologie" sx={{ borderRadius: 2, mt: 5 }} />
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
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/assets/images/image24.jpeg)`,
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
            <Typography variant="h2">Rafforza la Tua Sicurezza: Contattaci Oggi</Typography>
          </m.div>
          
          <m.div variants={varFade().inDown}>
            <Typography sx={{ mb: 3, fontSize: '1.325rem' }}>
              Affidati a Executive Protection Agency per una protezione antiterrorismo senza compromessi. 
              Contattaci per una consulenza gratuita e scopri come possiamo personalizzare la sicurezza per la tua organizzazione, 
              dai siti governativi alle infrastrutture critiche.
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
    <>
      {renderHero}
      {renderBreadcrumbs}
      {renderChiSiamo}
      {renderComeOperiamo}
      {renderPercheScegliere}
      {renderTecnologie}
      {renderCallToAction}
    </>
  );
}
