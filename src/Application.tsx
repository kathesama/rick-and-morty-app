import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import cssStyle from './Application.module.scss';
import HomePage from './pages/Home/Home';
import { Page } from './pages/Page/Page';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
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
