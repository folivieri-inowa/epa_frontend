import { m } from 'framer-motion';

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
    <Box
      sx={{
        position: 'relative',
        bgcolor: 'background.neutral',
        '&:before': {
          top: 0,
          left: 0,
          width: 1,
          content: "''",
          position: 'absolute',
          bgcolor: 'background.default',
        },
      }}
    >
      <Container
        component={MotionViewport}
        sx={{
          py: { xs: 10, md: 15 },
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Grid container columnSpacing={{ md: 3 }} alignItems="flex-start">
          {mdUp && (
            <Grid container xs={12} md={4} alignItems="center" sx={{ pr: { md: 7 } }}>
              <Grid xs={12}>
                <m.div variants={varFade().inUp}>
                  <Image
                    alt="our office 2"
                    src={process.env.NEXT_PUBLIC_HOST_API+images[0].url}
                    ratio="1/1"
                    sx={{ borderRadius: 3, boxShadow: shadow }}
                  />
                </m.div>
              </Grid>
            </Grid>
          )}

          <Grid xs={12} md={8}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h2" sx={{ mb: 2, color: 'primary.main' }}>
                {title}
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography
                variant="h5"
                sx={{
                  color: 'common.white',
                  textAlign: 'justify'
                }}
              >
                è una delle agenzie leader a livello internazionale nel settore della protezione operativa, della gestione della sicurezza e delle soluzioni antiterrorismo.
                <br />
                Con un team di esperti altamente qualificati, abbiamo acquisito una reputazione consolidata avendo protetto persone, beni e infrastrutture di massimo valore in contesti di elevato rischio, sia in Italia che all'estero.
              </Typography>
            </m.div>

            {/* <Stack spacing={3} sx={{ my: 5 }}>
              {skills.map((progress, index) => (
                <Box component={m.div} key={progress.label} variants={varFade().inRight}>
                  <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
                    <Typography variant="subtitle2" sx={{ flexGrow: 1, textAlign: 'left' }}>
                      {progress.label}
                    </Typography>

                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {progress.value}
                    </Typography>
                  </Stack>

                  <LinearProgress
                    color={(index === 0 && 'primary') || (index === 1 && 'warning') || 'error'}
                    variant="determinate"
                    value={progress.value}
                  />
                </Box>
              ))}
            </Stack> */}
          </Grid>
        </Grid>
        <Grid container columnSpacing={{ md: 3 }} alignItems="flex-start">
          <Grid xs={12} md={8} mt={4}>
            <m.div variants={varFade().inRight}>
              <Typography
                variant="h5"
                sx={{
                  color: 'common.white',
                  textAlign: 'justify',
                  mt:4
                }}
              >
                Siamo conosciuti per la capacità di affrontare le minacce con discrezione, competenza e precisione, assicurando risultati tangibili e soluzioni su misura per ogni esigenza di protezione.
                <br />
                Il nostro approccio si distingue per l’innovazione e l'alta tecnologia impiegata, unita a un'attenzione meticolosa ai dettagli e una solida rete di collaborazioni con enti governativi, forze di polizia e agenzie di intelligence.
                <br/>
                La nostra missione è garantire la sicurezza e la tranquillità dei nostri clienti, indipendentemente dalle sfide e dalle minacce che possano presentarsi, sempre con il massimo livello di professionalità e riservatezza
              </Typography>
            </m.div>
          </Grid>
          {mdUp && ( <Grid xs={4}>
            <m.div variants={varFade().inUp}>
              <Image
                alt="our office 1"
                src={process.env.NEXT_PUBLIC_HOST_API+images[1].url}
                ratio="3/4"
                sx={{ borderRadius: 3, boxShadow: shadow }}
              />
            </m.div>
          </Grid>)}
        </Grid>
      </Container>
    </Box>
  );
}
