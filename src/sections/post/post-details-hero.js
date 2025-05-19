import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import SpeedDial from '@mui/material/SpeedDial';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import { alpha, styled, useTheme } from '@mui/material/styles';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import { useResponsive } from 'src/hooks/use-responsive';

import { fDate } from 'src/utils/format-time';

import { _socials } from 'src/_mock';
import { bgBlur, bgGradient } from 'src/theme/css';

import Iconify from 'src/components/iconify';
import { MotionContainer, varFade } from '../../components/animate';
import { m } from 'framer-motion';
import ComponentBlock from '../_examples/component-block';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

// ----------------------------------------------------------------------
const StyledPolygon = styled('div')(({ opacity = 1, anchor = 'left', theme }) => ({
  ...bgBlur({
    opacity,
    color: theme.palette.background.default,
  }),
  zIndex: 9,
  bottom: 85,
  height: 80,
  width: '100%',
  position: 'absolute',
  clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
  ...(anchor === 'left' && {
    left: 0,
    ...(theme.direction === 'rtl' && {
      transform: 'scale(-1, 1)',
    }),
  }),
  ...(anchor === 'right' && {
    right: 0,
    transform: 'scaleX(-1)',
    ...(theme.direction === 'rtl' && {
      transform: 'scaleX(1)',
    }),
  }),
}));

export default function PostDetailsHero({ title, subtitle, coverUrl, createdAt }) {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: { md: 460 },
          py: { xs: 10, md: 0 },
          overflow: 'hidden',
          position: 'relative',
          backgroundSize: '60%',
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
          backgroundImage:
            `url(/assets/background/overlay_1.svg), url(${process.env.NEXT_PUBLIC_HOST_API + coverUrl})`,
        }}
      >
        <Container component={MotionContainer}>
          <Box
            sx={{
              bottom: { md: 80 },
              position: { md: 'absolute' },
              textAlign: {
                xs: 'left',
                md: 'left',
              },
            }}
          >
            <m.div variants={varFade().inRight}>
              <Typography
                variant="h2"
                sx={{
                  mt: 3,
                  color: 'primary.main',
                  fontWeight: 'fontWeightSemiBold',
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  mt: 3,
                  color: 'common.white',
                  fontWeight: 'fontWeightSemiBold',
                }}
              >
                {subtitle}
              </Typography>
            </m.div>
          </Box>
        </Container>
      </Box>
      {/* {mdUp && renderPolygons} */}
    </>
  );
}

PostDetailsHero.propTypes = {
  author: PropTypes.object,
  coverUrl: PropTypes.string,
  createdAt: PropTypes.string,
  title: PropTypes.string,
};
