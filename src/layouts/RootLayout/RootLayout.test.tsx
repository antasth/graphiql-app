import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { RootLayout } from './RootLayout';

describe('RootLayout', () => {
  test('renders correctly', () => {
    const { getByRole } = render(<RootLayout />, { wrapper: MemoryRouter });
    const header = getByRole('banner');
    const main = getByRole('main');
    const footer = getByRole('contentinfo');
    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
