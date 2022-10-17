import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { HeaderPage } from './HeaderPage';
import store from '../../redux/store';
import { Provider } from 'react-redux';

let container: any;

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

describe('HeaderPage test', () => {
  const renderComponent = () =>
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/`]}>
          <Routes>
            <Route path="/" element={<HeaderPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  describe('Logo render', () => {
    it.each`
      name              | content
      ${'Home page id'} | ${'home-page'}
      ${'An Appbar'}    | ${'app-bar-id'}
    `('Should has $name', async ({ content }) => {
      await renderComponent();
      await waitFor(() => {
        expect(screen.getByTestId(content)).toBeInTheDocument();
      });
    });
  });
});
