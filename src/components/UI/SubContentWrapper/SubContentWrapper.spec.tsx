import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import { SubContentWrapperComponent } from './SubContentWrapper';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});

describe('SubContentWrapperComponent test', () => {
  const setup = async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<SubContentWrapperComponent />);
    });
  };

  it('has header', () => {
    setup();
    expect(screen.getByTestId('SubContentWrapperComponent')).toBeInTheDocument();
  });

  // keep with others tests
});
