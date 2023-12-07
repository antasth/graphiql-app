import type { Language, Translations } from '@/types';

const translations: Translations = {};

export const loadLanguages = async (languages: Language[]) => {
  for (const language of languages) {
    try {
      const res = await fetch(`./lang/${language}.json`);
      const data = await res.json();
      translations[language] = data;
    } catch (error) {
      console.error(`Failed to load '${language}' language`);
    }
  }
};

export const translate = (language: Language) => (key: string, defaultValue?: string) => {
  if (!translations[language]) {
    return defaultValue ?? key;
  }
  if (!translations[language][key]) {
    return defaultValue ?? key;
  }
  return translations[language][key];
};
