import { RootState } from '@/store';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  const { id, email, token } = useSelector((state: RootState) => state.user);

  return {
    isAuth: !!id,
    id,
    email,
    token,
  };
};
