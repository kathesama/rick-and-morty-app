import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { ApolloProvider, InMemoryCache } from '@apollo/client';
// import wait from 'waait';

import { ShowSingleCharacterPage } from './ShowSingleCharacter';
import store from '../../../redux/store';
import apolloClient from '../../../graphql';
import { GET_SINGLE_CHARACTER } from '../../../graphql/queries';
import { ToolbarBoxComponent } from '../../../components/UI/Toolbar/Toolbar';
import { DocumentNode } from '@apollo/react-hooks';
import { MockType } from '../../../graphql/InterfaceTypes';
import { GetSingleCharacterPage_character } from '../../../graphql/__generated__/GetSingleCharacterPage';
import { FilterCharacter } from '../../../../__generated__/globalTypes';

let container: any;

type QueryDataType = {
  character: GetSingleCharacterPage_character,
}

type QueryVariablesType = {
  id: string | number;
}

const mocks: MockType<QueryDataType, QueryVariablesType> =  {
    request: {
      query: GET_SINGLE_CHARACTER,
      variables: {
        id: "1"
      }
    },
    result: {
        data: {
          character: {
            __typename: 'Character',
            id: "266",
            name: "Piece of Toast",
            image: "https://rickandmortyapi.com/api/character/avatar/266.jpeg",
            status: "Alive",
            species: "unknown",
            type: "Bread",
            gender: "Genderless",
            created: "2017-12-31T13:48:58.850Z",
            origin: {
              __typename: 'Location',
              id: null,
              name: "unknown"
            },
            location: {
              __typename: 'Location',
              id: "6",
              name: "Interdimensional Cable",
              type: "TV"
            },
            episode: [
              {
                __typename: 'Episode',
                id: "8",
                name: "Rixty Minutes",
                episode: "S01E08"
              },
            ]
          }
      }
    }
  };

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(async () => {
  document.body.removeChild(container);
  container = null;
});

describe('ShowSingleCharacterPage test', () => {


  const renderComponent = () =>
    render(
      <Provider store={store}>
        <MockedProvider mocks={[mocks]} addTypename={false}>
          <MemoryRouter initialEntries={[`/characters/1`]}>
            <Routes>
              <Route path="/characters/:id" element={<ShowSingleCharacterPage />} />
            </Routes>
          </MemoryRouter>
        </MockedProvider>
      </Provider>
    );

  it ('renders with spinner', async() => {
    const { queryByTestId } = renderComponent();

    const spinner = await screen.queryByTestId('LoadingCircleComponent');
    expect(spinner).toBeInTheDocument();
  })

  it ('renders without errors', async() => {
    const { queryByTestId } = renderComponent();

    await waitFor(() => {
      expect(queryByTestId('ContentWrapperComponent')).toBeInTheDocument();
    });
  })

  it.each`
    component       | id
    ${'Content Wrapper'} | ${'ContentWrapperComponent'}
    ${'Show Character page component'}      | ${'CharacterCardComponent'}
    ${'Character - Container'} | ${'container-char-card-id'}
    ${'Character - grid avatar'} | ${'grid-avatar-char-card-id'}    
    ${'Character - box avatar'} | ${'box-avatar-char-card-id'}    
    ${'Character - Avatar'} | ${'avatar-avatar-char-card-id'}    
    ${'Character - Grid for items'} | ${'grid-content-char-card-id'}    
    ${'Character - Internal Grid'} | ${'internal-grid-content-char-card-id'}    
    ${'Character - Internal Box'} | ${'internal-grid-box-card-id'}    
    ${'Character - Internal Box - Typography for name'} | ${'ig-typography-card-id'}    
    ${'Character - Internal Box - grid for name icons'} | ${'ig-grid-icons-card-id'}    
    ${'Character - Internal Box - grid for gender icon'} | ${'ig-grid-icons-gender-card-id'}    
    ${'Character - Internal Box - gender icon'} | ${'ig-grid-icon-for-gender-card-id'}    
    ${'Character - Internal Box - grid for status icon'} | ${'ig-grid-icons-status-card-id'}    
    ${'Character - Internal Box - status icon'} | ${'ig-grid-icon-for-status-card-id'}
    ${'Character - Internal Box - grid for species icon'} | ${'ig-grid-icons-species-card-id'}    
    ${'Character - Internal Box - specie wrapper'} | ${'SubContentWrapperComponent-specie'}
    ${'Character - Internal Box - grid for type card'} | ${'ig-grid-icons-type-card-id'}    
    ${'Character - Internal Box - type wrapper'} | ${'SubContentWrapperComponent-type'}
    ${'Character - Internal Box - origin divider'} | ${'ig-grid-origin-divider-card-id'}
    ${'Character - Internal Box - type wrapper'} | ${'SubContentWrapperComponent-origin'}    
    ${'Character - Internal Box - location divider'} | ${'ig-grid-location-divider-card-id'}
    ${'Character - Internal Box - type wrapper'} | ${'SubContentWrapperComponent-location'}
      
  `('Should has $component', async ({ id }) => {
    await renderComponent();
    await waitFor(() => {
      expect(screen.getByTestId(id)).toBeInTheDocument();
    });
  });
});
