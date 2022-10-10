import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { UnderConstructionPage } from './UnderConstruction';
import { NotFoundPage } from '../NotFound/NotFound';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});

describe('UnderConstructionPage test', () => {
  const renderComponent = (url: string) =>
    render(
      <MemoryRouter initialEntries={[`/${url}`]}>
        <Routes>
          <Route path={`/${url}`} element={<UnderConstructionPage url={`/${url}`} />} />
        </Routes>
      </MemoryRouter>
    );

  it('has header', async () => {
    await renderComponent('');
    expect(screen.getByTestId('UnderConstructionPage')).toBeInTheDocument();
  });

  it.each`
    name                                            | url             | content
    ${"Has a message text including '/characters'"} | ${'characters'} | ${`Page /characters under construction`}
    ${"Has a message text including '/locations'"}  | ${'locations'}  | ${`Page /locations under construction`}
    ${"Has a message text including '/episodes'"}   | ${'episodes'}   | ${`Page /episodes under construction`}
    ${"Has a message text including '/readme'"}     | ${'readme'}     | ${`Page /readme under construction`}
  `('Should has $name', async ({ url, content }) => {
    await renderComponent(url);
    let message: any;
    act(() => {
      message = screen.getByText(content);
    });
    expect(message).toBeInTheDocument();
  });
});
