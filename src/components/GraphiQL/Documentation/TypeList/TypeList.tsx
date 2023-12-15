import { Button, List, Typography } from 'antd';

import type { ITypeRef } from '@/types';

interface IProps {
  list: ITypeRef[];
  onSelectType: (name: string | null) => void;
}

export function TypeList({ list, onSelectType }: IProps) {
  return (
    <div>
      <Typography.Title level={5}>All Schema Types:</Typography.Title>
      <List
        size="small"
        split={false}
        dataSource={list}
        renderItem={(type) => (
          <List.Item style={{ padding: 0 }}>
            <Button type="link" onClick={() => onSelectType(type.name)}>
              {type.name}
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
}
