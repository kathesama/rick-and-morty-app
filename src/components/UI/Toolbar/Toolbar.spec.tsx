import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import { ToolbarBoxComponent } from './Toolbar';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../../../graphql';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { LanguageToggleButtonsComponent } from '../LanguageToggleButtons/LanguageToggleButtons';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});

describe('ResponsiveBoxComponent test', () => {
  const renderComponent = () =>
    render(
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <MemoryRouter initialEntries={[`/`]}>
            <Routes>
              <Route path="/" element={<ToolbarBoxComponent />} />
            </Routes>
          </MemoryRouter>
        </ApolloProvider>
      </Provider>
    );

  it.each`
    component       | id
    ${'Box'}        | ${'responsive-box-id'}
    ${'IconButton'} | ${'icon-button-id'}
  `('Should has: $component', async ({ id }) => {
    await renderComponent();
    await waitFor(() => {
      expect(screen.getByTestId(id)).toBeInTheDocument();
    });
  });
});
