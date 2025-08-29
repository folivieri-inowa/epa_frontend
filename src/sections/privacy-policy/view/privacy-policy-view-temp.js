'use client';

import { useTranslation } from 'react-i18next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function PrivacyPolicyView() {
  const { t } = useTranslation();

  return (
    <Container sx={{ py: 10 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h1" sx={{ mb: 3, fontWeight: 700 }}>
          Privacy Policy
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Informativa sulla Privacy di Oracle Executive Protection
        </Typography>
      </Box>
      
      <Stack spacing={6}>
        {/* 1. Introduzione */}
        <Box>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
            1. Introduzione
          </Typography>
          <Box sx={{ p: 4, border: '1px solid', borderColor: 'grey.300', borderRadius: 1, bgcolor: 'transparent' }}>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
              Oracle Executive Protection si impegna a proteggere la privacy e la sicurezza 
              dei dati personali dei nostri utenti. Questa informativa descrive come 
              raccogliamo, utilizziamo e proteggiamo le informazioni personali secondo 
              il GDPR e la normativa italiana.
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
            </Typography>
          </Box>
        </Box>

        {/* 2. Titolare */}
        <Box>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
            2. Titolare del Trattamento
          </Typography>
          <Box sx={{ p: 3, border: '1px solid', borderColor: 'grey.300', borderRadius: 1, bgcolor: 'transparent' }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
              Oracle Executive Protection
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              Email: info@oracleprotectionagency.it
            </Typography>
            <Typography variant="body2">
              Telefono: +39 392 926 4907
            </Typography>
          </Box>
        </Box>

        {/* 3. Dati Raccolti */}
        <Box>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
            3. Dati Personali Raccolti
          </Typography>
          
          <Stack spacing={3}>
            <Box sx={{ p: 3, borderLeft: '4px solid', borderLeftColor: 'primary.main', bgcolor: 'transparent' }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Dati di Contatto
              </Typography>
              <List dense>
                <ListItem><ListItemText primary="Nome e cognome" /></ListItem>
                <ListItem><ListItemText primary="Indirizzo email" /></ListItem>
                <ListItem><ListItemText primary="Numero di telefono" /></ListItem>
                <ListItem><ListItemText primary="Messaggio e richieste" /></ListItem>
              </List>
            </Box>

            <Box sx={{ p: 3, borderLeft: '4px solid', borderLeftColor: 'grey.400', bgcolor: 'transparent' }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Dati Tecnici
              </Typography>
              <List dense>
                <ListItem><ListItemText primary="Indirizzo IP" /></ListItem>
                <ListItem><ListItemText primary="Tipo di browser" /></ListItem>
                <ListItem><ListItemText primary="Preferenze linguistiche" /></ListItem>
              </List>
            </Box>
          </Stack>
        </Box>

        {/* 4. Finalità */}
        <Box>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
            4. Finalità del Trattamento
          </Typography>
          <Stack spacing={2}>
            <Box sx={{ p: 3, bgcolor: 'transparent' }}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                Gestione Richieste
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Rispondere alle richieste sui nostri servizi di sicurezza.
              </Typography>
            </Box>
            <Box sx={{ p: 3, bgcolor: 'transparent' }}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                Miglioramento Sito
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Analizzare l'uso del sito per migliorare l'esperienza utente.
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* 5. Diritti */}
        <Box>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
            5. I Tuoi Diritti GDPR
          </Typography>
          <Box sx={{ p: 4, border: '1px solid', borderColor: 'grey.300', borderRadius: 1, bgcolor: 'transparent' }}>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
              Hai diritto a: accesso, rettifica, cancellazione, limitazione, 
              portabilità e opposizione al trattamento dei tuoi dati.
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Contattaci: info@oracleprotectionagency.it
            </Typography>
          </Box>
        </Box>

        {/* 6. Cookie */}
        <Box>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
            6. Cookie
          </Typography>
          <Stack spacing={2}>
            <Box sx={{ p: 3, bgcolor: 'transparent' }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>Cookie Necessari</Typography>
              <Typography variant="body2" color="text.secondary">
                Essenziali per il funzionamento (preferenze lingua, sicurezza).
              </Typography>
            </Box>
            <Box sx={{ p: 3, bgcolor: 'transparent' }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>Cookie Analitici</Typography>
              <Typography variant="body2" color="text.secondary">
                Per comprendere l'interazione dei visitatori con il sito.
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* 7. Contatti - Qui usiamo il giallo */}
        <Paper sx={{ p: 4, bgcolor: 'company.main', color: 'common.black' }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: 'inherit' }}>
            7. Contatti Privacy
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: 'inherit' }}>
            Per questioni sulla privacy o esercitare i tuoi diritti:
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, color: 'inherit' }}>
            <strong>Email:</strong> info@oracleprotectionagency.it
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'inherit' }}>
            <strong>Telefono:</strong> +39 392 926 4907
          </Typography>
          <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'inherit' }}>
            Puoi anche contattare il Garante Privacy (www.gpdp.it)
          </Typography>
        </Paper>
      </Stack>
    </Container>
  );
}
