import { combineReducers } from '@reduxjs/toolkit';

import CharactersSlice from './characters/characters.slice';
import EpisodesSlice from './episodes/episodes.slice';
import LocationSlice from './locations/locations.slice';
import SettingsSlice from './settings/settings.slice';

const rootReducer = combineReducers({
  characters: CharactersSlice,
  episodes: EpisodesSlice,
  locations: LocationSlice,
  settings: SettingsSlice,
});

export default rootReducer;
