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
import { useStrapiHome } from 'src/hooks/use-strapi';
import { varFade, MotionViewport } from 'src/components/animate';
import Iconify from 'src/components/iconify';
import HtmlText from 'src/components/html-text';

// ----------------------------------------------------------------------

export default function HomeSplitSection() {
  const { t } = useTranslation();
  const theme = useTheme();
  const { splitSectionComponent } = useStrapiHome();

  // Utilizza i dati da Strapi con fallback alle traduzioni
  const title = splitSectionComponent?.title || t('home.split_section.title');
  const subtitle = splitSectionComponent?.subtitle || t('home.split_section.subtitle');
  const description = splitSectionComponent?.description || t('home.split_section.description');
  const ctaText = splitSectionComponent?.cta_text || t('home.split_section.button');
  const ctaLink = splitSectionComponent?.cta_link || paths.travel_risk_management || '/travel-risk-management';
  const features = splitSectionComponent?.features || [];

  return (
    <Box component={MotionViewport} sx={{ width: '100%' }}>
      <Grid container sx={{ minHeight: { xs: 'auto', md: '70vh' } }}>
        {/* Box con testo e sfondo colorato */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: { xs: 'auto', md: '100%' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'background.neutral', // Puoi cambiare questo colore
              py: { xs: 8, md: 0 },
              px: { xs: 3, md: 6 },
            }}
          >
            <Box sx={{ maxWidth: 480, textAlign: 'center' }}>
              <m.div variants={varFade().inUp}>
                <Typography
                  variant="h3"
                  sx={{
                    color: 'primary.contrastText',
                    mb: 3,
                    fontWeight: 700,
                  }}
                >
                  {title}
                </Typography>
              </m.div>

              {subtitle && (
                <m.div variants={varFade().inUp}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: alpha(theme.palette.primary.contrastText, 0.9),
                      mb: 2,
                      fontWeight: 400,
                    }}
                  >
                    {subtitle}
                  </Typography>
                </m.div>
              )}

              <m.div variants={varFade().inUp}>
                <HtmlText
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.5rem' },
                    color: alpha(theme.palette.primary.contrastText, 0.8),
                    lineHeight: 1.6,
                    whiteSpace: 'pre-line',
                    mb: features.length > 0 ? 3 : 0,
                  }}
                >
                  {description}
                </HtmlText>
              </m.div>

              {/* Lista delle features se presenti */}
              {features.length > 0 && (
                <m.div variants={varFade().inUp}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1.5,
                      mb: 3,
                      alignItems: 'flex-start',
                      textAlign: 'left',
                    }}
                  >
                    {features.map((feature, index) => (
                      <Box
                        key={feature.title || index}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                        }}
                      >
                        <Iconify 
                          icon="eva:checkmark-circle-2-fill" 
                          sx={{ 
                            color: 'company.main',
                            width: 24,
                            height: 24,
                          }} 
                        />
                        <Typography
                          variant="body1"
                          sx={{
                            color: alpha(theme.palette.primary.contrastText, 0.8),
                            fontWeight: 500,
                          }}
                        >
                          {feature.title || feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </m.div>
              )}

              <m.div variants={varFade().inUp}>
                <Button
                  component={RouterLink}
                  href={ctaLink}
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
                  {ctaText}
                </Button>
              </m.div>
            </Box>
          </Box>
        </Grid>

        {/* Box con immagine */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: { xs: 300, md: '100%' },
              backgroundImage: splitSectionComponent?.content_image?.url 
                ? `url(${splitSectionComponent.content_image.url})`
                : 'url(/assets/images/1675965408174.png)', // Travel Risk Management fallback
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
