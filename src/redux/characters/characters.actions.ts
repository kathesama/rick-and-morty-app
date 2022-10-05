import { createAsyncThunk } from '@reduxjs/toolkit';
import { FilterCharacter } from '../../../__generated__/globalTypes';
import apolloClient from '../../graphql';
import { GET_ALL_CHARACTERS } from '../../graphql/queries';
import { responseErrorStructure, responseSuccessStructure } from '../constants';

/* CHARACTERS */
const fetchAsyncCharactersListing = createAsyncThunk('characters/fetchAsyncCharactersListing', async (props: {page?: number, filter?: FilterCharacter}) => {
  const {
    page = 0,
    filter = undefined
  } = props;

  return apolloClient
    .query({
      query: GET_ALL_CHARACTERS,
      variables: {
        page,
        filter
      }
    }).then(
      (response) => responseSuccessStructure(response)
    ).catch(
      (err) => responseErrorStructure(err)
    );
});

export default fetchAsyncCharactersListing;
