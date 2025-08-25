'use client';

import { useState, useCallback } from 'react';
import {
  Button,
  MenuItem,
  MenuList,
  Popover,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import Iconify from 'src/components/iconify';
import { useTranslation } from 'react-i18next';
import { allLangs } from 'src/locales/config-lang';

// ----------------------------------------------------------------------

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [openPopover, setOpenPopover] = useState(null);

  const currentLang = allLangs.find((lang) => lang.value === i18n.language) || allLangs[0];

  const handleOpenPopover = useCallback((event) => {
    setOpenPopover(event.currentTarget);
  }, []);

  const handleClosePopover = useCallback(() => {
    setOpenPopover(null);
  }, []);

  const handleChangeLang = useCallback((newLang) => {
    i18n.changeLanguage(newLang.value);
    handleClosePopover();
    // Forza il refresh della pagina per assicurare che tutte le traduzioni siano aggiornate
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }, [i18n, handleClosePopover]);

  return (
    <>
      <IconButton
        onClick={handleOpenPopover}
        sx={{
          width: 40,
          height: 40,
          ...(openPopover && {
            bgcolor: 'action.selected',
          }),
        }}
      >
        <Iconify icon={currentLang.icon} sx={{ width: 28, height: 28 }} />
      </IconButton>

      <Popover
        open={!!openPopover}
        anchorEl={openPopover}
        onClose={handleClosePopover}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuList
          disablePadding
          sx={{
            p: 0.5,
            gap: 0.5,
            width: 160,
            display: 'flex',
            flexDirection: 'column',
            [`& .MuiMenuItem-root`]: {
              px: 1,
              py: 0.75,
              gap: 2,
              borderRadius: 0.75,
              [`&.Mui-selected`]: {
                bgcolor: 'action.selected',
                fontWeight: 'fontWeightSemiBold',
              },
            },
          }}
        >
          {allLangs.slice(0, 2).map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === currentLang.value}
              onClick={() => handleChangeLang(option)}
            >
              <Iconify icon={option.icon} sx={{ width: 28, height: 28 }} />
              <Typography variant="body2">{option.label}</Typography>
            </MenuItem>
          ))}
        </MenuList>
      </Popover>
    </>
  );
}
