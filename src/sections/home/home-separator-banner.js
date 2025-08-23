'use client';

import { m } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeSeparatorBanner() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      component={MotionViewport}
      sx={{
        py: { xs: 6, md: 8 },
        position: 'relative',
        bgcolor: 'rgba(147, 160, 167, 0.8)',
        backgroundImage: 'url(/assets/images/pattern.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.6)', // Overlay scuro per migliorare il contrasto
          pointerEvents: 'none',
          zIndex: 1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: `radial-gradient(circle, ${alpha(theme.palette.common.white, 0.1)} 0%, transparent 70%)`,
          pointerEvents: 'none',
          zIndex: 1,
        },
      }}
    >
      <Container>
        <Box
          sx={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 3,
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography
              variant="h4"
              sx={{
                color: 'common.white',
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '1.5rem', md: '2rem' },
                letterSpacing: '-0.01em',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)', // Ombra per maggiore contrasto
              }}
            >
              {t('home.separator_banner.title')}
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography
              variant="h6"
              sx={{
                color: alpha(theme.palette.common.white, 0.95),
                fontWeight: 400,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', md: '1.5rem' },
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)', // Ombra per maggiore contrasto
              }}
            >
              {t('home.separator_banner.subtitle')}
            </Typography>
          </m.div>

          {/* Elemento decorativo */}
          <m.div variants={varFade().inUp}>
            <Box
              sx={{
                mt: 4,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 2,
                  bgcolor: alpha(theme.palette.common.white, 0.6),
                  borderRadius: 1,
                }}
              />
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: 'common.white',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                }}
              />
              <Box
                sx={{
                  width: 60,
                  height: 2,
                  bgcolor: alpha(theme.palette.common.white, 0.6),
                  borderRadius: 1,
                }}
              />
            </Box>
          </m.div>
        </Box>
      </Container>
    </Box>
  );
}
