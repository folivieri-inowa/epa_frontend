import { paths } from 'src/routes/paths';

import { PATH_AFTER_LOGIN } from 'src/config-global';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navConfig = [
  {
    title: 'Home',
    path: '/',
    icon: <Iconify icon="carbon:basketball" sx={{ width: 1, height: 1 }} />,
  },
  {
    title: 'Vip',
    path: paths.vip,
    icon: <Iconify icon="solar:atom-bold-duotone" />,
   /*  children: [
      {
        subheader: '',
        items: [
          { title: 'Vip', path: paths.security_management.vip },
          { title: 'Corporate', path: paths.security_management.corporate },
          { title: 'Infrastrutture e siti sensibili', path: paths.security_management.infrastructures },
        ],
      },
    ], */
  },
  {
    title: 'Corporate e Società',
    path: paths.corporate,
    icon: <Iconify icon="solar:atom-bold-duotone" />,
  },
  {
    title: 'Infrastrutture e siti sensibili',
    path: paths.infrastructures,
    icon: <Iconify icon="solar:atom-bold-duotone" />,
  },
  {
    title: 'Formazione',
    path: paths.training,
    icon: <Iconify icon="carbon:basketball" sx={{ width: 1, height: 1 }} />,
  },
  {
    title: 'Anti Terrorismo',
    path: paths.anti_terrorism,
    icon: <Iconify icon="carbon:basketball" sx={{ width: 1, height: 1 }} />,
  },
];
