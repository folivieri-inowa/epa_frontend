// Example: Optimized Home Page with Performance Enhancements
// This shows how to implement the optimization components

'use client';

import Box from '@mui/material/Box';

import { OptimizedImage } from '../components/image';
import SmoothPageTransition from '../components/smooth-page-transition';
import { usePagePerformance } from '../hooks/use-page-performance';
import { PAGE_IMAGES, CRITICAL_IMAGES } from '../config/performance-config';

// ----------------------------------------------------------------------

export default function OptimizedHomePage() {
  // Hook per il monitoraggio delle performance
  const performance = usePagePerformance();

  // Lista delle immagini da preloaded per questa pagina
  const pageImages = [
    ...CRITICAL_IMAGES,
    ...PAGE_IMAGES.home,
  ];

  return (
    <SmoothPageTransition 
      images={pageImages}
      priority
      minLoadTime={600}
    >
      <Box sx={{ minHeight: '100vh' }}>
        {/* Hero Section con immagine ottimizzata */}
        <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
          <OptimizedImage
            src="/assets/images/hero-bg.jpg"
            alt="Oracle Executive Protection - Security Services"
            priority
            preload
            ratio="16/9"
            sx={{
              width: 1,
              height: 1,
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
          
          <Box
            sx={{
              position: 'relative',
              zIndex: 2,
              height: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              textAlign: 'center',
            }}
          >
            <Box>
              <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>
                Oracle Executive Protection
              </h1>
              <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                Consulenza, analisi e formazione nel settore sicurezza
              </p>
            </Box>
          </Box>
        </Box>

        {/* Services Section */}
        <Box sx={{ py: 8, px: 3 }}>
          <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>
              I Nostri Servizi
            </h2>
            
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 4
            }}>
              {/* Service Card Example */}
              <Box sx={{ textAlign: 'center' }}>
                <OptimizedImage
                  src="/assets/images/travel-risk.jpg"
                  alt="Travel Risk Assessment"
                  ratio="4/3"
                  sx={{ 
                    borderRadius: 2,
                    mb: 2,
                    maxWidth: 300,
                    mx: 'auto'
                  }}
                />
                <h3>Travel Risk Assessment</h3>
                <p>Analisi e valutazione dei rischi per viaggi di business</p>
              </Box>

              <Box sx={{ textAlign: 'center' }}>
                <OptimizedImage
                  src="/assets/images/executive-protection.jpg"
                  alt="Protezione Strategica"
                  ratio="4/3"
                  sx={{ 
                    borderRadius: 2,
                    mb: 2,
                    maxWidth: 300,
                    mx: 'auto'
                  }}
                />
                <h3>Protezione Strategica</h3>
                <p>Servizi di protezione per dirigenti e figure di alto profilo</p>
              </Box>

              <Box sx={{ textAlign: 'center' }}>
                <OptimizedImage
                  src="/assets/images/luxury-security.jpg"
                  alt="Luxury Security"
                  ratio="4/3"
                  sx={{ 
                    borderRadius: 2,
                    mb: 2,
                    maxWidth: 300,
                    mx: 'auto'
                  }}
                />
                <h3>Luxury Security</h3>
                <p>Sicurezza per eventi esclusivi e clientela VIP</p>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* About Section */}
        <Box sx={{ py: 8, px: 3, bgcolor: 'grey.50' }}>
          <Box sx={{ maxWidth: 1200, mx: 'auto', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, alignItems: 'center' }}>
            <Box>
              <h2 style={{ marginBottom: '1.5rem' }}>
                Chi Siamo
              </h2>
              <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>
                Oracle Executive Protection è un'azienda specializzata in consulenza, 
                analisi e formazione nel settore sicurezza, difesa e protezione fisica e tecnologica.
              </p>
              <p style={{ lineHeight: 1.6 }}>
                Il nostro team di esperti offre soluzioni personalizzate per garantire 
                la massima sicurezza ai nostri clienti in ogni contesto.
              </p>
            </Box>
            
            <OptimizedImage
              src="/assets/images/about-preview.jpg"
              alt="Oracle Executive Protection Team"
              ratio="4/3"
              sx={{ 
                borderRadius: 2,
                width: 1,
              }}
            />
          </Box>
        </Box>
      </Box>
    </SmoothPageTransition>
  );
}
