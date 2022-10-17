import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import Application from './Application';
import i18n from './locale/i18n';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './graphql';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { MenuNavBarComponent } from './components/UI/MenuNavBar/MenuNavBar';

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

const renderComponent = () =>
  act(() => {
    ReactDOM.createRoot(container).render(
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <Application />
        </ApolloProvider>
      </Provider>
    );
  });

const setup = (path: string) => {
  window.history.pushState({}, '', path);
  renderComponent();
};

describe('App', () => {
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
