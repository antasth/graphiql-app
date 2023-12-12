import { IUser } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IUser = {
  id: null,
  email: null,
  token: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<IUser>) => {
      state.id = payload.id;
      state.email = payload.email;
      state.token = payload.token;
    },
    removeUser: (state) => {
      state.id = null;
      state.email = null;
      state.token = null;
    },
  },
});

export const { actions, reducer } = userSlice;

export const userReducer = userSlice.reducer;
