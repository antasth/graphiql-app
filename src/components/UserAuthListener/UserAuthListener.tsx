import { auth } from '@/firebase';
import { useActions } from '@/hooks/useActions';
import { saveUserToLocalStorage } from '@/utils/localStorage';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

export const UserAuthListener = () => {
  const { setUser } = useActions();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      saveUserToLocalStorage(user);
      return unsubscribe;
    });
  }, [setUser]);

  return null;
};
