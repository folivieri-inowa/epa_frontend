import useCompanyColors from 'src/hooks/use-company-colors';
import { m } from 'framer-motion';
import { alpha, useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import { paths } from 'src/routes/paths';
import { useResponsive } from 'src/hooks/use-responsive';
import { RouterLink } from 'src/routes/components';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeAbout() {
  const theme = useTheme();
  const companyColors = useCompanyColors();
  
  const lightMode = theme.palette.mode === 'light';
  
  const shadow = `-40px 40px 80px ${alpha(
    lightMode ? theme.palette.grey[500] : theme.palette.common.black,
    0.24
  )}`;

  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Grid container spacing={3} alignItems="center">
        {/* Always show image on all breakpoints */}
        <Grid xs={12} md={7}>
          <m.div variants={varFade().inLeft}>
            <Image
              alt="security expertise"
              src="/assets/images/about/chi-siamo.png"
              ratio="16/9"
              sx={{ borderRadius: 2, boxShadow: shadow }}
            />
          </m.div>
        </Grid>

        {/* Text content */}
        <Grid xs={12} md={5}>
          <Stack spacing={3}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h3" sx={{ mb: 3, color: 'company.main' }}>
                I tuoi partner per la sicurezza d'eccellenza
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography sx={{ fontSize: '1.5rem' }}>
                Fondata sull’esperienza, guidata dall’innovazione: proteggiamo il tuo mondo con discrezione e professionalità, ovunque tu sia
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Button
                component={RouterLink}
                href={paths.about}
                color="primary"
                size="large"
                variant="contained"
                endIcon={<Iconify icon="carbon:chevron-right" />}
                sx={{
                  mt: 3,
                  bgcolor: 'company.main',
                  '&:hover': {
                    bgcolor: 'company.dark',
                  },
                }}
              >
                Scopri di più su di noi
              </Button>
            </m.div>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}