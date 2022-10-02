/*
Created by: Katherine Aguirre
On: 01/10/2022 : 01/10/2022
Project: rick-and-morty-app
*/
import { AppBar, Container, createTheme, ThemeProvider, Toolbar } from '@mui/material';
import React, { FC, useState, MouseEvent } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import PersonPinCircleTwoToneIcon from '@mui/icons-material/PersonPinCircleTwoTone';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import MovieFilterTwoToneIcon from '@mui/icons-material/MovieFilterTwoTone';

import { ToolbarBoxComponent } from '../Toolbar/Toolbar';
import { AboutComponent } from '../About/About';

import cssStyle from './MenuNavBar.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#009844',
    },
  },
});

interface MenuSettings {
  menuTitle: string;
  pageURL: string;
  icon: JSX.Element;
  component: 'link' | 'a';
}

const MenuNavBarComponent: FC<any> = (props: Props): any => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const pagesSettings: MenuSettings[] = [
    {
      menuTitle: `Character`,
      pageURL: '/characters',
      icon: <PersonPinCircleTwoToneIcon />,
      component: 'link',
    },
    {
      menuTitle: 'Location',
      pageURL: '/locations',
      icon: <MapTwoToneIcon />,
      component: 'link',
    },
    {
      menuTitle: 'Episodes',
      pageURL: '/episodes',
      icon: <MovieFilterTwoToneIcon />,
      component: 'link',
    },
  ];
  const aboutSettings: MenuSettings[] = [
    {
      menuTitle: `Github`,
      pageURL: 'https://github.com/kathesama',
      icon: <GitHubIcon />,
      component: 'a',
    },
    {
      menuTitle: 'Linkedin',
      pageURL: 'https://www.linkedin.com/in/kathesama/',
      icon: <LinkedInIcon />,
      component: 'a',
    },
    {
      menuTitle: 'Readme',
      pageURL: '/readme',
      icon: <TextSnippetIcon />,
      component: 'link',
    },
  ];

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className={cssStyle.example} data-testid="MenuNavBarComponent">
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" data-testid="app-bar-id">
          <Container maxWidth="xl" data-testid="container-id">
            <Toolbar disableGutters data-testid="toolbar-id">
              <ToolbarBoxComponent handleOpenNavMenu={handleOpenNavMenu} anchorElNav={anchorElNav} handleCloseNavMenu={handleCloseNavMenu} pages={pagesSettings} />
              <AboutComponent handleOpenUserMenu={handleOpenUserMenu} anchorElUser={anchorElUser} handleCloseUserMenu={handleCloseUserMenu} settings={aboutSettings} />
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export { MenuNavBarComponent, MenuSettings };
