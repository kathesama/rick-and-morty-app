import { combineReducers } from '@reduxjs/toolkit';

import userAuthReducer from './userAuthentication/userAuth.slice';
import CharactersSlice from './characters/characters.slice';

const rootReducer = combineReducers({
  /* userAuthentication: userAuthReducer, */

  characters: CharactersSlice,
});

export default rootReducer;
