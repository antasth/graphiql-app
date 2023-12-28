import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { TopSection } from './TopSection';

describe('Welcome page top section tests', () => {
  test('Must render link button', () => {
    const { getByTestId } = render(<TopSection />, { wrapper: MemoryRouter });
    const linkBtn = getByTestId('link-btn');
    expect(linkBtn).toBeInTheDocument();
  });
});
