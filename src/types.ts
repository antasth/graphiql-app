export type Language = 'en' | 'ru';

export type Translations = {
  [language: string]: {
    [key: string]: string;
  };
};
