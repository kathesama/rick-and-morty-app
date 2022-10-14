import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import { CustomChipComponent } from './CustomChip';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});

describe('CustomChipComponent test', () => {
  const setup = async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<CustomChipComponent />);
    });
  };

  it('has header', () => {
    setup();
    expect(screen.getByTestId('CustomChipComponent-testtitle')).toBeInTheDocument();
  });

  // keep with others tests
});
