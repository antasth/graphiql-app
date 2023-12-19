import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorPage } from './ErrorPage';

const Child = () => {
  throw new Error();
};

describe('Error Boundary loads Error Page', () => {
  test(`should render error page when error occurs`, () => {
    const { getByTestId } = render(
      <ErrorBoundary fallback={<ErrorPage></ErrorPage>}>
        <Child />
      </ErrorBoundary>,
      { wrapper: MemoryRouter }
    );
    const errorMessage = getByTestId('error-page');
    expect(errorMessage).toBeInTheDocument();
  });
});
