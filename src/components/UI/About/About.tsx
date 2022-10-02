/*
Created by: Katherine Aguirre
On: 01/10/2022 : 01/10/2022
Project: rick-and-morty-app
*/
import React, { FC } from 'react';
import {v4 as uuidv4} from 'uuid';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';

import avatar from '../../../assets/img/avatar.jpeg';
import { MenuSettings } from '../MenuNavBar/MenuNavBar';
import { MenuItemCustomComponent } from '../MenuItemCustom/MenuItemCustom';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsAboutComponent {
  settings: MenuSettings[];
  handleOpenUserMenu(): any;
  anchorElUser(): any;
  handleCloseUserMenu(): any;
}

const AboutComponent: FC<any> = ({ handleOpenUserMenu, anchorElUser, handleCloseUserMenu, settings }: PropsAboutComponent): any => (
  <Box sx={{ flexGrow: 0 }} data-testid="about-box-ui">
    <Tooltip title="Know about me" data-testid="about-tooltip-ui">
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} data-testid="about-tooltip-icon-ui">
        <Avatar alt="Katherine Aguirre" src={avatar} data-testid="about-tooltip-icon-avatar-ui" />
      </IconButton>
    </Tooltip>
    <Menu
      sx={{ mt: '45px' }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
      data-testid="about-menu-ui"
    >
      {settings?.map((setting) => (
          <div key={ uuidv4() }>
            <MenuItemCustomComponent
              keyId={ uuidv4() }
              onClick={handleCloseUserMenu}
              component={setting?.component === 'a' ? 'a' : Link }
              to={setting?.component === 'link' ? setting?.pageURL : undefined }
              href={setting?.component === 'a' ? setting?.pageURL : undefined }
            >
              {setting?.icon}
              <Typography textAlign="center">{setting?.menuTitle}</Typography>
            </MenuItemCustomComponent>
          </div>
        ))}
    </Menu>
  </Box>
);

export { AboutComponent, PropsAboutComponent };
