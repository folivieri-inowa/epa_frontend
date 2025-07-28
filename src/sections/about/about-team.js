import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { _socials, _carouselsMembers } from 'src/_mock';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import Carousel, { useCarousel, CarouselArrows } from 'src/components/carousel';
import Grid from '@mui/material/Unstable_Grid2';
import { useResponsive } from '../../hooks/use-responsive';

// ----------------------------------------------------------------------

export default function AboutTeam({ title, subtitle, images }) {
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');

  const lightMode = theme.palette.mode === 'light';

  const shadow = `-40px 40px 80px ${alpha(
    lightMode ? theme.palette.grey[500] : theme.palette.common.black,
    0.24
  )}`;

  const carousel = useCarousel({
    infinite: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  });

  return (
    <Container component={MotionViewport} sx={{ textAlign: 'center' }}>
      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ mb: 3, color: 'primary.main' }}>
          {title}
        </Typography>
      </m.div>

      <Grid container sx={{ mt: 5}} columnSpacing={{ md: 10 }} alignItems="flex-start">
        <Grid xs={12} md={7}>
          <m.div variants={varFade().inRight}>
            <Typography
              sx={{
                fontSize: '1.325rem',
                textAlign: 'justify',
              }}
            >
              Il cuore di Executive Protection Agency è il nostro team, composto da professionisti selezionati con background d’eccellenza, una leadership operativa che garantisce soluzioni rapide ed efficaci, affidabilità come pilastro delle nostre operazioni sul campo con oltre trent’anni di esperienza in operazioni di sicurezza globale, specializzato in protezione fisica e gestione di contesti ad alto rischio, esperti in Counter-Terrorism,  con un impareggiabile sinergia tra certificazioni accademiche prestigiose ed esperienza sul campo, tra intelligence strategica, cybersecurity e protezione di infrastrutture critiche.
              <br />
              <br />
              Ogni membro del nostro team è formato secondo i più alti standard internazionali, assicurando competenza, discrezione e prontezza in ogni situazione.
            </Typography>
          </m.div>
        </Grid>
        <Grid container xs={12} md={5} alignItems="center" sx={{ pr: { md: 7 } }}>
            <Grid xs={12}>
              <m.div variants={varFade().inUp}>
                <Image
                  alt="our office 2"
                  src={images[1] ? images[1].url : "/assets/images/about/team_1.jpg"}
                  ratio="1/1"
                  sx={{ borderRadius: 3, boxShadow: shadow }}
                />
              </m.div>
            </Grid>
          </Grid>
      </Grid>
    </Container>
  );
}

// ----------------------------------------------------------------------

function MemberCard({ member }) {
  const { name, role, avatarUrl } = member;
  return (
    <Card key={name}>
      <Typography variant="subtitle1" sx={{ mt: 2.5, mb: 0.5 }}>
        {name}
      </Typography>

      <Typography variant="body2" sx={{ mb: 2.5, color: 'text.secondary' }}>
        {role}
      </Typography>

      <Box sx={{ px: 1 }}>
        <Image alt={name} src={avatarUrl} ratio="1/1" sx={{ borderRadius: 2 }} />
      </Box>

      <Stack direction="row" alignItems="center" justifyContent="center" sx={{ p: 2 }}>
        {_socials.map((social) => (
          <IconButton
            key={social.name}
            sx={{
              color: social.color,
              '&:hover': {
                bgcolor: alpha(social.color, 0.08),
              },
            }}
          >
            <Iconify icon={social.icon} />
          </IconButton>
        ))}
      </Stack>
    </Card>
  );
}

MemberCard.propTypes = {
  member: PropTypes.object,
};
