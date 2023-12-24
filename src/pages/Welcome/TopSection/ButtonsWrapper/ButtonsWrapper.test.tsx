import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ButtonsWrapper } from './ButtonsWrapper';

describe('Welcome Page buttons wrapper component tests', () => {
  test('Must contain buttons elements', () => {
    const { getByTestId } = render(<ButtonsWrapper />, { wrapper: MemoryRouter });
    const signInButton = getByTestId('sign-in-btn');
    const signUpButton = getByTestId('sign-up-btn');

    expect(signInButton).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
  });
});
