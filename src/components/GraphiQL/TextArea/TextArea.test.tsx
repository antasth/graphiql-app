import { render } from '@testing-library/react';
import { TextArea } from './TextArea';

describe('TextArea', () => {
  test('renders correctly', () => {
    const { getByRole } = render(<TextArea />);
    const textbox = getByRole('textbox');
    expect(textbox).toBeInTheDocument();
  });
});
