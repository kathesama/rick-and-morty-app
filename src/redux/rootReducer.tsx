import { combineReducers } from '@reduxjs/toolkit';

import userAuthReducer from './userAuthentication/userAuth.slice';

const rootReducer = combineReducers({
  userAuthentication: userAuthReducer,
});

export default rootReducer;
