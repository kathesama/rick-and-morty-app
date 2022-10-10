import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { HeaderPage } from './HeaderPage';

/* import { DefaultRequestMultipartBody, rest } from 'msw';
   import { tokenUserUrl } from '../../utilities/routes';
   import useAxios from '../../hooks/useAxios/useAxios';
   import i18n from '../../locale/i18n';
   import ActivationPage from './activationPage'; */

/* import en from '@/locale/en.json';
   import es from '@/locale/es.json';
   import ActivationPage from '@/pages/activationPage/activationPage';
   import { getPostUserUrl, tokenUserUrl } from '@/utilities/routes';
   import useAxios from '@/hooks/useAxios/useAxios'; */

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});

describe('HeaderPage test', () => {
  const renderComponent = () =>
    render(
      <MemoryRouter initialEntries={[`/`]}>
        <Routes>
          <Route path="/" element={<HeaderPage />} />
        </Routes>
      </MemoryRouter>
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
