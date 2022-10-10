import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import { MenuItemCustomComponent } from './MenuItemCustom';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});

describe('MenuItemCustomComponent test', () => {
  const setup = async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<MenuItemCustomComponent />);
    });
  };

  it('has header', () => {
    setup();
    expect(screen.getByRole('menuitem')).toBeInTheDocument();
  });

  // keep with others tests
});
