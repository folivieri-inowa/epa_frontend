# Guida all'uso dei colori aziendali nel progetto EPA

Per mantenere la coerenza visiva e semplificare le modifiche future, il progetto EPA include un sistema di colori aziendali centralizzato.

## Come usare i colori aziendali

### 1. Utilizzo tramite hook personalizzato (Approccio preferito)

```jsx
import useCompanyColors from 'src/hooks/use-company-colors';

function MyComponent() {
  const companyColors = useCompanyColors();
  
  return (
    <Box sx={{ 
      color: companyColors.main, // Colore principale
      backgroundColor: companyColors.getBgColor(0.1) // Background con opacità personalizzabile
    }}>
      <Typography sx={{ color: companyColors.light }}>
        Testo con colore aziendale più chiaro
      </Typography>
      <Button sx={{ 
        backgroundColor: companyColors.dark,
        '&:hover': {
          backgroundColor: companyColors.darker
        }
      }}>
        Pulsante
      </Button>
    </Box>
  );
}
```

### 2. Utilizzo diretto tramite tema MUI

```jsx
import { alpha } from '@mui/material/styles';

function MyComponent() {
  return (
    <Box
      sx={{
        // Utilizzo diretto dei colori aziendali dalla palette
        color: 'company.main',
        backgroundColor: 'company.lighter',
        
        // Oppure
        border: (theme) => `1px solid ${theme.palette.company.main}`,
        
        // Con alpha
        boxShadow: (theme) => `0 4px 8px ${alpha(theme.palette.company.main, 0.2)}`,
      }}
    >
      Contenuto
    </Box>
  );
}
```

### 3. Utilizzo per componenti personalizzati o styled

```jsx
import { styled, alpha } from '@mui/material/styles';

const CustomBox = styled('div')(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.company.main,
  border: `1px solid ${theme.palette.company.dark}`,
  '&:hover': {
    backgroundColor: theme.palette.company.dark,
  },
}));
```

## Modifica del colore aziendale

Per cambiare il colore aziendale in tutto il sito, modificare solo il valore in:

`/src/theme/custom-colors.js`

```js
export const customColors = {
  primaryCompany: 'rgb(255, 215, 0)', // Modificare solo questo valore
  // ...
};
```

Tutte le istanze che utilizzano il colore aziendale verranno aggiornate automaticamente.
