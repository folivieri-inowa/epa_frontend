'use client';

import { m } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { varFade, MotionViewport } from 'src/components/animate';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function HomeJoinTeam() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Container component={MotionViewport} sx={{ py: { xs: 8, md: 12 } }}>
      <m.div variants={varFade().inUp}>
        <Box
          sx={{
            textAlign: 'center',
            p: { xs: 4, md: 6 },
            borderRadius: 2,
            backgroundColor: alpha(theme.palette.company.main, 0.08),
          }}
        >
          <Typography variant="h3" sx={{ mb: 3 }}>
            {t('home.joinTeam.title')}
          </Typography>
          
          <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.25rem' }, mb: 4, maxWidth: '600px', mx: 'auto' }}>
            {t('home.joinTeam.description')}
          </Typography>
          
          <Button
            size="large"
            variant="contained"
            color="primary"
            component={RouterLink}
            href="/contact-us"
            sx={{
              bgcolor: 'company.main',
              color: 'common.black',
              '&:hover': {
                bgcolor: 'company.dark',
                color: 'common.black',
              },
            }}
          >
            {t('home.joinTeam.button')}
          </Button>
        </Box>
      </m.div>
    </Container>
  );
}
