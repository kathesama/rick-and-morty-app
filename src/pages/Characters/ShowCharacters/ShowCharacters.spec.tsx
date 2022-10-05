import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import {ShowCharactersPage} from './ShowCharacters';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import store from '../../../redux/store';
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

describe('ShowCharactersPage test', () => {
  const renderComponent = () =>
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/characters`]}>
          <Routes>
            <Route path="/characters" element={<ShowCharactersPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

  it('has header', () => {
    renderComponent();
    expect(screen.getByTestId('ShowCharactersPage')).toBeInTheDocument();
  });

  // keep with others tests
});
