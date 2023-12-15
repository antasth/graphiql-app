import { List, Typography } from 'antd';

import type { ITypeRef } from '@/types';

import { Field } from './Field';

interface IProps {
  type: ITypeRef;
  onSelectType: (name: string | null) => void;
}

export function TypeDescription({ type, onSelectType }: IProps) {
  return (
    <div>
      <Typography.Title level={5}>{type.name}</Typography.Title>
      <Typography.Text>{type.description}</Typography.Text>
      {type.fields && (
        <List
          size="small"
          split={false}
          dataSource={type.fields}
          renderItem={(field) => (
            <List.Item style={{ padding: 0 }}>
              <Field data={field} onSelectType={onSelectType} />
            </List.Item>
          )}
        />
      )}
      {type.inputFields && (
        <List
          size="small"
          split={false}
          dataSource={type.inputFields}
          renderItem={(field) => (
            <List.Item style={{ padding: 0 }}>
              <Field data={field} onSelectType={onSelectType} />
            </List.Item>
          )}
        />
      )}
    </div>
  );
}
