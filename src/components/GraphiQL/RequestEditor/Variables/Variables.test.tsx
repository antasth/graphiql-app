import { fireEvent, render } from '@testing-library/react';
import { Variables } from './Variables';

describe('Variables', () => {
  test('renders correctly', () => {
    const { getByRole } = render(<Variables value="" onChange={vi.fn()} />);
    const textbox = getByRole('textbox');
    expect(textbox).toBeInTheDocument();
  });

  test('displays the provided value', () => {
    const value = 'Testing variables';
    const { getByDisplayValue } = render(<Variables value={value} onChange={vi.fn()} />);
    const displayValue = getByDisplayValue(value);
    expect(displayValue).toBeInTheDocument();
  });

  test('changes value', () => {
    const newValue = 'New Variables';
    const changeHandler = vi.fn();
    const { getByRole } = render(<Variables value="" onChange={changeHandler} />);
    const textbox = getByRole('textbox');
    fireEvent.change(textbox, { target: { value: newValue } });
    expect(changeHandler).toHaveBeenCalledTimes(1);
    expect(changeHandler).toHaveBeenCalledWith(newValue);
  });
});
