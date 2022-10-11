/*
Created by: Katherine Aguirre
On: 02/10/2022 : 23:12
Project: rick-and-morty-app
*/
import { createSlice } from '@reduxjs/toolkit';
import { ILocations } from '../types/types';
import { RootState } from '../store';

const initialState: ILocations = {
  filterValue: {
    name: '',
    type: '',
    dimension: '',
  },
  pageIndex: 0,
};

const LocationSlice = createSlice({
  name: 'locations',
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
        case 'type':
          // eslint-disable-next-line no-param-reassign
          state.filterValue = {
            ...state.filterValue,
            type: newValue,
          };
          break;
        case 'dimension':
          // eslint-disable-next-line no-param-reassign
          state.filterValue = {
            ...state.filterValue,
            dimension: newValue,
          };
          break;
        case 'all':
          // eslint-disable-next-line no-param-reassign
          state.filterValue = { ...initialState.filterValue };
          break;
      }
    },
  },
});

export const getLocationPageIndex = (state: RootState) => state?.locations?.pageIndex;
export const getLocationPageFilter = (state: RootState) => state?.locations?.filterValue;
export const getLocationState = (state: RootState) => state?.locations;

export const { setPageIndex, setPageFilter, reset } = LocationSlice.actions;

export { initialState as characterInitialState };
export default LocationSlice.reducer;
