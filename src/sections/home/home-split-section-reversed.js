'use client';

import { m } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeSplitSectionReversed() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box component={MotionViewport} sx={{ width: '100%' }}>
      <Grid container sx={{ minHeight: { xs: 'auto', md: '70vh' } }}>
        {/* Box con immagine - Prima su desktop, seconda su mobile */}
        <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
          <Box
            sx={{
              height: { xs: 300, md: '100%' },
              backgroundImage: 'url(/assets/images/events2.jpg)', // Eventi VIP luxury
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </Grid>

        {/* Box con testo e sfondo colorato - Secondo su desktop, primo su mobile */}
        <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
          <Box
            sx={{
              height: { xs: 'auto', md: '100%' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'background.neutral', // Colore diverso per distinguerlo
              py: { xs: 8, md: 0 },
              px: { xs: 3, md: 6 },
            }}
          >
            <Box sx={{ maxWidth: 480, textAlign: 'center' }}>
              <m.div variants={varFade().inUp}>
                <Typography
                  variant="h3"
                  sx={{
                    color: 'secondary.contrastText',
                    mb: 3,
                    fontWeight: 700,
                  }}
                >
                  {t('home.split_section_reversed.title')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.5rem' },
                    color: alpha(theme.palette.secondary.contrastText, 0.8),
                    lineHeight: 1.6,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {t('home.split_section_reversed.description')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Button
                  component={RouterLink}
                  href={paths.eventi_vip}
                  color="primary"
                  size="large"
                  variant="contained"
                  endIcon={<Iconify icon="carbon:chevron-right" />}
                  sx={{
                    mt: 3,
                    bgcolor: 'company.main',
                    color: 'common.black',
                    '&:hover': {
                      bgcolor: 'company.dark',
                      color: 'common.black',
                    },
                  }}
                >
                  {t('home.split_section_reversed.button')}
                </Button>
              </m.div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}