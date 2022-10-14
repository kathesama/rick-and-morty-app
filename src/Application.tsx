import React, { FC } from 'react';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import theme from './assets/theme';
import { HeaderPage } from './pages/Header/HeaderPage';
import { NotFoundPage } from './pages/NotFound/NotFound';
import HomePage from './pages/Home/Home';
import { UnderConstructionPage } from './pages/UnderConstruction/UnderConstruction';
import { ShowCharactersPage } from './pages/Characters/ShowCharacters/ShowCharacters';
import { ShowLocationsPage } from './pages/Locations/ShowLocations/ShowLocations';
import { ShowEpisodesPage } from './pages/Episodes/ShowEpisodes/ShowEpisodes';
import { ShowSingleCharacterPage } from './pages/Characters/ShowSingleCharacter/ShowSingleCharacter';
import { ShowSingleLocationPage } from './pages/Locations/ShowSingleLocation/ShowSingleLocation';
import { ShowSingleEpisodePage } from './pages/Episodes/ShowSingleEpisode/ShowSingleEpisode';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IApplicationProps {}

const Application: FC<IApplicationProps> = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route element={<HeaderPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters/*">
            <Route index element={<ShowCharactersPage />} />
            <Route path=":id" element={<ShowSingleCharacterPage />} />
          </Route>
          <Route path="/locations">
            <Route index element={<ShowLocationsPage />} />
            <Route path=":id" element={<ShowSingleLocationPage />} />
          </Route>
          <Route path="/episodes">
            <Route index element={<ShowEpisodesPage />} />
            <Route path=":id" element={<ShowSingleEpisodePage />} />
          </Route>
          <Route path="/readme" element={<UnderConstructionPage url="readme" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default Application;
