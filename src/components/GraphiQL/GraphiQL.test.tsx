import { fireEvent, render } from '@testing-library/react';
import { Mock } from 'vitest';

import { createFetchResponse } from '@/mocks/utils';
import { GraphiQL } from './GraphiQL';

beforeEach(() => {
  (fetch as Mock).mockReset();
});

describe('GraphiQL', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<GraphiQL />);
    const editor = getByTestId('graphql-editor');
    expect(editor).toBeInTheDocument();
  });

  test('updates the URL input value', () => {
    const url = 'https://example.com/graphql';
    const { getByRole } = render(<GraphiQL />);
    const urlInput = getByRole('combobox');
    fireEvent.change(urlInput, { target: { value: url } });
    expect(urlInput).toHaveValue(url);
  });

  test('send request', () => {
    const url = 'https://example.com/graphql';
    const query = 'exampleQuery';
    const mockData = { data: 'exampleData' };
    (fetch as Mock).mockResolvedValue(createFetchResponse(mockData));

    const { getByTestId, getByRole } = render(<GraphiQL />);
    const urlInput = getByRole('combobox');
    fireEvent.change(urlInput, { target: { value: url } });
    const editor = getByTestId('request-editor');
    fireEvent.change(editor, { target: { value: query } });
    const sendButton = getByTestId('btn-send-request');
    fireEvent.click(sendButton);

    expect(fetch).toHaveBeenCalled();
  });
});
