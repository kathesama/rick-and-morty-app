import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ShowEpisodesPage } from './ShowEpisodes';
import store from '../../../redux/store';
import apolloClient from '../../../graphql';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});

describe('ShowEpisodesPage test', () => {
  const renderComponent = () =>
    render(
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <MemoryRouter initialEntries={[`/episodes`]}>
            <Routes>
              <Route path="/episodes" element={<ShowEpisodesPage />} />
            </Routes>
          </MemoryRouter>
        </ApolloProvider>
      </Provider>
    );

  it('has header', () => {
    renderComponent();
    expect(screen.getByTestId('ShowEpisodesPage')).toBeInTheDocument();
  });

  // keep with others tests
});
