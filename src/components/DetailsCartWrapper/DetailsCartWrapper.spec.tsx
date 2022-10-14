import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import { DetailsCartWrapperComponent } from './DetailsCartWrapper';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../../graphql';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { LocationCardComponent } from '../LocationCard/LocationCard';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});

describe('DetailsCartWrapperComponent test', () => {
  const renderComponent = () =>
    render(
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <MemoryRouter initialEntries={[`/locations`]}>
            <Routes>
              <Route path="/locations" element={<DetailsCartWrapperComponent />} />
            </Routes>
          </MemoryRouter>
        </ApolloProvider>
      </Provider>
    );

  const setup = async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<DetailsCartWrapperComponent />);
    });
  };

  it('has header', () => {
    renderComponent();
    expect(screen.getByTestId('details-cart-wrapper')).toBeInTheDocument();
  });

  // keep with others tests
});
