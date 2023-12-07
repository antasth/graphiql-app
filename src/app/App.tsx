import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { TranslateProvider } from '@/context/TranslateContext';
import { Loader } from '@/components/Loader';
import { loadLanguages } from '@/utils/translate';
import { router } from '@/router';
import { AVAILABLE_LANGUAGES } from '@/constants/languages';

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initApp = async () => {
      await loadLanguages(AVAILABLE_LANGUAGES);
      setIsLoading(false);
    };
    initApp();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <TranslateProvider>
          <RouterProvider router={router} />
        </TranslateProvider>
      )}
    </>
  );
}
