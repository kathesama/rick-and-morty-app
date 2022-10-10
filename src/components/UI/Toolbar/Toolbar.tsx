/*
Created by: Katherine Aguirre
On: 01/10/2022 : 01/10/2022
Project: rick-and-morty-app
*/
import React, { FC } from 'react';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

import { Logo } from '../Logo/Logo';
import { MenuSettings } from '../MenuNavBar/MenuNavBar';
import { MenuItemCustomComponent } from '../MenuItemCustom/MenuItemCustom';

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
          <div key={uuidv4()}>
            <MenuItemCustomComponent
              keyId={uuidv4()}
              onClick={handleCloseNavMenu}
              component={page?.component === 'a' ? 'a' : Link}
              to={page?.component === 'link' ? page?.pageURL : undefined}
              href={page?.component === 'a' ? page?.pageURL : undefined}
            >
              {page?.icon}
              <Typography textAlign="center">{page?.menuTitle}</Typography>
            </MenuItemCustomComponent>
          </div>

          /* <MenuItem key={page?.menuTitle} onClick={handleCloseNavMenu}>
               {page?.icon}
               <Typography textAlign="center">{page?.menuTitle}</Typography>
             </MenuItem> */
        ))}
      </Menu>
    </Box>
    <Logo />
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages?.map((page) => (
        <div key={uuidv4()}>
          <Button key={uuidv4()} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }} component={Link} to={page?.pageURL}>
            {page?.menuTitle}
          </Button>
        </div>
      ))}
    </Box>
  </>
);

export { ToolbarBoxComponent, PropsToolbarBoxComponent };
