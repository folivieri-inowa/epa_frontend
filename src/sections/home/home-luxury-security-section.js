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

export default function HomeLuxurySecuritySection() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box component={MotionViewport} sx={{ width: '100%' }}>
      <Grid container sx={{ minHeight: { xs: 'auto', md: '70vh' } }}>
        {/* Box con testo e sfondo colorato - Prima posizione */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: { xs: 'auto', md: '100%' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'background.neutral',
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
                    mt: 3,
                    fontWeight: 700,
                    px: 2,
                  }}
                >
                  {t('home.luxury_security_section.title')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.5rem' },
                    color: alpha(theme.palette.secondary.contrastText, 0.8),
                    lineHeight: 1.6,
                    whiteSpace: 'pre-line',
                    px: 2,
                    mb: 2,
                  }}
                >
                  {t('home.luxury_security_section.description')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Button
                  component={RouterLink}
                  href={paths.luxury_security}
                  color="primary"
                  size="large"
                  variant="contained"
                  endIcon={<Iconify icon="carbon:chevron-right" />}
                  sx={{
                    mt: 4,
                    mb: 3,
                    bgcolor: 'company.main',
                    color: 'common.black',
                    '&:hover': {
                      bgcolor: 'company.dark',
                      color: 'common.black',
                    },
                  }}
                >
                  {t('home.luxury_security_section.button')}
                </Button>
              </m.div>
            </Box>
          </Box>
        </Grid>

        {/* Box con immagine - Seconda posizione */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: { xs: 300, md: '100%' },
              backgroundImage: 'url(/assets/images/ab5b15_d2c841fdde8743b3b4eff80254c92661~mv2.avif)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
