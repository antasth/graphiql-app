import { ChangeEvent } from 'react';

import { TextArea } from '@/components/GraphiQL/TextArea';
import { useTranslate } from '@/context/TranslateContext';

import styles from './Variables.module.scss';

interface IProps {
  readonly value: string;
  readonly onChange: (value: string) => void;
}

export function Variables({ value, onChange }: IProps) {
  const { t } = useTranslate();

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <TextArea
      id={styles.variables}
      placeholder={t('GraphQL.Variables.Placeholder', '')}
      value={value}
      onChange={onChangeHandler}
    />
  );
}
