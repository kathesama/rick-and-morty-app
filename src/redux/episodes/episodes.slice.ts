/*
Created by: Katherine Aguirre
On: 02/10/2022 : 23:12
Project: rick-and-morty-app
*/
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IEpisodes } from '../types/types';

const initialState: IEpisodes = {
  filterValue: {
    name: '',
    episode: '',
  },
  pageIndex: 0,
};

const EpisodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    reset: () => ({ ...initialState }),
    setPageIndex: (state, action) => ({
      ...state,
      pageIndex: action.payload,
    }),
    // eslint-disable-next-line consistent-return
    setPageFilter: (state, action) => {
      const newValue: string = action.payload.value || '';
      // eslint-disable-next-line default-case
      switch (action.payload.field) {
        case 'name':
          // eslint-disable-next-line no-param-reassign
          state.filterValue = {
            ...state.filterValue,
            name: newValue,
          };
          break;
        case 'episode':
          // eslint-disable-next-line no-param-reassign
          state.filterValue = {
            ...state.filterValue,
            episode: newValue,
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

export const getEpisodesIndex = (state: RootState) => state?.episodes?.pageIndex;
export const getEpisodesFilter = (state: RootState) => state?.episodes?.filterValue;
export const getEpisodesState = (state: RootState) => state?.episodes;

export const { setPageIndex, setPageFilter, reset } = EpisodesSlice.actions;

export { initialState as episodeInitialState };
export default EpisodesSlice.reducer;
