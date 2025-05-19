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
    <Container component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 10, md: 15 } }}>
      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ my: 3, color: 'primary.main' }}>
          {title}
        </Typography>
      </m.div>

      <Grid container sx={{ mt: 5}} columnSpacing={{ md: 3 }} alignItems="flex-start">
        {mdUp && (
          <Grid container xs={12} md={5} alignItems="center" sx={{ pr: { md: 7 } }}>
            <Grid xs={12}>
              <m.div variants={varFade().inUp}>
                <Image
                  alt="our office 2"
                  src={process.env.NEXT_PUBLIC_HOST_API + images[2].url}
                  ratio="1/1"
                  sx={{ borderRadius: 3, boxShadow: shadow }}
                />
              </m.div>
            </Grid>
          </Grid>
        )}
        <Grid xs={12} md={7}>
          <m.div variants={varFade().inRight}>
            <Typography
              variant="h5"
              sx={{
                color: 'common.white',
                textAlign: 'justify',
              }}
            >
              Abbiamo dedicato tutta la nostra carriera alla protezione e alla sicurezza di
              persone, famiglie, aziende, siti sensibili e infrastrutture critiche. Nel corso degli anni,
              abbiamo acquisito un'esperienza unica nella gestione della protezione, rispondendo con
              discrezione ed efficacia a ogni tipo di minaccia.
              <br />
              Abbiamo formato e addestrato professionisti del settore, specializzandoci nel Security
              Management, nell’Operative Protection e nell’Antiterrorismo moderno.
              <br />
              Ogni incarico che abbiamo acquisito ci ha reso più forti, affinando la nostra capacità di adattarci alle esigenze,
              garantendo soluzioni su misura per la protezione dei nostri clienti, siano essi individui,
              aziende o infrastrutture vitali.
            </Typography>
          </m.div>
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
