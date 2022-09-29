import { createSlice } from '@reduxjs/toolkit';
import { UserEmptyState } from '../constants/constants';

const initialState = {
  user: UserEmptyState,
  isUserAuthenticated: false,
};

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    login(state) {
      return {
        ...state,
        isUserAuthenticated: true,
      };
    },
    logout(state) {
      return {
        ...state,
        isUserAuthenticated: false,
      };
    },
  },
});

export const { login, logout } = userAuthSlice.actions;

export default userAuthSlice.reducer;
