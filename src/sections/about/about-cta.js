import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function AboutCTA() {
  const theme = useTheme();

  return (
    <Container component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 10, md: 15 } }}>
      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ mt: 2, mb: 5, color: 'primary.main' }}>
          Affidati all'eccellenza di EPA
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography sx={{ color: 'text.secondary', mb: 5 }}>
          Scopri come Executive Protection Agency può proteggere il tuo mondo con soluzioni di sicurezza personalizzate.
          Contattaci per una consulenza gratuita e unisciti ai nostri clienti che si affidano alla nostra esperienza globale.
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} justifyContent="center">
          <Button
            component={RouterLink}
            href={paths.contact}
            color="primary"
            size="large"
            variant="contained"
            startIcon={<Iconify icon="carbon:email" />}
            sx={{
              bgcolor: 'rgb(255, 215, 0)',
              '&:hover': {
                bgcolor: alpha('rgb(255, 215, 0)', 0.8),
              },
            }}
          >
            Contattaci
          </Button>
          
          <Button
            component={RouterLink}
            href={paths.services}
            color="primary"
            size="large"
            variant="outlined"
            startIcon={<Iconify icon="carbon:security" />}
            sx={{
              color: 'rgb(255, 215, 0)',
              borderColor: 'rgb(255, 215, 0)',
              '&:hover': {
                borderColor: alpha('rgb(255, 215, 0)', 0.8),
                bgcolor: alpha('rgb(255, 215, 0)', 0.08),
              },
            }}
          >
            Scopri i nostri servizi
          </Button>
        </Stack>
      </m.div>

      <Box
        sx={{
          mt: 10,
          position: 'relative',
        }}
      >
        <m.div variants={varFade().inUp}>
          <Image
            alt="city skyline security"
            src="/assets/images/about/testimonials.jpg"
            ratio="16/9"
            sx={{
              borderRadius: 2,
              boxShadow: (theme) => theme.customShadows.z24,
            }}
          />
        </m.div>
      </Box>
    </Container>
  );
}
