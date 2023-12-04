import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from '@/layouts/RootLayout';
import Welcome from '@/pages/Welcome';

export const routes = (
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Welcome />} />
  </Route>
);

const router = createBrowserRouter(createRoutesFromElements(routes));

export default router;
