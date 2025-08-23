'use client';

import { m } from 'framer-motion';
import { alpha, useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

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
import useCompanyColors from 'src/hooks/use-company-colors';
import HtmlText from 'src/components/html-text';

// ----------------------------------------------------------------------

export default function HomeAbout() {
  const { t } = useTranslation();
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
        <Grid xs={12} md={5}>
          <m.div variants={varFade().inLeft}>
            <Image
              alt="security expertise"
              src="/assets/images/about/about.jpg"
              sx={{ borderRadius: 2, boxShadow: shadow }}
            />
          </m.div>
        </Grid>

        {/* Text content */}
        <Grid xs={12} md={7}>
          <Stack spacing={3}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h3" sx={{ mb: 3 }}>
                {t('home.aboutSection.title')}              
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <HtmlText sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                {t('home.aboutSection.description')}
              </HtmlText>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Button
                component={RouterLink}
                href={paths.chi_siamo}
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
                {t('home.aboutSection.button')}
              </Button>
            </m.div>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
