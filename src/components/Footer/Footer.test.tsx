import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from './Footer';

describe('Footer', () => {
  test('renders correctly', () => {
    const { getByRole } = render(<Footer />, { wrapper: MemoryRouter });
    const footer = getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
});
