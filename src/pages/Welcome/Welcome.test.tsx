import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Welcome } from './Welcome';

describe('Welcome page tests', () => {
  test('Must contain correct welcome page title', () => {
    const { getByTestId } = render(<Welcome />, { wrapper: MemoryRouter });
    const heading = getByTestId('page-title');
    expect(heading).toBeInTheDocument();
  });
});
