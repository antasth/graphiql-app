import { RootState } from '@/store';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  const { user } = useSelector((state: RootState) => state.user);

  return {
    isAuth: !!user,
  };
};
