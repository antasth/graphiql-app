import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout/RootLayout';
import { Main } from '@/pages/Main';
import { Welcome } from '@/pages/Welcome';
import { NotFound } from '@/pages/NotFound';
import { ErrorBoundary } from '@/pages/ErrorPage';

export const routes = (
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Welcome />} errorElement={<ErrorBoundary />} />
    <Route path="/main" element={<Main />} errorElement={<ErrorBoundary />} />
    <Route path="*" element={<NotFound />} />
  </Route>
);

export const router = createBrowserRouter(createRoutesFromElements(routes));
