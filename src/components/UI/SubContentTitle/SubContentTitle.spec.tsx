import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import { SubContentTitleComponent } from './SubContentTitle';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});

describe('SubContentTitleComponent test', () => {
  const setup = async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<SubContentTitleComponent />);
    });
  };

  it('has header', () => {
    setup();
    expect(screen.getByTestId('SubContentTitleComponent')).toBeInTheDocument();
  });

  // keep with others tests
});
