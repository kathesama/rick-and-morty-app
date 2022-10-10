import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import { DynamicFilterComponent } from './DynamicFilter';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});

describe('DynamicFilterComponent test', () => {
  const setup = async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<DynamicFilterComponent />);
    });
  };

  it('has header', () => {
    setup();
    expect(screen.getByTestId('DynamicFilterComponent')).toBeInTheDocument();
  });

  it.each`
    component       | id
    ${'Box Header'} | ${'DynamicFilterComponent'}
  `('Should has: $component', async ({ id }) => {
    await setup();
    await waitFor(() => {
      expect(screen.getByTestId(id)).toBeInTheDocument();
    });
  });
  // keep with others tests
});
