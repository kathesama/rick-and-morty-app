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
  filterValue: {
    name: ''
  },
  pageIndex:0,
};

const CharactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    reset: () => ({ ...initialState }),
    setPageIndex: (state, action) => ({
        ...state,
        pageIndex: action.payload,
      }),
    setPageFilter: (state, action) => ({
      ...state,
      filterValue: action.payload,
    }),
  },
});

export const getCharactersPageIndex = (state: RootState) => state?.characters?.pageIndex;
export const getCharactersPageFilter = (state: RootState) => state?.characters?.filterValue;
export const getCharactersState = (state: RootState) => state?.characters;

export const {
  setPageIndex,
  setPageFilter,
  reset
} = CharactersSlice.actions;

export default CharactersSlice.reducer;
