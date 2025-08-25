import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import {paths} from 'src/routes/paths';
import {RouterLink} from 'src/routes/components';

import Logo from 'src/components/logo';

export default function Footer() {
  const { t } = useTranslation();

  const LINKS = [
    {
      headline: t('footer.contact.headline'),
      children: [
        { name: t('footer.contact.email'), href: 'mailto:info@protectionagency.it' },
        { name: t('footer.contact.phone'), href: 'tel:+393929264907'}
      ],
    },
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
          <span>{t('footer.copyright')}</span>
          <span>
            {/*<Link href="#" color="inherit" sx={{ ml: 2 }}>Termini e Condizioni</Link>*/}
            <Link href="/privacy-policy" color="inherit" sx={{ml: 2}}>{t('footer.privacyPolicy')}</Link>
          </span>
        </Typography>
      </Container>
    </Box>
  )
  // return homePage ? simpleFooter : mainFooter;
}
