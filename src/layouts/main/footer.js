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

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Risorse',
    children: [
      { name: 'Chi siamo', href: paths.about },
      { name: 'Contattaci', href: paths.contact },
    ],
  },
  {
    headline: 'Contatti',
    children: [
      { name: 'Email: info@protectionagency.it', href: 'mailto:info@protectionagency.it' },
      { name: 'Telefono: +39 392 926 4907', href: 'tel:+393929264907'}
    ],
  },
];

// ----------------------------------------------------------------------

export default function Footer() {
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
        <Logo
          width={240}
          height={240}
          sx={{mb: 3}}
          src={'/logo/certificate.png'}
        />

        {/*   <Logo
          width={240}
          height={240}
          sx={{ mb: 3 }}
          src={'/logo/logo-IATC-Sfumato-01-760x760.png'}
        />
 */}
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
            <Stack spacing={5} direction={{xs: 'column', md: 'row'}}>
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
