import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SignIn } from './SignIn';

describe('SignIn page tests', () => {
  test('Must contain Username Password and Sign in button', () => {
    const { getByText } = render(<SignIn />, { wrapper: MemoryRouter });
    const userNameLabel = getByText('Username');
    const passwordLabel = getByText('Password');
    const signInButton = getByText('Sign in');
    expect(userNameLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
  });
});
