import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import {ShowSingleCharacterPage} from './ShowSingleCharacter';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});
    
describe('ShowSingleCharacterPage test', () => {
  const setup = async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<ShowSingleCharacterPage />);
    });
  };

  it('has header', () => {
    setup();
    expect(screen.getByTestId('ShowSingleCharacterPage')).toBeInTheDocument();
  });
  
  // keep with others tests 
});
