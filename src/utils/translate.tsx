import flagEn from '@/assets/svg/EN.svg?react';
import flagRu from '@/assets/svg/RU.svg?react';
import type { Language, Translations } from '@/types';

const translations: Translations = {};

export const loadLanguage = async (language: Language) => {
  if (translations[language]) {
    return;
  }

  const res = await fetch(`./lang/${language}.json`);
  const data = await res.json();
  translations[language] = data;
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

export const getFlag = (language: Language) => {
  switch (language) {
    case 'en':
      return flagEn;
    case 'ru':
      return flagRu;
    default:
      return null;
  }
};
