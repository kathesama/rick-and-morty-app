import React from 'react';
import { act, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import { AboutComponent } from './About';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});

describe('AboutComponent test', () => {
  const setup = async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<AboutComponent />);
    });
  };

  it.each`
    component       | id
    ${'Box'}        | ${'about-box-ui'}
    ${'IconButton'} | ${'about-tooltip-icon-ui'}
    ${'Avatar'}     | ${'about-tooltip-icon-avatar-ui'}
  `('Should has: $component', async ({ id }) => {
    await setup();
    await waitFor(() => {
      expect(screen.getByTestId(id)).toBeInTheDocument();
    });
  });
});
