/*
Created by: Katherine Aguirre
On: 02/10/2022 : 23:12
Project: rick-and-morty-app
*/
import { createSlice } from '@reduxjs/toolkit';
import fetchAsyncCharactersListing from './characters.actions';
import ICharactersEmptyState from '../types/types';
import { RootState } from '../store';

const initialState: ICharactersEmptyState = {
  data: [],
  error: null,
  loading: true,
};

const CharactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncCharactersListing.pending, (state) => ({
        ...state,
        loading: !state.loading
      })
    );
    builder.addCase(fetchAsyncCharactersListing.fulfilled, (state, { payload }) => ({
        ...state,
        data: payload.data?.characters,
        loading: false,
      })
    );
    builder.addCase(fetchAsyncCharactersListing.rejected, (state, action) => ({
        ...state,
        error: action.error,
        loading: false,
      })
    );
  }
});

export const getCharacterPageStates = (state: RootState) => ({
  loading: state.characters.loading,
  error: state.characters.error
});

export const getCharacterPageData = (state: RootState): any => ({
  data: state?.characters?.data,
});

// export const {getCharacterPageLoading} = CharactersSlice.actions;
export default CharactersSlice.reducer;
