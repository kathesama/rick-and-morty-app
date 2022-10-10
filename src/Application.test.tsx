import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import Application from './Application';
import i18n from './locale/i18n';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
  await act(async () => {
    await i18n.changeLanguage('en');
  });
});

const setup = (path: string) => {
  window.history.pushState({}, '', path);
  render(<Application />);
};

describe('App', () => {
  const setup = async (path: string) => {
    act(() => {
      ReactDOM.createRoot(container).render(<Application />);
      window.history.pushState({}, '', path);
    });
  };

  it.each`
    path          | pageTestId
    ${'/'}        | ${'home-page'}
    ${'/unknown'} | ${'not-found-page'}
  `('displays $pageTestId when path is $path', async ({ path, pageTestId }) => {
    await setup(path);
    const notFound = await waitFor(() => screen.queryByTestId(pageTestId));
    expect(notFound).toBeInTheDocument();
  });
});
