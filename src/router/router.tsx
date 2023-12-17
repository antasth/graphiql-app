import { RootLayout } from '@/layouts/RootLayout';
import { SignIn } from '@/pages/SignIn';
import { SignUp } from '@/pages/SignUp';
import { Welcome } from '@/pages/Welcome';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { AnonymousRoutes } from './AnonymousRoutes';
import { PrivateRoutes } from './PrivateRoutes';

export const routes = (
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Welcome />} />
    <Route element={<PrivateRoutes />}>
      <Route path="/main" element={<p>Main</p>} />
    </Route>
    <Route element={<AnonymousRoutes />}>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Route>
    <Route path="*" element={<p>404</p>} />
  </Route>
);

export const router = createBrowserRouter(createRoutesFromElements(routes));
