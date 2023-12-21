import { ChangeEvent } from 'react';

import { TextArea } from '@/components/GraphiQL/TextArea';
import { useTranslate } from '@/context/TranslateContext';

import styles from './Headers.module.scss';

interface IProps {
  readonly value: string;
  readonly onChange: (value: string) => void;
}

export function Headers({ value, onChange }: IProps) {
  const { t } = useTranslate();

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <TextArea
      id={styles.headers}
      placeholder={t('GraphQL.Headers.Placeholder', '')}
      value={value}
      onChange={onChangeHandler}
    />
  );
}
