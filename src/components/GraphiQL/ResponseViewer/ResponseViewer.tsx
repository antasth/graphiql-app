import { Flex } from 'antd';

import { noctisLilacInit } from '@uiw/codemirror-theme-noctis-lilac';
import ReactCodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@uiw/react-codemirror';
import { jsonLanguage } from '@codemirror/lang-json';

import { useTranslate } from '@/context/TranslateContext';

import styles from './ResponseViewer.module.scss';

interface IProps {
  readonly value?: string;
}

const theme = noctisLilacInit({
  settings: {
    background: '#fff',
    gutterBackground: '#fff',
    lineHighlight: '#8a91991a',
  },
});

export function ResponseViewer({ value }: IProps) {
  const { t } = useTranslate();

  return (
    <Flex vertical className={styles.container}>
      <ReactCodeMirror
        value={value}
        theme={theme}
        className={styles.viewer}
        placeholder={t('GraphQL.ResponseViewer.Placeholder', '')}
        readOnly
        extensions={[jsonLanguage, EditorView.editable.of(false)]}
      />
    </Flex>
  );
}
