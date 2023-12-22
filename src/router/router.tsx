import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout/RootLayout';
import { Main } from '@/pages/Main';
import { Welcome } from '@/pages/Welcome';
import { NotFound } from '@/pages/NotFound';
import { ErrorBoundary } from '@/pages/ErrorPage';

export const routes = (
  <Route path="/" element={<RootLayout />} errorElement={<ErrorBoundary />}>
    <Route index element={<Welcome />} />
    <Route path="/main" element={<Main />} />
    <Route path="*" element={<NotFound />} />
  </Route>
);

export const router = createBrowserRouter(createRoutesFromElements(routes));
