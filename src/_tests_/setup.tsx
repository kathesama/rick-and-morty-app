import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';

/* import LanguageSelector from '../components/LanguageSelector';
   import createStore from '../state/store'; */

const RootWrapper = (children: any) => (
  <Router>
    {/* <Provider store={createStore()}> */}
    {children}
    {/* <LanguageSelector /> */}
    {/* </Provider> */}
  </Router>
);

const customRender = (ui: any, options: any) => render(ui, { wrapper: RootWrapper, ...options });

export * from '@testing-library/react';

export { customRender as render };
