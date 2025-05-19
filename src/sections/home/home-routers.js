import { MotionViewport, varFade } from '../../components/animate';
import Container from '@mui/material/Container';
import { m } from 'framer-motion';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

export default function HomeRouters() {
  const data = [
    {
      title: 'Security Management',
      subtitle: 'Dalla valutazione dei rischi all’implementazione di strategie efficaci',
      description:
        'Affidarsi a chi è specializzato nella protezione aziendale è fondamentale per operare in sicurezza e con serenità. Ogni aspetto del nostro approccio alla sicurezza è attentamente studiato per rispondere alle esigenze specifiche della tua azienda e per prevenire ogni potenziale rischio. Grazie al nostro servizio di security management su misura, puoi contare su un supporto che salvaguarda la tua operatività e ti permette di concentrarti sulle tue attività senza preoccupazioni',
    },
    {
      title: 'Executive Protection',
      subtitle: 'Sicurezza che ti segue ovunque',
      description:
        'Per chi vive sotto i riflettori, una protezione discreta è fondamentale. Il nostro team\n' +
        '            di Executive Protection offre un servizio personalizzato, progettato per garantire la\n' +
        '            massima sicurezza senza compromettere la tua privacy. Siamo al tuo fianco per\n' +
        '            proteggerti con professionalità e discrezione, preservando il tuo spazio personale e\n' +
        '            rispettando ogni tua esigenza.',
    },
    {
      title: 'Gestione delle Crisi',
      subtitle: 'Risposte rapide per situazioni critiche',
      description:'Le situazioni critiche richiedono risposte tempestive e decise. Con la nostra esperienza\n' +
        '            nella gestione delle crisi, siamo pronti a intervenire per garantire la sicurezza tua e\n' +
        '            del tuo team. In ogni emergenza, il nostro obiettivo prioritario è proteggere persone e\n' +
        '            beni, assicurando una gestione efficace e puntuale, capace di affrontare qualsiasi tipo\n' +
        '            di scenario critico.',
    },
    {
      title: 'Risk Assessment',
      subtitle: 'Analisi accurata per un controllo strategico dei rischi',
      description: 'Conoscere i rischi significa già avere un vantaggio nel controllo degli stessi. Il\n' +
        '            nostro servizio di Risk Assessment identifica le vulnerabilità e le minacce,\n' +
        '            consentendoti di prendere decisioni informate e strategiche. Grazie a un’analisi\n' +
        '            approfondita, creiamo una protezione solida per il tuo business, intervenendo prima che\n' +
        '            i potenziali pericoli si trasformino in problemi concreti',
    },
  ];

  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: 'left',
          mb: { xs: 5, md: 1 },
        }}
      >
        {data.map((card, index) => (
          <Box key={index} sx={{my: 5}}>
            <m.div variants={varFade().inDown}>
              <Typography variant="h3" sx={{ color: 'rgb(246,142,59)' }}>
                {card.title}
              </Typography>
            </m.div>

            <m.div variants={varFade().inDown} animate={{ x: 100 }} transition={{ duration: 0.3, delay: 1, ease: "linear" }}>
              <Divider sx={{ width: '100%', borderWidth: 2, borderColor: 'text.primary' }} />
            </m.div>

            <m.div variants={varFade().inDown}>
              <Typography variant="h4" sx={{ fontStyle: 'italic' }}>
                {card.subtitle}
              </Typography>
            </m.div>

            <Box

              gap={{ xs: 3, lg: 5 }}
              display="grid"
              alignItems="flex-start"
              justifyContent="flex-start"
              sx={{
                mt: 3,
                ml: { xs: 4, md: 20 },
              }}
            >
              <m.div variants={varFade().inUp}>
                <Box sx={{ padding: 2, borderLeft: '4px solid #F68E3BFF', margin: 2 }}>
                  <Typography variant="h5" sx={{ fontStyle: 'italic' }}>
                    {card.description}
                  </Typography>
                </Box>
              </m.div>
            </Box>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}
