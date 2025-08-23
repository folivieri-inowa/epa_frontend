'use client';

import { useScroll } from 'framer-motion';

import Box from '@mui/material/Box';

import MainLayout from 'src/layouts/main';

import ScrollProgress from 'src/components/scroll-progress';

import HomeHero from '../home-hero';
import HomeAbout from '../home-about';
import HomeDiscovery from '../home-discovery';
import HomeAlternatingSection from '../home-alternating-section';
import HomePillars from '../home-pillars';
import HomeSplitSection from '../home-split-section';
import HomeSeparatorBanner from '../home-separator-banner';
import HomeSplitSectionReversed from '../home-split-section-reversed';
import HomeSeparatorBanner2 from '../home-separator-banner-2';
import HomeStrategicProtectionSection from '../home-strategic-protection-section';
import HomeSeparatorBanner3 from '../home-separator-banner-3';
import HomeLuxurySecuritySection from '../home-luxury-security-section';
import HomeJoinTeam from '../home-join-team';
import HomeContact from '../home-contact';
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
        <HomePillars />
      </Box>

      <Box sx={{ position: 'relative', zIndex: 1, mt: 0 }}>
        <HomeSplitSection />
      </Box>

      <Box sx={{ position: 'relative', zIndex: 1, mt: 0 }}>
        <HomeSeparatorBanner />
      </Box>

      <Box sx={{ position: 'relative', zIndex: 1, mt: 0 }}>
        <HomeSplitSectionReversed />
      </Box>

      <Box sx={{ position: 'relative', zIndex: 1, mt: 0 }}>
        <HomeSeparatorBanner2 />
      </Box>

      <Box sx={{ position: 'relative', zIndex: 1, mt: 0 }}>
        <HomeStrategicProtectionSection />
      </Box>

      <Box sx={{ position: 'relative', zIndex: 1, mt: 0 }}>
        <HomeJoinTeam />
      </Box>

      <Box sx={{ position: 'relative', zIndex: 1, mt: 0 }}>
        <HomeContact />
      </Box>
    </MainLayout>
  );
}
