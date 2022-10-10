import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HeaderPage } from './pages/Header/HeaderPage';
import { NotFoundPage } from './pages/NotFound/NotFound';
import HomePage from './pages/Home/Home';
import { UnderConstructionPage } from './pages/UnderConstruction/UnderConstruction';
import { ShowCharactersPage } from './pages/Characters/ShowCharacters/ShowCharacters';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IApplicationProps {}

const Application: FC<IApplicationProps> = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<HeaderPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters">
          <Route index element={<ShowCharactersPage />} />
        </Route>
        <Route path="/locations">
          <Route index element={<UnderConstructionPage url="locations" />} />
        </Route>
        <Route path="/episodes">
          <Route index element={<UnderConstructionPage url="episodes" />} />
        </Route>
        <Route path="/readme" element={<UnderConstructionPage url="readme" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Application;
