import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from './Footer';

describe('Footer', () => {
  test('contain all pages of the application', () => {
    const { getByRole } = render(<Footer />, { wrapper: MemoryRouter });
    const welcomeLink = getByRole('link', { name: /welcome/i });
    const signInLink = getByRole('link', { name: /sign in/i });
    const signUpLink = getByRole('link', { name: /sign up/i });
    const mainLink = getByRole('link', { name: /main/i });
    expect(welcomeLink).toBeInTheDocument();
    expect(signInLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
    expect(mainLink).toBeInTheDocument();
  });
});
