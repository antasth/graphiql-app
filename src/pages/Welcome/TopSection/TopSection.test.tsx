import { MemoryRouter } from 'react-router-dom';
import { TopSection } from './TopSection';
import { renderWithProviders } from '@/utils/test-utils';

describe('Welcome page top section tests', () => {
  test('Must render link button', () => {
    const { getByTestId } = renderWithProviders(
      <MemoryRouter>
        <TopSection />
      </MemoryRouter>
    );
    const linkBtn = getByTestId('link-btn');
    expect(linkBtn).toBeInTheDocument();
  });
});
