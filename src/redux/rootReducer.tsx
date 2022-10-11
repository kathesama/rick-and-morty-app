import { combineReducers } from '@reduxjs/toolkit';

import CharactersSlice from './characters/characters.slice';
import EpisodesSlice from './episodes/episodes.slice';
import LocationSlice from './locations/locations.slice';

const rootReducer = combineReducers({
  characters: CharactersSlice,
  episodes: EpisodesSlice,
  locations: LocationSlice,
});

export default rootReducer;
