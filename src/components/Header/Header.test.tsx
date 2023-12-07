import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

describe('Header tests', () => {
  test('Must contain signIn and signUp items', () => {
    const { getByText, getByRole } = render(<Header />, { wrapper: MemoryRouter });
    const signInLink = getByText('Sign in');
    const signUpLink = getByText('Sign up');
    const welcomeLink = getByText('Welcome');
    const langSwitcher = getByRole('combobox');
    expect(signInLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
    expect(welcomeLink).toBeInTheDocument();
    expect(langSwitcher).toBeInTheDocument();
  });
});
