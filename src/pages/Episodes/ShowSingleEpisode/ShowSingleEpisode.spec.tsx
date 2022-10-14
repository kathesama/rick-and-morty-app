import React, { useState } from 'react';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';

import { ShowSingleEpisodePage } from './ShowSingleEpisode';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ShowSingleLocationPage } from '../../Locations/ShowSingleLocation/ShowSingleLocation';
import { GetSingleCharacterPage_character } from '../../../graphql/__generated__/GetSingleCharacterPage';
import { MockType } from '../../../graphql/InterfaceTypes';
import { GET_SINGLE_EPISODE } from '../../../graphql/queries';
import { GetSingleEpisodePage_episode } from '../../../graphql/__generated__/GetSingleEpisodePage';

let container: any;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});

type QueryDataType = {
  episode: GetSingleEpisodePage_episode;
};

type QueryVariablesType = {
  id: string | number;
};

const mocks: MockType<QueryDataType, QueryVariablesType> = {
  request: {
    query: GET_SINGLE_EPISODE,
    variables: {
      id: '1',
    },
  },
  result: {
    data: {
      episode: {
        __typename: 'Episode',
        id: '1',
        name: 'Pilot',
        air_date: 'December 2, 2013',
        episode: 'S01E01',
        characters: [
          {
            __typename: 'Character',
            id: '1',
            name: 'Rick Sanchez',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          },
        ],
      },
    },
  },
};

describe('ShowSingleEpisodePage test', () => {
  const renderComponent = () =>
    render(
      <Provider store={store}>
        <MockedProvider mocks={[mocks]} addTypename={false}>
          <MemoryRouter initialEntries={[`/episodes/1`]}>
            <Routes>
              <Route path="/episodes/:id" element={<ShowSingleEpisodePage />} />
            </Routes>
          </MemoryRouter>
        </MockedProvider>
      </Provider>
    );

  const setup = async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<ShowSingleEpisodePage />);
    });
  };

  it('renders with spinner', async () => {
    const { queryByTestId } = renderComponent();

    const spinner = await screen.queryByTestId('LoadingCircleComponent');
    expect(spinner).toBeInTheDocument();
  });

  it.each`
    component                           | id
    ${'Content Wrapper'}                | ${'ContentWrapperComponent'}
    ${'Container'}                      | ${'show-single-episode-container-card-id'}
    ${'Grid container'}                 | ${'show-single-episode-grid-avatar-char-card-id'}
    ${'Grid internal'}                  | ${'show-single-episode-grid-avatar-loc-card-id'}
    ${'Grid name'}                      | ${'show-single-episode-internal-grid-content-loc-card-id'}
    ${'Typography name'}                | ${'show-single-episode-internal-grid-box-card-id'}
    ${'Grid icons'}                     | ${'show-single-episode-ig-typography-card-id'}
    ${'type name and icon'}             | ${'show-single-episode-ig-grid-icons-card-id'}
    ${'dimension name and icon - Grid'} | ${'show-single-episode-0-ig-grid-icons-type-card-id'}
    ${'dimension name and icon - icon'} | ${'show-single-episode-1-ig-grid-icons-type-card-id'}
  `('Should has $component', async ({ id }) => {
    await renderComponent();
    await waitFor(() => {
      expect(screen.getByTestId(id)).toBeInTheDocument();
    });
  });

  // keep with others tests
});
