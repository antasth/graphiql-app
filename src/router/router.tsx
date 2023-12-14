import { RootLayout } from '@/layouts/RootLayout/RootLayout';
import { SignIn } from '@/pages/SignIn';
import { SignUp } from '@/pages/SignUp';
import { Welcome } from '@/pages/Welcome';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

export const routes = (
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Welcome />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/main" element={<p>Main Page</p>} />
    <Route path="*" element={<p>404</p>} />
  </Route>
);

export const router = createBrowserRouter(createRoutesFromElements(routes));
