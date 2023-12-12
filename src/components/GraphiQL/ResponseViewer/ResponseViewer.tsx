import { Flex } from 'antd';
import { TextArea } from '@/components/GraphiQL/TextArea';
import { useTranslate } from '@/context/TranslateContext';

import styles from './ResponseViewer.module.scss';

interface IProps {
  readonly value?: string;
}

export function ResponseViewer({ value }: IProps) {
  const { t } = useTranslate();

  return (
    <Flex vertical className={styles.container}>
      <TextArea
        id={styles.viewer}
        placeholder={t('GraphQL.ResponseViewer.Placeholder', '')}
        value={value}
      />
    </Flex>
  );
}
