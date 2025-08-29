'use client';

import { m } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';

import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeStandards() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box sx={{ py: { xs: 10, md: 15 } }}>
      <Container component={MotionViewport}>
        <m.div variants={varFade().inUp}>
          <Typography
            variant="overline"
            sx={{ 
              color: 'company.main', 
              fontWeight: 'fontWeightBold',
              textAlign: 'center',
              display: 'block',
              mb: 2
            }}
          >
            {t('strategicProtection.certifications.overline')}
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography 
            variant="h3" 
            sx={{ 
              textAlign: 'center',
              mb: 3,
              fontWeight: 700,
              color: theme.palette.text.primary
            }}
          >
            {t('strategicProtection.certifications.title')}
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography 
            sx={{ 
              fontSize: { xs: '1rem', md: '1.1rem' },
              textAlign: 'center',
              maxWidth: '900px',
              mx: 'auto',
              mb: 6,
              lineHeight: 1.8,
              color: theme.palette.text.primary
            }}
          >
            {t('strategicProtection.certifications.subtitle')}
          </Typography>
        </m.div>

        <Grid container spacing={3} alignItems="stretch" sx={{ minHeight: { md: 250 } }}>
          {(Array.isArray(t('strategicProtection.certifications.items', { returnObjects: true })) 
            ? t('strategicProtection.certifications.items', { returnObjects: true }) 
            : []
          ).map((certification, index) => (
            <Grid key={certification.title} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex' }}>
              <m.div variants={varFade().inUp} style={{ width: '100%', display: 'flex' }}>
                <Card 
                  sx={{ 
                    p: 3, 
                    height: 1,
                    width: 1,
                    minHeight: 180,
                    bgcolor: 'background.paper',
                    border: '2px solid',
                    borderColor: 'grey.300',
                    boxShadow: (theme) => theme.customShadows.z12,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'company.main',
                      transform: 'translateY(-4px)',
                      boxShadow: (theme) => theme.customShadows.z24
                    }
                  }}
                >
                  <CardContent sx={{ p: 0, height: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: theme.palette.text.primary,
                        fontWeight: 'fontWeightBold',
                        mb: 1,
                        fontSize: { xs: '1rem', md: '1.1rem' }
                      }}
                    >
                      {certification.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'company.main',
                        fontSize: { xs: '0.8rem', md: '0.85rem' },
                        fontWeight: 500,
                        mb: 2
                      }}
                    >
                      {certification.organization}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: theme.palette.text.secondary,
                        fontSize: { xs: '0.85rem', md: '0.9rem' },
                        lineHeight: 1.5,
                        flexGrow: 1
                      }}
                    >
                      {certification.description}
                    </Typography>
                  </CardContent>
                </Card>
              </m.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
