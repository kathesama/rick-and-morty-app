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
  filterFillersData: {
    gender: ['female', 'male', 'genderless', 'unknown'],
    status: ['alive', 'dead', 'unknown'],
  },
  filterValue: {
    name: '',
    status: '',
    gender: '',
  },
  pageIndex:0
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
    // eslint-disable-next-line consistent-return
    setPageFilter: (state, action) => {
      const newValue = action.payload.value || '';
      // eslint-disable-next-line default-case
      switch (action.payload.field) {
        case 'name':
          // eslint-disable-next-line no-param-reassign
          state.filterValue = {
            ...state.filterValue,
            name: newValue,
          };
          break;
        case 'status':
          // eslint-disable-next-line no-param-reassign
          state.filterValue = {
            ...state.filterValue,
            status: newValue,
          };
          break;
        case 'gender':
          // eslint-disable-next-line no-param-reassign
          state.filterValue = {
            ...state.filterValue,
            gender: newValue,
          };
          break;
      }
    },
  },
});

export const getCharactersPageIndex = (state: RootState) => state?.characters?.pageIndex;
export const getCharactersPageFilter = (state: RootState) => state?.characters?.filterValue;
export const getCharactersPageFilterFillersData = (state: RootState) => state?.characters?.filterFillersData;
export const getCharactersState = (state: RootState) => state?.characters;

export const {
  setPageIndex,
  setPageFilter,
  reset
} = CharactersSlice.actions;

export default CharactersSlice.reducer;
