'use client';

import { m } from 'framer-motion';
import { alpha, useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import useCompanyColors from 'src/hooks/use-company-colors';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomePillars() {
  const { t } = useTranslation();
  const theme = useTheme();
  const companyColors = useCompanyColors();

  const lightMode = theme.palette.mode === 'light';

  // Usa le traduzioni invece dell'array statico
  const pillars = t('home.pillars.items', { returnObjects: true }) || [];

  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        bgcolor: 'rgba(147, 160, 167, 0.8)',
        // Utilizzo dell'immagine topografica fornita
        backgroundImage: 'url(/assets/images/pattern.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        // Overlay scuro per uniformità con gli altri componenti
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.6)', // Stesso overlay del banner separatore
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
      <Container component={MotionViewport} sx={{ position: 'relative', zIndex: 2 }}>
        <m.div variants={varFade().inUp}>
          <Typography 
            variant="h3" 
            sx={{ 
              textAlign: 'center', 
              mb: { xs: 5, md: 8 },
              color: 'common.white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              fontWeight: 700,
            }}
          >
            {t('home.pillars.title')}
          </Typography>
        </m.div>

        <Grid container spacing={3}>
          {pillars.map((item, idx) => (
            <Grid key={item.title || idx} xs={12} md={6} lg={3}>
              <m.div variants={varFade().inUp}>
                <Card
                  sx={{
                    height: { xs: 'auto', md: 280 },
                    minHeight: { xs: 220, md: 380 },
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    bgcolor: 'rgba(147, 160, 167, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: `2px solid rgba(255, 255, 255, 0.3)`,
                    boxShadow: `
                      -12px 12px 32px rgba(0, 0, 0, 0.15),
                      inset 0 1px 0 rgba(255, 255, 255, 0.4)
                    `,
                    transition: theme.transitions.create(['transform', 'box-shadow', 'border'], {
                      duration: theme.transitions.duration.shorter,
                    }),
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      border: `2px solid rgba(255, 255, 255, 0.5)`,
                      boxShadow: `
                        -16px 16px 48px rgba(0, 0, 0, 0.2),
                        inset 0 1px 0 rgba(255, 255, 255, 0.6)
                      `,
                    },
                  }}
                >
                  <Stack spacing={1.5}>
                    <Typography variant="h6">
                      {item.title}
                    </Typography>
                    <Typography>{item.description}</Typography>
                  </Stack>
                </Card>
              </m.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
