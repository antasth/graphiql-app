import { Button, Flex, Tabs } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import { ChangeEvent, useState } from 'react';
import { TextArea } from '@/components/GraphiQL/TextArea';
import { useTranslate } from '@/context/TranslateContext';
import { Headers } from './Headers';
import { Variables } from './Variables';

import styles from './RequestEditor.module.scss';

interface IProps {
  readonly query: string;
  readonly onChangeQuery: (value: string) => void;
  readonly variables: string;
  readonly onChangeVariables: (value: string) => void;
  readonly headers: string;
  readonly onChangeHeaders: (value: string) => void;
}

export function RequestEditor({
  query,
  onChangeQuery,
  variables,
  onChangeVariables,
  headers,
  onChangeHeaders,
}: IProps) {
  const [isOpenPanel, setIsOpenPanel] = useState(false);

  const { t } = useTranslate();

  const showPanel = () => {
    setIsOpenPanel((prevState) => !prevState);
  };

  return (
    <Flex vertical className={styles.container}>
      <TextArea
        id={styles.editor}
        placeholder={t('GraphQL.RequestEditor.Placeholder', '')}
        value={query}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => onChangeQuery(event.target.value)}
      />

      <Tabs
        type="card"
        style={{ width: '100%' }}
        tabBarExtraContent={
          <Button
            icon={<UpOutlined />}
            style={{ transform: isOpenPanel ? 'rotate(-180deg)' : '' }}
            shape="circle"
            size="small"
            type="text"
            onClick={showPanel}
          />
        }
        items={[
          {
            label: t('GraphQL.Variables', 'Variables'),
            key: 'variables',
            children: <Variables value={variables} onChange={onChangeVariables} />,
            style: { display: isOpenPanel ? '' : 'none', height: '10rem' },
          },
          {
            label: t('GraphQL.Headers', 'Headers'),
            key: 'headers',
            children: <Headers value={headers} onChange={onChangeHeaders} />,
            style: { display: isOpenPanel ? '' : 'none', height: '10rem' },
          },
        ]}
      />
    </Flex>
  );
}
