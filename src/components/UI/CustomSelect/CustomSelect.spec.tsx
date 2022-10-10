import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import {CustomSelectComponent} from './CustomSelect';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});

describe('CustomSelectComponent test', () => {
  const setup = async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<CustomSelectComponent />);
    });
  };

  it('has header', () => {
    setup();
    expect(screen.getByTestId('CustomSelectComponent')).toBeInTheDocument();
  });

  it.each`
    component       | id
    ${'Box Header'} | ${'CustomSelectComponent'}
    ${'Form controlledPageCount'} | ${'form-control-select-id'}
    ${'Input Label'} | ${'input-label-select-id'}
    ${'Select'} | ${'select-select-id'}
  `('Should has: $component', async ({ id }) => {
    await setup();
    await waitFor(() => {
      expect(screen.getByTestId(id)).toBeInTheDocument();
    });
  });

  // keep with others tests
});
