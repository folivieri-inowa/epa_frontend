// ----------------------------------------------------------------------

export function container(theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          // Riduciamo i margini laterali per allargare il contenuto
          paddingLeft: theme.spacing(1), // Ridotto da default (16px) a 8px
          paddingRight: theme.spacing(1),
          [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(1.5), // 12px su schermi small
            paddingRight: theme.spacing(1.5),
          },
          [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(2), // 16px su schermi medium
            paddingRight: theme.spacing(2),
          },
          [theme.breakpoints.up('lg')]: {
            paddingLeft: theme.spacing(2.5), // 20px su schermi large
            paddingRight: theme.spacing(2.5),
          },
          [theme.breakpoints.up('xl')]: {
            paddingLeft: theme.spacing(3), // 24px su schermi extra large
            paddingRight: theme.spacing(3),
          },
        },
        // Opzionalmente possiamo anche aumentare i maxWidth per allargare ulteriormente
        maxWidthLg: {
          [theme.breakpoints.up('lg')]: {
            maxWidth: '1280px', // Aumentato da 1200px
          },
        },
        maxWidthXl: {
          [theme.breakpoints.up('xl')]: {
            maxWidth: '1400px', // Aumentato da 1536px se necessario
          },
        },
      },
    },
  };
}
