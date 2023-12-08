import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as context from './context/TranslateContext';
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE } from './constants/languages';

afterEach(() => {
  cleanup();
});

vi.mock('@/context/TranslateContext', async () => {
  const actual: typeof context = await vi.importActual('@/context/TranslateContext');
  return {
    ...actual,
    useTranslate: () => ({
      language: DEFAULT_LANGUAGE,
      availableLanguages: AVAILABLE_LANGUAGES,
      t: (key: string, value?: string) => value ?? key,
      setLanguage: vi.fn(),
    }),
  };
});
