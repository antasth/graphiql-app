import { Flex } from 'antd';

import { IField } from '@/types';

import { TypeName } from '../TypeName';

interface IProps {
  readonly field: IField;
  readonly onSelectType: (name: string | null) => void;
}

export function ArgsList({ field, onSelectType }: IProps) {
  return (
    <Flex align="center">
      <span>(</span>
      <Flex align="center" gap="0.2em" wrap="wrap">
        {field.args.map((arg, index) => (
          <Flex key={arg.name} align="center" gap="0.2em">
            <span style={{ color: '#FF6B8B' }}>{arg.name}:</span>
            <TypeName type={arg.type} onSelectType={onSelectType} />
            {index < field.args.length - 1 && <span>,</span>}
          </Flex>
        ))}
      </Flex>
      <span>)</span>
    </Flex>
  );
}
