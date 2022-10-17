import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { act, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';

import { MenuNavBarComponent } from './MenuNavBar';
import store from '../../../redux/store';
import apolloClient from '../../../graphql';
import { ToolbarBoxComponent } from '../Toolbar/Toolbar';
import { LanguageToggleButtonsComponent } from '../LanguageToggleButtons/LanguageToggleButtons';
import i18n from '../../../locale/i18n';
let container: any;

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withTranslation: () => (Component: { defaultProps: any }) => {
    Component.defaultProps = { ...Component.defaultProps, t: () => '' };
    return Component;
  },
  useTranslation: () => ({
    t: (str: any) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
}));

const renderComponent = () =>
  act(() => {
    ReactDOM.createRoot(container).render(
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <MemoryRouter initialEntries={[`/`]}>
            <Routes>
              <Route path="/" element={<MenuNavBarComponent />} />
            </Routes>
          </MemoryRouter>
        </ApolloProvider>
      </Provider>
    );
  });

describe('MenuNavBarComponent test', () => {
  afterEach(async () => {
    container.remove();
    container = null;
  });
  describe('Rendering', () => {
    it('has header', async () => {
      container = document.createElement('div');
      document.body.appendChild(container);
      await renderComponent();
      expect(screen.getByTestId('MenuNavBarComponent')).toBeInTheDocument();
    });
  });
  describe('Checking structure', () => {
    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });
    it.each`
      component         | id
      ${'App bar'}      | ${'app-bar-id'}
      ${'Container'}    | ${'container-id'}
      ${'Toolbar'}      | ${'toolbar-id'}
      ${'Logo'}         | ${'logo-test-id'}
      ${'Menu options'} | ${'responsive-box-id'}
      ${'About me'}     | ${'about-box-ui'}
    `('Should has: $component', async ({ id }) => {
      await renderComponent();
      await waitFor(() => {
        expect(screen.getByTestId(id)).toBeInTheDocument();
      });
    });
  });
});
