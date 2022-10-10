import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import { DynamicFilterComponent } from './DynamicFilter';
import { characterInitialState } from '../../redux/characters/characters.slice';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});

const extraData = {
  gender: ['female', 'male', 'genderless', 'unknown'],
    status: ['alive', 'dead', 'unknown'],
};

const data = {
  actualFilterData: { ...characterInitialState },
  fields: [
    {
      accessor: 'name',
      filterType: 'inputField',
    },
    {
      accessor: 'status',
      filterType: 'dropdown',
    },
    {
      accessor: 'gender',
      filterType: 'dropdown',
    },
  ],
  callbackFunction: jest.fn(),
};

describe('DynamicFilterComponent test', () => {
  const setup = async () => {
    act(() => {
      ReactDOM.createRoot(container).render(
        <DynamicFilterComponent
          data={data}
          extraData={extraData}
        />
      );
    });
  };

  it.each`
    component       | id
    ${'Box Header'} | ${'DynamicFilterComponent'}
    ${'Label identity'} | ${'label-dynamic-filter-id'}
  `('Should has: $component', async ({ id }) => {
    await setup();
    await waitFor(() => {
      expect(screen.getByTestId(id)).toBeInTheDocument();
    });
  });
  // keep with others tests
});
