import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE } from '@/constants/languages';
import { loadLanguage, translate } from '@/utils/translate';
import type { Language } from '@/types';

interface ITranslateContext {
  language: Language;
  availableLanguages: Language[];
  isLoading: boolean;
  setLanguage: (language: Language) => void;
  t: (key: string, defaultValue?: string) => string;
}

const TranslateContext = createContext<ITranslateContext>({} as ITranslateContext);

export const TranslateProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE);
  const [isLoading, setIsLoading] = useState(false);
  const t = translate(language);

  const context = {
    language,
    availableLanguages: AVAILABLE_LANGUAGES,
    isLoading,
    setLanguage,
    t,
  };

  useEffect(() => {
    const loadNewLanguage = async () => {
      setIsLoading(true);
      try {
        await loadLanguage(language);
      } catch (error) {
        console.error(`Failed to load '${language}' language`);
      } finally {
        setIsLoading(false);
      }
    };
    loadNewLanguage();
  }, [language]);

  return <TranslateContext.Provider value={context}>{children}</TranslateContext.Provider>;
};

export const useTranslate = () => useContext(TranslateContext);
