import { Button, Flex, Typography } from 'antd';

import { IField, ITypeRef } from '@/types';

interface IProps {
  data: IField;
  onSelectType: (name: string | null) => void;
}

const getTypeName = (type: ITypeRef | null): string => {
  if (!type) {
    return 'null';
  }
  return type.name ?? getTypeName(type.ofType);
};

const getIsNonNull = (type: ITypeRef): boolean => {
  if (type.name) {
    return false;
  }
  if (type.kind === 'NON_NULL' && type.ofType && type.ofType.name) {
    return true;
  }
  if (!type.ofType) {
    return false;
  }
  return getIsNonNull(type.ofType);
};

const getTypeProps = (type: ITypeRef) => {
  const name = getTypeName(type);
  const isValueNonNull = getIsNonNull(type);
  const isList = type.kind === 'LIST' || type.ofType?.kind === 'LIST';
  const isListIsNonNull = type.kind === 'NON_NULL' && type.ofType?.kind === 'LIST';
  return {
    name,
    isValueNonNull,
    isList,
    isListIsNonNull,
  };
};

export function Field({ data, onSelectType }: IProps) {
  const type = getTypeProps(data.type);
  return (
    <Flex vertical>
      <Flex align="center" gap="0.2em" wrap="wrap">
        <Typography.Text code>{data.name}</Typography.Text>
        <Typography.Text>:</Typography.Text>
        <Flex align="center">
          {type.isList && '['}
          <Button type="link" style={{ padding: 0 }} onClick={() => onSelectType(type.name)}>
            {type.name}
          </Button>
          {type.isValueNonNull && '!'}
          {type.isList && ']'}
          {type.isListIsNonNull && '!'}
        </Flex>
      </Flex>
      {data.description && (
        <Typography.Text style={{ marginBottom: 16 }}>{data.description}</Typography.Text>
      )}
    </Flex>
  );
}
