import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom/client';

import { LanguageToggleButtonsComponent } from './LanguageToggleButtons';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../../../graphql';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { CharacterCardComponent } from '../../CharacterCard/CharacterCard';

let container: any;
let acceptLanguageHeader: string | null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});

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

describe('LanguageToggleButtonsComponent test', () => {
  const renderComponent = () =>
    render(
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <MemoryRouter initialEntries={[`/`]}>
            <Routes>
              <Route path="/" element={<LanguageToggleButtonsComponent />} />
            </Routes>
          </MemoryRouter>
        </ApolloProvider>
      </Provider>
    );

  it('has header', () => {
    renderComponent();
    expect(screen.getByTestId('LanguageToggleButtonsComponent')).toBeInTheDocument();
  });

  describe('Layout', () => {
    it.each`
      image
      ${'esVeImg'}
      ${'enUSImg'}
    `('Displays $image', async ({ image }) => {
      renderComponent();
      const languageImg = await waitFor(() => screen.getByTestId(image));

      expect(languageImg).toBeInTheDocument();
    });
  });

  describe('Functionality', () => {
    it.each`
      name         | id
      ${'English'} | ${'btn-language-en-us'}
      ${'Spanish'} | ${'btn-language-es-ve'}
    `('Has to exists $name button for change language', async ({ id }) => {
      renderComponent();
      const ToggleButton = await waitFor(() => screen.getByTestId(id));

      expect(ToggleButton).toBeInTheDocument();
    });

    it.each`
      name         | id
      ${'English'} | ${'btn-language-en-us'}
      ${'Spanish'} | ${'btn-language-es-ve'}
    `('Has to exists $name button for change language', async ({ id }) => {
      renderComponent();
      const ToggleButton = await waitFor(() => screen.getByTestId(id));

      expect(ToggleButton).toBeInTheDocument();
    });
  });
});
