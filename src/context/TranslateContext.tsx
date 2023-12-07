import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE } from '@/constants/languages';
import { translate } from '@/utils/translate';
import type { Language } from '@/types';

interface ITranslateContext {
  language: Language;
  availableLanguages: Language[];
  setLanguage: (language: Language) => void;
  t: (key: string, defaultValue?: string) => string;
}

const initialValue: ITranslateContext = {
  language: DEFAULT_LANGUAGE,
  availableLanguages: AVAILABLE_LANGUAGES,
  setLanguage: () => {},
  t: (key: string) => key,
};

const TranslateContext = createContext<ITranslateContext>(initialValue);

export const TranslateProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE);
  const t = translate(language);
  const context = {
    language,
    availableLanguages: AVAILABLE_LANGUAGES,
    setLanguage,
    t,
  };
  return <TranslateContext.Provider value={context}>{children}</TranslateContext.Provider>;
};

export const useTranslate = () => useContext(TranslateContext);
