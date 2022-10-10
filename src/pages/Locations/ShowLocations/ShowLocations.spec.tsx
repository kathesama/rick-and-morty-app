import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import {ShowLocationsPage} from './ShowLocations';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});
    
describe('ShowLocationsPage test', () => {
  const setup = async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<ShowLocationsPage />);
    });
  };

  it('has header', () => {
    setup();
    expect(screen.getByTestId('ShowLocationsPage')).toBeInTheDocument();
  });
  
  // keep with others tests 
});
