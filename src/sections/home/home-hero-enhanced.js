import { m, useScroll } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import { alpha, styled, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import useCompanyColors from 'src/hooks/use-company-colors';
import { useResponsive } from 'src/hooks/use-responsive';
import { useTranslation } from 'react-i18next';

import { HEADER } from 'src/layouts/config-layout';
import { bgBlur, bgGradient } from 'src/theme/css';

import { varFade, MotionContainer } from 'src/components/animate';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100vh',
  position: 'relative',
  paddingTop: HEADER.H_MOBILE,
  overflow: 'hidden',
  background: `linear-gradient(135deg, 
    ${alpha(theme.palette.background.default, 0.95)} 0%, 
    ${alpha(theme.palette.background.default, 0.85)} 50%,
    ${alpha(theme.palette.background.default, 0.90)} 100%),
    url('/assets/background/home1.jpg') center/cover no-repeat`,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER.H_DESKTOP,
  },
}));

const StyledWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
}));

// Floating elements
const FloatingElement = styled(m.div)(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.3)}, ${alpha(theme.palette.company.main, 0.2)})`,
  filter: 'blur(40px)',
  pointerEvents: 'none',
}));

// Animated gradient text
const StyledGradientText = styled(m.h1)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.company.main}, ${theme.palette.primary.light})`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  backgroundSize: '200% 200%',
  fontSize: '3.5rem',
  fontWeight: 900,
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
  textAlign: 'left',
  margin: 0,
  padding: 0,
  [theme.breakpoints.up('md')]: {
    fontSize: '4.5rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '5.5rem',
  },
}));

// Glass morphism card
const GlassCard = styled(Card)(({ theme }) => ({
  background: alpha(theme.palette.background.paper, theme.palette.mode === 'light' ? 0.8 : 0.1),
  backdropFilter: 'blur(20px)',
  border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
  borderRadius: theme.spacing(2),
  boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.1)}`,
}));

// Statistics counter
const StatCard = styled(GlassCard)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 16px 48px ${alpha(theme.palette.common.black, 0.15)}`,
  },
}));

// ----------------------------------------------------------------------

