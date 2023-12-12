import { App } from 'antd';
import { FirebaseError } from 'firebase/app';
import {
  Auth,
  createUserWithEmailAndPassword as firebaseCreateUserWithEmailAndPassword,
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
} from 'firebase/auth';
import { useCallback, useState } from 'react';
import { useActions } from './useActions';

export const useFirebase = (auth: Auth) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setUser } = useActions();
  const { notification } = App.useApp();

  const signInWithEmailAndPassword = useCallback(
    async (email: string, password: string) => {
      setIsLoading(true);
      try {
        const { user } = await firebaseSignInWithEmailAndPassword(auth, email, password);
        user.getIdToken().then((accessToken) => {
          setUser({ id: user.uid, email: user.email, token: accessToken });
        });
        return user;
      } catch (error) {
        if (error instanceof FirebaseError) {
          notification.error({ message: error.message });
        }
      } finally {
        setIsLoading(false);
      }
    },
    [auth, setUser, notification]
  );

  const createUserWithEmailAndPassword = useCallback(
    async (email: string, password: string) => {
      setIsLoading(true);
      try {
        const { user } = await firebaseCreateUserWithEmailAndPassword(auth, email, password);
        user.getIdToken().then((accessToken) => {
          setUser({ id: user.uid, email: user.email, token: accessToken });
        });
        return user;
      } catch (error) {
        if (error instanceof FirebaseError) {
          notification.error({ message: error.message });
        }
      } finally {
        setIsLoading(false);
      }
    },
    [auth, setUser, notification]
  );

  return { signInWithEmailAndPassword, createUserWithEmailAndPassword, isLoading };
};
