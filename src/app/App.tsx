import { RouterProvider } from 'react-router-dom';
import { Loader } from '@/components/Loader';
import { useTranslate } from '@/context/TranslateContext';
import { router } from '@/router';

export function App() {
  const { isLoading } = useTranslate();

  if (isLoading) {
    return <Loader />;
  }

  return <RouterProvider router={router} />;
}
