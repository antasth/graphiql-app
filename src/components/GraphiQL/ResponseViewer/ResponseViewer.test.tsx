import { render } from '@testing-library/react';
import { ResponseViewer } from './ResponseViewer';

describe('ResponseViewer', () => {
  test('renders correctly', () => {
    const { getByRole } = render(<ResponseViewer />);
    const textbox = getByRole('textbox');
    expect(textbox).toBeInTheDocument();
  });

  test('displays the provided value', () => {
    const value = 'Testing response';
    const { getByDisplayValue } = render(<ResponseViewer value={value} />);
    const displayValue = getByDisplayValue(value);
    expect(displayValue).toBeInTheDocument();
  });
});
