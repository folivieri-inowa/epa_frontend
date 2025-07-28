// filepath: /Users/francescoolivieri/Desktop/Sviluppo inowa/epa/epa/src/sections/about/about-what.js
import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';

import { useResponsive } from 'src/hooks/use-responsive';

import { fPercent } from 'src/utils/format-number';

import Image from 'src/components/image';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function AboutWhat({title, subtitle, images, skills}) {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const lightMode = theme.palette.mode === 'light';

  const shadow = `-40px 40px 80px ${alpha(
    lightMode ? theme.palette.grey[500] : theme.palette.common.black,
    0.24
  )}`;

  return (
    <Box>
      <Container
        component={MotionViewport}
        sx={{
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Grid container columnSpacing={{ md: 10 }} alignItems="flex-start">
            <Grid container xs={12} md={5} alignItems="center" sx={{ pr: { md: 7 } }}>
              <Grid xs={12}>
                <m.div variants={varFade().inUp}>
                  <Image
                    alt="our office 2"
                    src={images[0].url}
                    ratio="1/1"
                    sx={{ borderRadius: 3, boxShadow: shadow }}
                  />
                </m.div>
              </Grid>
            </Grid>

          <Grid xs={12} md={7}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h2" sx={{ mb: 3, color: 'primary.main' }}>
                {title}
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography
                sx={{
                  fontSize: '1.325rem',
                  textAlign: 'justify'
                }}
              >
                Fondata in Italia, Executive Protection Agency è un punto di riferimento globale nella sicurezza d’élite, con un background di oltre 30 anni di esperienza nella protezione di soggetti istituzionali, infrastrutture, aziende multinazionali, hotel di lusso, eventi VIP e dimore private.
                <br /><br />
                La nostra missione è garantire la tua sicurezza con discrezione, innovazione e un approccio personalizzato. Operiamo combinando l’expertise di ex funzionari forze dell’ordine, militari e operatori di sicurezza privata con esperienza globale nella Protezione esecutiva e nel Security Management con tecnologie all’avanguardia e standard internazionali come UNI ISO 31000 (Gestione del rischio), ISO/IEC 27002 e 27005 (Sicurezza delle informazioni), ISO 28000 (Sicurezza della supply chain), ISO 22301 (Continuità operativa) e UNI ISO 31030 (Travel Risk Management). Ogni servizio, dal Travel Risk Management all’Anti Terrorismo, è progettato per offrirti tranquillità, ovunque tu sia.
                La nostra storia è una promessa: trasformare la sicurezza in tranquillità. Ogni missione ci ha resi più forti, aﬃnando la nostra capacità di anticipare le minacce e creare soluzioni su misura che proteggono cio che ami.
              </Typography>
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

AboutWhat.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
  })).isRequired,
  skills: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  })),
};
