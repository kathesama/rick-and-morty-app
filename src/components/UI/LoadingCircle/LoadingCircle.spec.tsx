import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import {LoadingCircleComponent} from './LoadingCircle';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});

describe('LoadingCircleComponent test', () => {
  const setup = async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<LoadingCircleComponent />);
    });
  };

  it.each`
    component       | id
    ${'header'}        | ${'LoadingCircleComponent'}
    ${'Circular Progress'}        | ${'circular-progress-loading-id'}    
  `('Should has $component', async ({ id }) => {
    await setup();
    await waitFor(() => {
      expect(screen.getByTestId(id)).toBeInTheDocument();
    });
  });

  // keep with others tests
});
