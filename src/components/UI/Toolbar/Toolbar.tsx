/*
Created by: Katherine Aguirre
On: 01/10/2022 : 01/10/2022
Project: rick-and-morty-app
*/
import React, { FC } from 'react';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

import { Logo } from '../Logo/Logo';

import { MenuSettings } from '../MenuNavBar/MenuNavBar';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsToolbarBoxComponent {
  pages: MenuSettings[];
  handleOpenNavMenu(): any;
  anchorElNav(): any;
  handleCloseNavMenu(): any;
}

const ToolbarBoxComponent: FC<any> = ({ pages, handleOpenNavMenu, anchorElNav, handleCloseNavMenu }: PropsToolbarBoxComponent): any => (
  <>
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} data-testid="responsive-box-id">
      <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit" data-testid="icon-button-id">
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
        data-testid="pages-menu-id"
      >
        {pages?.map((page) => (
          <MenuItem key={page?.menuTitle} onClick={handleCloseNavMenu}>
            {page?.icon}
            <Typography textAlign="center">{page?.menuTitle}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
    <Logo />
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages?.map((page) => (
        <Button key={page?.menuTitle} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
          {page?.menuTitle}
        </Button>
      ))}
    </Box>
  </>
);

export { ToolbarBoxComponent, PropsToolbarBoxComponent };
