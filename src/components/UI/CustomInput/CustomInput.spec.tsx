import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import { CustomInputComponent } from './CustomInput';

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
  label: 'input field',
};

describe('CustomInputComponent test', () => {
  const setup = async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<CustomInputComponent {...defaultProps} />);
    });
  };

  it.each`
    component         | id
    ${'Box Header'}   | ${'CustomInputComponent'}
    ${'Form control'} | ${'form-control-select-id'}
    ${'Input field'}  | ${'form-control-custom-input-id'}
  `('Should has: $component', async ({ id }) => {
    await setup();
    await waitFor(() => {
      expect(screen.getByTestId(id)).toBeInTheDocument();
    });
  });

  // keep with others tests
});
