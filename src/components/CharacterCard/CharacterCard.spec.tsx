import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import {CharacterCardComponent} from './CharacterCard';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});
    
describe('CharacterCardComponent test', () => {
  const setup = async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<CharacterCardComponent />);
    });
  };

  it('has header', () => {
    setup();
    expect(screen.getByTestId('CharacterCardComponent')).toBeInTheDocument();
  });
  
  // keep with others tests 
});
