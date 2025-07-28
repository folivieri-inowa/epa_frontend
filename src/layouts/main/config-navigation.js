import { paths } from 'src/routes/paths';

import { PATH_AFTER_LOGIN } from 'src/config-global';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navConfig = [
  {
    title: 'Home',
    path: '/',
    icon: <Iconify icon="carbon:home" sx={{ width: 1, height: 1 }} />,
  },
  {
    title: 'Chi siamo',
    path: paths.about,
    icon: <Iconify icon="mdi:account-group" sx={{ width: 1, height: 1 }} />,
  },
  {
    title: 'Ville e residenze di Lusso',
    path: paths.security_management,
    icon: <Iconify icon="solar:shield-keyhole-bold-duotone" />,
  },
  {
    title: 'Hotel e Hospitality',
    path: paths.hotel_security_management,
    icon: <Iconify icon="mdi:hotel" />,
  },
  {
    title: 'Travel Risk Management',
    path: paths.risk_travel_management,
    icon: <Iconify icon="mdi:airplane-takeoff" />,
  },
  {
    title: 'Eventi VIP',
    path: paths.eventi_vip,
    icon: <Iconify icon="mdi:ticket-confirmation" />,
  },
  {
    title: 'Corporate, Infrastrutture e Siti Sensibili',
    path: paths.corporate_infrastrutture,
    icon: <Iconify icon="mdi:office-building" />,
  },
  {
    title: 'Anti Terrorismo',
    path: paths.anti_terrorism,
    icon: <Iconify icon="mdi:shield-alert" />,
  }
];
