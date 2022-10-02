import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import { ToolbarBoxComponent } from './Toolbar';

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
  const setup = async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<ToolbarBoxComponent />);
    });
  };

  it.each`
    component       | id
    ${'Box'}        | ${'responsive-box-id'}
    ${'IconButton'} | ${'icon-button-id'}
  `('Should has: $component', async ({ id }) => {
    await setup();
    await waitFor(() => {
      expect(screen.getByTestId(id)).toBeInTheDocument();
    });
  });
});
