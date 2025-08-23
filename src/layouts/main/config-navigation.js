import { paths } from 'src/routes/paths';

import { PATH_AFTER_LOGIN } from 'src/config-global';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const getNavConfig = (t) => [
  {
    title: t('navigation.home'),
    path: '/',
    icon: <Iconify icon="carbon:home" sx={{ width: 1, height: 1 }} />,
  },
  {
    title: t('navigation.about'),
    path: paths.chi_siamo,
    icon: <Iconify icon="mdi:account-group" sx={{ width: 1, height: 1 }} />,
  },
  {
    title: t('navigation.team'),
    path: paths.il_team,
    icon: <Iconify icon="mdi:account-multiple" sx={{ width: 1, height: 1 }} />,
  },
  {
    title: t('navigation.travel_risk_management'),
    path: paths.travel_risk_management,
    icon: <Iconify icon="mdi:airplane-takeoff" />,
  },
  {
    title: t('navigation.strategic_protection'),
    path: paths.protezione_strategica,
    icon: <Iconify icon="mdi:shield-account" />,
  },
  {
    title: t('navigation.events'),
    path: paths.eventi,
    icon: <Iconify icon="mdi:ticket-confirmation" />,
  },
  {
    title: t('navigation.luxury_security'),
    path: paths.luxury_security,
    icon: <Iconify icon="mdi:security" />,
  }
];

// Se necessario in futuro, usare sempre getNavConfig(t) per le traduzioni
