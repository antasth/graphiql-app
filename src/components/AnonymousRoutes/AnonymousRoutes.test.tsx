import { useAuth } from '@/hooks/useAuth';
import { screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import { MockedFunction } from 'vitest';
import { AnonymousRoutes } from './AnonymousRoutes';

vi.mock('@/hooks/useAuth', () => ({
  useAuth: vi.fn().mockReturnValue({ isAuth: false }),
}));

const mockedUseAuth = useAuth as MockedFunction<typeof useAuth>;

describe('AnonymousRoutes', () => {
  const setup = (isAuth: boolean) => {
    mockedUseAuth.mockReturnValue({ isAuth });
  };

  test('renders main page if user is authenticated and try go to signin page', async () => {
    setup(true);
    await act(async () => (
      <MemoryRouter initialEntries={['/signin']}>
        <AnonymousRoutes />
      </MemoryRouter>
    ));

    waitFor(() => {
      expect(screen.getByText('Send Request')).toBeInTheDocument();
    });
  });
});
