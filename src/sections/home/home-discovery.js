import { m } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

// ----------------------------------------------------------------------

const CARDS = [
  // I contenuti precedenti sono stati rimossi perché le pagine riferite non esistono più
];

// ----------------------------------------------------------------------

export default function HomeDiscovery() {
  const { t } = useTranslation();
  
  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 10 },
      }}
    >
      <Box
        gap={{ xs: 3, lg: 12 }}
        display="grid"
        alignItems="flex-start"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        {CARDS.map((card, index) => (
          <m.div variants={varFade().inUp} key={card.title}>
            <Card
              sx={{
                textAlign: 'left',
                boxShadow: { md: 'none' },
                bgcolor: 'background.default',
                margin: 2
              }}
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  mx: 'auto',
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  backgroundColor: 'rgb(255,255,255)',
                  // boxShadow: '0 0 30px 25px rgba(255,255,255, 0.1)',
                  mt: 4
                }}
              >
                <Box
                  component="img"
                  src={card.path}
                  alt={card.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                />
              </Box>

              <Typography variant="h4" sx={{ mt: 8, mb: 1, color: 'rgb(250,161,91)' }}>
                {card.title}
              </Typography>

              <Divider sx={{ borderColor: 'rgb(250,161,91)', borderWidth: 1 }} />

              <Typography variant='h5' sx={{ color: 'text.primary', mt:2, mb: 2 }}>{card.description}</Typography>

              <Button variant='text' sx={{ color: 'rgb(250,161,91)', typography: 'h6', padding: 0, '&:hover': { backgroundColor: 'transparent' } }} href={card.link}>
                {t('common.buttons.learnMore', 'Approfondisci')}
              </Button>
            </Card>
          </m.div>
        ))}
      </Box>
    </Container>
  );
}
