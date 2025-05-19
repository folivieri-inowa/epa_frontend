import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

import { varFade, MotionContainer } from 'src/components/animate';
import Link from "@mui/material/Link";
import {RouterLink} from "../../routes/components";

// ----------------------------------------------------------------------

const CONTACTS = [
  {
    phoneLabel: 'Telefono',
    phone: <Link
      component={RouterLink}
      href='tel:+393929264907'
      color="inherit"
      variant="h5"
    >
      +393929264907
    </Link>,
    emailLabel: 'E-mail',
    email: <Link
      component={RouterLink}
      href='mailto:info@protectionagency.it'
      color="inherit"
      variant="h5"
    >
      info@protectionagency.it
    </Link>
  },
];

// ----------------------------------------------------------------------

export default function ContactHero({title, subtitle}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: '/assets/images/contact/hero.jpg',
        }),
        height: { md: 560 },
        py: { xs: 10, md: 0 },
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Container component={MotionContainer}>
        <Box
          sx={{
            bottom: { md: 80 },
            position: { md: 'absolute' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <TextAnimate text={title} sx={{ color: 'primary.main' }} variants={varFade().inRight} />
          <br />

          <Stack spacing={2} display="inline-flex" direction="row" sx={{ color: 'primary.main' }}>
            <TextAnimate text={subtitle} />
          </Stack>

          <Stack
            spacing={5}
            alignItems={{ xs: 'center', md: 'unset' }}
            direction={{ xs: 'column', md: 'row' }}
            sx={{ mt: 5, color: 'common.white' }}
          >
            {CONTACTS.map((contact, index) => (
              <Stack key={index} sx={{ maxWidth: 380 }}>
                <m.div variants={varFade().in}>
                  <Typography variant="h5" gutterBottom>
                    {contact.phoneLabel}: {contact.phone}
                  </Typography>
                </m.div>

                <m.div variants={varFade().inRight}>
                  <Typography variant="h5" gutterBottom>
                    {contact.emailLabel}: {contact.email}
                  </Typography>
                </m.div>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function TextAnimate({ text, variants, sx, ...other }) {
  return (
    <Box
      component={m.div}
      sx={{
        typography: 'h1',
        overflow: 'hidden',
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      {text.split('').map((letter, index) => (
        <m.span key={index} variants={variants || varFade().inUp}>
          {letter}
        </m.span>
      ))}
    </Box>
  );
}

TextAnimate.propTypes = {
  sx: PropTypes.object,
  text: PropTypes.string,
  variants: PropTypes.object,
};
