import { useTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

/**
 * Hook personalizzato per accedere ai colori aziendali nel tema
 * Fornisce metodi comodi per ottenere il colore principale dell'azienda
 * e le sue varianti con diversi livelli di opacità
 */
export default function useCompanyColors() {
  const theme = useTheme();
  
  // Accesso diretto al colore aziendale principale dalla palette
  const mainColor = theme.palette.company.main;
  
  // Funzione per ottenere il colore aziendale con livello di opacità personalizzato
  const getWithAlpha = (opacity = 1) => alpha(mainColor, opacity);
  
  // Funzioni di utilità per ottenere rapidamente specifiche opacità comuni
  const getLighter = () => theme.palette.company.lighter;
  const getLight = () => theme.palette.company.light;
  const getDark = () => theme.palette.company.dark;
  const getDarker = () => theme.palette.company.darker;
  
  // Funzione per ottenere colore aziendale per background con livello di opacità
  const getBgColor = (opacity = 0.08) => alpha(mainColor, opacity);
  
  return {
    main: mainColor,
    lighter: getLighter(),
    light: getLight(),
    dark: getDark(),
    darker: getDarker(),
    getWithAlpha,
    getBgColor,
  };
}
