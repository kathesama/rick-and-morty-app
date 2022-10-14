import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import { LocationCardComponent } from './LocationCard';

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
  const setup = async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<LocationCardComponent />);
    });
  };

  it('has header', () => {
    setup();
    expect(screen.getByTestId('LocationCardComponent')).toBeInTheDocument();
  });

  // keep with others tests
});
