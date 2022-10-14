import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import { CharacterCardComponent } from './CharacterCard';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});

const defaultProps = {
  image: 'https://rickandmortyapi.com/api/character/avatar/266.jpeg',
  name: 'Piece of Toast',
  gender: 'Genderless',
  status: 'Alive',
  location: 'unknown',
  species: 'unknown',
  type: 'Bread',
  origin: 'unknown',
  episode: [
    {
      id: 8,
      name: 'Rixty Minutes',
      episode: 'S01E08',
    },
  ],
};

describe('CharacterCardComponent test', () => {
  const setup = async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<CharacterCardComponent {...defaultProps} />);
    });
  };

  it('has header', () => {
    setup();
    expect(screen.getByTestId('CharacterCardComponent')).toBeInTheDocument();
  });

  // keep with others tests
});
