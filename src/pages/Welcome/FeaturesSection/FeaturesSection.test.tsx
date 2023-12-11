import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FeaturesSection from './FeaturesSection';

describe('Features Section tests', () => {
  test('Must contain correct cards titles', () => {
    const { getByText } = render(<FeaturesSection />, { wrapper: MemoryRouter });
    const cardTitle1 = getByText('Request editor');
    const cardTitle2 = getByText('Headers editor');

    expect(cardTitle1).toBeInTheDocument();
    expect(cardTitle2).toBeInTheDocument();
  });
});
