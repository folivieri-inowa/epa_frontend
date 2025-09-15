import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';
import { useSiteLogo } from 'src/hooks/use-global-settings';
import Image from '../image';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ 
  disabledLink = false, 
  sx, 
  width = 200, 
  height = 50, 
  src, 
  variant = 'default', // 'default' | 'white'
  ...other 
}, ref) => {
  const theme = useTheme();
  const { logo, logoWhite, loading } = useSiteLogo();

  // Determina quale logo usare
  let logoSrc = src; // Se src è fornito esplicitamente, usalo
  
  if (!logoSrc) {
    if (variant === 'white') {
      logoSrc = logoWhite || '/logo/logo_white.png';
    } else {
      logoSrc = logo || '/logo/logo_esteso.png';
    }
  }

  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  const logoElement = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width,
        height,
        display: 'inline-flex',
        opacity: loading ? 0.7 : 1,
        transition: 'opacity 0.3s ease',
        ...sx,
      }}
      {...other}
    >
      <Image 
        src={logoSrc} 
        alt="Oracle Executive Protection Logo" 
        sx={{ 
          width: '100%', 
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </Box>
  );

  if (disabledLink) {
    return logoElement;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logoElement}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'white']),
};

export default Logo;
