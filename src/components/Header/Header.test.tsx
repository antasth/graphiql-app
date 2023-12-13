import { renderWithProviders } from '@/utils/test-utils';
import { fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

const initialState = {
  id: '1',
  email: 'test@mail.com',
  token: 'some-token',
};

describe('Header tests', () => {
  test('Must contain signIn and signUp links if user is logged out', async () => {
    const { getByText, getByRole } = renderWithProviders(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const signInLink = getByText('Sign in');
    const signUpLink = getByText('Sign up');
    const welcomeLink = getByText('Welcome');
    const langSwitcher = getByRole('combobox');

    expect(signInLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
    expect(welcomeLink).toBeInTheDocument();
    expect(langSwitcher).toBeInTheDocument();
  });

  test('Must hide signIn and signUp items if user is logged in', async () => {
    const { queryByText } = renderWithProviders(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
      {
        preloadedState: {
          user: initialState,
        },
      }
    );

    expect(queryByText('Sign in')).not.toBeInTheDocument();
    expect(queryByText('Sign up')).not.toBeInTheDocument();
  });

  test('Must contain Sign out button when user is logged in', async () => {
    const { getByText } = renderWithProviders(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
      {
        preloadedState: {
          user: initialState,
        },
      }
    );
    const signOutButton = getByText('Sign out');
    expect(signOutButton).toBeInTheDocument();
  });

  test('After logout must contain Sign in and Sign up links and not contain Sign out button', async () => {
    const { getByText, queryByText } = renderWithProviders(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
      {
        preloadedState: {
          user: initialState,
        },
      }
    );

    const signOutButton = getByText('Sign out');
    expect(signOutButton).toBeInTheDocument();

    fireEvent.click(signOutButton);

    waitFor(() => {
      expect(queryByText('Sign out')).not.toBeInTheDocument();
      expect(getByText('Sign in')).toBeInTheDocument();
      expect(getByText('Sign up')).toBeInTheDocument();
    });
  });
});
