import { Button, Empty, Flex, List, Typography } from 'antd';

import { useTranslate } from '@/context/TranslateContext';
import type { IGraphQLType } from '@/types';

interface IProps {
  readonly list: IGraphQLType[];
  readonly onSelectType: (name: string | null) => void;
}

export function TypeList({ list, onSelectType }: IProps) {
  const { t } = useTranslate();
  return (
    <Flex vertical data-testid="type-list" style={{ width: '100%' }}>
      <Typography.Title level={5}>
        {t('GraphQL.Documentation.AllSchemaTypes', 'All Schema Types')}:
      </Typography.Title>
      {list.length > 0 && (
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
      )}
      {list.length === 0 && (
        <Flex style={{ margin: 'auto' }}>
          <Empty
            description={t('Application.NoData', 'No data')}
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        </Flex>
      )}
    </Flex>
  );
}
