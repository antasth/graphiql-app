import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SignUp } from './SignUp';

describe('SignUp page tests', () => {
  test('Must contain Username Email Password and Sign up button', () => {
    const { getByText } = render(<SignUp />, { wrapper: MemoryRouter });
    const userNameLabel = getByText('Username');
    const emailLabel = getByText('Email');
    const passwordLabel = getByText('Password');
    const confirmPasswordLabel = getByText('Confirm password');
    const signInButton = getByText('Sign up');
    expect(userNameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(confirmPasswordLabel).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
  });
});
