import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import {CharactersGridComponent} from './CharactersGrid';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});
    
describe('CharactersGridComponent test', () => {
  const setup = async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<CharactersGridComponent />);
    });
  };

  it('has header', () => {
    setup();
    expect(screen.getByTestId('CharactersGridComponent')).toBeInTheDocument();
  });
  
  // keep with others tests 
});
