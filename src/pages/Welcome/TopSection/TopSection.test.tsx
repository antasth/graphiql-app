import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { TopSection } from './TopSection';

describe('Welcome page top section tests', () => {
  test('Must contain correct link', () => {
    const { getByText } = render(<TopSection />, { wrapper: MemoryRouter });
    const heading = getByText('Explore GraphiQL Playground');
    expect(heading).toBeInTheDocument();
  });
});
