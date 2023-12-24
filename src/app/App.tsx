import { App as AntdApp } from 'antd';
import { RouterProvider } from 'react-router-dom';

import { Loader } from '@/components/Loader';
import { TranslateProvider, useTranslate } from '@/context/TranslateContext';
import { router } from '@/router';

function App() {
  const { isLoading } = useTranslate();

  if (isLoading) {
    return <Loader fullscreen />;
  }

  return <RouterProvider router={router} />;
}

export function AppWrapper() {
  return (
    <AntdApp notification={{ placement: 'bottomRight' }}>
      <TranslateProvider>
        <App />
      </TranslateProvider>
    </AntdApp>
  );
}
