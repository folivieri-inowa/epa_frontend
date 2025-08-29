'use client';

import { useTranslation } from 'react-i18next';

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
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function PrivacyPolicyView() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 8, md: 10 },
          pb: { xs: 5, md: 8 },
          bgcolor: 'grey.50',
        }}
      >
        <Container>
          <Breadcrumbs 
            separator={<Iconify icon="carbon:chevron-right" />}
            sx={{ mb: 3 }}
          >
            <Link component={RouterLink} href={paths.root} color="inherit">
              {t('common.home')}
            </Link>
            <Typography color="text.primary">Privacy Policy</Typography>
          </Breadcrumbs>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
              mb: 2,
              color: 'text.primary',
            }}
          >
            Privacy Policy
          </Typography>

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
        </Container>
      </Box>

      {/* Content Section */}
      <Container sx={{ py: { xs: 8, md: 10 } }}>
        <Stack spacing={6}>
          
          {/* Introduzione */}
          <Paper sx={{ p: 4, borderRadius: 2, bgcolor: 'grey.50' }}>
            <Typography variant="h4" sx={{ mb: 3, color: 'text.primary', fontWeight: 600 }}>
              1. Introduzione
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
              Oracle Executive Protection (di seguito &quot;Oracle EP&quot;) si impegna a proteggere 
              la privacy e la sicurezza dei dati personali dei nostri utenti. La presente Informativa 
              descrive come raccogliamo, utilizziamo e proteggiamo le informazioni personali in 
              conformità al GDPR e alla normativa italiana sulla privacy.
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
              Data ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
            </Typography>
          </Paper>

          {/* Titolare del trattamento */}
          <div>
            <Typography variant="h4" sx={{ mb: 3, color: 'text.primary', fontWeight: 600 }}>
              2. Titolare del Trattamento
            </Typography>
            <Paper sx={{ p: 3, borderRadius: 1, border: '1px solid', borderColor: 'grey.200' }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                Oracle Executive Protection
              </Typography>
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                Email: info@oracleprotectionagency.it
              </Typography>
              <Typography variant="body2">
                Telefono: +39 392 926 4907
              </Typography>
            </Paper>
          </div>

          {/* Dati raccolti */}
          <div>
            <Typography variant="h4" sx={{ mb: 3, color: 'text.primary', fontWeight: 600 }}>
              3. Dati Personali Raccolti
            </Typography>
            
            <Stack spacing={3}>
              <Paper sx={{ p: 3, borderLeft: 4, borderColor: 'primary.main', bgcolor: 'white' }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'text.primary', fontWeight: 600 }}>
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
                    <ListItemText primary="Messaggio e richieste di contatto" />
                  </ListItem>
                </List>
              </Paper>

              <Paper sx={{ p: 3, borderLeft: 4, borderColor: 'grey.400', bgcolor: 'white' }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'text.primary', fontWeight: 600 }}>
                  Dati Tecnici e di Navigazione
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Indirizzo IP e informazioni di navigazione" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Tipo di browser e dispositivo utilizzato" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Preferenze linguistiche e cookies" />
                  </ListItem>
                </List>
              </Paper>
            </Stack>
          </div>

          {/* Finalità */}
          <div>
            <Typography variant="h4" sx={{ mb: 3, color: 'text.primary', fontWeight: 600 }}>
              4. Finalità del Trattamento
            </Typography>
            <Stack spacing={2}>
              <Paper sx={{ p: 3, bgcolor: 'white', border: '1px solid', borderColor: 'grey.200' }}>
                <Typography variant="h6" sx={{ mb: 1, color: 'text.primary', fontWeight: 600 }}>
                  Gestione delle Richieste di Contatto
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Per rispondere alle richieste di informazioni sui nostri servizi di sicurezza 
                  e protezione esecutiva.
                </Typography>
              </Paper>

              <Paper sx={{ p: 3, bgcolor: 'white', border: '1px solid', borderColor: 'grey.200' }}>
                <Typography variant="h6" sx={{ mb: 1, color: 'text.primary', fontWeight: 600 }}>
                  Miglioramento del Sito Web
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Per analizzare l&apos;utilizzo del sito e migliorare l&apos;esperienza utente.
                </Typography>
              </Paper>
            </Stack>
          </div>

          {/* Diritti GDPR */}
          <div>
            <Typography variant="h4" sx={{ mb: 3, color: 'text.primary', fontWeight: 600 }}>
              5. I Tuoi Diritti
            </Typography>
            <Paper sx={{ p: 4, bgcolor: 'grey.50', border: '1px solid', borderColor: 'grey.200' }}>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2, color: 'text.primary' }}>
                In conformità al GDPR, hai diritto a: accesso, rettifica, cancellazione, 
                limitazione del trattamento, portabilità dei dati e opposizione.
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                Per esercitare i tuoi diritti contattaci a: info@oracleprotectionagency.it
              </Typography>
            </Paper>
          </div>

          {/* Cookie */}
          <div>
            <Typography variant="h4" sx={{ mb: 3, color: 'text.primary', fontWeight: 600 }}>
              6. Cookie e Tecnologie di Tracciamento
            </Typography>
            <Stack spacing={2}>
              <Paper sx={{ p: 3, bgcolor: 'white', border: '1px solid', borderColor: 'grey.200' }}>
                <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 600, mb: 1 }}>
                  Cookie Necessari
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Essenziali per il funzionamento del sito (preferenze linguistiche, sicurezza).
                </Typography>
              </Paper>
              
              <Paper sx={{ p: 3, bgcolor: 'white', border: '1px solid', borderColor: 'grey.200' }}>
                <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 600, mb: 1 }}>
                  Cookie Analitici
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Ci aiutano a comprendere come i visitatori interagiscono con il sito.
                </Typography>
              </Paper>
            </Stack>
          </div>

          {/* Contatti - Solo qui usiamo il giallo */}
          <Paper sx={{ p: 4, bgcolor: 'company.main', color: 'common.black' }}>
            <Typography variant="h4" sx={{ mb: 3, color: 'common.black', fontWeight: 600 }}>
              7. Contatti
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: 'common.black' }}>
              Per qualsiasi questione relativa alla privacy o per esercitare i tuoi diritti:
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" sx={{ color: 'common.black' }}>
                <strong>Email:</strong> info@oracleprotectionagency.it
              </Typography>
              <Typography variant="body2" sx={{ color: 'common.black' }}>
                <strong>Telefono:</strong> +39 392 926 4907
              </Typography>
              <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic', color: 'common.black' }}>
                Hai anche il diritto di presentare reclamo all&apos;Autorità Garante per la 
                Protezione dei Dati Personali (www.gpdp.it).
              </Typography>
            </Stack>
          </Paper>

        </Stack>
      </Container>
    </>
  );
}
