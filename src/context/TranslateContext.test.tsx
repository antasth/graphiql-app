import { render, fireEvent } from '@testing-library/react';
import { TranslateProvider, useTranslate } from './TranslateContext';
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE } from '@/constants/languages';

vi.mock('@/context/TranslateContext', async () => {
  return vi.importActual('@/context/TranslateContext');
});

const TestComponent = () => {
  const { language, availableLanguages, setLanguage } = useTranslate();

  return (
    <div>
      <div data-testid="language">{language}</div>
      <div data-testid="available-languages">{availableLanguages.join(',')}</div>
      <button data-testid="set-language-ru" onClick={() => setLanguage('ru')}>
        Set Language to ES
      </button>
    </div>
  );
};

describe('TranslateProvider', () => {
  test('renders children without crashing', () => {
    const { getByText } = render(
      <TranslateProvider>
        <div>Test Child</div>
      </TranslateProvider>
    );

    const component = getByText('Test Child');
    expect(component).toBeInTheDocument();
  });

  test('provides default values to the context', () => {
    const { getByTestId } = render(
      <TranslateProvider>
        <TestComponent />
      </TranslateProvider>
    );

    const language = getByTestId('language');
    const allLanguages = getByTestId('available-languages');
    expect(language.textContent).toBe(DEFAULT_LANGUAGE);
    expect(allLanguages.textContent).toBe(AVAILABLE_LANGUAGES.join(','));
  });

  test('updates the language when setLanguage is called', () => {
    const { getByTestId } = render(
      <TranslateProvider>
        <TestComponent />
      </TranslateProvider>
    );

    fireEvent.click(getByTestId('set-language-ru'));
    const language = getByTestId('language');
    expect(language.textContent).toBe('ru');
  });
});
