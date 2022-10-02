import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { NotFoundPage } from './NotFound';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});

describe('NotFoundPage test', () => {
  const renderComponent = () =>
    render(
      <MemoryRouter initialEntries={[`/error`]}>
        <Routes>
          <Route path="/error" element={<NotFoundPage />} />
        </Routes>
      </MemoryRouter>
    );

  it.each`
    name                      | content
    ${'Has initial wrapper'}  | ${'not-found-page'}
    ${'Has a box'}            | ${'box-not-found-id'}
    ${'Has a 404 text'}       | ${'typography-404-not-found-id'}
    ${'Has a not found text'} | ${'typography-message-not-found-id'}
    ${'Has a home button'}    | ${'button-home-not-found-id'}
  `('Should has $name', async ({ content }) => {
    await renderComponent();
    expect(screen.getByTestId(content)).toBeInTheDocument();
  });

  // keep with others tests
});
