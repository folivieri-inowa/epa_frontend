import { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

import {paths} from 'src/routes/paths';
import {RouterLink} from 'src/routes/components';

import Logo from 'src/components/logo';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Contatti',
    children: [
      { name: 'Email: info@protectionagency.it', href: 'mailto:info@protectionagency.it' },
      { name: 'Telefono: +39 392 926 4907', href: 'tel:+393929264907'}
    ],
  },
];

// Array delle certificazioni
const certifications = [
  { src: '/logo/certificate.png', alt: 'Certificazione' },
  { src: '/logo/31000.jpg', alt: 'ISO 31000' },
  { src: '/logo/ISO_27001.jpg', alt: 'ISO 27001' },
  { src: '/logo/ISO-28000.png', alt: 'ISO 28000' },
];

// ----------------------------------------------------------------------

export default function Footer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);
  const carouselRef = useRef(null);
  
  // Gestisci il numero di elementi visibili in base alla larghezza dello schermo
  useEffect(() => {
    function handleResize() {
      // Sempre 2 immagini per desktop, 1 per mobile ma con presentazione più grande
      if (window.innerWidth >= 600) {
        setVisibleItems(2);
      } else {
        setVisibleItems(1);
      }
    }
    
    // Imposta inizialmente
    handleResize();
    
    // Aggiungi event listener per il resize
    window.addEventListener('resize', handleResize);
    
    // Pulizia
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Setup autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3500);
    
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certifications.length - visibleItems : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % (certifications.length - visibleItems + 1)
    );
  };
  
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Divider/>

      <Container
        sx={{
          pt: 10,
          pb: 5,
          textAlign: {xs: 'center', md: 'unset'},
        }}
      >
        {/* Sezione dei loghi di certificazione con carousel personalizzato */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Le nostre certificazioni</Typography>
          
          <Box 
            sx={{ 
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: { xs: 320, sm: 360 }, // Aumentata ulteriormente l'altezza
              my: 2, // Ridotto il margine verticale
            }}
          >
            <Box 
              ref={carouselRef}
              sx={{ 
                display: 'flex',
                overflowX: 'hidden',
                position: 'relative',
                flex: 1,
                justifyContent: 'center',
              }}
            >
              <Box 
                sx={{ 
                  display: 'flex',
                  transition: 'transform 0.5s ease',
                  transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
                  width: '100%',
                  gap: 0,
                }}
              >
                {certifications.map((cert, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: `${100 / visibleItems}%`,
                      px: { xs: 0.25, sm: 0.5 }, // Ulteriormente ridotto il padding per avvicinare le immagini
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: index >= currentIndex && index < currentIndex + visibleItems ? 1 : 0.5,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    <Box
                      component="img"
                      src={cert.src}
                      alt={cert.alt}
                      sx={{
                        height: { xs: 240, sm: 280 }, // Immagini ancora più grandi
                        width: { xs: '98%', sm: 320 }, // Quasi a schermo intero
                        maxWidth: '98%',
                        objectFit: 'contain',
                        mx: 'auto',
                        display: 'block',
                        border: '1px solid #eee',
                        borderRadius: 1,
                        p: { xs: 0.5, sm: 1 }, // Ridotto ulteriormente il padding
                        bgcolor: 'background.paper',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
            
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              mt: { xs: 0.5, sm: 1 }, // Ridotto ulteriormente il margine tra carousel e controlli
              gap: { xs: 0.5, sm: 1 } // Ridotto il gap tra i controlli
            }}>
              <IconButton 
                onClick={handlePrev}
                sx={{ 
                  color: 'primary.main',
                  bgcolor: 'background.paper',
                  '&:hover': { bgcolor: 'background.neutral' },
                  boxShadow: 1,
                  width: { xs: 36, sm: 40 },
                  height: { xs: 36, sm: 40 },
                  padding: 0.5, // Ridotto il padding dei pulsanti
                }}
              >
                <ArrowBack />
              </IconButton>
              
              <Box sx={{ 
                display: 'flex', 
                gap: 0.5, // Pallini più vicini
                alignItems: 'center',
                mx: 0.5 // Ridotto ulteriormente il margine
              }}>
                {Array.from({ length: certifications.length - visibleItems + 1 }).map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    sx={{
                      width: { xs: 10, sm: 8 }, // Pallini più grandi su mobile
                      height: { xs: 10, sm: 8 },
                      borderRadius: '50%',
                      bgcolor: currentIndex === index ? 'primary.main' : 'grey.300',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease',
                    }}
                  />
                ))}
              </Box>
              
              <IconButton 
                onClick={handleNext}
                sx={{ 
                  color: 'primary.main',
                  bgcolor: 'background.paper',
                  '&:hover': { bgcolor: 'background.neutral' },
                  boxShadow: 1,
                  width: { xs: 36, sm: 40 },
                  height: { xs: 36, sm: 40 },
                  padding: 0.5, // Ridotto il padding dei pulsanti
                }}
              >
                <ArrowForward />
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Grid
          container
          justifyContent={{
            xs: 'center',
            md: 'space-between',
          }}
        >
          <Grid xs={8} md={3}>
            <Typography
              variant="body2"
              sx={{
                maxWidth: 270,
                mx: {xs: 'auto', md: 'unset'},
              }}
            >
              Società di consulenza, analisi e formazione nel settore sicurezza, difesa e protezione fisica e
              tecnologica.
            </Typography>

            {/* <Stack
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{
                mt: 3,
                mb: { xs: 5, md: 0 },
              }}
            >
              {_socials.map((social) => (
                <IconButton
                  key={social.name}
                  sx={{
                    '&:hover': {
                      bgcolor: alpha(social.color, 0.08),
                    },
                  }}
                >
                  <Iconify color={social.color} icon={social.icon} />
                </IconButton>
              ))}
            </Stack> */}
          </Grid>

          <Grid xs={12} md={6}>
            <Stack spacing={10} direction={{xs: 'column', md: 'row'}}>
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  alignItems={{xs: 'center', md: 'flex-start'}}
                  sx={{width: 1}}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{mt: 10, display: 'flex', justifyContent: 'space-between'}}>
          <span>© 2024. All rights reserved</span>
          <span>
            {/*<Link href="#" color="inherit" sx={{ ml: 2 }}>Termini e Condizioni</Link>*/}
            <Link href="/privacy-policy" color="inherit" sx={{ml: 2}}>Privacy Policy</Link>
          </span>
        </Typography>
      </Container>
    </Box>
  )
  // return homePage ? simpleFooter : mainFooter;
}
