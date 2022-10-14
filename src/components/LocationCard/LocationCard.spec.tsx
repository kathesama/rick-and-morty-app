import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import { LocationCardComponent } from './LocationCard';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../../graphql';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ShowLocationsPage } from '../../pages/Locations/ShowLocations/ShowLocations';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});

describe('LocationCardComponent test', () => {
  const renderComponent = () =>
    render(
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <MemoryRouter initialEntries={[`/locations`]}>
            <Routes>
              <Route path="/locations" element={<LocationCardComponent />} />
            </Routes>
          </MemoryRouter>
        </ApolloProvider>
      </Provider>
    );

  it('has header', () => {
    renderComponent();
    expect(screen.getByTestId('LocationCardComponent')).toBeInTheDocument();
  });

  // keep with others tests
});
