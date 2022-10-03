import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import {ShowCharactersPage} from './ShowCharacters';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});
    
describe('ShowCharactersPage test', () => {
  const setup = async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<ShowCharactersPage />);
    });
  };

  it('has header', () => {
    setup();
    expect(screen.getByTestId('ShowCharactersPage')).toBeInTheDocument();
  });
  
  // keep with others tests 
});
