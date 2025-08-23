import useCompanyColors from 'src/hooks/use-company-colors';
import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';

import { varFade, MotionViewport } from 'src/components/animate';
import Image from 'src/components/image';
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const ITEMS = [
  {
    title: 'Ville e Residenze di Lusso',
    description: 'Soluzioni di security management su misura per ville, residenze e dimore esclusive, conformi agli standard internazionali, per garantire serentità e privacy.',
    image: '/assets/images/home/dimore.png',
    path: paths.security_management,
  },
  {
    title: 'Hotel e Hospitality',
    description: 'Soluzioni di Security Management su misura per garantire protezione e serenità ai tuoi ospiti VIP, conformi agli standard internazionali.',
    image: '/assets/images/home/hotel.png',
    path: paths.hotel_security_management,
  },
  {
    title: 'Travel Risk Management',
    description:
      'Protezione personalizzata per viaggi d’affari e di piacere, con competenza globale e standard internazionali.',
    image: '/assets/images/home/travel.png',
    path: paths.risk_travel_management,
  },
  {
    title: 'Eventi VIP',
    description:
      'Soluzioni di Security Management su misura per garantire eventi esclusivi sicuri e senza intoppi, conformi agli standard internazionali.',
    image: '/assets/images/events3.jpg',
    path: paths.eventi_vip,
  },
  {
    title: 'Corporate, Infrastrutture e Siti Sensibili',
    description:
      'Soluzioni di Security Management su misura per aziende, infrastrutture critiche e siti ad alta sicurezza, conformi agli standard internazionali.',
    image: '/assets/images/home/corporate.png',
    path: paths.corporate_infrastrutture,
  },
  {
    title: 'Anti Terrorismo',
    description:
      'Soluzioni avanzate di sicurezza antiterrorismo per istituzioni, aziende e siti critici, progettate per prevenire, proteggere e rispondere alle minacce, conformi agli standard internazionali.',
    image: '/assets/images/home/antiterrorismo.png',
    path: paths.anti_terrorism,
  },
];

// ----------------------------------------------------------------------

export default function HomeAlternatingSection() {
  const { t } = useTranslation();
  const theme = useTheme();
  const companyColors = useCompanyColors();

  // Usa le traduzioni invece dell'array statico
  const items = t('home.alternatingSection.items', { returnObjects: true }) || [];
  
  // Mapping per immagini e path (rimangono hardcoded perché sono asset)
  const assetsMapping = [
    { image: '/assets/images/home/dimore.png', path: paths.security_management },
    { image: '/assets/images/home/hotel.png', path: paths.hotel_security_management },
    { image: '/assets/images/home/travel.png', path: paths.risk_travel_management },
    { image: '/assets/images/home/eventi.png', path: paths.eventi },
    { image: '/assets/images/home/corporate.png', path: paths.corporate },
    { image: '/assets/images/home/antiterrorismo.png', path: paths.antiterrorism },
  ];

  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 }, // Ridotto il padding verticale
        bgcolor: 'background.neutral',
        position: 'relative',
        zIndex: 1,
        mt: { xs: 0, md: 0 } // Eliminato il margine superiore
      }}
    >
      <Container component={MotionViewport} sx={{ position: 'relative' }}>
      <m.div variants={varFade().inUp}>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: { xs: 10, md: 15 },
              fontWeight: 'bold', // Aggiunto grassetto per aumentare visibilità
              fontSize: { xs: '2rem', md: '2.5rem' }, // Dimensione del font esplicita
            }}
          >
            I Nostri Servizi Specializzati
          </Typography>
        </m.div>
        </Container>
      <Container component={MotionViewport} sx={{ position: 'relative' }}>
        {items.map((item, index) => {
          // Ottieni asset corrispondente
          const assets = assetsMapping[index] || {};
          // Alternanza corretta: primo e terzo con immagine a sinistra, secondo con immagine a destra
          const imageFirst = index % 2 === 0;
          
          return (
            <Box
              key={item.title}
              sx={{ 
                position: 'relative',
                mb: { xs: 12, md: 20 }, // Aumentato lo spazio tra le sezioni
                ...(index === items.length - 1 && { mb: 0 }),
              }}
            >
              <Grid
                container
                spacing={{ xs: 6, md: 10 }} // Aumentato lo spacing tra elementi
                alignItems="center"
                direction={{ xs: 'column', md: imageFirst ? 'row' : 'row-reverse' }} // Rispetta alternanza
              >
                {/* Rispetta alternanza su desktop, ma mostra sempre l'immagine per prima su mobile */}
                <Grid item xs={12} md={6}>
                  <Box sx={{ width: '100%' }}>
                    <img
                      alt={item.title}
                      src={assets.image}
                      style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '8px',
                        boxShadow: theme.customShadows.z24,
                        display: 'block'
                      }}
                    />
                  </Box>
                </Grid>

                {/* Per il desktop, mostra sempre il testo a destra */}
                <Grid item xs={12} md={6}>
                  <m.div 
                    variants={varFade().inUp} 
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    <Typography variant="h3" sx={{ mb: 3, color: 'company.main' }}>
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        lineHeight: 1.8, // Migliorato l'interlinea
                        mb: 3,
                        fontSize: { xs: '1.1rem', md: '1.5rem' }
                      }}
                    >
                      {item.description}
                    </Typography>
                    
                    <Button
                      variant="contained"
                      component={RouterLink}
                      href={assets.path}
                      startIcon={<Iconify icon="carbon:arrow-right" />}
                      sx={{
                        bgcolor: 'company.main',
                        '&:hover': {
                          bgcolor: 'company.dark',
                        },
                      }}
                    >
                      Scopri di più
                    </Button>
                  </m.div>
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
}
