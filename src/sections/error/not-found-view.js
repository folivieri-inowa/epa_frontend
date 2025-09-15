'use client';

import { m } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';
import { useSiteSettings } from 'src/hooks/use-global-settings';

import CompactLayout from 'src/layouts/compact';
import { PageNotFoundIllustration } from 'src/assets/illustrations';

import { varBounce, MotionContainer } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function NotFoundView() {
  const { t } = useTranslation();
  const { title } = useSiteSettings();

  return (
    <CompactLayout>
      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            {t('error.404.title', 'Pagina non trovata!')}
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: 'text.secondary' }}>
            {t('error.404.description', 'Spiacente, non riusciamo a trovare la pagina che stai cercando. Forse hai digitato male l\'URL? Assicurati di controllare l\'ortografia.')}
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <PageNotFoundIllustration
            sx={{
              height: 260,
              my: { xs: 5, sm: 10 },
            }}
          />
        </m.div>

        <Button component={RouterLink} href="/" size="large" variant="contained">
          {t('error.404.button', 'Torna alla Home')}
        </Button>
      </MotionContainer>
    </CompactLayout>
  );
}
