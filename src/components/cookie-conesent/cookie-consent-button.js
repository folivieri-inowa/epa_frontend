'use client'

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CookieIcon from '@mui/icons-material/Cookie';
import { useTranslation } from 'react-i18next';

const StyledCookieButton = styled(Button)(({ theme }) => ({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 99999, // Aumentato lo z-index
  backgroundColor: 'rgb(255, 215, 0)', // Colore oro per mantenere coerenza con altri pulsanti
  color: '#000',
  padding: '10px 15px',
  borderRadius: '4px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  '&:hover': {
    backgroundColor: 'rgba(246,142,59, 0.85)',
    color: '#000',
  },
  // Aggiunta di stili più specifici per assicurare il corretto posizionamento
  top: 'auto',
  left: 'auto',
  transform: 'none',
  fontWeight: 'bold',
  minWidth: '180px',
  justifyContent: 'center',
}));

const CookieConsentButton = () => {
  const { t } = useTranslation();
  
  return (
    <StyledCookieButton 
      type="button" 
      // Usa l'attributo corretto secondo la documentazione
      data-cc="show-preferencesModal"
      startIcon={<CookieIcon />}
    >
      {t('cookies.moreInfo')}
    </StyledCookieButton>
  );
}

export default CookieConsentButton;
