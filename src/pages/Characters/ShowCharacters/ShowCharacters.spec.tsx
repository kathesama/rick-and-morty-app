import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ShowCharactersPage } from './ShowCharacters';
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

describe('ShowCharactersPage test', () => {
  const renderComponent = () =>
    render(
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <MemoryRouter initialEntries={[`/characters`]}>
            <Routes>
              <Route path="/characters" element={<ShowCharactersPage />} />
            </Routes>
          </MemoryRouter>
        </ApolloProvider>
      </Provider>
    );

  it('has header', () => {
    renderComponent();
    expect(screen.getByTestId('ShowCharactersPage')).toBeInTheDocument();
  });

  // keep with others tests
});
