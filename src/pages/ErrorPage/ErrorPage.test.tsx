import { render } from '@testing-library/react';
import { createMemoryRouter, useRouteError, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './ErrorPage';

const Child = () => {
  throw new Error();
};

describe('Error Boundary loads Error Page', () => {
  test(`should render error page when error occurs`, () => {
    function ErrorBoundary() {
      const error = useRouteError();
      console.error(error);
      return <ErrorPage />;
    }
    const routes = [
      {
        path: '/',
        element: <Child />,
        errorElement: <ErrorBoundary />,
      },
    ];
    const router = createMemoryRouter(routes);

    const { getByTestId } = render(<RouterProvider router={router} />);
    const errorMessage = getByTestId('error-page');
    expect(errorMessage).toBeInTheDocument();
  });
});