export default function HomeHeroEnhanced() {
  const mdUp = useResponsive('up', 'md');
  const { t } = useTranslation();
  const theme = useTheme();
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const [percent, setPercent] = useState(0);

  const getScroll = useCallback(() => {
    let heroHeight = 0;
    if (heroRef.current) {
      heroHeight = heroRef.current.offsetHeight;
    }
    scrollY.on('change', (scrollHeight) => {
      const scrollPercent = (scrollHeight * 100) / heroHeight;
      setPercent(Math.floor(scrollPercent));
    });
  }, [scrollY]);

  useEffect(() => {
    getScroll();
  }, [getScroll]);

  const opacity = 1 - percent / 100;
  const hide = percent > 120;

  // Statistics data
  const stats = [
    { number: '30+', label: t('home.hero.stats.experience'), icon: 'mdi:shield-check' },
    { number: '500+', label: t('home.hero.stats.clients'), icon: 'mdi:account-group' },
    { number: '24/7', label: t('home.hero.stats.support'), icon: 'mdi:clock-outline' },
    { number: '100+', label: t('home.hero.stats.countries'), icon: 'mdi:earth' },
  ];

  // Floating elements animation
  const floatingElements = (
    <>
      <FloatingElement
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        sx={{
          top: '20%',
          left: '10%',
          width: 100,
          height: 100,
        }}
      />
      <FloatingElement
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        sx={{
          top: '60%',
          right: '15%',
          width: 120,
          height: 120,
        }}
      />
      <FloatingElement
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        sx={{
          bottom: '20%',
          left: '20%',
          width: 80,
          height: 80,
        }}
      />
    </>
  );

  // Main content
  const renderMainContent = (
    <Container 
      component={MotionContainer} 
      sx={{ 
        height: 1, 
        display: 'flex', 
        alignItems: 'center',
        position: 'relative',
        zIndex: 2
      }}
    >
      <Grid container spacing={4} alignItems="center" sx={{ height: 'auto' }}>
        <Grid xs={12} lg={8}>
          <Stack spacing={4}>
            {/* Badge */}
            <m.div variants={varFade().inUp}>
              <Chip
                label={t('home.hero.badge')}
                sx={{
                  bgcolor: alpha(theme.palette.company.main, 0.15),
                  color: 'company.main',
                  border: `1px solid ${alpha(theme.palette.company.main, 0.3)}`,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  px: 1,
                }}
                icon={<Iconify icon="mdi:star" />}
              />
            </m.div>

            {/* Main title */}
            <m.div variants={varFade().inUp}>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  mb: 1,
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                {t('home.hero.title')}
              </Typography>

              <StyledGradientText
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {t('home.hero.subtitle')}
              </StyledGradientText>
            </m.div>

            {/* Description */}
            <m.div variants={varFade().inUp}>
              <Typography
                variant="h5"
                sx={{
                  color: 'text.primary',
                  lineHeight: 1.6,
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  fontWeight: 400,
                  mb: 1,
                }}
              >
                {t('home.hero.description')}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.7,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  maxWidth: 600,
                }}
              >
                {t('home.hero.subdescription')}
              </Typography>
            </m.div>

            {/* CTA Buttons */}
            <m.div variants={varFade().inUp}>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2}
                sx={{ mt: 2 }}
              >
                <Button
                  size="large"
                  variant="contained"
                  component={RouterLink}
                  href={paths.contact}
                  sx={{
                    bgcolor: 'company.main',
                    color: 'common.black',
                    py: 1.8,
                    px: 4,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 2,
                    boxShadow: `0 8px 24px ${alpha(theme.palette.company.main, 0.4)}`,
                    '&:hover': {
                      bgcolor: 'company.dark',
                      transform: 'translateY(-2px)',
                      boxShadow: `0 12px 32px ${alpha(theme.palette.company.main, 0.6)}`,
                    },
                    transition: 'all 0.3s ease',
                  }}
                  startIcon={<Iconify icon="mdi:shield-account" width={24} />}
                >
                  {t('home.hero.cta.primary')}
                </Button>

                <Button
                  size="large"
                  variant="outlined"
                  component={RouterLink}
                  href={paths.chi_siamo}
                  sx={{
                    py: 1.8,
                    px: 4,
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    borderRadius: 2,
                    borderColor: alpha(theme.palette.common.white, 0.3),
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: 'company.main',
                      bgcolor: alpha(theme.palette.company.main, 0.1),
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                  startIcon={<Iconify icon="mdi:information-outline" width={24} />}
                >
                  {t('home.hero.cta.secondary')}
                </Button>
              </Stack>
            </m.div>
          </Stack>
        </Grid>

        {/* Stats cards - Right side */}
        <Grid xs={12} lg={4}>
          <m.div variants={varFade().inRight}>
            <Stack spacing={2}>
              {stats.map((stat, index) => (
                <m.div
                  key={stat.label}
                  variants={varFade().inRight}
                  transition={{ delay: index * 0.1 }}
                >
                  <StatCard>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '50%',
                          bgcolor: alpha(theme.palette.company.main, 0.15),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Iconify 
                          icon={stat.icon} 
                          sx={{ 
                            width: 24, 
                            height: 24, 
                            color: 'company.main' 
                          }} 
                        />
                      </Box>
                      <Box sx={{ textAlign: 'left', flex: 1 }}>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 900,
                            color: 'company.main',
                            lineHeight: 1,
                            mb: 0.5,
                          }}
                        >
                          {stat.number}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            fontWeight: 500,
                            fontSize: '0.85rem',
                          }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    </Stack>
                  </StatCard>
                </m.div>
              ))}
            </Stack>
          </m.div>
        </Grid>
      </Grid>
    </Container>
  );

  return (
    <StyledRoot ref={heroRef}>
      <StyledWrapper
        sx={{
          ...(hide && {
            opacity: 0,
          }),
          opacity: opacity > 0 ? opacity : 0,
        }}
      >
        {floatingElements}
        {renderMainContent}

        {/* Scroll indicator */}
        <m.div
          variants={varFade().in}
          style={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 500,
              }}
            >
              {t('home.hero.scroll')}
            </Typography>
            <m.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Iconify
                icon="mdi:chevron-down"
                sx={{
                  width: 24,
                  height: 24,
                  color: 'company.main',
                }}
              />
            </m.div>
          </Box>
        </m.div>
      </StyledWrapper>
    </StyledRoot>
  );
}
