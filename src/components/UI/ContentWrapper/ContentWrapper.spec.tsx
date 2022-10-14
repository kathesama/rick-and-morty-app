import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import { ContentWrapperComponent } from './ContentWrapper';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});

describe('ContentWrapperComponent test', () => {
  const setup = async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<ContentWrapperComponent />);
    });
  };

  it('has header', () => {
    setup();
    expect(screen.getByTestId('ContentWrapperComponent')).toBeInTheDocument();
  });

  // keep with others tests
});
