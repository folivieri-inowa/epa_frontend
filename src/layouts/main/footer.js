import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { alpha } from '@mui/material/styles';

import {paths} from 'src/routes/paths';
import {RouterLink} from 'src/routes/components';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

export default function Footer() {
  const { t } = useTranslation();

  const LINKS = [
    {
      headline: t('footer.contact.headline'),
      children: [
        { name: t('footer.contact.email'), href: 'mailto:info@oracleprotection.it' },
        { name: t('footer.contact.phone'), href: 'tel:+393929264907'}
      ],
    },
  ];

  const SOCIALS = [
    {
      name: 'LinkedIn',
      icon: 'mdi:linkedin',
      color: '#0077B5',
      href: 'https://www.linkedin.com/company/oracle-executive-protection/'
    },
    {
      name: 'Instagram', 
      icon: 'mdi:instagram',
      color: '#E4405F',
      href: 'https://www.instagram.com/oracle_protection/'
    }
  ];
  
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
        {/* Logo Section */}
        <Box sx={{ mb: 5, textAlign: { xs: 'center', md: 'left' } }}>
          <Logo />
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
              {t('footer.description')}
            </Typography>
          </Grid>

          <Grid xs={12} md={3}>
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

          <Grid xs={12} md={3}>
            {/* Social Media Section */}
            <Stack
              spacing={2}
              alignItems={{xs: 'center', md: 'flex-start'}}
              sx={{
                mb: { xs: 5, md: 0 },
              }}
            >
              <Typography component="div" variant="overline">
                {t('footer.social.follow', 'Seguici')}
              </Typography>
              
              {SOCIALS.map((social) => (
                <Link
                  key={social.name}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'inherit',
                    textDecoration: 'none',
                    '&:hover': {
                      color: social.color,
                      transform: 'translateX(4px)',
                    },
                    transition: 'all 0.2s',
                  }}
                >
                  <Iconify 
                    icon={social.icon} 
                    width={20} 
                    sx={{ 
                      mr: 1,
                      color: social.color 
                    }} 
                  />
                  <Typography variant="body2">
                    {social.name}
                  </Typography>
                </Link>
              ))}
              
              {/* Privacy Policy Link */}
              <Link
                href="/privacy-policy"
                color="inherit"
                variant="body2"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'primary.main',
                    transform: 'translateX(4px)',
                  },
                  transition: 'all 0.2s',
                  mt: 1,
                }}
              >
                <Iconify
                  icon="mdi:shield-account"
                  width={20}
                  sx={{ 
                    mr: 1,
                    color: 'text.secondary' 
                  }}
                />
                <Typography variant="body2">
                  {t('footer.privacyPolicy')}
                </Typography>
              </Link>
            </Stack>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{mt: 10, textAlign: 'center'}}>
          <span>{t('footer.copyright')}</span>
        </Typography>
      </Container>
    </Box>
  )
  // return homePage ? simpleFooter : mainFooter;
}
