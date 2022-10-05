import React from 'react';
import { act, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import {DataGridComponent} from './DataGrid';
import { CharacterColumnsConfig, dataRow } from '../../_mocks_/constants';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});

describe('DataGridComponent test', () => {
  const setup = async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<DataGridComponent data={dataRow} columns={CharacterColumnsConfig} />);
    });
  };

  it('has header', () => {
    setup();
    expect(screen.getByTestId('DataGridComponent')).toBeInTheDocument();
  });

  it.each`
    component       | id
    ${'Box'}        | ${'box-data-gird-id'}    
  `('Should has component: $component', async ({ id }) => {
    await setup();
    await waitFor(() => {
      expect(screen.getByTestId(id)).toBeInTheDocument();
    });
  });

  it.each`
    component       | id
    ${'DataGrid'} | ${'grid'}    
  `('Should has role: $component', async ({ id }) => {
    await setup();
    await waitFor(() => {
      expect(screen.getByRole(id)).toBeInTheDocument();
    });
  });
});
