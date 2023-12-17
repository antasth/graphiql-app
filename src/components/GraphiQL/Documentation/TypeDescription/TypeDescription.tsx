import { List, Space, Typography } from 'antd';

import type { ITypeRef } from '@/types';

import { Field } from './Field';
import { FieldList } from './FieldList';

interface IProps {
  readonly type: ITypeRef;
  readonly onSelectType: (name: string | null) => void;
}

export function TypeDescription({ type, onSelectType }: IProps) {
  return (
    <Space direction="vertical">
      <Typography.Title level={5}>{type.name}</Typography.Title>
      <Typography.Text>{type.description}</Typography.Text>
      {type.fields && (
        <FieldList
          title="Fields"
          dataSource={type.fields}
          renderItem={(field) => (
            <List.Item style={{ padding: 0 }}>
              <Field data={field} onSelectType={onSelectType} />
            </List.Item>
          )}
        />
      )}
      {type.inputFields && (
        <FieldList
          title="Fields"
          dataSource={type.inputFields}
          renderItem={(field) => (
            <List.Item style={{ padding: 0 }}>
              <Field data={field} onSelectType={onSelectType} />
            </List.Item>
          )}
        />
      )}
      {type.enumValues && (
        <FieldList
          title="Enum values"
          dataSource={type.enumValues}
          renderItem={(item) => <List.Item style={{ padding: 0 }}>{item.name}</List.Item>}
        />
      )}
    </Space>
  );
}
