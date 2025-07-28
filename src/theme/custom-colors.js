// ----------------------------------------------------------------------
// Colori personalizzati per l'azienda
// Definizione centralizzata dei colori per facilitare i cambiamenti futuri
// ----------------------------------------------------------------------

export const customColors = {
  // Colore primario aziendale (oro)
  primaryCompany: 'rgb(224, 197, 77)',
  
  // Versione precedente del colore (arancione)
  // Mantenuto per riferimento o eventuali necessità di rollback
  legacyPrimary: 'rgb(246,142,59)'
};

// Funzione helper per ottenere il colore con diversi livelli di opacità
export const getCustomColorWithAlpha = (colorKey, opacity) => {
  // Estrai i componenti RGB dal colore
  const color = customColors[colorKey];
  if (!color || !color.startsWith('rgb')) {
    console.warn(`Il colore "${colorKey}" non è un colore RGB valido o non esiste.`);
    return 'rgba(0,0,0,0)';
  }
  
  // Converte da rgb(...) a rgba(..., opacity)
  return color.replace('rgb', 'rgba').replace(')', `, ${opacity})`);
};

// Utility per ottenere facilmente colori personalizzati
export const getCompanyColor = (opacity = 1) => 
  opacity === 1 
    ? customColors.primaryCompany 
    : getCustomColorWithAlpha('primaryCompany', opacity);
