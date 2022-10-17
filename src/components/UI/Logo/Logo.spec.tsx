import { act, render, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import { Logo } from './Logo';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { HeaderPage } from '../../../pages/Header/HeaderPage';
import * as React from 'react';

let container: any;

describe('Logo', () => {
  const renderComponent = (value = null) =>
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/`]}>
          <Routes>
            <Route path="/" element={value ? <Logo logoText={value} /> : <Logo />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

  afterEach(() => {
    container.remove();
    container = null;
  });

  describe('Checking assembly', () => {
    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
      renderComponent();
    });

    it.each`
      name                       | content
      ${'Logo space'}            | ${'logo-test-id'}
      ${'A badge'}               | ${'styled-badge-test-id'}
      ${'Rick and Morty name'}   | ${'rick-and-morty-test-id'}
      ${'Rick and Morty avatar'} | ${'avatar-test-id'}
    `('displays $name', async ({ content }) => {
      const languageImg = await waitFor(() => screen.getByTestId(content));

      expect(languageImg).toBeInTheDocument();
    });
  });

  describe('Checking content display', () => {
    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    it.each`
      name                     | content             | expectValue
      ${'Rick and Morty name'} | ${'Rick and Morty'} | ${'Rick and Morty'}
      ${'Rick and Morty name'} | ${'Rick y Morty'}   | ${'Rick y Morty'}
      ${'Rick and Morty name'} | ${''}               | ${'Rick and Morty'}
    `("When $name is '$content' should show $expectValue as logo name", async ({ content, expectValue }) => {
      await renderComponent(content);
      const logoText = await waitFor(() => screen.queryByText(expectValue));

      expect(logoText).toBeInTheDocument();
    });
  });
});
