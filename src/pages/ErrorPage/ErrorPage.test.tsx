import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './ErrorPage';

const Child = () => {
  throw new Error();
};

describe('Error Boundary loads Error Page Component', () => {
  test(`should render error page component when error occurs`, () => {
    const routes = [
      {
        path: '/',
        element: <Child />,
        errorElement: <ErrorPage />,
      },
    ];
    const router = createMemoryRouter(routes);

    const { getByTestId } = render(<RouterProvider router={router} />);
    const errorMessage = getByTestId('error-page');
    expect(errorMessage).toBeInTheDocument();
  });
});
