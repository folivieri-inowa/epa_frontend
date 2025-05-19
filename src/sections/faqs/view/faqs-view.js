'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import FaqsHero from '../faqs-hero';
import FaqsList from '../faqs-list';
import FaqsForm from '../faqs-form';
import FaqsCategory from '../faqs-category';

// ----------------------------------------------------------------------

export default function FaqsView() {
  return (
    <>
      <FaqsHero/>

      <Container
        sx={{
          pb: 10,
          pt: {xs: 10, md: 15},
          position: 'relative',
        }}
      >
        <Box>
          <Typography variant="h2" align="left" paragraph>
            Informativa sulla Privacy
          </Typography>
          <Typography variant="h4" align="left" sx={{color: 'text.secondary'}}>
            Titolare del Trattamento dei Dati
          </Typography>
          <Typography variant="body1" align="left" paragraph>
            Nome e Cognome del Titolare del Trattamento: Emanuele Mattera
          </Typography>
       {/*   <Typography variant="body1" align="left" paragraph>
            Indirizzo della Sede Legale del Titolare del Trattamento: [Indirizzo della Sede Legale]
          </Typography>*/}
          <Typography variant="body1" align="left" paragraph>
            Indirizzo Email del Titolare del Trattamento: e.mattera@protectionagency.it
          </Typography>
          <Typography variant="body1" align="left" paragraph>
            Numero di Telefono del Titolare del Trattamento: 392 926 4907
          </Typography>
         {/* <Typography variant="body1" align="left" paragraph>
            [Partita IVA (se applicabile)]
          </Typography>*/}

          <Typography variant="h4" align="left" sx={{color: 'text.secondary'}}>
            Responsabile della Protezione dei Dati (DPO)
          </Typography>
          <Typography variant="body1" align="left" paragraph>
            Nome e Cognome del DPO: Emanuele Mattera
          </Typography>
          <Typography variant="body1" align="left" paragraph>
            Indirizzo Email del DPO: e.mattera@protectionagency.it
          </Typography>

          <Typography variant="h4" align="left" sx={{color: 'text.secondary'}}>
            Finalità del Trattamento dei Dati
          </Typography>
          <Typography variant="body1" align="left" paragraph>
            I dati personali raccolti tramite il form di contatto (nome completo, email, oggetto del messaggio) vengono
            trattati esclusivamente per le seguenti finalità:
          </Typography>
          <Typography variant="body1" align="left" paragraph>
            Gestione e risposta alle richieste di informazioni e contatto da parte degli utenti del sito.
          </Typography>
          <Typography variant="body1" align="left" paragraph>
            Invio di comunicazioni relative alle richieste di informazioni.
          </Typography>
          <Typography variant="body1" align="left" paragraph>
            Eventuale contatto successivo per fornire chiarimenti o approfondimenti, se necessario.
          </Typography>

          <Typography variant="h4" align="left" sx={{color: 'text.secondary'}}>
            Base Giuridica del Trattamento
          </Typography>
          <Typography variant="body1" align="left" paragraph>
            La base giuridica del trattamento dei dati personali è il consenso dell'utente, espresso mediante l'invio
            volontario del form di contatto.
          </Typography>

          <Typography variant="h4" align="left" sx={{color: 'text.secondary'}}>
            Modalità del Trattamento
          </Typography>
          <Typography variant="body1" align="left" paragraph>
            I dati personali sono trattati con strumenti informatici e/o manuali, nel rispetto delle misure di sicurezza
            previste dal GDPR, al fine di garantire la loro integrità, riservatezza e disponibilità.
          </Typography>

          <Typography variant="h4" align="left" sx={{color: 'text.secondary'}}>
            Destinatari dei Dati
          </Typography>
          <Typography variant="body1" align="left" paragraph>
            I dati personali raccolti non saranno comunicati a terzi, salvo obblighi di legge o qualora sia necessario
            per adempiere alle finalità del trattamento (es. fornitori di servizi tecnici incaricati del funzionamento
            del sito web e della gestione della posta elettronica). In tali casi, il trasferimento dei dati avverrà nel
            rispetto delle disposizioni del GDPR.
          </Typography>

          <Typography variant="h4" align="left" sx={{color: 'text.secondary'}}>
            Periodo di Conservazione dei Dati
          </Typography>
          <Typography variant="body1" align="left" paragraph>
            I dati personali saranno conservati per il tempo necessario a soddisfare le finalità del trattamento e,
            comunque, non oltre 12 mesi dalla ricezione della richiesta di contatto.
          </Typography>

          <Typography variant="h4" align="left" sx={{color: 'text.secondary'}}>
            Diritti dell'Interessato
          </Typography>
          <Typography variant="body1" align="left" paragraph>
            L'utente ha diritto di accedere ai propri dati personali, di chiederne la rettifica, la cancellazione
            (diritto all'oblio) o la limitazione del trattamento, nonché di opporsi al loro trattamento. Ha inoltre
            diritto di ricevere i dati personali in un formato strutturato, di uso comune e leggibile da dispositivo
            automatico (portabilità dei dati).
          </Typography>
          <Typography variant="body1" align="left" paragraph>
            Per esercitare tali diritti, l'utente può contattare il Titolare del Trattamento ai recapiti indicati nella
            presente informativa.
          </Typography>

          <Typography variant="h4" align="left" sx={{color: 'text.secondary'}}>
            Diritto di Reclamo
          </Typography>
          <Typography variant="body1" align="left" paragraph>
            L'utente ha diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali
            (www.garanteprivacy.it), qualora ritenga che il trattamento dei propri dati personali violi le disposizioni
            del GDPR.
          </Typography>

          <Typography variant="h4" align="left" sx={{color: 'text.secondary'}}>
            Natura del Conferimento dei Dati
          </Typography>
          <Typography variant="body1" align="left" paragraph>
            Il conferimento dei dati personali tramite il form di contatto è facoltativo, ma l'eventuale mancato
            conferimento potrebbe rendere impossibile l'invio della richiesta e, di conseguenza, la possibilità di
            essere ricontattati.
          </Typography>

          <Typography variant="h4" align="left" sx={{color: 'text.secondary'}}>
            Cookie
          </Typography>
          <Typography variant="body1" align="left" paragraph>
            Questo sito web utilizza esclusivamente cookie tecnici necessari al funzionamento del sito e per garantire
            una migliore esperienza di navigazione. Non vengono utilizzati cookie di profilazione o di terze parti.
          </Typography>

          <Typography variant="h4" align="left" sx={{color: 'text.secondary'}}>
            Modifiche all'Informativa sulla Privacy
          </Typography>
          <Typography variant="body1" align="left" paragraph>
            La presente informativa sulla privacy potrà essere aggiornata nel tempo per adeguarla a eventuali modifiche
            normative o alle modalità del trattamento dei dati. Si invita l'utente a consultarla periodicamente.
          </Typography>

          <Typography variant="h4" align="left" sx={{color: 'text.secondary'}}>
            Contatti
          </Typography>
          <Typography variant="body1" align="left" paragraph>
            Per qualsiasi domanda o richiesta relativa alla presente informativa sulla privacy, è possibile contattare
            il Titolare del Trattamento ai recapiti indicati all'inizio del documento.
          </Typography>

          <Typography variant="h4" align="left" sx={{color: 'text.secondary'}}>
            Data di Aggiornamento
          </Typography>
          <Typography variant="body1" align="left" paragraph>
            5/02/2025
          </Typography>
        </Box>
      </Container>
    </>
  );
}
