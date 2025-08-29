'use client';

import { useTranslation } from 'react-i18next';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { varFade, MotionViewport } from 'src/components/animate';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function PrivacyPolicyView() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <Box
        component={MotionViewport}
        sx={{
          pt: { xs: 8, md: 10 },
          pb: { xs: 5, md: 8 },
          bgcolor: 'background.neutral',
        }}
      >
        <Container>
          <m.div variants={varFade().inUp}>
            <Breadcrumbs 
              separator={<Iconify icon="carbon:chevron-right" />}
              sx={{ mb: 3 }}
            >
              <Link component={RouterLink} href={paths.root} color="inherit">
                {t('common.home')}
              </Link>
              <Typography color="text.primary">Privacy Policy</Typography>
            </Breadcrumbs>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Privacy Policy
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                maxWidth: 600,
                lineHeight: 1.6,
              }}
            >
              Informativa sulla Privacy di Oracle Executive Protection
            </Typography>
          </m.div>
        </Container>
      </Box>

      {/* Content Section */}
      <Container component={MotionViewport} sx={{ py: { xs: 8, md: 10 } }}>
        <Stack spacing={6}>
          
          {/* Introduzione */}
          <m.div variants={varFade().inUp}>
            <Paper sx={{ p: 4, borderRadius: 2, bgcolor: 'background.neutral' }}>
              <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                1. Introduzione
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
                Oracle Executive Protection (di seguito "Oracle EP", "noi", "nostro") si impegna a proteggere 
                la privacy e la sicurezza dei dati personali dei nostri utenti. La presente Informativa sulla 
                Privacy descrive come raccogliamo, utilizziamo, condividiamo e proteggiamo le informazioni 
                personali in conformità al Regolamento Generale sulla Protezione dei Dati (GDPR) e alla 
                normativa italiana sulla privacy.
              </Typography>
              <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                Data ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
              </Typography>
            </Paper>
          </m.div>

          {/* Titolare del trattamento */}
          <m.div variants={varFade().inUp}>
            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
              2. Titolare del Trattamento
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
              Il Titolare del trattamento dei dati è:
            </Typography>
            <Box sx={{ bgcolor: 'background.neutral', p: 3, borderRadius: 1, mb: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Oracle Executive Protection</Typography>
              <Typography variant="body2">Email: info@oracleprotectionagency.it</Typography>
              <Typography variant="body2">Telefono: +39 392 926 4907</Typography>
            </Box>
          </m.div>

          {/* Dati raccolti */}
          <m.div variants={varFade().inUp}>
            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
              3. Dati Personali Raccolti
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
              Raccogliamo le seguenti categorie di dati personali:
            </Typography>
            
            <Stack spacing={3}>
              <Paper sx={{ p: 3, borderLeft: 4, borderColor: 'primary.main' }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                  Dati di Contatto
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Nome e cognome" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Indirizzo email" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Numero di telefono" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Oggetto e messaggio delle richieste di contatto" />
                  </ListItem>
                </List>
              </Paper>

              <Paper sx={{ p: 3, borderLeft: 4, borderColor: 'warning.main' }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'warning.main' }}>
                  Dati Tecnici e di Navigazione
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Indirizzo IP" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Tipo di browser e versione" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Sistema operativo utilizzato" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Pagine visitate e tempo di permanenza" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Preferenze sulla lingua" />
                  </ListItem>
                </List>
              </Paper>
            </Stack>
          </m.div>

          {/* Diritti dell'interessato - versione compatta */}
          <m.div variants={varFade().inUp}>
            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
              4. I Tuoi Diritti GDPR
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
              Hai diritto a: accesso, rettifica, cancellazione, limitazione, portabilità dei dati 
              e opposizione al trattamento. Per esercitare i tuoi diritti contattaci a: 
  info@oracleprotection.it
            </Typography>
          </m.div>

          {/* Contatti */}
          <m.div variants={varFade().inUp}>
            <Paper sx={{ p: 4, bgcolor: 'primary.lighter' }}>
              <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                5. Contatti
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Per qualsiasi questione relativa alla privacy:
              </Typography>
              <Box>
                <Typography variant="body2">
                  <strong>Email:</strong> info@oracleprotectionagency.it
                </Typography>
                <Typography variant="body2">
                  <strong>Telefono:</strong> +39 392 926 4907
                </Typography>
              </Box>
            </Paper>
          </m.div>

        </Stack>
      </Container>
    </>
  );
}

  return (
    <>
      {/* Hero Section */}
      <Box
        component={MotionViewport}
        sx={{
          pt: { xs: 8, md: 10 },
          pb: { xs: 5, md: 8 },
          bgcolor: 'background.neutral',
        }}
      >
        <Container>
          <m.div variants={varFade().inUp}>
            <Breadcrumbs 
              separator={<Iconify icon="carbon:chevron-right" />}
              sx={{ mb: 3 }}
            >
              <Link component={RouterLink} href={paths.root} color="inherit">
                {t('common.home')}
              </Link>
              <Typography color="text.primary">Privacy Policy</Typography>
            </Breadcrumbs>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Privacy Policy
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                maxWidth: 600,
                lineHeight: 1.6,
              }}
            >
              Informativa sulla Privacy di Oracle Executive Protection
            </Typography>
          </m.div>
        </Container>
      </Box>

      {/* Content Section */}
      <Container component={MotionViewport} sx={{ py: { xs: 8, md: 10 } }}>
        <Stack spacing={6}>
          
          {/* Introduzione */}
          <m.div variants={varFade().inUp}>
            <Paper sx={{ p: 4, borderRadius: 2, bgcolor: 'background.neutral' }}>
              <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                1. Introduzione
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
                Oracle Executive Protection (di seguito "Oracle EP", "noi", "nostro") si impegna a proteggere 
                la privacy e la sicurezza dei dati personali dei nostri utenti. La presente Informativa sulla 
                Privacy descrive come raccogliamo, utilizziamo, condividiamo e proteggiamo le informazioni 
                personali in conformità al Regolamento Generale sulla Protezione dei Dati (GDPR) e alla 
                normativa italiana sulla privacy.
              </Typography>
              <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                Data ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
              </Typography>
            </Paper>
          </m.div>

          {/* Titolare del trattamento */}
          <m.div variants={varFade().inUp}>
            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
              2. Titolare del Trattamento
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
              Il Titolare del trattamento dei dati è:
            </Typography>
            <Box sx={{ bgcolor: 'background.neutral', p: 3, borderRadius: 1, mb: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Oracle Executive Protection</Typography>
              <Typography variant="body2">Email: info@oracleprotectionagency.it</Typography>
              <Typography variant="body2">Telefono: +39 392 926 4907</Typography>
            </Box>
          </m.div>

          {/* Dati raccolti */}
          <m.div variants={varFade().inUp}>
            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
              3. Dati Personali Raccolti
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
              Raccogliamo le seguenti categorie di dati personali:
            </Typography>
            
            <Stack spacing={3}>
              <Paper sx={{ p: 3, borderLeft: 4, borderColor: 'primary.main' }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                  Dati di Contatto
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Nome e cognome" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Indirizzo email" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Numero di telefono" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Oggetto e messaggio delle richieste di contatto" />
                  </ListItem>
                </List>
              </Paper>

              <Paper sx={{ p: 3, borderLeft: 4, borderColor: 'warning.main' }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'warning.main' }}>
                  Dati Tecnici e di Navigazione
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Indirizzo IP" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Tipo di browser e versione" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Sistema operativo utilizzato" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Pagine visitate e tempo di permanenza" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Preferenze sulla lingua" />
                  </ListItem>
                </List>
              </Paper>
            </Stack>
          </m.div>

          {/* Finalità del trattamento */}
          <m.div variants={varFade().inUp}>
            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
              4. Finalità del Trattamento
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
              Utilizziamo i dati personali per le seguenti finalità:
            </Typography>
            
            <Stack spacing={2}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 1, color: 'success.main' }}>
                  Gestione delle Richieste di Contatto
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Base giuridica: Consenso dell'interessato e legittimo interesse
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, lineHeight: 1.7 }}>
                  Per rispondere alle richieste di informazioni sui nostri servizi di sicurezza e 
                  protezione esecutiva, fornire preventivi e consulenze personalizzate.
                </Typography>
              </Paper>

              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 1, color: 'info.main' }}>
                  Miglioramento del Sito Web
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Base giuridica: Legittimo interesse
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, lineHeight: 1.7 }}>
                  Per analizzare l'utilizzo del sito, migliorare l'esperienza utente e 
                  ottimizzare i contenuti e i servizi offerti.
                </Typography>
              </Paper>

              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 1, color: 'error.main' }}>
                  Sicurezza e Protezione
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Base giuridica: Legittimo interesse e obbligo di legge
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, lineHeight: 1.7 }}>
                  Per prevenire frodi, garantire la sicurezza del sito e proteggere i nostri 
                  sistemi da accessi non autorizzati.
                </Typography>
              </Paper>
            </Stack>
          </m.div>

          {/* Cookies */}
          <m.div variants={varFade().inUp}>
            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
              5. Utilizzo dei Cookie
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
              Il nostro sito web utilizza cookie per migliorare l'esperienza di navigazione:
            </Typography>
            
            <Stack spacing={2}>
              <Paper sx={{ p: 3, bgcolor: 'success.lighter' }}>
                <Typography variant="h6" sx={{ mb: 1, color: 'success.dark' }}>
                  Cookie Necessari (Sempre Attivi)
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                  Essenziali per il funzionamento del sito. Includono i cookie per la gestione 
                  delle preferenze linguistiche, delle impostazioni di accessibilità e della 
                  sicurezza della sessione.
                </Typography>
              </Paper>

              <Paper sx={{ p: 3, bgcolor: 'info.lighter' }}>
                <Typography variant="h6" sx={{ mb: 1, color: 'info.dark' }}>
                  Cookie di Analisi (Opzionali)
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                  Ci aiutano a comprendere come i visitatori interagiscono con il sito, 
                  raccogliendo informazioni anonime su pagine visitate e comportamenti di navigazione.
                </Typography>
              </Paper>

              <Paper sx={{ p: 3, bgcolor: 'warning.lighter' }}>
                <Typography variant="h6" sx={{ mb: 1, color: 'warning.dark' }}>
                  Cookie di Marketing (Opzionali)
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                  Utilizzati per tracciare i visitatori sui siti web e mostrare contenuti 
                  personalizzati e rilevanti.
                </Typography>
              </Paper>
            </Stack>
          </m.div>

          {/* Conservazione dati */}
          <m.div variants={varFade().inUp}>
            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
              6. Periodo di Conservazione
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
              Conserviamo i dati personali per il tempo necessario alle finalità per cui sono stati raccolti:
            </Typography>
            
            <Box sx={{ bgcolor: 'background.neutral', p: 3, borderRadius: 1 }}>
              <List>
                <ListItem>
                  <ListItemText 
                    primary="Dati di contatto" 
                    secondary="Conservati per 2 anni dalla ultima comunicazione, salvo obbligo di legge"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Dati di navigazione" 
                    secondary="Conservati per 13 mesi, in conformità alle disposizioni del Garante Privacy"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Log di sicurezza" 
                    secondary="Conservati per 12 mesi per finalità di sicurezza e prevenzione frodi"
                  />
                </ListItem>
              </List>
            </Box>
          </m.div>

          {/* Diritti dell'interessato */}
          <m.div variants={varFade().inUp}>
            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
              7. I Tuoi Diritti
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
              In conformità al GDPR, hai i seguenti diritti riguardo ai tuoi dati personali:
            </Typography>
            
            <Stack spacing={2}>
              {[
                { title: 'Accesso', desc: 'Richiedere informazioni sui dati che trattiamo' },
                { title: 'Rettifica', desc: 'Correggere dati inesatti o incompleti' },
                { title: 'Cancellazione', desc: 'Richiedere la cancellazione dei tuoi dati' },
                { title: 'Limitazione', desc: 'Limitare il trattamento in determinate circostanze' },
                { title: 'Portabilità', desc: 'Ricevere i dati in formato strutturato' },
                { title: 'Opposizione', desc: 'Opporti al trattamento per motivi legittimi' },
                { title: 'Revoca del consenso', desc: 'Revocare il consenso in qualsiasi momento' }
              ].map((right, index) => (
                <Paper key={index} sx={{ p: 2, borderLeft: 3, borderColor: 'primary.main' }}>
                  <Typography variant="h6" sx={{ color: 'primary.main' }}>
                    {right.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {right.desc}
                  </Typography>
                </Paper>
              ))}
            </Stack>

            <Box sx={{ mt: 3, p: 3, bgcolor: 'info.lighter', borderRadius: 1 }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                Come esercitare i tuoi diritti:
              </Typography>
              <Typography variant="body2">
                Puoi esercitare i tuoi diritti contattandoci all'indirizzo: 
                <Link href="mailto:info@oracleprotectionagency.it" sx={{ ml: 1 }}>
      info@oracleprotection.it
                </Link>
              </Typography>
            </Box>
          </m.div>

          {/* Sicurezza */}
          <m.div variants={varFade().inUp}>
            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
              8. Sicurezza dei Dati
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
              Implementiamo misure tecniche e organizzative appropriate per proteggere i dati personali:
            </Typography>
            
            <Stack spacing={2}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'success.main' }}>
                  Misure Tecniche
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Crittografia SSL/TLS per tutte le comunicazioni" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Sistemi di backup sicuri e ridondanti" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Firewall e sistemi di monitoraggio avanzati" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Accesso limitato ai dati su base 'need-to-know'" />
                  </ListItem>
                </List>
              </Paper>

              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'warning.main' }}>
                  Misure Organizzative
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Formazione continua del personale sulla privacy" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Procedure di gestione degli incidenti di sicurezza" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Revisioni periodiche delle misure di sicurezza" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Contratti di riservatezza con tutti i collaboratori" />
                  </ListItem>
                </List>
              </Paper>
            </Stack>
          </m.div>

          {/* Condivisione dati */}
          <m.div variants={varFade().inUp}>
            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
              9. Condivisione dei Dati
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
              I dati personali possono essere condivisi esclusivamente con:
            </Typography>
            
            <Stack spacing={2}>
              <Paper sx={{ p: 3, borderLeft: 4, borderColor: 'info.main' }}>
                <Typography variant="h6" sx={{ mb: 1, color: 'info.main' }}>
                  Fornitori di Servizi Autorizzati
                </Typography>
                <Typography variant="body1">
                  Partner tecnologici per l'hosting, l'analisi del sito e i servizi di comunicazione, 
                  tutti vincolati da accordi di riservatezza e conformità GDPR.
                </Typography>
              </Paper>

              <Paper sx={{ p: 3, borderLeft: 4, borderColor: 'warning.main' }}>
                <Typography variant="h6" sx={{ mb: 1, color: 'warning.main' }}>
                  Autorità Competenti
                </Typography>
                <Typography variant="body1">
                  Solo quando richiesto dalla legge o necessario per proteggere i nostri diritti legali 
                  o la sicurezza delle persone.
                </Typography>
              </Paper>
            </Stack>

            <Box sx={{ mt: 3, p: 3, bgcolor: 'error.lighter', borderRadius: 1 }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'error.dark' }}>
                Non vendiamo, noleggiamo o condividiamo mai i tuoi dati personali con terze parti 
                per scopi commerciali senza il tuo esplicito consenso.
              </Typography>
            </Box>
          </m.div>

          {/* Contatti e reclami */}
          <m.div variants={varFade().inUp}>
            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
              10. Contatti e Reclami
            </Typography>
            
            <Stack spacing={3}>
              <Paper sx={{ p: 4, bgcolor: 'primary.lighter' }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                  Contatta il Titolare del Trattamento
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Per qualsiasi questione relativa alla privacy o per esercitare i tuoi diritti:
                </Typography>
                <Box>
                  <Typography variant="body2">
                    <strong>Email:</strong> info@oracleprotectionagency.it
                  </Typography>
                  <Typography variant="body2">
                    <strong>Telefono:</strong> +39 392 926 4907
                  </Typography>
                </Box>
              </Paper>

              <Paper sx={{ p: 4, bgcolor: 'warning.lighter' }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'warning.main' }}>
                  Autorità Garante per la Protezione dei Dati Personali
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Hai il diritto di presentare reclamo all'Autorità di controllo:
                </Typography>
                <Box>
                  <Typography variant="body2">
                    <strong>Garante per la protezione dei dati personali</strong>
                  </Typography>
                  <Typography variant="body2">
                    Piazza di Monte Citorio, 121 - 00186 Roma
                  </Typography>
                  <Typography variant="body2">
                    <strong>Sito web:</strong> www.gpdp.it
                  </Typography>
                </Box>
              </Paper>
            </Stack>
          </m.div>

          {/* Modifiche */}
          <m.div variants={varFade().inUp}>
            <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
              11. Modifiche alla Privacy Policy
            </Typography>
            <Paper sx={{ p: 4, bgcolor: 'background.neutral' }}>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
                Ci riserviamo il diritto di modificare questa Privacy Policy in qualsiasi momento. 
                Le modifiche entreranno in vigore non appena pubblicate su questa pagina.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
                Ti invitiamo a consultare periodicamente questa pagina per rimanere aggiornato 
                sulle nostre pratiche di privacy.
              </Typography>
              <Box sx={{ mt: 3, p: 2, bgcolor: 'info.lighter', borderRadius: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  Ultima modifica: {new Date().toLocaleDateString('it-IT')}
                </Typography>
              </Box>
            </Paper>
          </m.div>

        </Stack>
      </Container>
    </>
  );
}
