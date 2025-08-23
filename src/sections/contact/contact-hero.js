import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function ContactHero({title, subtitle}) {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: { xs: '50vh', md: '60vh' },
        minHeight: { xs: 320, md: 480 },
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'url(/assets/images/contact1.jpg)',
        '&:after': {
          top: 0,
          content: '""',
          width: '100%',
          height: '100%',
          position: 'absolute',
          backgroundColor: alpha(theme.palette.grey[900], 0.6),
        },
      }}
    >
      <Container sx={{ height: 1, position: 'relative', zIndex: 9 }}>
        <Box
          sx={{
            bottom: { md: 80 },
            position: { md: 'absolute' },
            width: 1,
            textAlign: { xs: 'center', md: 'left' },
            pt: { xs: 15, md: 0 },
            pb: { xs: 8, md: 4 },
          }}
        >
          <Typography 
            variant="h1" 
            component="h1" 
            sx={{ 
              color: 'common.white', 
              textTransform: 'uppercase', 
              mb: 3,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              lineHeight: { xs: 1.2, md: 1.1 }
            }}
          >
            {t('contact.page.hero.title')}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: 'common.white',
              fontWeight: theme.typography.fontWeightMedium,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              lineHeight: { xs: 1.4, md: 1.3 },
              maxWidth: { xs: '100%', md: '80%' }
            }}
          >
            {t('contact.page.hero.subtitle')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

ContactHero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
