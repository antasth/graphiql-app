import { Button, Flex, Tabs } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import { ChangeEvent, useState } from 'react';
import { TextArea } from '@/components/GraphiQL/TextArea';
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

  const showPanel = () => {
    setIsOpenPanel((prevState) => !prevState);
  };

  return (
    <Flex vertical className={styles.container}>
      <TextArea
        style={{
          height: '100%',
          resize: 'none',
          border: 'none',
          marginBottom: '8px',
          paddingRight: '56px',
        }}
        placeholder="# Write your query here"
        value={query}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => onChangeQuery(event.target.value)}
      />

      <Tabs
        type="card"
        style={{ width: '100%' }}
        tabBarExtraContent={
          <Button
            icon={<UpOutlined />}
            style={{
              transform: isOpenPanel ? 'rotate(-180deg)' : '',
              transitionDuration: '0.5s',
              color: '#808080',
            }}
            shape="circle"
            size="small"
            type="text"
            onClick={showPanel}
          />
        }
        items={[
          {
            label: 'Variables',
            key: 'variables',
            children: <Variables value={variables} onChange={onChangeVariables} />,
            style: { display: isOpenPanel ? '' : 'none', height: '140px' },
          },
          {
            label: 'Headers',
            key: 'headers',
            children: <Headers value={headers} onChange={onChangeHeaders} />,
            style: { display: isOpenPanel ? '' : 'none', height: '140px' },
          },
        ]}
      />
    </Flex>
  );
}
