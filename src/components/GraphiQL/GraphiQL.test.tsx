import { fireEvent, render } from '@testing-library/react';
import { GraphiQL } from './GraphiQL';

describe('GraphiQL', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<GraphiQL />);
    const editor = getByTestId('graphql-editor');
    expect(editor).toBeInTheDocument();
  });

  test('updates the URL input value', () => {
    const url = 'https://example.com/graphql';
    const { getByTestId } = render(<GraphiQL />);
    const urlInput = getByTestId('url-input');
    fireEvent.change(urlInput, { target: { value: url } });
    expect(urlInput).toHaveValue(url);
  });

  test('show documentation', () => {
    const { getByTestId, getByRole } = render(<GraphiQL />);
    const btn = getByTestId('btn-show-docs');
    fireEvent.click(btn);
    const drawer = getByRole('dialog');
    expect(drawer).toBeInTheDocument();
  });
});
