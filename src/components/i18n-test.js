'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

export default function I18nTest() {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || 'it');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
  };

  return (
    <Box sx={{ p: 2, border: '1px solid red', margin: 2 }}>
      <Typography variant="h6">Test i18n</Typography>
      <Typography>Lingua corrente: {currentLang}</Typography>
      <Typography>Testo di test: {t('common.home')}</Typography>
      <Box sx={{ mt: 2 }}>
        <Button 
          variant="contained" 
          onClick={() => changeLanguage('it')}
          sx={{ mr: 1 }}
        >
          Italiano
        </Button>
        <Button 
          variant="contained" 
          onClick={() => changeLanguage('en')}
        >
          English
        </Button>
      </Box>
    </Box>
  );
}
