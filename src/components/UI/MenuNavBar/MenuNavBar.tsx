/*
Created by: Katherine Aguirre
On: 01/10/2022 : 01/10/2022
Project: rick-and-morty-app
*/
import { AppBar, Container, createTheme, ThemeProvider, Toolbar } from '@mui/material';
import { useTranslation, withTranslation } from 'react-i18next';
import React, { FC, useState, MouseEvent } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import PersonPinCircleTwoToneIcon from '@mui/icons-material/PersonPinCircleTwoTone';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import MovieFilterTwoToneIcon from '@mui/icons-material/MovieFilterTwoTone';

import { ToolbarBoxComponent } from '../Toolbar/Toolbar';
import { AboutComponent } from '../About/About';

import { LanguageToggleButtonsComponent } from '../LanguageToggleButtons/LanguageToggleButtons';

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

const MenuNavBarComponent: FC<Props> = (): any => {
  const { t } = useTranslation();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const pagesSettings: MenuSettings[] = [
    {
      menuTitle: t('Characters'),
      pageURL: '/characters',
      icon: <PersonPinCircleTwoToneIcon />,
      component: 'link',
    },
    {
      menuTitle: t('Locations'),
      pageURL: '/locations',
      icon: <MapTwoToneIcon />,
      component: 'link',
    },
    {
      menuTitle: t('Episodes'),
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
      pageURL: 'https://github.com/kathesama/rick-and-morty-app/blob/main/README.md',
      icon: <TextSnippetIcon />,
      component: 'a',
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
    <div data-testid="MenuNavBarComponent">
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" data-testid="app-bar-id">
          <Container maxWidth="xl" data-testid="container-id" sx={{ paddingLeft: 0 }}>
            <Toolbar disableGutters data-testid="toolbar-id">
              <ToolbarBoxComponent handleOpenNavMenu={handleOpenNavMenu} anchorElNav={anchorElNav} handleCloseNavMenu={handleCloseNavMenu} pages={pagesSettings} />
              <LanguageToggleButtonsComponent />
              &nbsp;
              <AboutComponent handleOpenUserMenu={handleOpenUserMenu} anchorElUser={anchorElUser} handleCloseUserMenu={handleCloseUserMenu} settings={aboutSettings} />
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

const MenuNavBarWithTranslation = withTranslation()(MenuNavBarComponent);

export { MenuNavBarWithTranslation as MenuNavBarComponent, MenuSettings };
