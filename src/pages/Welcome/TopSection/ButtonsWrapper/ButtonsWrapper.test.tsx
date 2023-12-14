import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ButtonsWrapper } from './ButtonsWrapper';

describe('Welcome Page buttons wrapper component tests', () => {
  test('Must contain buttons elements', () => {
    const { getByText } = render(<ButtonsWrapper />, { wrapper: MemoryRouter });
    const signInButton = getByText('Sign In');
    const signUpButton = getByText('Sign Up');

    expect(signInButton).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
  });
});
