import { SignIn } from '@/pages/SignIn';
import { SignUp } from '@/pages/SignUp';
import { fireEvent, waitFor } from '@testing-library/react';
import { Header } from 'antd/es/layout/layout';
import { MemoryRouter } from 'react-router-dom';
import { isUserExists } from './localStorage';
import { renderWithProviders } from './test-utils';

describe('Tests for localStorage functions', () => {
  test('When the application is launched, it should not be user saved in localStorage', () => {
    renderWithProviders(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(isUserExists()).toBeFalsy();
  });

  test('After sign up user must be saved in localStorage', async () => {
    const { getByLabelText, getByRole, getByPlaceholderText } = renderWithProviders(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );

    fireEvent.change(getByLabelText(/Email/i), {
      target: { value: 'user@example.com' },
    });
    fireEvent.change(getByPlaceholderText(/characters/), {
      target: { value: 'password123' },
    });
    fireEvent.change(getByLabelText(/Confirm password/i), {
      target: { value: 'password123' },
    });

    fireEvent.click(getByRole('button', { name: /Sign up/i }));

    waitFor(() => {
      expect(isUserExists()).toBeTruthy();
    });
  });

  test('Must read user data from localstorage after page reload', async () => {
    const { getByLabelText, getByRole, queryByText } = renderWithProviders(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );

    const reloadFn = () => {
      window.location.reload();
    };

    fireEvent.change(getByLabelText(/Email/i), {
      target: { value: 'user@example.com' },
    });

    fireEvent.change(getByLabelText(/Password/i), {
      target: { value: 'password123' },
    });

    fireEvent.click(getByRole('button', { name: /Sign in/i }));

    waitFor(() => {
      expect(queryByText('Sign out')).toBeInTheDocument();
    });

    reloadFn();

    waitFor(() => {
      expect(queryByText('Sign out')).toBeInTheDocument();
    });
  });
});
