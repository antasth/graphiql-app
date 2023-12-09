import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE } from '@/constants/languages';
import { loadLanguage, translate } from '@/utils/translate';
import type { Language } from '@/types';
import { App } from 'antd';

interface ITranslateContext {
  language: Language;
  availableLanguages: Language[];
  isLoading: boolean;
  setLanguage: (language: Language) => void;
  t: (key: string, defaultValue?: string) => string;
}

const TranslateContext = createContext<ITranslateContext>({} as ITranslateContext);

export const TranslateProvider = ({ children }: PropsWithChildren) => {
  const { notification } = App.useApp();
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
        notification.error({
          message: 'Unexpected error',
          description: `Failed to load '${language.toUpperCase()}' language`,
        });
      } finally {
        setIsLoading(false);
      }
    };
    loadNewLanguage();
  }, [language, notification]);

  return <TranslateContext.Provider value={context}>{children}</TranslateContext.Provider>;
};

export const useTranslate = () => useContext(TranslateContext);
