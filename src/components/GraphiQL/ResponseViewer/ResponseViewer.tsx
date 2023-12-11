import { Flex } from 'antd';
import { TextArea } from '@/components/GraphiQL/TextArea';

import styles from './ResponseViewer.module.scss';

interface IProps {
  readonly value: string;
}

export function ResponseViewer({ value }: IProps) {
  return (
    <Flex vertical className={styles.container}>
      <TextArea
        style={{ height: '100%', resize: 'none', border: 'none' }}
        placeholder="# The result will be displayed here"
        value={value}
      />
    </Flex>
  );
}
