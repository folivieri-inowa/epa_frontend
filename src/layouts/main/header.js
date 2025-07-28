'use client';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Badge, { badgeClasses } from '@mui/material/Badge';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';

import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';
import { useBoolean } from 'src/hooks/use-boolean';

import { bgBlur } from 'src/theme/css';

import Logo from 'src/components/logo';
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import Scrollbar from 'src/components/scrollbar';

import { HEADER } from '../config-layout';
import { navConfig } from './config-navigation';
import LoginButton from '../common/login-button';
import HeaderShadow from '../common/header-shadow';
import SettingsButton from '../common/settings-button';
import { _mock } from '../../_mock';
import { usePathname } from '../../routes/hooks';
import { useCallback, useEffect, useState } from 'react';

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      handleCloseMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = useCallback(() => {
    setOpenMenu(true);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setOpenMenu(false);
  }, []);

  // Componente di navigazione unificato con hamburger menu sempre attivo
  const renderNavigation = (
    <>
      <IconButton 
        onClick={handleOpenMenu} 
        sx={{ 
          ml: 1,
          borderRadius: 1,
          padding: '8px',
          color: 'common.white',
          '&:hover': {
            bgcolor: 'rgba(255,255,255,0.1)'
          }
        }}
      >
        <Iconify icon="eva:menu-2-fill" width={24} height={24} />
      </IconButton>

      <Drawer
        anchor="right"
        open={openMenu}
        onClose={handleCloseMenu}
        PaperProps={{
          sx: {
            pb: 5,
            width: 280,
          },
        }}
      >
        <Scrollbar>
          <Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              <Logo sx={{ height: 40 }} />
              <IconButton onClick={handleCloseMenu}>
                <Iconify icon="eva:close-fill" />
              </IconButton>
            </Box>
            
            <Typography variant="h6" sx={{ mb: 2, px: 1 }}>
              Menu
            </Typography>

            <Stack component="nav" spacing={1}>
              {navConfig.map((item) => (
                <Link
                  key={item.title}
                  component={Button}
                  href={item.path}
                  onClick={handleCloseMenu}
                  sx={{
                    justifyContent: 'flex-start',
                    color: pathname === item.path ? 'primary.main' : 'text.primary',
                    fontWeight: pathname === item.path ? 'bold' : 'normal',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {item.title}
                </Link>
              ))}
              
              <Button
                variant="outlined"
                color="primary"
                rel="noopener"
                href={paths.contact}
                onClick={handleCloseMenu}
                sx={{ 
                  mt: 2,
                  justifyContent: 'center'
                }}
              >
                Contattaci
              </Button>
            </Stack>
          </Box>
        </Scrollbar>
      </Drawer>
    </>
  );

  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        background: 'rgba(0,0,0,0.6)',
        height: 72,
        boxShadow: (theme) => theme.customShadows.z8,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Container 
          sx={{ 
            height: 1, 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Logo />
          
          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              variant="outlined"
              color="primary"
              rel="noopener"
              href={paths.contact}
              sx={{
                display: { xs: 'none', md: 'flex' }
              }}
            >
              Contattaci
            </Button>
            
            {renderNavigation}
          </Stack>
        </Container>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}