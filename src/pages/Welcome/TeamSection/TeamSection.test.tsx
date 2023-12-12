import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { TeamSection } from './TeamSection';

describe('Team Section tests', () => {
  test('Must contain correct team members names', () => {
    const { getByText } = render(<TeamSection />, { wrapper: MemoryRouter });
    const name1 = getByText('Iurii Bazhenov');
    const name2 = getByText('Anton Astashov');

    expect(name1).toBeInTheDocument();
    expect(name2).toBeInTheDocument();
  });
});
