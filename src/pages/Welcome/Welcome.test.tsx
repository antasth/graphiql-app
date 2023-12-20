import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Welcome } from './Welcome';

describe('Welcome page tests', () => {
  test('Must contain correct team members names', () => {
    const { getByText } = render(<Welcome />, { wrapper: MemoryRouter });
    const heading = getByText('Welcome to Setun-70');
    expect(heading).toBeInTheDocument();
  });
});
