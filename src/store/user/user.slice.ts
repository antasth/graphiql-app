import { getUserFromLocalStorage, isUserExists } from '@/utils/localStorage';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

interface UserState {
  user: User | null;
}

const initialState: UserState = { user: isUserExists() ? getUserFromLocalStorage() : null };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User | null>) => {
      state.user = payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { actions, reducer } = userSlice;

export const userReducer = userSlice.reducer;
