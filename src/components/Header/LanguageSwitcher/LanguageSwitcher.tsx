import Icon from '@ant-design/icons';
import { Flex, Select } from 'antd';
import type { SelectProps } from 'antd';
import { useTranslate } from '@/context/TranslateContext';
import flagEn from '@/assets/svg/EN.svg?react';
import flagRu from '@/assets/svg/RU.svg?react';
import { Language } from '@/types';

const getFlag = (language: Language) => {
  switch (language) {
    case 'en':
      return flagEn;
    case 'ru':
      return flagRu;
    default:
      return null;
  }
};

export function LanguageSwitcher() {
  const { language, availableLanguages, setLanguage } = useTranslate();

  const handleChange = (value: Language) => {
    setLanguage(value);
  };

  const getOptions = (): SelectProps['options'] => {
    return availableLanguages.map((lang) => ({
      value: lang,
      label: lang.toLocaleUpperCase(),
      flag: getFlag(lang),
    }));
  };

  return (
    <Select
      defaultValue={language}
      onChange={handleChange}
      dropdownStyle={{ width: 'min-content' }}
      placement="bottomRight"
      options={getOptions()}
      optionRender={(option) => (
        <Flex justify="flex-end" gap="small">
          {option.data.flag && <Icon component={option.data.flag} />}
          {option.data.label}
        </Flex>
      )}
    />
  );
}
