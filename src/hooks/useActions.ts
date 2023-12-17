import { actions as userActions } from '@/store/user/user.slice';
import {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
  bindActionCreators,
} from '@reduxjs/toolkit';
import { User } from 'firebase/auth';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

const rootActions = {
  ...userActions,
};

export const useActions = (): {
  setUser: ActionCreatorWithPayload<User | null, 'user/setUser'>;
  removeUser: ActionCreatorWithoutPayload<'user/removeUser'>;
} => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
