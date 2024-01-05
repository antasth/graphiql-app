import { useAuth } from '@/hooks/useAuth';
import { screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import { MockedFunction } from 'vitest';
import { PrivateRoutes } from './PrivateRoutes';

vi.mock('@/hooks/useAuth', () => ({
  useAuth: vi.fn().mockReturnValue({ isAuth: false }),
}));

const mockedUseAuth = useAuth as MockedFunction<typeof useAuth>;

describe('PrivateRoutes', () => {
  const setup = (isAuth: boolean) => {
    mockedUseAuth.mockReturnValue({ isAuth });
  };

  test("don't renders main page if user is not authenticated", async () => {
    setup(true);
    await act(async () => (
      <MemoryRouter initialEntries={['/main']}>
        <PrivateRoutes />
      </MemoryRouter>
    ));

    waitFor(() => {
      expect(screen.getByText('Send Request')).not.toBeInTheDocument();
    });
  });
});
