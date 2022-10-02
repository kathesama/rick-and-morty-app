import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HeaderPage } from './pages/Header/HeaderPage';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IApplicationProps {}

const Application: FC<IApplicationProps> = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HeaderPage />} />
      {/* <Route path="about"> */}
      {/*  <Route index element={<AboutPage />} /> */}
      {/*  <Route path=":number" element={<AboutPage />} /> */}
      {/* </Route> */}
      {/* <Route path="test" element={<TestPage />} /> */}
      {/* <Route path="layout" element={<LayoutComponent />}> */}
      {/*  <Route index element={<AboutPage />} /> */}
      {/*  <Route path=":number" element={<AboutPage />} /> */}
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
);

export default Application;
