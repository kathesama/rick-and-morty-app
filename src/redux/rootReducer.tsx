import { combineReducers } from '@reduxjs/toolkit';

import CharactersSlice from './characters/characters.slice';

const rootReducer = combineReducers({
  characters: CharactersSlice,
});

export default rootReducer;
