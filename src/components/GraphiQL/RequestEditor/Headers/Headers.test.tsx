import { fireEvent, render } from '@testing-library/react';
import { Headers } from './Headers';

describe('Headers', () => {
  test('renders correctly', () => {
    const { getByRole } = render(<Headers value="" onChange={vi.fn()} />);
    const textbox = getByRole('textbox');
    expect(textbox).toBeInTheDocument();
  });

  test('displays the provided value', () => {
    const value = 'Testing headers';
    const { getByDisplayValue } = render(<Headers value={value} onChange={vi.fn()} />);
    const displayValue = getByDisplayValue(value);
    expect(displayValue).toBeInTheDocument();
  });

  test('changes value', () => {
    const newValue = 'New Headers';
    const changeHandler = vi.fn();
    const { getByRole } = render(<Headers value="" onChange={changeHandler} />);
    const textbox = getByRole('textbox');
    fireEvent.change(textbox, { target: { value: newValue } });
    expect(changeHandler).toHaveBeenCalledTimes(1);
    expect(changeHandler).toHaveBeenCalledWith(newValue);
  });
});
