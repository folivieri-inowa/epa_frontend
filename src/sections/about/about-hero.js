import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionContainer } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function AboutHero({title, title2, subtitle, coverUrl}) {
  return (
    <Box
      sx={{
        height: { md: 560 },
        py: { xs: 10, md: 0 },
        overflow: 'hidden',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundImage:
          `url(/assets/background/overlay_1.svg), url(${process.env.NEXT_PUBLIC_HOST_API+coverUrl.url})`,
      }}
    >
      <Container component={MotionContainer}>
        <Box
          sx={{
            bottom: { md: 80 },
            position: { md: 'absolute' },
            textAlign: {
              xs: 'left',
              md: 'unset',
            },
            ml: {
              xs: 10,
            },
          }}
        >
          <TextAnimate text={title} variants={varFade().inRight} sx={{ color: 'primary.main' }} />

          <br />

          <Stack spacing={2} display="inline-flex" direction="row" sx={{ color: 'primary.main' }}>
            <TextAnimate text={title2} />
          </Stack>

          <m.div variants={varFade().inRight}>
            <Typography
              variant="h4"
              sx={{
                mt: 3,
                color: 'common.white',
                fontWeight: 'fontWeightSemiBold',
                whiteSpace: 'pre-line',
              }}
            >
              {subtitle}
            </Typography>
          </m.div>
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
