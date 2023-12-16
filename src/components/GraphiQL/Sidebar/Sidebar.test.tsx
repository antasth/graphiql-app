import { fireEvent, render } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(
      <Sidebar onShowDocumentation={vi.fn()} onPrettifying={vi.fn()} />
    );
    const sidebar = getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
  });

  test('show documentation', () => {
    const show = vi.fn();
    const { getByTestId } = render(<Sidebar onShowDocumentation={show} onPrettifying={vi.fn()} />);
    const btn = getByTestId('btn-show-docs');
    fireEvent.click(btn);
    expect(show).toHaveBeenCalledTimes(1);
  });

  test('run code prettifying', () => {
    const prettify = vi.fn();
    const { getByTestId } = render(
      <Sidebar onShowDocumentation={vi.fn()} onPrettifying={prettify} />
    );
    const btn = getByTestId('btn-prettify');
    fireEvent.click(btn);
    expect(prettify).toHaveBeenCalledTimes(1);
  });
});
