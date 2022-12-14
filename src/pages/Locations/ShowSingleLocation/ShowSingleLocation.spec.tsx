import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import { ShowSingleLocationPage } from './ShowSingleLocation';
import { MockType } from '../../../graphql/InterfaceTypes';
import { GetSingleLocationPage_location } from '../../../graphql/__generated__/GetSingleLocationPage';
import { GET_SINGLE_LOCATION } from '../../../graphql/queries';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ShowSingleCharacterPage } from '../../Characters/ShowSingleCharacter/ShowSingleCharacter';

let container: any;

type QueryDataType = {
  location: GetSingleLocationPage_location;
};

type QueryVariablesType = {
  id: string | number;
};

const mocks: MockType<QueryDataType, QueryVariablesType> = {
  request: {
    query: GET_SINGLE_LOCATION,
    variables: {
      id: '1',
    },
  },
  result: {
    data: {
      location: {
        __typename: 'Location',
        id: '1',
        name: 'Earth (C-137)',
        type: 'Planet',
        dimension: 'Dimension C-137',
        residents: [
          {
            __typename: 'Character',
            id: '38',
            name: 'Beth Smith',
            image: 'https://rickandmortyapi.com/api/character/avatar/38.jpeg',
          },
        ],
      },
    },
  },
};

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});

describe('ShowSingleLocationPage test', () => {
  const renderComponent = () =>
    render(
      <Provider store={store}>
        <MockedProvider mocks={[mocks]} addTypename={false}>
          <MemoryRouter initialEntries={[`/location/1`]}>
            <Routes>
              <Route path="/location/:id" element={<ShowSingleLocationPage />} />
            </Routes>
          </MemoryRouter>
        </MockedProvider>
      </Provider>
    );

  it('renders with spinner', async () => {
    const { queryByTestId } = renderComponent();

    const spinner = await screen.queryByTestId('LoadingCircleComponent');
    expect(spinner).toBeInTheDocument();
  });

  it('renders without errors', async () => {
    const { queryByTestId } = renderComponent();

    await waitFor(() => {
      expect(queryByTestId('ContentWrapperComponent')).toBeInTheDocument();
    });
  });

  it.each`
    component                           | id
    ${'Content Wrapper'}                | ${'ContentWrapperComponent'}
    ${'Container'}                      | ${'show-single-location-container-card-id'}
    ${'Grid container'}                 | ${'show-single-location-grid-avatar-char-card-id'}
    ${'Grid internal'}                  | ${'show-single-location-grid-avatar-loc-card-id'}
    ${'Grid name'}                      | ${'show-single-location-internal-grid-content-loc-card-id'}
    ${'Typography name'}                | ${'show-single-location-internal-grid-box-card-id'}
    ${'Grid icons'}                     | ${'show-single-location-ig-typography-card-id'}
    ${'type name and icon'}             | ${'show-single-location-ig-grid-icons-card-id'}
    ${'dimension name and icon - Grid'} | ${'show-single-location-0-ig-grid-icons-type-card-id'}
    ${'dimension name and icon - icon'} | ${'show-single-location-1-ig-grid-icons-type-card-id'}
  `('Should has $component', async ({ id }) => {
    await renderComponent();
    await waitFor(() => {
      expect(screen.getByTestId(id)).toBeInTheDocument();
    });
  });
});
