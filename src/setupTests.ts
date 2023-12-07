import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE } from './constants/languages';

afterEach(() => {
  cleanup();
});

vi.mock('@/context/TranslateContext', () => ({
  useTranslate: () => ({
    language: DEFAULT_LANGUAGE,
    availableLanguages: AVAILABLE_LANGUAGES,
    t: (key: string, value?: string) => value ?? key,
    setLanguage: vi.fn(),
  }),
}));
