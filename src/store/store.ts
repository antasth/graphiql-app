import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/user.slice';

export const rootReducer = combineReducers({
  user: userReducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
