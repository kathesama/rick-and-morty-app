import React, { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HeaderPage } from './pages/Header/HeaderPage';
import { NotFoundPage } from './pages/NotFound/NotFound';
import HomePage from './pages/Home/Home';
import { UnderConstructionPage } from './pages/UnderConstruction/UnderConstruction';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IApplicationProps {}

const Application: FC<IApplicationProps> = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<HeaderPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters">
          <Route index element={<UnderConstructionPage url="characters" />} />
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
      {/* <Route path="/*" element={<HeaderPage />} > */}
      {/*  <Route path="" element={<HomePage />} /> */}
      {/*  <Route path="home" element={<HomePage />} /> */}
      {/*  <Route path="*" element={<NotFoundPage url="unknown" />} /> */}
      {/* </Route> */}
      {/* <Route path="/main/*" element={<HeaderPage />} > */}
      {/* <Route path="about"> */}
      {/*  <Route index element={<AboutPage />} /> */}
      {/*  <Route path=":number" element={<AboutPage />} /> */}
      {/* </Route> */}
      {/* <Route path="layout" element={<LayoutComponent />}> */}
      {/*  <Route index element={<AboutPage />} /> */}
      {/*  <Route path=":number" element={<AboutPage />} /> */}
      {/* <Route path="*" element={<NotFoundPage url="unknown" />} /> */}
    </Routes>
  </BrowserRouter>
);

export default Application;
