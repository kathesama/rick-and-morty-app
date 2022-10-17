/*
Created by: Katherine Aguirre
On: 16/10/2022 : 23:12
Project: rick-and-morty-app
*/
import { createSlice } from '@reduxjs/toolkit';
import { ISettingsEmptyState } from '../types/types';
import { RootState } from '../store';

const initialState: ISettingsEmptyState = {
  filterFillersData: {
    languages: ['en', 'es'],
  },
  language: 'en',
};

const SettingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    reset: () => ({ ...initialState }),
    setLanguage: (state, action) => ({
      ...state,
      language: action.payload,
    }),
  },
});

export const getSettingsLanguage = (state: RootState) => state?.settings?.language;
export const getSettingsLanguageFiller = (state: RootState) => state?.settings?.filterFillersData.languages;

export const { setLanguage } = SettingsSlice.actions;

export { initialState as characterInitialState };
export default SettingsSlice.reducer;
