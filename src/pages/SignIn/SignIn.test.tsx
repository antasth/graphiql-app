import '@/mocks/firebase';
import { renderWithProviders } from '@/utils/test-utils';
import { fireEvent, waitFor } from '@testing-library/react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { MemoryRouter } from 'react-router-dom';
import { SignIn } from './SignIn';

describe('SignIn page tests', () => {
  test('Must contain Username Password and Sign in button', () => {
    const { getByText } = renderWithProviders(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );

    const emailLabel = getByText('Email');
    const passwordLabel = getByText('Password');
    const signInButton = getByText('Sign in');
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
  });
  test('Must sign in with email and password', async () => {
    const { getByLabelText, getByRole } = renderWithProviders(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );
    fireEvent.change(getByLabelText(/Email/i), {
      target: { value: 'user@example.com' },
    });
    fireEvent.change(getByLabelText(/Password/i), {
      target: { value: 'password123' },
    });

    fireEvent.click(getByRole('button', { name: /Sign in/i }));

    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        getAuth(),
        'user@example.com',
        'password123'
      );
    });
  });
});
