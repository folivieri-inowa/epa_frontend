'use client';

import { useScroll } from 'framer-motion';

import Box from '@mui/material/Box';

import MainLayout from 'src/layouts/main';

import ScrollProgress from 'src/components/scroll-progress';

import HomeHero from '../home-hero';
import HomeAbout from '../home-about';
import HomeDiscovery from '../home-discovery';
import HomeAlternatingSection from '../home-alternating-section';
import ContactSection from '../../shared/contact-section';
import {CookieConsentButton} from "../../../components/cookie-conesent";

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <Box sx={{ position: 'relative', zIndex: 0 }}>
        <HomeHero />
      </Box>

      <Box sx={{ position: 'relative', zIndex: 1, mt: 0 }}>
        <HomeAbout />
      </Box>

      <Box sx={{ position: 'relative', zIndex: 1, mt: 0 }}>
        <HomeAlternatingSection />
      </Box>

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          zIndex: 1,
          bgcolor: 'background.default',
        }}
      >
        <HomeDiscovery />
      </Box>

      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          mt: 0,
        }}
      >
        <ContactSection title="Contattaci per una consulenza" />
      </Box>
    </MainLayout>
  );
}
