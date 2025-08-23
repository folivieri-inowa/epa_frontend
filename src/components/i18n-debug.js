'use client';

import { useTranslation } from 'react-i18next';
import { Box, Typography, Paper, Button } from '@mui/material';

export default function I18nDebug() {
  const { t, i18n, ready } = useTranslation();

  return (
    <Paper sx={{ p: 2, m: 2, position: 'fixed', top: 10, right: 10, zIndex: 9999, maxWidth: 300 }}>
      <Typography variant="h6">I18n Debug</Typography>
      <Typography variant="body2">
        Language: {i18n.language} | Ready: {ready ? 'Yes' : 'No'} | Initialized: {i18n.isInitialized ? 'Yes' : 'No'}
      </Typography>
      <Typography variant="body2">
        Test Home Hero Title: {t('home.hero.title', 'FALLBACK')}
      </Typography>
      <Typography variant="body2">
        Test Common Contact: {t('common.contact_us', 'FALLBACK')}
      </Typography>
      <Button size="small" onClick={() => i18n.changeLanguage('en')}>EN</Button>
      <Button size="small" onClick={() => i18n.changeLanguage('it')}>IT</Button>
    </Paper>
  );
}
