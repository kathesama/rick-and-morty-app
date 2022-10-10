import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import {ShowEpisodesPage} from './ShowEpisodes';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});
    
describe('ShowEpisodesPage test', () => {
  const setup = async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<ShowEpisodesPage />);
    });
  };

  it('has header', () => {
    setup();
    expect(screen.getByTestId('ShowEpisodesPage')).toBeInTheDocument();
  });
  
  // keep with others tests 
});
