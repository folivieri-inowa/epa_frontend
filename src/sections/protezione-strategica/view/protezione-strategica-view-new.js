'use client';

import { m } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { paths } from 'src/routes/paths';
import { useResponsive } from 'src/hooks/use-responsive';
import { RouterLink } from 'src/routes/components';
import { varFade, MotionViewport } from 'src/components/animate';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function ProtezioneStrategicaView() {
  const { t } = useTranslation();
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');

  // Hero section
  const renderHero = (
    <Box
      sx={{
        height: { xs: '60vh', md: '70vh' },
        minHeight: { xs: 400, md: 560 },
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'url(/assets/images/strategic1.jpg)',
        '&:after': {
          top: 0,
          content: '""',
          width: '100%',
          height: '100%',
          position: 'absolute',
          backgroundColor: alpha(theme.palette.grey[900], 0.7),
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
            pb: { xs: 8, md: 4 },
            px: { xs: 2, md: 0 },
          }}
        >
          <Typography 
            variant="h1" 
            component="h1" 
            sx={{ 
              color: 'common.white', 
              textTransform: 'uppercase', 
              mb: 3,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              lineHeight: { xs: 1.2, md: 1.1 },
              fontWeight: 700,
            }}
          >
            Protezione Strategica
          </Typography>

          <Typography 
            variant="h1" 
            component="h1" 
            sx={{ 
              color: 'common.white', 
              mb: 4,
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' },
              lineHeight: { xs: 1.2, md: 1.1 },
              fontWeight: 300,
            }}
          >
            Contro Le Minacce Globali
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: 'common.white',
              fontWeight: 400,
              mb: 4,
              maxWidth: { xs: '100%', md: '70%' },
              fontSize: { xs: '1.1rem', md: '1.5rem' },
              lineHeight: 1.4,
            }}
          >
            Soluzioni avanzate di sicurezza Antiterrorismo e Anti crimine per istituzioni, aziende, corporate, infrastrutture pubbliche e private e siti sensibili, progettate per prevenire, proteggere e rispondere alle minacce, conformi ai più alti standard internazionali.
          </Typography>

          <Button
            component={RouterLink}
            href={paths.contact}
            size="large"
            variant="contained"
            sx={{
              bgcolor: 'primary.main',
              color: 'common.black',
              fontWeight: 700,
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': {
                bgcolor: 'primary.dark',
                transform: 'translateY(-2px)',
              },
            }}
          >
            Contattaci Ora
          </Button>
        </Box>
      </Container>
    </Box>
  );

  // Breadcrumbs
  const renderBreadcrumbs = (
    <Container sx={{ pt: 3, pb: 2 }}>
      <Breadcrumbs
        separator={
          <Box
            component="span"
            sx={{
              width: 4,
              height: 4,
              borderRadius: '50%',
              bgcolor: 'text.disabled',
            }}
          />
        }
      >
        <Link
          component={RouterLink}
          href={paths.root}
          color="inherit"
          variant="body2"
          sx={{ color: 'common.white' }}
        >
          Home
        </Link>
        <Typography variant="body2" sx={{ color: 'primary.main' }}>
          Protezione Strategica
        </Typography>
      </Breadcrumbs>
    </Container>
  );

  // Main Content Section
  const renderMainContent = (
    <Container sx={{ py: { xs: 8, md: 10 } }}>
      <MotionViewport>
        <m.div variants={varFade().inUp}>
          <Typography
            variant="h2"
            sx={{
              mb: 6,
              textAlign: 'center',
              color: 'common.white',
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
            }}
          >
            Oracle Executive Protection Partner di Fiducia
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: 'common.white',
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              lineHeight: 1.6,
              textAlign: 'justify',
            }}
          >
            <strong>ORACLE o EPA</strong> è il partner di fiducia per soggetti istituzionali, organizzazioni internazionali e aziende che richiedono protezione avanzata contro le minacce di terrorismo politico, sociale o religioso e le minacce di stampo criminale.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 6,
              color: 'common.white',
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              lineHeight: 1.6,
              textAlign: 'justify',
            }}
          >
            Con team di esperti con oltre 30 anni di esperienza in operazioni di sicurezza globale, specializzato in protezione fisica, gestione di contesti ad alto rischio, gestione delle crisi ed esperti in Counter-Terrorism e anti criminalità, con un impareggiabile sinergia tra certificazioni accademiche prestigiose ed esperienza sul campo, ed un importante struttura di intelligence strategica, cybersecurity, offriamo soluzioni di sicurezza integrate combinando la nostra esperienza personale con i più alti standard internazionali in materia di sicurezza e antiterrorismo e garantendo protezione e resilienza globale.
          </Typography>
        </m.div>
      </MotionViewport>
    </Container>
  );

  // Services Section
  const renderServices = (
    <Container sx={{ py: { xs: 8, md: 10 } }}>
      <MotionViewport>
        <m.div variants={varFade().inUp}>
          <Typography
            variant="h3"
            sx={{
              mb: 8,
              textAlign: 'center',
              color: 'common.white',
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
            }}
          >
            I Nostri Servizi
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                title: 'Analisi e Gestione dei Rischi',
                icon: 'carbon:analytics',
                description: 'Valutazione completa delle minacce e sviluppo di strategie personalizzate per la mitigazione dei rischi.'
              },
              {
                title: 'Protezione Fisica',
                icon: 'carbon:security',
                description: 'Servizi di protezione esecutiva e fisica per persone, strutture e asset critici.'
              },
              {
                title: 'Intelligence e Tecnologia di Sicurezza Avanzata',
                icon: 'carbon:intelligence',
                description: 'Raccolta informazioni strategiche e implementazione di tecnologie di sicurezza all\'avanguardia.'
              },
              {
                title: 'Cybersecurity',
                icon: 'carbon:security-services',
                description: 'Protezione digitale completa contro minacce informatiche e cyber-terrorismo.'
              },
              {
                title: 'Formazione d\'Eccellenza Specializzata',
                icon: 'carbon:education',
                description: 'Programmi di training avanzati per personale di sicurezza e gestione delle emergenze.'
              }
            ].map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <m.div variants={varFade().inUp}>
                  <Card
                    sx={{
                      p: 4,
                      height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      backdropFilter: 'blur(10px)',
                      border: '2px solid #FFD700',
                      borderRadius: 2,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        borderColor: '#FFA500',
                        boxShadow: '0 20px 40px rgba(255, 215, 0, 0.15)',
                      },
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        boxShadow: '0 8px 24px rgba(255, 215, 0, 0.3)',
                      }}
                    >
                      <Iconify 
                        icon={service.icon} 
                        sx={{ 
                          color: 'common.black', 
                          width: 36, 
                          height: 36,
                          fontWeight: 'bold'
                        }} 
                      />
                    </Box>
                    
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        color: 'common.white',
                        fontWeight: 700,
                        fontSize: { xs: '1.25rem', md: '1.4rem' },
                        lineHeight: 1.3,
                        mb: 2,
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: 'common.white',
                        opacity: 0.9,
                        fontSize: '1rem',
                        lineHeight: 1.5,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Card>
                </m.div>
              </Grid>
            ))}
          </Grid>
        </m.div>
      </MotionViewport>
    </Container>
  );

  // Certifications Section
  const renderCertifications = (
    <Container sx={{ py: { xs: 8, md: 10 } }}>
      <MotionViewport>
        <m.div variants={varFade().inUp}>
          <Typography
            variant="h3"
            sx={{
              mb: 4,
              textAlign: 'center',
              color: 'common.white',
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
            }}
          >
            Standard e Certificazioni Internazionali
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 8,
              textAlign: 'center',
              color: 'common.white',
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              fontWeight: 400,
              maxWidth: '80%',
              mx: 'auto',
            }}
          >
            In collaborazione con prestigiosi partner internazionali, operiamo nel rispetto dei più rigorosi protocolli di sicurezza e protezione, conformi ai più elevati standard internazionali:
          </Typography>

          <Grid container spacing={3}>
            {[
              {
                title: "Advanced Certificate in Terrorism Studies",
                organization: "The Handa Centre for the Study of Terrorism and Political Violence e University of St Andrews",
                description: "La più importante certificazione sullo studio e i protocolli di sicurezza, difesa e protezione anti terrorismo."
              },
              {
                title: "ISO 31000",
                organization: "Standard internazionale per la gestione del rischio",
                description: "Fornisce principi e linee guida per identificare, valutare e gestire i rischi in modo sistematico a livello globale."
              },
              {
                title: "UNI ISO 31030",
                organization: "Linee guida per la gestione dei rischi legati ai viaggi d'affari",
                description: "Focalizzata sulla sicurezza e il benessere dei dipendenti in trasferta."
              },
              {
                title: "Hospitality Security Guidelines",
                organization: "Linee guida per la sicurezza nel settore dell'ospitalità",
                description: "Mirate a proteggere ospiti, personale e strutture attraverso misure preventive e gestionali."
              },
              {
                title: "ISO 27002",
                organization: "Linee guida per la gestione della sicurezza delle informazioni",
                description: "Pratiche consigliate per proteggere dati e sistemi aziendali."
              },
              {
                title: "ISO 27005",
                organization: "Standard per la gestione del rischio nella sicurezza delle informazioni",
                description: "Fornisce un approccio strutturato per identificare, valutare e mitigare i rischi."
              },
              {
                title: "ISO 22301",
                organization: "Standard per la gestione della continuità operativa",
                description: "Definisce i requisiti per pianificare, implementare e mantenere un sistema di risposta a emergenze."
              }
            ].map((cert, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <m.div variants={varFade().inUp}>
                  <Card
                    sx={{
                      p: 4,
                      height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        borderColor: theme.palette.primary.main,
                        boxShadow: `0 12px 24px ${alpha(theme.palette.primary.main, 0.15)}`,
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 700,
                        mb: 2,
                        fontSize: { xs: '1.1rem', md: '1.3rem' },
                      }}
                    >
                      {cert.title}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'common.white',
                        fontWeight: 600,
                        mb: 1,
                        opacity: 0.8,
                      }}
                    >
                      {cert.organization}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'common.white',
                        lineHeight: 1.5,
                        opacity: 0.9,
                      }}
                    >
                      {cert.description}
                    </Typography>
                  </Card>
                </m.div>
              </Grid>
            ))}
          </Grid>
        </m.div>
      </MotionViewport>
    </Container>
  );

  // CTA Section
  const renderCTA = (
    <Container sx={{ py: { xs: 8, md: 10 } }}>
      <MotionViewport>
        <m.div variants={varFade().inUp}>
          <Card
            sx={{
              p: { xs: 6, md: 8 },
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(10px)',
              border: `2px solid ${theme.palette.primary.main}`,
              borderRadius: 3,
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 3,
                color: 'common.white',
                fontSize: { xs: '1.8rem', md: '2.2rem' },
                fontWeight: 700,
              }}
            >
              Hai Bisogno di Protezione Strategica?
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: 'common.white',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                fontWeight: 400,
                maxWidth: '70%',
                mx: 'auto',
              }}
            >
              Contatta i nostri esperti per una consulenza personalizzata sui nostri servizi di protezione strategica avanzata.
            </Typography>

            <Button
              component={RouterLink}
              href={paths.contact}
              size="large"
              variant="contained"
              sx={{
                bgcolor: 'primary.main',
                color: 'common.black',
                fontWeight: 700,
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                '&:hover': {
                  bgcolor: 'primary.dark',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Contattaci Ora
            </Button>
          </Card>
        </m.div>
      </MotionViewport>
    </Container>
  );

  return (
    <>
      {renderHero}
      
      {renderBreadcrumbs}

      <Box sx={{ bgcolor: 'grey.900', position: 'relative', overflow: 'hidden' }}>
        {renderMainContent}
        
        {renderServices}
        
        {renderCertifications}
        
        {renderCTA}
      </Box>
    </>
  );
}
